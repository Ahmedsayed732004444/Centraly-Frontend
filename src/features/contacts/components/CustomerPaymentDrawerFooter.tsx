import { tokens } from '@/shared/styles/tokens';

interface CustomerPaymentDrawerFooterProps {
  isSubmitting: boolean;
  onCancel: () => void;
}

export function CustomerPaymentDrawerFooter({ isSubmitting, onCancel }: CustomerPaymentDrawerFooterProps) {
  return (
    <>
      <button type="button" onClick={onCancel} className={tokens.btn.secondary}>
        إلغاء
      </button>
      <button
        type="submit"
        form="payment-form"
        disabled={isSubmitting}
        className="bg-[#0f8e4c] hover:bg-[#0c7a40] text-white px-6 py-2.5 rounded-lg font-bold transition-colors disabled:opacity-60 shadow-md"
      >
        {isSubmitting ? 'جاري الحفظ...' : 'حفظ واستلام'}
      </button>
    </>
  );
}
