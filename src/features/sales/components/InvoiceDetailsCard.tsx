import { formatCurrency } from '@/shared/utils/currency';
import { SalesInvoiceResponse } from '../schemas/salesSchemas';

interface InvoiceDetailsCardProps {
  invoice: SalesInvoiceResponse;
}

export function InvoiceDetailsCard({ invoice }: InvoiceDetailsCardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg">
      <div>
        <p className="text-sm text-gray-500">رقم الفاتورة</p>
        <p className="font-semibold">{invoice.invoiceNumber}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">العميل</p>
        <p className="font-semibold">{invoice.customer?.name || 'نقدي'}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">الإجمالي</p>
        <p className="font-semibold text-blue-600">{formatCurrency(invoice.totalAmount)}</p>
      </div>
    </div>
  );
}
