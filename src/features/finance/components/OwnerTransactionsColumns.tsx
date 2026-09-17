import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';
import { OwnerTransactionResponse } from '../schemas/financeSchemas';
import { ownerTxDirection, directionStyles } from '@/shared/utils/moneyDirection';
import { DirectionBadge } from '@/shared/components/ui/Badge';

export const getOwnerTransactionsColumns = () => [
  {
    header: 'النوع',
    cell: (row: OwnerTransactionResponse) => {
      const direction = ownerTxDirection(row.category);
      return (
        <DirectionBadge direction={direction}>
          {direction === 'in' ? 'إيداع رأس مال' : 'سحب أرباح'}
        </DirectionBadge>
      );
    },
  },
  {
    header: 'المبلغ',
    cell: (row: OwnerTransactionResponse) => (
      <span dir="ltr" className={`font-semibold inline-block ${directionStyles[ownerTxDirection(row.category)].text}`}>
        {formatCurrency(row.amount)}
      </span>
    ),
  },
  {
    header: 'المصدر',
    cell: (row: OwnerTransactionResponse) => (
      <span className="text-gray-600 text-sm">
        {row.paymentSource === 1 ? 'الدرج' : 'الخزينة'}
      </span>
    ),
  },
  {
    header: 'التاريخ',
    cell: (row: OwnerTransactionResponse) => (
      <span className="text-gray-600 text-sm">
        {formatDateTime(row.createdAt)}
      </span>
    ),
  },
  {
    header: 'ملاحظات',
    cell: (row: OwnerTransactionResponse) => (
      <span className="text-gray-500 text-sm">
        {row.notes || '-'}
      </span>
    ),
  },
];
