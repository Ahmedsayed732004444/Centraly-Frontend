import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';
import { ExpenseResponse } from '../schemas/financeSchemas';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { Badge } from '@/shared/components/ui/Badge';
import { DataTable } from '@/shared/components/ui/DataTable';

interface ExpensesTableProps {
  expenses: ExpenseResponse[] | any;
}

export function ExpensesTable({ expenses }: ExpensesTableProps) {
  const expenseList = Array.isArray(expenses) ? expenses : (expenses?.items || []);

  const getPaymentSourceLabel = (source: string | number) => {
    if (source === '1' || source === 1 || source === 'Drawer') return 'الدرج (درج المبيعات)';
    if (source === '2' || source === 2 || source === 'Safe') return 'الخزينة (الخزينة الرئيسية)';
    return source;
  };

  const columns = [
    {
      header: 'تاريخ المصروف',
      cell: (row: ExpenseResponse) => (
        <span className="text-sm text-gray-600 whitespace-nowrap" dir="ltr">
          {formatDateTime(row.expenseDate)}
        </span>
      ),
    },
    {
      header: 'بند المصروف',
      cell: (row: ExpenseResponse) => (
        <span className="font-medium text-gray-800 whitespace-nowrap">
          {row.categoryName}
        </span>
      ),
    },
    {
      header: 'المبلغ',
      cell: (row: ExpenseResponse) => (
        <span className="font-bold text-red-600 whitespace-nowrap" dir="ltr">
          - {formatCurrency(row.amount)}
        </span>
      ),
    },
    {
      header: 'مصدر الدفع',
      cell: (row: ExpenseResponse) => (
        <Badge variant="neutral">{getPaymentSourceLabel(row.paymentSource)}</Badge>
      ),
    },
    {
      header: 'البيان / الملاحظات',
      cell: (row: ExpenseResponse) => (
        <span className="text-sm text-gray-500 max-w-[220px] truncate block" title={row.notes || '-'}>
          {row.notes || '-'}
        </span>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={expenseList}
      hidePagination
      emptyEntity="مصروفات"
    />
  );
}