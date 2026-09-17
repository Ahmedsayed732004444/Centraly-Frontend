import { Calendar, Truck, Package, Plus, MoreHorizontal } from 'lucide-react';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
import { formatDateOnly } from '@/shared/utils/date';
import { formatNumber } from '@/shared/utils/currency';

interface ProductBatchesCardProps {
  product: ProductResponse;
}

export function ProductBatchesCard({ product }: ProductBatchesCardProps) {
  const batches = product.batches || [];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative z-10">
      {/* Added pr-40 to avoid overlapping with the absolute positioned image from the header */}
      <div className="p-4 pr-40 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-sm">
            <Package size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">الدفعات (Batches)</h2>
            <p className="text-xs text-gray-500 mt-0.5">تفاصيل الكميات والأسعار من الموردين</p>
          </div>
        </div>
        <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-bold text-gray-700 shadow-sm">
          إجمالي الدفعات: {batches.length}
        </div>
      </div>
      
      <div className="p-0 overflow-x-auto">
        <table className="w-full text-right border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-white border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-4 py-3 font-bold w-1/4">المورد</th>
              <th className="px-4 py-3 font-bold">تاريخ الاستلام</th>
              <th className="px-4 py-3 font-bold text-center">الكمية المتاحة</th>
              <th className="px-4 py-3 font-bold text-left">سعر الشراء</th>
              <th className="px-4 py-3 font-bold text-left">سعر الجملة</th>
              <th className="px-4 py-3 font-bold text-left">سعر التجزئة</th>
              <th className="px-4 py-3 font-bold text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {batches.length > 0 ? (
              batches.map((batch) => (
                <tr key={batch.batchId} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Truck size={16} className="text-gray-400" />
                      <span className="font-bold text-gray-900 text-sm">{batch.supplierName || '---'}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={14} className="text-gray-400" />
                      <span className="font-semibold text-gray-800 text-sm">
                        {formatDateOnly(batch.dateReceived)}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full border border-emerald-100 text-xs">
                      {batch.availableQuantity}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-left font-mono font-bold text-gray-800 text-sm">
                    {formatNumber(batch.purchasePrice)} <span className="text-gray-400 text-xs">ج.م</span>
                  </td>
                  <td className="px-4 py-3 text-left font-mono font-bold text-amber-600 text-sm">
                    {formatNumber(batch.wholesalePrice)} <span className="text-amber-400 text-xs">ج.م</span>
                  </td>
                  <td className="px-4 py-3 text-left font-mono font-bold text-emerald-600 text-base">
                    {formatNumber(batch.retailPrice)} <span className="text-emerald-400 text-xs">ج.م</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500 text-sm">
                  لا يوجد دفعات مسجلة
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="p-3 bg-gray-50/50 border-t border-gray-100">
        <button className="w-full py-2.5 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg font-bold text-sm transition-colors border border-blue-200/50">
          <Plus size={16} />
          إضافة دفعة جديدة
        </button>
      </div>
    </div>
  );
}
