import { formatCurrency } from '@/shared/utils/currency';
import { tokens } from '@/shared/styles/tokens';

interface CustomerPaymentFormProps {
  currentBalance: number;
  paymentAmount: string;
  onPaymentAmountChange: (value: string) => void;
  paymentNotes: string;
  onPaymentNotesChange: (value: string) => void;
  isRefund: boolean;
  onRefundChange: (isRefund: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export function CustomerPaymentForm({
  currentBalance,
  paymentAmount,
  onPaymentAmountChange,
  paymentNotes,
  onPaymentNotesChange,
  isRefund,
  onRefundChange,
  onSubmit,
  isSubmitting
}: CustomerPaymentFormProps) {
  return (
    <form id="payment-form" onSubmit={onSubmit} className="space-y-6">
      <div className="flex bg-gray-100 p-1 rounded-lg">
        <button
          type="button"
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${!isRefund ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}
          onClick={() => onRefundChange(false)}
        >
          تحصيل (سداد مديونية)
        </button>
        <button
          type="button"
          className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${isRefund ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}
          onClick={() => onRefundChange(true)}
        >
          رد أموال للعميل
        </button>
      </div>

      <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
        <p className="text-sm font-semibold text-orange-800 mb-1">المديونية الحالية</p>
        <p className="text-2xl font-bold text-orange-900" dir="ltr">{formatCurrency(currentBalance)}</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          المبلغ المستلم <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="number"
            min="0.01"
            step="1"
            value={paymentAmount}
            onChange={(e) => onPaymentAmountChange(e.target.value)}
            className={tokens.input + ' pl-12 py-3 text-lg font-bold text-left'}
            placeholder="0"
            required
            dir="ltr"
            disabled={isSubmitting}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">ج.م</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          البيان / ملاحظات
        </label>
        <textarea
          value={paymentNotes}
          onChange={(e) => onPaymentNotesChange(e.target.value)}
          className={tokens.input + ' py-3'}
          rows={3}
          placeholder="مثال: دفعة نقدية من الحساب"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}
