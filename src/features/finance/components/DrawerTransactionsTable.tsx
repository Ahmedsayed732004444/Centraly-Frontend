import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';
import { DrawerTransactionResponse } from '../schemas/financeSchemas';
import { drawerTxDirection, directionStyles } from '@/shared/utils/moneyDirection';
import { DirectionBadge } from '@/shared/components/ui/Badge';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { formatDrawerNotes } from '../utils/formatDrawerNotes';

import { DataTable } from '@/shared/components/ui/DataTable';

const CATEGORY_LABELS: Record<number, string> = {
  1: 'مبيعات',
  2: 'سداد موردين',
  3: 'صيانة',
  4: 'مرتجعات مبيعات',
  5: 'تحصيل ديون عملاء',
  6: 'حركة يدوية',
  7: 'مشتريات نقدية',
  8: 'مرتجع لمورد',
  10: 'عمليات المحافظ',
};

function getCategoryLabel(category: number): string {
  return CATEGORY_LABELS[category] ?? 'عمليات أخرى';
}

interface DrawerTransactionsTableProps {
  transactions: DrawerTransactionResponse[];
}

export function DrawerTransactionsTable({ transactions }: DrawerTransactionsTableProps) {
  const columns = [
    {
      header: 'الوقت',
      cell: (tx: DrawerTransactionResponse) => (
        <span className="text-sm text-gray-600 whitespace-nowrap" dir="ltr">
          {formatDateTime(tx.createdAt)}
        </span>
      ),
    },
    {
      header: 'النوع',
      cell: (tx: DrawerTransactionResponse) => {
        const direction = drawerTxDirection(tx.type);
        return (
          <DirectionBadge direction={direction}>
            {getCategoryLabel(tx.category)}
          </DirectionBadge>
        );
      },
    },
    {
      header: 'المبلغ',
      cell: (tx: DrawerTransactionResponse) => {
        const direction = drawerTxDirection(tx.type);
        return (
          <span className={`${directionStyles[direction].text} font-semibold whitespace-nowrap`} dir="ltr">
            {directionStyles[direction].sign} {formatCurrency(tx.amount)}
          </span>
        );
      },
    },
    {
      header: 'الرصيد بعد الحركة',
      cell: (tx: DrawerTransactionResponse) => (
        <span className="font-semibold text-gray-800 whitespace-nowrap" dir="ltr">
          {formatCurrency(tx.balance)}
        </span>
      ),
    },
    {
      header: 'المصدر / الملاحظات',
      cell: (tx: DrawerTransactionResponse) => (
        <span className="text-sm text-gray-500 max-w-[220px] truncate block" title={formatDrawerNotes(tx.notes, tx.source)}>
          {formatDrawerNotes(tx.notes, tx.source)}
        </span>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={transactions}
      hidePagination
      emptyEntity="حركات في هذه الوردية"
    />
  );
}