import { apiClient } from '@/lib/axios';
import {
  AnalyticsFilters,
  AnalyticsSummaryResponse,
  TopProductResponse,
  TopCustomerResponse,
  SalesTrendPointResponse,
  SupplierAnalyticsSummaryResponse,
  TopSupplierResponse,
  PurchaseTrendPointResponse,
  MaintenanceAnalyticsSummaryResponse,
  InventoryAnalyticsSummaryResponse,
  SlowMovingProductResponse,
  FinanceAnalyticsSummaryResponse,
  ExpenseCategoryBreakdownResponse,
} from '../schemas/analyticsSchemas';

export const analyticsRepository = {
  async getSummary(filters: AnalyticsFilters): Promise<AnalyticsSummaryResponse> {
    const { data } = await apiClient.get<AnalyticsSummaryResponse>('/analytics/summary', { params: filters });
    return data;
  },

  async getTopProducts(filters: AnalyticsFilters): Promise<TopProductResponse[]> {
    const { data } = await apiClient.get<TopProductResponse[]>('/analytics/top-products', { params: filters });
    return data;
  },

  async getTopCustomers(filters: AnalyticsFilters): Promise<TopCustomerResponse[]> {
    const { data } = await apiClient.get<TopCustomerResponse[]>('/analytics/top-customers', { params: filters });
    return data;
  },

  async getSalesTrend(filters: AnalyticsFilters): Promise<SalesTrendPointResponse[]> {
    const { data } = await apiClient.get<SalesTrendPointResponse[]>('/analytics/sales-trend', { params: filters });
    return data;
  },

  async getSupplierSummary(filters: AnalyticsFilters): Promise<SupplierAnalyticsSummaryResponse> {
    const { data } = await apiClient.get<SupplierAnalyticsSummaryResponse>('/analytics/suppliers/summary', { params: filters });
    return data;
  },

  async getTopSuppliers(filters: AnalyticsFilters): Promise<TopSupplierResponse[]> {
    const { data } = await apiClient.get<TopSupplierResponse[]>('/analytics/suppliers/top', { params: filters });
    return data;
  },

  async getPurchaseTrend(filters: AnalyticsFilters): Promise<PurchaseTrendPointResponse[]> {
    const { data } = await apiClient.get<PurchaseTrendPointResponse[]>('/analytics/suppliers/purchase-trend', { params: filters });
    return data;
  },

  async getMaintenanceSummary(filters: AnalyticsFilters): Promise<MaintenanceAnalyticsSummaryResponse> {
    const { data } = await apiClient.get<MaintenanceAnalyticsSummaryResponse>('/analytics/maintenance/summary', { params: filters });
    return data;
  },

  async getInventorySummary(): Promise<InventoryAnalyticsSummaryResponse> {
    const { data } = await apiClient.get<InventoryAnalyticsSummaryResponse>('/analytics/inventory/summary');
    return data;
  },

  async getSlowMovingProducts(filters: AnalyticsFilters): Promise<SlowMovingProductResponse[]> {
    const { data } = await apiClient.get<SlowMovingProductResponse[]>('/analytics/inventory/slow-moving', { params: filters });
    return data;
  },

  async getFinanceSummary(filters: AnalyticsFilters): Promise<FinanceAnalyticsSummaryResponse> {
    const { data } = await apiClient.get<FinanceAnalyticsSummaryResponse>('/analytics/finance/summary', { params: filters });
    return data;
  },

  async getExpenseBreakdown(filters: AnalyticsFilters): Promise<ExpenseCategoryBreakdownResponse[]> {
    const { data } = await apiClient.get<ExpenseCategoryBreakdownResponse[]>('/analytics/finance/expense-breakdown', { params: filters });
    return data;
  },
};
