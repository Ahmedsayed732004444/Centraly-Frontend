import { useState } from 'react';
import { useSafes, useSafeTransactions } from '../hooks/useFinance';
import { SafeTransactionsTable } from '../components/SafeTransactionsTable';
import { ReceiveDrawerDepositModal } from '../components/ReceiveDrawerDepositModal';
import { ManualSafeTransactionModal } from '../components/ManualSafeTransactionModal';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { formatCurrency } from '@/shared/utils/currency';
import { Vault, PlusCircle, ArrowDownToLine } from 'lucide-react';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { normalizePaginated } from '@/shared/utils/fetchAllPages';
import { SafeTransactionResponse } from '../schemas/financeSchemas';
import { safeTxDirection } from '@/shared/utils/moneyDirection';
import { formatDateTime } from '@/shared/utils/date';
export function SafePage() {
  const { data: safes, isLoading: safesLoading } = useSafes();
  const mainSafe = safes?.find(s => s.isMain) || safes?.[0];
  const safeId = mainSafe?.id || '';
  const { data: transactionsData, isLoading: txLoading } = useSafeTransactions(safeId, { pageNumber: 1, pageSize: 50 });
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isManualModalOpen, setIsManualModalOpen] = useState(false);
  if (safesLoading || txLoading) {
    return <PageLoader />;
  }
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-5 sm:p-8 text-white shadow-lg relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-blue-400 opacity-20 blur-2xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4 sm:gap-5 min-w-0">
            <div className="bg-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-sm border border-white/20 shrink-0">
              <Vault className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-blue-100 font-medium mb-1 truncate">
                {mainSafe ? mainSafe.name : 'الخزينة الرئيسية'}
              </p>
              <h1 className="text-xl sm:text-3xl font-bold text-white mb-2">إجمالي رصيد الخزينة</h1>
              <div className="text-2xl sm:text-4xl font-extrabold tracking-tight break-all" dir="ltr">
                {mainSafe ? formatCurrency(mainSafe.balance) : formatCurrency(0)}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[200px]">
            <button
              onClick={() => setIsManualModalOpen(true)}
              disabled={!safeId}
              className="w-full bg-white text-blue-900 hover:bg-gray-50 font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <PlusCircle className="w-5 h-5 shrink-0" />
              عملية إيداع / سحب
            </button>
            <button
              onClick={() => setIsDepositModalOpen(true)}
              disabled={!safeId}
              className="w-full bg-blue-600/30 hover:bg-blue-600/50 border border-white/20 text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <ArrowDownToLine className="w-5 h-5 shrink-0" />
              استلام من درج مبيعات
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-2">
            سجل حركات الخزينة
          </h3>
          <ExportExcelButton
            onExport={async () => {
              const rows = normalizePaginated(transactionsData || []).items;
              await exportToExcel<SafeTransactionResponse>({
                fileName: 'سجل-حركات-الخزينة',
                sheetName: 'الخزينة',
                title: `سجل حركات ${mainSafe?.name || 'الخزينة'}`,
                columns: [
                  { header: 'التاريخ', value: (r) => formatDateTime(r.createdAt) },
                  { header: 'النوع', value: (r) => (safeTxDirection(r.transactionType) === 'in' ? 'إيداع' : 'صادر') },
                  { header: 'التصنيف', value: (r) => r.category || '-' },
                  { header: 'المبلغ', value: (r) => (safeTxDirection(r.transactionType) === 'in' ? r.amount : -r.amount), money: true },
                  { header: 'الرصيد بعد الحركة', value: (r) => r.balanceAfter, money: true },
                  { header: 'ملاحظات', value: (r) => r.notes || '-', width: 30, align: 'right' },
                ],
                rows,
              });
            }}
          />
        </div>
        <SafeTransactionsTable transactions={transactionsData || []} />
      </div>
      {isDepositModalOpen && safeId && (
        <ReceiveDrawerDepositModal
          isOpen={isDepositModalOpen}
          onClose={() => setIsDepositModalOpen(false)}
          safeId={safeId}
        />
      )}
      {isManualModalOpen && safeId && (
        <ManualSafeTransactionModal
          isOpen={isManualModalOpen}
          onClose={() => setIsManualModalOpen(false)}
          safeId={safeId}
        />
      )}
    </div>
  );
}