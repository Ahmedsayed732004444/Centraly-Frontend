import { Wrench, Receipt, TrendingUp, BarChart3, Clock, CheckCircle2, RotateCcw } from 'lucide-react';
import { useMaintenanceSummary } from '../../hooks/useAnalytics';
import { AnalyticsFilters } from '../../schemas/analyticsSchemas';
import { StatCard } from '../AnalyticsWidgets';
import { formatCurrency, formatNumber } from '@/shared/utils/currency';

interface MaintenanceAnalyticsSectionProps {
  filters: AnalyticsFilters;
}

function StatusBar({ label, count, total, color, icon: Icon }: { label: string; count: number; total: number; color: string; icon: typeof Clock }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Icon size={16} className={color} />
          {label}
        </span>
        <span className="text-sm font-bold text-gray-800" dir="ltr">{formatNumber(count)}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color.replace('text-', 'bg-')}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function MaintenanceAnalyticsSection({ filters }: MaintenanceAnalyticsSectionProps) {
  const { data: summary, isLoading } = useMaintenanceSummary(filters);
  const total = summary?.ticketCount || 0;

  return (
    <div className="space-y-6">
      <p className="text-xs text-gray-500">إيرادات وأرباح تذاكر الصيانة المسجلة خلال الفترة، بغض النظر عن حالة التذكرة</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Wrench} accent="text-blue-600" label="إجمالي إيرادات الصيانة" value={isLoading ? '...' : formatCurrency(summary?.totalRevenue || 0)} />
        <StatCard icon={Receipt} accent="text-purple-600" label="عدد التذاكر" value={isLoading ? '...' : formatNumber(summary?.ticketCount || 0)} />
        <StatCard icon={TrendingUp} accent="text-emerald-600" label="متوسط التذكرة" value={isLoading ? '...' : formatCurrency(summary?.averageTicketValue || 0)} />
        <StatCard icon={BarChart3} accent="text-amber-600" label="صافي ربح الصيانة" value={isLoading ? '...' : formatCurrency(summary?.totalProfit || 0)} />
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">توزيع التذاكر حسب الحالة</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatusBar label="قيد الانتظار" count={summary?.pendingCount || 0} total={total} color="text-amber-500" icon={Clock} />
          <StatusBar label="تم التسليم" count={summary?.deliveredCount || 0} total={total} color="text-emerald-500" icon={CheckCircle2} />
          <StatusBar label="مرتجع" count={summary?.returnedCount || 0} total={total} color="text-red-500" icon={RotateCcw} />
        </div>
      </div>
    </div>
  );
}
