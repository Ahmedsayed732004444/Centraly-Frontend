import { Wallet } from 'lucide-react';
import { formatCurrency } from '@/shared/utils/currency';
interface CustomerSummaryCardProps {
  name: string;
  phone?: string;
  debtBalance: number;
  onPaymentClick: () => void;
}
export function CustomerSummaryCard({ name, phone, debtBalance, onPaymentClick }: CustomerSummaryCardProps) {
  const currentBalance = debtBalance || 0;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{name}</h2>
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          {phone && <p>الهاتف: <span className="font-semibold">{phone}</span></p>}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100 w-full md:w-auto">
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-1">الرصيد الحالي</p>
          <div className="text-2xl font-bold" dir="ltr">
            {currentBalance === 0 ? (
              <span className="text-gray-600">0 ج.م</span>
            ) : currentBalance > 0 ? (
              <span className="text-red-600">عليه {formatCurrency(currentBalance)}</span>
            ) : (
              <span className="text-green-600">له {formatCurrency(Math.abs(currentBalance))}</span>
            )}
          </div>
        </div>
        <button
          onClick={onPaymentClick}
          className="flex items-center justify-center gap-2 bg-[#0f8e4c] hover:bg-[#0c7a40] text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-500/20 w-full sm:w-auto"
        >
          <Wallet size={20} />
          تسديد دفعة
        </button>
      </div>
    </div>
  );
}