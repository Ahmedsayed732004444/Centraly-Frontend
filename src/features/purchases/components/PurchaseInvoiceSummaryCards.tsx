import { Building2, ChevronLeft } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { useNavigate } from 'react-router-dom';
interface PurchaseInvoiceSummaryCardsProps {
  supplier: { id?: string; name?: string; phone?: string } | null;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
}
export function PurchaseInvoiceSummaryCards({
  supplier,
  totalAmount,
  paidAmount,
  remainingAmount
}: PurchaseInvoiceSummaryCardsProps) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {}
      <div
        className={`${tokens.card} p-4 md:col-span-1 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group`}
        onClick={() => supplier?.id && navigate(`/contacts/suppliers/${supplier.id}`)}
      >
        <p className="text-xs text-gray-500 mb-2">المورد</p>
        <div className="flex items-center gap-3">
          {}
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
            <Building2 size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
              {supplier?.name || '-'}
            </p>
            {supplier?.phone && (
              <p className="text-xs text-gray-400 mt-0.5">{supplier.phone}</p>
            )}
          </div>
          <ChevronLeft size={14} className="text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0" />
        </div>
      </div>
      {}
      <div className={`${tokens.card} p-4`}>
        <p className="text-xs text-gray-500 mb-1">إجمالي الفاتورة</p>
        <p className="text-base font-bold text-gray-900">{formatCurrency(totalAmount)}</p>
      </div>
      {}
      <div className={`${tokens.card} p-4`}>
        <p className="text-xs text-gray-500 mb-1">المبلغ المدفوع</p>
        <p className="text-base font-bold text-green-600">{formatCurrency(paidAmount)}</p>
      </div>
      {}
      <div className={`${tokens.card} p-4`}>
        <p className="text-xs text-gray-500 mb-1">المتبقي للمورد</p>
        <p className={`text-base font-bold ${remainingAmount > 0 ? 'text-red-600' : 'text-gray-400'}`}>
          {formatCurrency(remainingAmount)}
        </p>
      </div>
    </div>
  );
}