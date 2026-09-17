import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDrawerSessionById, useSafes } from '../hooks/useFinance';
import { useCreateOwnerTransaction } from '../hooks/useOwnerTransactions';
import { usePaymentSourcePrompt } from '../hooks/usePaymentSourcePrompt';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { DrawerTransactionsTable } from '../components/DrawerTransactionsTable';
import { CloseDrawerModal } from '../components/CloseDrawerModal';
import { ReceiveDrawerDepositModal } from '../components/ReceiveDrawerDepositModal';
import { OwnerTransactionForm } from '../components/OwnerTransactionForm';
import { CheckCircle, Clock, Download, ArrowDownToLine, Wallet } from 'lucide-react';
import { exportDrawerSessionToExcel } from '../utils/exportDrawerSessionExcel';
import { tokens } from '@/shared/styles/tokens';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useAuth } from '@/features/auth/hooks/useAuth';
export function DrawerSessionDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { hasAnyRole } = useAuth();
  const canManageSession = hasAnyRole(['Admin', 'Manager']);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState<number | ''>('');
  const [withdrawNotes, setWithdrawNotes] = useState('');
  const { data: session, isLoading, isError } = useDrawerSessionById(id!);
  const { data: safes } = useSafes();
  const mainSafe = safes?.find(s => s.isMain) || safes?.[0];
  const { mutate: createOwnerTransaction, isPending: isWithdrawing } = useCreateOwnerTransaction();
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt();
  const { setTitle, setBackButton } = useHeaderStore();

  useEffect(() => {
    setTitle('تفاصيل الوردية');
    setBackButton(true, '/finance/drawer/history');
    return () => setBackButton(false);
  }, [setTitle, setBackButton]);

  if (isLoading) return <PageLoader />;
  if (isError || !session) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] px-4 text-center">
        <p className="text-xl text-gray-500 mb-4">حدث خطأ أو الوردية غير موجودة</p>
        <button onClick={() => navigate('/finance/drawer/history')} className={tokens.btn.primary}>
          العودة لسجل الورديات
        </button>
      </div>
    );
  }
  const handleWithdrawSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAmount || withdrawAmount <= 0) return;
    const source = await promptPaymentSource(11); // GlobalTransactionCategory.OwnerWithdrawal
    if (source) {
      createOwnerTransaction(
        { category: 11, amount: Number(withdrawAmount), notes: withdrawNotes, paymentSource: source },
        { onSuccess: () => setIsWithdrawModalOpen(false) }
      );
    }
  };

  return (
    <div className="space-y-6 w-full">
      {}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-gray-500 text-sm">عرض شامل لحركات الدرج والرصيد</p>
        {session.isClosed ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
              <CheckCircle className="w-4 h-4" /> وردية مغلقة
            </span>
            {canManageSession && (
              <button
                onClick={() => exportDrawerSessionToExcel(session)}
                className={tokens.btn.secondary + " flex items-center gap-2 py-1.5 px-4 text-sm"}
              >
                <Download className="w-4 h-4" />
                تصدير Excel
              </button>
            )}
            {canManageSession && (
              session.depositedToSafeAt ? (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle className="w-4 h-4" /> تم توريد الخزينة للدرج
                </span>
              ) : (
                <button
                  onClick={() => setIsDepositModalOpen(true)}
                  disabled={!mainSafe}
                  className={tokens.btn.secondary + " flex items-center gap-2 py-1.5 px-4 text-sm"}
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  استلام الخزينة للدرج
                </button>
              )
            )}
            {canManageSession && (
              <button
                onClick={() => { setWithdrawAmount(''); setWithdrawNotes(''); setIsWithdrawModalOpen(true); }}
                className={tokens.btn.primary + " flex items-center gap-2 py-1.5 px-4 text-sm"}
              >
                <Wallet className="w-4 h-4" />
                سحب مبلغ
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-green-50 text-green-700 border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> وردية جارية الآن
            </span>
            {canManageSession && (
              <button
                onClick={() => exportDrawerSessionToExcel(session)}
                className={tokens.btn.secondary + " flex items-center gap-2 py-1.5 px-4 text-sm"}
              >
                <Download className="w-4 h-4" />
                تصدير Excel
              </button>
            )}
            {canManageSession && (
              <button
                onClick={() => setIsCloseModalOpen(true)}
                className={tokens.btn.primary + " bg-red-600 hover:bg-red-700 ring-red-500 py-1.5 px-4 text-sm"}
              >
                إغلاق الوردية
              </button>
            )}
          </div>
        )}
      </div>
      <CloseDrawerModal
        isOpen={isCloseModalOpen}
        onClose={() => setIsCloseModalOpen(false)}
        session={session}
      />
      {mainSafe && (
        <ReceiveDrawerDepositModal
          isOpen={isDepositModalOpen}
          onClose={() => setIsDepositModalOpen(false)}
          safeId={mainSafe.id}
          defaultDrawerSessionId={session.id}
          defaultAmount={session.closingBalance || 0}
        />
      )}
      <PaymentSourcePromptModal />
      <OwnerTransactionForm
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        title="سحب مبلغ للمالك"
        amount={withdrawAmount}
        onAmountChange={setWithdrawAmount}
        notes={withdrawNotes}
        onNotesChange={setWithdrawNotes}
        onSubmit={handleWithdrawSubmit}
        isSubmitting={isWithdrawing}
      />
      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-gray-500 flex items-center gap-2 shrink-0"><Clock className="w-4 h-4"/> وقت الفتح:</span>
              <span className="font-semibold text-gray-800 text-left" dir="ltr">{formatDate(session.openedAt)}</span>
            </div>
            {session.closedAt && (
              <div className="flex items-center justify-between gap-3">
                <span className="text-gray-500 flex items-center gap-2 shrink-0"><CheckCircle className="w-4 h-4"/> وقت الإغلاق:</span>
                <span className="font-semibold text-gray-800 text-left" dir="ltr">{formatDate(session.closedAt)}</span>
              </div>
            )}
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 sm:p-6 border border-blue-100 shadow-sm flex flex-col items-center justify-center text-center">
          <span className="text-blue-800 font-medium mb-1">الرصيد الافتتاحي</span>
          <span className="text-2xl sm:text-3xl font-bold text-blue-900" dir="ltr">{formatCurrency(session.openingBalance)}</span>
        </div>
      </div>
      {}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي المبيعات / الداخل</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600" dir="ltr">+{formatCurrency(session.totalIncome || 0)}</p>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي المصروفات / الخارج</p>
          <p className="text-xl sm:text-2xl font-bold text-red-600" dir="ltr">-{formatCurrency(session.totalExpense || 0)}</p>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm font-medium mb-2">صافي الأرباح</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600" dir="ltr">{formatCurrency(session.totalProfit ?? 0)}</p>
        </div>
        <div className="bg-gray-900 p-4 sm:p-5 rounded-2xl shadow-sm text-white">
          <p className="text-gray-400 text-sm font-medium mb-2">الرصيد النهائي للصندوق</p>
          <p className="text-xl sm:text-2xl font-bold text-white" dir="ltr">{formatCurrency(session.closingBalance || 0)}</p>
        </div>
      </div>
      {}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">حركات الدرج بالتفصيل</h2>
        </div>
        <DrawerTransactionsTable transactions={session.transactions || []} />
      </div>
    </div>
  );
}