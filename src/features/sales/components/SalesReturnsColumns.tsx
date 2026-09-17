import { formatCurrency } from '@/shared/utils/currency';
import { formatDateOnly } from '@/shared/utils/date';
import { ReturnReason, SalesReturnResponse } from '../schemas/salesSchemas';
import { Badge } from '@/shared/components/ui/Badge';

export const getReasonLabel = (reason: ReturnReason) => {
  switch (reason) {
    case ReturnReason.Defect: return 'تالف / عيب صناعة';
    case ReturnReason.ChangedMind: return 'تغيير رأي العميل';
    case ReturnReason.Other: return 'أخرى';
    default: return 'غير معروف';
  }
};

export const getSalesReturnsColumns = () => [
  {
    header: 'تاريخ المرتجع',
    cell: (row: SalesReturnResponse) => formatDateOnly(row.returnDate),
  },
  {
    header: 'رقم الفاتورة الأصلية',
    cell: (row: SalesReturnResponse) => row.invoiceNumber || row.invoiceId?.substring(0, 8) || '-',
  },
  {
    header: 'السبب',
    cell: (row: SalesReturnResponse) => getReasonLabel(row.reason),
  },
  {
    header: 'طريقة الاسترداد',
    cell: (row: SalesReturnResponse) => (
      <Badge variant={row.isCashRefund ? 'warning' : 'indigo'}>
        {row.isCashRefund ? 'نقدي (كاش)' : 'خصم من المديونية'}
      </Badge>
    ),
  },
  {
    header: 'إجمالي المرتجع',
    cell: (row: SalesReturnResponse) => (
      <span className="font-bold text-red-600">
        {formatCurrency(row.totalReturnedAmount)}
      </span>
    ),
  }
];
