import { Wallet } from 'lucide-react';
interface DrawerHistoryHeaderProps {
  canSeeBoth: boolean;
  currentType: number | undefined;
  onTypeChange: (type: number | undefined) => void;
}
export function DrawerHistoryHeader({ canSeeBoth, currentType, onTypeChange }: DrawerHistoryHeaderProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <Wallet className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 shrink-0" />
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">سجل الورديات</h1>
          <p className="text-gray-500 mt-1 text-sm">عرض الورديات السابقة وتفاصيلها المالية</p>
        </div>
      </div>
      {}
      {canSeeBoth && (
        <div className="flex bg-slate-100/70 p-1.5 rounded-xl w-full sm:w-fit overflow-x-auto">
          {(['', '1', '2'] as const).map((t) => (
            <button
              key={t}
              onClick={() => onTypeChange(t ? Number(t) : undefined)}
              className={[
                'px-4 sm:px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap shrink-0',
                (currentType?.toString() || '') === t
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50',
              ].join(' ')}
            >
              {t === '' ? 'الكل' : t === '1' ? 'مبيعات' : 'صيانة'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}