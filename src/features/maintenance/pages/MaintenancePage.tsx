import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useMaintenanceList } from '../api/queries';
import { MaintenanceQuickCreateDrawer } from '../components/MaintenanceQuickCreateDrawer';
import { MaintenanceDetailDrawer } from '../components/MaintenanceDetailDrawer';
import { MaintenanceListTable } from '../components/MaintenanceListTable';
import { MaintenanceSuccessModal } from '../components/MaintenanceSuccessModal';
import { MaintenanceResponse } from '../schemas/maintenanceSchemas';
import { MAINTENANCE_STATUS_LABELS } from '@/shared/utils/enumLabels';
import { Wrench, Plus, Search } from 'lucide-react';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { fetchAllPages } from '@/shared/utils/fetchAllPages';
import { maintenanceApi } from '../api/MaintenanceApi';
import { MaintenanceSummary } from '../schemas/maintenanceSchemas';
import { formatDateTime } from '@/shared/utils/date';
export function MaintenancePage() {
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearch = useDebounce(searchValue, 500);
  const [pageIndex, setPageIndex] = useState(1);
  // Filtering from page 3, say, used to leave pageIndex at 3 against a freshly
  // filtered result set that might only have 1 page - showing an empty table.
  useEffect(() => {
    setPageIndex(1);
  }, [statusFilter, debouncedSearch]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  // Deep-linkable so a notification can open a specific ticket directly via
  // /maintenance?ticketId=<id> instead of only through this page's own row click.
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedId, setSelectedIdState] = useState<string | null>(searchParams.get('ticketId'));
  const setSelectedId = (id: string | null) => {
    setSelectedIdState(id);
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (id) next.set('ticketId', id);
        else next.delete('ticketId');
        return next;
      },
      { replace: true }
    );
  };
  const [successModalState, setSuccessModalState] = useState<{
    ticket: MaintenanceResponse;
    mode: 'intake' | 'delivery';
  } | null>(null);
  const { data, isLoading } = useMaintenanceList({
    pageNumber: pageIndex,
    pageSize: 10,
    status: statusFilter || undefined,
    searchValue: debouncedSearch || undefined,
  });
  const tickets = data?.items || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = data?.totalPages || 1;
  const pageSize = data?.pageSize || 10;
  return (
    <div className="space-y-5">
      {/* Header - no repeated "الصيانة" title here: the shell header (AppLayout) already
          shows it via defaultPageTitles, this bar is just the count + primary action. */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2 text-gray-500 min-w-0">
          <Wrench className="w-5 h-5 text-blue-600 shrink-0" />
          <span className="text-sm font-medium whitespace-nowrap">{totalCount} تذكرة صيانة</span>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <ExportExcelButton
            onExport={async () => {
              const rows = await fetchAllPages<MaintenanceSummary>((pageNumber) =>
                maintenanceApi.getAll({ pageNumber, pageSize: 50, status: statusFilter || undefined, searchValue: debouncedSearch || undefined })
              );
              await exportToExcel<MaintenanceSummary>({
                fileName: 'تذاكر-الصيانة',
                sheetName: 'الصيانة',
                title: 'سجل تذاكر الصيانة',
                columns: [
                  { header: 'العميل', value: (r) => r.customerName },
                  { header: 'الهاتف', value: (r) => r.customerPhone || '-' },
                  { header: 'الجهاز', value: (r) => r.deviceDescription || '-' },
                  { header: 'المشكلة', value: (r) => r.problem || '-', width: 30, align: 'right' },
                  { header: 'الحالة', value: (r) => MAINTENANCE_STATUS_LABELS[r.status] || r.status },
                  { header: 'الإجمالي', value: (r) => r.totalPrice, money: true },
                  { header: 'المدفوع', value: (r) => r.paidAmount, money: true },
                  { header: 'المتبقي', value: (r) => r.remainingAmount, money: true },
                  { header: 'موعد التسليم', value: (r) => (r.deliveryDate ? formatDateTime(r.deliveryDate) : '-') },
                  { header: 'تاريخ الإنشاء', value: (r) => formatDateTime(r.createdAt) },
                ],
                rows,
              });
            }}
          />
          <button
            onClick={() => setIsCreateOpen(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            تذكرة جديدة
          </button>
        </div>
      </div>
      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-between">
        <div className="flex bg-slate-100/70 p-1.5 rounded-xl w-full sm:w-fit overflow-x-auto">
          {(['', 'Pending', 'Delivered', 'Returned'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                statusFilter === s
                  ? 'bg-white text-blue-700 shadow-sm border border-gray-200/60'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {s === '' ? 'الكل' : MAINTENANCE_STATUS_LABELS[s]}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            aria-label="بحث باسم العميل أو رقم الهاتف"
            placeholder="بحث باسم العميل أو رقم الهاتف..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      {}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <MaintenanceListTable
          tickets={tickets}
          isLoading={isLoading}
          onRowClick={(id) => setSelectedId(id)}
          pageIndex={pageIndex}
          totalPages={totalPages}
          totalCount={totalCount}
          pageSize={pageSize}
          onNextPage={() => setPageIndex(p => p + 1)}
          onPrevPage={() => setPageIndex(p => p - 1)}
        />
      </div>
      {}
      <MaintenanceQuickCreateDrawer
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCreated={(ticket) => setSuccessModalState({ ticket, mode: 'intake' })}
      />
      {}
      <MaintenanceDetailDrawer
        id={selectedId}
        onClose={() => setSelectedId(null)}
        onDelivered={(ticket) => setSuccessModalState({ ticket, mode: 'delivery' })}
      />
      {}
      <MaintenanceSuccessModal
        isOpen={!!successModalState}
        onClose={() => setSuccessModalState(null)}
        ticket={successModalState?.ticket || null}
        mode={successModalState?.mode || 'intake'}
      />
    </div>
  );
}