import { useState } from 'react';
import { toUtcStartOfDayISOString, toUtcEndOfDayISOString, formatDateOnly } from '@/shared/utils/date';
import { useSalesReturns } from '../hooks/useSales';
import { DataTable } from '@/shared/components/ui/DataTable';
import { Plus } from 'lucide-react';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useNavigate } from 'react-router-dom';
import { getSalesReturnsColumns, getReasonLabel } from '../components/SalesReturnsColumns';
import { SalesReturnsFilters } from '../components/SalesReturnsFilters';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { fetchAllPages } from '@/shared/utils/fetchAllPages';
import { salesRepository } from '../api/salesApi';
import { SalesReturnResponse } from '../schemas/salesSchemas';
export const SalesReturnsPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();
  const { data, isLoading } = useSalesReturns({
    pageNumber: page,
    pageSize: 10,
    searchValue: debouncedSearch,
    startDate: dateFilter ? toUtcStartOfDayISOString(dateFilter) : undefined,
      endDate: dateFilter ? toUtcEndOfDayISOString(dateFilter) : undefined,
  });
  const columns = getSalesReturnsColumns();
  const filteredData = data?.items || [];
  return (
    <div className="space-y-4 sm:space-y-6 w-full">
      <div className="flex justify-end items-center">
        <button
          onClick={() => navigate('/sales/returns/new')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
        >
          <Plus size={20} />
          <span>إضافة مرتجع جديد</span>
        </button>
      </div>
      <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100">
        <SalesReturnsFilters
          search={search}
          onSearchChange={setSearch}
          dateFilter={dateFilter}
          onDateChange={setDateFilter}
        />
        <div className="flex justify-end mb-3">
          <ExportExcelButton
            onExport={async () => {
              const rows = await fetchAllPages<SalesReturnResponse>((pageNumber) =>
                salesRepository.getReturns({
                  pageNumber,
                  pageSize: 50,
                  searchValue: debouncedSearch,
                  startDate: dateFilter ? toUtcStartOfDayISOString(dateFilter) : undefined,
                  endDate: dateFilter ? toUtcEndOfDayISOString(dateFilter) : undefined,
                })
              );
              await exportToExcel<SalesReturnResponse>({
                fileName: 'مرتجعات-المبيعات',
                sheetName: 'مرتجعات المبيعات',
                title: 'سجل مرتجعات المبيعات',
                columns: [
                  { header: 'تاريخ المرتجع', value: (r) => formatDateOnly(r.returnDate) },
                  { header: 'رقم الفاتورة الأصلية', value: (r) => r.invoiceNumber || '-' },
                  { header: 'السبب', value: (r) => getReasonLabel(r.reason) },
                  { header: 'طريقة الاسترداد', value: (r) => (r.isCashRefund ? 'نقدي' : 'خصم من المديونية') },
                  { header: 'إجمالي المرتجع', value: (r) => r.totalReturnedAmount, money: true },
                ],
                rows,
              });
            }}
          />
        </div>
        <div className="overflow-x-auto">
        <DataTable
          data={filteredData}
          columns={columns}
          isLoading={isLoading}
          pageIndex={page}
          pageSize={10}
          totalCount={data?.totalCount || 0}
          totalPages={data?.totalPages || 1}
          onNextPage={() => setPage(p => Math.min(p + 1, data?.totalPages || 1))}
          onPrevPage={() => setPage(p => Math.max(p - 1, 1))}
          emptyEntity="مرتجعات مبيعات"
        />
        </div>
      </div>
    </div>
  );
};