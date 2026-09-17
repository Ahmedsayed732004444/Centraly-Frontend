import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { queryClient } from "./lib/queryClient";
import { AuthProvider, useAuth } from "./features/auth/hooks/useAuth";
import { FinancePoliciesPage } from './features/finance/pages/FinancePoliciesPage';
import { AppLayout } from "./shared/components/layout/AppLayout";
import { PageLoader } from "./shared/components/ui/PageLoader";
import { FeatureBoundaryLayout } from "./shared/components/errors/FeatureBoundaryLayout";
import { routeImporters } from "./routes/routeImporters";
// Lazy Loaded Pages - each import() lives once in routeImporters.ts so the Sidebar can
// call the exact same function on link hover to prefetch the chunk ahead of the click.
const LoginPage = lazy(() => import("./features/auth/pages/LoginPage").then(module => ({ default: module.LoginPage })));
const DashboardPage = lazy(routeImporters.dashboard);
const ProductsPage = lazy(routeImporters.products);
const ProductDetailsPage = lazy(routeImporters.productDetails);
const PublicProductPage = lazy(routeImporters.publicProduct);
const CategoriesPage = lazy(routeImporters.categories);
const PosPage = lazy(routeImporters.posPage);
const SalesHistoryPage = lazy(routeImporters.salesHistory);
const SalesReturnsPage = lazy(routeImporters.salesReturns);
const NewSalesReturnPage = lazy(routeImporters.newSalesReturn);
const PurchasesHistoryPage = lazy(routeImporters.purchasesHistory);
const NewPurchasePage = lazy(routeImporters.newPurchase);
const PurchaseInvoiceDetailsPage = lazy(routeImporters.purchaseInvoiceDetails);
const SupplierReturnsPage = lazy(routeImporters.supplierReturns);
const SupplierReturnDetailsPage = lazy(routeImporters.supplierReturnDetails);
const NewSupplierReturnPage = lazy(routeImporters.newSupplierReturn);
const CustomersPage = lazy(routeImporters.customers);
const CustomerDetailsPage = lazy(routeImporters.customerDetails);
const SuppliersPage = lazy(routeImporters.suppliers);
const SupplierDetailsPage = lazy(routeImporters.supplierDetails);
const DrawerPage = lazy(routeImporters.drawer);
const DrawerHistoryPage = lazy(routeImporters.drawerHistory);
const DrawerSessionDetailsPage = lazy(routeImporters.drawerSessionDetails);
const SafePage = lazy(routeImporters.safe);
const ExpensesPage = lazy(routeImporters.expenses);
const OwnerTransactionsPage = lazy(routeImporters.ownerTransactions);
const WalletsAdminPage = lazy(routeImporters.walletsAdmin);
const WalletOperationsPage = lazy(routeImporters.walletOperations);
const WalletDetailsPage = lazy(routeImporters.walletDetails);
const MaintenancePage = lazy(routeImporters.maintenance);
const AnalyticsPage = lazy(routeImporters.analytics);

const UsersPage = lazy(routeImporters.users);
const RolesPage = lazy(routeImporters.roles);
const BackupPage = lazy(routeImporters.backup);

// Guard: redirects to /login if not authenticated, and checks role access.
// requiredPermissions actually holds ROLE NAMES (e.g. ["Admin","Manager","Salesperson"]),
// not fine-grained permission strings - matched via hasAnyRole (OR). Using hasPermission()
// here (permission-string lookup) made every non-Admin role fail on every route, since a
// role name like "Manager" is never itself a permission string.
function ProtectedRoute({ children, requiredPermissions = [] }: { children: React.ReactNode, requiredPermissions?: string[] }) {
  const { isAuthenticated, hasAnyRole } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (requiredPermissions.length > 0) {
    const hasAll = hasAnyRole(requiredPermissions);
    if (!hasAll) {
      return (
        <div className="flex h-screen items-center justify-center bg-gray-50 flex-col gap-4 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">غير مصرح لك بالدخول</h1>
          <p className="text-gray-500">لا تملك الصلاحيات الكافية للوصول إلى هذه الصفحة.</p>
          <Link to="/" className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
            العودة للرئيسية
          </Link>
        </div>
      );
    }
  }

  return <>{children}</>;
}

// Placeholder for routes not yet built
function ComingSoon({ label }: { label: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <p className="text-gray-400 text-sm">{label} — هذه الصفحة قيد الإنشاء...</p>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Toaster position="top-center" richColors />
          
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Public */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/share/products/:id" element={<PublicProductPage />} />

              {/* Protected Ã¢â‚¬â€ wrapped in AppLayout */}
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<DashboardPage />} />

                <Route element={<FeatureBoundaryLayout featureName="المبيعات" />}>
                  <Route path="/sales/pos"          element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><PosPage /></ProtectedRoute>} />
                  <Route path="/sales/history"      element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><SalesHistoryPage /></ProtectedRoute>} />
                  <Route path="/sales/returns"      element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><SalesReturnsPage /></ProtectedRoute>} />
                  <Route path="/sales/returns/new"  element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><NewSalesReturnPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="المشتريات" />}>
                  <Route path="/purchases/new"      element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><NewPurchasePage /></ProtectedRoute>} />
                  <Route path="/purchases/history"  element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><PurchasesHistoryPage /></ProtectedRoute>} />
                  <Route path="/purchases/returns"  element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><SupplierReturnsPage /></ProtectedRoute>} />
                  <Route path="/purchases/returns/new" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><NewSupplierReturnPage /></ProtectedRoute>} />
                  <Route path="/purchases/returns/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><SupplierReturnDetailsPage /></ProtectedRoute>} />
                  <Route path="/purchases/:id"      element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><PurchaseInvoiceDetailsPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="المخزون" />}>
                  <Route path="/inventory/products"   element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><ProductsPage /></ProtectedRoute>} />
                  <Route path="/inventory/products/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><ProductDetailsPage /></ProtectedRoute>} />
                  <Route path="/inventory/categories" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><CategoriesPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="جهات الاتصال" />}>
                  <Route path="/contacts/customers" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><CustomersPage /></ProtectedRoute>} />
                  <Route path="/contacts/customers/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><CustomerDetailsPage /></ProtectedRoute>} />
                  <Route path="/contacts/suppliers" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><SuppliersPage /></ProtectedRoute>} />
                  <Route path="/contacts/suppliers/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><SupplierDetailsPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="الماليات" />}>
                  <Route path="/finance/drawer"   element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><DrawerPage /></ProtectedRoute>} />
                  <Route path="/finance/drawer/history" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><DrawerHistoryPage /></ProtectedRoute>} />
                  <Route path="/finance/drawer/history/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><DrawerSessionDetailsPage /></ProtectedRoute>} />
                  <Route path="/finance/safe"     element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><SafePage /></ProtectedRoute>} />
                  <Route path="/finance/expenses" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><ExpensesPage /></ProtectedRoute>} />
                  <Route path="/finance/owner-transactions" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><OwnerTransactionsPage /></ProtectedRoute>} />
                  <Route path="/operations/wallets" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><WalletOperationsPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="الصيانة" />}>
                  <Route path="/maintenance" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Technician"]}><MaintenancePage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="التحليلات" />}>
                  <Route path="/analytics" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><AnalyticsPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="الإدارة والصلاحيات" />}>
                  <Route path="/admin/users" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><UsersPage /></ProtectedRoute>} />
                  <Route path="/admin/roles" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><RolesPage /></ProtectedRoute>} />
                </Route>

                <Route path="/settings" element={<ComingSoon label="الإعدادات" />} />
                <Route path="/settings/finance-policies" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><FinancePoliciesPage /></ProtectedRoute>} />
                <Route path="/settings/wallets" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><WalletsAdminPage /></ProtectedRoute>} />
                <Route path="/settings/backup" element={<ProtectedRoute requiredPermissions={["Admin"]}><BackupPage /></ProtectedRoute>} />
                <Route path="/wallets/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><WalletDetailsPage /></ProtectedRoute>} />
              </Route>

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}









