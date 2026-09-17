// A plain `?? fallback` isn't enough here: Vercel's dashboard stores an unset env var
// as an empty string rather than leaving it undefined, and this project's env has also
// been deployed with it set to "/" by mistake. Both slip past `??` and were caught by
// axios.ts's more defensive check - signalr.ts and resolveImageUrl.ts each duplicated a
// weaker version, so a misconfigured env var pointed SignalR and image URLs at the
// frontend's own Vercel origin instead of the API host. Centralized here so there's only
// one fallback rule to get right.
const envUrl = import.meta.env.VITE_API_BASE_URL;
export const API_BASE_URL = (envUrl && envUrl.trim() !== '' && envUrl !== '/')
  ? envUrl
  : 'https://centrallly.runasp.net';
