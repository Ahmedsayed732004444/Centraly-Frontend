import { Receipt, TrendingUp, Wallet, AlertTriangle, Truck } from 'lucide-react';
import { useSupplierSummary, useTopSuppliers, usePurchaseTrend } from '../../hooks/useAnalytics';
import { AnalyticsFilters, TopSupplierResponse } from '../../schemas/analyticsSchemas';
import { StatCard, RankingPanel } from '../AnalyticsWidgets';
import { TrendAreaChart } from '../TrendAreaChart';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { formatCurrency, formatNumber } from '@/shared/utils/currency';

interface SuppliersAnalyticsSectionProps {
  filters: AnalyticsFilters;
  rangeLabel: string;
}

export function SuppliersAnalyticsSection({ filters, rangeLabel }: SuppliersAnalyticsSectionProps) {
  const { data: summary, isLoading: isLoadingSummary } = useSupplierSummary(filters);
  const { data: topSuppliers, isLoading: isLoadingSuppliers } = useTopSuppliers(filters);
  const { data: trend, isLoading: isLoadingTrend } = usePurchaseTrend(filters);

  const maxSupplierTotal = topSuppliers && topSuppliers.length > 0 ? topSuppliers[0].totalPurchases : 0;

  return (
    <div className="space-y-6">
      <p className="text-xs text-gray-500">مشتريات الفترة المحددة، والمديونية للموردين رصيد حالي بغض النظر عن الفترة</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Wallet} accent="text-blue-600" label="إجمالي المشتريات" value={isLoadingSummary ? '...' : formatCurrency(summary?.totalPurchases || 0)} />
        <StatCard icon={Receipt} accent="text-purple-600" label="عدد فواتير الشراء" value={isLoadingSummary ? '...' : formatNumber(summary?.invoiceCount || 0)} />
        <StatCard icon={TrendingUp} accent="text-emerald-600" label="متوسط الفاتورة" value={isLoadingSummary ? '...' : formatCurrency(summary?.averagePurchaseValue || 0)} />
        <StatCard
          icon={AlertTriangle}
          accent="text-red-600"
          label="إجمالي المديونية للموردين"
          value={isLoadingSummary ? '...' : formatCurrency(summary?.totalOutstandingPayable || 0)}
          hint="رصيد حالي، غير مرتبط بالفترة"
        />
      </div>

      <TrendAreaChart
        title="اتجاه المشتريات عبر الوقت"
        data={trend}
        isLoading={isLoadingTrend}
        emptyEntity="بيانات مشتريات في هذه الفترة"
        dateKey="date"
        valueKey="amount"
        valueLabel="المشتريات"
        color="#7c3aed"
        formatValue={formatCurrency}
      />

      <RankingPanel<TopSupplierResponse>
        title="أكتر الموردين تعاملاً"
        icon={Truck}
        data={topSuppliers}
        isLoading={isLoadingSuppliers}
        emptyEntity="موردين تم الشراء منهم في هذه الفترة"
        barColor="bg-purple-500"
        renderRow={(row) => ({
          name: row.supplierName,
          value: formatCurrency(row.totalPurchases),
          barPct: maxSupplierTotal > 0 ? (row.totalPurchases / maxSupplierTotal) * 100 : 0,
        })}
        onExport={async () => {
          await exportToExcel<TopSupplierResponse>({
            fileName: 'أكتر-الموردين-تعاملاً',
            sheetName: 'أكتر الموردين تعاملاً',
            title: 'أكتر الموردين تعاملاً',
            subtitle: rangeLabel,
            columns: [
              { header: 'المورد', value: (r) => r.supplierName },
              { header: 'عدد الفواتير', value: (r) => r.invoiceCount },
              { header: 'إجمالي المشتريات', value: (r) => r.totalPurchases, money: true },
            ],
            rows: topSuppliers || [],
          });
        }}
      />
    </div>
  );
}
