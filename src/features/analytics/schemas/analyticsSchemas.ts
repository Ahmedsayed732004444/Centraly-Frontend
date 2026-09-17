export interface AnalyticsFilters {
  startDate?: string;
  endDate?: string;
  limit?: number;
}

export interface AnalyticsSummaryResponse {
  totalRevenue: number;
  invoiceCount: number;
  averageInvoiceValue: number;
  netProfit: number;
}

export interface TopProductResponse {
  productId: string;
  productName: string;
  quantitySold: number;
  revenue: number;
}

export interface TopCustomerResponse {
  customerId: string;
  customerName: string;
  totalPurchases: number;
  invoiceCount: number;
}

export interface SalesTrendPointResponse {
  date: string;
  revenue: number;
  invoiceCount: number;
}

// الموردين والمشتريات
export interface SupplierAnalyticsSummaryResponse {
  totalPurchases: number;
  invoiceCount: number;
  averagePurchaseValue: number;
  totalOutstandingPayable: number;
}

export interface TopSupplierResponse {
  supplierId: string;
  supplierName: string;
  totalPurchases: number;
  invoiceCount: number;
}

export interface PurchaseTrendPointResponse {
  date: string;
  amount: number;
  invoiceCount: number;
}

// الصيانة
export interface MaintenanceAnalyticsSummaryResponse {
  totalRevenue: number;
  totalProfit: number;
  ticketCount: number;
  averageTicketValue: number;
  pendingCount: number;
  deliveredCount: number;
  returnedCount: number;
}

// المخزون والمنتجات المتعثرة
export interface InventoryAnalyticsSummaryResponse {
  totalInventoryValue: number;
  totalProductsCount: number;
  lowStockCount: number;
  outOfStockCount: number;
}

export interface SlowMovingProductResponse {
  productId: string;
  productName: string;
  quantityInStock: number;
  quantitySoldInPeriod: number;
}

// الماليات والأرباح
export interface FinanceAnalyticsSummaryResponse {
  totalDrawerIncome: number;
  totalDrawerExpense: number;
  netCashFlow: number;
}

export interface ExpenseCategoryBreakdownResponse {
  category: string;
  totalAmount: number;
  count: number;
}
