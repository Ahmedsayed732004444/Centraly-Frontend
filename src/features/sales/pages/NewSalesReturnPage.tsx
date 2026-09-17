import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSalesInvoiceDetails, useCreateSalesReturn } from '../hooks/useSales';
import { ReturnReason } from '../schemas/salesSchemas';
import { AlertCircle, Save } from 'lucide-react';
import { toast } from 'sonner';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
import { InvoiceSearchBar } from '../components/InvoiceSearchBar';
import { InvoiceDetailsCard } from '../components/InvoiceDetailsCard';
import { ReturnItemsTable } from '../components/ReturnItemsTable';
import { ReturnOptionsForm } from '../components/ReturnOptionsForm';
export const NewSalesReturnPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialInvoiceId = searchParams.get('invoiceId') || '';
  const [invoiceId, setInvoiceId] = useState(initialInvoiceId);
  const [searchId, setSearchId] = useState(initialInvoiceId);
  const { data: invoice, isLoading, error: fetchError } = useSalesInvoiceDetails(searchId);
  const createReturn = useCreateSalesReturn();
  const [returnItems, setReturnItems] = useState<{ id: string; returnQty: number }[]>([]);
  const [reason, setReason] = useState<ReturnReason>(ReturnReason.ChangedMind);
  const [isCashRefund, setIsCashRefund] = useState(true);
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(2); // GlobalTransactionCategory.SalesReturn
  const [notes, setNotes] = useState('');
  const handleSearch = () => {
    if (invoiceId.trim()) {
      setSearchId(invoiceId.trim());
      setReturnItems([]); // reset
    }
  };
  const handleReturnQtyChange = (itemId: string, maxQty: number, qty: number) => {
    if (qty < 0) qty = 0;
    if (qty > maxQty) qty = maxQty;
    setReturnItems(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing) {
        return prev.map(i => i.id === itemId ? { ...i, returnQty: qty } : i);
      }
      return [...prev, { id: itemId, returnQty: qty }];
    });
  };
  const handleSubmit = async () => {
    if (!invoice) return;
    const itemsToReturn = returnItems
      .filter(i => i.returnQty > 0)
      .map(i => {
        const originalItem = invoice.items.find(invItem => invItem.id === i.id);
        return {
          productId: originalItem!.productId,
          batchId: originalItem!.batchId,
          quantity: i.returnQty,
          unitPrice: originalItem!.unitPrice
        };
      });
    if (itemsToReturn.length === 0) {
      toast.error('يجب تحديد كمية لمنتج واحد على الأقل للإرجاع');
      return;
    }
    let source: number | undefined = undefined;
    if (isCashRefund) {
      const pSource = await promptPaymentSource();
      if (!pSource) return;
      source = pSource;
    }
    try {
      await createReturn.mutateAsync({
        invoiceId: invoice.id,
        reason,
        notes,
        isCashRefund,
        paymentSource: source,
        items: itemsToReturn
      });
      navigate('/sales/returns');
    } catch (err) {
    }
  };
  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">إضافة مرتجع مبيعات جديد</h1>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 space-y-4 sm:space-y-6">
        <InvoiceSearchBar
          invoiceId={invoiceId}
          onInvoiceIdChange={setInvoiceId}
          onSearch={handleSearch}
        />
        {isLoading && <div className="text-center py-4">جاري البحث...</div>}
        {fetchError && <div className="text-red-500 text-center py-4 flex items-center justify-center gap-2"><AlertCircle size={20} /> الفاتورة غير موجودة</div>}
        {invoice && (
          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 border-t pt-4 sm:pt-6">
            <InvoiceDetailsCard invoice={invoice} />
            <ReturnItemsTable
              invoice={invoice}
              returnItems={returnItems}
              onReturnQtyChange={handleReturnQtyChange}
            />
            <ReturnOptionsForm
              reason={reason}
              onReasonChange={setReason}
              isCashRefund={isCashRefund}
              onCashRefundChange={setIsCashRefund}
              notes={notes}
              onNotesChange={setNotes}
            />
            <div className="flex justify-end pt-4 border-t">
              <button
                onClick={handleSubmit}
                disabled={createReturn.isPending}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                <Save size={20} />
                <span>حفظ المرتجع</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <PaymentSourcePromptModal />
    </div>
  );
};