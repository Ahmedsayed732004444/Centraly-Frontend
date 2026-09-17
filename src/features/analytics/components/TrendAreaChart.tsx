import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { InlineLoader } from '@/shared/components/ui/PageLoader';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { formatNumber } from '@/shared/utils/currency';
import { formatDateOnly } from '@/shared/utils/date';

interface TrendAreaChartProps<T> {
  title: string;
  data: T[] | undefined;
  isLoading: boolean;
  emptyEntity: string;
  dateKey: keyof T;
  valueKey: keyof T;
  valueLabel: string;
  color?: string;
  formatValue: (v: number) => string;
}

export function TrendAreaChart<T>({
  title,
  data,
  isLoading,
  emptyEntity,
  dateKey,
  valueKey,
  valueLabel,
  color = '#2563eb',
  formatValue,
}: TrendAreaChartProps<T>) {
  const gradientId = `trendFill-${valueLabel.replace(/\s+/g, '')}`;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[360px] sm:h-[420px]">
      <div className="p-4 sm:p-5 border-b border-gray-100 bg-gray-50/50">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex-1 p-2 sm:p-4" dir="ltr">
        {isLoading ? (
          <InlineLoader />
        ) : !data || data.length === 0 ? (
          <EmptyState entity={emptyEntity} />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey={dateKey as string} tickFormatter={(d) => formatDateOnly(d)} tick={{ fontSize: 11 }} minTickGap={20} />
              <YAxis tick={{ fontSize: 11 }} width={70} tickFormatter={(v) => formatNumber(v)} />
              <Tooltip
                labelFormatter={(d) => formatDateOnly(d as string)}
                formatter={(value) => [formatValue(Number(value) || 0), valueLabel]}
              />
              <Area type="monotone" dataKey={valueKey as string} stroke={color} strokeWidth={2} fill={`url(#${gradientId})`} />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
