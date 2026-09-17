import { ArrowDownCircle, ArrowUpCircle, Wallet } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
interface OwnerTransactionsHeaderProps {
  onDeposit: () => void;
  onWithdraw: () => void;
}
export function OwnerTransactionsHeader({ onDeposit, onWithdraw }: OwnerTransactionsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Wallet className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 shrink-0" />
          معاملات المالك
        </h1>
        <p className="text-gray-500 mt-1 flex items-center gap-1.5 text-sm">
          إدارة إيداع رأس المال وسحب الأرباح
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onDeposit}
          className={tokens.btn.primary + " w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"}
        >
          <ArrowDownCircle className="w-5 h-5 shrink-0" />
          إيداع رأس مال
        </button>
        <button
          onClick={onWithdraw}
          className={tokens.btn.primary + " w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700"}
        >
          <ArrowUpCircle className="w-5 h-5 shrink-0" />
          سحب أرباح
        </button>
      </div>
    </div>
  );
}