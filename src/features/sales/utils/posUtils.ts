export { resolveImageUrl as resolveProductImageUrl } from '@/shared/utils/resolveImageUrl';

export function formatProductSpecs(properties?: Record<string, string>): string {
  if (!properties) return '';
  return Object.values(properties).filter(Boolean).join(' - ');
}

export type StockStatus = 'in' | 'low' | 'out';

export function getStockStatus(
  totalQuantity: number,
  isOutOfStock: boolean,
  isLowStock: boolean,
  minQuantityAlert: number
): StockStatus {
  if (isOutOfStock || totalQuantity <= 0) return 'out';
  if (isLowStock || totalQuantity <= minQuantityAlert) return 'low';
  return 'in';
}
