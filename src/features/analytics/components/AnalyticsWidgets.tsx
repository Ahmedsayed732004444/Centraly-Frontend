import { BarChart3, Package } from 'lucide-react';
import { InlineLoader } from '@/shared/components/ui/PageLoader';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';

export function StatCard({
  icon: Icon,
  label,
  value,
  accent,
  hint,
}: {
  icon: typeof BarChart3;
  label: string;
  value: string;
  accent: string;
  hint?: string;
}) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className={`w-12 h-12 ${accent}`} />
      </div>
      <div className="text-sm font-medium text-gray-500 mb-1">{label}</div>
      <div className="text-xl sm:text-2xl font-bold text-gray-800" dir="ltr">{value}</div>
      {hint && <div className="text-[11px] text-gray-400 mt-1">{hint}</div>}
    </div>
  );
}

export function RankingPanel<T>({
  title,
  icon: Icon,
  data,
  isLoading,
  emptyEntity,
  renderRow,
  onExport,
  barColor = 'bg-blue-500',
}: {
  title: string;
  icon: typeof Package;
  data: T[] | undefined;
  isLoading: boolean;
  emptyEntity: string;
  renderRow: (row: T, index: number) => { name: string; value: string; barPct: number };
  onExport: () => Promise<void>;
  barColor?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[420px] sm:h-[460px]">
      <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between gap-3 bg-gray-50/50">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Icon size={18} className="text-blue-600" />
          {title}
        </h3>
        <ExportExcelButton onExport={onExport} label="تصدير" />
      </div>
      <div className="flex-1 overflow-auto">
        {isLoading ? (
          <InlineLoader />
        ) : !data || data.length === 0 ? (
          <EmptyState entity={emptyEntity} />
        ) : (
          <div className="divide-y divide-gray-50">
            {data.map((row, i) => {
              const { name, value, barPct } = renderRow(row, i);
              return (
                <div key={i} className="px-4 sm:px-5 py-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-gray-800 truncate">{name}</span>
                      <span className="text-sm font-bold text-gray-700 shrink-0" dir="ltr">{value}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${barColor} rounded-full`} style={{ width: `${barPct}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
