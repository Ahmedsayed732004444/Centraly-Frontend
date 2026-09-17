import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { receiveDrawerDepositSchema, ReceiveDrawerDepositRequest } from '../schemas/financeSchemas';
import { useDepositFromDrawer } from '../hooks/useFinance';
import { tokens } from '@/shared/styles/tokens';
interface ReceiveDrawerDepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  safeId: string;
}
export function ReceiveDrawerDepositModal({ isOpen, onClose, safeId }: ReceiveDrawerDepositModalProps) {
  const receiveDeposit = useDepositFromDrawer();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReceiveDrawerDepositRequest>({
    resolver: zodResolver(receiveDrawerDepositSchema),
    mode: 'onBlur',
    defaultValues: { drawerSessionId: '', amount: 0, notes: '' }
  });
  const onSubmit = (data: ReceiveDrawerDepositRequest) => {
    receiveDeposit.mutate({ safeId, data }, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="إيداع من الكاشير">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className={tokens.font.label + " block mb-1.5"}>رقم وردية الكاشير</label>
          <input
            type="text"
            {...register('drawerSessionId')}
            className={tokens.input}
            placeholder="أدخل رقم الوردية..."
          />
          {errors.drawerSessionId && <p className="text-red-500 text-xs mt-1">{String(errors.drawerSessionId.message)}</p>}
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
            placeholder="ملاحظات إضافية..."
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 mt-2">
          <button type="button" onClick={onClose} className={tokens.btn.ghost + " w-full sm:w-auto"}>
            إلغاء
          </button>
          <button
            type="submit"
            disabled={receiveDeposit.isPending}
            className={tokens.btn.primary + " w-full sm:w-auto"}
          >
            {receiveDeposit.isPending ? 'جاري الحفظ...' : 'تأكيد الإيداع'}
          </button>
        </div>
      </form>
    </BaseModal>
  );
}