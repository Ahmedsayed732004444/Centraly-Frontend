import { useQuery } from '@tanstack/react-query';
import { analyticsRepository } from '../api/AnalyticsApi';
import { AnalyticsFilters } from '../schemas/analyticsSchemas';

const ANALYTICS_KEYS = {
  summary: (filters: AnalyticsFilters) => ['analytics', 'summary', filters] as const,
  topProducts: (filters: AnalyticsFilters) => ['analytics', 'top-products', filters] as const,
  topCustomers: (filters: AnalyticsFilters) => ['analytics', 'top-customers', filters] as const,
  salesTrend: (filters: AnalyticsFilters) => ['analytics', 'sales-trend', filters] as const,
  supplierSummary: (filters: AnalyticsFilters) => ['analytics', 'suppliers', 'summary', filters] as const,
  topSuppliers: (filters: AnalyticsFilters) => ['analytics', 'suppliers', 'top', filters] as const,
  purchaseTrend: (filters: AnalyticsFilters) => ['analytics', 'suppliers', 'purchase-trend', filters] as const,
  maintenanceSummary: (filters: AnalyticsFilters) => ['analytics', 'maintenance', 'summary', filters] as const,
  inventorySummary: () => ['analytics', 'inventory', 'summary'] as const,
  slowMovingProducts: (filters: AnalyticsFilters) => ['analytics', 'inventory', 'slow-moving', filters] as const,
  financeSummary: (filters: AnalyticsFilters) => ['analytics', 'finance', 'summary', filters] as const,
  expenseBreakdown: (filters: AnalyticsFilters) => ['analytics', 'finance', 'expense-breakdown', filters] as const,
};

export function useAnalyticsSummary(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.summary(filters),
    queryFn: () => analyticsRepository.getSummary(filters),
  });
}

export function useTopProducts(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.topProducts(filters),
    queryFn: () => analyticsRepository.getTopProducts(filters),
  });
}

export function useTopCustomers(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.topCustomers(filters),
    queryFn: () => analyticsRepository.getTopCustomers(filters),
  });
}

export function useSalesTrend(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.salesTrend(filters),
    queryFn: () => analyticsRepository.getSalesTrend(filters),
  });
}

export function useSupplierSummary(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.supplierSummary(filters),
    queryFn: () => analyticsRepository.getSupplierSummary(filters),
  });
}

export function useTopSuppliers(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.topSuppliers(filters),
    queryFn: () => analyticsRepository.getTopSuppliers(filters),
  });
}

export function usePurchaseTrend(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.purchaseTrend(filters),
    queryFn: () => analyticsRepository.getPurchaseTrend(filters),
  });
}

export function useMaintenanceSummary(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.maintenanceSummary(filters),
    queryFn: () => analyticsRepository.getMaintenanceSummary(filters),
  });
}

export function useInventorySummary() {
  return useQuery({
    queryKey: ANALYTICS_KEYS.inventorySummary(),
    queryFn: () => analyticsRepository.getInventorySummary(),
  });
}

export function useSlowMovingProducts(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.slowMovingProducts(filters),
    queryFn: () => analyticsRepository.getSlowMovingProducts(filters),
  });
}

export function useFinanceSummary(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.financeSummary(filters),
    queryFn: () => analyticsRepository.getFinanceSummary(filters),
  });
}

export function useExpenseBreakdown(filters: AnalyticsFilters) {
  return useQuery({
    queryKey: ANALYTICS_KEYS.expenseBreakdown(filters),
    queryFn: () => analyticsRepository.getExpenseBreakdown(filters),
  });
}
