import { useState, useEffect } from 'react';
import { User, Phone, Banknote } from 'lucide-react';
import { PaymentMethod, SaleType } from '../schemas/salesSchemas';
import { PaymentSource } from '@/features/finance/schemas/financeSchemas';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { BaseModal } from '@/shared/components/ui/BaseModal';
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  paymentMethod: PaymentMethod | null;
  onConfirm: (customerName: string, customerPhone: string, paidAmount: number, paymentSource?: PaymentSource, saleType?: SaleType, method?: PaymentMethod) => void;
  isSubmitting: boolean;
}
export function CheckoutModal({
  isOpen,
  onClose,
  totalAmount,
  paymentMethod,
  onConfirm,
  isSubmitting,
}: CheckoutModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [saleType, setSaleType] = useState<SaleType>(SaleType.Retail);
  const [paidAmount, setPaidAmount] = useState<number | string>(totalAmount);
  const [error, setError] = useState('');
  const { promptPaymentSource, PaymentSourcePromptModal, isPoliciesLoading } = usePaymentSourcePrompt(1); // GlobalTransactionCategory.CashSale
  useEffect(() => {
    if (isOpen) {
      setCustomerName('');
      setCustomerPhone('');
      setPaidAmount(paymentMethod === PaymentMethod.Cash ? totalAmount : 0);
      setError('');
    }
  }, [isOpen, paymentMethod, totalAmount]);
  if (!paymentMethod) return null;
  const isCredit = paymentMethod === PaymentMethod.Deferred;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const paid = Number(paidAmount);
    if (isNaN(paid) || paid < 0) {
      setError('يرجى إدخال مبلغ دفع صحيح');
      return;
    }
    if (isCredit) {
      if (!customerName.trim() || !customerPhone.trim()) {
        setError('يجب إدخال اسم العميل ورقم الهاتف في حالة البيع الآجل');
        return;
      }
      if (paid >= totalAmount) {
        setError('لا يمكن أن يكون المبلغ المدفوع مساوياً أو أكبر من الإجمالي في حالة البيع الآجل. يرجى اختيار دفع كاش.');
        return;
      }
    } else if (paid < totalAmount) {
      setError('في حالة الدفع النقدي يجب دفع المبلغ كاملاً');
      return;
    }
    let finalSource: PaymentSource | undefined = undefined;
    if (paid > 0) {
      const source = await promptPaymentSource();
      if (!source) return; // User closed the prompt
      finalSource = source;
    }
    const resolvedMethod = (isCredit && paid < totalAmount) ? PaymentMethod.Deferred : PaymentMethod.Cash;
    onConfirm(customerName, customerPhone, isCredit ? paid : totalAmount, finalSource, saleType, resolvedMethod);
  };
  return (
    <>
      <PaymentSourcePromptModal />
      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        title={isCredit ? 'إتمام الدفع الآجل' : 'إتمام الدفع النقدي'}
        size="md"
        zIndexClassName="z-[60]"
        headerClassName={isCredit ? 'bg-amber-50' : 'bg-emerald-50'}
      >
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          <div className="bg-[var(--color-page-bg)] p-3 sm:p-4 rounded-xl flex flex-wrap items-center justify-between gap-2 border border-[var(--color-border)]">
            <span className="text-[var(--color-text-muted)] font-semibold text-sm sm:text-base">الإجمالي المطلوب:</span>
            <span className="text-xl sm:text-2xl font-bold text-[var(--color-text-main)]">{formatCurrency(totalAmount)}</span>
          </div>
          {error && (
            <div className="p-3 bg-red-50 text-[var(--color-danger)] rounded-lg text-sm font-semibold text-center border border-red-100">
              {error}
            </div>
          )}
          <div>
            <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                نوع الفاتورة
              </span>
            </label>
            <select
              value={saleType}
              onChange={(e) => setSaleType(Number(e.target.value) as SaleType)}
              className={tokens.input + ' py-3 mb-4'}
            >
              <option value={SaleType.Retail}>قطاعي (تجزئة)</option>
              <option value={SaleType.Wholesale}>جملة</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Phone size={16} /> رقم الهاتف
              </span>
              {isCredit && <span className="text-[var(--color-danger)]">*</span>}
            </label>
            <input
              type="text"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="مثال: 010xxxxxxxx"
              className={tokens.input + ' py-3 text-left'}
              required={isCredit}
              dir="ltr"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <User size={16} /> اسم العميل
              </span>
              {isCredit && <span className="text-[var(--color-danger)]">*</span>}
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="مثال: أحمد محمد"
              className={tokens.input + ' py-3'}
              required={isCredit}
            />
          </div>
          {isCredit && (
            <div className="pt-2 border-t border-[var(--color-border)]">
              <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Banknote size={16} /> المبلغ المدفوع الآن
                </span>
                <span className="text-[var(--color-danger)]">*</span>
              </label>
              <input
                type="number"
                min="0"
                step="1"
                value={paidAmount}
                onChange={(e) => setPaidAmount(e.target.value)}
                onFocus={() => {
                  if (paidAmount === 0 || paidAmount === '0') setPaidAmount('');
                }}
                onBlur={(e) => {
                  if (e.target.value === '') setPaidAmount(0);
                }}
                className={`${tokens.input} py-3 text-xl font-bold text-[var(--color-primary)] text-left`}
                required
                dir="ltr"
              />
              {Number(paidAmount) >= 0 && Number(paidAmount) < totalAmount && (
                <p className="text-sm text-amber-700 mt-2.5 font-bold">
                  المتبقي كمديونية: {formatCurrency(totalAmount - Number(paidAmount))}
                </p>
              )}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting || isPoliciesLoading}
            className={`w-full py-3 sm:py-3.5 rounded-xl font-bold text-white text-base sm:text-lg disabled:opacity-70 ${
              isCredit ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {isSubmitting ? 'جاري التأكيد...' : 'تأكيد وحفظ الفاتورة'}
          </button>
        </form>
      </BaseModal>
    </>
  );
}