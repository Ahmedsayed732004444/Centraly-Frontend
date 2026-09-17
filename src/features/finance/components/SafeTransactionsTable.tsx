import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';
import { SafeTransactionResponse } from '../schemas/financeSchemas';
import { DRAWER_TRANSACTION_TYPE_LABELS } from '@/shared/utils/enumLabels';
import { safeTxDirection, directionStyles } from '@/shared/utils/moneyDirection';
import { DirectionBadge } from '@/shared/components/ui/Badge';
import { EmptyState } from '@/shared/components/ui/EmptyState';
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
  if (!txList || txList.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-100">
        <EmptyState entity="حركات في هذه الخزينة" />
      </div>
    );
  }
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 -webkit-overflow-scrolling-touch">
      <table className="w-full min-w-[820px] text-right border-collapse">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">التاريخ</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">النوع</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">التصنيف</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">المبلغ</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">الرصيد بعد الحركة</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray-500">ملاحظات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {txList.map((tx: SafeTransactionResponse) => {
            const direction = safeTxDirection(tx.transactionType);
            return (
              <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap" dir="ltr">
                  {formatDateTime(tx.createdAt)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <DirectionBadge direction={direction}>
                    {TYPE_TRANSLATIONS[tx.transactionType] || tx.transactionType}
                  </DirectionBadge>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                  {tx.category ? (CATEGORY_TRANSLATIONS[tx.category] || tx.category) : '-'}
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap" dir="ltr">
                  <span className={directionStyles[direction].text}>
                    {directionStyles[direction].sign} {formatCurrency(Math.abs(tx.amount))}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap" dir="ltr">
                  {formatCurrency(tx.balanceAfter)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 max-w-[220px] truncate" title={tx.notes || '-'}>
                  {tx.notes || '-'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}