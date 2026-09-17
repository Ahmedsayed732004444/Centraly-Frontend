import { useState } from 'react';
import { useExpenses } from '../hooks/useFinance';
import { ExpensesTable } from '../components/ExpensesTable';
import { CreateExpenseModal } from '../components/CreateExpenseModal';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { ExpensesPageHeader } from '../components/ExpensesPageHeader';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { normalizePaginated } from '@/shared/utils/fetchAllPages';
import { ExpenseResponse } from '../schemas/financeSchemas';
import { formatDateTime } from '@/shared/utils/date';

export function ExpensesPage() {
  const { data: expensesData, isLoading } = useExpenses({ pageNumber: 1, pageSize: 50 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="space-y-6">
      <ExpensesPageHeader onAddExpense={() => setIsModalOpen(true)} />

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">سجل المصروفات</h3>
          <ExportExcelButton
            onExport={async () => {
              const rows = normalizePaginated(expensesData || []).items;
              await exportToExcel<ExpenseResponse>({
                fileName: 'سجل-المصروفات',
                sheetName: 'المصروفات',
                title: 'سجل المصروفات',
                columns: [
                  { header: 'تاريخ المصروف', value: (r) => formatDateTime(r.expenseDate) },
                  { header: 'بند المصروف', value: (r) => r.categoryName },
                  { header: 'المبلغ', value: (r) => r.amount, money: true },
                  { header: 'مصدر الدفع', value: (r) => (r.paymentSource === '1' || r.paymentSource === 'Drawer' ? 'الدرج' : 'الخزينة') },
                  { header: 'ملاحظات', value: (r) => r.notes || '-', width: 30, align: 'right' },
                ],
                rows,
              });
            }}
          />
        </div>
        <ExpensesTable expenses={expensesData || []} />
      </div>

      {isModalOpen && (
        <CreateExpenseModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}
