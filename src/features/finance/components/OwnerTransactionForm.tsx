import { tokens } from '@/shared/styles/tokens';
import { BaseModal } from '@/shared/components/ui/BaseModal';
interface OwnerTransactionFormProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  amount: number | '';
  onAmountChange: (value: number | '') => void;
  notes: string;
  onNotesChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}
export function OwnerTransactionForm({
  isOpen,
  onClose,
  title,
  amount,
  onAmountChange,
  notes,
  onNotesChange,
  onSubmit,
  isSubmitting
}: OwnerTransactionFormProps) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
    >
      <form onSubmit={onSubmit} className="p-4 sm:p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">المبلغ</label>
          <input
            type="number"
            required
            min="1"
            step="any"
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            className={tokens.input}
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ملاحظات (اختياري)</label>
          <textarea
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            className={tokens.input}
            rows={3}
            placeholder="أدخل أي ملاحظات هنا..."
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button type="submit" disabled={isSubmitting} className={`${tokens.btn.primary} w-full sm:flex-1`}>
            {isSubmitting ? 'جاري الحفظ...' : 'تأكيد'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className={`${tokens.btn.ghost} w-full sm:flex-1`}
          >
            إلغاء
          </button>
        </div>
      </form>
    </BaseModal>
  );
}