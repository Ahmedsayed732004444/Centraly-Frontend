import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useSupplierReturns } from '../hooks/useSupplierReturns';
import { SupplierReturnsFilters } from '../components/SupplierReturnsFilters';
import { SupplierReturnsTable } from '../components/SupplierReturnsTable';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { fetchAllPages } from '@/shared/utils/fetchAllPages';
import { formatDateTime } from '@/shared/utils/date';
import { supplierReturnRepository } from '../api/SupplierReturnApi';
import { SupplierReturnResponse, RETURN_REASON_LABELS } from '../schemas/supplierReturnSchemas';

export function SupplierReturnsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();

  useEffect(() => {
    setTitle('مرتجعات الموردين');
    setBackButton(false);
  }, [setTitle, setBackButton]);

  const { items, totalCount, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useSupplierReturns({
    pageSize: 10,
    searchValue: searchTerm || undefined,
  });

  return (
    <div className="space-y-4 w-full">
      <SupplierReturnsFilters
        onSearch={(val) => setSearchTerm(val)}
        onNewReturn={() => navigate('/purchases/returns/new')}
      />

      <div className="flex justify-end">
        <ExportExcelButton
          onExport={async () => {
            const rows = await fetchAllPages<SupplierReturnResponse>((pageNumber) =>
              supplierReturnRepository.getReturns({ pageNumber, pageSize: 50, searchValue: searchTerm || undefined })
            );
            await exportToExcel<SupplierReturnResponse>({
              fileName: 'مرتجعات-الموردين',
              sheetName: 'مرتجعات الموردين',
              title: 'سجل مرتجعات الموردين',
              columns: [
                { header: 'التاريخ', value: (r) => formatDateTime(r.returnDate) },
                { header: 'المورد', value: (r) => r.supplier?.name || '-' },
                { header: 'سبب الإرجاع', value: (r) => RETURN_REASON_LABELS[r.reason] || 'غير معروف' },
                { header: 'عدد الأصناف', value: (r) => r.itemsCount },
                { header: 'إجمالي المرتجع', value: (r) => r.totalReturnedAmount, money: true },
              ],
              rows,
            });
          }}
        />
      </div>

      <SupplierReturnsTable
        data={items}
        isLoading={isLoading}
        totalCount={totalCount}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        onLoadMore={() => fetchNextPage()}
        onRowClick={(row) => navigate(`/purchases/returns/${row.supplierReturnId}`)}
      />
    </div>
  );
}
