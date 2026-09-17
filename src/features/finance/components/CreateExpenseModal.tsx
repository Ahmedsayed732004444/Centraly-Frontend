import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { createExpenseSchema, CreateExpenseRequest } from '../schemas/financeSchemas';
import { useRecordExpense, useExpenseCategories } from '../hooks/useFinance';
import { usePaymentSourcePrompt } from '../hooks/usePaymentSourcePrompt';
import { tokens } from '@/shared/styles/tokens';
interface CreateExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function CreateExpenseModal({ isOpen, onClose }: CreateExpenseModalProps) {
  const recordExpense = useRecordExpense();
  const { data: categories } = useExpenseCategories();
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(9);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateExpenseRequest>({
    resolver: zodResolver(createExpenseSchema),
    mode: 'onBlur',
    defaultValues: { categoryId: '', amount: 0, paymentSource: undefined, notes: '' }
  });
  const onSubmit = async (data: CreateExpenseRequest) => {
    const source = await promptPaymentSource();
    if (!source) return; // User closed the prompt
    data.paymentSource = source;
    recordExpense.mutate(data, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return (
    <>
      <PaymentSourcePromptModal />
      <BaseModal isOpen={isOpen} onClose={onClose} title="تسجيل مصروف جديد">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className={tokens.font.label + " block mb-1.5"}>بند المصروف</label>
            <select
              {...register('categoryId')}
              className={tokens.input}
            >
              <option value="">-- اختر البند --</option>
              {categories?.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            {errors.categoryId && <p className="text-red-500 text-xs mt-1">{String(errors.categoryId.message)}</p>}
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
            <label className={tokens.font.label + " block mb-1.5"}>البيان / الملاحظات</label>
            <input
              type="text"
              {...register('notes')}
              className={tokens.input}
              placeholder="مثال: فاتورة كهرباء شهر أغسطس..."
            />
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 mt-2">
            <button type="button" onClick={onClose} className={tokens.btn.ghost + " w-full sm:w-auto"}>
              إلغاء
            </button>
            <button
              type="submit"
              disabled={recordExpense.isPending}
              className={`${tokens.btn.primary} w-full`}
            >
              {recordExpense.isPending ? 'جاري الحفظ...' : 'حفظ المصروف'}
            </button>
          </div>
        </form>
      </BaseModal>
    </>
  );
}