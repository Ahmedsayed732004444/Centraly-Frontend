import { useFormContext } from 'react-hook-form';
import { formatCurrency, roundMoney } from '@/shared/utils/currency';
import { tokens } from '@/shared/styles/tokens';
import { CreatePurchaseInvoiceRequest } from '../../schemas/purchaseSchemas';
import { ClearablePriceInput } from '@/shared/components/ui/ClearablePriceInput';

interface PurchaseInvoiceSummaryProps {
  isSubmitting?: boolean;
}

export function PurchaseInvoiceSummary({ isSubmitting }: PurchaseInvoiceSummaryProps) {
  const { register, watch, setValue } = useFormContext<CreatePurchaseInvoiceRequest>();
  
  const watchItems = watch('items');
  const watchPaidAmount = watch('paidAmount');

  const totalInvoice = roundMoney((watchItems || []).reduce((acc, item) => acc + ((item.quantity || 0) * (item.unitCost || 0)), 0));
  const remaining = roundMoney(totalInvoice - (watchPaidAmount || 0));
  const hasItems = watchItems && watchItems.length > 0;

  return (
    <div className={`${tokens.card} p-6 bg-white`}>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className={`${tokens.font.label} mb-2 block`}>ملاحظات الفاتورة</label>
            <textarea
              {...register('notes')}
              rows={5}
              className={tokens.input}
              placeholder="أي ملاحظات إضافية على الفاتورة..."
            />
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-xl border border-[var(--color-border)] flex flex-col gap-4">
          <div className="flex justify-between items-center text-lg">
            <span className="text-[var(--color-text-muted)]">إجمالي الفاتورة:</span>
            <span className="font-bold text-[var(--color-text-main)]">
              {formatCurrency(totalInvoice)}
            </span>
          </div>
          <div>
            <label className={`${tokens.font.label} mb-2 block`}>
              المبلغ المدفوع (سداد نقدي من الخزينة/الدرج)
            </label>
            <ClearablePriceInput
              registration={register('paidAmount', { valueAsNumber: true })}
              setValue={setValue}
              name="paidAmount"
              currentValue={watchPaidAmount}
              className={`${tokens.input} text-xl font-bold text-green-700`}
            />
            <p className={`${tokens.font.helperText} mt-1`}>
              اتركه 0 إذا كانت الفاتورة آجلة بالكامل.
            </p>
          </div>
          <div className="h-px bg-gray-300 w-full" />
          <div className="flex justify-between items-center text-xl">
            <span className="text-[var(--color-text-main)] font-bold">المتبقي للمورد:</span>
            <span className={`font-bold ${remaining > 0 ? 'text-red-600' : 'text-[var(--color-text-main)]'}`}>
              {formatCurrency(remaining)}
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !hasItems}
            className={`${tokens.btn.primary} w-full py-3 mt-2 text-lg disabled:opacity-50`}
          >
            {isSubmitting ? 'جاري الحفظ...' : 'حفظ الفاتورة'}
          </button>
        </div>
      </div>
    </div>
  );
}
