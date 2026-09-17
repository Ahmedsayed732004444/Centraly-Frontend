import { BaseModal } from '@/shared/components/ui/BaseModal';
import { DrawerSessionResponse } from '../schemas/financeSchemas';
import { useCloseDrawer } from '../hooks/useFinance';
import { formatCurrency } from '@/shared/utils/currency';
import { tokens } from '@/shared/styles/tokens';
import { AlertTriangle } from 'lucide-react';
interface CloseDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  session: DrawerSessionResponse;
}
export function CloseDrawerModal({ isOpen, onClose, session }: CloseDrawerModalProps) {
  const closeDrawer = useCloseDrawer();
  const handleClose = () => {
    closeDrawer.mutate(session.type, {
      onSuccess: () => {
        onClose();
      }
    });
  };
  const runningIncome = (session.transactions || []).filter(t => t.type === 1).reduce((acc, t) => acc + t.amount, 0);
  const runningExpense = (session.transactions || []).filter(t => t.type === 2).reduce((acc, t) => acc + t.amount, 0);
  const currentBalance = session.openingBalance + runningIncome - runningExpense;
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="إغلاق الوردية">
      <div className="space-y-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-yellow-800">تأكيد إغلاق الوردية</h4>
            <p className="text-sm text-yellow-700 mt-1">
              هل أنت متأكد من رغبتك في إغلاق الوردية الحالية؟ لا يمكن التراجع عن هذه الخطوة، ويجب تسليم المبلغ الموضح أدناه إلى الخزينة.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100 space-y-4">
          <div className="flex justify-between items-center gap-3 text-gray-600">
            <span>الرصيد الافتتاحي (العهدة):</span>
            <span className="font-semibold shrink-0" dir="ltr">{formatCurrency(session.openingBalance)}</span>
          </div>
          <div className="flex justify-between items-center gap-3 text-green-600">
            <span>إجمالي الداخل (مبيعات، إيداعات):</span>
            <span className="font-semibold shrink-0" dir="ltr">+{formatCurrency(runningIncome)}</span>
          </div>
          <div className="flex justify-between items-center gap-3 text-red-600">
            <span>إجمالي الخارج (مشتريات، مسحوبات):</span>
            <span className="font-semibold shrink-0" dir="ltr">-{formatCurrency(runningExpense)}</span>
          </div>
          <div className="pt-4 border-t border-gray-200 flex justify-between items-center gap-3 text-lg font-bold text-gray-800">
            <span>الرصيد النهائي المطلوب تسليمه:</span>
            <span className="shrink-0" dir="ltr">{formatCurrency(currentBalance)}</span>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 border-t border-gray-100 mt-6">
          <button type="button" onClick={onClose} className={tokens.btn.ghost + " w-full sm:w-auto"}>
            إلغاء
          </button>
          <button
            type="button"
            onClick={handleClose}
            disabled={closeDrawer.isPending}
            className={tokens.btn.primary + " bg-red-600 hover:bg-red-700 ring-red-500 w-full sm:w-auto"}
          >
            {closeDrawer.isPending ? 'جاري الإغلاق...' : 'تأكيد وإغلاق الوردية'}
          </button>
        </div>
      </div>
    </BaseModal>
  );
}