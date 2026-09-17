import { formatCurrency } from '@/shared/utils/currency';
import { SalesInvoiceResponse } from '../schemas/salesSchemas';
interface ReturnItemsTableProps {
  invoice: SalesInvoiceResponse;
  returnItems: { id: string; returnQty: number }[];
  onReturnQtyChange: (itemId: string, maxQty: number, qty: number) => void;
}
export function ReturnItemsTable({ invoice, returnItems, onReturnQtyChange }: ReturnItemsTableProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">المنتجات</h3>
      <div className="border border-gray-200 rounded-lg overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm text-right">
          <thead className="text-gray-500 font-semibold text-xs border-b border-gray-100">
            <tr>
              <th className="px-4 py-3">المنتج</th>
              <th className="px-4 py-3">السعر</th>
              <th className="px-4 py-3">الكمية المباعة</th>
              <th className="px-4 py-3">كمية الإرجاع</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {invoice.items.map(item => {
              const currentQty = returnItems.find(i => i.id === item.id)?.returnQty || 0;
              const maxAllowed = item.quantity - (item.returnedQuantity || 0);
              return (
                <tr key={item.id}>
                  <td className="px-4 py-3 font-medium">{item.productName || item.productId}</td>
                  <td className="px-4 py-3">{formatCurrency(item.unitPrice)}</td>
                  <td className="px-4 py-3">
                    {item.quantity}
                    {item.returnedQuantity > 0 && (
                      <span className="text-xs text-red-500 mr-2 block">(تم إرجاع {item.returnedQuantity} مسبقاً)</span>
                    )}
                  </td>
                  <td className="px-4 py-3 w-48">
                    <input
                      type="number"
                      min="0"
                      max={maxAllowed}
                      disabled={maxAllowed === 0}
                      value={currentQty}
                      onChange={(e) => onReturnQtyChange(item.id, maxAllowed, parseInt(e.target.value) || 0)}
                      onFocus={(e) => e.target.select()}
                      className="w-full px-3 py-1 border border-gray-300 rounded text-center disabled:bg-gray-100"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}