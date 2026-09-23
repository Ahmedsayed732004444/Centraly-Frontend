import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';
import { SafeTransactionResponse } from '../schemas/financeSchemas';
import { DRAWER_TRANSACTION_TYPE_LABELS } from '@/shared/utils/enumLabels';
import { safeTxDirection, directionStyles } from '@/shared/utils/moneyDirection';
import { DirectionBadge } from '@/shared/components/ui/Badge';
import { DataTable } from '@/shared/components/ui/DataTable';

interface SafeTransactionsTableProps {
  transactions: SafeTransactionResponse[] | any;
}

// Income/Expense sourced from the shared enum label module (src/shared/utils/enumLabels.ts)
// so this table's copy stays in sync with every other place that translates
// DrawerTransactionType; the extra keys below aren't part of that backend enum and stay local.
const TYPE_TRANSLATIONS: Record<string, string> = {
  ...DRAWER_TRANSACTION_TYPE_LABELS,
  'Income': 'إيداع', // overrides the shared "إيراد" - this table's own wording
  'Withdrawal': 'سحب',
  'Purchases': 'مشتريات',
  'Sales': 'مبيعات',
};

const CATEGORY_TRANSLATIONS: Record<string, string> = {
  'ManualDeposit': 'إيداع يدوي',
  'ManualWithdrawal': 'سحب يدوي',
  'Purchases': 'مشتريات',
  'Sales': 'مبيعات',
  'Expenses': 'مصروفات',
  'DrawerDeposit': 'استلام من الدرج',
  'DrawerWithdrawal': 'تحويل للدرج',
  'OwnerDeposit': 'إيداع المالك',
  'OwnerWithdrawal': 'مسحوبات المالك',
  'SupplierReturn': 'مرتجع مورد',
  'SalesReturn': 'مرتجع مبيعات',
  'Maintenance': 'صيانة',
};

export function SafeTransactionsTable({ transactions }: SafeTransactionsTableProps) {
  const txList = Array.isArray(transactions) ? transactions : (transactions?.items || []);

  const columns = [
    {
      header: 'التاريخ',
      cell: (tx: SafeTransactionResponse) => (
        <span className="text-sm text-gray-600 whitespace-nowrap" dir="ltr">
          {formatDateTime(tx.createdAt)}
        </span>
      ),
    },
    {
      header: 'النوع',
      cell: (tx: SafeTransactionResponse) => {
        const direction = safeTxDirection(tx.transactionType);
        return (
          <DirectionBadge direction={direction}>
            {TYPE_TRANSLATIONS[tx.transactionType] || tx.transactionType}
          </DirectionBadge>
        );
      },
    },
    {
      header: 'التصنيف',
      cell: (tx: SafeTransactionResponse) => (
        <span className="text-sm text-gray-600 whitespace-nowrap">
          {tx.category ? (CATEGORY_TRANSLATIONS[tx.category] || tx.category) : '-'}
        </span>
      ),
    },
    {
      header: 'المبلغ',
      cell: (tx: SafeTransactionResponse) => {
        const direction = safeTxDirection(tx.transactionType);
        return (
          <span className={`${directionStyles[direction].text} font-semibold whitespace-nowrap`} dir="ltr">
            {directionStyles[direction].sign} {formatCurrency(Math.abs(tx.amount))}
          </span>
        );
      },
    },
    {
      header: 'الرصيد بعد الحركة',
      cell: (tx: SafeTransactionResponse) => (
        <span className="font-semibold text-gray-800 whitespace-nowrap" dir="ltr">
          {formatCurrency(tx.balanceAfter)}
        </span>
      ),
    },
    {
      header: 'ملاحظات',
      cell: (tx: SafeTransactionResponse) => (
        <span className="text-sm text-gray-500 max-w-[220px] truncate block" title={tx.notes || '-'}>
          {tx.notes || '-'}
        </span>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={txList}
      hidePagination
      emptyEntity="حركات في هذه الخزينة"
    />
  );
}