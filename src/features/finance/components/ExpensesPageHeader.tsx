import { PlusCircle, ReceiptText } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
interface ExpensesPageHeaderProps {
  onAddExpense: () => void;
}
export function ExpensesPageHeader({ onAddExpense }: ExpensesPageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
          <ReceiptText className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 shrink-0" />
          المصروفات
        </h1>
        <p className="text-gray-500 mt-1 flex items-center gap-1.5 text-sm">
          إدارة وتسجيل مصروفات الفرع
        </p>
      </div>
      <div>
        <button
          onClick={onAddExpense}
          className={tokens.btn.primary + " w-full sm:w-auto flex items-center justify-center gap-2"}
        >
          <PlusCircle className="w-5 h-5 shrink-0" />
          تسجيل مصروف
        </button>
      </div>
    </div>
  );
}