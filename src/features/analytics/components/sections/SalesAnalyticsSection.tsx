import { Receipt, TrendingUp, Wallet, BarChart3, Package, Users } from 'lucide-react';
import { useAnalyticsSummary, useTopProducts, useTopCustomers, useSalesTrend } from '../../hooks/useAnalytics';
import { AnalyticsFilters, TopProductResponse, TopCustomerResponse } from '../../schemas/analyticsSchemas';
import { StatCard, RankingPanel } from '../AnalyticsWidgets';
import { TrendAreaChart } from '../TrendAreaChart';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { formatCurrency, formatNumber } from '@/shared/utils/currency';

interface SalesAnalyticsSectionProps {
  filters: AnalyticsFilters;
  rangeLabel: string;
}

export function SalesAnalyticsSection({ filters, rangeLabel }: SalesAnalyticsSectionProps) {
  const { data: summary, isLoading: isLoadingSummary } = useAnalyticsSummary(filters);
  const { data: topProducts, isLoading: isLoadingProducts } = useTopProducts(filters);
  const { data: topCustomers, isLoading: isLoadingCustomers } = useTopCustomers(filters);
  const { data: trend, isLoading: isLoadingTrend } = useSalesTrend(filters);

  const maxProductQty = topProducts && topProducts.length > 0 ? topProducts[0].quantitySold : 0;
  const maxCustomerTotal = topCustomers && topCustomers.length > 0 ? topCustomers[0].totalPurchases : 0;

  return (
    <div className="space-y-6">
      <p className="text-xs text-gray-500">الأرقام قبل خصم المرتجعات</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Wallet} accent="text-emerald-600" label="إجمالي المبيعات" value={isLoadingSummary ? '...' : formatCurrency(summary?.totalRevenue || 0)} />
        <StatCard icon={Receipt} accent="text-blue-600" label="عدد الفواتير" value={isLoadingSummary ? '...' : formatNumber(summary?.invoiceCount || 0)} />
        <StatCard icon={TrendingUp} accent="text-purple-600" label="متوسط الفاتورة" value={isLoadingSummary ? '...' : formatCurrency(summary?.averageInvoiceValue || 0)} />
        <StatCard icon={BarChart3} accent="text-amber-600" label="صافي الربح" value={isLoadingSummary ? '...' : formatCurrency(summary?.netProfit || 0)} />
      </div>

      <TrendAreaChart
        title="اتجاه المبيعات عبر الوقت"
        data={trend}
        isLoading={isLoadingTrend}
        emptyEntity="بيانات مبيعات في هذه الفترة"
        dateKey="date"
        valueKey="revenue"
        valueLabel="الإيرادات"
        formatValue={formatCurrency}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RankingPanel<TopProductResponse>
          title="أكتر المنتجات مبيعاً"
          icon={Package}
          data={topProducts}
          isLoading={isLoadingProducts}
          emptyEntity="منتجات مباعة في هذه الفترة"
          renderRow={(row) => ({
            name: row.productName,
            value: `${formatNumber(row.quantitySold)} قطعة`,
            barPct: maxProductQty > 0 ? (row.quantitySold / maxProductQty) * 100 : 0,
          })}
          onExport={async () => {
            await exportToExcel<TopProductResponse>({
              fileName: 'أكتر-المنتجات-مبيعاً',
              sheetName: 'أكتر المنتجات مبيعاً',
              title: 'أكتر المنتجات مبيعاً',
              subtitle: rangeLabel,
              columns: [
                { header: 'المنتج', value: (r) => r.productName },
                { header: 'الكمية المباعة', value: (r) => r.quantitySold },
                { header: 'الإيرادات', value: (r) => r.revenue, money: true },
              ],
              rows: topProducts || [],
            });
          }}
        />
        <RankingPanel<TopCustomerResponse>
          title="أكتر العملاء شراءً"
          icon={Users}
          data={topCustomers}
          isLoading={isLoadingCustomers}
          emptyEntity="عملاء اشتروا في هذه الفترة"
          renderRow={(row) => ({
            name: row.customerName,
            value: formatCurrency(row.totalPurchases),
            barPct: maxCustomerTotal > 0 ? (row.totalPurchases / maxCustomerTotal) * 100 : 0,
          })}
          onExport={async () => {
            await exportToExcel<TopCustomerResponse>({
              fileName: 'أكتر-العملاء-شراءً',
              sheetName: 'أكتر العملاء شراءً',
              title: 'أكتر العملاء شراءً',
              subtitle: rangeLabel,
              columns: [
                { header: 'العميل', value: (r) => r.customerName },
                { header: 'عدد الفواتير', value: (r) => r.invoiceCount },
                { header: 'إجمالي المشتريات', value: (r) => r.totalPurchases, money: true },
              ],
              rows: topCustomers || [],
            });
          }}
        />
      </div>
    </div>
  );
}
