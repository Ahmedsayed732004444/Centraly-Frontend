import { Printer, CheckCircle, Clock } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { formatDateTime } from '@/shared/utils/date';
import { Badge } from '@/shared/components/ui/Badge';
interface PurchaseInvoiceHeaderProps {
  invoiceDate: string;
  isPaid: boolean;
  onPrint: () => void;
}
export function PurchaseInvoiceHeader({ invoiceDate, isPaid, onPrint }: PurchaseInvoiceHeaderProps) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-gray-500 text-sm">
          {formatDateTime(invoiceDate)}
        </span>
        <Badge variant={isPaid ? 'success' : 'warning'}>
          {isPaid
            ? <><CheckCircle size={13} /> مدفوعة بالكامل</>
            : <><Clock size={13} /> متبقي دفع</>
          }
        </Badge>
      </div>
      <button
        className={`${tokens.btn.secondary} flex items-center gap-2`}
        onClick={onPrint}
      >
        <Printer size={16} />
        <span>طباعة</span>
      </button>
    </div>
  );
}