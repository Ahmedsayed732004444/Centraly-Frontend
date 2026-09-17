import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';
import { DrawerTransactionResponse } from '../schemas/financeSchemas';
import { drawerTxDirection, directionStyles } from '@/shared/utils/moneyDirection';
import { DirectionBadge } from '@/shared/components/ui/Badge';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { formatDrawerNotes } from '../utils/formatDrawerNotes';

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
  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-100">
        <EmptyState entity="حركات في هذه الوردية" />
      </div>
    );
  }
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 -webkit-overflow-scrolling-touch">
      <table className="w-full min-w-[720px] text-right border-collapse">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">الوقت</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">النوع</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">المبلغ</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray-500 whitespace-nowrap">الرصيد بعد الحركة</th>
            <th className="px-4 py-3 text-xs font-semibold text-gray-500">المصدر / الملاحظات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactions.map((tx) => {
            const direction = drawerTxDirection(tx.type);
            return (
              <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap" dir="ltr">
                  {formatDateTime(tx.createdAt)}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <DirectionBadge direction={direction}>
                    {getCategoryLabel(tx.category)}
                  </DirectionBadge>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap" dir="ltr">
                  <span className={directionStyles[direction].text}>
                    {directionStyles[direction].sign} {formatCurrency(tx.amount)}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap" dir="ltr">
                  {formatCurrency(tx.balance)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 max-w-[220px] truncate" title={formatDrawerNotes(tx.notes, tx.source)}>
                  {formatDrawerNotes(tx.notes, tx.source)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}