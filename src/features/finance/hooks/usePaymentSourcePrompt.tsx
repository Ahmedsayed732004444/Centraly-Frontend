import { useState, useRef, useCallback } from 'react';
import { useFinancePolicies } from './useFinancePolicies';
import { GlobalTransactionCategory, PaymentSource } from '../schemas/financeSchemas';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { tokens } from '@/shared/styles/tokens';
import { Inbox, Vault } from 'lucide-react';

export function usePaymentSourcePrompt(defaultCategory?: GlobalTransactionCategory) {
  const { data: policies } = useFinancePolicies();
  const [isOpen, setIsOpen] = useState(false);
  const resolverRef = useRef<((value: PaymentSource | null) => void) | null>(null);

  const categoryEnumToString: Record<number, string> = {
    1: 'CashSale',
    2: 'SalesReturn',
    3: 'CashPurchase',
    4: 'PurchaseReturn',
    5: 'SupplierPayment',
    6: 'SupplierReceipt',
    7: 'CustomerPayment',
    8: 'CustomerRefund',
    9: 'Expense',
    10: 'OwnerDeposit',
    11: 'OwnerWithdrawal',
    12: 'ManualIncome',
    13: 'ManualExpense',
  };

  const promptPaymentSource = useCallback((overrideCategory?: GlobalTransactionCategory): Promise<PaymentSource | null> => {
    return new Promise((resolve) => {
      const targetCategory = overrideCategory ?? defaultCategory;
      if (!targetCategory) {
        resolve(1);
        return;
      }
      
      const categoryString = categoryEnumToString[targetCategory];
      // If policies are not loaded yet, reject or cancel
      if (!policies) {
        // Technically shouldn't happen if UI disables buttons while loading, but just in case
        console.warn('Finance policies are still loading.');
        resolve(null);
        return;
      }

      // Find policy
      const policy = policies.find(p => p.category === categoryString);
      
      // If no policy is found, or it's "Either", prompt the user
      if (!policy || policy.allowedSource === 'Either') {
        resolverRef.current = resolve;
        setIsOpen(true);
      } else if (policy.allowedSource === 'DrawerOnly') {
        resolve(1); // Drawer
      } else if (policy.allowedSource === 'SafeOnly') {
        resolve(2); // Safe
      }
    });
  }, [defaultCategory, policies]);

  const handleSelect = (source: PaymentSource) => {
    setIsOpen(false);
    if (resolverRef.current) {
      resolverRef.current(source);
      resolverRef.current = null;
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (resolverRef.current) {
      resolverRef.current(null); // Return null if cancelled
      resolverRef.current = null;
    }
  };

  const PaymentSourcePromptModal = () => (
    <BaseModal 
      isOpen={isOpen} 
      onClose={handleClose} 
      title="تحديد مصدر الأموال"
      zIndexClassName="z-[100]"
    >
      <div className="p-6">
        <p className="text-gray-600 text-center mb-6">
          حسب سياسة النظام الحالية، يمكنك اختيار مصدر سحب أو إيداع هذه الأموال.
          <br/>من أين تريد إتمام هذه العملية؟
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => handleSelect(1)}
            className="flex flex-col items-center justify-center p-6 border-2 border-blue-100 rounded-xl hover:bg-blue-50 hover:border-blue-500 transition-all text-blue-800"
          >
            <Inbox className="w-12 h-12 mb-3 text-blue-500" />
            <span className="font-bold text-lg">الدرج</span>
            <span className="text-xs text-blue-600/70 mt-1">(الوردية الحالية)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelect(2)}
            className="flex flex-col items-center justify-center p-6 border-2 border-emerald-100 rounded-xl hover:bg-emerald-50 hover:border-emerald-500 transition-all text-emerald-800"
          >
            <Vault className="w-12 h-12 mb-3 text-emerald-500" />
            <span className="font-bold text-lg">الخزينة</span>
            <span className="text-xs text-emerald-600/70 mt-1">(الخزينة الرئيسية)</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleClose}
          className={`${tokens.btn.ghost} w-full mt-6`}
        >
          إلغاء
        </button>
      </div>
    </BaseModal>
  );

  return { promptPaymentSource, PaymentSourcePromptModal, isPoliciesLoading: !policies };
}
