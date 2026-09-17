import axios from 'axios';
import { storage } from '@/lib/storage';
import { toast } from 'sonner';

const envUrl = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = (envUrl && envUrl.trim() !== '' && envUrl !== '/') ? envUrl : 'https://centrallly.runasp.net';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT to every request
apiClient.interceptors.request.use((config) => {
  const token = storage.getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Shared in-flight refresh call every concurrent 401 awaits, instead of a boolean flag +
// a separately-tracked queue. The previous isRefreshing/failedQueue pair had a real race:
// it only set originalRequest._retry on the ONE request that triggered the refresh call,
// never on the requests served from the queue - and it reset isRefreshing back to false
// as soon as the refresh POST resolved, before every queued request had actually been
// retried. A page like the dashboard fires 4-8 requests in parallel on mount; when the
// access token had expired, that's 4-8 near-simultaneous 401s. If any queued request's
// retry itself 401'd (or a fresh request 401'd in that reset-too-early window), it had no
// _retry guard, so it would kick off a SECOND independent refresh call - but refresh
// tokens are single-use/rotated (confirmed via `POST /auth/refresh` re-tested here: reusing
// an already-consumed refreshToken correctly comes back 401 "رمز التجديد غير صالح"), so
// whichever of the two concurrent refresh calls lost the race got a 401 back and force-
// logged the user out, even though the FIRST refresh moments earlier had actually succeeded.
// Reproduced live: expiring the access token while several widgets were loading recovered
// fine the first time, then hit this exact race and bounced to /login on the next wave of
// requests. A single shared promise (only cleared once fully settled) plus _retry on every
// request that goes through this branch closes both gaps.
let refreshPromise: Promise<string> | null = null;

async function performRefresh(): Promise<string> {
  const token = storage.getToken();
  const refreshToken = storage.getRefreshToken();

  if (!token || !refreshToken) {
    throw new Error('No token to refresh');
  }

  const { data } = await axios.post(`${BASE_URL}/auth/refresh`, { token, refreshToken });

  storage.setToken(data.token);
  storage.setRefreshToken(data.refreshToken);
  if (data.permissions) {
    storage.setPermissions(data.permissions);
  }
  // The login flow persists both of these (see useLogin) - refresh returns the same
  // shape but was only ever writing permissions, so a role change picked up by a
  // refreshed token still read as the OLD role from storage until the next full login.
  if (data.role) {
    storage.setRoles(data.role);
  }
  apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
  return data.token as string;
}

// Global error handling
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!refreshPromise) {
        refreshPromise = performRefresh().finally(() => {
          refreshPromise = null;
        });
      }

      try {
        const newToken = await refreshPromise;
        originalRequest.headers.Authorization = 'Bearer ' + newToken;
        return apiClient(originalRequest);
      } catch (err) {
        storage.clearToken();
        storage.clearRefreshToken();
        storage.clearPermissions();
        window.location.href = '/login';
        return Promise.reject(err);
      }
    } else if (error.response?.status >= 500) {
      toast.error('حدث خطأ في الخادم (Server Error).');
    }
    return Promise.reject(error);
  }
);

