import { useMemo, useState } from 'react';
import { BarChart3, Truck, Wrench, Boxes, Landmark } from 'lucide-react';
import { DateRangeFilter } from '@/shared/components/ui/DateRangeFilter';
import { toUtcStartOfDayISOString, toUtcEndOfDayISOString } from '@/shared/utils/date';
import { SalesAnalyticsSection } from '../components/sections/SalesAnalyticsSection';
import { SuppliersAnalyticsSection } from '../components/sections/SuppliersAnalyticsSection';
import { MaintenanceAnalyticsSection } from '../components/sections/MaintenanceAnalyticsSection';
import { InventoryAnalyticsSection } from '../components/sections/InventoryAnalyticsSection';
import { FinanceAnalyticsSection } from '../components/sections/FinanceAnalyticsSection';

function defaultDateRange() {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 30);
  const toIso = (d: Date) => d.toISOString().slice(0, 10);
  return { start: toIso(start), end: toIso(end) };
}

type TabKey = 'sales' | 'suppliers' | 'maintenance' | 'inventory' | 'finance';

const TABS: { key: TabKey; label: string; icon: typeof BarChart3 }[] = [
  { key: 'sales', label: 'المبيعات والعملاء والمنتجات', icon: BarChart3 },
  { key: 'suppliers', label: 'الموردين والمشتريات', icon: Truck },
  { key: 'maintenance', label: 'الصيانة', icon: Wrench },
  { key: 'inventory', label: 'المخزون', icon: Boxes },
  { key: 'finance', label: 'الماليات والأرباح', icon: Landmark },
];

export function AnalyticsPage() {
  const [range, setRange] = useState(defaultDateRange);
  const [tab, setTab] = useState<TabKey>('sales');

  const filters = useMemo(
    () => ({
      startDate: range.start ? toUtcStartOfDayISOString(range.start) : undefined,
      endDate: range.end ? toUtcEndOfDayISOString(range.end) : undefined,
    }),
    [range]
  );

  const rangeLabel = `من ${range.start} إلى ${range.end}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <BarChart3 size={20} />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-800">لوحة التحليلات</h1>
            <p className="text-xs text-gray-500 mt-0.5">نظرة شاملة على أداء المحل حسب القسم</p>
          </div>
        </div>
        <DateRangeFilter startDate={range.start} endDate={range.end} onChange={(start, end) => setRange({ start, end })} />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <div className="flex items-center gap-1 px-2" dir="rtl">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 py-3 px-4 sm:px-5 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
                tab === t.key ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <t.icon size={16} />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'sales' && <SalesAnalyticsSection filters={filters} rangeLabel={rangeLabel} />}
      {tab === 'suppliers' && <SuppliersAnalyticsSection filters={filters} rangeLabel={rangeLabel} />}
      {tab === 'maintenance' && <MaintenanceAnalyticsSection filters={filters} />}
      {tab === 'inventory' && <InventoryAnalyticsSection filters={filters} rangeLabel={rangeLabel} />}
      {tab === 'finance' && <FinanceAnalyticsSection filters={filters} rangeLabel={rangeLabel} />}
    </div>
  );
}
