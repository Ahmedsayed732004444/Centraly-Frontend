import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPurchaseInvoiceSchema, CreatePurchaseInvoiceRequest } from '../schemas/purchaseSchemas';
import { PurchaseInvoiceHeader } from './purchase-invoice-form/PurchaseInvoiceHeader';
import { PurchaseInvoiceItemsTable } from './purchase-invoice-form/PurchaseInvoiceItemsTable';
import { PurchaseInvoiceSummary } from './purchase-invoice-form/PurchaseInvoiceSummary';

interface PurchaseInvoiceFormProps {
  onSubmit: (data: CreatePurchaseInvoiceRequest) => void;
  isSubmitting?: boolean;
}

export function PurchaseInvoiceForm({ onSubmit, isSubmitting }: PurchaseInvoiceFormProps) {
  const methods = useForm<CreatePurchaseInvoiceRequest>({
    resolver: zodResolver(createPurchaseInvoiceSchema),
    mode: 'onBlur',
    defaultValues: {
      supplierId: '',
      paidAmount: 0,
      notes: '',
      items: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <PurchaseInvoiceHeader />
        <PurchaseInvoiceItemsTable />
        <PurchaseInvoiceSummary isSubmitting={isSubmitting} />
      </form>
    </FormProvider>
  );
}
