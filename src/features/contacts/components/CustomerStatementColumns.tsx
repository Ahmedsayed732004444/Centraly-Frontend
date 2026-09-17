import { ArrowDownLeft, ArrowUpRight, Calendar, ReceiptText } from 'lucide-react';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';
import { CustomerStatementResponse } from '../schemas/contactSchemas';
import { Badge } from '@/shared/components/ui/Badge';

export const getCustomerStatementColumns = () => [
  {
    header: 'التاريخ',
    cell: (row: CustomerStatementResponse) => (
      <div className="flex items-center gap-2 text-gray-600">
        <Calendar size={16} />
        {formatDateTime(row.date)}
      </div>
    ),
  },
  {
    header: 'نوع العملية',
    cell: (row: CustomerStatementResponse) => {
      const isInvoice = row.transactionType.includes('Invoice') || row.transactionType === 'فاتورة';
      const isPayment = row.transactionType.includes('Payment') || row.transactionType === 'دفعة';
      const isReturn = row.transactionType.includes('Return') || row.transactionType === 'مرتجع';

      if (isInvoice) return (
        <Badge variant="warning" icon={<ReceiptText size={12} className="opacity-70" />}>
          فاتورة مبيعات
        </Badge>
      );
      if (isPayment) return <Badge variant="success">سداد مديونية</Badge>;
      if (isReturn) return <Badge variant="danger">مرتجع مبيعات</Badge>;

      return <Badge variant="neutral">{row.transactionType}</Badge>;
    },
  },
  {
    header: 'البيان',
    cell: (row: CustomerStatementResponse) => (
      <span className="text-gray-600 max-w-[200px] truncate block" title={row.notes || '-'}>
        {row.notes || '-'}
      </span>
    ),
  },
  {
    header: 'مدين (عليه)',
    cell: (row: CustomerStatementResponse) => row.debit > 0 ? (
      <span className="text-red-600 font-bold flex items-center gap-1" dir="ltr">
        <ArrowUpRight size={16} /> {formatCurrency(row.debit)}
      </span>
    ) : <span className="text-gray-400">-</span>,
  },
  {
    header: 'دائن (له)',
    cell: (row: CustomerStatementResponse) => row.credit > 0 ? (
      <span className="text-green-600 font-bold flex items-center gap-1" dir="ltr">
        <ArrowDownLeft size={16} /> {formatCurrency(row.credit)}
      </span>
    ) : <span className="text-gray-400">-</span>,
  },
  {
    header: 'الرصيد بعد العملية',
    cell: (row: CustomerStatementResponse) => {
      if (row.balanceAfter === 0) return <span className="text-gray-500 font-bold" dir="ltr">{formatCurrency(0)}</span>;
      if (row.balanceAfter > 0) return <span className="text-red-600 font-bold" dir="ltr">{formatCurrency(row.balanceAfter)}</span>;
      return <span className="text-green-600 font-bold" dir="ltr">{formatCurrency(Math.abs(row.balanceAfter))} (مقدم)</span>;
    },
  }
];
