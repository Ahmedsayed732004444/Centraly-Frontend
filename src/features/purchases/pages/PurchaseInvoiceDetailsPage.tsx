import { useParams, useNavigate } from 'react-router-dom';
import { usePurchaseInvoice } from '../hooks/usePurchases';
import { AlertCircle } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { BackButton } from '@/shared/components/ui/BackButton';
import { Spinner } from '@/shared/components/ui/Spinner';
import { useEffect } from 'react';
import { PurchaseInvoiceHeader } from '../components/PurchaseInvoiceHeader';
import { PurchaseInvoiceSummaryCards } from '../components/PurchaseInvoiceSummaryCards';
import { PurchaseInvoiceNotes } from '../components/PurchaseInvoiceNotes';
import { PurchaseInvoiceItemsTable } from '../components/PurchaseInvoiceItemsTable';

export function PurchaseInvoiceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();

  const { data: invoice, isLoading, error } = usePurchaseInvoice(id!);

  useEffect(() => {
    if (invoice) {
      setTitle(`فاتورة مشتريات #${invoice.invoiceNumber}`);
    } else {
      setTitle('تفاصيل الفاتورة');
    }
    setBackButton(true, "/purchases/history");
    return () => setBackButton(false);
  }, [invoice, setTitle, setBackButton]);

  if (isLoading) {
    return (
      <div className="p-6 h-screen bg-gray-50">
        <BackButton to="/purchases/history" label="رجوع للسجل" />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Spinner size={40} className="mx-auto mb-3" />
            <p className="text-gray-500">جاري تحميل تفاصيل الفاتورة...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !invoice) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <AlertCircle size={48} className="text-red-400" />
        <p className="text-gray-500">الفاتورة غير موجودة أو حدث خطأ أثناء التحميل.</p>
        <button className={tokens.btn.primary} onClick={() => navigate('/purchases/history')}>
          العودة لسجل المشتريات
        </button>
      </div>
    );
  }

  const isPaid = invoice.remainingAmount <= 0;

  return (
    <div className="space-y-5 max-w-5xl mx-auto">
      <PurchaseInvoiceHeader
        invoiceDate={invoice.invoiceDate}
        isPaid={isPaid}
        onPrint={() => window.print()}
      />

      <PurchaseInvoiceSummaryCards
        supplier={invoice.supplier}
        totalAmount={invoice.totalAmount}
        paidAmount={invoice.paidAmount}
        remainingAmount={invoice.remainingAmount}
      />

      {invoice.notes && <PurchaseInvoiceNotes notes={invoice.notes} />}

      <PurchaseInvoiceItemsTable
        items={invoice.items || []}
        totalAmount={invoice.totalAmount}
      />
    </div>
  );
}


