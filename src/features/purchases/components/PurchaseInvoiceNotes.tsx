import { tokens } from '@/shared/styles/tokens';

interface PurchaseInvoiceNotesProps {
  notes: string;
}

export function PurchaseInvoiceNotes({ notes }: PurchaseInvoiceNotesProps) {
  return (
    <div className={`${tokens.card} p-4 border-r-4 border-blue-400 bg-blue-50`}>
      <p className="text-xs text-blue-600 font-semibold mb-1">ملاحظات الفاتورة</p>
      <p className="text-gray-700 text-sm">{notes}</p>
    </div>
  );
}
