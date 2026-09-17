import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { createSupplierPaymentSchema, SupplierResponse } from '../schemas/supplierSchemas';
import { useCreateSupplierPayment } from '../hooks/useSuppliers';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
interface SupplierPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplier: SupplierResponse;
}
export function SupplierPaymentModal({ isOpen, onClose, supplier }: SupplierPaymentModalProps) {
  const createPayment = useCreateSupplierPayment();
  const defaultIsReceipt = supplier.debtBalance < 0;
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(createSupplierPaymentSchema),
    mode: 'onBlur',
    defaultValues: {
      supplierId: supplier.supplierId,
      amount: Math.abs(supplier.debtBalance) > 0 ? Math.abs(supplier.debtBalance) : 0,
      notes: '',
      isReceipt: defaultIsReceipt
    }
  });
  const onSubmit = async (data: any) => {
    // Determine category based on receipt or payment
    const categoryId = data.isReceipt ? 6 : 5; // SupplierReceipt or SupplierPayment
    const source = await promptPaymentSource(categoryId);
    if (!source) return;
    const finalData = {
      ...data,
      amount: data.isReceipt ? -Math.abs(data.amount) : Math.abs(data.amount),
      paymentSource: source
    };
    createPayment.mutate(finalData, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return (
    <>
      <PaymentSourcePromptModal />
      <BaseModal isOpen={isOpen} onClose={onClose} title={`تسوية حساب مع المورد: ${supplier.name}`}>
        <div className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-xl flex flex-wrap justify-between items-center gap-2">
          <span className="text-gray-600 font-semibold">إجمالي الرصيد الحالي للمورد:</span>
          <span className={`text-xl font-bold break-all ${supplier.debtBalance > 0 ? 'text-green-600' : supplier.debtBalance < 0 ? 'text-red-600' : 'text-gray-900'}`}>
            {formatCurrency(supplier.debtBalance)}
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className={tokens.font.label + " block mb-2"}>نوع العملية</label>
            <Controller
              name="isReceipt"
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => field.onChange(false)}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border-2 transition-all ${
                      !field.value
                        ? 'border-green-600 bg-green-50 text-green-700 font-bold'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    <ArrowUpRight size={18} className={!field.value ? 'text-green-600' : 'text-gray-400'} />
                    <span>دفع (تسديد للمورد)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => field.onChange(true)}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border-2 transition-all ${
                      field.value
                        ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    <ArrowDownRight size={18} className={field.value ? 'text-blue-600' : 'text-gray-400'} />
                    <span>قبض (استلام من المورد)</span>
                  </button>
                </div>
              )}
            />
          </div>
          <div>
            <label className={tokens.font.label + " block mb-1.5"}>المبلغ (ج.م)</label>
            <input
              type="number"
              step="1"
              {...register('amount', { valueAsNumber: true })}
              onFocus={(e) => e.target.value === '0' && (e.target.value = '')}
              className={tokens.input}
              placeholder="0"
            />
            {errors.amount && <p className="text-red-500 text-xs mt-1">{String(errors.amount.message)}</p>}
          </div>
          <div>
            <label className={tokens.font.label + " block mb-1.5"}>ملاحظات</label>
            <input
              type="text"
              {...register('notes')}
              className={tokens.input}
              placeholder="مثال: دفعة نقدية أو استرداد نقدي..."
            />
          </div>
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4 mt-2">
            <button type="button" onClick={onClose} className={tokens.btn.ghost + " w-full sm:w-auto"}>
              إلغاء
            </button>
            <button
              type="submit"
              disabled={createPayment.isPending}
              className={tokens.btn.primary + " w-full sm:w-auto"}
            >
              {createPayment.isPending ? 'جاري الحفظ...' : 'حفظ العملية'}
            </button>
          </div>
        </form>
      </BaseModal>
    </>
  );
}