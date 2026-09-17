import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { createExpenseSchema, CreateExpenseRequest } from '../schemas/financeSchemas';
import { useRecordExpense, useExpenseCategories, useCreateExpenseCategory } from '../hooks/useFinance';
import { usePaymentSourcePrompt } from '../hooks/usePaymentSourcePrompt';
import { tokens } from '@/shared/styles/tokens';
import { Plus } from 'lucide-react';

interface CreateExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateExpenseModal({ isOpen, onClose }: CreateExpenseModalProps) {
  const recordExpense = useRecordExpense();
  const { data: categories } = useExpenseCategories();
  const createCategory = useCreateExpenseCategory();
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(9);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CreateExpenseRequest>({
    resolver: zodResolver(createExpenseSchema),
    mode: 'onBlur',
    defaultValues: { categoryId: '', amount: 0, paymentSource: undefined, notes: '' }
  });

  const onSubmit = async (data: CreateExpenseRequest) => {
    const source = await promptPaymentSource();
    if (!source) return; 
    data.paymentSource = source;
    recordExpense.mutate(data, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };

  const handleAddCategory = () => {
    const name = window.prompt('اسم بند المصروف الجديد:');
    if (name && name.trim()) {
      createCategory.mutate({ name: name.trim() }, {
        onSuccess: (newCategory) => {
          if (newCategory?.id) {
            setValue('categoryId', newCategory.id, { shouldValidate: true });
          }
        }
      });
    }
  };

  return (
    <>
      <PaymentSourcePromptModal />
      <BaseModal isOpen={isOpen} onClose={onClose} title="تسجيل مصروف جديد">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className={tokens.font.label}>بند المصروف</label>
              <button 
                type="button" 
                onClick={handleAddCategory}
                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium bg-blue-50 px-2 py-1 rounded transition-colors disabled:opacity-50"
                disabled={createCategory.isPending}
              >
                <Plus className="w-3 h-3" />
                {createCategory.isPending ? 'جاري الإضافة...' : 'بند جديد'}
              </button>
            </div>
            <select
              {...register('categoryId')}
              className={tokens.input}
              disabled={createCategory.isPending}
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