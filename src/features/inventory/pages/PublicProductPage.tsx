import { useParams } from 'react-router-dom';
import { Loader2, PackageX, Boxes, Tag, Layers } from 'lucide-react';
import { usePublicProduct } from '@/features/inventory/hooks/useInventory';
import { isMaintenanceProduct, ProductUsageDto } from '@/features/inventory/schemas/inventorySchemas';
import { Avatar } from '@/shared/components/ui/Avatar';
import { tokens } from '@/shared/styles/tokens';
import { formatNumber } from '@/shared/utils/currency';

const usageLabels: Record<ProductUsageDto, string> = {
  [ProductUsageDto.SaleOnly]: 'بيع فقط',
  [ProductUsageDto.MaintenanceOnly]: 'صيانة فقط',
  [ProductUsageDto.SaleAndMaintenance]: 'بيع أو صيانة',
};

// Read-only by construction: no mutation hooks, no edit/delete affordances anywhere
// on this page. It's reached via a link handed to people who never log in, powered by
// the anonymous GET /products/{id}/public endpoint (see Centraly-Backend's
// ProductController) which already strips supplier/cost fields server-side.
export function PublicProductPage() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, isError } = usePublicProduct(id!);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10" dir="rtl">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-black">س</div>
          <span className="font-black text-lg text-gray-900">سنترالي</span>
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-gray-400 w-8 h-8" />
          </div>
        )}

        {isError && (
          <div className={`${tokens.card} p-10 flex flex-col items-center text-center gap-3`}>
            <PackageX className="text-gray-300" size={48} />
            <h1 className="text-lg font-bold text-gray-700">المنتج غير موجود</h1>
            <p className="text-sm text-gray-500">الرابط غير صحيح أو تم حذف المنتج.</p>
          </div>
        )}

        {product && (
          <div className={`${tokens.card} overflow-hidden`}>
            <div className="p-6 flex gap-5 items-start border-b border-gray-100">
              <div className="w-28 h-28 shrink-0 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden">
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
                ) : (
                  <Avatar name={product.name || '?'} size="xl" />
                )}
              </div>
              <div className="min-w-0">
                <h1 className="text-2xl font-black text-gray-900 truncate">{product.name}</h1>
                <p className="text-gray-500 mt-1 font-mono text-sm"># {product.barcode || 'بدون باركود'}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {product.isOutOfStock ? (
                    <span className={tokens.badge.danger}>نفد من المخزون</span>
                  ) : product.isLowStock ? (
                    <span className={tokens.badge.warning}>الكمية منخفضة</span>
                  ) : (
                    <span className={tokens.badge.success}>متوفر</span>
                  )}
                  <span className={tokens.badge.indigo}>{usageLabels[product.usage]}</span>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-2 gap-4 border-b border-gray-100">
              <div className="flex items-center gap-2 text-sm">
                <Boxes size={16} className="text-gray-400" />
                <span className="text-gray-500">القسم:</span>
                <span className="font-semibold text-gray-800">{product.department?.name || '---'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Tag size={16} className="text-gray-400" />
                <span className="text-gray-500">الفئة:</span>
                <span className="font-semibold text-gray-800">{product.category?.name || '---'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Layers size={16} className="text-gray-400" />
                <span className="text-gray-500">الكمية المتاحة:</span>
                <span className="font-semibold text-gray-800">{product.totalQuantity}</span>
              </div>
            </div>

            {Object.keys(product.properties || {}).length > 0 && (
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-sm font-bold text-gray-700 mb-3">خصائص المنتج</h2>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(product.properties).map(([key, value]) => (
                    <span key={key} className={tokens.badge.neutral}>
                      {key}: {value}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6">
              <h2 className="text-sm font-bold text-gray-700 mb-3">الأسعار والدفعات المتاحة</h2>
              {product.batches.length === 0 ? (
                <p className="text-sm text-gray-500">لا توجد دفعات متاحة حاليًا.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-right min-w-[420px]">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-500 text-xs">
                        <th className="py-2 font-semibold">الكمية</th>
                        <th className="py-2 font-semibold">سعر الجملة</th>
                        <th className="py-2 font-semibold">سعر التجزئة</th>
                        {isMaintenanceProduct(product.usage) && <th className="py-2 font-semibold">سعر الصيانة</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {product.batches.map((batch) => (
                        <tr key={batch.batchId}>
                          <td className="py-3 font-semibold text-gray-800">{batch.availableQuantity}</td>
                          <td className="py-3 font-mono font-bold text-amber-600">{formatNumber(batch.wholesalePrice)} ج.م</td>
                          <td className="py-3 font-mono font-bold text-emerald-600">{formatNumber(batch.retailPrice)} ج.م</td>
                          {isMaintenanceProduct(product.usage) && (
                            <td className="py-3 font-mono font-bold text-gray-700">{formatNumber(batch.maintenancePrice)} ج.م</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-6">هذا رابط مشاركة للمشاهدة فقط.</p>
      </div>
    </div>
  );
}
