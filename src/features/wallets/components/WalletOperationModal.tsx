import { X, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { WalletResponse, WalletOperationType } from '../schemas/walletSchemas';

interface WalletOperationModalProps {
  isOpen: boolean;
  selectedWallet: WalletResponse | null;
  operationType: WalletOperationType;
  profit: number;
  form: any;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  isProcessing: boolean;
}

export function WalletOperationModal({
  isOpen,
  selectedWallet,
  operationType,
  profit,
  form,
  onSubmit,
  onClose,
  isProcessing
}: WalletOperationModalProps) {
  if (!isOpen || !selectedWallet) return null;

  const isRecharge = operationType === WalletOperationType.Recharge;
  const isCashIn = operationType === WalletOperationType.CashIn;
  const isCashOut = operationType === WalletOperationType.CashOut;

  const title = isRecharge 
    ? 'عملية شحن رصيد' 
    : isCashIn 
    ? 'عملية بيع' 
    : 'عملية سحب';

  const headerBg = isRecharge
    ? 'bg-blue-600'
    : isCashOut
    ? 'bg-rose-600'
    : 'bg-[#0f8e4c]';

  const btnBg = isRecharge
    ? 'bg-blue-600 hover:bg-blue-700'
    : isCashOut
    ? 'bg-rose-600 hover:bg-rose-700'
    : 'bg-[#0f8e4c] hover:bg-[#0c7a40]';

  const transferredLabel = isRecharge
    ? 'اتشحن بكام للزبون؟ *'
    : isCashIn
    ? 'هتحول كام للمحفظة؟ *'
    : 'الزبون حولك كام؟ *';

  const physicalCashLabel = isRecharge
    ? 'الزبون دفعلك كام كاش؟ *'
    : isCashIn
    ? 'أخدت كاش كام من الزبون؟ *'
    : 'هتدي للزبون كاش كام؟ *';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto overflow-x-hidden animate-in fade-in zoom-in-95 duration-200"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={`p-4 text-white flex justify-between items-center gap-3 ${headerBg}`}>
          <h2 className="text-base sm:text-lg font-bold flex items-center gap-2 min-w-0">
            {isRecharge ? (
              <Smartphone size={20} className="shrink-0" />
            ) : isCashIn ? (
              <CreditCard size={20} className="shrink-0" />
            ) : (
              <Banknote size={20} className="shrink-0" />
            )}
            <span className="truncate">
              {title} - {selectedWallet.name}
            </span>
          </h2>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 shrink-0">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={onSubmit} className="p-5 space-y-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                {transferredLabel}
              </label>
              <input
                type="number"
                step="1"
                {...form.register('transferredAmount')}
                onFocus={(e) => e.target.select()}
                className={tokens.input + " h-12 text-xl font-mono text-center bg-gray-50"}
                placeholder="0"
              />
              {form.formState?.errors?.transferredAmount && (
                <p className="text-red-500 text-xs mt-1 text-center">{form.formState.errors.transferredAmount.message}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                {physicalCashLabel}
              </label>
              <input
                type="number"
                step="1"
                {...form.register('physicalCashAmount')}
                onFocus={(e) => e.target.select()}
                className={tokens.input + " h-12 text-xl font-mono text-center bg-gray-50"}
                placeholder="0"
              />
              {form.formState?.errors?.physicalCashAmount && (
                <p className="text-red-500 text-xs mt-1 text-center">{form.formState.errors.physicalCashAmount.message}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">رقم الموبايل / ملاحظات (اختياري)</label>
            <input
              {...form.register('notes')}
              className={tokens.input + " h-10"}
              placeholder="ملاحظات..."
            />
          </div>
          <div className={`p-3 rounded-xl border flex justify-between items-center gap-2 ${profit > 0 ? 'bg-[#e6f4ed] border-[#0f8e4c]/30 text-[#0f8e4c]' : profit < 0 ? 'bg-red-50 border-red-200 text-red-800' : 'bg-gray-50 border-gray-200 text-gray-800'}`}>
            <span className="font-bold text-sm shrink-0">صافي الربح:</span>
            <span className="text-xl font-black font-mono dir-ltr break-all text-right">{profit > 0 ? '+' : ''}{Math.round(profit)}</span>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors text-sm"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={isProcessing}
              className={`flex-[2] px-4 py-3 text-white rounded-xl font-bold transition-colors disabled:opacity-60 text-sm ${btnBg}`}
            >
              {isProcessing ? 'جاري التنفيذ...' : 'تأكيد العملية'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}