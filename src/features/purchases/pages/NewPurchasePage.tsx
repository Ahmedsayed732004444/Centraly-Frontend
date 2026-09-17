import { useEffect } from 'react';
import { PurchaseInvoiceForm } from '../components/PurchaseInvoiceForm';
import { useCreatePurchaseInvoice } from '../hooks/usePurchases';
import { toast } from 'sonner';
import { getApiErrorMessage } from '@/shared/utils/apiError';
import { CreatePurchaseInvoiceRequest } from '../schemas/purchaseSchemas';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useNavigate } from 'react-router-dom';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';

export function NewPurchasePage() {
  const { mutate: createInvoice, isPending } = useCreatePurchaseInvoice();
  const { setTitle, setBackButton } = useHeaderStore();
  const navigate = useNavigate();
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(3); // GlobalTransactionCategory.CashPurchase

  useEffect(() => {
    setTitle("فاتورة مشتريات جديدة");
    setBackButton(true, "/purchases/history");
    return () => setBackButton(false);
  }, [setTitle, setBackButton]);

  const handleSubmit = async (data: CreatePurchaseInvoiceRequest) => {
    if (data.paidAmount > 0) {
      const source = await promptPaymentSource();
      if (!source) return; // User closed the prompt
      data.paymentSource = source;
    }

    createInvoice(data, {
      onSuccess: () => {
        toast.success("تم حفظ فاتورة المشتريات بنجاح وإضافة الكميات!");
        navigate("/purchases/history");
      },
      onError: (err: unknown) => {
        toast.error(getApiErrorMessage(err, "حدث خطأ أثناء حفظ الفاتورة"));
      }
    });
  };

  return (
    <>
      <PaymentSourcePromptModal />
      <div className="space-y-4 w-full">
        <PurchaseInvoiceForm onSubmit={handleSubmit} isSubmitting={isPending} />
      </div>
    </>
  );
}
