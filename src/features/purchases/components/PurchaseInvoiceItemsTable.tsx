import { Package, ShoppingCart } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
interface PurchaseInvoiceItem {
  purchaseInvoiceItemId?: string;
  product?: {
    name?: string;
    barcode?: string;
    imageUrl?: string;
  };
  quantity: number;
  unitCost: number;
  lineTotal: number;
}
interface PurchaseInvoiceItemsTableProps {
  items: PurchaseInvoiceItem[];
  totalAmount: number;
}
export function PurchaseInvoiceItemsTable({ items, totalAmount }: PurchaseInvoiceItemsTableProps) {
  return (
    <div className={tokens.card}>
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="font-bold text-gray-800">
          الأصناف
          <span className="mr-2 text-sm font-normal text-gray-400">({items?.length || 0} صنف)</span>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-right text-sm">
          <thead>
            <tr className="text-gray-500 text-xs border-b border-gray-100">
              <th className="px-5 py-3 font-semibold whitespace-nowrap">الصنف</th>
              <th className="px-5 py-3 font-semibold text-center whitespace-nowrap">الكمية</th>
              <th className="px-5 py-3 font-semibold text-center whitespace-nowrap">سعر الشراء (للوحدة)</th>
              <th className="px-5 py-3 font-semibold text-left whitespace-nowrap">الإجمالي</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {items?.map((item, index) => (
              <tr key={item.purchaseInvoiceItemId ?? index} className="hover:bg-gray-50 transition-colors">
                {}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    {item.product?.imageUrl ? (
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name ?? ''}
                        className="w-10 h-10 rounded-lg object-cover border border-gray-100 shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 shrink-0">
                        <Package size={18} />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-800">{item.product?.name || '-'}</p>
                      {item.product?.barcode && (
                        <p className="text-xs text-gray-400 dir-ltr mt-0.5">{item.product.barcode}</p>
                      )}
                    </div>
                  </div>
                </td>
                {}
                <td className="px-5 py-4 text-center">
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 font-bold text-sm px-2.5 py-0.5 rounded-full">
                    <ShoppingCart size={12} />
                    {item.quantity}
                  </span>
                </td>
                {}
                <td className="px-5 py-4 text-center text-gray-700 font-medium">
                  {formatCurrency(item.unitCost)}
                </td>
                {}
                <td className="px-5 py-4 text-left font-bold text-gray-900">
                  {formatCurrency(item.lineTotal)}
                </td>
              </tr>
            ))}
          </tbody>
          {}
          <tfoot className="bg-gray-50 border-t border-gray-200">
            <tr>
              <td colSpan={3} className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                الإجمالي الكلي للفاتورة
              </td>
              <td className="px-5 py-3 text-left font-bold text-lg text-gray-900">
                {formatCurrency(totalAmount)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}