const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://localhost:7073';

/**
 * Turns a backend-relative image path into an absolute URL. Was duplicated as
 * `resolveProductImageUrl` (sales/utils/posUtils.ts) and inline a second time in the
 * wallets pages - centralized here so both, plus EntityImage, share one implementation.
 */
export function resolveImageUrl(imageUrl?: string | null): string | undefined {
  if (!imageUrl) return undefined;
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) return imageUrl;
  const base = API_BASE_URL.replace(/\/$/, '');
  return `${base}${imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`}`;
}
