import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';
import { CheckCircle } from 'lucide-react';
import { Badge } from '@/shared/components/ui/Badge';

export const getDrawerHistoryColumns = () => [
  {
    header: 'النوع',
    cell: (item: any) => (
      <span className="font-semibold text-gray-700">
        {item.type === 1 ? 'مبيعات' : item.type === 2 ? 'صيانة' : 'غير محدد'}
      </span>
    )
  },
  {
    header: 'الحالة',
    cell: (item: any) => item.isClosed ? (
      <Badge variant="neutral" icon={<CheckCircle className="w-4 h-4" />}>مغلقة</Badge>
    ) : (
      <Badge variant="success" icon={<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}>جارية الآن</Badge>
    )
  },
  {
    header: 'وقت الفتح',
    cell: (item: any) => <span dir="ltr">{formatDateTime(item.openedAt)}</span>
  },
  {
    header: 'وقت الإغلاق',
    cell: (item: any) => item.closedAt ? <span dir="ltr">{formatDateTime(item.closedAt)}</span> : '-'
  },
  {
    header: 'الرصيد الافتتاحي',
    cell: (item: any) => <span dir="ltr" className="font-medium text-gray-700">{formatCurrency(item.openingBalance)}</span>
  },
  {
    header: 'إجمالي المبيعات/الداخل',
    cell: (item: any) => <span dir="ltr" className="font-semibold text-green-600">+{formatCurrency(item.totalIncome || 0)}</span>
  },
  {
    header: 'صافي أرباح الوردية',
    cell: (item: any) => <span dir="ltr" className="font-bold text-blue-600">{formatCurrency(item.totalProfit ?? 0)}</span>
  },
  {
    header: 'الرصيد النهائي للصندوق',
    cell: (item: any) => <span dir="ltr" className="font-bold text-blue-700">{formatCurrency(item.closingBalance || 0)}</span>
  }
];
