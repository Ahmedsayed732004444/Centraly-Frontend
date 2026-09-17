import { AlertTriangle } from 'lucide-react';

interface ProductStatusBadgeProps {
  quantity: number;
  reorderLevel: number;
}

/**
 * Shows a colored dot/icon + quantity text.
 * Green dot = stock OK, Red warning icon = low stock (below reorder level).
 */
export function ProductStatusBadge({ quantity, reorderLevel }: ProductStatusBadgeProps) {
  const isOutOfStock = quantity <= 0;
  const isLowStock = quantity > 0 && quantity <= reorderLevel;
  
  if (isOutOfStock) {
    return (
      <div className="flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-md border border-red-100 w-fit">
        <AlertTriangle size={14} className="text-red-600" />
        <span className="text-sm font-bold">
          نفد المخزون
        </span>
      </div>
    );
  }

  if (isLowStock) {
    return (
      <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md border border-amber-200 w-fit">
        <AlertTriangle size={14} className="text-amber-600" />
        <span className="text-sm font-bold">
          مخزون منخفض
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-md border border-green-100 w-fit">
      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
      <span className="text-sm font-bold">
        متوفر
      </span>
    </div>
  );
}
