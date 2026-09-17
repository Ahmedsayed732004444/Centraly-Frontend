import { useState } from 'react';
import { useActiveDrawer } from '../hooks/useFinance';
import { OpenDrawerForm } from '../components/OpenDrawerForm';
import { DrawerTransactionsTable } from '../components/DrawerTransactionsTable';
import { CloseDrawerModal } from '../components/CloseDrawerModal';
import { ManualTransactionModal } from '../components/ManualTransactionModal';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { PlusCircle, Wallet, ArrowUpRight, ArrowDownRight, Clock, History, Download } from 'lucide-react';
import { exportDrawerSessionToExcel } from '../utils/exportDrawerSessionExcel';
import { DrawerTransactionResponse } from '../schemas/financeSchemas';
import { Link } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
export function DrawerPage() {
  const { hasRole, hasAnyRole } = useAuth();
  const isTechnician = hasRole('Technician');
  const canSeeBoth = hasAnyRole(['Admin', 'Manager']);
  const isSalesperson = hasRole('Salesperson');
  const [activeTab, setActiveTab] = useState<number>(isTechnician && !canSeeBoth ? 2 : 1);
  return (
    <div className="space-y-6">
      <div className="flex gap-2 border-b border-gray-100 pb-2 overflow-x-auto">
        {(canSeeBoth || isSalesperson) && (
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${activeTab === 1 ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`}
          >
            درج المبيعات
          </button>
        )}
        {(canSeeBoth || isTechnician) && (
          <button
            onClick={() => setActiveTab(2)}
            className={`px-4 py-2 text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${activeTab === 2 ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`}
          >
            درج الصيانة
          </button>
        )}
      </div>
      <DrawerContent type={activeTab} key={activeTab} />
    </div>
  );
}
function DrawerContent({ type }: { type: number }) {
  const { data: session, isLoading } = useActiveDrawer(type);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [isManualTxModalOpen, setIsManualTxModalOpen] = useState(false);
  if (isLoading) {
    return <PageLoader />;
  }
  if (!session) {
    return <OpenDrawerForm type={type} />;
  }
  const handleExport = () => exportDrawerSessionToExcel(session);
  const runningIncome = (session.transactions || []).filter((t: DrawerTransactionResponse) => t.type === 1).reduce((acc: number, t: DrawerTransactionResponse) => acc + t.amount, 0);
  const runningExpense = (session.transactions || []).filter((t: DrawerTransactionResponse) => t.type === 2).reduce((acc: number, t: DrawerTransactionResponse) => acc + t.amount, 0);
  const currentBalance = session.openingBalance + runningIncome - runningExpense;
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Wallet className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 shrink-0" />
            {type === 2 ? 'درج الصيانة الحالي' : 'الدرج الحالي'}
          </h1>
          <p className="text-gray-500 mt-1 text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0" />
            تم الفتح: {formatDate(session.openedAt)}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to={type === 2 ? "/finance/drawer/history?type=2" : "/finance/drawer/history?type=1"}
            className={tokens.btn.ghost + " flex items-center justify-center gap-2 text-gray-600 flex-1 sm:flex-none"}
          >
            <History className="w-5 h-5 shrink-0" />
            <span>تصفح السجل</span>
          </Link>
          <button
            onClick={handleExport}
            className={tokens.btn.secondary + " flex items-center justify-center gap-2 flex-1 sm:flex-none"}
          >
            <Download className="w-5 h-5 shrink-0" />
            <span>تصدير Excel</span>
          </button>
          <button
            onClick={() => setIsCloseModalOpen(true)}
            className={tokens.btn.primary + " bg-red-600 hover:bg-red-700 ring-red-500 flex-1 sm:flex-none"}
          >
            إغلاق الوردية
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-1">الرصيد الافتتاحي</div>
          <div className="text-xl sm:text-2xl font-bold text-gray-800">{formatCurrency(session.openingBalance)}</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <ArrowUpRight className="w-12 h-12 text-emerald-600" />
          </div>
          <div className="text-sm font-medium text-gray-500 mb-1">إجمالي المقبوضات</div>
          <div className="text-xl sm:text-2xl font-bold text-emerald-600">{formatCurrency(runningIncome)}</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <ArrowDownRight className="w-12 h-12 text-red-600" />
          </div>
          <div className="text-sm font-medium text-gray-500 mb-1">إجمالي المصروفات</div>
          <div className="text-xl sm:text-2xl font-bold text-red-600">{formatCurrency(runningExpense)}</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-1">صافي أرباح الوردية</div>
          <div className="text-xl sm:text-2xl font-bold text-blue-600">{formatCurrency(session.totalProfit ?? 0)}</div>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-2xl shadow-md text-white col-span-2 sm:col-span-1">
          <div className="text-blue-100 text-sm font-medium mb-1">الرصيد المتوقع</div>
          <div className="text-xl sm:text-2xl font-bold">{formatCurrency(currentBalance)}</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[420px] sm:h-[500px]">
        <div className="p-4 sm:p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-gray-50/50">
          <h2 className="text-lg font-bold text-gray-800">حركات الدرج</h2>
          <button
            onClick={() => setIsManualTxModalOpen(true)}
            className={tokens.btn.secondary + " py-2 text-sm w-full sm:w-auto flex items-center justify-center"}
          >
            <PlusCircle className="w-4 h-4 ml-2 shrink-0" />
            إضافة حركة يدوية
          </button>
        </div>
        <div className="flex-1 overflow-auto custom-scrollbar">
          <DrawerTransactionsTable transactions={session.transactions || []} />
        </div>
      </div>
      {isCloseModalOpen && (
        <CloseDrawerModal
          isOpen={isCloseModalOpen}
          onClose={() => setIsCloseModalOpen(false)}
          session={session}
        />
      )}
      {isManualTxModalOpen && (
        <ManualTransactionModal
          isOpen={isManualTxModalOpen}
          onClose={() => setIsManualTxModalOpen(false)}
        />
      )}
    </div>
  );
}