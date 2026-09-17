// Single source of truth for every lazily-loaded page's dynamic import(). App.tsx wraps
// each of these in React.lazy(); the Sidebar calls the same functions directly on link
// hover/focus so the route's JS chunk is already fetched by the time the user clicks -
// without this, every first visit to a page pays a network round-trip behind the
// Suspense fallback even on a fast connection, which is what made navigation feel slow.
// Calling an import() a second time is a cheap module-cache hit, so re-prefetching on
// repeated hovers (or prefetching a chunk that's about to be routed to anyway) is free.

export const routeImporters = {
  dashboard: () => import("@/features/dashboard/pages/DashboardPage").then((m) => ({ default: m.DashboardPage })),

  posPage: () => import("@/features/sales/pages/PosPage").then((m) => ({ default: m.PosPage })),
  salesHistory: () => import("@/features/sales/pages/SalesHistoryPage").then((m) => ({ default: m.SalesHistoryPage })),
  salesReturns: () => import("@/features/sales/pages/SalesReturnsPage").then((m) => ({ default: m.SalesReturnsPage })),
  newSalesReturn: () => import("@/features/sales/pages/NewSalesReturnPage").then((m) => ({ default: m.NewSalesReturnPage })),

  newPurchase: () => import("@/features/purchases/pages/NewPurchasePage").then((m) => ({ default: m.NewPurchasePage })),
  purchasesHistory: () => import("@/features/purchases/pages/PurchasesHistoryPage").then((m) => ({ default: m.PurchasesHistoryPage })),
  purchaseInvoiceDetails: () => import("@/features/purchases/pages/PurchaseInvoiceDetailsPage").then((m) => ({ default: m.PurchaseInvoiceDetailsPage })),
  supplierReturns: () => import("@/features/purchases/pages/SupplierReturnsPage").then((m) => ({ default: m.SupplierReturnsPage })),
  supplierReturnDetails: () => import("@/features/purchases/pages/SupplierReturnDetailsPage").then((m) => ({ default: m.SupplierReturnDetailsPage })),
  newSupplierReturn: () => import("@/features/purchases/pages/NewSupplierReturnPage").then((m) => ({ default: m.NewSupplierReturnPage })),

  products: () => import("@/features/inventory/pages/ProductsPage").then((m) => ({ default: m.ProductsPage })),
  productDetails: () => import("@/features/inventory/pages/ProductDetailsPage").then((m) => ({ default: m.ProductDetailsPage })),
  categories: () => import("@/features/inventory/pages/CategoriesPage").then((m) => ({ default: m.CategoriesPage })),

  customers: () => import("@/features/contacts/pages/CustomersPage").then((m) => ({ default: m.CustomersPage })),
  customerDetails: () => import("@/features/contacts/pages/CustomerDetailsPage").then((m) => ({ default: m.CustomerDetailsPage })),
  suppliers: () => import("@/features/suppliers/pages/SuppliersPage").then((m) => ({ default: m.SuppliersPage })),
  supplierDetails: () => import("@/features/suppliers/pages/SupplierDetailsPage").then((m) => ({ default: m.SupplierDetailsPage })),

  drawer: () => import("@/features/finance/pages/DrawerPage").then((m) => ({ default: m.DrawerPage })),
  drawerHistory: () => import("@/features/finance/pages/DrawerHistoryPage").then((m) => ({ default: m.DrawerHistoryPage })),
  drawerSessionDetails: () => import("@/features/finance/pages/DrawerSessionDetailsPage").then((m) => ({ default: m.DrawerSessionDetailsPage })),
  safe: () => import("@/features/finance/pages/SafePage").then((m) => ({ default: m.SafePage })),
  expenses: () => import("@/features/finance/pages/ExpensesPage").then((m) => ({ default: m.ExpensesPage })),
  ownerTransactions: () => import("@/features/finance/pages/OwnerTransactionsPage").then((m) => ({ default: m.OwnerTransactionsPage })),

  walletsAdmin: () => import("@/features/wallets/pages/WalletsAdminPage").then((m) => ({ default: m.WalletsAdminPage })),
  walletOperations: () => import("@/features/wallets/pages/WalletOperationsPage").then((m) => ({ default: m.WalletOperationsPage })),
  walletDetails: () => import("@/features/wallets/pages/WalletDetailsPage").then((m) => ({ default: m.WalletDetailsPage })),

  maintenance: () => import("@/features/maintenance/pages/MaintenancePage").then((m) => ({ default: m.MaintenancePage })),
  analytics: () => import("@/features/analytics/pages/AnalyticsPage").then((m) => ({ default: m.AnalyticsPage })),

  users: () => import("@/features/admin/pages/UsersPage").then((m) => ({ default: m.UsersPage })),
  roles: () => import("@/features/admin/pages/RolesPage").then((m) => ({ default: m.RolesPage })),
} as const;

// Maps a route's URL path to its importer, for prefetch-on-hover in the Sidebar. Only
// static (non-:id) routes that are actually linked from navigation are listed here -
// detail pages are reached by clicking a row, not hovering a nav link, so there's no
// hover moment to prefetch from.
export const pathImporters: Record<string, () => Promise<unknown>> = {
  "/": routeImporters.dashboard,
  "/sales/pos": routeImporters.posPage,
  "/sales/history": routeImporters.salesHistory,
  "/sales/returns": routeImporters.salesReturns,
  "/purchases/new": routeImporters.newPurchase,
  "/purchases/history": routeImporters.purchasesHistory,
  "/purchases/returns": routeImporters.supplierReturns,
  "/inventory/products": routeImporters.products,
  "/inventory/categories": routeImporters.categories,
  "/contacts/customers": routeImporters.customers,
  "/contacts/suppliers": routeImporters.suppliers,
  "/finance/drawer": routeImporters.drawer,
  "/finance/drawer/history": routeImporters.drawerHistory,
  "/finance/safe": routeImporters.safe,
  "/finance/expenses": routeImporters.expenses,
  "/finance/owner-transactions": routeImporters.ownerTransactions,
  "/operations/wallets": routeImporters.walletOperations,
  "/maintenance": routeImporters.maintenance,
  "/analytics": routeImporters.analytics,
  "/admin/users": routeImporters.users,
  "/admin/roles": routeImporters.roles,
  "/settings/wallets": routeImporters.walletsAdmin,
};
