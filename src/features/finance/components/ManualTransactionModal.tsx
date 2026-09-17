import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { addManualTransactionSchema, AddManualTransactionRequest } from '../schemas/financeSchemas';
import { useAddDrawerTransaction } from '../hooks/useFinance';
import { tokens } from '@/shared/styles/tokens';
interface ManualTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  drawerType: number;
}
export function ManualTransactionModal({ isOpen, onClose, drawerType }: ManualTransactionModalProps) {
  const addTransaction = useAddDrawerTransaction();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AddManualTransactionRequest>({
    resolver: zodResolver(addManualTransactionSchema),
    mode: 'onBlur',
    defaultValues: { type: 1, category: 3, amount: 0, notes: '', source: '' }
  });
  const transactionType = watch('type');
  const onSubmit = (data: AddManualTransactionRequest) => {
    data.category = 6;
    data.drawerType = drawerType;
    addTransaction.mutate(data, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="إضافة معاملة يدوية للدرج">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label
            onClick={() => { setValue('type', 1, { shouldValidate: true }); setValue('category', 3); }}
            className={`
            cursor-pointer rounded-xl border-2 p-4 text-center transition-all
            ${transactionType === 1 ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 hover:border-gray-300'}
          `}>
            <div className="font-semibold text-lg">إيداع نقدي</div>
            <div className="text-sm opacity-80 mt-1">إضافة فلوس للدرج</div>
          </label>
          <label
            onClick={() => { setValue('type', 2, { shouldValidate: true }); setValue('category', 4); }}
            className={`
            cursor-pointer rounded-xl border-2 p-4 text-center transition-all
            ${transactionType === 2 ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200 hover:border-gray-300'}
          `}>
            <div className="font-semibold text-lg">سحب نقدي</div>
            <div className="text-sm opacity-80 mt-1">أخذ فلوس من الدرج</div>
          </label>
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
          <label className={tokens.font.label + " block mb-1.5"}>البيان / السبب *</label>
          <input
            type="text"
            {...register('notes')}
            className={tokens.input}
            placeholder="مثال: فكة إضافية، شراء شاي..."
          />
          {errors.notes && <p className="text-red-500 text-xs mt-1">{String(errors.notes.message)}</p>}
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 mt-2">
          <button type="button" onClick={onClose} className={tokens.btn.ghost + " w-full sm:w-auto"}>
            إلغاء
          </button>
          <button
            type="submit"
            disabled={addTransaction.isPending}
            className={tokens.btn.primary + " w-full sm:w-auto"}
          >
            {addTransaction.isPending ? 'جاري الحفظ...' : 'حفظ المعاملة'}
          </button>
        </div>
      </form>
    </BaseModal>
  );
}