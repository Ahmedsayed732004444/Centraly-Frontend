import { formatCurrency } from '@/shared/utils/currency';
import { formatDateOnly } from '@/shared/utils/date';
import { CornerUpLeft, Printer } from 'lucide-react';
import { SaleType, PaymentMethod, SalesInvoiceResponse } from '../schemas/salesSchemas';
import { Badge } from '@/shared/components/ui/Badge';
import { RowActions } from '@/shared/components/ui/RowActions';

export const getSalesHistoryColumns = (
  onReturnClick: (invoiceId: string) => void,
  onPrintClick?: (invoice: SalesInvoiceResponse) => void
) => [
  {
    header: 'رقم الفاتورة',
    cell: (row: SalesInvoiceResponse) => (
      <div className="flex items-center gap-2">
        <span className="font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
          {row.invoiceNumber}
        </span>
        {row.hasReturns && (
          <Badge variant="danger" className="text-[10px]" title="يوجد مرتجعات على هذه الفاتورة">
            يوجد مرتجع
          </Badge>
        )}
      </div>
    ),
  },
  {
    header: 'العميل',
    cell: (row: SalesInvoiceResponse) => (
      <div className="flex flex-col">
        <span className={row.customer?.name ? 'font-medium text-gray-900' : 'italic text-gray-400'}>
          {row.customer?.name || 'عميل نقدي (بدون اسم)'}
        </span>
        {row.customer?.phone && <span className="text-xs text-gray-500">{row.customer.phone}</span>}
      </div>
    ),
  },
  {
    header: 'تاريخ الفاتورة',
    cell: (row: SalesInvoiceResponse) => formatDateOnly(row.createdAt),
  },
  {
    header: 'نوع الفاتورة',
    cell: (row: SalesInvoiceResponse) => {
      const isWholesale = row.saleType === SaleType.Wholesale;
      return (
        <Badge variant={isWholesale ? 'purple' : 'indigo'}>
          {isWholesale ? 'جملة' : 'قطاعي'}
        </Badge>
      );
    },
  },
  {
    header: 'طريقة الدفع',
    cell: (row: SalesInvoiceResponse) => {
      const isCash = row.paymentMethod === PaymentMethod.Cash;
      return (
        <Badge variant={isCash ? 'success' : 'warning'}>
          {isCash ? 'كاش (نقدي)' : 'آجل (ذمة)'}
        </Badge>
      );
    },
  },
  {
    header: 'الإجمالي',
    cell: (row: SalesInvoiceResponse) => (
      <span className="font-semibold text-gray-900" dir="ltr">{formatCurrency(row.totalAmount)}</span>
    ),
  },
  {
    header: 'الإجراءات',
    cell: (row: SalesInvoiceResponse) => (
      <RowActions
        actions={[
          {
            icon: Printer,
            label: 'طباعة الفاتورة الحرارية (80mm)',
            onClick: () => onPrintClick?.(row),
            hidden: !onPrintClick,
          },
          {
            icon: CornerUpLeft,
            label: 'إرجاع الفاتورة',
            onClick: () => onReturnClick(row.id),
            tone: 'danger',
          },
        ]}
      />
    ),
  },
];
