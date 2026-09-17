import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrawerHistory } from '../hooks/useFinance';
import { FinanceFilters } from '../schemas/financeSchemas';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { DataTable } from '@/shared/components/ui/DataTable';
import { getDrawerHistoryColumns } from '../components/DrawerHistoryColumns';
import { DrawerHistoryHeader } from '../components/DrawerHistoryHeader';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { fetchAllPages } from '@/shared/utils/fetchAllPages';
import { financeRepository } from '../api/FinanceApi';
import { DrawerSessionResponse } from '../schemas/financeSchemas';
import { formatDateTime } from '@/shared/utils/date';

export function DrawerHistoryPage() {
  const { hasRole, hasAnyRole } = useAuth();
  
  const isTechnician = hasRole('Technician');
  const canSeeBoth = hasAnyRole(['Admin', 'Manager']);
  const isSalesperson = hasRole('Salesperson');

  const [filters, setFilters] = useState<FinanceFilters>({ 
    pageNumber: 1, 
    pageSize: 50,
    type: isTechnician && !canSeeBoth ? 2 : (isSalesperson && !canSeeBoth ? 1 : undefined)
  });
  
  const navigate = useNavigate();
  const { data: pagedData, isLoading } = useDrawerHistory(filters);

  if (isLoading) {
    return <PageLoader />;
  }

  const sessions = pagedData?.items || [];

  return (
    <div className="space-y-6">
      <DrawerHistoryHeader
        canSeeBoth={canSeeBoth}
        currentType={filters.type}
        onTypeChange={(type) => setFilters(prev => ({ ...prev, type, pageNumber: 1 }))}
      />

      <div className="flex justify-end">
        <ExportExcelButton
          onExport={async () => {
            const rows = await fetchAllPages<DrawerSessionResponse>((pageNumber) =>
              financeRepository.getDrawerHistory({ ...filters, pageNumber, pageSize: 50 })
            );
            await exportToExcel<DrawerSessionResponse>({
              fileName: 'سجل-الورديات',
              sheetName: 'الورديات',
              title: 'سجل ورديات الدرج',
              columns: [
                { header: 'النوع', value: (r) => (r.type === 1 ? 'مبيعات' : r.type === 2 ? 'صيانة' : 'غير محدد') },
                { header: 'الحالة', value: (r) => (r.isClosed ? 'مغلقة' : 'جارية الآن') },
                { header: 'وقت الفتح', value: (r) => formatDateTime(r.openedAt) },
                { header: 'وقت الإغلاق', value: (r) => (r.closedAt ? formatDateTime(r.closedAt) : '-') },
                { header: 'الرصيد الافتتاحي', value: (r) => r.openingBalance, money: true },
                { header: 'إجمالي الداخل', value: (r) => r.totalIncome || 0, money: true },
                { header: 'صافي الأرباح', value: (r) => r.totalProfit ?? 0, money: true },
                { header: 'الرصيد النهائي', value: (r) => r.closingBalance || 0, money: true },
              ],
              rows,
            });
          }}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <DataTable
          data={sessions}
          columns={getDrawerHistoryColumns()}
          isLoading={isLoading}
          totalCount={pagedData?.totalCount || 0}
          pageSize={filters.pageSize || 50}
          pageIndex={filters.pageNumber || 1}
          totalPages={pagedData?.totalPages || 1}
          onNextPage={() => setFilters(prev => ({ ...prev, pageNumber: (prev.pageNumber || 1) + 1 }))}
          onPrevPage={() => setFilters(prev => ({ ...prev, pageNumber: Math.max((prev.pageNumber || 1) - 1, 1) }))}
          onRowClick={(row: any) => navigate(`/finance/drawer/history/${row.id}`)}
          emptyEntity="ورديات"
        />
      </div>
    </div>
  );
}
