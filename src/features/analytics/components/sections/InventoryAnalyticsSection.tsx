import { Boxes, Package, AlertTriangle, XCircle, PackageX } from 'lucide-react';
import { useInventorySummary, useSlowMovingProducts } from '../../hooks/useAnalytics';
import { AnalyticsFilters, SlowMovingProductResponse } from '../../schemas/analyticsSchemas';
import { StatCard, RankingPanel } from '../AnalyticsWidgets';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { formatCurrency, formatNumber } from '@/shared/utils/currency';

interface InventoryAnalyticsSectionProps {
  filters: AnalyticsFilters;
  rangeLabel: string;
}

export function InventoryAnalyticsSection({ filters, rangeLabel }: InventoryAnalyticsSectionProps) {
  const { data: summary, isLoading: isLoadingSummary } = useInventorySummary();
  const { data: slowMoving, isLoading: isLoadingSlowMoving } = useSlowMovingProducts(filters);

  const maxStock = slowMoving && slowMoving.length > 0 ? Math.max(...slowMoving.map((p) => p.quantityInStock)) : 0;

  return (
    <div className="space-y-6">
      <p className="text-xs text-gray-500">قيمة المخزون وحالته لقطة حالية الآن، أما "المنتجات الراكدة" فمحسوبة حسب مبيعاتها خلال الفترة المحددة</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Boxes} accent="text-blue-600" label="قيمة المخزون الإجمالية" value={isLoadingSummary ? '...' : formatCurrency(summary?.totalInventoryValue || 0)} hint="بسعر الشراء" />
        <StatCard icon={Package} accent="text-purple-600" label="عدد المنتجات" value={isLoadingSummary ? '...' : formatNumber(summary?.totalProductsCount || 0)} />
        <StatCard icon={AlertTriangle} accent="text-amber-600" label="منتجات مخزون منخفض" value={isLoadingSummary ? '...' : formatNumber(summary?.lowStockCount || 0)} />
        <StatCard icon={XCircle} accent="text-red-600" label="منتجات نفدت من المخزون" value={isLoadingSummary ? '...' : formatNumber(summary?.outOfStockCount || 0)} />
      </div>

      <RankingPanel<SlowMovingProductResponse>
        title="منتجات راكدة (مخزون متاح ومبيعاتها قليلة)"
        icon={PackageX}
        data={slowMoving}
        isLoading={isLoadingSlowMoving}
        emptyEntity="منتجات راكدة في هذه الفترة"
        barColor="bg-amber-500"
        renderRow={(row) => ({
          name: row.productName,
          value: `باع ${formatNumber(row.quantitySoldInPeriod)} من ${formatNumber(row.quantityInStock)}`,
          barPct: maxStock > 0 ? (row.quantityInStock / maxStock) * 100 : 0,
        })}
        onExport={async () => {
          await exportToExcel<SlowMovingProductResponse>({
            fileName: 'منتجات-راكدة',
            sheetName: 'منتجات راكدة',
            title: 'منتجات راكدة (مخزون متاح ومبيعاتها قليلة)',
            subtitle: rangeLabel,
            columns: [
              { header: 'المنتج', value: (r) => r.productName },
              { header: 'الكمية المتاحة بالمخزون', value: (r) => r.quantityInStock },
              { header: 'الكمية المباعة في الفترة', value: (r) => r.quantitySoldInPeriod },
            ],
            rows: slowMoving || [],
          });
        }}
      />
    </div>
  );
}
