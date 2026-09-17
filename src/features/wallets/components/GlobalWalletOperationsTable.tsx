import { useState } from 'react';
import { useGlobalWalletOperations } from '../hooks/useGlobalWalletOperations';
import { useWallets } from '../hooks/useWallets';
import { ArrowDownToLine, ArrowUpFromLine, ChevronLeft, ChevronRight, Filter, TrendingUp, Smartphone } from 'lucide-react';
import { formatDateTime, toUtcStartOfDayISOString, toUtcEndOfDayISOString } from '@/shared/utils/date';
import { formatNumber } from '@/shared/utils/currency';
import { WalletOperationType, WalletOperationResponse } from '../schemas/walletSchemas';
import { walletOpLabels } from '../utils/walletOpLabels';
import { Badge } from '@/shared/components/ui/Badge';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { DateRangeFilter } from '@/shared/components/ui/DateRangeFilter';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { fetchAllPages } from '@/shared/utils/fetchAllPages';
import { walletApi } from '../api/WalletApi';

const walletOpIcons: Record<WalletOperationType, typeof Smartphone> = {
  [WalletOperationType.CashIn]: ArrowDownToLine,
  [WalletOperationType.CashOut]: ArrowUpFromLine,
  [WalletOperationType.Recharge]: Smartphone,
};

export function GlobalWalletOperationsTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [operationType, setOperationType] = useState<WalletOperationType | ''>('');
  const [walletId, setWalletId] = useState('');
  const { wallets } = useWallets();

  const { operations, totalPages, isLoadingOperations, totalProfit } = useGlobalWalletOperations({
    pageNumber,
    dateFrom: dateFrom ? toUtcStartOfDayISOString(dateFrom) : undefined,
    dateTo: dateTo ? toUtcEndOfDayISOString(dateTo) : undefined,
    operationType: operationType !== '' ? operationType : undefined,
    walletId: walletId || undefined
  });

  const isProfitable = totalProfit >= 0;

  return (
    <div className="space-y-6">
      {/* Top Summary Card */}
      <div className={`bg-white rounded-2xl shadow-sm border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right ${isProfitable ? 'border-green-100' : 'border-red-100'}`}>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">صافي الأرباح (للفلتر الحالي)</h2>
          <p className="text-gray-500 text-sm">يتم حسابه بناءً على العمليات المعروضة فقط</p>
        </div>
        <div className="flex items-center gap-4">
          <p className={`text-2xl sm:text-4xl font-black font-mono dir-ltr break-all ${isProfitable ? 'text-green-600' : 'text-red-600'}`}>
            {isProfitable ? '+' : ''}{formatNumber(totalProfit || 0)}
          </p>
          <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 ${isProfitable ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            <TrendingUp size={24} className="sm:w-7 sm:h-7" />
          </div>
        </div>
      </div>

      {/* Operations Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm w-full sm:w-auto sm:min-w-[150px]">
              <Filter size={16} className="text-gray-400 shrink-0" />
              <select
                value={walletId}
                onChange={e => { setWalletId(e.target.value); setPageNumber(1); }}
                className="bg-transparent border-none text-sm focus:ring-0 text-gray-600 py-0 w-full"
              >
                <option value="">كل المحافظ</option>
                {wallets.map(w => (
                  <option key={w.id} value={w.id}>{w.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm w-full sm:w-auto">
              <Filter size={16} className="text-gray-400 shrink-0" />
              <select
                value={operationType}
                onChange={e => { setOperationType(e.target.value ? Number(e.target.value) : ''); setPageNumber(1); }}
                className="bg-transparent border-none text-sm focus:ring-0 text-gray-600 py-0 w-full"
              >
                <option value="">كل العمليات</option>
                <option value={WalletOperationType.CashIn}>بيع</option>
                <option value={WalletOperationType.CashOut}>سحب</option>
                <option value={WalletOperationType.Recharge}>رصيد</option>
              </select>
            </div>
            <DateRangeFilter
              startDate={dateFrom}
              endDate={dateTo}
              onChange={(start, end) => { setDateFrom(start); setDateTo(end); setPageNumber(1); }}
            />
          </div>
          <ExportExcelButton
            onExport={async () => {
              const filter = {
                dateFrom: dateFrom ? toUtcStartOfDayISOString(dateFrom) : undefined,
                dateTo: dateTo ? toUtcEndOfDayISOString(dateTo) : undefined,
                operationType: operationType !== '' ? operationType : undefined,
                walletId: walletId || undefined,
              };
              const rows = await fetchAllPages<WalletOperationResponse>((pageNumber) =>
                walletApi.getWalletOperations({ ...filter, pageNumber, pageSize: 50 })
              );
              await exportToExcel<WalletOperationResponse>({
                fileName: 'سجل-عمليات-المحافظ',
                sheetName: 'عمليات المحافظ',
                title: 'سجل عمليات المحافظ',
                columns: [
                  { header: 'التاريخ', value: (r) => formatDateTime(r.createdAt) },
                  { header: 'المحفظة', value: (r) => wallets.find((w) => w.id === r.walletId)?.name || 'غير معروف' },
                  { header: 'نوع العملية', value: (r) => walletOpLabels[r.operationType].label },
                  { header: 'المبلغ المحول', value: (r) => r.transferredAmount, money: true },
                  { header: 'المبلغ الكاش', value: (r) => r.physicalCashAmount, money: true },
                  { header: 'الربح', value: (r) => r.profit, money: true },
                ],
                rows,
              });
            }}
          />
        </div>

        {isLoadingOperations ? (
          <div className="p-8 text-center text-gray-500">جاري تحميل السجل...</div>
        ) : operations.length === 0 ? (
          <EmptyState entity="عمليات تطابق البحث" />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="bg-white text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">التاريخ</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">المحفظة</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">نوع العملية</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">المبلغ المحول</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">المبلغ الكاش</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">الربح</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {operations.map((op: WalletOperationResponse) => {
                  const wallet = wallets.find(w => w.id === op.walletId);
                  const Icon = walletOpIcons[op.operationType];
                  return (
                    <tr key={op.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{formatDateTime(op.createdAt)}</td>
                      <td className="px-6 py-4 font-medium text-slate-800 whitespace-nowrap">{wallet?.name || 'غير معروف'}</td>
                      <td className="px-6 py-4">
                        <Badge variant={walletOpLabels[op.operationType].variant} icon={<Icon size={14} />}>
                          {walletOpLabels[op.operationType].label}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-700 whitespace-nowrap">{formatNumber(op.transferredAmount)}</td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-700 whitespace-nowrap">{formatNumber(op.physicalCashAmount)}</td>
                      <td className="px-6 py-4 font-mono font-bold whitespace-nowrap">
                        <span className={op.profit > 0 ? 'text-green-600' : op.profit < 0 ? 'text-red-600' : 'text-gray-400'}>
                          {op.profit > 0 ? '+' : ''}{formatNumber(op.profit)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {totalPages > 1 && (
          <div className="border-t border-gray-100 p-4 bg-white flex items-center justify-center gap-4">
            <button
              disabled={pageNumber === 1}
              onClick={() => setPageNumber(p => Math.max(1, p - 1))}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <span className="font-semibold text-gray-700 text-sm">
              صفحة {pageNumber} من {totalPages}
            </span>
            <button
              disabled={pageNumber === totalPages}
              onClick={() => setPageNumber(p => Math.min(totalPages, p + 1))}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}