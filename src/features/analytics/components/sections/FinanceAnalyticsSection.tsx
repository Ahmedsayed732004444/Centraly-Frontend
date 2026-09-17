import { ArrowDownCircle, ArrowUpCircle, Scale, PieChart } from 'lucide-react';
import { useFinanceSummary, useExpenseBreakdown } from '../../hooks/useAnalytics';
import { AnalyticsFilters, ExpenseCategoryBreakdownResponse } from '../../schemas/analyticsSchemas';
import { StatCard, RankingPanel } from '../AnalyticsWidgets';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { formatCurrency } from '@/shared/utils/currency';

interface FinanceAnalyticsSectionProps {
  filters: AnalyticsFilters;
  rangeLabel: string;
}

export function FinanceAnalyticsSection({ filters, rangeLabel }: FinanceAnalyticsSectionProps) {
  const { data: summary, isLoading: isLoadingSummary } = useFinanceSummary(filters);
  const { data: expenses, isLoading: isLoadingExpenses } = useExpenseBreakdown(filters);

  const maxExpense = expenses && expenses.length > 0 ? Math.max(...expenses.map((e) => e.totalAmount)) : 0;

  return (
    <div className="space-y-6">
      <p className="text-xs text-gray-500">مبني على كل حركات الدرج (مبيعات وصيانة) الفعلية خلال الفترة</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={ArrowDownCircle} accent="text-emerald-600" label="إجمالي المقبوضات" value={isLoadingSummary ? '...' : formatCurrency(summary?.totalDrawerIncome || 0)} />
        <StatCard icon={ArrowUpCircle} accent="text-red-600" label="إجمالي المصروفات" value={isLoadingSummary ? '...' : formatCurrency(summary?.totalDrawerExpense || 0)} />
        <StatCard icon={Scale} accent="text-blue-600" label="صافي التدفق النقدي" value={isLoadingSummary ? '...' : formatCurrency(summary?.netCashFlow || 0)} />
      </div>

      <RankingPanel<ExpenseCategoryBreakdownResponse>
        title="توزيع المصروفات حسب النوع"
        icon={PieChart}
        data={expenses}
        isLoading={isLoadingExpenses}
        emptyEntity="مصروفات في هذه الفترة"
        barColor="bg-red-500"
        renderRow={(row) => ({
          name: row.category,
          value: formatCurrency(row.totalAmount),
          barPct: maxExpense > 0 ? (row.totalAmount / maxExpense) * 100 : 0,
        })}
        onExport={async () => {
          await exportToExcel<ExpenseCategoryBreakdownResponse>({
            fileName: 'توزيع-المصروفات',
            sheetName: 'توزيع المصروفات',
            title: 'توزيع المصروفات حسب النوع',
            subtitle: rangeLabel,
            columns: [
              { header: 'النوع', value: (r) => r.category },
              { header: 'عدد الحركات', value: (r) => r.count },
              { header: 'الإجمالي', value: (r) => r.totalAmount, money: true },
            ],
            rows: expenses || [],
          });
        }}
      />
    </div>
  );
}
