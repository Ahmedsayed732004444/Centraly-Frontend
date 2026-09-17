import { Receipt, Printer, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { useSalesInvoiceDetails } from '@/features/sales/hooks/useSales';
import { formatCurrency } from '@/shared/utils/currency';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { Spinner } from '@/shared/components/ui/Spinner';
import { printThermalReceipt } from '../utils/thermalReceiptPrint';
interface InvoiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoiceId: string | null;
}
export function InvoiceDetailsModal({ isOpen, onClose, invoiceId }: InvoiceDetailsModalProps) {
  const { data: invoice, isLoading } = useSalesInvoiceDetails(invoiceId || '');
  return (
    <BaseModal
      isOpen={isOpen && !!invoiceId}
      onClose={onClose}
      title="تفاصيل الفاتورة"
      subtitle={invoice ? `رقم الفاتورة: ${invoice.invoiceNumber}` : undefined}
      size="3xl"
    >
      <div>
        {isLoading ? (
          <div className="py-12 flex justify-center">
            <Spinner size={32} />
          </div>
        ) : invoice ? (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--color-text-muted)] font-medium">رقم الفاتورة:</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm sm:text-base font-black font-mono bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-1 rounded-lg">
                    #{invoice.invoiceNumber}
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(invoice.invoiceNumber);
                      toast.success('تم نسخ رقم الفاتورة بنجاح');
                    }}
                    className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors border border-transparent hover:border-blue-200 flex items-center justify-center"
                    title="نسخ رقم الفاتورة"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => printThermalReceipt(invoice)}
                className="flex items-center gap-2 px-3.5 py-2 bg-gray-900 hover:bg-black text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-[0.98]"
              >
                <Printer size={16} />
                <span>طباعة حرارية (Xprinter 80mm)</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-[var(--color-page-bg)] rounded-xl p-3 sm:p-4 border border-[var(--color-border)]">
                <span className="text-sm text-[var(--color-text-muted)] block mb-1">الإجمالي</span>
                <span className="text-xl font-bold text-[var(--color-text-main)]" dir="ltr">
                  {formatCurrency(invoice.totalAmount)}
                </span>
              </div>
              <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 border border-emerald-100">
                <span className="text-sm text-emerald-700 block mb-1">المدفوع</span>
                <span className="text-xl font-bold text-emerald-700" dir="ltr">
                  {formatCurrency(invoice.paidAmount)}
                </span>
              </div>
              <div className="bg-red-50 rounded-xl p-3 sm:p-4 border border-red-100">
                <span className="text-sm text-[var(--color-danger)] block mb-1">المتبقي (آجل)</span>
                <span className="text-xl font-bold text-[var(--color-danger)]" dir="ltr">
                  {formatCurrency(invoice.remainingAmount)}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-3 flex items-center gap-2">
                <Receipt size={18} /> المنتجات المباعة
              </h3>
              <div className="border border-[var(--color-border)] rounded-xl overflow-x-auto">
                <table className="w-full min-w-[480px] text-right text-sm">
                  <thead className="border-b border-[var(--color-border)] text-[var(--color-text-muted)] font-semibold text-xs">
                    <tr>
                      <th className="px-4 py-3">المنتج</th>
                      <th className="px-4 py-3">الكمية</th>
                      <th className="px-4 py-3">سعر الوحدة</th>
                      <th className="px-4 py-3">الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {invoice.items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3 font-medium">{item.productName || 'منتج غير معروف'}</td>
                        <td className="px-4 py-3">
                          {item.quantity}
                          {item.returnedQuantity > 0 && (
                            <span className="text-xs text-[var(--color-danger)] mr-2 block">
                              (تم استرجاع {item.returnedQuantity})
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3" dir="ltr">
                          {formatCurrency(item.unitPrice)}
                        </td>
                        <td className="px-4 py-3 font-bold" dir="ltr">
                          {formatCurrency(item.lineTotal)}
                        </td>
                      </tr>
                    ))}
                    {invoice.items.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-4 py-8 text-center text-[var(--color-text-muted)]">
                          لا يوجد منتجات
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-12 text-center text-[var(--color-danger)] font-bold">حدث خطأ أثناء تحميل الفاتورة</div>
        )}
      </div>
    </BaseModal>
  );
}