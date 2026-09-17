This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/**/*, package.json, vite.config.ts, tsconfig*.json, index.html, components.json, src/**/*, package.json
- Files matching these patterns are excluded: package-lock.json, pnpm-lock.yaml, yarn.lock, bun.lockb, *.lock, ai-context.md, repomix-output.*, tree.txt, verify-rebuild.sh, public/**, dist/**, build/**, coverage/**, .husky/**, .vscode/**, .idea/**, *.log, **/*.min.js, **/*.min.css, **/*.map, **/*.svg, **/*.png, **/*.jpg, **/*.jpeg, **/*.gif, **/*.webp, **/*.ico, **/*.avif, **/*.mp4, **/*.webm, **/*.mp3, **/*.pdf, **/*.woff, **/*.woff2, **/*.ttf, **/*.eot, **/__snapshots__/**, **/*.cjs, *.md, *.py, *.txt, dist/**, public/**, docs/**, .husky/**
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
index.html
package.json
src/App.css
src/App.tsx
src/core/repositories/IAuthRepository.ts
src/core/repositories/IContactsRepository.ts
src/core/repositories/IFinanceRepository.ts
src/core/repositories/IInventoryRepository.ts
src/features/admin/api/RolesApi.ts
src/features/admin/api/UsersApi.ts
src/features/admin/components/RoleFormModal.tsx
src/features/admin/components/UserFormModal.tsx
src/features/admin/hooks/useRoles.ts
src/features/admin/hooks/useUsers.ts
src/features/admin/pages/RolesPage.tsx
src/features/admin/pages/UsersPage.tsx
src/features/admin/schemas/roleSchemas.ts
src/features/admin/schemas/userSchemas.ts
src/features/auth/api/AuthApi.ts
src/features/auth/components/HasPermission.tsx
src/features/auth/components/LoginForm.tsx
src/features/auth/hooks/useAuth.tsx
src/features/auth/pages/LoginPage.tsx
src/features/auth/schemas/loginSchema.ts
src/features/auth/schemas/permissions.ts
src/features/contacts/api/ContactsApi.ts
src/features/contacts/components/CustomerForm.tsx
src/features/contacts/components/CustomersFilters.tsx
src/features/contacts/components/CustomersTable.tsx
src/features/contacts/hooks/useContacts.ts
src/features/contacts/pages/CustomerDetailsPage.tsx
src/features/contacts/pages/CustomersPage.tsx
src/features/contacts/schemas/contactSchemas.ts
src/features/dashboard/pages/DashboardPage.tsx
src/features/finance/api/FinanceApi.ts
src/features/finance/api/FinancePolicyApi.ts
src/features/finance/api/OwnerTransactionApi.ts
src/features/finance/api/WalletApi.ts
src/features/finance/components/CloseDrawerModal.tsx
src/features/finance/components/CreateExpenseModal.tsx
src/features/finance/components/DrawerTransactionsTable.tsx
src/features/finance/components/ExpensesTable.tsx
src/features/finance/components/ManualSafeTransactionModal.tsx
src/features/finance/components/ManualTransactionModal.tsx
src/features/finance/components/OpenDrawerForm.tsx
src/features/finance/components/ReceiveDrawerDepositModal.tsx
src/features/finance/components/SafeTransactionsTable.tsx
src/features/finance/hooks/useFinance.ts
src/features/finance/hooks/useFinancePolicies.ts
src/features/finance/hooks/useOwnerTransactions.ts
src/features/finance/hooks/usePaymentSourcePrompt.tsx
src/features/finance/pages/DrawerHistoryPage.tsx
src/features/finance/pages/DrawerPage.tsx
src/features/finance/pages/DrawerSessionDetailsPage.tsx
src/features/finance/pages/ExpensesPage.tsx
src/features/finance/pages/FinancePoliciesPage.tsx
src/features/finance/pages/OwnerTransactionsPage.tsx
src/features/finance/pages/SafePage.tsx
src/features/finance/schemas/financeSchemas.ts
src/features/inventory/api/InventoryApi.ts
src/features/inventory/components/AddProductForm.tsx
src/features/inventory/components/CategoryForms.tsx
src/features/inventory/components/DepartmentCard.tsx
src/features/inventory/components/ProductBatchesCard.tsx
src/features/inventory/components/ProductDetailsHeader.tsx
src/features/inventory/components/ProductFilters.tsx
src/features/inventory/components/ProductNotesCard.tsx
src/features/inventory/components/ProductOverviewCard.tsx
src/features/inventory/components/ProductPropertiesCard.tsx
src/features/inventory/components/ProductsTable.tsx
src/features/inventory/components/ProductStatusBadge.tsx
src/features/inventory/hooks/useInventory.ts
src/features/inventory/pages/CategoriesPage.tsx
src/features/inventory/pages/ProductDetailsPage.tsx
src/features/inventory/pages/ProductsPage.tsx
src/features/inventory/schemas/inventorySchemas.ts
src/features/maintenance/api/MaintenanceApi.ts
src/features/maintenance/api/queries.ts
src/features/maintenance/components/MaintenanceDetailDrawer.tsx
src/features/maintenance/components/MaintenanceListTable.tsx
src/features/maintenance/components/MaintenanceProductPicker.tsx
src/features/maintenance/components/MaintenanceQuickCreateDrawer.tsx
src/features/maintenance/pages/MaintenancePage.tsx
src/features/maintenance/schemas/maintenanceSchemas.ts
src/features/purchases/api/PurchaseApi.ts
src/features/purchases/api/SupplierReturnApi.ts
src/features/purchases/components/ProductPickerModal.tsx
src/features/purchases/components/purchase-invoice-form/PurchaseInvoiceHeader.tsx
src/features/purchases/components/purchase-invoice-form/PurchaseInvoiceItemsTable.tsx
src/features/purchases/components/purchase-invoice-form/PurchaseInvoiceSummary.tsx
src/features/purchases/components/PurchaseInvoiceForm.tsx
src/features/purchases/components/PurchasesFilters.tsx
src/features/purchases/components/PurchasesTable.tsx
src/features/purchases/components/SupplierBatchPickerModal.tsx
src/features/purchases/components/SupplierReturnsFilters.tsx
src/features/purchases/components/SupplierReturnsTable.tsx
src/features/purchases/hooks/usePurchases.ts
src/features/purchases/hooks/useSupplierReturns.ts
src/features/purchases/pages/NewPurchasePage.tsx
src/features/purchases/pages/NewSupplierReturnPage.tsx
src/features/purchases/pages/PurchaseInvoiceDetailsPage.tsx
src/features/purchases/pages/PurchasesHistoryPage.tsx
src/features/purchases/pages/SupplierReturnDetailsPage.tsx
src/features/purchases/pages/SupplierReturnsPage.tsx
src/features/purchases/schemas/__tests__/purchaseSchemas.test.ts
src/features/purchases/schemas/purchaseSchemas.ts
src/features/purchases/schemas/supplierReturnSchemas.ts
src/features/sales/api/salesApi.ts
src/features/sales/components/BatchSelectionModal.tsx
src/features/sales/components/CheckoutModal.tsx
src/features/sales/components/InvoiceDetailsCard.tsx
src/features/sales/components/InvoiceDetailsModal.tsx
src/features/sales/components/InvoiceSearchBar.tsx
src/features/sales/components/PosCart.tsx
src/features/sales/components/PosProductGrid.tsx
src/features/sales/components/ReturnItemsTable.tsx
src/features/sales/components/ReturnOptionsForm.tsx
src/features/sales/components/SalesHistoryColumns.tsx
src/features/sales/components/SalesHistorySearchBar.tsx
src/features/sales/components/SalesReturnsColumns.tsx
src/features/sales/components/SalesReturnsFilters.tsx
src/features/sales/hooks/usePosCart.ts
src/features/sales/hooks/useSales.ts
src/features/sales/pages/NewSalesReturnPage.tsx
src/features/sales/pages/PosPage.tsx
src/features/sales/pages/SalesHistoryPage.tsx
src/features/sales/pages/SalesReturnsPage.tsx
src/features/sales/schemas/salesSchemas.ts
src/features/sales/utils/__tests__/cartLogic.test.ts
src/features/sales/utils/__tests__/posUtils.test.ts
src/features/sales/utils/cartLogic.ts
src/features/sales/utils/posUtils.ts
src/features/suppliers/api/SupplierApi.ts
src/features/suppliers/components/SupplierFilters.tsx
src/features/suppliers/components/SupplierForm.tsx
src/features/suppliers/components/SupplierOverviewCard.tsx
src/features/suppliers/components/SupplierPaymentModal.tsx
src/features/suppliers/components/SuppliersTable.tsx
src/features/suppliers/components/SupplierStatementCard.tsx
src/features/suppliers/hooks/useSuppliers.ts
src/features/suppliers/pages/SupplierDetailsPage.tsx
src/features/suppliers/pages/SuppliersPage.tsx
src/features/suppliers/schemas/supplierSchemas.ts
src/features/wallets/api/WalletApi.ts
src/features/wallets/components/GlobalWalletOperationsTable.tsx
src/features/wallets/hooks/useGlobalWalletOperations.ts
src/features/wallets/hooks/useWalletDetails.ts
src/features/wallets/hooks/useWallets.ts
src/features/wallets/pages/WalletDetailsPage.tsx
src/features/wallets/pages/WalletOperationsPage.tsx
src/features/wallets/pages/WalletsAdminPage.tsx
src/features/wallets/schemas/walletSchemas.ts
src/index.css
src/lib/axios.ts
src/lib/storage.ts
src/lib/utils.ts
src/main.tsx
src/setupTests.ts
src/shared/components/errors/FeatureBoundaryLayout.tsx
src/shared/components/errors/FeatureErrorBoundary.tsx
src/shared/components/errors/GlobalErrorBoundary.tsx
src/shared/components/layout/AppLayout.tsx
src/shared/components/layout/Header.tsx
src/shared/components/layout/ProtectedRoute.tsx
src/shared/components/layout/Sidebar.tsx
src/shared/components/ui/__tests__/Button.test.tsx
src/shared/components/ui/BackButton.tsx
src/shared/components/ui/BaseModal.tsx
src/shared/components/ui/Button.tsx
src/shared/components/ui/ClearablePriceInput.tsx
src/shared/components/ui/ConfirmModal.tsx
src/shared/components/ui/DataTable.tsx
src/shared/components/ui/Input.tsx
src/shared/components/ui/Label.tsx
src/shared/components/ui/PageLoader.tsx
src/shared/components/ui/PickerModal.tsx
src/shared/components/ui/RightDrawer.tsx
src/shared/components/ui/Spinner.tsx
src/shared/hooks/__tests__/useDebounce.test.ts
src/shared/hooks/__tests__/useFocusTrap.test.ts
src/shared/hooks/useDebounce.ts
src/shared/hooks/useFocusTrap.ts
src/shared/hooks/useHeaderStore.ts
src/shared/hooks/useModalBehavior.ts
src/shared/hooks/useSidebarStore.ts
src/shared/styles/tokens.ts
src/shared/types/pagination.ts
src/shared/utils/__tests__/apiError.test.ts
src/shared/utils/__tests__/currency.test.ts
src/shared/utils/apiError.ts
src/shared/utils/currency.ts
src/shared/utils/date.ts
src/vite-env.d.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: index.html
```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>سنترالي - نظام الإدارة الذكية</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: package.json
```json
{
  "name": "centraly-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "oxlint",
    "lint:all": "oxlint && eslint .",
    "preview": "vite preview",
    "prepare": "husky"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.9.1",
    "@radix-ui/react-label": "^2.1.15",
    "@radix-ui/react-slot": "^1.3.3",
    "@tailwindcss/vite": "^4.3.3",
    "@tanstack/react-query": "^5.102.0",
    "axios": "^1.19.0",
    "clsx": "^2.1.1",
    "lucide-react": "^1.33.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-hook-form": "^7.86.0",
    "react-router-dom": "^7.18.2",
    "sonner": "^2.0.8",
    "tailwind-merge": "^3.6.0",
    "tailwindcss": "^4.3.3",
    "zod": "^4.4.3",
    "zustand": "^5.0.15"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^7.0.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^14.6.6",
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@typescript-eslint/eslint-plugin": "^8.68.0",
    "@typescript-eslint/parser": "^8.68.0",
    "@vitejs/plugin-react": "^6.0.4",
    "eslint": "^9.39.5",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.4",
    "husky": "^9.1.7",
    "jsdom": "^29.1.1",
    "lint-staged": "^17.3.0",
    "oxlint": "^1.75.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.68.0",
    "vite": "^8.2.0",
    "vitest": "^4.1.11"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "oxlint",
      "eslint --fix",
      "vitest related --run",
      "tsc --noEmit"
    ]
  }
}
```

## File: src/App.css
```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;
  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}
.hero {
  position: relative;
  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }
  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }
  .framework,
  .vite {
    position: absolute;
  }
  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }
  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}
#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;
  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}
#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;
  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }
  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}
#docs {
  border-right: 1px solid var(--border);
  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}
#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;
  .logo {
    height: 18px;
  }
  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
    li {
      flex: 1 1 calc(50% - 8px);
    }
    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}
#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}
.ticks {
  position: relative;
  width: 100%;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }
  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
```

## File: src/App.tsx
```typescript
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { AuthProvider, useAuth } from "./features/auth/hooks/useAuth";
import { FinancePoliciesPage } from './features/finance/pages/FinancePoliciesPage';
import { AppLayout } from "./shared/components/layout/AppLayout";
import { PageLoader } from "./shared/components/ui/PageLoader";
import { FeatureBoundaryLayout } from "./shared/components/errors/FeatureBoundaryLayout";
const LoginPage = lazy(() => import("./features/auth/pages/LoginPage").then(module => ({ default: module.LoginPage })));
const DashboardPage = lazy(() => import("./features/dashboard/pages/DashboardPage").then(module => ({ default: module.DashboardPage })));
const ProductsPage = lazy(() => import("./features/inventory/pages/ProductsPage").then(module => ({ default: module.ProductsPage })));
const ProductDetailsPage = lazy(() => import("./features/inventory/pages/ProductDetailsPage").then(module => ({ default: module.ProductDetailsPage })));
const CategoriesPage = lazy(() => import("./features/inventory/pages/CategoriesPage").then(module => ({ default: module.CategoriesPage })));
const PosPage = lazy(() => import("./features/sales/pages/PosPage").then(module => ({ default: module.PosPage })));
const SalesHistoryPage = lazy(() => import("./features/sales/pages/SalesHistoryPage").then(module => ({ default: module.SalesHistoryPage })));
const SalesReturnsPage = lazy(() => import("./features/sales/pages/SalesReturnsPage").then(module => ({ default: module.SalesReturnsPage })));
const NewSalesReturnPage = lazy(() => import("./features/sales/pages/NewSalesReturnPage").then(module => ({ default: module.NewSalesReturnPage })));
const PurchasesHistoryPage = lazy(() => import("./features/purchases/pages/PurchasesHistoryPage").then(module => ({ default: module.PurchasesHistoryPage })));
const NewPurchasePage = lazy(() => import("./features/purchases/pages/NewPurchasePage").then(module => ({ default: module.NewPurchasePage })));
const PurchaseInvoiceDetailsPage = lazy(() => import("./features/purchases/pages/PurchaseInvoiceDetailsPage").then(module => ({ default: module.PurchaseInvoiceDetailsPage })));
const SupplierReturnsPage = lazy(() => import("./features/purchases/pages/SupplierReturnsPage").then(module => ({ default: module.SupplierReturnsPage })));
const SupplierReturnDetailsPage = lazy(() => import("./features/purchases/pages/SupplierReturnDetailsPage").then(module => ({ default: module.SupplierReturnDetailsPage })));
const NewSupplierReturnPage = lazy(() => import("./features/purchases/pages/NewSupplierReturnPage").then(module => ({ default: module.NewSupplierReturnPage })));
const CustomersPage = lazy(() => import("./features/contacts/pages/CustomersPage").then(module => ({ default: module.CustomersPage })));
const CustomerDetailsPage = lazy(() => import("./features/contacts/pages/CustomerDetailsPage").then(module => ({ default: module.CustomerDetailsPage })));
const SuppliersPage = lazy(() => import("./features/suppliers/pages/SuppliersPage").then(module => ({ default: module.SuppliersPage })));
const SupplierDetailsPage = lazy(() => import("./features/suppliers/pages/SupplierDetailsPage").then(module => ({ default: module.SupplierDetailsPage })));
const DrawerPage = lazy(() => import("./features/finance/pages/DrawerPage").then(module => ({ default: module.DrawerPage })));
const DrawerHistoryPage = lazy(() => import("./features/finance/pages/DrawerHistoryPage").then(module => ({ default: module.DrawerHistoryPage })));
const DrawerSessionDetailsPage = lazy(() => import("./features/finance/pages/DrawerSessionDetailsPage").then(module => ({ default: module.DrawerSessionDetailsPage })));
const SafePage = lazy(() => import("./features/finance/pages/SafePage").then(module => ({ default: module.SafePage })));
const ExpensesPage = lazy(() => import("./features/finance/pages/ExpensesPage").then(module => ({ default: module.ExpensesPage })));
const OwnerTransactionsPage = lazy(() => import("./features/finance/pages/OwnerTransactionsPage").then(module => ({ default: module.OwnerTransactionsPage })));
const WalletsAdminPage = lazy(() => import("./features/wallets/pages/WalletsAdminPage").then(module => ({ default: module.WalletsAdminPage })));
const WalletOperationsPage = lazy(() => import("./features/wallets/pages/WalletOperationsPage").then(module => ({ default: module.WalletOperationsPage })));
const WalletDetailsPage = lazy(() => import("./features/wallets/pages/WalletDetailsPage").then(module => ({ default: module.WalletDetailsPage })));
const MaintenancePage = lazy(() => import("./features/maintenance/pages/MaintenancePage").then(module => ({ default: module.MaintenancePage })));
const UsersPage = lazy(() => import("./features/admin/pages/UsersPage").then(module => ({ default: module.UsersPage })));
const RolesPage = lazy(() => import("./features/admin/pages/RolesPage").then(module => ({ default: module.RolesPage })));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 1000 * 60 },
  },
});
function ProtectedRoute({ children, requiredPermissions = [] }: { children: React.ReactNode, requiredPermissions?: string[] }) {
  const { isAuthenticated, hasPermission } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (requiredPermissions.length > 0) {
    const hasAll = requiredPermissions.every(p => hasPermission(p));
    if (!hasAll) {
      return (
        <div className="flex h-screen items-center justify-center bg-gray-50 flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Ã˜ÂºÃ™Å Ã˜Â± Ã™â€¦Ã˜ÂµÃ˜Â±Ã˜Â­ Ã™â€žÃ™Æ’ Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â¯Ã˜Â®Ã™Ë†Ã™â€ž</h1>
          <p className="text-gray-500">Ã™â€žÃ˜Â§ Ã˜ÂªÃ™â€¦Ã™â€žÃ™Æ’ Ã˜Â§Ã™â€žÃ˜ÂµÃ™â€žÃ˜Â§Ã˜Â­Ã™Å Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™Æ’Ã˜Â§Ã™ÂÃ™Å Ã˜Â© Ã™â€žÃ™â€žÃ™Ë†Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¥Ã™â€žÃ™â€° Ã™â€¡Ã˜Â°Ã™â€¡ Ã˜Â§Ã™â€žÃ˜ÂµÃ™ÂÃ˜Â­Ã˜Â©.</p>
        </div>
      );
    }
  }
  return <>{children}</>;
}
function ComingSoon({ label }: { label: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
      <p className="text-gray-400 text-sm">{label} Ã¢â‚¬â€ Ã™â€¡Ã˜Â°Ã™â€¡ Ã˜Â§Ã™â€žÃ˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã™â€šÃ™Å Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€ Ã˜Â´Ã˜Â§Ã˜Â¡...</p>
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
              {}
              <Route path="/login" element={<LoginPage />} />
              {}
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<DashboardPage />} />
                <Route element={<FeatureBoundaryLayout featureName="Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¨Ã™Å Ã˜Â¹Ã˜Â§Ã˜Âª" />}>
                  <Route path="/sales/pos"          element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><PosPage /></ProtectedRoute>} />
                  <Route path="/sales/history"      element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><SalesHistoryPage /></ProtectedRoute>} />
                  <Route path="/sales/returns"      element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><SalesReturnsPage /></ProtectedRoute>} />
                  <Route path="/sales/returns/new"  element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><NewSalesReturnPage /></ProtectedRoute>} />
                </Route>
                <Route element={<FeatureBoundaryLayout featureName="Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Å Ã˜Â§Ã˜Âª" />}>
                  <Route path="/purchases/new"      element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><NewPurchasePage /></ProtectedRoute>} />
                  <Route path="/purchases/history"  element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><PurchasesHistoryPage /></ProtectedRoute>} />
                  <Route path="/purchases/returns"  element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><SupplierReturnsPage /></ProtectedRoute>} />
                  <Route path="/purchases/returns/new" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><NewSupplierReturnPage /></ProtectedRoute>} />
                  <Route path="/purchases/returns/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><SupplierReturnDetailsPage /></ProtectedRoute>} />
                  <Route path="/purchases/:id"      element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><PurchaseInvoiceDetailsPage /></ProtectedRoute>} />
                </Route>
                <Route element={<FeatureBoundaryLayout featureName="Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â®Ã˜Â²Ã™Ë†Ã™â€ " />}>
                  <Route path="/inventory/products"   element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><ProductsPage /></ProtectedRoute>} />
                  <Route path="/inventory/products/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><ProductDetailsPage /></ProtectedRoute>} />
                  <Route path="/inventory/categories" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><CategoriesPage /></ProtectedRoute>} />
                </Route>
                <Route element={<FeatureBoundaryLayout featureName="Ø¬Ù‡Ø§Øª Ø§Ù„Ø§ØªØµØ§Ù„" />}>
                  <Route path="/contacts/customers" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><CustomersPage /></ProtectedRoute>} />
                  <Route path="/contacts/customers/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><CustomerDetailsPage /></ProtectedRoute>} />
                  <Route path="/contacts/suppliers" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><SuppliersPage /></ProtectedRoute>} />
                  <Route path="/contacts/suppliers/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><SupplierDetailsPage /></ProtectedRoute>} />
                </Route>
                <Route element={<FeatureBoundaryLayout featureName="Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â§Ã™â€žÃ™Å Ã˜Â§Ã˜Âª" />}>
                  <Route path="/finance/drawer"   element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><DrawerPage /></ProtectedRoute>} />
                  <Route path="/finance/drawer/history" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><DrawerHistoryPage /></ProtectedRoute>} />
                  <Route path="/finance/drawer/history/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><DrawerSessionDetailsPage /></ProtectedRoute>} />
                  <Route path="/finance/safe"     element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><SafePage /></ProtectedRoute>} />
                  <Route path="/finance/expenses" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><ExpensesPage /></ProtectedRoute>} />
                  <Route path="/finance/owner-transactions" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><OwnerTransactionsPage /></ProtectedRoute>} />
                  <Route path="/operations/wallets" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><WalletOperationsPage /></ProtectedRoute>} />
                </Route>
                <Route element={<FeatureBoundaryLayout featureName="Ã˜Â§Ã™â€žÃ˜ÂµÃ™Å Ã˜Â§Ã™â€ Ã˜Â©" />}>
                  <Route path="/maintenance" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Technician"]}><MaintenancePage /></ProtectedRoute>} />
                </Route>
                <Route element={<FeatureBoundaryLayout featureName="Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© ÙˆØ§Ù„ØµÙ„Ø§Ø­ÙŠØ§Øª" />}>
                  <Route path="/admin/users" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><UsersPage /></ProtectedRoute>} />
                  <Route path="/admin/roles" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><RolesPage /></ProtectedRoute>} />
                </Route>
                <Route path="/settings" element={<ComingSoon label="Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯Ã˜Â§Ã˜Âª" />} />
                <Route path="/settings/finance-policies" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson", "Technician"]}><FinancePoliciesPage /></ProtectedRoute>} />
                <Route path="/settings/wallets" element={<ProtectedRoute requiredPermissions={["Admin", "Manager"]}><WalletsAdminPage /></ProtectedRoute>} />
                <Route path="/wallets/:id" element={<ProtectedRoute requiredPermissions={["Admin", "Manager", "Salesperson"]}><WalletDetailsPage /></ProtectedRoute>} />
              </Route>
              {}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
```

## File: src/core/repositories/IAuthRepository.ts
```typescript
import { LoginFormData } from "@/features/auth/schemas/loginSchema";
export interface AuthResponse {
  id: string;
  userName: string;
  token: string;
  expiresIn: number;
  refreshToken: string;
  refreshTokenExpiration: string;
  role: string[];
  permissions: string[];
}
export interface RefreshTokenRequest {
  token: string;
  refreshToken: string;
}
export interface IAuthRepository {
  login(data: LoginFormData): Promise<AuthResponse>;
  refreshToken(data: RefreshTokenRequest): Promise<AuthResponse>;
  revokeRefreshToken(data: RefreshTokenRequest): Promise<void>;
}
```

## File: src/core/repositories/IContactsRepository.ts
```typescript
import { PaginatedList } from "@/shared/types/pagination";
import {
  CreateCustomerRequest,
  CustomerResponse,
  CustomerStatementResponse, CustomerDebtHistoryResponse,
  CreatePaymentRequest,
  ContactFilters
} from "@/features/contacts/schemas/contactSchemas";
export interface IContactsRepository {
  getCustomers(filters: ContactFilters): Promise<PaginatedList<CustomerResponse>>;
  getCustomer(id: string): Promise<CustomerResponse>;
  getCustomerDebtHistory(id: string): Promise<CustomerDebtHistoryResponse>;
  createCustomer(data: CreateCustomerRequest): Promise<string>;
  updateCustomer(id: string, data: CreateCustomerRequest): Promise<void>;
  deleteCustomer(id: string): Promise<void>;
  getCustomerStatement(customerId: string): Promise<CustomerStatementResponse[]>;
  addCustomerPayment(customerId: string, data: CreatePaymentRequest): Promise<string>;
}
```

## File: src/core/repositories/IFinanceRepository.ts
```typescript
import { PaginatedList } from "@/shared/types/pagination";
import {
  OpenSessionRequest, DrawerSessionResponse, AddManualTransactionRequest,
  CreateSafeRequest, SafeResponse, SafeTransactionResponse, ReceiveDrawerDepositRequest, AddManualSafeTransactionRequest,
  CreateExpenseCategoryRequest, ExpenseCategoryResponse,
  CreateExpenseRequest, ExpenseResponse,
  FinanceFilters
} from "@/features/finance/schemas/financeSchemas";
export interface IFinanceRepository {
  getCurrentDrawerSession(type?: number): Promise<DrawerSessionResponse>;
  openDrawerSession(data: OpenSessionRequest): Promise<string>;
  closeDrawerSession(type?: number): Promise<void>;
  addDrawerTransaction(data: AddManualTransactionRequest): Promise<string>;
  getDrawerHistory(filters: FinanceFilters): Promise<PaginatedList<DrawerSessionResponse>>;
  getDrawerSessionById(id: string): Promise<DrawerSessionResponse>;
  getSafes(): Promise<SafeResponse[]>;
  createSafe(data: CreateSafeRequest): Promise<string>;
  getSafeTransactions(safeId: string, filters: FinanceFilters): Promise<SafeTransactionResponse[]>;
  depositFromDrawer(safeId: string, request: ReceiveDrawerDepositRequest): Promise<SafeTransactionResponse>;
  addManualSafeTransaction(safeId: string, request: AddManualSafeTransactionRequest): Promise<SafeTransactionResponse>;
  getExpenseCategories(): Promise<ExpenseCategoryResponse[]>;
  createExpenseCategory(request: CreateExpenseCategoryRequest): Promise<ExpenseCategoryResponse>;
  getExpenses(filters: FinanceFilters): Promise<ExpenseResponse[]>;
  recordExpense(request: CreateExpenseRequest): Promise<ExpenseResponse>;
}
```

## File: src/core/repositories/IInventoryRepository.ts
```typescript
import { PaginatedList } from "@/shared/types/pagination";
import {
  CategoryResponse,
  CreateProductRequest,
  DepartmentResponse,
  ProductResponse,
  ProductFilters
} from "@/features/inventory/schemas/inventorySchemas";
export interface IInventoryRepository {
  getCategories(departmentId?: string, filters?: ProductFilters): Promise<PaginatedList<CategoryResponse>>;
  createCategory(reqData: { name: string; departmentId: string }): Promise<string>;
  updateCategory(id: string, reqData: { name: string; departmentId: string }): Promise<void>;
  deleteCategory(id: string): Promise<void>;
  getDepartments(filters?: ProductFilters): Promise<PaginatedList<DepartmentResponse>>;
  createDepartment(reqData: { name: string }): Promise<string>;
  updateDepartment(id: string, reqData: { name: string }): Promise<void>;
  deleteDepartment(id: string): Promise<void>;
  getProducts(filters: ProductFilters): Promise<PaginatedList<ProductResponse>>;
  getProduct(id: string): Promise<ProductResponse>;
  createProduct(data: CreateProductRequest): Promise<string>;
  updateProduct(id: string, data: CreateProductRequest): Promise<void>;
  deleteProduct(id: string): Promise<void>;
}
```

## File: src/features/admin/api/RolesApi.ts
```typescript
import { apiClient } from '@/lib/axios';
import { RoleDetailResponse, RoleRequest, RoleResponse } from '../schemas/roleSchemas';
export const rolesApi = {
  getRoles: async (includeDisabled = false): Promise<RoleResponse[]> => {
    const { data } = await apiClient.get<RoleResponse[]>(`/roles?includeDisabled=${includeDisabled}`);
    return data;
  },
  getRole: async (id: string): Promise<RoleDetailResponse> => {
    const { data } = await apiClient.get<RoleDetailResponse>(`/roles/${id}`);
    return data;
  },
  getPermissions: async (): Promise<string[]> => {
    const { data } = await apiClient.get<string[]>('/roles/permissions');
    return data;
  },
  createRole: async (request: RoleRequest): Promise<RoleResponse> => {
    const { data } = await apiClient.post<RoleResponse>('/roles', request);
    return data;
  },
  updateRole: async ({ id, request }: { id: string; request: RoleRequest }): Promise<void> => {
    await apiClient.put(`/roles/${id}`, request);
  },
  toggleRoleStatus: async (id: string): Promise<void> => {
    await apiClient.patch(`/roles/${id}/toggle-status`);
  },
};
```

## File: src/features/admin/api/UsersApi.ts
```typescript
import { apiClient } from '@/lib/axios';
import { CreateUserRequest, UpdateUserRequest, UserResponse } from '../schemas/userSchemas';
export const usersApi = {
  getUsers: async (): Promise<UserResponse[]> => {
    const { data } = await apiClient.get<UserResponse[]>('/users');
    return data;
  },
  getUser: async (id: string): Promise<UserResponse> => {
    const { data } = await apiClient.get<UserResponse>(`/users/${id}`);
    return data;
  },
  createUser: async (request: CreateUserRequest): Promise<UserResponse> => {
    const { data } = await apiClient.post<UserResponse>('/users', request);
    return data;
  },
  updateUser: async ({ id, request }: { id: string; request: UpdateUserRequest }): Promise<void> => {
    await apiClient.put(`/users/${id}`, request);
  },
};
```

## File: src/features/admin/components/RoleFormModal.tsx
```typescript
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { Button } from '@/shared/components/ui/Button';
import { Input } from '@/shared/components/ui/Input';
import { Label } from '@/shared/components/ui/Label';
import { roleFormSchema, RoleFormData } from '../schemas/roleSchemas';
import { usePermissions, useRole, useCreateRole, useUpdateRole } from '../hooks/useRoles';
interface RoleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleId?: string | null;
}
export function RoleFormModal({ isOpen, onClose, roleId }: RoleFormModalProps) {
  const { data: permissionsData = [] } = usePermissions();
  const { data: roleData, isLoading: isRoleLoading } = useRole(roleId || '');
  const createMutation = useCreateRole();
  const updateMutation = useUpdateRole();
  const [groupedPermissions, setGroupedPermissions] = useState<Record<string, string[]>>({});
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<RoleFormData>({
    resolver: zodResolver(roleFormSchema),
    defaultValues: { name: '', permissions: [] }
  });
  useEffect(() => {
    // Group permissions by prefix (e.g., 'sales:read' -> group 'sales')
    const grouped = permissionsData.reduce((acc, perm) => {
      const [group] = perm.split(':');
      if (!acc[group]) acc[group] = [];
      acc[group].push(perm);
      return acc;
    }, {} as Record<string, string[]>);
    setGroupedPermissions(grouped);
  }, [permissionsData]);
  useEffect(() => {
    if (roleData && roleId) {
      reset({
        name: roleData.name,
        permissions: roleData.permissions
      });
    } else {
      reset({ name: '', permissions: [] });
    }
  }, [roleData, roleId, reset]);
  const onSubmit = (data: RoleFormData) => {
    if (roleId) {
      updateMutation.mutate({ id: roleId, request: data }, {
        onSuccess: () => onClose()
      });
    } else {
      createMutation.mutate(data, {
        onSuccess: () => onClose()
      });
    }
  };
  const footer = (
    <div className="flex justify-end gap-2" dir="rtl">
      <Button type="button" variant="outline" onClick={onClose}>Ø¥Ù„ØºØ§Ø¡</Button>
      <Button type="button" onClick={handleSubmit(onSubmit)} disabled={createMutation.isPending || updateMutation.isPending}>
        Ø­ÙØ¸
      </Button>
    </div>
  );
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={roleId ? 'ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ø¯ÙˆØ±' : 'Ø¥Ø¶Ø§ÙØ© Ø¯ÙˆØ± Ø¬Ø¯ÙŠØ¯'}
      size="2xl"
      footer={footer}
    >
        {isRoleLoading ? (
          <div className="py-8 text-center">Ø¬Ø§Ø±ÙŠ Ø§Ù„ØªØ­Ù…ÙŠÙ„...</div>
        ) : (
          <form id="role-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4" dir="rtl">
            <div className="space-y-2">
              <Label>Ø§Ø³Ù… Ø§Ù„Ø¯ÙˆØ±</Label>
              <Input {...register('name')} placeholder="Ù…Ø«Ø§Ù„: Ù…Ø¯ÙŠØ± Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="space-y-3">
              <Label className="text-base font-semibold border-b pb-2 block">Ø§Ù„ØµÙ„Ø§Ø­ÙŠØ§Øª</Label>
              {errors.permissions && <p className="text-red-500 text-sm">{errors.permissions.message}</p>}
              <Controller
                name="permissions"
                control={control}
                render={({ field }) => (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(groupedPermissions).map(([group, perms]) => (
                      <div key={group} className="bg-slate-50 p-4 rounded-lg border">
                        <h4 className="font-bold text-slate-700 capitalize mb-3">{group}</h4>
                        <div className="space-y-2">
                          {perms.map(perm => {
                            const isChecked = field.value.includes(perm);
                            return (
                              <div key={perm} className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  id={perm}
                                  checked={isChecked}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      field.onChange([...field.value, perm]);
                                    } else {
                                      field.onChange(field.value.filter(p => p !== perm));
                                    }
                                  }}
                                  className="rounded border-gray-300 w-4 h-4 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor={perm} className="cursor-pointer font-normal text-sm">
                                  {perm}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              />
            </div>
          </form>
        )}
    </BaseModal>
  );
}
```

## File: src/features/admin/components/UserFormModal.tsx
```typescript
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { Button } from '@/shared/components/ui/Button';
import { Input } from '@/shared/components/ui/Input';
import { Label } from '@/shared/components/ui/Label';
import { userFormSchema, UserFormData } from '../schemas/userSchemas';
import { useUser, useCreateUser, useUpdateUser } from '../hooks/useUsers';
import { useRoles } from '../hooks/useRoles';
interface UserFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId?: string | null;
}
export function UserFormModal({ isOpen, onClose, userId }: UserFormModalProps) {
  const { data: userData, isLoading: isUserLoading } = useUser(userId || '');
  const { data: rolesData = [] } = useRoles(false); // Only active roles
  const createMutation = useCreateUser();
  const updateMutation = useUpdateUser();
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: { username: '', password: '', roles: [] }
  });
  useEffect(() => {
    if (userData && userId) {
      reset({
        username: userData.username,
        roles: userData.roles
      });
    } else {
      reset({ username: '', password: '', roles: [] });
    }
  }, [userData, userId, reset]);
  const onSubmit = (data: UserFormData) => {
    if (userId) {
      updateMutation.mutate({
        id: userId,
        request: { username: data.username, roles: data.roles }
      }, {
        onSuccess: () => onClose()
      });
    } else {
      createMutation.mutate({
        username: data.username,
        password: data.password,
        roles: data.roles
      }, {
        onSuccess: () => onClose()
      });
    }
  };
  const footer = (
    <div className="flex justify-end gap-2" dir="rtl">
      <Button type="button" variant="outline" onClick={onClose}>Ø¥Ù„ØºØ§Ø¡</Button>
      <Button type="button" onClick={handleSubmit(onSubmit)} disabled={createMutation.isPending || updateMutation.isPending}>
        Ø­ÙØ¸
      </Button>
    </div>
  );
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={userId ? 'ØªØ¹Ø¯ÙŠÙ„ Ù…Ø³ØªØ®Ø¯Ù…' : 'Ø¥Ø¶Ø§ÙØ© Ù…Ø³ØªØ®Ø¯Ù… Ø¬Ø¯ÙŠØ¯'}
      footer={footer}
    >
        {isUserLoading ? (
          <div className="py-8 text-center">Ø¬Ø§Ø±ÙŠ Ø§Ù„ØªØ­Ù…ÙŠÙ„...</div>
        ) : (
          <form id="user-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4" dir="rtl">
            <div className="space-y-2">
              <Label>Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…</Label>
              <Input {...register('username')} placeholder="Ù…Ø«Ø§Ù„: ahmed" />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
            {!userId && (
              <div className="space-y-2">
                <Label>ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±</Label>
                <Input type="password" {...register('password')} placeholder="******" />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
            )}
            <div className="space-y-3 border-t pt-4">
              <Label className="text-base font-semibold block">Ø§Ù„Ø£Ø¯ÙˆØ§Ø± Ø§Ù„Ù…Ù…Ù†ÙˆØ­Ø©</Label>
              {errors.roles && <p className="text-red-500 text-sm">{errors.roles.message}</p>}
              <Controller
                name="roles"
                control={control}
                render={({ field }) => (
                  <div className="space-y-2 bg-slate-50 p-4 rounded-lg border max-h-48 overflow-y-auto">
                    {rolesData.map(role => {
                      const isChecked = field.value.includes(role.name);
                      return (
                        <div key={role.id} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={`role-${role.id}`}
                            checked={isChecked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, role.name]);
                              } else {
                                field.onChange(field.value.filter(r => r !== role.name));
                              }
                            }}
                            className="rounded border-gray-300 w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <label htmlFor={`role-${role.id}`} className="cursor-pointer font-normal text-sm">
                            {role.name}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                )}
              />
            </div>
          </form>
        )}
    </BaseModal>
  );
}
```

## File: src/features/admin/hooks/useRoles.ts
```typescript
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { rolesApi } from '../api/RolesApi';
import { RoleRequest } from '../schemas/roleSchemas';
import { toast } from 'sonner';
export const useRoles = (includeDisabled = false) => {
  return useQuery({
    queryKey: ['roles', includeDisabled],
    queryFn: () => rolesApi.getRoles(includeDisabled),
  });
};
export const useRole = (id: string) => {
  return useQuery({
    queryKey: ['roles', id],
    queryFn: () => rolesApi.getRole(id),
    enabled: !!id,
  });
};
export const usePermissions = () => {
  return useQuery({
    queryKey: ['permissions'],
    queryFn: () => rolesApi.getPermissions(),
  });
};
export const useCreateRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: RoleRequest) => rolesApi.createRole(data),
    onSuccess: () => {
      toast.success('تم إنشاء الدور بنجاح');
      queryClient.invalidateQueries({ queryKey: ['roles'] });
    },
    onError: () => {
      toast.error('حدث خطأ أثناء إنشاء الدور');
    }
  });
};
export const useUpdateRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: { id: string; request: RoleRequest }) => rolesApi.updateRole(params),
    onSuccess: (_, variables) => {
      toast.success('تم تحديث الدور بنجاح');
      queryClient.invalidateQueries({ queryKey: ['roles'] });
      queryClient.invalidateQueries({ queryKey: ['roles', variables.id] });
    },
    onError: () => {
      toast.error('حدث خطأ أثناء تحديث الدور');
    }
  });
};
export const useToggleRoleStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => rolesApi.toggleRoleStatus(id),
    onSuccess: () => {
      toast.success('تم تغيير حالة الدور بنجاح');
      queryClient.invalidateQueries({ queryKey: ['roles'] });
    },
    onError: () => {
      toast.error('حدث خطأ أثناء تغيير حالة الدور');
    }
  });
};
```

## File: src/features/admin/hooks/useUsers.ts
```typescript
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usersApi } from '../api/UsersApi';
import { CreateUserRequest, UpdateUserRequest } from '../schemas/userSchemas';
import { toast } from 'sonner';
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => usersApi.getUsers(),
  });
};
export const useUser = (id: string) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => usersApi.getUser(id),
    enabled: !!id,
  });
};
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateUserRequest) => usersApi.createUser(data),
    onSuccess: () => {
      toast.success('تم إنشاء المستخدم بنجاح');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: () => {
      toast.error('حدث خطأ أثناء إنشاء المستخدم');
    }
  });
};
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: { id: string; request: UpdateUserRequest }) => usersApi.updateUser(params),
    onSuccess: (_, variables) => {
      toast.success('تم تحديث المستخدم بنجاح');
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['users', variables.id] });
    },
    onError: () => {
      toast.error('حدث خطأ أثناء تحديث المستخدم');
    }
  });
};
```

## File: src/features/admin/pages/RolesPage.tsx
```typescript
import { useState } from 'react';
import { useRoles, useToggleRoleStatus } from '../hooks/useRoles';
import { RoleFormModal } from '../components/RoleFormModal';
import { Button } from '@/shared/components/ui/Button';
import { Plus, Edit, ToggleLeft, ToggleRight, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';
export function RolesPage() {
  const [includeDisabled, setIncludeDisabled] = useState(false);
  const { data: roles, isLoading } = useRoles(includeDisabled);
  const toggleMutation = useToggleRoleStatus();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRoleId, setEditingRoleId] = useState<string | null>(null);
  const handleAdd = () => {
    setEditingRoleId(null);
    setIsModalOpen(true);
  };
  const handleEdit = (id: string) => {
    setEditingRoleId(id);
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-8">
      {}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10"></div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø£Ø¯ÙˆØ§Ø± ÙˆØ§Ù„ØµÙ„Ø§Ø­ÙŠØ§Øª</h1>
            <p className="text-slate-500 mt-1.5 text-sm font-medium">Ø§Ù„ØªØ­ÙƒÙ… ÙÙŠ Ù…Ø¬Ù…ÙˆØ¹Ø§Øª Ø§Ù„ØµÙ„Ø§Ø­ÙŠØ§Øª Ø§Ù„Ù…ØªØ§Ø­Ø© ÙÙŠ Ø§Ù„Ù†Ø¸Ø§Ù… ÙˆØªØ®ØµÙŠØµ ÙˆØµÙˆÙ„ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†.</p>
          </div>
        </div>
        <div className="flex gap-4 items-center shrink-0">
          <label className="flex items-center gap-2 cursor-pointer bg-slate-50 hover:bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200 transition-colors">
            <input
              type="checkbox"
              checked={includeDisabled}
              onChange={(e) => setIncludeDisabled(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
            />
            <span className="text-sm font-bold text-slate-600">Ø¥Ø¸Ù‡Ø§Ø± Ø§Ù„Ù…Ø¹Ø·Ù„Ø©</span>
          </label>
          <Button onClick={handleAdd} className="gap-2 shadow-indigo-500/20 shadow-lg px-6 h-12 bg-indigo-600 hover:bg-indigo-700">
            <Plus size={18} /> Ø¥Ø¶Ø§ÙØ© Ø¯ÙˆØ± Ø¬Ø¯ÙŠØ¯
          </Button>
        </div>
      </div>
      {}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex flex-col items-center justify-center space-y-4">
            <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium">Ø¬Ø§Ø±ÙŠ Ø§Ù„ØªØ­Ù…ÙŠÙ„...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-5 px-8 font-bold text-slate-600 text-sm tracking-wide">Ø§Ø³Ù… Ø§Ù„Ø¯ÙˆØ±</th>
                  <th className="p-5 font-bold text-slate-600 text-sm tracking-wide">Ø§Ù„Ø­Ø§Ù„Ø©</th>
                  <th className="p-5 px-8 font-bold text-slate-600 text-sm tracking-wide w-40 text-center">Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {roles?.map(role => (
                  <tr key={role.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-5 px-8">
                      <p className="font-bold text-slate-800 text-base">{role.name}</p>
                      <p className="text-[13px] text-slate-400 mt-0.5 font-medium font-mono">ID: {role.id.slice(0, 8)}...</p>
                    </td>
                    <td className="p-5">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-bold border ${role.isDeleted ? 'bg-red-50 text-red-700 border-red-100' : 'bg-emerald-50 text-emerald-700 border-emerald-100'}`}>
                        {role.isDeleted ? <XCircle size={14} /> : <CheckCircle2 size={14} />}
                        {role.isDeleted ? 'Ù…Ø¹Ø·Ù„' : 'Ù†Ø´Ø·'}
                      </span>
                    </td>
                    <td className="p-5 px-8 flex items-center justify-center gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(role.id)} title="ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ø¯ÙˆØ±" className="bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Edit size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => toggleMutation.mutate(role.id)} title={role.isDeleted ? 'ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø¯ÙˆØ±' : 'ØªØ¹Ø·ÙŠÙ„ Ø§Ù„Ø¯ÙˆØ±'} className="bg-white border border-slate-200 hover:bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                        {role.isDeleted ? (
                          <ToggleLeft size={22} className="text-slate-400" />
                        ) : (
                          <ToggleRight size={22} className="text-emerald-500" />
                        )}
                      </Button>
                    </td>
                  </tr>
                ))}
                {roles?.length === 0 && (
                  <tr>
                    <td colSpan={3} className="p-16 text-center text-slate-500 font-medium text-lg">
                      Ù„Ø§ ØªÙˆØ¬Ø¯ Ø£Ø¯ÙˆØ§Ø± Ù…Ø³Ø¬Ù„Ø© Ø¨Ø¹Ø¯.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <RoleFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        roleId={editingRoleId}
      />
    </div>
  );
}
```

## File: src/features/admin/pages/UsersPage.tsx
```typescript
import { useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import { UserFormModal } from '../components/UserFormModal';
import { Button } from '@/shared/components/ui/Button';
import { Plus, Edit, User, Shield } from 'lucide-react';
export function UsersPage() {
  const { data: users, isLoading } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const handleAdd = () => {
    setEditingUserId(null);
    setIsModalOpen(true);
  };
  const handleEdit = (id: string) => {
    setEditingUserId(id);
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-8">
      {}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <User size={24} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†</h1>
            <p className="text-slate-500 mt-1.5 text-sm font-medium">Ø£Ø¶Ù Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ø¬Ø¯Ø¯ ÙˆÙ‚Ù… Ø¨ØªØ¹ÙŠÙŠÙ† Ø§Ù„ØµÙ„Ø§Ø­ÙŠØ§Øª ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Ø± Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ù„ÙƒÙ„ Ù…Ø³ØªØ®Ø¯Ù… Ù„Ø¶Ù…Ø§Ù† Ø£Ù…Ø§Ù† Ø§Ù„Ù†Ø¸Ø§Ù….</p>
          </div>
        </div>
        <Button onClick={handleAdd} className="gap-2 shadow-blue-500/20 shadow-lg px-6 shrink-0 h-12">
          <Plus size={18} /> Ø¥Ø¶Ø§ÙØ© Ù…Ø³ØªØ®Ø¯Ù… Ø¬Ø¯ÙŠØ¯
        </Button>
      </div>
      {}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex flex-col items-center justify-center space-y-4">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium">Ø¬Ø§Ø±ÙŠ Ø§Ù„ØªØ­Ù…ÙŠÙ„...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-5 px-8 font-bold text-slate-600 text-sm tracking-wide">ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…</th>
                  <th className="p-5 font-bold text-slate-600 text-sm tracking-wide">Ø§Ù„Ø£Ø¯ÙˆØ§Ø± Ø§Ù„Ù…Ù…Ù†ÙˆØ­Ø©</th>
                  <th className="p-5 px-8 font-bold text-slate-600 text-sm tracking-wide w-32 text-center">Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users?.map(user => (
                  <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-5 px-8">
                      <div className="flex items-center gap-4">
                        <div className="h-11 w-11 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg border border-indigo-100">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-base">{user.username}</p>
                          <p className="text-[13px] text-slate-400 mt-0.5 font-medium font-mono">ID: {user.id.slice(0, 8)}...</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {user.roles.length === 0 && <span className="text-sm text-slate-400">Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø£Ø¯ÙˆØ§Ø±</span>}
                        {user.roles.map(role => (
                          <span key={role} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 text-[13px] font-bold rounded-lg border border-blue-100/60 shadow-sm">
                            <Shield size={14} className="text-blue-500" />
                            {role}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-5 px-8 text-center">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(user.id)} className="opacity-0 group-hover:opacity-100 transition-opacity bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600">
                        <Edit size={18} />
                      </Button>
                    </td>
                  </tr>
                ))}
                {users?.length === 0 && (
                  <tr>
                    <td colSpan={3} className="p-16 text-center text-slate-500 font-medium text-lg">
                      Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ù…Ø³Ø¬Ù„ÙŠÙ† Ø¨Ø¹Ø¯.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <UserFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userId={editingUserId}
      />
    </div>
  );
}
```

## File: src/features/admin/schemas/roleSchemas.ts
```typescript
import { z } from 'zod';
export interface RoleResponse {
  id: string;
  name: string;
  isDeleted: boolean;
}
export interface RoleDetailResponse {
  id: string;
  name: string;
  isDeleted: boolean;
  permissions: string[];
}
export const roleFormSchema = z.object({
  name: z.string().min(3, "اسم الدور يجب أن يكون 3 أحرف على الأقل").max(200),
  permissions: z.array(z.string()).min(1, "يجب اختيار صلاحية واحدة على الأقل"),
});
export type RoleFormData = z.infer<typeof roleFormSchema>;
export interface RoleRequest {
  name: string;
  permissions: string[];
}
```

## File: src/features/admin/schemas/userSchemas.ts
```typescript
import { z } from 'zod';
export interface UserResponse {
  id: string;
  username: string;
  roles: string[];
}
export const userFormSchema = z.object({
  username: z.string().min(3, "اسم المستخدم يجب أن يكون 3 أحرف على الأقل").max(100),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل").optional(),
  roles: z.array(z.string()).min(1, "يجب اختيار دور واحد على الأقل"),
});
export type UserFormData = z.infer<typeof userFormSchema>;
export interface CreateUserRequest {
  username: string;
  password?: string;
  roles: string[];
}
export interface UpdateUserRequest {
  username: string;
  roles: string[];
}
```

## File: src/features/auth/api/AuthApi.ts
```typescript
import { apiClient } from '@/lib/axios';
import { IAuthRepository, AuthResponse, RefreshTokenRequest } from '@/core/repositories/IAuthRepository';
import { LoginFormData } from '../schemas/loginSchema';
export class AuthRepository implements IAuthRepository {
  async login(data: LoginFormData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);
    return response.data;
  }
  async refreshToken(data: RefreshTokenRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/refresh', data);
    return response.data;
  }
  async revokeRefreshToken(data: RefreshTokenRequest): Promise<void> {
    await apiClient.post('/auth/revoke-refresh-token', data);
  }
}
export const authRepository = new AuthRepository();
```

## File: src/features/auth/components/HasPermission.tsx
```typescript
import React from 'react';
import { useAuth } from '../hooks/useAuth';
interface HasPermissionProps {
  permission: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
export function HasPermission({ permission, children, fallback = null }: HasPermissionProps) {
  const { hasPermission } = useAuth();
  if (hasPermission(permission)) {
    return <>{children}</>;
  }
  return <>{fallback}</>;
}
```

## File: src/features/auth/components/LoginForm.tsx
```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../schemas/loginSchema";
import { useLogin } from "../hooks/useAuth";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { tokens } from "@/shared/styles/tokens";
export function LoginForm() {
  const { mutate: login, isPending } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormData) => login(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
      {}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          اسم المستخدم
        </label>
        <input
          id="userName"
          type="text"
          {...register("userName")}
          placeholder="admin"
          autoComplete="username"
          className={tokens.input + " bg-gray-50 focus:bg-white transition-colors"}
          dir="ltr"
        />
        {errors.userName && (
          <p className="text-red-500 text-xs mt-1">{errors.userName.message}</p>
        )}
      </div>
      {}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          كلمة المرور
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="••••••••"
            autoComplete="current-password"
            className={tokens.input + " bg-gray-50 focus:bg-white transition-colors pl-10"}
            dir="ltr"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>
      {}
      <button
        type="submit"
        disabled={isPending}
        className={tokens.btn.primary + " w-full py-2.5 justify-center flex items-center gap-2 disabled:opacity-60 mt-2"}
      >
        {isPending ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            جاري تسجيل الدخول...
          </>
        ) : (
          "تسجيل الدخول"
        )}
      </button>
    </form>
  );
}
```

## File: src/features/auth/hooks/useAuth.tsx
```typescript
import { createContext, useContext, useState, ReactNode } from "react";
import { useMutation } from "@tanstack/react-query";
import { authRepository } from "../api/AuthApi";
import { LoginFormData } from "../schemas/loginSchema";
import { toast } from "sonner";
import { storage } from "@/lib/storage";
import { getApiErrorMessage } from "@/shared/utils/apiError";
interface AuthContextType {
  isAuthenticated: boolean;
  permissions: string[];
  roles: string[];
  logout: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
  hasAnyRole: (roles: string[]) => boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!storage.getToken());
  const [permissions, setPermissions] = useState<string[]>(
    isAuthenticated ? storage.getPermissions() : []
  );
  const [roles, setRoles] = useState<string[]>(
    isAuthenticated ? storage.getRoles() : []
  );
  const logout = async () => {
    try {
      const token = storage.getToken();
      const refreshToken = storage.getRefreshToken();
      if (token && refreshToken) {
        await authRepository.revokeRefreshToken({ token, refreshToken });
      }
    } catch (err) {
      console.error("Failed to revoke token on logout", err);
    } finally {
      storage.clearToken();
      storage.clearRefreshToken();
      storage.clearPermissions();
      storage.clearRoles();
      setIsAuthenticated(false);
      setPermissions([]);
      setRoles([]);
      window.location.href = '/login';
    }
  };
  const hasPermission = (permission: string) => {
    return permissions.includes(permission) || roles.includes("Admin");
  };
  const hasRole = (role: string) => {
    return roles.includes(role);
  };
  const hasAnyRole = (allowedRoles: string[]) => {
    return allowedRoles.some(r => roles.includes(r));
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, permissions, roles, logout, hasPermission, hasRole, hasAnyRole }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginFormData) => authRepository.login(data),
    onSuccess: (data) => {
      toast.success("تم تسجيل الدخول بنجاح!");
      storage.setToken(data.token);
      if (data.refreshToken) {
        storage.setRefreshToken(data.refreshToken);
      }
      const perms = data.permissions || [];
      const userRoles = data.role || [];
      storage.setPermissions(perms);
      storage.setRoles(userRoles);
      window.location.href = '/';
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, "فشل تسجيل الدخول. تأكد من البيانات."));
    },
  });
}
```

## File: src/features/auth/pages/LoginPage.tsx
```typescript
import { LoginForm } from "@/features/auth/components/LoginForm";
export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="w-full max-w-md">
        {}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg mb-4">
            <span className="text-white text-2xl font-bold">س</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">سنترالي</h1>
          <p className="text-gray-500 text-sm mt-1">
            نظام إدارة الأعمال الذكية
          </p>
        </div>
        {}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">مرحباً بك</h2>
            <p className="text-sm text-gray-500 mt-1">
              قم بتسجيل الدخول للوصول إلى لوحة التحكم
            </p>
          </div>
          <LoginForm />
        </div>
        {}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} سنترالي — جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
}
```

## File: src/features/auth/schemas/loginSchema.ts
```typescript
import * as z from "zod";
export const loginSchema = z.object({
  userName: z.string().min(1, "اسم المستخدم مطلوب"),
  password: z.string().min(1, "كلمة المرور مطلوبة"),
});
export type LoginFormData = z.infer<typeof loginSchema>;
```

## File: src/features/auth/schemas/permissions.ts
```typescript
export const Permissions = {
  InventoryRead: 'inventory:read',
  InventoryWrite: 'inventory:write',
  MaintenanceRead: 'maintenance:read',
  MaintenanceWrite: 'maintenance:write',
  SalesRead: 'sales:read',
  SalesWrite: 'sales:write',
  PurchasesRead: 'purchases:read',
  PurchasesWrite: 'purchases:write',
  SuppliersRead: 'suppliers:read',
  SuppliersWrite: 'suppliers:write',
  CustomersRead: 'customers:read',
  CustomersWrite: 'customers:write',
  FinanceRead: 'finance:read',
  FinanceWrite: 'finance:write',
  WalletsRead: 'wallets:read',
  WalletsWrite: 'wallets:write',
  UsersRead: 'users:read',
  UsersWrite: 'users:write',
  RolesRead: 'roles:read',
  RolesWrite: 'roles:write',
  Admin: 'admin',
} as const;
export type Permission = (typeof Permissions)[keyof typeof Permissions];
```

## File: src/features/contacts/api/ContactsApi.ts
```typescript
import { apiClient } from "@/lib/axios";
import { IContactsRepository } from "@/core/repositories/IContactsRepository";
import { PaginatedList } from "@/shared/types/pagination";
import {
  CreateCustomerRequest, CustomerResponse, CustomerStatementResponse,
  CreatePaymentRequest,
  ContactFilters
} from "../schemas/contactSchemas";
import { CustomerDebtHistoryResponse } from '../schemas/contactSchemas';
export class ContactsRepository implements IContactsRepository {
  async getCustomers(filters: ContactFilters): Promise<PaginatedList<CustomerResponse>> {
    const { data } = await apiClient.get<PaginatedList<CustomerResponse>>('/customers', { params: filters });
    return data;
  }
  async getCustomer(id: string): Promise<CustomerResponse> {
    const { data } = await apiClient.get<CustomerResponse>(`/customers/${id}`);
    return data;
  }
  async getCustomerDebtHistory(id: string): Promise<CustomerDebtHistoryResponse> {
    const { data } = await apiClient.get<CustomerDebtHistoryResponse>(`/customers/${id}/debt-history`);
    return data;
  }
  async createCustomer(reqData: CreateCustomerRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/customers', reqData);
    return data;
  }
  async updateCustomer(id: string, reqData: CreateCustomerRequest): Promise<void> {
    await apiClient.put(`/customers/${id}`, reqData);
  }
  async deleteCustomer(id: string): Promise<void> {
    await apiClient.delete(`/customers/${id}`);
  }
  async getCustomerStatement(customerId: string): Promise<CustomerStatementResponse[]> {
    if (!customerId) throw new Error("customerId is required for statement");
    const { data } = await apiClient.get<CustomerStatementResponse[]>(`/customers/${customerId}/transactions/statement`);
    return data;
  }
  async addCustomerPayment(customerId: string, reqData: CreatePaymentRequest): Promise<string> {
    const { data } = await apiClient.post<string>(`/customers/${customerId}/transactions/payments`, reqData);
    return data;
  }
}
export const contactsRepository = new ContactsRepository();
```

## File: src/features/contacts/components/CustomerForm.tsx
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createCustomerSchema, CreateCustomerRequest, CustomerResponse } from '../schemas/contactSchemas';
import { tokens } from '@/shared/styles/tokens';
import { useEffect } from 'react';
interface CustomerFormProps {
  initialData?: CustomerResponse;
  onSubmit: (data: CreateCustomerRequest) => void;
}
export function CustomerForm({ initialData, onSubmit }: CustomerFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCustomerRequest>({
    resolver: zodResolver(createCustomerSchema),
    defaultValues: {
      name: '',
      phone: '',
    },
  });
  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        phone: initialData.phone || '',
      });
    } else {
      reset({
        name: '',
        phone: '',
      });
    }
  }, [initialData, reset]);
  return (
    <form id="customer-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className={tokens.font.label + " mb-2 block"}>اسم العميل <span className="text-red-500">*</span></label>
        <input
          type="text"
          {...register('name')}
          className={tokens.input}
          placeholder="مثال: أحمد محمد"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className={tokens.font.label + " mb-2 block"}>رقم الهاتف</label>
        <input
          type="text"
          {...register('phone')}
          className={tokens.input}
          placeholder="مثال: 010xxxxxxxx"
          dir="ltr"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>
    </form>
  );
}
```

## File: src/features/contacts/components/CustomersFilters.tsx
```typescript
import { SearchIcon, PlusIcon } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useState, useEffect } from 'react';
interface CustomersFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onAddClick: () => void;
}
export function CustomersFilters({ searchTerm, onSearchChange, onAddClick }: CustomersFiltersProps) {
  const [localSearch, setLocalSearch] = useState(searchTerm);
  const debouncedSearch = useDebounce(localSearch, 300);
  useEffect(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch, onSearchChange]);
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative w-full sm:w-96">
        <input
          type="text"
          placeholder="ابحث عن عميل بالاسم أو رقم الهاتف..."
          className={tokens.input + ' pl-10'}
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
        <SearchIcon size={18} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
      </div>
      <button onClick={onAddClick} className={tokens.btn.primary + ' w-full sm:w-auto shrink-0 flex items-center justify-center gap-2'}>
        <PlusIcon size={18} />
        إضافة عميل
      </button>
    </div>
  );
}
```

## File: src/features/contacts/components/CustomersTable.tsx
```typescript
import { CustomerResponse } from '../schemas/contactSchemas';
import { PaginatedList } from '@/shared/types/pagination';
import { DataTable } from '@/shared/components/ui/DataTable';
import { formatCurrency } from '@/shared/utils/currency';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { HasPermission } from '@/features/auth/components/HasPermission';
import { Permissions } from '@/features/auth/schemas/permissions';
interface CustomersTableProps {
  data?: PaginatedList<CustomerResponse>;
  isLoading: boolean;
  pageIndex: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onEdit: (customer: CustomerResponse) => void;
  onDelete: (customer: CustomerResponse) => void;
  onRowClick: (customer: CustomerResponse) => void;
}
export function CustomersTable({
  data,
  isLoading,
  pageIndex,
  onNextPage,
  onPrevPage,
  onEdit,
  onDelete,
  onRowClick
}: CustomersTableProps) {
  const columns = [
    {
      header: 'Ø§Ø³Ù… Ø§Ù„Ø¹Ù…ÙŠÙ„',
      cell: (row: CustomerResponse) => (
        <span className="font-bold text-gray-800">{row.name}</span>
      ),
    },
    {
      header: 'Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ',
      cell: (row: CustomerResponse) => row.phone || <span className="text-gray-400">-</span>,
    },
    {
      header: 'Ø§Ù„Ù…Ø¯ÙŠÙˆÙ†ÙŠØ© (Ø§Ù„Ø±ØµÙŠØ¯)',
      cell: (row: CustomerResponse) => {
        const balance = row.debtBalance || 0;
        if (balance === 0) return <span className="text-gray-500 font-medium">0 Ø¬.Ù…</span>;
        if (balance > 0) return <span className="text-red-600 font-bold" dir="ltr">{formatCurrency(balance)}</span>;
        return <span className="text-green-600 font-bold" dir="ltr">{formatCurrency(Math.abs(balance))} (Ù…Ù‚Ø¯Ù…)</span>;
      },
    },
    {
      header: 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ø¶Ø§ÙØ©',
      cell: (row: CustomerResponse) => new Date(row.createdAt).toLocaleDateString('ar-EG'),
    },
    {
      header: 'Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª',
      cell: (row: CustomerResponse) => (
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => onRowClick(row)}
            className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
            title="ÙƒØ´Ù Ø­Ø³Ø§Ø¨ / Ø§Ù„ØªÙØ§ØµÙŠÙ„"
            aria-label="ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø¹Ù…ÙŠÙ„"
          >
            <Eye size={18} />
          </button>
          <HasPermission permission={Permissions.CustomersWrite}>
            <button
              type="button"
              onClick={() => onEdit(row)}
              className="p-1.5 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
              title="ØªØ¹Ø¯ÙŠÙ„"
              aria-label="ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ø¹Ù…ÙŠÙ„"
            >
              <Edit2 size={18} />
            </button>
            <button
              type="button"
              onClick={() => onDelete(row)}
              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="Ø­Ø°Ù"
              aria-label="Ø­Ø°Ù Ø§Ù„Ø¹Ù…ÙŠÙ„"
            >
              <Trash2 size={18} />
            </button>
          </HasPermission>
        </div>
      ),
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={data?.items || []}
      isLoading={isLoading}
      pageIndex={pageIndex}
      totalPages={data?.totalPages || 1}
      totalCount={data?.totalCount || 0}
      pageSize={data?.pageSize || 10}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onRowClick={onRowClick}
    />
  );
}
```

## File: src/features/contacts/hooks/useContacts.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { contactsRepository } from "../api/ContactsApi";
import {
  CreateCustomerRequest, CreatePaymentRequest,
  ContactFilters, StatementFilters
} from "../schemas/contactSchemas";
import { toast } from "sonner";
export const CONTACT_KEYS = {
  customers: (filters: ContactFilters) => ["customers", filters] as const,
  customerDetails: (id: string) => ["customers", id] as const,
  customerStatement: (filters: StatementFilters) => ["customers", "statement", filters] as const,
};
export function useCustomers(filters: ContactFilters) {
  return useQuery({
    queryKey: CONTACT_KEYS.customers(filters),
    queryFn: () => contactsRepository.getCustomers(filters),
  });
}
export function useCustomer(id: string) {
  return useQuery({
    queryKey: CONTACT_KEYS.customerDetails(id),
    queryFn: () => contactsRepository.getCustomer(id),
    enabled: !!id,
  });
}
export function useCustomerStatement(customerId: string) {
  return useQuery({
    queryKey: ['customers', 'statement', customerId],
    queryFn: () => contactsRepository.getCustomerStatement(customerId),
    enabled: !!customerId,
  });
}
export function useCreateCustomer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateCustomerRequest) => contactsRepository.createCustomer(data),
    onSuccess: () => {
      toast.success("تم إضافة العميل بنجاح");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
    onError: () => toast.error("حدث خطأ أثناء إضافة العميل"),
  });
}
export function useUpdateCustomer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreateCustomerRequest }) =>
      contactsRepository.updateCustomer(id, data),
    onSuccess: (_, { id }) => {
      toast.success("تم تحديث بيانات العميل بنجاح");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      queryClient.invalidateQueries({ queryKey: CONTACT_KEYS.customerDetails(id) });
    },
    onError: () => toast.error("حدث خطأ أثناء تحديث العميل"),
  });
}
export function useDeleteCustomer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => contactsRepository.deleteCustomer(id),
    onSuccess: () => {
      toast.success("تم حذف العميل بنجاح");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
    onError: () => toast.error("حدث خطأ أثناء حذف العميل، قد يكون مرتبطاً بفواتير"),
  });
}
export function useAddCustomerPayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreatePaymentRequest }) =>
      contactsRepository.addCustomerPayment(id, data),
    onSuccess: (_, { id }) => {
      toast.success("تم تسجيل الدفعة بنجاح");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      queryClient.invalidateQueries({ queryKey: CONTACT_KEYS.customerDetails(id) });
    },
    onError: () => toast.error("حدث خطأ أثناء تسجيل الدفعة"),
  });
}
```

## File: src/features/contacts/pages/CustomerDetailsPage.tsx
```typescript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomer, useCustomerStatement, useAddCustomerPayment } from '../hooks/useContacts';
import { formatCurrency } from '@/shared/utils/currency';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { DataTable } from '@/shared/components/ui/DataTable';
import { InvoiceDetailsModal } from '@/features/sales/components/InvoiceDetailsModal';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
import { ArrowDownLeft, ArrowUpRight, Wallet, ReceiptText, Calendar } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { toast } from 'sonner';
import { CustomerStatementResponse } from '../schemas/contactSchemas';
export function CustomerDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { setTitle, setBackButton } = useHeaderStore();
  const [pageIndex, setPageIndex] = useState(1);
  const [isPaymentDrawerOpen, setIsPaymentDrawerOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentNotes, setPaymentNotes] = useState('');
  const [filterType, setFilterType] = useState('الكل');
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);
  const [isRefund, setIsRefund] = useState(false);
  const { data: customer, isLoading: isLoadingCustomer } = useCustomer(id!);
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(7); // GlobalTransactionCategory.CustomerPayment
  const { data: statementData, isLoading: isLoadingStatement } = useCustomerStatement(id!);
  const addPayment = useAddCustomerPayment();
  // Client-side pagination and filtering for statement array
  const rawStatementArray = statementData || [];
  const statementArray = rawStatementArray.filter(item => {
    if (filterType === 'الكل') return true;
    if (filterType === 'فاتورة') return item.transactionType === 'Invoice' || item.transactionType === 'فاتورة';
    if (filterType === 'مرتجع') return item.transactionType === 'Return' || item.transactionType === 'مرتجع';
    if (filterType === 'سداد مديونية') return item.transactionType === 'Payment' || item.transactionType === 'دفعة';
    return true;
  });
  const pageSize = 10;
  const totalCount = statementArray.length;
  const totalPages = Math.ceil(totalCount / pageSize) || 1;
  const paginatedStatement = statementArray.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
  useEffect(() => {
    if (customer) {
      setTitle(`كشف حساب: ${customer.name}`);
      setBackButton(true, '/contacts/customers');
    }
  }, [customer, setTitle, setBackButton]);
  if (isLoadingCustomer) {
    return <div className="p-8 text-center text-gray-500">جاري تحميل بيانات العميل...</div>;
  }
  if (!customer) {
    return <div className="p-8 text-center text-red-500">العميل غير موجود.</div>;
  }
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = Number(paymentAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      toast.error('المبلغ غير صحيح');
      return;
    }
    const source = await promptPaymentSource(isRefund ? 8 : 7);
    if (!source) return;
    const finalAmount = isRefund ? -Math.abs(parsedAmount) : Math.abs(parsedAmount);
    addPayment.mutate(
      { id: id!, data: { amount: finalAmount, notes: paymentNotes, paymentSource: source } },
      {
        onSuccess: () => {
          setIsPaymentDrawerOpen(false);
          setPaymentAmount('');
          setPaymentNotes('');
        }
      }
    );
  };
  const columns = [
    {
      header: 'التاريخ',
      cell: (row: CustomerStatementResponse) => (
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={16} />
          {new Date(row.date).toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      ),
    },
    {
      header: 'نوع العملية',
      cell: (row: CustomerStatementResponse) => {
        const isInvoice = row.transactionType.includes('Invoice') || row.transactionType === 'فاتورة';
        const isPayment = row.transactionType.includes('Payment') || row.transactionType === 'دفعة';
        const isReturn = row.transactionType.includes('Return') || row.transactionType === 'مرتجع';
        if (isInvoice) return (
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 cursor-pointer hover:bg-orange-200 transition-colors">
            فاتورة مبيعات
            <ReceiptText size={12} className="opacity-70" />
          </span>
        );
        if (isPayment) return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">سداد مديونية</span>;
        if (isReturn) return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">مرتجع مبيعات</span>;
        return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">{row.transactionType}</span>;
      },
    },
    {
      header: 'البيان',
      cell: (row: CustomerStatementResponse) => (
        <span className="text-gray-600 max-w-[200px] truncate block" title={row.notes || '-'}>
          {row.notes || '-'}
        </span>
      ),
    },
    {
      header: 'مدين (عليه)',
      cell: (row: CustomerStatementResponse) => row.debit > 0 ? (
        <span className="text-red-600 font-bold flex items-center gap-1" dir="ltr">
          <ArrowUpRight size={16} /> {formatCurrency(row.debit)}
        </span>
      ) : <span className="text-gray-400">-</span>,
    },
    {
      header: 'دائن (له)',
      cell: (row: CustomerStatementResponse) => row.credit > 0 ? (
        <span className="text-green-600 font-bold flex items-center gap-1" dir="ltr">
          <ArrowDownLeft size={16} /> {formatCurrency(row.credit)}
        </span>
      ) : <span className="text-gray-400">-</span>,
    },
    {
      header: 'الرصيد بعد العملية',
      cell: (row: CustomerStatementResponse) => {
        if (row.balanceAfter === 0) return <span className="text-gray-500 font-bold">0 ج.م</span>;
        if (row.balanceAfter > 0) return <span className="text-red-600 font-bold" dir="ltr">{formatCurrency(row.balanceAfter)}</span>;
        return <span className="text-green-600 font-bold" dir="ltr">{formatCurrency(Math.abs(row.balanceAfter))} (مقدم)</span>;
      },
    }
  ];
  const currentBalance = customer.debtBalance || 0;
  return (
    <div className="space-y-6">
      {}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{customer.name}</h2>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            {customer.phone && <p>الهاتف: <span className="font-semibold">{customer.phone}</span></p>}
          </div>
        </div>
        <div className="flex items-center gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">الرصيد الحالي</p>
            <div className="text-2xl font-bold" dir="ltr">
              {currentBalance === 0 ? (
                <span className="text-gray-600">0.00 ج.م</span>
              ) : currentBalance > 0 ? (
                <span className="text-red-600">عليه {formatCurrency(currentBalance)}</span>
              ) : (
                <span className="text-green-600">له {formatCurrency(Math.abs(currentBalance))}</span>
              )}
            </div>
          </div>
          <button
            onClick={() => setIsPaymentDrawerOpen(true)}
            className="flex items-center gap-2 bg-[#0f8e4c] hover:bg-[#0c7a40] text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-500/20"
          >
            <Wallet size={20} />
            تسديد دفعة
          </button>
        </div>
      </div>
      {}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <ReceiptText className="text-gray-500" />
            حركة الحساب (كشف الحساب)
          </h3>
          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setPageIndex(1);
            }}
            className={tokens.select}
          >
            <option value="الكل">جميع العمليات</option>
            <option value="فاتورة">فاتورة مبيعات</option>
            <option value="مرتجع">مرتجع مبيعات</option>
            <option value="سداد مديونية">سداد مديونية</option>
          </select>
        </div>
        <div className="p-5">
          <DataTable
            columns={columns}
            data={paginatedStatement}
            isLoading={isLoadingStatement}
            pageIndex={pageIndex}
            totalPages={totalPages}
            totalCount={totalCount}
            pageSize={pageSize}
            onNextPage={() => setPageIndex(p => Math.min(p + 1, totalPages))}
            onPrevPage={() => setPageIndex(p => Math.max(p - 1, 1))}
            onRowClick={(row) => {
              if (row.transactionType === 'Invoice' || row.transactionType === 'فاتورة') {
                setSelectedInvoiceId(row.transactionId);
              }
            }}
          />
        </div>
      </div>
      <InvoiceDetailsModal
        isOpen={!!selectedInvoiceId}
        onClose={() => setSelectedInvoiceId(null)}
        invoiceId={selectedInvoiceId}
      />
      {}
      <RightDrawer
        isOpen={isPaymentDrawerOpen}
        onClose={() => setIsPaymentDrawerOpen(false)}
        title="استلام دفعة من العميل"
        footer={
          <>
            <button type="button" onClick={() => setIsPaymentDrawerOpen(false)} className={tokens.btn.secondary}>
              إلغاء
            </button>
            <button
              type="submit"
              form="payment-form"
              disabled={addPayment.isPending}
              className="bg-[#0f8e4c] hover:bg-[#0c7a40] text-white px-6 py-2.5 rounded-lg font-bold transition-colors disabled:opacity-60 shadow-md"
            >
              {addPayment.isPending ? 'جاري الحفظ...' : 'حفظ واستلام'}
            </button>
          </>
        }
      >
        <form id="payment-form" onSubmit={handlePaymentSubmit} className="space-y-6">
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              type="button"
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${!isRefund ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}
              onClick={() => setIsRefund(false)}
            >
              تحصيل (سداد مديونية)
            </button>
            <button
              type="button"
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors ${isRefund ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}
              onClick={() => setIsRefund(true)}
            >
              رد أموال للعميل
            </button>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
            <p className="text-sm font-semibold text-orange-800 mb-1">المديونية الحالية</p>
            <p className="text-2xl font-bold text-orange-900" dir="ltr">{formatCurrency(currentBalance)}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              المبلغ المستلم <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className={tokens.input + ' pl-12 py-3 text-lg font-bold text-left'}
                placeholder="0.00"
                required
                dir="ltr"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">ج.م</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              البيان / ملاحظات
            </label>
            <textarea
              value={paymentNotes}
              onChange={(e) => setPaymentNotes(e.target.value)}
              className={tokens.input + ' py-3'}
              rows={3}
              placeholder="مثال: دفعة نقدية من الحساب"
            />
          </div>
        </form>
      </RightDrawer>
      <PaymentSourcePromptModal />
    </div>
  );
}
```

## File: src/features/contacts/pages/CustomersPage.tsx
```typescript
import { useState } from 'react';
import { useCustomers, useCreateCustomer, useUpdateCustomer, useDeleteCustomer } from '../hooks/useContacts';
import { CustomerResponse, CreateCustomerRequest } from '../schemas/contactSchemas';
import { CustomersFilters } from '../components/CustomersFilters';
import { CustomersTable } from '../components/CustomersTable';
import { CustomerForm } from '../components/CustomerForm';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { ConfirmModal } from '@/shared/components/ui/ConfirmModal';
import { tokens } from '@/shared/styles/tokens';
import { useNavigate } from 'react-router-dom';
export function CustomersPage() {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [customerToEdit, setCustomerToEdit] = useState<CustomerResponse | undefined>(undefined);
  const [customerToDelete, setCustomerToDelete] = useState<CustomerResponse | null>(null);
  const { data, isLoading } = useCustomers({
    pageNumber: pageIndex,
    pageSize: 10,
    searchValue: searchTerm || undefined,
  });
  const createCustomer = useCreateCustomer();
  const updateCustomer = useUpdateCustomer();
  const deleteCustomer = useDeleteCustomer();
  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setPageIndex(1);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setCustomerToEdit(undefined);
  };
  const isSubmitting = createCustomer.isPending || updateCustomer.isPending;
  const handleFormSubmit = (formData: CreateCustomerRequest) => {
    if (customerToEdit) {
      updateCustomer.mutate({ id: customerToEdit.customerId, data: formData }, { onSuccess: closeDrawer });
    } else {
      createCustomer.mutate(formData, { onSuccess: closeDrawer });
    }
  };
  const drawerFooter = (
    <>
      <button type="button" onClick={closeDrawer} className={tokens.btn.secondary}>
        إلغاء
      </button>
      <button
        type="submit"
        form="customer-form"
        disabled={isSubmitting}
        className={tokens.btn.primary + " disabled:opacity-60"}
      >
        {isSubmitting ? 'جاري الحفظ...' : (customerToEdit ? 'حفظ التعديلات' : 'إضافة العميل')}
      </button>
    </>
  );
  return (
    <div className="space-y-4">
      <CustomersFilters
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onAddClick={() => {
          setCustomerToEdit(undefined);
          setIsDrawerOpen(true);
        }}
      />
      <CustomersTable
        data={data}
        isLoading={isLoading}
        pageIndex={pageIndex}
        onNextPage={() => setPageIndex((p) => p + 1)}
        onPrevPage={() => setPageIndex((p) => p - 1)}
        onEdit={(customer) => {
          setCustomerToEdit(customer);
          setIsDrawerOpen(true);
        }}
        onDelete={(customer) => setCustomerToDelete(customer)}
        onRowClick={(customer) => navigate(`/contacts/customers/${customer.customerId}`)}
      />
      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title={customerToEdit ? "تعديل بيانات العميل" : "إضافة عميل جديد"}
        footer={drawerFooter}
      >
        <CustomerForm
          initialData={customerToEdit}
          onSubmit={handleFormSubmit}
        />
      </RightDrawer>
      <ConfirmModal
        isOpen={!!customerToDelete}
        title="تأكيد حذف العميل"
        message={
          customerToDelete
            ? `هل أنت متأكد من حذف العميل "${customerToDelete.name}"؟ لا يمكن التراجع عن هذا الإجراء وسيتم حذف جميع بياناته.`
            : ''
        }
        confirmText={deleteCustomer.isPending ? 'جاري الحذف...' : 'نعم، احذف'}
        cancelText="إلغاء"
        onConfirm={() => {
          if (customerToDelete) {
            deleteCustomer.mutate(customerToDelete.customerId, {
              onSuccess: () => setCustomerToDelete(null)
            });
          }
        }}
        onClose={() => setCustomerToDelete(null)}
        type="danger"
      />
    </div>
  );
}
```

## File: src/features/contacts/schemas/contactSchemas.ts
```typescript
import * as z from "zod";
import { BaseFilters } from "@/shared/types/pagination";
export interface ContactFilters extends BaseFilters {
  searchValue?: string;
}
export interface StatementFilters extends BaseFilters {
  startDate?: string;
  endDate?: string;
  customerId?: string;
}
export const createCustomerSchema = z.object({
  name: z.string().min(1, "اسم العميل مطلوب"),
  phone: z.string().optional(),
});
export type CreateCustomerRequest = z.infer<typeof createCustomerSchema>;
export interface CustomerResponse {
  customerId: string;
  name: string;
  phone?: string;
  debtBalance: number;
  invoicesCount: number;
  createdAt: string;
}
export interface CustomerStatementResponse {
  date: string;
  transactionType: string;
  transactionId: string;
  debit: number;
  credit: number;
  balanceAfter: number;
  notes?: string;
}
export const createPaymentSchema = z.object({
  amount: z.number().refine(val => val !== 0, "المبلغ يجب ألا يكون صفراً"),
  notes: z.string().optional(),
  paymentSource: z.number().optional(),
});
export type CreatePaymentRequest = z.infer<typeof createPaymentSchema>;
export interface CustomerInvoiceSummary {
  id: string;
  invoiceNumber: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  createdAt: string;
}
export interface CustomerDebtPaymentResponse {
  id: string;
  amount: number;
  createdAt: string;
  notes?: string;
}
export interface CustomerDebtHistoryResponse {
  customer: CustomerResponse;
  deferredInvoices: CustomerInvoiceSummary[];
  payments: CustomerDebtPaymentResponse[];
}
```

## File: src/features/dashboard/pages/DashboardPage.tsx
```typescript
export function DashboardPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h1 className="text-2xl font-bold text-gray-800">DashboardPage</h1>
      <p className="text-gray-500 mt-2">هذه الصفحة قيد الإنشاء...</p>
    </div>
  );
}
```

## File: src/features/finance/api/FinanceApi.ts
```typescript
import { apiClient } from "@/lib/axios";
import { IFinanceRepository } from "@/core/repositories/IFinanceRepository";
import { PaginatedList } from "@/shared/types/pagination";
import {
  OpenSessionRequest, DrawerSessionResponse, AddManualTransactionRequest,
  CreateSafeRequest, SafeResponse, SafeTransactionResponse, ReceiveDrawerDepositRequest, AddManualSafeTransactionRequest,
  CreateExpenseCategoryRequest, ExpenseCategoryResponse,
  CreateExpenseRequest, ExpenseResponse,
  FinanceFilters
} from "../schemas/financeSchemas";
export class FinanceRepository implements IFinanceRepository {
  async getCurrentDrawerSession(type: number = 1): Promise<DrawerSessionResponse> {
    const { data } = await apiClient.get<DrawerSessionResponse>('/drawers/active', { params: { type } });
    return data;
  }
  async openDrawerSession(reqData: OpenSessionRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/drawers/open', reqData);
    return data;
  }
  async closeDrawerSession(type: number = 1): Promise<void> {
    await apiClient.post('/drawers/close', null, { params: { type } });
  }
  async addDrawerTransaction(reqData: AddManualTransactionRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/drawers/transactions/manual', reqData);
    return data;
  }
  async getDrawerHistory(filters: FinanceFilters): Promise<PaginatedList<DrawerSessionResponse>> {
    const { data } = await apiClient.get<PaginatedList<DrawerSessionResponse>>('/drawers/history', { params: filters });
    return data;
  }
  async getDrawerSessionById(id: string): Promise<DrawerSessionResponse> {
    const { data } = await apiClient.get<DrawerSessionResponse>(`/drawers/history/${id}`);
    return data;
  }
  async getSafes(): Promise<SafeResponse[]> {
    const { data } = await apiClient.get<SafeResponse[]>('/Safe');
    return data;
  }
  async createSafe(reqData: CreateSafeRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/Safe', reqData);
    return data;
  }
  async depositFromDrawer(safeId: string, reqData: ReceiveDrawerDepositRequest): Promise<SafeTransactionResponse> {
    const { data } = await apiClient.post<SafeTransactionResponse>(`/Safe/${safeId}/deposit`, reqData);
    return data;
  }
  async addManualSafeTransaction(safeId: string, reqData: AddManualSafeTransactionRequest): Promise<SafeTransactionResponse> {
    const { data } = await apiClient.post<SafeTransactionResponse>(`/Safe/${safeId}/manual-transaction`, null, {
      params: reqData
    });
    return data;
  }
  async getSafeTransactions(safeId: string, filters?: FinanceFilters): Promise<SafeTransactionResponse[]> {
    const { data } = await apiClient.get<SafeTransactionResponse[]>(`/Safe/${safeId}/transactions`, { params: filters });
    return data;
  }
  async getExpenseCategories(): Promise<ExpenseCategoryResponse[]> {
    const { data } = await apiClient.get<ExpenseCategoryResponse[]>('/expenses/categories');
    return data;
  }
  async createExpenseCategory(reqData: CreateExpenseCategoryRequest): Promise<ExpenseCategoryResponse> {
    const { data } = await apiClient.post<ExpenseCategoryResponse>('/expenses/categories', reqData);
    return data;
  }
  async getExpenses(filters?: FinanceFilters): Promise<ExpenseResponse[]> {
    const { data } = await apiClient.get<ExpenseResponse[]>('/expenses', { params: filters });
    return data;
  }
  async recordExpense(reqData: CreateExpenseRequest): Promise<ExpenseResponse> {
    const { data } = await apiClient.post<ExpenseResponse>('/expenses', reqData);
    return data;
  }
}
export const financeRepository = new FinanceRepository();
```

## File: src/features/finance/api/FinancePolicyApi.ts
```typescript
import { apiClient } from "@/lib/axios";
import { GlobalTransactionCategory, PaymentSourcePolicy } from "../schemas/financeSchemas";
export interface TransactionPolicyResponse {
  id: string;
  category: string;
  allowedSource: string;
}
export interface UpdateTransactionPolicyRequest {
  allowedSource: PaymentSourcePolicy;
}
export class FinancePolicyRepository {
  async getPolicies(): Promise<TransactionPolicyResponse[]> {
    const { data } = await apiClient.get<TransactionPolicyResponse[]>('/finance-policies');
    return data;
  }
  async updatePolicy(category: GlobalTransactionCategory, reqData: UpdateTransactionPolicyRequest): Promise<TransactionPolicyResponse> {
    const { data } = await apiClient.put<TransactionPolicyResponse>(`/finance-policies/${category}`, reqData);
    return data;
  }
}
export const financePolicyRepository = new FinancePolicyRepository();
```

## File: src/features/finance/api/OwnerTransactionApi.ts
```typescript
import { apiClient } from "@/lib/axios";
import { CreateOwnerTransactionRequest, OwnerTransactionResponse } from "../schemas/financeSchemas";
export class OwnerTransactionApi {
  async getOwnerTransactions(): Promise<OwnerTransactionResponse[]> {
    const { data } = await apiClient.get<OwnerTransactionResponse[]>('/ownerTransactions');
    return data;
  }
  async createOwnerTransaction(reqData: CreateOwnerTransactionRequest): Promise<OwnerTransactionResponse> {
    const { data } = await apiClient.post<OwnerTransactionResponse>('/ownerTransactions', reqData);
    return data;
  }
}
export const ownerTransactionApi = new OwnerTransactionApi();
```

## File: src/features/finance/api/WalletApi.ts
```typescript

```

## File: src/features/finance/components/CloseDrawerModal.tsx
```typescript
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { DrawerSessionResponse } from '../schemas/financeSchemas';
import { useCloseDrawer } from '../hooks/useFinance';
import { formatCurrency } from '@/shared/utils/currency';
import { tokens } from '@/shared/styles/tokens';
import { AlertTriangle } from 'lucide-react';
interface CloseDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  session: DrawerSessionResponse;
}
export function CloseDrawerModal({ isOpen, onClose, session }: CloseDrawerModalProps) {
  const closeDrawer = useCloseDrawer();
  const handleClose = () => {
    closeDrawer.mutate(session.type, {
      onSuccess: () => {
        onClose();
      }
    });
  };
  const runningIncome = session.transactions.filter(t => t.type === 1).reduce((acc, t) => acc + t.amount, 0);
  const runningExpense = session.transactions.filter(t => t.type === 2).reduce((acc, t) => acc + t.amount, 0);
  const currentBalance = session.openingBalance + runningIncome - runningExpense;
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="إغلاق الوردية">
      <div className="space-y-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-yellow-800">تأكيد إغلاق الوردية</h4>
            <p className="text-sm text-yellow-700 mt-1">
              هل أنت متأكد من رغبتك في إغلاق الوردية الحالية؟ لا يمكن التراجع عن هذه الخطوة، ويجب تسليم المبلغ الموضح أدناه إلى الخزينة.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 space-y-4">
          <div className="flex justify-between items-center text-gray-600">
            <span>الرصيد الافتتاحي (العهدة):</span>
            <span className="font-semibold" dir="ltr">{formatCurrency(session.openingBalance)}</span>
          </div>
          <div className="flex justify-between items-center text-green-600">
            <span>إجمالي الداخل (مبيعات، إيداعات):</span>
            <span className="font-semibold" dir="ltr">+{formatCurrency(runningIncome)}</span>
          </div>
          <div className="flex justify-between items-center text-red-600">
            <span>إجمالي الخارج (مشتريات، مسحوبات):</span>
            <span className="font-semibold" dir="ltr">-{formatCurrency(runningExpense)}</span>
          </div>
          <div className="pt-4 border-t border-gray-200 flex justify-between items-center text-lg font-bold text-gray-800">
            <span>الرصيد النهائي المطلوب تسليمه:</span>
            <span dir="ltr">{formatCurrency(currentBalance)}</span>
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-6">
          <button type="button" onClick={onClose} className={tokens.btn.ghost}>
            إلغاء
          </button>
          <button
            type="button"
            onClick={handleClose}
            disabled={closeDrawer.isPending}
            className={tokens.btn.primary + " bg-red-600 hover:bg-red-700 ring-red-500"}
          >
            {closeDrawer.isPending ? 'جاري الإغلاق...' : 'تأكيد وإغلاق الوردية'}
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
```

## File: src/features/finance/components/CreateExpenseModal.tsx
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { createExpenseSchema, CreateExpenseRequest } from '../schemas/financeSchemas';
import { useRecordExpense, useExpenseCategories } from '../hooks/useFinance';
import { usePaymentSourcePrompt } from '../hooks/usePaymentSourcePrompt';
import { tokens } from '@/shared/styles/tokens';
interface CreateExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function CreateExpenseModal({ isOpen, onClose }: CreateExpenseModalProps) {
  const recordExpense = useRecordExpense();
  const { data: categories } = useExpenseCategories();
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(9);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateExpenseRequest>({
    resolver: zodResolver(createExpenseSchema),
    defaultValues: { categoryId: '', amount: 0, paymentSource: undefined, notes: '' }
  });
  const onSubmit = async (data: CreateExpenseRequest) => {
    const source = await promptPaymentSource();
    if (!source) return; // User closed the prompt
    data.paymentSource = source;
    recordExpense.mutate(data, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return (
    <>
      <PaymentSourcePromptModal />
      <BaseModal isOpen={isOpen} onClose={onClose} title="تسجيل مصروف جديد">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className={tokens.font.label + " block mb-1.5"}>بند المصروف</label>
            <select
              {...register('categoryId')}
              className={tokens.input}
            >
              <option value="">-- اختر البند --</option>
              {categories?.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            {errors.categoryId && <p className="text-red-500 text-xs mt-1">{String(errors.categoryId.message)}</p>}
          </div>
          <div>
            <label className={tokens.font.label + " block mb-1.5"}>المبلغ (ج.م)</label>
            <input
              type="number"
              step="0.01"
              {...register('amount', { valueAsNumber: true })}
              onFocus={(e) => e.target.value === '0' && (e.target.value = '')}
              className={tokens.input}
              placeholder="0.00"
            />
            {errors.amount && <p className="text-red-500 text-xs mt-1">{String(errors.amount.message)}</p>}
          </div>
          <div>
            <label className={tokens.font.label + " block mb-1.5"}>البيان / الملاحظات</label>
            <input
              type="text"
              {...register('notes')}
              className={tokens.input}
              placeholder="مثال: فاتورة كهرباء شهر أغسطس..."
            />
          </div>
          <div className="flex justify-end gap-3 pt-4 mt-2">
            <button type="button" onClick={onClose} className={tokens.btn.ghost}>
              إلغاء
            </button>
            <button
              type="submit"
              disabled={recordExpense.isPending}
              className={`${tokens.btn.primary} w-full`}
            >
              {recordExpense.isPending ? 'جاري الحفظ...' : 'حفظ المصروف'}
            </button>
          </div>
        </form>
      </BaseModal>
    </>
  );
}
```

## File: src/features/finance/components/DrawerTransactionsTable.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { DrawerTransactionResponse } from '../schemas/financeSchemas';
interface DrawerTransactionsTableProps {
  transactions: DrawerTransactionResponse[];
}
export function DrawerTransactionsTable({ transactions }: DrawerTransactionsTableProps) {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
        <p className="text-gray-500">لا توجد حركات مسجلة في هذه الوردية حتى الآن.</p>
      </div>
    );
  }
  const getCategoryLabel = (category: number) => {
    switch (category) {
      case 1: return 'مبيعات';
      case 2: return 'موردين';
      case 3: return 'صيانة';
      case 4: return 'مرتجعات';
      case 5: return 'تسديد مديونية عميل';
      case 6: return 'حركة يدوية';
      case 7: return 'واردات (مشتريات)';
      case 8: return 'إرجاع لمورد';
      case 10: return 'عملية محفظة';
      default: return 'أخرى';
    }
  };
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">الوقت</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">النوع</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">المبلغ</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">الرصيد بعد الحركة</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">المصدر / الملاحظات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactions.map((tx) => {
            const isIncome = tx.type === 1;
            return (
              <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-600" dir="ltr">
                  {formatDate(tx.createdAt)}
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                    isIncome ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {getCategoryLabel(tx.category)}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800" dir="ltr">
                  <span className={isIncome ? 'text-green-600' : 'text-red-600'}>
                    {isIncome ? '+' : '-'} {formatCurrency(tx.amount)}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800" dir="ltr">
                  {formatCurrency(tx.balance)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {tx.notes || tx.source || '-'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
```

## File: src/features/finance/components/ExpensesTable.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { ExpenseResponse } from '../schemas/financeSchemas';
interface ExpensesTableProps {
  expenses: ExpenseResponse[];
}
export function ExpensesTable({ expenses }: ExpensesTableProps) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
        <p className="text-gray-500">لا توجد مصروفات مسجلة حتى الآن.</p>
      </div>
    );
  }
  const getPaymentSourceLabel = (source: string | number) => {
    if (source === '1' || source === 1 || source === 'Drawer') return 'الدرج (الكاشير)';
    if (source === '2' || source === 2 || source === 'Safe') return 'الخزينة الرئيسية';
    return source;
  };
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">تاريخ المصروف</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">بند المصروف</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">المبلغ</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">مصدر الدفع</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">البيان / الملاحظات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-4 py-3 text-sm text-gray-600" dir="ltr">
                {formatDate(expense.expenseDate)}
              </td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {expense.categoryName}
              </td>
              <td className="px-4 py-3 font-bold text-red-600" dir="ltr">
                - {formatCurrency(expense.amount)}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                  {getPaymentSourceLabel(expense.paymentSource)}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {expense.notes || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## File: src/features/finance/components/ManualSafeTransactionModal.tsx
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { addManualSafeTransactionSchema, AddManualSafeTransactionRequest } from '../schemas/financeSchemas';
import { useAddManualSafeTransaction } from '../hooks/useFinance';
import { tokens } from '@/shared/styles/tokens';
interface ManualSafeTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  safeId: string;
}
export function ManualSafeTransactionModal({ isOpen, onClose, safeId }: ManualSafeTransactionModalProps) {
  const addTransaction = useAddManualSafeTransaction();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AddManualSafeTransactionRequest>({
    resolver: zodResolver(addManualSafeTransactionSchema),
    defaultValues: { type: 1, category: 6, amount: 0, notes: '' }
  });
  const transactionType = watch('type');
  const onSubmit = (data: AddManualSafeTransactionRequest) => {
    addTransaction.mutate({ safeId, data }, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Ø¥Ø¶Ø§ÙØ© Ù…Ø¹Ø§Ù…Ù„Ø© ÙŠØ¯ÙˆÙŠØ© Ù„Ù„Ø®Ø²ÙŠÙ†Ø©">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {}
        <div className="grid grid-cols-2 gap-3">
          <label
            onClick={() => { setValue('type', 1, { shouldValidate: true }); setValue('category', 6); }}
            className={`
            cursor-pointer rounded-xl border-2 p-4 text-center transition-all
            ${transactionType === 1 ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 hover:border-gray-300'}
          `}>
            <div className="font-semibold text-lg">Ø¥ÙŠØ¯Ø§Ø¹ Ù†Ù‚Ø¯ÙŠ</div>
          </label>
          <label
            onClick={() => { setValue('type', 2, { shouldValidate: true }); setValue('category', 7); }}
            className={`
            cursor-pointer rounded-xl border-2 p-4 text-center transition-all
            ${transactionType === 2 ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200 hover:border-gray-300'}
          `}>
            <div className="font-semibold text-lg">Ø³Ø­Ø¨ Ù†Ù‚Ø¯ÙŠ</div>
          </label>
        </div>
        <div>
          <label className={tokens.font.label + " block mb-1.5"}>Ø§Ù„Ù…Ø¨Ù„Øº (Ø¬.Ù…)</label>
          <input
            type="number"
            step="0.01"
            {...register('amount', { valueAsNumber: true })}
            onFocus={(e) => e.target.value === '0' && (e.target.value = '')}
            className={tokens.input}
            placeholder="0.00"
          />
          {errors.amount && <p className="text-red-500 text-xs mt-1">{String(errors.amount.message)}</p>}
        </div>
        <div>
          <label className={tokens.font.label + " block mb-1.5"}>Ø§Ù„Ø¨ÙŠØ§Ù† / Ø§Ù„Ø³Ø¨Ø¨</label>
          <input
            type="text"
            {...register('notes')}
            className={tokens.input}
            placeholder="Ù…Ø«Ø§Ù„: Ø¥ÙŠØ¯Ø§Ø¹ Ø¨Ù†ÙƒÙŠ..."
          />
        </div>
        <div className="flex justify-end gap-3 pt-4 mt-2">
          <button type="button" onClick={onClose} className={tokens.btn.ghost}>
            Ø¥Ù„ØºØ§Ø¡
          </button>
          <button
            type="submit"
            disabled={addTransaction.isPending}
            className={tokens.btn.primary}
          >
            {addTransaction.isPending ? 'Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø­ÙØ¸...' : 'Ø­ÙØ¸ Ø§Ù„Ù…Ø¹Ø§Ù…Ù„Ø©'}
          </button>
        </div>
      </form>
    </BaseModal>
  );
}
```

## File: src/features/finance/components/ManualTransactionModal.tsx
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { addManualTransactionSchema, AddManualTransactionRequest } from '../schemas/financeSchemas';
import { useAddDrawerTransaction } from '../hooks/useFinance';
import { tokens } from '@/shared/styles/tokens';
interface ManualTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ManualTransactionModal({ isOpen, onClose }: ManualTransactionModalProps) {
  const addTransaction = useAddDrawerTransaction();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AddManualTransactionRequest>({
    resolver: zodResolver(addManualTransactionSchema),
    defaultValues: { type: 1, category: 3, amount: 0, notes: '', source: '' }
  });
  const transactionType = watch('type');
  const onSubmit = (data: AddManualTransactionRequest) => {
    data.category = 6;
    addTransaction.mutate(data, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Ø¥Ø¶Ø§ÙØ© Ù…Ø¹Ø§Ù…Ù„Ø© ÙŠØ¯ÙˆÙŠØ© Ù„Ù„Ø¯Ø±Ø¬">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {}
        <div className="grid grid-cols-2 gap-3">
          <label
            onClick={() => { setValue('type', 1, { shouldValidate: true }); setValue('category', 3); }}
            className={`
            cursor-pointer rounded-xl border-2 p-4 text-center transition-all
            ${transactionType === 1 ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 hover:border-gray-300'}
          `}>
            <div className="font-semibold text-lg">Ø¥ÙŠØ¯Ø§Ø¹ Ù†Ù‚Ø¯ÙŠ</div>
            <div className="text-sm opacity-80 mt-1">Ø¥Ø¶Ø§ÙØ© ÙÙ„ÙˆØ³ Ù„Ù„Ø¯Ø±Ø¬</div>
          </label>
          <label
            onClick={() => { setValue('type', 2, { shouldValidate: true }); setValue('category', 4); }}
            className={`
            cursor-pointer rounded-xl border-2 p-4 text-center transition-all
            ${transactionType === 2 ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200 hover:border-gray-300'}
          `}>
            <div className="font-semibold text-lg">Ø³Ø­Ø¨ Ù†Ù‚Ø¯ÙŠ</div>
            <div className="text-sm opacity-80 mt-1">Ø£Ø®Ø° ÙÙ„ÙˆØ³ Ù…Ù† Ø§Ù„Ø¯Ø±Ø¬</div>
          </label>
        </div>
        <div>
          <label className={tokens.font.label + " block mb-1.5"}>Ø§Ù„Ù…Ø¨Ù„Øº (Ø¬.Ù…)</label>
          <input
            type="number"
            step="0.01"
            {...register('amount', { valueAsNumber: true })}
            onFocus={(e) => e.target.value === '0' && (e.target.value = '')}
            className={tokens.input}
            placeholder="0.00"
          />
          {errors.amount && <p className="text-red-500 text-xs mt-1">{String(errors.amount.message)}</p>}
        </div>
        <div>
          <label className={tokens.font.label + " block mb-1.5"}>Ø§Ù„Ø¨ÙŠØ§Ù† / Ø§Ù„Ø³Ø¨Ø¨</label>
          <input
            type="text"
            {...register('notes')}
            className={tokens.input}
            placeholder="Ù…Ø«Ø§Ù„: ÙÙƒØ© Ø¥Ø¶Ø§ÙÙŠØ©ØŒ Ø´Ø±Ø§Ø¡ Ø´Ø§ÙŠ..."
          />
        </div>
        <div className="flex justify-end gap-3 pt-4 mt-2">
          <button type="button" onClick={onClose} className={tokens.btn.ghost}>
            Ø¥Ù„ØºØ§Ø¡
          </button>
          <button
            type="submit"
            disabled={addTransaction.isPending}
            className={tokens.btn.primary}
          >
            {addTransaction.isPending ? 'Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø­ÙØ¸...' : 'Ø­ÙØ¸ Ø§Ù„Ù…Ø¹Ø§Ù…Ù„Ø©'}
          </button>
        </div>
      </form>
    </BaseModal>
  );
}
```

## File: src/features/finance/components/OpenDrawerForm.tsx
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { History, Wallet } from 'lucide-react';
import { openSessionSchema, OpenSessionRequest } from '../schemas/financeSchemas';
import { tokens } from '@/shared/styles/tokens';
import { useOpenDrawer } from '../hooks/useFinance';
export function OpenDrawerForm({ type = 1 }: { type?: number }) {
  const openDrawer = useOpenDrawer();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OpenSessionRequest>({
    resolver: zodResolver(openSessionSchema),
    defaultValues: { openingBalance: 0 }
  });
  const onSubmit = (data: OpenSessionRequest) => {
    openDrawer.mutate({ ...data, type });
  };
  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="flex justify-end mb-4">
        <Link
          to={type === 2 ? "/finance/drawer/history?type=2" : "/finance/drawer/history?type=1"}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100"
        >
          <History className="w-4 h-4" />
          تصفح سجل الورديات السابقة
        </Link>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-blue-50/50 p-8 text-center border-b border-blue-100/50">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-8 h-8 text-blue-600" />
          </div>
        <h2 className="text-2xl font-bold text-gray-800">فتح وردية جديدة</h2>
        <p className="text-gray-500 mt-2 text-sm">أدخل الرصيد الافتتاحي (الفكة أو العهدة) الموجودة في الدرج حالياً لبدء العمل.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
        <div>
          <label className={tokens.font.label + " block mb-2"}>
            الرصيد الافتتاحي
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              {...register('openingBalance', { valueAsNumber: true })}
              onFocus={(e) => e.target.value === '0' && (e.target.value = '')}
              className={tokens.input + " pl-12 text-lg font-semibold"}
              placeholder="0.00"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              ج.م
            </div>
          </div>
          {errors.openingBalance && (
            <p className="text-red-500 text-sm mt-1.5">{String(errors.openingBalance.message)}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={openDrawer.isPending}
          className={tokens.btn.primary + " w-full py-3 text-lg font-medium flex justify-center items-center gap-2"}
        >
          {openDrawer.isPending ? 'جاري الفتح...' : 'فتح الوردية'}
        </button>
      </form>
      </div>
    </div>
  );
}
```

## File: src/features/finance/components/ReceiveDrawerDepositModal.tsx
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { receiveDrawerDepositSchema, ReceiveDrawerDepositRequest } from '../schemas/financeSchemas';
import { useDepositFromDrawer } from '../hooks/useFinance';
import { tokens } from '@/shared/styles/tokens';
interface ReceiveDrawerDepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  safeId: string;
}
export function ReceiveDrawerDepositModal({ isOpen, onClose, safeId }: ReceiveDrawerDepositModalProps) {
  const receiveDeposit = useDepositFromDrawer();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReceiveDrawerDepositRequest>({
    resolver: zodResolver(receiveDrawerDepositSchema),
    defaultValues: { drawerSessionId: '', amount: 0, notes: '' }
  });
  const onSubmit = (data: ReceiveDrawerDepositRequest) => {
    receiveDeposit.mutate({ safeId, data }, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="إيداع من الكاشير">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className={tokens.font.label + " block mb-1.5"}>رقم وردية الكاشير</label>
          <input
            type="text"
            {...register('drawerSessionId')}
            className={tokens.input}
            placeholder="أدخل رقم الوردية..."
          />
          {errors.drawerSessionId && <p className="text-red-500 text-xs mt-1">{String(errors.drawerSessionId.message)}</p>}
        </div>
        <div>
          <label className={tokens.font.label + " block mb-1.5"}>المبلغ (ج.م)</label>
          <input
            type="number"
            step="0.01"
            {...register('amount', { valueAsNumber: true })}
            onFocus={(e) => e.target.value === '0' && (e.target.value = '')}
            className={tokens.input}
            placeholder="0.00"
          />
          {errors.amount && <p className="text-red-500 text-xs mt-1">{String(errors.amount.message)}</p>}
        </div>
        <div>
          <label className={tokens.font.label + " block mb-1.5"}>البيان / الملاحظات</label>
          <input
            type="text"
            {...register('notes')}
            className={tokens.input}
            placeholder="ملاحظات إضافية..."
          />
        </div>
        <div className="flex justify-end gap-3 pt-4 mt-2">
          <button type="button" onClick={onClose} className={tokens.btn.ghost}>
            إلغاء
          </button>
          <button
            type="submit"
            disabled={receiveDeposit.isPending}
            className={tokens.btn.primary}
          >
            {receiveDeposit.isPending ? 'جاري الحفظ...' : 'تأكيد الإيداع'}
          </button>
        </div>
      </form>
    </BaseModal>
  );
}
```

## File: src/features/finance/components/SafeTransactionsTable.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { SafeTransactionResponse } from '../schemas/financeSchemas';
interface SafeTransactionsTableProps {
  transactions: SafeTransactionResponse[];
}
export function SafeTransactionsTable({ transactions }: SafeTransactionsTableProps) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
        <p className="text-gray-500">Ù„Ø§ ØªÙˆØ¬Ø¯ Ø­Ø±ÙƒØ§Øª Ù…Ø³Ø¬Ù„Ø© ÙÙŠ Ù‡Ø°Ù‡ Ø§Ù„Ø®Ø²ÙŠÙ†Ø© Ø­ØªÙ‰ Ø§Ù„Ø¢Ù†.</p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">Ø§Ù„ÙˆÙ‚Øª</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">Ø§Ù„Ù†ÙˆØ¹</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">Ø§Ù„ØªØµÙ†ÙŠÙ</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">Ø§Ù„Ù…Ø¨Ù„Øº</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">Ø§Ù„Ø±ØµÙŠØ¯ Ø¨Ø¹Ø¯ Ø§Ù„Ø­Ø±ÙƒØ©</th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-600">Ø§Ù„Ù…Ù„Ø§Ø­Ø¸Ø§Øª</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactions.map((tx) => {
            const isIncome = tx.transactionType === 'Income' || tx.amount > 0;
            return (
              <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-600" dir="ltr">
                  {formatDate(tx.createdAt)}
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                    isIncome ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {tx.transactionType}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {tx.category}
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800" dir="ltr">
                  <span className={isIncome ? 'text-green-600' : 'text-red-600'}>
                    {isIncome ? '+' : '-'} {formatCurrency(Math.abs(tx.amount))}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800" dir="ltr">
                  {formatCurrency(tx.balanceAfter)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {tx.notes || '-'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
```

## File: src/features/finance/hooks/useFinance.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { financeRepository } from "../api/FinanceApi";
import {
  OpenSessionRequest, AddManualTransactionRequest, CreateSafeRequest,
  ReceiveDrawerDepositRequest, AddManualSafeTransactionRequest, CreateExpenseCategoryRequest, CreateExpenseRequest,
  FinanceFilters
} from "../schemas/financeSchemas";
import { toast } from "sonner";
export const FINANCE_KEYS = {
  activeDrawer: (type: number) => ["drawer", "active", type] as const,
  drawerHistory: (filters: FinanceFilters) => ["drawer", "history", filters] as const,
  drawerSessionById: (id: string) => ["drawer", "history", id] as const,
  safes: ["safes"] as const,
  safeTransactions: (safeId: string, filters: FinanceFilters) => ["safes", safeId, "transactions", filters] as const,
  expenseCategories: ["expenseCategories"] as const,
  expenses: (filters: FinanceFilters) => ["expenses", filters] as const,
};
export function useActiveDrawer(type: number = 1) {
  return useQuery({
    queryKey: FINANCE_KEYS.activeDrawer(type),
    queryFn: () => financeRepository.getCurrentDrawerSession(type),
  });
}
export function useDrawerHistory(filters: FinanceFilters) {
  return useQuery({
    queryKey: FINANCE_KEYS.drawerHistory(filters),
    queryFn: () => financeRepository.getDrawerHistory(filters),
  });
}
export function useDrawerSessionById(id: string) {
  return useQuery({
    queryKey: FINANCE_KEYS.drawerSessionById(id),
    queryFn: () => financeRepository.getDrawerSessionById(id),
    enabled: !!id,
  });
}
export function useOpenDrawer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: OpenSessionRequest) => financeRepository.openDrawerSession(data),
    onSuccess: (_, variables) => {
      toast.success("تم التنفيذ بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.activeDrawer(variables.type || 1) });
    },
    onError: () => toast.error("حدث خطأ"),
  });
}
export function useCloseDrawer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (type: number = 1) => financeRepository.closeDrawerSession(type),
    onSuccess: (_, type) => {
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.activeDrawer(type) });
      toast.success("تم التنفيذ بنجاح");
    },
    onError: () => {
      toast.error("حدث خطأ");
    }
  });
}
export function useAddDrawerTransaction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AddManualTransactionRequest) => financeRepository.addDrawerTransaction(data),
    onSuccess: () => {
      toast.success("تم التنفيذ بنجاح");
      queryClient.invalidateQueries({ queryKey: ["drawer", "active"] });
    },
    onError: () => {
      toast.error("حدث خطأ");
    },
  });
}
export function useSafes() {
  return useQuery({
    queryKey: FINANCE_KEYS.safes,
    queryFn: () => financeRepository.getSafes(),
  });
}
export function useCreateSafe() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSafeRequest) => financeRepository.createSafe(data),
    onSuccess: () => {
      toast.success("تم التنفيذ بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.safes });
    },
    onError: () => toast.error("حدث خطأ"),
  });
}
export function useDepositFromDrawer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ safeId, data }: { safeId: string, data: ReceiveDrawerDepositRequest }) =>
      financeRepository.depositFromDrawer(safeId, data),
    onSuccess: () => {
      toast.success("تم التنفيذ بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.safes });
      queryClient.invalidateQueries({ queryKey: ["drawer", "active"] });
    },
    onError: () => toast.error("حدث خطأ"),
  });
}
export function useAddManualSafeTransaction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ safeId, data }: { safeId: string, data: AddManualSafeTransactionRequest }) =>
      financeRepository.addManualSafeTransaction(safeId, data),
    onSuccess: (_, variables) => {
      toast.success("تم التنفيذ بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.safes });
      queryClient.invalidateQueries({ queryKey: ["safes", variables.safeId, "transactions"] });
    },
    onError: () => toast.error("حدث خطأ"),
  });
}
export function useSafeTransactions(safeId: string, filters: FinanceFilters) {
  return useQuery({
    queryKey: FINANCE_KEYS.safeTransactions(safeId, filters),
    queryFn: () => financeRepository.getSafeTransactions(safeId, filters),
    enabled: !!safeId,
  });
}
export function useExpenseCategories() {
  return useQuery({
    queryKey: FINANCE_KEYS.expenseCategories,
    queryFn: () => financeRepository.getExpenseCategories(),
  });
}
export function useCreateExpenseCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateExpenseCategoryRequest) => financeRepository.createExpenseCategory(data),
    onSuccess: () => {
      toast.success("تم التنفيذ بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.expenseCategories });
    },
    onError: () => toast.error("حدث خطأ"),
  });
}
export function useRecordExpense() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateExpenseRequest) => financeRepository.recordExpense(data),
    onSuccess: () => {
      toast.success("تم التنفيذ بنجاح");
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      queryClient.invalidateQueries({ queryKey: ["drawer", "active"] });
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.safes });
    },
    onError: () => toast.error("حدث خطأ"),
  });
}
export function useExpenses(filters: FinanceFilters) {
  return useQuery({
    queryKey: FINANCE_KEYS.expenses(filters),
    queryFn: () => financeRepository.getExpenses(filters),
  });
}
```

## File: src/features/finance/hooks/useFinancePolicies.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { financePolicyRepository, UpdateTransactionPolicyRequest } from "../api/FinancePolicyApi";
import { GlobalTransactionCategory } from "../schemas/financeSchemas";
import { toast } from "sonner";
export const FINANCE_POLICY_KEYS = {
  all: ["financePolicies"] as const,
};
export function useFinancePolicies() {
  return useQuery({
    queryKey: FINANCE_POLICY_KEYS.all,
    queryFn: () => financePolicyRepository.getPolicies(),
    staleTime: 1000 * 60 * 5,
  });
}
export function useUpdateFinancePolicy() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ category, data }: { category: GlobalTransactionCategory, data: UpdateTransactionPolicyRequest }) =>
      financePolicyRepository.updatePolicy(category, data),
    onSuccess: () => {
      toast.success("تم تحديث سياسة المصدر المالي بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_POLICY_KEYS.all });
    },
    onError: () => {
      toast.error("حدث خطأ أثناء تحديث السياسة");
    }
  });
}
```

## File: src/features/finance/hooks/useOwnerTransactions.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ownerTransactionApi } from "../api/OwnerTransactionApi";
import { CreateOwnerTransactionRequest } from "../schemas/financeSchemas";
import { toast } from "sonner";
import { FINANCE_KEYS } from "./useFinance";
export const OWNER_TRANSACTION_KEYS = {
  all: ["ownerTransactions"] as const,
};
export function useOwnerTransactions() {
  return useQuery({
    queryKey: OWNER_TRANSACTION_KEYS.all,
    queryFn: () => ownerTransactionApi.getOwnerTransactions(),
  });
}
export function useCreateOwnerTransaction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateOwnerTransactionRequest) => ownerTransactionApi.createOwnerTransaction(data),
    onSuccess: () => {
      toast.success("تم التنفيذ بنجاح");
      queryClient.invalidateQueries({ queryKey: OWNER_TRANSACTION_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ["drawer", "active"] });
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.safes });
    },
    onError: () => {
      toast.error("حدث خطأ");
    },
  });
}
```

## File: src/features/finance/hooks/usePaymentSourcePrompt.tsx
```typescript
import { useState, useRef, useCallback } from 'react';
import { useFinancePolicies } from './useFinancePolicies';
import { GlobalTransactionCategory, PaymentSource } from '../schemas/financeSchemas';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { tokens } from '@/shared/styles/tokens';
import { Inbox, Vault } from 'lucide-react';
export function usePaymentSourcePrompt(defaultCategory?: GlobalTransactionCategory) {
  const { data: policies } = useFinancePolicies();
  const [isOpen, setIsOpen] = useState(false);
  const resolverRef = useRef<((value: PaymentSource | null) => void) | null>(null);
  const categoryEnumToString: Record<number, string> = {
    1: 'CashSale',
    2: 'SalesReturn',
    3: 'CashPurchase',
    4: 'PurchaseReturn',
    5: 'SupplierPayment',
    6: 'SupplierReceipt',
    7: 'CustomerPayment',
    8: 'CustomerRefund',
    9: 'Expense',
    10: 'OwnerDeposit',
    11: 'OwnerWithdrawal',
    12: 'ManualIncome',
    13: 'ManualExpense',
  };
  const promptPaymentSource = useCallback((overrideCategory?: GlobalTransactionCategory): Promise<PaymentSource | null> => {
    return new Promise((resolve) => {
      const targetCategory = overrideCategory ?? defaultCategory;
      if (!targetCategory) {
        resolve(1);
        return;
      }
      const categoryString = categoryEnumToString[targetCategory];
      if (!policies) {
        console.warn('Finance policies are still loading.');
        resolve(null);
        return;
      }
      const policy = policies.find(p => p.category === categoryString);
      if (!policy || policy.allowedSource === 'Either') {
        resolverRef.current = resolve;
        setIsOpen(true);
      } else if (policy.allowedSource === 'DrawerOnly') {
        resolve(1);
      } else if (policy.allowedSource === 'SafeOnly') {
        resolve(2);
      }
    });
  }, [defaultCategory, policies]);
  const handleSelect = (source: PaymentSource) => {
    setIsOpen(false);
    if (resolverRef.current) {
      resolverRef.current(source);
      resolverRef.current = null;
    }
  };
  const handleClose = () => {
    setIsOpen(false);
    if (resolverRef.current) {
      resolverRef.current(null);
      resolverRef.current = null;
    }
  };
  const PaymentSourcePromptModal = () => (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      title="تحديد مصدر الأموال"
      zIndexClassName="z-[100]"
    >
      <div className="p-6">
        <p className="text-gray-600 text-center mb-6">
          حسب سياسة النظام الحالية، يمكنك اختيار مصدر سحب أو إيداع هذه الأموال.
          <br/>من أين تريد إتمام هذه العملية؟
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => handleSelect(1)}
            className="flex flex-col items-center justify-center p-6 border-2 border-blue-100 rounded-xl hover:bg-blue-50 hover:border-blue-500 transition-all text-blue-800"
          >
            <Inbox className="w-12 h-12 mb-3 text-blue-500" />
            <span className="font-bold text-lg">الدرج</span>
            <span className="text-xs text-blue-600/70 mt-1">(الوردية الحالية)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelect(2)}
            className="flex flex-col items-center justify-center p-6 border-2 border-emerald-100 rounded-xl hover:bg-emerald-50 hover:border-emerald-500 transition-all text-emerald-800"
          >
            <Vault className="w-12 h-12 mb-3 text-emerald-500" />
            <span className="font-bold text-lg">الخزينة</span>
            <span className="text-xs text-emerald-600/70 mt-1">(الخزينة الرئيسية)</span>
          </button>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className={`${tokens.btn.ghost} w-full mt-6`}
        >
          إلغاء
        </button>
      </div>
    </BaseModal>
  );
  return { promptPaymentSource, PaymentSourcePromptModal, isPoliciesLoading: !policies };
}
```

## File: src/features/finance/pages/DrawerHistoryPage.tsx
```typescript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrawerHistory } from '../hooks/useFinance';
import { FinanceFilters } from '../schemas/financeSchemas';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { DataTable } from '@/shared/components/ui/DataTable';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { Wallet, CheckCircle } from 'lucide-react';
import { useAuth } from '@/features/auth/hooks/useAuth';
export function DrawerHistoryPage() {
  const { hasRole, hasAnyRole } = useAuth();
  const isTechnician = hasRole('Technician');
  const canSeeBoth = hasAnyRole(['Admin', 'Manager']);
  const isSalesperson = hasRole('Salesperson');
  const [filters, setFilters] = useState<FinanceFilters>({
    pageNumber: 1,
    pageSize: 50,
    type: isTechnician && !canSeeBoth ? 2 : (isSalesperson && !canSeeBoth ? 1 : undefined)
  });
  const navigate = useNavigate();
  const { data: pagedData, isLoading } = useDrawerHistory(filters);
  if (isLoading) {
    return <PageLoader />;
  }
  const sessions = pagedData?.items || [];
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <Wallet className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">سجل الورديات</h1>
            <p className="text-gray-500 mt-1 text-sm">عرض الورديات السابقة وتفاصيلها المالية</p>
          </div>
        </div>
        {}
        {canSeeBoth && (
          <div className="flex bg-slate-100/70 p-1.5 rounded-xl w-fit">
            {(['', '1', '2'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilters(prev => ({ ...prev, type: t ? Number(t) : undefined, pageNumber: 1 }))}
                className={[
                  'px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap',
                  (filters.type?.toString() || '') === t
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50',
                ].join(' ')}
              >
                {t === '' ? 'الكل' : t === '1' ? 'مبيعات' : 'صيانة'}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <DataTable
          data={sessions}
          columns={[
            {
              header: 'النوع',
              cell: (item: any) => (
                <span className="font-semibold text-gray-700">
                  {item.type === 1 ? 'مبيعات' : item.type === 2 ? 'صيانة' : 'غير محدد'}
                </span>
              )
            },
            {
              header: 'الحالة',
              cell: (item: any) => item.isClosed ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700">
                  <CheckCircle className="w-4 h-4" /> مغلقة
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-green-100 text-green-700">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> جارية الآن
                </span>
              )
            },
            {
              header: 'وقت الفتح',
              cell: (item: any) => <span dir="ltr">{formatDate(item.openedAt)}</span>
            },
            {
              header: 'وقت الإغلاق',
              cell: (item: any) => item.closedAt ? <span dir="ltr">{formatDate(item.closedAt)}</span> : '-'
            },
            {
              header: 'الرصيد الافتتاحي',
              cell: (item: any) => <span dir="ltr" className="font-medium text-gray-700">{formatCurrency(item.openingBalance)}</span>
            },
            {
              header: 'إجمالي المبيعات/الداخل',
              cell: (item: any) => <span dir="ltr" className="font-semibold text-green-600">+{formatCurrency(item.totalIncome || 0)}</span>
            },
            {
              header: 'صافي أرباح الوردية',
              cell: (item: any) => <span dir="ltr" className="font-bold text-blue-600">{formatCurrency(item.totalProfit ?? 0)}</span>
            },
            {
              header: 'الرصيد النهائي للصندوق',
              cell: (item: any) => <span dir="ltr" className="font-bold text-blue-700">{formatCurrency(item.closingBalance || 0)}</span>
            }
          ]}
          isLoading={isLoading}
          totalCount={pagedData?.totalCount || 0}
          pageSize={filters.pageSize || 50}
          pageIndex={filters.pageNumber || 1}
          totalPages={pagedData?.totalPages || 1}
          onNextPage={() => setFilters(prev => ({ ...prev, pageNumber: (prev.pageNumber || 1) + 1 }))}
          onPrevPage={() => setFilters(prev => ({ ...prev, pageNumber: Math.max((prev.pageNumber || 1) - 1, 1) }))}
          onRowClick={(row: any) => navigate(`/finance/drawer/history/${row.id}`)}
        />
      </div>
    </div>
  );
}
```

## File: src/features/finance/pages/DrawerPage.tsx
```typescript
import { useState } from 'react';
import { useActiveDrawer } from '../hooks/useFinance';
import { OpenDrawerForm } from '../components/OpenDrawerForm';
import { DrawerTransactionsTable } from '../components/DrawerTransactionsTable';
import { CloseDrawerModal } from '../components/CloseDrawerModal';
import { ManualTransactionModal } from '../components/ManualTransactionModal';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { PlusCircle, Wallet, ArrowUpRight, ArrowDownRight, Clock, History } from 'lucide-react';
import { DrawerTransactionResponse } from '../schemas/financeSchemas';
import { Link } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
export function DrawerPage() {
  const { hasRole, hasAnyRole } = useAuth();
  const isTechnician = hasRole('Technician');
  const canSeeBoth = hasAnyRole(['Admin', 'Manager']);
  const isSalesperson = hasRole('Salesperson');
  const [activeTab, setActiveTab] = useState<number>(isTechnician && !canSeeBoth ? 2 : 1);
  return (
    <div className="space-y-6">
      <div className="flex gap-2 border-b border-gray-100 pb-2">
        {(canSeeBoth || isSalesperson) && (
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${activeTab === 1 ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`}
          >
            درج المبيعات
          </button>
        )}
        {(canSeeBoth || isTechnician) && (
          <button
            onClick={() => setActiveTab(2)}
            className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${activeTab === 2 ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`}
          >
            درج الصيانة
          </button>
        )}
      </div>
      <DrawerContent type={activeTab} key={activeTab} />
    </div>
  );
}
function DrawerContent({ type }: { type: number }) {
  const { data: session, isLoading } = useActiveDrawer(type);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [isManualTxModalOpen, setIsManualTxModalOpen] = useState(false);
  if (isLoading) {
    return <PageLoader />;
  }
  if (!session) {
    return <OpenDrawerForm type={type} />;
  }
  const runningIncome = session.transactions.filter((t: DrawerTransactionResponse) => t.type === 1).reduce((acc: number, t: DrawerTransactionResponse) => acc + t.amount, 0);
  const runningExpense = session.transactions.filter((t: DrawerTransactionResponse) => t.type === 2).reduce((acc: number, t: DrawerTransactionResponse) => acc + t.amount, 0);
  const currentBalance = session.openingBalance + runningIncome - runningExpense;
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Wallet className="w-7 h-7 text-blue-600" />
            {type === 2 ? 'درج الصيانة الحالي' : 'الدرج الحالي'}
          </h1>
          <p className="text-gray-500 mt-1 text-sm flex items-center gap-2">
            <Clock className="w-4 h-4" />
            تم الفتح: {formatDate(session.openedAt)}
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to={type === 2 ? "/finance/drawer/history?type=2" : "/finance/drawer/history?type=1"}
            className={tokens.btn.ghost + " flex items-center gap-2 text-gray-600"}
          >
            <History className="w-5 h-5" />
            <span>تصفح السجل</span>
          </Link>
          <button
            onClick={() => setIsCloseModalOpen(true)}
            className={tokens.btn.primary + " bg-red-600 hover:bg-red-700 ring-red-500"}
          >
            إغلاق الوردية
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-1">الرصيد الافتتاحي</div>
          <div className="text-2xl font-bold text-gray-800">{formatCurrency(session.openingBalance)}</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <ArrowUpRight className="w-12 h-12 text-emerald-600" />
          </div>
          <div className="text-sm font-medium text-gray-500 mb-1">إجمالي المقبوضات</div>
          <div className="text-2xl font-bold text-emerald-600">{formatCurrency(runningIncome)}</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <ArrowDownRight className="w-12 h-12 text-red-600" />
          </div>
          <div className="text-sm font-medium text-gray-500 mb-1">إجمالي المصروفات</div>
          <div className="text-2xl font-bold text-red-600">{formatCurrency(runningExpense)}</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-sm font-medium text-gray-500 mb-1">صافي أرباح الوردية</div>
          <div className="text-2xl font-bold text-blue-600">{formatCurrency(session.totalProfit ?? 0)}</div>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-2xl shadow-md text-white">
          <div className="text-blue-100 text-sm font-medium mb-1">الرصيد المتوقع</div>
          <div className="text-2xl font-bold">{formatCurrency(currentBalance)}</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[500px]">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-lg font-bold text-gray-800">حركات الدرج</h2>
          <button
            onClick={() => setIsManualTxModalOpen(true)}
            className={tokens.btn.secondary + " py-2 text-sm"}
          >
            <PlusCircle className="w-4 h-4 ml-2" />
            إضافة حركة يدوية
          </button>
        </div>
        <div className="flex-1 overflow-auto custom-scrollbar">
          <DrawerTransactionsTable transactions={session.transactions || []} />
        </div>
      </div>
      {isCloseModalOpen && (
        <CloseDrawerModal
          isOpen={isCloseModalOpen}
          onClose={() => setIsCloseModalOpen(false)}
          session={session}
        />
      )}
      {isManualTxModalOpen && (
        <ManualTransactionModal
          isOpen={isManualTxModalOpen}
          onClose={() => setIsManualTxModalOpen(false)}
        />
      )}
    </div>
  );
}
```

## File: src/features/finance/pages/DrawerSessionDetailsPage.tsx
```typescript
import { useParams, useNavigate } from 'react-router-dom';
import { useDrawerSessionById } from '../hooks/useFinance';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { DrawerTransactionsTable } from '../components/DrawerTransactionsTable';
import { CheckCircle, Clock, ChevronRight, Wallet } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
export function DrawerSessionDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: session, isLoading, isError } = useDrawerSessionById(id!);
  if (isLoading) return <PageLoader />;
  if (isError || !session) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <p className="text-xl text-gray-500 mb-4">حدث خطأ أو الوردية غير موجودة</p>
        <button onClick={() => navigate('/finance/drawer/history')} className={tokens.btn.primary}>
          العودة لسجل الورديات
        </button>
      </div>
    );
  }
  return (
    <div className="space-y-6 w-full">
      {}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/finance/drawer/history')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Wallet className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">تفاصيل الوردية</h1>
              <p className="text-gray-500 text-sm">عرض شامل لحركات الدرج والرصيد</p>
            </div>
          </div>
        </div>
        {session.isClosed ? (
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
            <CheckCircle className="w-4 h-4" /> وردية مغلقة
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-green-50 text-green-700 border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> جارية الآن
          </span>
        )}
      </div>
      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 flex items-center gap-2"><Clock className="w-4 h-4"/> وقت الفتح:</span>
              <span className="font-semibold text-gray-800" dir="ltr">{formatDate(session.openedAt)}</span>
            </div>
            {session.closedAt && (
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center gap-2"><CheckCircle className="w-4 h-4"/> وقت الإغلاق:</span>
                <span className="font-semibold text-gray-800" dir="ltr">{formatDate(session.closedAt)}</span>
              </div>
            )}
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-sm flex flex-col items-center justify-center text-center">
          <span className="text-blue-800 font-medium mb-1">الرصيد الافتتاحي</span>
          <span className="text-3xl font-bold text-blue-900" dir="ltr">{formatCurrency(session.openingBalance)}</span>
        </div>
      </div>
      {}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي المبيعات / الداخل</p>
          <p className="text-2xl font-bold text-green-600" dir="ltr">+{formatCurrency(session.totalIncome || 0)}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي المصروفات / الخارج</p>
          <p className="text-2xl font-bold text-red-600" dir="ltr">-{formatCurrency(session.totalExpense || 0)}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm font-medium mb-2">صافي الأرباح</p>
          <p className="text-2xl font-bold text-blue-600" dir="ltr">{formatCurrency(session.totalProfit ?? 0)}</p>
        </div>
        <div className="bg-gray-900 p-5 rounded-2xl shadow-sm text-white">
          <p className="text-gray-400 text-sm font-medium mb-2">الرصيد النهائي للصندوق</p>
          <p className="text-2xl font-bold text-white" dir="ltr">{formatCurrency(session.closingBalance || 0)}</p>
        </div>
      </div>
      {}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">حركات الدرج بالتفصيل</h2>
        </div>
        <DrawerTransactionsTable transactions={session.transactions || []} />
      </div>
    </div>
  );
}
```

## File: src/features/finance/pages/ExpensesPage.tsx
```typescript
import { useState } from 'react';
import { useExpenses } from '../hooks/useFinance';
import { ExpensesTable } from '../components/ExpensesTable';
import { CreateExpenseModal } from '../components/CreateExpenseModal';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { tokens } from '@/shared/styles/tokens';
import { PlusCircle, ReceiptText } from 'lucide-react';
export function ExpensesPage() {
  const { data: expensesData, isLoading } = useExpenses({ pageNumber: 1, pageSize: 50 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <ReceiptText className="w-7 h-7 text-red-600" />
            المصروفات
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-1.5 text-sm">
            إدارة وتسجيل مصروفات الفرع
          </p>
        </div>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className={tokens.btn.primary + " flex items-center gap-2"}
          >
            <PlusCircle className="w-5 h-5" />
            تسجيل مصروف
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">سجل المصروفات</h3>
        <ExpensesTable expenses={expensesData || []} />
      </div>
      {isModalOpen && (
        <CreateExpenseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
```

## File: src/features/finance/pages/FinancePoliciesPage.tsx
```typescript
import { useEffect, useState } from 'react';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useFinancePolicies, useUpdateFinancePolicy } from '../hooks/useFinancePolicies';
import { GlobalTransactionCategory, PaymentSourcePolicy } from '../schemas/financeSchemas';
import { tokens } from '@/shared/styles/tokens';
import { ShieldAlert, Loader2, Info } from 'lucide-react';
export function FinancePoliciesPage() {
  const { setTitle, setBackButton } = useHeaderStore();
  const { data: policies, isLoading } = useFinancePolicies();
  const { mutate: updatePolicy, isPending } = useUpdateFinancePolicy();
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string | null>(null);
  useEffect(() => {
    setTitle("السياسات المالية للمدير");
    setBackButton(false);
  }, [setTitle, setBackButton]);
  const categoryLabels: Record<string, string> = {
    CashSale: 'المبيعات النقدية (نقطة البيع - POS)',
    SalesReturn: 'مرتجعات المبيعات نقدي (إضافة مرتجع مبيعات)',
    CashPurchase: 'المشتريات النقدية (فاتورة مشتريات جديدة)',
    PurchaseReturn: 'مرتجعات المشتريات نقدي',
    SupplierPayment: 'سداد دفعة لمورد (سجل الموردين > سداد)',
    SupplierReceipt: 'استلام دفعة من مورد (سجل الموردين > استلام)',
    CustomerPayment: 'تحصيل دفعة من عميل (سجل العملاء > تحصيل)',
    CustomerRefund: 'رد أموال لعميل',
    Expense: 'المصروفات العامة (المالية > المصروفات)',
    OwnerDeposit: 'إيداع رأس مال المالك',
    OwnerWithdrawal: 'مسحوبات الأرباح للمالك',
    ManualIncome: 'إيراد يدوي عام (الدرج / الخزينة > إضافة إيراد)',
    ManualExpense: 'مصروف يدوي عام (الدرج / الخزينة > إضافة مصروف)',
  };
  const categoryDescriptions: Record<string, string> = {
    CashSale: 'عمليات البيع المباشر للزبائن كاش. مثال: عميل يشتري بضاعة بـ 100 ج.م ويدفع نقداً في نقطة البيع.',
    SalesReturn: 'عندما يُرجع العميل بضاعة وتُعيد له أمواله كاش. مثال: عميل أعاد منتجاً وأخذ 50 ج.م من الدرج.',
    CashPurchase: 'دفع المال للمورد نقداً وقت شراء البضاعة. مثال: شراء بضاعة بـ 500 ج.م ودفعها فوراً من الدرج.',
    PurchaseReturn: 'عند إرجاع بضاعة للمورد واستلام ثمنها كاش. مثال: أرجعت بضاعة تالفة للمورد وأعطاك 200 ج.م نقدًا أدخلتها الدرج.',
    SupplierPayment: 'تسديد دفعة من مديونية سابقة لمورد. مثال: مورد له حساب مفتوح، قمت بإعطائه 1000 ج.م من الدرج لتقليل حسابه.',
    SupplierReceipt: 'نادر الحدوث: استلام كاش من مورد لأي سبب وتنزيله من رصيده (لتقليل حسابه الدائن).',
    CustomerPayment: 'تحصيل دفعة كاش من عميل عليه ديون. مثال: عميل اشترى آجل، والآن أحضر 300 ج.م لسداد جزء من حسابه.',
    CustomerRefund: 'إعطاء كاش لعميل دون ربطه بفاتورة مرتجع معينة. مثال: عميل دفع بزيادة سابقاً وجاء اليوم ليسترد 100 ج.م نقداً من الدرج.',
    Expense: 'أي مصروف يومي أو شهري للمكان. مثال: دفع 50 ج.م إكرامية أو فاتورة كهرباء من الدرج.',
    OwnerDeposit: 'قيام صاحب العمل بوضع أموال من جيبه الخاص لدعم الكاش. مثال: المالك يضع 5000 ج.م في الخزينة.',
    OwnerWithdrawal: 'قيام صاحب العمل بسحب أموال لصالحه. مثال: المالك يسحب 1000 ج.م من الخزينة كمصروف شخصي.',
    ManualIncome: 'إضافة إيراد ندي ليس له تصنيف في النظام. مثال: تسجيل إيراد استثنائي من الدرج.',
    ManualExpense: 'سحب مصروف سريع ليس له تصنيف في فئات المصروفات المحددة.',
  };
  const categoryEnumMap: Record<string, GlobalTransactionCategory> = {
    CashSale: 1,
    SalesReturn: 2,
    CashPurchase: 3,
    PurchaseReturn: 4,
    SupplierPayment: 5,
    SupplierReceipt: 6,
    CustomerPayment: 7,
    CustomerRefund: 8,
    Expense: 9,
    OwnerDeposit: 10,
    OwnerWithdrawal: 11,
    ManualIncome: 12,
    ManualExpense: 13,
  };
  const handlePolicyChange = (categoryString: string, newPolicyString: string) => {
    const enumValue = categoryEnumMap[categoryString];
    let policyValue: PaymentSourcePolicy = 3;
    if (newPolicyString === 'DrawerOnly') policyValue = 1;
    if (newPolicyString === 'SafeOnly') policyValue = 2;
    setUpdatingId(categoryString);
    updatePolicy(
      { category: enumValue, data: { allowedSource: policyValue } },
      {
        onSettled: () => setUpdatingId(null)
      }
    );
  };
  if (isLoading) {
    return <div className="p-10 flex justify-center"><Loader2 className="animate-spin text-gray-400 w-8 h-8" /></div>;
  }
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
        <ShieldAlert className="text-amber-600 flex-shrink-0" size={28} />
        <div>
          <h3 className="font-bold text-amber-800 text-lg mb-1">لوحة تحكم المدير: سياسات مصادر الأموال</h3>
          <p className="text-amber-700 leading-relaxed">
            من هنا يمكنك التحكم في المصدر المالي الإجباري لكل حركة في النظام.
            <strong> الدرج فقط (Drawer Only): </strong>يُجبر النظام على سحب/إيداع الأموال من درج الكاشير للوردية الحالية.
            <strong> الخزينة فقط (Safe Only): </strong>يُجبر النظام على التعامل مع الخزينة الرئيسية.
            <strong> اختياري (Either): </strong>يطلب من المستخدم اختيار المصدر أثناء تنفيذ العملية.
            <em>أي تعديل هنا يتم تطبيقه فوراً على كل شاشات النظام.</em>
          </p>
        </div>
      </div>
      <div className={`${tokens.card} overflow-hidden`}>
        <table className="w-full text-right">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 font-bold text-gray-700 text-sm">نوع العملية المالية</th>
              <th className="px-6 py-4 font-bold text-gray-700 text-sm w-72">السياسة المطبقة (مصدر الأموال)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {policies?.map((policy) => (
              <tr key={policy.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      {categoryLabels[policy.category] || policy.category}
                      <button
                        type="button"
                        onClick={() => setActiveDescription(activeDescription === policy.category ? null : policy.category)}
                        className="text-gray-400 hover:text-blue-600 transition-colors focus:outline-none"
                      >
                        <Info size={16} />
                      </button>
                    </div>
                    <div className="text-xs text-gray-500 font-mono mt-1 opacity-70">{policy.category}</div>
                    {activeDescription === policy.category && (
                      <div className="mt-2 p-3 bg-blue-50 text-blue-800 text-sm leading-relaxed rounded-lg border border-blue-100 shadow-sm whitespace-pre-wrap animate-in fade-in slide-in-from-top-1">
                        {categoryDescriptions[policy.category]}
                      </div>
                    )}
                  </td>
                <td className="px-6 py-4">
                  <div className="relative">
                    <select
                      value={policy.allowedSource}
                      onChange={(e) => handlePolicyChange(policy.category, e.target.value)}
                      disabled={isPending && updatingId === policy.category}
                      className={`${tokens.input} bg-white font-semibold cursor-pointer appearance-none ${
                        policy.allowedSource === 'DrawerOnly' ? 'text-blue-700 border-blue-200 bg-blue-50' :
                        policy.allowedSource === 'SafeOnly' ? 'text-emerald-700 border-emerald-200 bg-emerald-50' :
                        'text-purple-700 border-purple-200 bg-purple-50'
                      }`}
                    >
                      <option value="DrawerOnly">الدرج فقط (Drawer Only)</option>
                      <option value="SafeOnly">الخزينة فقط (Safe Only)</option>
                      <option value="Either">الدرج أو الخزينة (Either)</option>
                    </select>
                    {isPending && updatingId === policy.category && (
                      <Loader2 className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 animate-spin" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```

## File: src/features/finance/pages/OwnerTransactionsPage.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { useState } from 'react';
import { useOwnerTransactions, useCreateOwnerTransaction } from '../hooks/useOwnerTransactions';
import { usePaymentSourcePrompt } from '../hooks/usePaymentSourcePrompt';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { tokens } from '@/shared/styles/tokens';
import { ArrowDownCircle, ArrowUpCircle, Wallet } from 'lucide-react';
import { DataTable } from '@/shared/components/ui/DataTable';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { OwnerTransactionResponse } from '../schemas/financeSchemas';
export function OwnerTransactionsPage() {
  const { data: transactions, isLoading } = useOwnerTransactions();
  const { mutate: createTransaction, isPending: isSubmitting } = useCreateOwnerTransaction();
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'Deposit' | 'Withdrawal' | null;
  }>({ isOpen: false, type: null });
  const [amount, setAmount] = useState<number | ''>('');
  const [notes, setNotes] = useState('');
  if (isLoading) return <PageLoader />;
  const handleOpenModal = (type: 'Deposit' | 'Withdrawal') => {
    setModalState({ isOpen: true, type });
    setAmount('');
    setNotes('');
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0) return;
    const category = modalState.type === 'Deposit' ? 10 : 11;
    const source = await promptPaymentSource(category);
    if (source) {
      createTransaction(
        {
          category,
          amount: Number(amount),
          notes,
          paymentSource: source,
        },
        {
          onSuccess: () => {
            setModalState({ isOpen: false, type: null });
          },
        }
      );
    }
  };
  const columns = [
    {
      header: 'Ø§Ù„Ù†ÙˆØ¹',
      cell: (row: OwnerTransactionResponse) => (
        <span className={row.category === 10 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
          {row.category === 10 ? 'Ø¥ÙŠØ¯Ø§Ø¹ Ø±Ø£Ø³ Ù…Ø§Ù„' : 'Ø³Ø­Ø¨ Ø£Ø±Ø¨Ø§Ø­'}
        </span>
      ),
    },
    {
      header: 'Ø§Ù„Ù…Ø¨Ù„Øº',
      cell: (row: OwnerTransactionResponse) => (
        <span dir="ltr" className="font-semibold text-gray-800 inline-block">
          {formatCurrency(row.amount)}
        </span>
      ),
    },
    {
      header: 'Ø§Ù„Ù…ØµØ¯Ø±',
      cell: (row: OwnerTransactionResponse) => (
        <span className="text-gray-600 text-sm">
          {row.paymentSource === 1 ? 'Ø§Ù„Ø¯Ø±Ø¬' : 'Ø§Ù„Ø®Ø²ÙŠÙ†Ø©'}
        </span>
      ),
    },
    {
      header: 'Ø§Ù„ØªØ§Ø±ÙŠØ®',
      cell: (row: OwnerTransactionResponse) => (
        <span className="text-gray-600 text-sm">
          {formatDate(row.createdAt)}
        </span>
      ),
    },
    {
      header: 'Ù…Ù„Ø§Ø­Ø¸Ø§Øª',
      cell: (row: OwnerTransactionResponse) => (
        <span className="text-gray-500 text-sm">
          {row.notes || '-'}
        </span>
      ),
    },
  ];
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Wallet className="w-7 h-7 text-indigo-600" />
            Ù…Ø¹Ø§Ù…Ù„Ø§Øª Ø§Ù„Ù…Ø§Ù„Ùƒ
          </h1>
          <p className="text-gray-500 mt-1 flex items-center gap-1.5 text-sm">
            Ø¥Ø¯Ø§Ø±Ø© Ø¥ÙŠØ¯Ø§Ø¹ Ø±Ø£Ø³ Ø§Ù„Ù…Ø§Ù„ ÙˆØ³Ø­Ø¨ Ø§Ù„Ø£Ø±Ø¨Ø§Ø­
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleOpenModal('Deposit')}
            className={tokens.btn.primary + " flex items-center gap-2 bg-green-600 hover:bg-green-700"}
          >
            <ArrowDownCircle className="w-5 h-5" />
            Ø¥ÙŠØ¯Ø§Ø¹ Ø±Ø£Ø³ Ù…Ø§Ù„
          </button>
          <button
            onClick={() => handleOpenModal('Withdrawal')}
            className={tokens.btn.primary + " flex items-center gap-2 bg-red-600 hover:bg-red-700"}
          >
            <ArrowUpCircle className="w-5 h-5" />
            Ø³Ø­Ø¨ Ø£Ø±Ø¨Ø§Ø­
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Ø³Ø¬Ù„ Ø§Ù„Ù…Ø¹Ø§Ù…Ù„Ø§Øª</h3>
        <DataTable
          columns={columns}
          data={transactions || []}
          pageIndex={1}
          totalPages={1}
          totalCount={transactions?.length || 0}
          pageSize={transactions?.length || 50}
          onNextPage={() => {}}
          onPrevPage={() => {}}
        />
      </div>
      <PaymentSourcePromptModal />
      <BaseModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: null })}
        title={modalState.type === 'Deposit' ? 'Ø¥ÙŠØ¯Ø§Ø¹ Ø±Ø£Ø³ Ù…Ø§Ù„ Ø¬Ø¯ÙŠØ¯' : 'Ø³Ø­Ø¨ Ø£Ø±Ø¨Ø§Ø­'}
      >
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ø§Ù„Ù…Ø¨Ù„Øº</label>
            <input
              type="number"
              required
              min="0.01"
              step="any"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className={tokens.input}
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ù…Ù„Ø§Ø­Ø¸Ø§Øª (Ø§Ø®ØªÙŠØ§Ø±ÙŠ)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={tokens.input}
              rows={3}
              placeholder="Ø£Ø¯Ø®Ù„ Ø£ÙŠ Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ù‡Ù†Ø§..."
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button type="submit" disabled={isSubmitting} className={`${tokens.btn.primary} flex-1`}>
              {isSubmitting ? 'Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø­ÙØ¸...' : 'ØªØ£ÙƒÙŠØ¯'}
            </button>
            <button
              type="button"
              onClick={() => setModalState({ isOpen: false, type: null })}
              className={`${tokens.btn.ghost} flex-1`}
            >
              Ø¥Ù„ØºØ§Ø¡
            </button>
          </div>
        </form>
      </BaseModal>
    </div>
  );
}
```

## File: src/features/finance/pages/SafePage.tsx
```typescript
import { useState } from 'react';
import { useSafes, useSafeTransactions } from '../hooks/useFinance';
import { SafeTransactionsTable } from '../components/SafeTransactionsTable';
import { ReceiveDrawerDepositModal } from '../components/ReceiveDrawerDepositModal';
import { ManualSafeTransactionModal } from '../components/ManualSafeTransactionModal';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { formatCurrency } from '@/shared/utils/currency';
import { Vault, PlusCircle, ArrowDownToLine } from 'lucide-react';
export function SafePage() {
  const { data: safes, isLoading: safesLoading } = useSafes();
  const mainSafe = safes?.find(s => s.isMain) || safes?.[0];
  const safeId = mainSafe?.id || '';
  const { data: transactionsData, isLoading: txLoading } = useSafeTransactions(safeId, { pageNumber: 1, pageSize: 50 });
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isManualModalOpen, setIsManualModalOpen] = useState(false);
  if (safesLoading || txLoading) {
    return <PageLoader />;
  }
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-blue-400 opacity-20 blur-2xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-5">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
              <Vault className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="text-blue-100 font-medium mb-1">
                {mainSafe ? mainSafe.name : 'الخزينة الرئيسية'}
              </p>
              <h1 className="text-3xl font-bold text-white mb-2">إجمالي رصيد الخزينة</h1>
              <div className="text-4xl font-extrabold tracking-tight" dir="ltr">
                {mainSafe ? formatCurrency(mainSafe.balance) : formatCurrency(0)}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 min-w-[200px]">
            <button
              onClick={() => setIsManualModalOpen(true)}
              disabled={!safeId}
              className="w-full bg-white text-blue-900 hover:bg-gray-50 font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <PlusCircle className="w-5 h-5" />
              عملية إيداع / سحب
            </button>
            <button
              onClick={() => setIsDepositModalOpen(true)}
              disabled={!safeId}
              className="w-full bg-blue-600/30 hover:bg-blue-600/50 border border-white/20 text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <ArrowDownToLine className="w-5 h-5" />
              استلام من الكاشير
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          سجل حركات الخزينة
        </h3>
        <SafeTransactionsTable transactions={transactionsData || []} />
      </div>
      {isDepositModalOpen && safeId && (
        <ReceiveDrawerDepositModal
          isOpen={isDepositModalOpen}
          onClose={() => setIsDepositModalOpen(false)}
          safeId={safeId}
        />
      )}
      {isManualModalOpen && safeId && (
        <ManualSafeTransactionModal
          isOpen={isManualModalOpen}
          onClose={() => setIsManualModalOpen(false)}
          safeId={safeId}
        />
      )}
    </div>
  );
}
```

## File: src/features/finance/schemas/financeSchemas.ts
```typescript
import { z } from "zod";
import { BaseFilters } from "@/shared/types/pagination";
export interface FinanceFilters extends BaseFilters {
  startDate?: string;
  endDate?: string;
  type?: number;
}
export type DrawerTransactionType = 1 | 2;
export type DrawerTransactionCategory = 1 | 2 | 3 | 4 | 5;
export type PaymentSource = 1 | 2;
export type GlobalTransactionCategory = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
export type PaymentSourcePolicy = 1 | 2 | 3;
export const openSessionSchema = z.object({
  openingBalance: z.number().min(0),
  type: z.number().optional()
});
export type OpenSessionRequest = z.infer<typeof openSessionSchema>;
export const addManualTransactionSchema = z.object({
  type: z.number(),
  category: z.number(),
  amount: z.number().min(0.01, "المبلغ يجب أن يكون أكبر من 0"),
  notes: z.string().optional(),
  source: z.string().optional(),
});
export type AddManualTransactionRequest = z.infer<typeof addManualTransactionSchema>;
export interface DrawerTransactionResponse {
  id: string;
  type: DrawerTransactionType;
  category: DrawerTransactionCategory;
  amount: number;
  balance: number;
  source?: string;
  notes?: string;
  createdAt: string;
  userId: string;
}
export interface DrawerSessionResponse {
  id: string;
  openingBalance: number;
  openedAt: string;
  openedByUserId: string;
  isClosed: boolean;
  type: number;
  closedAt?: string;
  totalIncome?: number;
  totalExpense?: number;
  closingBalance?: number;
  totalProfit?: number;
  transactions: DrawerTransactionResponse[];
}
export const createSafeSchema = z.object({
  name: z.string().min(1),
  isMain: z.boolean(),
  initialBalance: z.number().min(0),
});
export type CreateSafeRequest = z.infer<typeof createSafeSchema>;
export const receiveDrawerDepositSchema = z.object({
  drawerSessionId: z.string().min(1),
  amount: z.number().min(0.01),
  notes: z.string().optional(),
});
export type ReceiveDrawerDepositRequest = z.infer<typeof receiveDrawerDepositSchema>;
export const addManualSafeTransactionSchema = z.object({
  type: z.number(),
  category: z.number(),
  amount: z.number().min(0.01),
  notes: z.string().optional(),
});
export type AddManualSafeTransactionRequest = z.infer<typeof addManualSafeTransactionSchema>;
export interface SafeResponse {
  id: string;
  name: string;
  balance: number;
  isMain: boolean;
}
export interface SafeTransactionResponse {
  id: string;
  safeId: string;
  transactionType: string;
  category: string;
  amount: number;
  balanceAfter: number;
  createdAt: string;
  notes?: string;
}
export const createExpenseCategorySchema = z.object({
  name: z.string().min(1),
});
export type CreateExpenseCategoryRequest = z.infer<typeof createExpenseCategorySchema>;
export const createExpenseSchema = z.object({
  categoryId: z.string().min(1),
  amount: z.number().min(0.01),
  paymentSource: z.number().optional(),
  notes: z.string().optional(),
});
export type CreateExpenseRequest = z.infer<typeof createExpenseSchema>;
export interface ExpenseCategoryResponse {
  id: string;
  name: string;
}
export interface ExpenseResponse {
  id: string;
  categoryId: string;
  categoryName: string;
  amount: number;
  paymentSource: string;
  expenseDate: string;
  notes?: string;
}
export const createOwnerTransactionSchema = z.object({
  category: z.number(),
  amount: z.number().min(0.01),
  paymentSource: z.number(),
  notes: z.string().optional(),
});
export type CreateOwnerTransactionRequest = z.infer<typeof createOwnerTransactionSchema>;
export interface OwnerTransactionResponse {
  id: string;
  category: number;
  amount: number;
  paymentSource: number;
  notes?: string;
  createdAt: string;
  createdByUserId?: string;
}
```

## File: src/features/inventory/api/InventoryApi.ts
```typescript
import { apiClient } from "@/lib/axios";
import { IInventoryRepository } from "@/core/repositories/IInventoryRepository";
import { PaginatedList } from "@/shared/types/pagination";
import {
  CategoryResponse,
  CreateProductRequest,
  DepartmentResponse,
  ProductResponse,
  ProductFilters
} from "../schemas/inventorySchemas";
export class InventoryRepository implements IInventoryRepository {
  async getCategories(departmentId?: string, filters?: ProductFilters): Promise<PaginatedList<CategoryResponse>> {
    const params = { ...filters, departmentId };
    const { data } = await apiClient.get<PaginatedList<CategoryResponse>>('/categories', { params });
    return data;
  }
  async createCategory(reqData: { name: string; departmentId: string }): Promise<string> {
    const { data } = await apiClient.post<string>('/categories', reqData);
    return data;
  }
  async updateCategory(id: string, reqData: { name: string; departmentId: string }): Promise<void> {
    await apiClient.put(`/categories/${id}`, reqData);
  }
  async deleteCategory(id: string): Promise<void> {
    await apiClient.delete(`/categories/${id}`);
  }
  async getDepartments(filters?: ProductFilters): Promise<PaginatedList<DepartmentResponse>> {
    const { data } = await apiClient.get<PaginatedList<DepartmentResponse>>('/departments', { params: filters });
    return data;
  }
  async createDepartment(reqData: { name: string }): Promise<string> {
    const { data } = await apiClient.post<string>('/departments', reqData);
    return data;
  }
  async updateDepartment(id: string, reqData: { name: string }): Promise<void> {
    await apiClient.put(`/departments/${id}`, reqData);
  }
  async deleteDepartment(id: string): Promise<void> {
    await apiClient.delete(`/departments/${id}`);
  }
  async getProducts(filters: ProductFilters): Promise<PaginatedList<ProductResponse>> {
    const { data } = await apiClient.get<PaginatedList<ProductResponse>>('/products', { params: filters });
    return data;
  }
  async getProduct(id: string): Promise<ProductResponse> {
    const { data } = await apiClient.get<ProductResponse>(`/products/${id}`);
    return data;
  }
  async createProduct(reqData: CreateProductRequest): Promise<string> {
    const formData = new FormData();
    if (reqData.barcode) formData.append('Barcode', reqData.barcode);
    if (reqData.name) formData.append('Name', reqData.name);
    if (reqData.departmentId) formData.append('DepartmentId', reqData.departmentId);
    if (reqData.categoryId) formData.append('CategoryId', reqData.categoryId);
    formData.append('MinQuantityAlert', reqData.minQuantityAlert.toString());
    if (reqData.storageLocation) formData.append('StorageLocation', reqData.storageLocation);
    if (reqData.image instanceof File) {
      formData.append('Image', reqData.image);
    }
    if (reqData.properties) {
      Object.entries(reqData.properties).forEach(([key, value], index) => {
        formData.append(`Properties[${index}].Key`, key);
        formData.append(`Properties[${index}].Value`, value as string);
      });
    }
    const { data } = await apiClient.post<string>('/products', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data;
  }
  async updateProduct(id: string, reqData: CreateProductRequest): Promise<void> {
    const formData = new FormData();
    if (reqData.barcode) formData.append('Barcode', reqData.barcode);
    if (reqData.name) formData.append('Name', reqData.name);
    if (reqData.departmentId) formData.append('DepartmentId', reqData.departmentId);
    if (reqData.categoryId) formData.append('CategoryId', reqData.categoryId);
    formData.append('MinQuantityAlert', reqData.minQuantityAlert.toString());
    if (reqData.storageLocation) formData.append('StorageLocation', reqData.storageLocation);
    if (reqData.image instanceof File) {
      formData.append('Image', reqData.image);
    }
    if (reqData.properties) {
      Object.entries(reqData.properties).forEach(([key, value], index) => {
        formData.append(`Properties[${index}].Key`, key);
        formData.append(`Properties[${index}].Value`, value as string);
      });
    }
    await apiClient.put(`/products/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }
  async deleteProduct(id: string): Promise<void> {
    await apiClient.delete(`/products/${id}`);
  }
}
export const inventoryRepository = new InventoryRepository();
```

## File: src/features/inventory/components/AddProductForm.tsx
```typescript
import { useForm, useWatch, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { useDepartments, useCategories } from '@/features/inventory/hooks/useInventory';
import { tokens } from '@/shared/styles/tokens';
import { Plus, Trash2 } from 'lucide-react';
import { ProductResponse, createProductSchema } from '../schemas/inventorySchemas';
type ProductFormValues = z.infer<typeof createProductSchema>;
interface AddProductFormProps {
  onSubmit: (data: ProductFormValues) => void;
  isSubmitting: boolean;
  initialData?: ProductResponse;
}
export function AddProductForm({ onSubmit, initialData, isSubmitting: _ }: AddProductFormProps) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductSchema),
    defaultValues: initialData ? {
      name: initialData.name,
      barcode: initialData.barcode || '',
      categoryId: initialData.category?.categoryId || '',
      departmentId: initialData.department?.departmentId || '',
      minQuantityAlert: initialData.minQuantityAlert,
      storageLocation: initialData.storageLocation || '',
      usage: initialData.usage || 3,
      propertiesList: Object.entries(initialData.properties || {}).map(([key, value]) => ({ key, value: value as string }))
    } : { minQuantityAlert: 5, categoryId: '', departmentId: '', usage: 3, propertiesList: [] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'propertiesList'
  });
  const selectedDepartmentId = useWatch({ control, name: 'departmentId' });
  const { data: categoriesData } = useCategories(selectedDepartmentId || undefined);
  const categories = categoriesData?.items || [];
  const { data: departmentsData } = useDepartments();
  const departments = departmentsData?.items || [];
  return (
    <form id="add-product-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬ <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register('name')}
          placeholder="Ù…Ø«Ø§Ù„: Ù„Ø§Ø¨ØªÙˆØ¨ Ø¯ÙŠÙ„ XPS"
          className={tokens.input}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{String(errors.name.message)}</p>
        )}
      </div>
      {}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>Ø§Ù„Ø¨Ø§Ø±ÙƒÙˆØ¯</label>
        <div className="flex gap-2">
          <input
            type="text"
            {...register('barcode')}
            placeholder="Ø§Ø¯Ø®Ù„ Ø§Ù„Ø¨Ø§Ø±ÙƒÙˆØ¯ Ø£Ùˆ Ø§Ø³ØªØ®Ø¯Ù… Ø§Ù„Ù‚Ø§Ø±Ø¦"
            className={tokens.input}
          />
          <button
            type="button"
            className={tokens.btn.ghost}
            onClick={() => {
              const randomBarcode = Math.floor(100000000000 + Math.random() * 900000000000).toString();
              setValue('barcode', randomBarcode, { shouldValidate: true });
            }}
          >
            ØªÙˆÙ„ÙŠØ¯
          </button>
        </div>
        {errors.barcode && <p className={"text-xs text-[var(--color-danger)]"}>{String(errors.barcode.message)}</p>}
      </div>
      {}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ <span className="text-red-500">*</span>
        </label>
        <select className={tokens.input} {...register('departmentId')} onChange={(e) => {
          register('departmentId').onChange(e);
          setValue('categoryId', ''); // Reset child when parent changes
        }}>
          <option value="">Ø§Ø®ØªØ± Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ...</option>
          {departments?.map((dep) => (
            <option key={dep.departmentId} value={dep.departmentId}>
              {dep.name}
            </option>
          ))}
        </select>
        {errors.departmentId && <p className="text-red-500 text-xs mt-1">{String(errors.departmentId.message)}</p>}
      </div>
      {/* Category Select */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>Ø§Ù„Ù‚Ø³Ù… Ø§Ù„ÙØ±Ø¹ÙŠ</label>
        <select className={tokens.input} {...register('categoryId')} disabled={!selectedDepartmentId}>
          <option value="">Ø§Ø®ØªØ± Ø§Ù„Ù‚Ø³Ù… Ø§Ù„ÙØ±Ø¹ÙŠ...</option>
          {categories?.map((cat) => (
            <option key={cat.categoryId} value={cat.categoryId}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.categoryId && (
          <p className="text-red-500 text-xs mt-1">{String(errors.categoryId.message)}</p>
        )}
      </div>
      {}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          Ù†ÙˆØ¹ Ø§Ù„Ù…Ù†ØªØ¬ (Usage) <span className="text-red-500">*</span>
        </label>
        <select className={tokens.input} {...register('usage')}>
          <option value="3">Ø¨ÙŠØ¹ Ø£Ùˆ ØµÙŠØ§Ù†Ø©</option>
          <option value="1">Ø¨ÙŠØ¹ ÙÙ‚Ø·</option>
          <option value="2">ØµÙŠØ§Ù†Ø© ÙÙ‚Ø· (Ù‚Ø·Ø¹ ØºÙŠØ§Ø± Ø¯Ø§Ø®Ù„ÙŠØ©)</option>
        </select>
        {errors.usage && (
          <p className="text-red-500 text-xs mt-1">{String(errors.usage.message)}</p>
        )}
      </div>
      {}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          Ø­Ø¯ ØªÙ†Ø¨ÙŠÙ‡ Ø§Ù„ÙƒÙ…ÙŠØ© (Min Quantity Alert) <span className="text-red-500">*</span>
        </label>
        <input type="number" {...register('minQuantityAlert')} className={tokens.input} />
        <p className={tokens.font.helperText + " mt-1"}>
          Ø³ÙŠØªÙ… ØªÙ†Ø¨ÙŠÙ‡Ùƒ Ø¹Ù†Ø¯Ù…Ø§ ØªØµÙ„ ÙƒÙ…ÙŠØ© Ù‡Ø°Ø§ Ø§Ù„Ù…Ù†ØªØ¬ Ø¥Ù„Ù‰ Ù‡Ø°Ø§ Ø§Ù„Ø±Ù‚Ù…
        </p>
      </div>
      {}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>Ù…ÙƒØ§Ù† Ø§Ù„ØªØ®Ø²ÙŠÙ† (Storage Location)</label>
        <input
          type="text"
          {...register('storageLocation')}
          placeholder="Ù…Ø«Ø§Ù„: Ø§Ù„Ø±Ù A1"
          className={tokens.input}
        />
      </div>
      {}
      <div className="pt-2 border-t border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <label className={tokens.font.label}>Ø®ØµØ§Ø¦Øµ Ø¥Ø¶Ø§ÙÙŠØ© (Ø§Ø®ØªÙŠØ§Ø±ÙŠ)</label>
          <button
            type="button"
            onClick={() => append({ key: '', value: '' })}
            className="text-blue-600 text-xs font-semibold flex items-center gap-1 hover:text-blue-700 bg-blue-50 px-2 py-1 rounded-md"
          >
            <Plus size={14} /> Ø¥Ø¶Ø§ÙØ© Ø®Ø§ØµÙŠØ©
          </button>
        </div>
        {fields.length > 0 ? (
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-start">
                <div className="flex-1">
                  <input
                    {...register(`propertiesList.${index}.key`)}
                    placeholder="Ø§Ù„Ø®Ø§ØµÙŠØ© (Ù…Ø«Ø§Ù„: Ø§Ù„Ù„ÙˆÙ†)"
                    className={tokens.input}
                  />
                  {errors.propertiesList?.[index]?.key && (
                    <p className="text-red-500 text-xs mt-1">{String(errors.propertiesList[index].key?.message)}</p>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    {...register(`propertiesList.${index}.value`)}
                    placeholder="Ø§Ù„Ù‚ÙŠÙ…Ø© (Ù…Ø«Ø§Ù„: Ø£Ø­Ù…Ø±)"
                    className={tokens.input}
                  />
                  {errors.propertiesList?.[index]?.value && (
                    <p className="text-red-500 text-xs mt-1">{String(errors.propertiesList[index].value?.message)}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400">Ù„Ø§ ØªÙˆØ¬Ø¯ Ø®ØµØ§Ø¦Øµ Ù…Ø¶Ø§ÙØ©. ÙŠÙ…ÙƒÙ†Ùƒ Ø¥Ø¶Ø§ÙØ© ØªÙØ§ØµÙŠÙ„ Ù…Ø«Ù„ Ø§Ù„Ù„ÙˆÙ†ØŒ Ø§Ù„Ù…Ù‚Ø§Ø³ØŒ Ø¥Ù„Ø®.</p>
        )}
      </div>
      {/* Image Upload */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>ØµÙˆØ±Ø© Ø§Ù„Ù…Ù†ØªØ¬</label>
        <input
          type="file"
          accept="image/*"
          className={tokens.input}
          name="image"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setValue('image', file || undefined, { shouldValidate: true });
          }}
        />
        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message as string}</p>}
      </div>
    </form>
  );
}
```

## File: src/features/inventory/components/CategoryForms.tsx
```typescript
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { tokens } from '@/shared/styles/tokens';
import { DepartmentResponse } from '@/features/inventory/schemas/inventorySchemas';
export const createDepartmentSchema = z.object({
  name: z.string().min(1, "اسم القسم مطلوب"),
});
export const createCategorySchema = z.object({
  name: z.string().min(1, "اسم القسم الفرعي مطلوب"),
  departmentId: z.string().min(1, "القسم الرئيسي مطلوب"),
});
interface DepartmentFormProps {
  form: UseFormReturn<z.infer<typeof createDepartmentSchema>>;
  onSubmit: (data: z.infer<typeof createDepartmentSchema>) => void;
}
export function DepartmentForm({ form, onSubmit }: DepartmentFormProps) {
  return (
    <form id="dep-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className={tokens.font.label}>اسم القسم الرئيسي <span className="text-red-500">*</span></label>
        <input
          type="text"
          {...form.register('name')}
          className={`${tokens.input} mt-1 ${form.formState.errors.name ? 'border-red-500' : ''}`}
        />
        {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
      </div>
    </form>
  );
}
interface CategoryFormProps {
  form: UseFormReturn<z.infer<typeof createCategorySchema>>;
  departments: DepartmentResponse[];
  onSubmit: (data: z.infer<typeof createCategorySchema>) => void;
}
export function CategoryForm({ form, departments, onSubmit }: CategoryFormProps) {
  return (
    <form id="cat-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className={tokens.font.label}>القسم الرئيسي <span className="text-red-500">*</span></label>
        <select
          {...form.register('departmentId')}
          className={`${tokens.select} mt-1 ${form.formState.errors.departmentId ? 'border-red-500' : ''}`}
        >
          <option value="">-- اختر القسم الرئيسي --</option>
          {departments.map(d => (
            <option key={d.departmentId} value={d.departmentId}>{d.name}</option>
          ))}
        </select>
        {form.formState.errors.departmentId && <p className="text-red-500 text-xs mt-1">{form.formState.errors.departmentId.message}</p>}
      </div>
      <div>
        <label className={tokens.font.label}>اسم القسم الفرعي <span className="text-red-500">*</span></label>
        <input
          type="text"
          {...form.register('name')}
          className={`${tokens.input} mt-1 ${form.formState.errors.name ? 'border-red-500' : ''}`}
        />
        {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
      </div>
    </form>
  );
}
```

## File: src/features/inventory/components/DepartmentCard.tsx
```typescript
import { useState } from 'react';
import { DepartmentResponse, CategoryResponse } from '@/features/inventory/schemas/inventorySchemas';
import { Layers, Tag, Package, Plus, Edit, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import { HasPermission } from '@/features/auth/components/HasPermission';
import { Permissions } from '@/features/auth/schemas/permissions';
interface DepartmentCardProps {
  department: DepartmentResponse;
  categories: CategoryResponse[];
  onAddCategory: (depId: string) => void;
  onEditDepartment: (id: string, name: string) => void;
  onDeleteDepartment: (id: string, name: string) => void;
  onEditCategory: (id: string, name: string, depId: string) => void;
  onDeleteCategory: (id: string, name: string) => void;
}
export function DepartmentCard({
  department,
  categories,
  onAddCategory,
  onEditDepartment,
  onDeleteDepartment,
  onEditCategory,
  onDeleteCategory
}: DepartmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {}
      <div
        className={`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors ${isExpanded ? 'border-b border-gray-100 bg-gray-50' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-blue-600 transition-colors">
            {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </button>
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{department.name}</h3>
            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
              <span className="flex items-center gap-1"><Tag size={12}/> {department.categoriesCount} أقسام فرعية</span>
              <span className="flex items-center gap-1"><Package size={12}/> {department.productsCount} منتجات</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <HasPermission permission={Permissions.InventoryWrite}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onAddCategory(department.departmentId);
              }}
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1.5 rounded-lg flex items-center gap-1 mr-2"
            >
              <Plus size={16} /> إضافة قسم فرعي
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onEditDepartment(department.departmentId, department.name);
              }}
              className="text-gray-400 hover:text-blue-500 transition-colors p-2"
              title="تعديل القسم"
              aria-label="تعديل القسم"
            >
              <Edit size={18} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteDepartment(department.departmentId, department.name);
              }}
              className="text-gray-400 hover:text-red-500 transition-colors p-2"
              title="حذف القسم"
              aria-label="حذف القسم"
            >
              <Trash2 size={18} />
            </button>
          </HasPermission>
        </div>
      </div>
      {}
      {isExpanded && (
        <div className="p-4 bg-gray-50/50">
          {categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map(cat => (
                <div key={cat.categoryId} className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      <Tag size={14} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{cat.name}</p>
                      <p className="text-xs text-gray-500">{cat.productsCount} منتج</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <HasPermission permission={Permissions.InventoryWrite}>
                      <button
                        type="button"
                        onClick={() => onEditCategory(cat.categoryId, cat.name, cat.department.departmentId)}
                        className="text-gray-300 hover:text-blue-500 transition-colors p-1"
                        title="تعديل"
                        aria-label="تعديل القسم الفرعي"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDeleteCategory(cat.categoryId, cat.name)}
                        className="text-gray-300 hover:text-red-500 transition-colors p-1"
                        title="حذف"
                        aria-label="حذف القسم الفرعي"
                      >
                        <Trash2 size={16} />
                      </button>
                    </HasPermission>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex w-12 h-12 rounded-full bg-gray-100 items-center justify-center text-gray-400 mb-3">
                <Tag size={20} />
              </div>
              <p className="text-gray-500 font-medium">لا يوجد أقسام فرعية بعد</p>
              <HasPermission permission={Permissions.InventoryWrite}>
                <button
                  type="button"
                  onClick={() => onAddCategory(department.departmentId)}
                  className="text-blue-600 text-sm mt-2 font-semibold hover:underline"
                >
                  إضافة قسم فرعي جديد
                </button>
              </HasPermission>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

## File: src/features/inventory/components/ProductBatchesCard.tsx
```typescript
import { Calendar, Truck, Package, Plus, MoreHorizontal } from 'lucide-react';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
interface ProductBatchesCardProps {
  product: ProductResponse;
}
export function ProductBatchesCard({ product }: ProductBatchesCardProps) {
  const batches = product.batches || [];
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative z-10">
      {}
      <div className="p-4 pr-40 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-sm">
            <Package size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">الدفعات (Batches)</h2>
            <p className="text-xs text-gray-500 mt-0.5">تفاصيل الكميات والأسعار من الموردين</p>
          </div>
        </div>
        <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-bold text-gray-700 shadow-sm">
          إجمالي الدفعات: {batches.length}
        </div>
      </div>
      <div className="p-0 overflow-x-auto">
        <table className="w-full text-right border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-white border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider">
              <th className="px-4 py-3 font-bold w-1/4">المورد</th>
              <th className="px-4 py-3 font-bold">تاريخ الاستلام</th>
              <th className="px-4 py-3 font-bold text-center">الكمية المتاحة</th>
              <th className="px-4 py-3 font-bold text-left">سعر الشراء</th>
              <th className="px-4 py-3 font-bold text-left">سعر الجملة</th>
              <th className="px-4 py-3 font-bold text-left">سعر التجزئة</th>
              <th className="px-4 py-3 font-bold text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {batches.length > 0 ? (
              batches.map((batch) => (
                <tr key={batch.batchId} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Truck size={16} className="text-gray-400" />
                      <span className="font-bold text-gray-900 text-sm">{batch.supplierName || '---'}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={14} className="text-gray-400" />
                      <span className="font-semibold text-gray-800 text-sm">
                        {new Date(batch.dateReceived).toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full border border-emerald-100 text-xs">
                      {batch.availableQuantity}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-left font-mono font-bold text-gray-800 text-sm">
                    {batch.purchasePrice.toLocaleString()} <span className="text-gray-400 text-xs">$</span>
                  </td>
                  <td className="px-4 py-3 text-left font-mono font-bold text-amber-600 text-sm">
                    {batch.wholesalePrice.toLocaleString()} <span className="text-amber-400 text-xs">$</span>
                  </td>
                  <td className="px-4 py-3 text-left font-mono font-bold text-emerald-600 text-base">
                    {batch.retailPrice.toLocaleString()} <span className="text-emerald-400 text-xs">$</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500 text-sm">
                  لا يوجد دفعات مسجلة
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="p-3 bg-gray-50/50 border-t border-gray-100">
        <button className="w-full py-2.5 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg font-bold text-sm transition-colors border border-blue-200/50">
          <Plus size={16} />
          إضافة دفعة جديدة
        </button>
      </div>
    </div>
  );
}
```

## File: src/features/inventory/components/ProductDetailsHeader.tsx
```typescript
import { Edit, Package } from 'lucide-react';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
interface ProductDetailsHeaderProps {
  product: ProductResponse;
  onEditClick: () => void;
}
export function ProductDetailsHeader({ product, onEditClick }: ProductDetailsHeaderProps) {
  return (
    <div className="flex justify-between items-start relative z-20 h-20">
      <div className="flex items-start gap-6 relative w-full">
        {}
        <div className="w-36 absolute right-0 top-0 z-30">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center gap-2 transition-transform hover:-translate-y-1">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-32 object-contain rounded-xl"
              />
            ) : (
              <div className="w-full h-32 bg-gray-50 flex items-center justify-center rounded-xl text-gray-300">
                <Package size={48} strokeWidth={1.5} />
              </div>
            )}
            <div className="bg-gray-100 text-gray-600 font-mono text-[11px] font-bold px-2 py-1 rounded-lg w-full text-center border border-gray-200 truncate">
              # {product.barcode || '---'}
            </div>
          </div>
        </div>
        {}
        <div className="pr-40 pt-2">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">{product.name}</h1>
          <p className="text-gray-500 mt-1 font-mono text-sm font-semibold"># {product.barcode || 'بدون باركود'}</p>
        </div>
      </div>
      <div className="pt-2 shrink-0 flex items-center gap-2">
        <button
          onClick={onEditClick}
          className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm"
          title="تعديل بيانات المنتج"
        >
          <Edit size={18} />
        </button>
      </div>
    </div>
  );
}
```

## File: src/features/inventory/components/ProductFilters.tsx
```typescript
import { Search, Plus } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { useCategories, useDepartments } from '@/features/inventory/hooks/useInventory';
import { HasPermission } from '@/features/auth/components/HasPermission';
import { Permissions } from '@/features/auth/schemas/permissions';
interface ProductFiltersProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  departmentFilter: string;
  onDepartmentChange: (val: string) => void;
  categoryFilter: string;
  onCategoryChange: (val: string) => void;
  stockFilter: string;
  onStockChange: (val: string) => void;
  usageFilter: string;
  onUsageChange: (val: string) => void;
  onAddClick: () => void;
}
export function ProductFilters({
  searchTerm,
  onSearchChange,
  departmentFilter,
  onDepartmentChange,
  categoryFilter,
  onCategoryChange,
  stockFilter,
  onStockChange,
  usageFilter,
  onUsageChange,
  onAddClick,
}: ProductFiltersProps) {
  const { data: categoriesData } = useCategories();
  const { data: departmentsData } = useDepartments();
  const categories = categoriesData?.items || [];
  const departments = departmentsData?.items || [];
  return (
    <div className={`${tokens.card} p-4 flex flex-wrap gap-4 items-center justify-between bg-white shadow-sm`}>
      {}
      <div className="flex items-center gap-3 flex-1 flex-wrap">
        {}
        <div className="relative flex-1 min-w-[200px] max-w-[300px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="بحث بالاسم أو الباركود..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`${tokens.input} bg-gray-50`}
          />
        </div>
        {}
        <div className="flex items-center gap-2">
          <select
            value={departmentFilter}
            onChange={(e) => {
              onDepartmentChange(e.target.value);
            }}
            className={`${tokens.select} bg-gray-50 min-w-[140px]`}
          >
            <option value="">جميع الأقسام الرئيسية</option>
            {departments.map((dep) => (
              <option key={dep.departmentId} value={dep.departmentId}>
                {dep.name}
              </option>
            ))}
          </select>
        </div>
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={`${tokens.select} bg-gray-50 min-w-[140px]`}
          >
            <option value="">جميع الأقسام الفرعية</option>
            {categories
              .filter(cat => !departmentFilter || cat.department.departmentId === departmentFilter)
              .map((cat) => (
              <option key={cat.categoryId} value={cat.categoryId}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        {/* Stock Status Filter */}
        <div className="flex items-center gap-2">
          <select
            value={stockFilter}
            onChange={(e) => onStockChange(e.target.value)}
            className={`${tokens.select} bg-gray-50 min-w-[140px]`}
          >
            <option value="">حالة المخزون (الكل)</option>
            <option value="InStock">متوفر</option>
            <option value="LowStock">منخفض</option>
            <option value="OutOfStock">نفد المخزون</option>
          </select>
        </div>
        {}
        <div className="flex items-center gap-2">
          <select
            value={usageFilter}
            onChange={(e) => onUsageChange(e.target.value)}
            className={`${tokens.select} bg-gray-50 min-w-[140px]`}
          >
            <option value="">النوع (الكل)</option>
            <option value="1">بيع فقط</option>
            <option value="2">صيانة فقط</option>
            <option value="3">بيع أو صيانة</option>
          </select>
        </div>
      </div>
      {}
      <HasPermission permission={Permissions.InventoryWrite}>
        <button onClick={onAddClick} className={tokens.btn.primary + " flex items-center gap-2 whitespace-nowrap"}>
          <Plus size={16} />
          إضافة منتج جديد
        </button>
      </HasPermission>
    </div>
  );
}
```

## File: src/features/inventory/components/ProductNotesCard.tsx
```typescript
import { FileText } from 'lucide-react';
export function ProductNotesCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative z-10">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center justify-end gap-3 w-full">
          <h2 className="text-lg font-bold text-gray-900">ملاحظات</h2>
          <div className="text-blue-500">
            <FileText size={20} />
          </div>
        </div>
      </div>
      <div className="p-8 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 mb-4">
          <FileText size={32} />
        </div>
        <h3 className="text-lg font-bold text-gray-700">لا توجد ملاحظات على هذا المنتج</h3>
        <p className="text-gray-500 mt-1">يمكنك إضافة ملاحظات داخلية هنا</p>
      </div>
    </div>
  );
}
```

## File: src/features/inventory/components/ProductOverviewCard.tsx
```typescript
import { Info, Package, Archive, Hash, Calendar, CheckCircle2, Layers, Tag, BellRing } from 'lucide-react';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
interface ProductOverviewCardProps {
  product: ProductResponse;
}
export function ProductOverviewCard({ product }: ProductOverviewCardProps) {
  const isOutOfStock = product.totalQuantity === 0;
  const isLowStock = !isOutOfStock && product.totalQuantity <= product.minQuantityAlert;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative z-10">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center justify-end gap-3 w-full">
          <div className="text-right">
            <h2 className="text-lg font-bold text-gray-900">المعلومات الأساسية</h2>
            <p className="text-xs text-gray-500 mt-0.5">المعلومات الرئيسية للمنتج</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm">
            <Info size={20} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {}
          <div className="space-y-4">
            <InfoRow
              icon={<Package size={18} />}
              label="الكمية الإجمالية"
              value={<span className="text-emerald-700 font-bold">{product.totalQuantity}</span>}
            />
            <InfoRow
              icon={<Archive size={18} />}
              label="موقع التخزين"
              value={product.storageLocation || '---'}
            />
            <InfoRow
              icon={<Hash size={18} />}
              label="الباركود"
              value={product.barcode || '---'}
            />
            <InfoRow
              icon={<Calendar size={18} />}
              label="تاريخ الإنشاء"
              value={new Date(product.createdAt).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })}
            />
            <InfoRow
              icon={<CheckCircle2 size={18} className={isOutOfStock ? 'text-red-500' : 'text-emerald-500'} />}
              label="حالة المخزون"
              value={
                <span className={isOutOfStock ? 'text-red-600' : 'text-emerald-600'}>
                  {isOutOfStock ? 'نفد' : 'سليم'}
                </span>
              }
            />
          </div>
          {}
          <div className="space-y-4">
            <InfoRow
              icon={<Layers size={18} className="text-blue-500" />}
              label="القسم الرئيسي"
              value={
                <div className="flex flex-col text-left">
                  <span>{product.department?.name || '---'}</span>
                </div>
              }
            />
            <InfoRow
              icon={<Tag size={18} className="text-blue-500" />}
              label="القسم الفرعي"
              value={<span className="text-gray-900">{product.category?.name || '---'}</span>}
            />
            <InfoRow
              icon={<Calendar size={18} />}
              label="تاريخ الإضافة"
              value={new Date(product.createdAt).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
            />
            <InfoRow
              icon={<CheckCircle2 size={18} className={isLowStock ? 'text-amber-500' : 'text-emerald-500'} />}
              label="حالة المخزون"
              value={
                <span className={isLowStock ? 'text-amber-600' : 'text-emerald-600'}>
                  {isOutOfStock ? 'نفد المخزون' : isLowStock ? 'منخفض' : 'متوفر'}
                </span>
              }
            />
            <InfoRow
              icon={<BellRing size={18} className="text-amber-500" />}
              label="الحد الأدنى للتنبيه"
              value={<span className="text-gray-900">{product.minQuantityAlert}</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function InfoRow({ icon, label, value }: { icon: React.ReactNode, label: string, value: React.ReactNode }) {
  return (
    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center justify-between hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 shadow-sm">
          {icon}
        </div>
        <span className="text-sm font-semibold text-gray-600">{label}</span>
      </div>
      <div className="font-bold text-gray-900 text-base text-left" dir="ltr">
        {value}
      </div>
    </div>
  );
}
```

## File: src/features/inventory/components/ProductPropertiesCard.tsx
```typescript
import { Tag, Layers } from 'lucide-react';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
interface ProductPropertiesCardProps {
  product: ProductResponse;
}
export function ProductPropertiesCard({ product }: ProductPropertiesCardProps) {
  if (!product.properties || Object.keys(product.properties).length === 0) {
    return null;
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative z-10">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center justify-end gap-3 w-full">
          <div className="text-right">
            <h2 className="text-lg font-bold text-gray-900">الخصائص</h2>
            <p className="text-xs text-gray-500 mt-0.5">المواصفات والخصائص الإضافية للمنتج</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-sm">
            <Tag size={20} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(product.properties).map(([key, value]) => (
            <div key={key} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-1">{key}</p>
                <p className="text-lg font-bold text-gray-900">{value as string}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center">
                <Layers size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## File: src/features/inventory/components/ProductsTable.tsx
```typescript
import { Trash2, Package } from 'lucide-react';
import { DataTable } from '@/shared/components/ui/DataTable';
import { ProductStatusBadge } from './ProductStatusBadge';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
import { PaginatedList } from '@/shared/types/pagination';
import { HasPermission } from '@/features/auth/components/HasPermission';
import { Permissions } from '@/features/auth/schemas/permissions';
interface ProductsTableProps {
  data?: PaginatedList<ProductResponse>;
  isLoading: boolean;
  pageIndex: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onDelete?: (product: ProductResponse) => void;
  onRowClick?: (product: ProductResponse) => void;
}
export function ProductsTable({
  data,
  isLoading,
  pageIndex,
  onNextPage,
  onPrevPage,
  onDelete,
  onRowClick,
}: ProductsTableProps) {
  const columns = [
    {
      header: 'الصورة',
      cell: (row: ProductResponse) => (
        <div className="flex items-center">
          {row.imageUrl ? (
            <img src={row.imageUrl} alt={row.name} className="w-12 h-12 rounded-lg object-cover border border-gray-200 shadow-sm" />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200 text-gray-400 text-sm font-bold shadow-sm">
              {row.name ? row.name.charAt(0).toUpperCase() : '?'}
            </div>
          )}
        </div>
      ),
    },
    {
      header: 'اسم المنتج',
      cell: (row: ProductResponse) => (
        <span className="text-base font-bold text-gray-900">{row.name}</span>
      ),
    },
    {
      header: 'الباركود',
      cell: (row: ProductResponse) => (
        <span className="text-sm font-semibold text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100">
          {row.barcode || '---'}
        </span>
      ),
    },
    {
      header: 'القسم',
      cell: (row: ProductResponse) => (
        <div className="flex flex-col gap-1.5 items-start">
          {row.department?.name && (
            <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-bold border border-blue-100">
              {row.department.name}
            </span>
          )}
          <span className="bg-gray-50 text-gray-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200">
            {row.category?.name || '---'}
          </span>
        </div>
      ),
    },
    {
      header: 'النوع',
      cell: (row: ProductResponse) => {
        let label = 'غير محدد';
        let color = 'bg-gray-100 text-gray-700';
        if (row.usage === 1) {
          label = 'بيع فقط';
          color = 'bg-emerald-50 text-emerald-700 border-emerald-100';
        } else if (row.usage === 2) {
          label = 'صيانة فقط';
          color = 'bg-orange-50 text-orange-700 border-orange-100';
        } else if (row.usage === 3) {
          label = 'بيع وصيانة';
          color = 'bg-purple-50 text-purple-700 border-purple-100';
        }
        return (
          <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${color}`}>
            {label}
          </span>
        );
      },
    },
    {
      header: 'الكمية',
      cell: (row: ProductResponse) => (
        <span className="text-base font-bold text-gray-800">{row.totalQuantity}</span>
      ),
    },
    {
      header: 'الدفعات',
      cell: (row: ProductResponse) => (
        <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md border border-indigo-100 w-fit">
          <Package size={14} />
          <span className="text-sm font-bold">{row.batches?.length || 0}</span>
        </div>
      ),
    },
    {
      header: 'موقع التخزين',
      cell: (row: ProductResponse) => (
        <span className="text-sm font-semibold text-gray-700">{row.storageLocation || '---'}</span>
      ),
    },
    {
      header: 'حالة المخزون',
      cell: (row: ProductResponse) => (
        <ProductStatusBadge quantity={row.totalQuantity} reorderLevel={row.minQuantityAlert} />
      ),
    },
    {
      header: 'الإجراءات',
      cell: (row: ProductResponse) => (
        <div className="flex justify-center gap-3 text-gray-400">
          <HasPermission permission={Permissions.InventoryWrite}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(row);
              }}
              className="hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50"
              title="حذف"
              aria-label="حذف المنتج"
            >
              <Trash2 size={18} />
            </button>
          </HasPermission>
        </div>
      ),
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={data?.items || []}
      isLoading={isLoading}
      pageIndex={data?.pageNumber || pageIndex}
      totalPages={data?.totalPages || 1}
      totalCount={data?.totalCount || 0}
      pageSize={10}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onRowClick={onRowClick}
    />
  );
}
```

## File: src/features/inventory/components/ProductStatusBadge.tsx
```typescript
import { AlertTriangle } from 'lucide-react';
interface ProductStatusBadgeProps {
  quantity: number;
  reorderLevel: number;
}
export function ProductStatusBadge({ quantity, reorderLevel }: ProductStatusBadgeProps) {
  const isOutOfStock = quantity <= 0;
  const isLowStock = quantity > 0 && quantity <= reorderLevel;
  if (isOutOfStock) {
    return (
      <div className="flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-md border border-red-100 w-fit">
        <AlertTriangle size={14} className="text-red-600" />
        <span className="text-sm font-bold">
          نفد المخزون
        </span>
      </div>
    );
  }
  if (isLowStock) {
    return (
      <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md border border-amber-200 w-fit">
        <AlertTriangle size={14} className="text-amber-600" />
        <span className="text-sm font-bold">
          مخزون منخفض
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-md border border-green-100 w-fit">
      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
      <span className="text-sm font-bold">
        متوفر
      </span>
    </div>
  );
}
```

## File: src/features/inventory/hooks/useInventory.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { inventoryRepository } from "../api/InventoryApi";
import { ProductFilters, CreateProductRequest } from "../schemas/inventorySchemas";
import { toast } from "sonner";
export const INVENTORY_KEYS = {
  categories: ["categories"] as const,
  departments: ["departments"] as const,
  products: (filters: ProductFilters) => ["products", filters] as const,
  productDetails: (id: string) => ["products", id] as const,
};
export function useCategories(departmentId?: string, filters: ProductFilters = { pageNumber: 1, pageSize: 100 }) {
  return useQuery({
    queryKey: [...INVENTORY_KEYS.categories, departmentId, filters],
    queryFn: () => inventoryRepository.getCategories(departmentId, filters),
  });
}
export function useDepartments(filters: ProductFilters = { pageNumber: 1, pageSize: 100 }) {
  return useQuery({
    queryKey: [...INVENTORY_KEYS.departments, filters],
    queryFn: () => inventoryRepository.getDepartments(filters),
  });
}
export function useProducts(filters: ProductFilters) {
  return useQuery({
    queryKey: INVENTORY_KEYS.products(filters),
    queryFn: () => inventoryRepository.getProducts(filters),
  });
}
export function useProduct(id: string) {
  return useQuery({
    queryKey: INVENTORY_KEYS.productDetails(id),
    queryFn: () => inventoryRepository.getProduct(id),
    enabled: !!id,
  });
}
export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProductRequest) => inventoryRepository.createProduct(data),
    onSuccess: () => {
      toast.success("ØªÙ… Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ù†ØªØ¬ Ø¨Ù†Ø¬Ø§Ø­!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ù†ØªØ¬"),
  });
}
export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreateProductRequest }) =>
      inventoryRepository.updateProduct(id, data),
    onSuccess: (_, { id }) => {
      toast.success("ØªÙ… ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù…Ù†ØªØ¬ Ø¨Ù†Ø¬Ø§Ø­!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.productDetails(id) });
    },
    onError: () => toast.error("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù…Ù†ØªØ¬"),
  });
}
export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryRepository.deleteProduct(id),
    onSuccess: () => {
      toast.success("ØªÙ… Ø­Ø°Ù Ø§Ù„Ù…Ù†ØªØ¬ Ø¨Ù†Ø¬Ø§Ø­!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø­Ø°Ù Ø§Ù„Ù…Ù†ØªØ¬"),
  });
}
export function useCreateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string; departmentId: string }) => inventoryRepository.createCategory(data),
    onSuccess: () => {
      toast.success("ØªÙ… Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù‚Ø³Ù… Ø§Ù„ÙØ±Ø¹ÙŠ Ø¨Ù†Ø¬Ø§Ø­!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.categories });
    },
    onError: () => toast.error("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù‚Ø³Ù… Ø§Ù„ÙØ±Ø¹ÙŠ"),
  });
}
export function useUpdateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string; departmentId: string } }) =>
      inventoryRepository.updateCategory(id, data),
    onSuccess: () => {
      toast.success("ØªÙ… ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù‚Ø³Ù… Ø§Ù„ÙØ±Ø¹ÙŠ Ø¨Ù†Ø¬Ø§Ø­!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.categories });
    },
    onError: () => toast.error("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù‚Ø³Ù… Ø§Ù„ÙØ±Ø¹ÙŠ"),
  });
}
export function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryRepository.deleteCategory(id),
    onSuccess: () => {
      toast.success("ØªÙ… Ø­Ø°Ù Ø§Ù„Ù‚Ø³Ù… Ø§Ù„ÙØ±Ø¹ÙŠ Ø¨Ù†Ø¬Ø§Ø­!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.categories });
    },
    onError: () => toast.error("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø­Ø°Ù Ø§Ù„Ù‚Ø³Ù… Ø§Ù„ÙØ±Ø¹ÙŠ"),
  });
}
export function useCreateDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string }) => inventoryRepository.createDepartment(data),
    onSuccess: () => {
      toast.success("ØªÙ… Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ Ø¨Ù†Ø¬Ø§Ø­!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.departments });
    },
    onError: () => toast.error("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ"),
  });
}
export function useUpdateDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string } }) =>
      inventoryRepository.updateDepartment(id, data),
    onSuccess: () => {
      toast.success("ØªÙ… ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ Ø¨Ù†Ø¬Ø§Ø­!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.departments });
    },
    onError: () => toast.error("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ"),
  });
}
export function useDeleteDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryRepository.deleteDepartment(id),
    onSuccess: () => {
      toast.success("ØªÙ… Ø­Ø°Ù Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ Ø¨Ù†Ø¬Ø§Ø­!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.departments });
    },
    onError: () => toast.error("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø­Ø°Ù Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ"),
  });
}
```

## File: src/features/inventory/pages/CategoriesPage.tsx
```typescript
import { useState, useMemo } from 'react';
import {
  useCategories, useDepartments,
  useCreateCategory, useCreateDepartment,
  useUpdateCategory, useUpdateDepartment,
  useDeleteCategory, useDeleteDepartment
} from '@/features/inventory/hooks/useInventory';
import { CategoryResponse } from '@/features/inventory/schemas/inventorySchemas';
import { tokens } from '@/shared/styles/tokens';
import { Layers, Tag, Plus } from 'lucide-react';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DepartmentCard } from '@/features/inventory/components/DepartmentCard';
import { DepartmentForm, CategoryForm, createDepartmentSchema, createCategorySchema } from '@/features/inventory/components/CategoryForms';
import { ConfirmModal } from '@/shared/components/ui/ConfirmModal';
export function CategoriesPage() {
  const [drawerMode, setDrawerMode] = useState<'department' | 'category'>('department');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState<{ id: string, name: string, type: 'department' | 'category' } | null>(null);
  const { data: departmentsData, isLoading: isLoadingDeps } = useDepartments();
  const { data: categoriesData, isLoading: isLoadingCats } = useCategories();
  const createDepartment = useCreateDepartment();
  const updateDepartment = useUpdateDepartment();
  const deleteDepartment = useDeleteDepartment();
  const createCategory = useCreateCategory();
  const updateCategory = useUpdateCategory();
  const deleteCategory = useDeleteCategory();
  const categoriesByDep = useMemo(() => {
    const map: Record<string, CategoryResponse[]> = {};
    if (categoriesData?.items) {
      categoriesData.items.forEach(c => {
        const depId = c.department.departmentId;
        if (!map[depId]) map[depId] = [];
        map[depId].push(c);
      });
    }
    return map;
  }, [categoriesData]);
  const depForm = useForm({
    resolver: zodResolver(createDepartmentSchema),
    defaultValues: { name: '' }
  });
  const catForm = useForm({
    resolver: zodResolver(createCategorySchema),
    defaultValues: { name: '', departmentId: '' }
  });
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setEditingId(null);
    depForm.reset({ name: '' });
    catForm.reset({ name: '', departmentId: '' });
  };
  const openAddDepartment = () => {
    setDrawerMode('department');
    setEditingId(null);
    depForm.reset({ name: '' });
    setIsDrawerOpen(true);
  };
  const openEditDepartment = (id: string, name: string) => {
    setDrawerMode('department');
    setEditingId(id);
    depForm.reset({ name });
    setIsDrawerOpen(true);
  };
  const openAddCategory = (departmentId?: string) => {
    setDrawerMode('category');
    setEditingId(null);
    catForm.reset({ departmentId: departmentId || '', name: '' });
    setIsDrawerOpen(true);
  };
  const openEditCategory = (id: string, name: string, departmentId: string) => {
    setDrawerMode('category');
    setEditingId(id);
    catForm.reset({ name, departmentId });
    setIsDrawerOpen(true);
  };
  const onDepSubmit = (data: z.infer<typeof createDepartmentSchema>) => {
    if (editingId) {
      updateDepartment.mutate({ id: editingId, data }, { onSuccess: closeDrawer });
    } else {
      createDepartment.mutate(data, { onSuccess: closeDrawer });
    }
  };
  const onCatSubmit = (data: z.infer<typeof createCategorySchema>) => {
    if (editingId) {
      updateCategory.mutate({ id: editingId, data }, { onSuccess: closeDrawer });
    } else {
      createCategory.mutate(data, { onSuccess: closeDrawer });
    }
  };
  const handleConfirmDelete = () => {
    if (!deleteInfo) return;
    if (deleteInfo.type === 'department') {
      deleteDepartment.mutate(deleteInfo.id, { onSuccess: () => setDeleteInfo(null) });
    } else {
      deleteCategory.mutate(deleteInfo.id, { onSuccess: () => setDeleteInfo(null) });
    }
  };
  const isSaving = createDepartment.isPending || updateDepartment.isPending || createCategory.isPending || updateCategory.isPending;
  const drawerFooter = (
    <>
      <button type="button" onClick={closeDrawer} className={tokens.btn.secondary}>
        إلغاء
      </button>
      <button
        type="submit"
        form={drawerMode === 'department' ? 'dep-form' : 'cat-form'}
        disabled={isSaving}
        className={tokens.btn.primary + " disabled:opacity-60"}
      >
        {isSaving ? 'جاري الحفظ...' : 'حفظ'}
      </button>
    </>
  );
  const drawerTitle = () => {
    if (drawerMode === 'department') return editingId ? 'تعديل القسم الرئيسي' : 'إضافة قسم رئيسي';
    return editingId ? 'تعديل القسم الفرعي' : 'إضافة قسم فرعي';
  };
  return (
    <div className="space-y-6">
      {}
      <div className="flex justify-end items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex gap-3">
          <button
            onClick={() => openAddCategory()}
            className={tokens.btn.secondary + " flex items-center gap-2"}
          >
            <Tag size={18} />
            قسم فرعي جديد
          </button>
          <button
            onClick={openAddDepartment}
            className={tokens.btn.primary + " flex items-center gap-2"}
          >
            <Layers size={18} />
            قسم رئيسي جديد
          </button>
        </div>
      </div>
      {}
      {(isLoadingDeps || isLoadingCats) && (
        <div className="p-8 text-center text-gray-500">جاري تحميل الأقسام...</div>
      )}
      {}
      <div className="space-y-4">
        {departmentsData?.items.map((dep) => (
          <DepartmentCard
            key={dep.departmentId}
            department={dep}
            categories={categoriesByDep[dep.departmentId] || []}
            onAddCategory={openAddCategory}
            onEditDepartment={openEditDepartment}
            onDeleteDepartment={(id, name) => setDeleteInfo({ id, name, type: 'department' })}
            onEditCategory={openEditCategory}
            onDeleteCategory={(id, name) => setDeleteInfo({ id, name, type: 'category' })}
          />
        ))}
        {departmentsData?.items && departmentsData.items.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="inline-flex w-16 h-16 rounded-full bg-blue-50 items-center justify-center text-blue-500 mb-4">
              <Layers size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">لا يوجد أي أقسام رئيسية</h3>
            <p className="text-gray-500 mb-4">ابدأ بإضافة قسم رئيسي لتتمكن من تنظيم منتجاتك</p>
            <button
              onClick={openAddDepartment}
              className={tokens.btn.primary + " inline-flex items-center gap-2"}
            >
              <Plus size={18} />
              إضافة قسم رئيسي
            </button>
          </div>
        )}
      </div>
      {}
      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title={drawerTitle()}
        footer={drawerFooter}
      >
        {drawerMode === 'department' ? (
          <DepartmentForm form={depForm} onSubmit={onDepSubmit} />
        ) : (
          <CategoryForm
            form={catForm}
            departments={departmentsData?.items || []}
            onSubmit={onCatSubmit}
          />
        )}
      </RightDrawer>
      {}
      <ConfirmModal
        isOpen={!!deleteInfo}
        onClose={() => setDeleteInfo(null)}
        onConfirm={handleConfirmDelete}
        title={deleteInfo?.type === 'department' ? 'حذف قسم رئيسي' : 'حذف قسم فرعي'}
        message={
          <>
            هل أنت متأكد من رغبتك في حذف <strong>{deleteInfo?.name}</strong>؟<br />
            لا يمكن التراجع عن هذا الإجراء بعد تنفيذه.
          </>
        }
        confirmText="نعم، احذف"
        cancelText="إلغاء"
        type="danger"
        isLoading={deleteDepartment.isPending || deleteCategory.isPending}
      />
    </div>
  );
}
```

## File: src/features/inventory/pages/ProductDetailsPage.tsx
```typescript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as z from 'zod';
import { useProduct, useUpdateProduct } from '@/features/inventory/hooks/useInventory';
import { createProductSchema, CreateProductRequest } from '@/features/inventory/schemas/inventorySchemas';
import { tokens } from '@/shared/styles/tokens';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { AddProductForm } from '@/features/inventory/components/AddProductForm';
import { ProductDetailsHeader } from '@/features/inventory/components/ProductDetailsHeader';
import { ProductBatchesCard } from '@/features/inventory/components/ProductBatchesCard';
import { ProductPropertiesCard } from '@/features/inventory/components/ProductPropertiesCard';
import { ProductOverviewCard } from '@/features/inventory/components/ProductOverviewCard';
import { ProductNotesCard } from '@/features/inventory/components/ProductNotesCard';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { setTitle, setBackButton } = useHeaderStore();
  const { data: product, isLoading, error } = useProduct(id!);
  const updateProduct = useUpdateProduct();
  useEffect(() => {
    if (product) {
      setTitle(`تفاصيل المنتج: ${product.name}`);
    } else {
      setTitle('تفاصيل المنتج');
    }
    setBackButton(true, "/inventory/products");
  }, [product, setTitle, setBackButton]);
  if (isLoading) return <div className="p-8 text-center text-gray-500">جاري تحميل تفاصيل المنتج...</div>;
  if (error || !product) return <div className="p-8 text-center text-red-500">حدث خطأ أثناء تحميل تفاصيل المنتج.</div>;
  const closeDrawer = () => setIsDrawerOpen(false);
  const handleFormSubmit = (formData: z.infer<typeof createProductSchema>) => {
    const payload: CreateProductRequest = {
      name: formData.name,
      departmentId: formData.departmentId,
      categoryId: formData.categoryId,
      minQuantityAlert: formData.minQuantityAlert,
      usage: formData.usage || 3,
      barcode: formData.barcode || undefined,
      storageLocation: formData.storageLocation || undefined,
    };
    if (formData.image) {
      payload.image = formData.image;
    }
    if (formData.propertiesList && formData.propertiesList.length > 0) {
      payload.properties = {};
      formData.propertiesList.forEach((p: { key: string; value: string }) => {
        if (p.key && p.value) {
          payload.properties![p.key] = p.value;
        }
      });
    }
    updateProduct.mutate({ id: id!, data: payload }, { onSuccess: closeDrawer });
  };
  const drawerFooter = (
    <>
      <button type="button" onClick={closeDrawer} className={tokens.btn.secondary}>
        إلغاء
      </button>
      <button
        type="submit"
        form="add-product-form"
        disabled={updateProduct.isPending}
        className={tokens.btn.primary + " disabled:opacity-60"}
      >
        {updateProduct.isPending ? 'جاري الحفظ...' : 'حفظ التعديلات'}
      </button>
    </>
  );
  return (
    <div className="space-y-4 w-full pb-10 pt-4">
      <ProductDetailsHeader product={product} onEditClick={() => setIsDrawerOpen(true)} />
      <ProductBatchesCard product={product} />
      <ProductPropertiesCard product={product} />
      <ProductOverviewCard product={product} />
      <ProductNotesCard />
      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title="تعديل بيانات المنتج"
        footer={drawerFooter}
      >
        <AddProductForm
          onSubmit={handleFormSubmit}
          isSubmitting={updateProduct.isPending}
          initialData={product}
        />
      </RightDrawer>
    </div>
  );
}
```

## File: src/features/inventory/pages/ProductsPage.tsx
```typescript
import { useState } from 'react';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { createProductSchema, CreateProductRequest } from '../schemas/inventorySchemas';
import { useProducts, useCreateProduct, useDeleteProduct } from '@/features/inventory/hooks/useInventory';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { ConfirmModal } from '@/shared/components/ui/ConfirmModal';
import { ProductFilters } from '@/features/inventory/components/ProductFilters';
import { ProductsTable } from '@/features/inventory/components/ProductsTable';
import { AddProductForm } from '@/features/inventory/components/AddProductForm';
import { tokens } from '@/shared/styles/tokens';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
export function ProductsPage() {
  const [pageIndex, setPageIndex]         = useState(1);
  const [searchTerm, setSearchTerm]       = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [stockFilter, setStockFilter]       = useState('');
  const [usageFilter, setUsageFilter]       = useState('');
  const [isDrawerOpen, setIsDrawerOpen]   = useState(false);
  const [productToDelete, setProductToDelete] = useState<ProductResponse | null>(null);
  const navigate                          = useNavigate();
  const { data, isLoading }  = useProducts({
    pageNumber: pageIndex,
    pageSize: 10,
    searchValue: searchTerm || undefined,
    departmentId: departmentFilter || undefined,
    categoryId: categoryFilter || undefined,
    stockStatus: stockFilter || undefined,
    usage: usageFilter ? Number(usageFilter) : undefined,
  });
  const createProduct        = useCreateProduct();
  const deleteProduct        = useDeleteProduct();
  const closeDrawer = () => setIsDrawerOpen(false);
  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setPageIndex(1);
  };
  const handleDepartmentChange = (val: string) => {
    setDepartmentFilter(val);
    setCategoryFilter('');
    setPageIndex(1);
  };
  const handleCategoryChange = (val: string) => {
    setCategoryFilter(val);
    setPageIndex(1);
  };
  const handleStockChange = (val: string) => {
    setStockFilter(val);
    setPageIndex(1);
  };
  const handleUsageChange = (val: string) => {
    setUsageFilter(val);
    setPageIndex(1);
  };
  const handleDeleteConfirm = () => {
    if (productToDelete) {
      deleteProduct.mutate(productToDelete.productId, {
        onSuccess: () => setProductToDelete(null),
      });
    }
  };
  const handleFormSubmit = (formData: z.infer<typeof createProductSchema>) => {
    // We must send `CreateProductRequest` format (some fields differ from form schema)
    const payload: CreateProductRequest = {
      name: formData.name,
      departmentId: formData.departmentId,
      categoryId: formData.categoryId,
      minQuantityAlert: formData.minQuantityAlert,
      usage: formData.usage || 3,
      barcode: formData.barcode,
      storageLocation: formData.storageLocation,
    };
    if (formData.image) {
      payload.image = formData.image;
    }
    // Convert propertiesList array to properties Record<string, string>
    if (formData.propertiesList && formData.propertiesList.length > 0) {
      payload.properties = {};
      formData.propertiesList.forEach((p: { key: string; value: string }) => {
        if (p.key && p.value) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          payload.properties![p.key] = p.value;
        }
      });
    }
    createProduct.mutate(payload, { onSuccess: closeDrawer });
  };
  const drawerFooter = (
    <>
      <button type="button" onClick={closeDrawer} className={tokens.btn.secondary}>
        إلغاء
      </button>
      <button
        type="submit"
        form="add-product-form"
        disabled={createProduct.isPending}
        className={tokens.btn.primary + " disabled:opacity-60"}
      >
        {createProduct.isPending ? 'جاري الحفظ...' : 'حفظ المنتج'}
      </button>
    </>
  );
  return (
    <div className="space-y-4">
      {/* Filter toolbar */}
      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        departmentFilter={departmentFilter}
        onDepartmentChange={handleDepartmentChange}
        categoryFilter={categoryFilter}
        onCategoryChange={handleCategoryChange}
        stockFilter={stockFilter}
        onStockChange={handleStockChange}
        usageFilter={usageFilter}
        onUsageChange={handleUsageChange}
        onAddClick={() => setIsDrawerOpen(true)}
      />
      {/* Data table */}
      <ProductsTable
        data={data}
        isLoading={isLoading}
        pageIndex={pageIndex}
        onNextPage={() => setPageIndex((p) => p + 1)}
        onPrevPage={() => setPageIndex((p) => p - 1)}
        onRowClick={(row) => navigate(`/inventory/products/${row.productId}`)}
        onDelete={(row) => setProductToDelete(row)}
      />
      <ConfirmModal
        isOpen={!!productToDelete}
        title="تأكيد حذف المنتج"
        message={
          productToDelete
            ? `هل أنت متأكد من حذف المنتج "${productToDelete.name}" نهائياً؟ لا يمكن التراجع عن هذه الخطوة.`
            : ''
        }
        confirmText={deleteProduct.isPending ? 'جاري الحذف...' : 'نعم، احذف'}
        cancelText="إلغاء"
        onConfirm={handleDeleteConfirm}
        onClose={() => setProductToDelete(null)}
        type="danger"
      />
      {}
      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title="إضافة منتج جديد"
        footer={drawerFooter}
      >
        <AddProductForm
          onSubmit={handleFormSubmit}
          isSubmitting={createProduct.isPending}
        />
      </RightDrawer>
    </div>
  );
}
```

## File: src/features/inventory/schemas/inventorySchemas.ts
```typescript
import { z } from "zod";
import { BaseFilters } from "@/shared/types/pagination";
export enum ProductUsageDto {
  SaleOnly = 1,
  MaintenanceOnly = 2,
  SaleAndMaintenance = 3
}
export interface ProductFilters extends BaseFilters {
  categoryId?: string;
  departmentId?: string;
  stockStatus?: string;
  usage?: ProductUsageDto;
  excludeUsage?: ProductUsageDto;
}
export interface CategoryResponse {
  categoryId: string;
  name: string;
  department: DepartmentSummary;
  productsCount: number;
  createdAt: string;
}
export interface DepartmentResponse {
  departmentId: string;
  name: string;
  categoriesCount: number;
  productsCount: number;
  createdAt: string;
}
export const createDepartmentSchema = z.object({
  name: z.string().min(1, "اسم القسم الرئيسي مطلوب"),
});
export type CreateDepartmentRequest = z.infer<typeof createDepartmentSchema>;
export const createCategorySchema = z.object({
  name: z.string().min(1, "اسم القسم الفرعي مطلوب"),
  departmentId: z.string().min(1, "يجب اختيار القسم الرئيسي"),
});
export type CreateCategoryRequest = z.infer<typeof createCategorySchema>;
export const createProductSchema = z.object({
  barcode: z.string().optional(),
  name: z.string().min(1, "اسم المنتج مطلوب"),
  departmentId: z.string().min(1, "القسم الفرعي مطلوب"),
  categoryId: z.string().min(1, "القسم الرئيسي مطلوب"),
  image: z.instanceof(File, { message: "يجب أن يكون ملفًا" }).optional(),
  minQuantityAlert: z.coerce.number().min(0, "يجب أن تكون 0 أو أكثر"),
  storageLocation: z.string().optional(),
  usage: z.coerce.number().default(ProductUsageDto.SaleAndMaintenance),
  propertiesList: z.array(z.object({
    key: z.string().min(1, "الاسم مطلوب"),
    value: z.string().min(1, "القيمة مطلوبة")
  })).optional()
});
export type CreateProductRequest = z.infer<typeof createProductSchema> & {
  properties?: Record<string, string>;
};
export interface DepartmentSummary {
  departmentId: string;
  name: string;
}
export interface CategorySummary {
  categoryId: string;
  name: string;
}
export interface ProductBatchResponse {
  batchId: string;
  supplierId?: string;
  supplierName?: string;
  availableQuantity: number;
  purchasePrice: number;
  wholesalePrice: number;
  retailPrice: number;
  maintenancePrice: number;
  dateReceived: string;
}
export interface ProductResponse {
  productId: string;
  barcode?: string;
  name?: string;
  department: DepartmentSummary;
  category: CategorySummary;
  totalQuantity: number;
  imageUrl?: string;
  minQuantityAlert: number;
  storageLocation?: string;
  isOutOfStock: boolean;
  isLowStock: boolean;
  createdAt: string;
  usage: ProductUsageDto;
  properties: Record<string, string>;
  batches: ProductBatchResponse[];
}
export function isMaintenanceProduct(usage?: ProductUsageDto): boolean {
  return usage === ProductUsageDto.MaintenanceOnly || usage === ProductUsageDto.SaleAndMaintenance;
}
```

## File: src/features/maintenance/api/MaintenanceApi.ts
```typescript
import { apiClient } from '@/lib/axios';
import {
  CreateMaintenanceRequest,
  UpdateMaintenanceRequest,
  MaintenanceResponse,
  MaintenanceSummary,
} from '../schemas/maintenanceSchemas';
import { PaginatedList, BaseFilters } from '@/shared/types/pagination';
export interface MaintenanceFilters extends BaseFilters {
  status?: string;
}
export class MaintenanceRepository {
  async getAll(filters?: MaintenanceFilters): Promise<PaginatedList<MaintenanceSummary>> {
    const { data } = await apiClient.get<PaginatedList<MaintenanceSummary>>('/maintenance', { params: filters });
    return data;
  }
  async getById(id: string): Promise<MaintenanceResponse> {
    const { data } = await apiClient.get<MaintenanceResponse>('/maintenance/' + id);
    return data;
  }
  async create(req: CreateMaintenanceRequest): Promise<MaintenanceResponse> {
    const { data } = await apiClient.post<MaintenanceResponse>('/maintenance', req);
    return data;
  }
  async update(id: string, req: UpdateMaintenanceRequest): Promise<MaintenanceResponse> {
    const { data } = await apiClient.put<MaintenanceResponse>('/maintenance/' + id, req);
    return data;
  }
  async deliver(id: string): Promise<MaintenanceResponse> {
    const { data } = await apiClient.post<MaintenanceResponse>('/maintenance/' + id + '/deliver');
    return data;
  }
  async returnMaintenance(id: string): Promise<MaintenanceResponse> {
    const { data } = await apiClient.post<MaintenanceResponse>('/maintenance/' + id + '/return');
    return data;
  }
}
export const maintenanceApi = new MaintenanceRepository();
```

## File: src/features/maintenance/api/queries.ts
```typescript
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { maintenanceApi, MaintenanceFilters } from './MaintenanceApi';
import { CreateMaintenanceRequest, UpdateMaintenanceRequest } from '../schemas/maintenanceSchemas';
import { toast } from 'sonner';
export const maintenanceKeys = {
  all: ['maintenance'] as const,
  lists: () => [...maintenanceKeys.all, 'list'] as const,
  list: (filters?: MaintenanceFilters) => [...maintenanceKeys.lists(), filters] as const,
  details: () => [...maintenanceKeys.all, 'detail'] as const,
  detail: (id: string) => [...maintenanceKeys.details(), id] as const,
};
export function useMaintenanceList(filters?: MaintenanceFilters) {
  return useQuery({
    queryKey: maintenanceKeys.list(filters),
    queryFn: () => maintenanceApi.getAll(filters),
  });
}
export function useMaintenanceDetail(id: string | null) {
  return useQuery({
    queryKey: maintenanceKeys.detail(id ?? ''),
    queryFn: () => maintenanceApi.getById(id!),
    enabled: !!id,
  });
}
export function useCreateMaintenance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateMaintenanceRequest) => maintenanceApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.lists() });
      toast.success('تم فتح تذكرة الصيانة بنجاح');
    },
    onError: () => toast.error('حدث خطأ أثناء الإنشاء'),
  });
}
export function useUpdateMaintenance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateMaintenanceRequest }) =>
      maintenanceApi.update(id, data),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.lists() });
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.detail(variables.id) });
      toast.success('تم حفظ التعديلات بنجاح');
    },
    onError: () => toast.error('حدث خطأ أثناء التعديل'),
  });
}
export function useDeliverMaintenance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => maintenanceApi.deliver(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.lists() });
      toast.success('تم تسليم الجهاز بنجاح ✅');
    },
    onError: (err: any) => {
      const msg = err?.response?.data?.description ?? 'حدث خطأ أثناء التسليم';
      toast.error(msg);
    },
  });
}
export function useReturnMaintenance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => maintenanceApi.returnMaintenance(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.lists() });
      toast.success('تم إرجاع الجهاز بدون إصلاح');
    },
    onError: () => toast.error('حدث خطأ'),
  });
}
```

## File: src/features/maintenance/components/MaintenanceDetailDrawer.tsx
```typescript
import { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateMaintenanceSchema, UpdateMaintenanceRequest, } from '../schemas/maintenanceSchemas';
import { useMaintenanceDetail, useUpdateMaintenance, useDeliverMaintenance, useReturnMaintenance} from '../api/queries';
import { useProducts } from '@/features/inventory/hooks/useInventory';
import { RightDrawer as Drawer } from '@/shared/components/ui/RightDrawer';
import { Input } from '@/shared/components/ui/Input';
import { tokens } from '@/shared/styles/tokens';
import { Save, CheckCircle, RotateCcw, Plus, Minus } from 'lucide-react';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { isMaintenanceProduct } from '@/features/inventory/schemas/inventorySchemas';
import { toast } from 'sonner';
import { MaintenanceProductPicker } from './MaintenanceProductPicker';
interface Props {
  id: string | null;
  onClose: () => void;
}
export function MaintenanceDetailDrawer({ id, onClose }: Props) {
  const { data: ticket, isLoading } = useMaintenanceDetail(id);
  const { mutate: updateTicket, isPending: isUpdating } = useUpdateMaintenance();
  const { mutate: deliverTicket, isPending: isDelivering } = useDeliverMaintenance();
  const { mutate: returnTicket, isPending: isReturning } = useReturnMaintenance();
const [isPickerOpen, setIsPickerOpen] = useState(false);
  const { data: productsData } = useProducts({ pageSize: 1000 });
  const maintenanceProducts = productsData?.items.filter(
    p => isMaintenanceProduct(p.usage)
  ) || [];
  const { register, control, handleSubmit, reset, watch, formState: { isDirty } } = useForm<UpdateMaintenanceRequest>({
    resolver: zodResolver(updateMaintenanceSchema) as any
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'productsUsed'
  });
  useEffect(() => {
    if (ticket) {
      reset({
        customerName: ticket.customerName,
        customerPhone: ticket.customerPhone || '',
        customerId: ticket.customerId || '',
        deviceDescription: ticket.deviceDescription || '',
        problem: ticket.problem || '',
        solution: ticket.solution || '',
        servicePrice: ticket.servicePrice,
        paidAmount: ticket.paidAmount,
        deliveryDate: ticket.deliveryDate ? ticket.deliveryDate.slice(0, 16) : '',
        productsUsed: ticket.productsUsed.map(p => ({
          productId: p.productId,
          quantity: p.quantity,
          maintenancePrice: p.maintenancePrice
        }))
      });
    }
  }, [ticket, reset]);
  const watchProductsUsed = watch('productsUsed') || [];
  const watchServicePrice = watch('servicePrice') || 0;
  const totalParts = watchProductsUsed.reduce((acc, curr) => acc + ((curr.maintenancePrice || 0) * (curr.quantity || 0)), 0);
  const currentTotal = Number(watchServicePrice) + totalParts;
  const currentPaid = watch('paidAmount') || 0;
  const remaining = currentTotal - currentPaid;
  const onSubmit = (data: UpdateMaintenanceRequest) => {
    if (!id) return;
    if (!data.deliveryDate) delete data.deliveryDate;
    updateTicket({ id, data }, {
      onSuccess: () => toast.success('ØªÙ… Ø§Ù„Ø­ÙØ¸ Ø¨Ù†Ø¬Ø§Ø­')
    });
  };
  const handleDeliver = () => {
    if (!id) return;
    if (window.confirm(`Ù‡Ù„ Ø£Ù†Øª Ù…ØªØ£ÙƒØ¯ Ù…Ù† تسليم Ø§Ù„Ø¬Ù‡Ø§Ø²ØŸ\nØ³ÙŠØªÙ… Ø³Ø­Ø¨ Ù‚Ø·Ø¹ Ø§Ù„ØºÙŠØ§Ø± Ù…Ù† Ø§Ù„Ù…Ø®Ø²Ù†ØŒ ÙˆØ¥Ø¶Ø§ÙØ© Ø§Ù„Ù…ØªØ¨Ù‚ÙŠ (${remaining} Ø¬.Ù…) Ù„Ù„Ø¯Ø±Ø¬.`)) {
      deliverTicket(id, { onSuccess: onClose });
    }
  };
  const handleReturn = () => {
    if (!id) return;
    if (window.confirm('هل أنت متأكد من إرجاع الجهاز بدون إصلاح؟')) {
      returnTicket(id, { onSuccess: onClose });
    }
  };
if (!id) return null;
  return (
    <Drawer
      isOpen={!!id}
      onClose={onClose}
      title={`ØªÙØ§ØµÙŠÙ„ Ø§Ù„ØµÙŠØ§Ù†Ø©`}
      width="w-[700px] max-w-full"
    >
      {isLoading ? (
        <PageLoader />
      ) : !ticket ? (
        <div className="p-5 text-red-500">Ø­Ø¯Ø« Ø®Ø·Ø£ ÙÙŠ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØªØ°ÙƒØ±Ø©</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit as any)} className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {}
            <div className={`p-4 rounded-xl flex items-center justify-between ${
              ticket.status === 'Pending' ? 'bg-yellow-50 text-yellow-800 border border-yellow-200' :
              ticket.status === 'Delivered' ? 'bg-green-50 text-green-800 border border-green-200' :
              'bg-red-50 text-red-800 border border-red-200'
            }`}>
              <div className="font-bold text-lg">
                Ø§Ù„Ø­Ø§Ù„Ø©: {ticket.status === 'Pending' ? 'Ù‚ÙŠØ¯ Ø§Ù„Ø§Ù†ØªØ¸Ø§Ø±' : ticket.status === 'Delivered' ? 'ØªÙ… Ø§Ù„تسليم' : 'Ù…Ø±ØªØ¬Ø¹'}
              </div>
              <div className="text-sm opacity-80">
                ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡: {new Date(ticket.createdAt).toLocaleDateString('ar-EG')}
              </div>
            </div>
            {}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-4">
              <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø¹Ù…ÙŠÙ„ ÙˆØ§Ù„Ø¬Ù‡Ø§Ø²</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ø§Ø³Ù… Ø§Ù„Ø¹Ù…ÙŠÙ„ *</label>
                  <Input {...register('customerName')}  disabled={ticket.status !== 'Pending'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ</label>
                  <Input {...register('customerPhone')}  disabled={ticket.status !== 'Pending'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ø§Ø³Ù… Ø§Ù„Ø¬Ù‡Ø§Ø² / Ø§Ù„Ù…ÙˆØ¯ÙŠÙ„</label>
                  <Input {...register('deviceDescription')}  disabled={ticket.status !== 'Pending'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ù…ÙˆØ¹Ø¯ Ø§Ù„تسليم</label>
                  <Input type="datetime-local" {...register('deliveryDate')}  disabled={ticket.status !== 'Pending'} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ø§Ù„Ù…Ø´ÙƒÙ„Ø© (Ù…Ù† Ø§Ù„Ø¹Ù…ÙŠÙ„)</label>
                  <textarea {...register('problem')} className={tokens.input + " min-h-[80px] py-2 resize-y"} disabled={ticket.status !== 'Pending'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ø§Ù„Ø­Ù„ / Ø§Ù„ØªÙ‚Ø±ÙŠØ± Ø§Ù„ÙÙ†ÙŠ</label>
                  <textarea {...register('solution')} className={tokens.input + " min-h-[80px] py-2 resize-y"} disabled={ticket.status !== 'Pending'} />
                </div>
              </div>
            </div>
            {}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
                <h3 className="font-bold text-gray-800">قطع الغيار المستخدمة</h3>
                {ticket.status === 'Pending' && (
                  <button type="button" onClick={() => setIsPickerOpen(true)} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-medium bg-blue-50 px-3 py-1.5 rounded-lg">
                    <Plus className="w-4 h-4" /> Ø¥Ø¶Ø§ÙØ© Ù‚Ø·Ø¹Ø©
                  </button>
                )}
              </div>
              <div className="space-y-3">
                {fields.length === 0 ? (
                  <p className="text-gray-400 text-sm text-center py-4">Ù„Ù… ÙŠØªÙ… Ø¥Ø¶Ø§ÙØ© Ù‚Ø·Ø¹ ØºÙŠØ§Ø±</p>
                ) : (
                  fields.map((field, index) => {
                    const pId = watchProductsUsed[index]?.productId;
                    const prodName = maintenanceProducts.find(p => p.productId === pId)?.name || 'Ù‚Ø·Ø¹Ø© ØºÙŠØ§Ø±';
                    return (
                      <div key={field.id} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                        <div className="flex-1">
                          <label className="block text-xs font-medium text-gray-600 mb-1">Ø§Ù„Ù…Ù†ØªØ¬</label>
                          <div className="font-bold text-sm text-gray-800 bg-gray-50/50 border border-gray-100 rounded-lg px-3 py-2">
                            {prodName}
                          </div>
                        </div>
                        <div className="w-24">
                          <label className="block text-xs font-medium text-gray-600 mb-1">Ø§Ù„ÙƒÙ…ÙŠØ©</label>
                          <Input
                            type="number"
                            min="1"
                            {...register(`productsUsed.${index}.quantity`)}
                            disabled={ticket.status !== 'Pending'}
                            onFocus={(e) => e.target.select()}
                          />
                        </div>
                        <div className="w-32 bg-gray-50/50 border border-gray-100 rounded-lg p-2 text-center mt-[22px]">
                          <label className="block text-xs font-medium text-gray-500 mb-0.5">Ø³Ø¹Ø± Ø§Ù„ØµÙŠØ§Ù†Ø©</label>
                          <div className="font-bold text-emerald-600 text-sm">
                            {watchProductsUsed[index]?.maintenancePrice?.toLocaleString('ar-EG')} Ø¬.Ù…
                          </div>
                          <input type="hidden" {...register(`productsUsed.${index}.maintenancePrice`)} />
                        </div>
                        <div className="w-32 bg-gray-50 border border-gray-200 rounded-lg p-2 text-center mt-[22px]">
                          <label className="block text-xs font-medium text-gray-500 mb-0.5">Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ</label>
                          <div className="font-bold text-gray-800 text-sm">
                            {((watchProductsUsed[index]?.quantity || 0) * (watchProductsUsed[index]?.maintenancePrice || 0)).toLocaleString('ar-EG')}
                          </div>
                        </div>
                        {ticket.status === 'Pending' && (
                          <button type="button" onClick={() => remove(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100 mt-[22px]">
                            <Minus className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            {}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-4">
                <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">الرسوم</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">أجرة الصيانة / الخدمة</label>
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      {...register('servicePrice')}
                      disabled={ticket.status !== 'Pending'}
                      onFocus={(e) => e.target.select()}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">الدفعة المقدمة / المدفوع</label>
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      {...register('paidAmount')}
                      disabled={ticket.status !== 'Pending'}
                      onFocus={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-white font-bold border-b border-blue-800 pb-3">
                    <span>Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„ÙƒÙ„ÙŠ:</span>
                    <span className="text-xl">{currentTotal.toLocaleString('ar-EG')} Ø¬.Ù…</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-bold border-b border-blue-800 pb-3 pt-1">
                    <span>Ø§Ù„Ù…Ø¯ÙÙˆØ¹ (Ù…Ù‚Ø¯Ù…):</span>
                    <span className="text-lg">{Number(currentPaid).toLocaleString('ar-EG')} Ø¬.Ù…</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm mt-auto">
                  <div className="text-blue-200 text-sm mb-1">Ø§Ù„Ù…Ø¨Ù„Øº Ø§Ù„Ù…ØªØ¨Ù‚ÙŠ Ù„Ù„ØªØ­ØµÙŠÙ„ Ø¹Ù†Ø¯ Ø§Ù„تسليم</div>
                  <div className={`text-3xl font-black ${remaining > 0 ? 'text-red-300' : 'text-green-300'}`}>
                    {remaining.toLocaleString('ar-EG')} <span className="text-base font-normal opacity-80">Ø¬.Ù…</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
            <div className="flex gap-3">
              {ticket.status === 'Pending' && (
                <>
                  <button
                    type="submit"
                    disabled={isUpdating || !isDirty || isDelivering || isReturning}
                    className={tokens.btn.secondary + " flex items-center gap-2"}
                  >
                    <Save className="w-5 h-5" /> Ø­ÙØ¸ Ø§Ù„ØªØ¹Ø¯ÙŠÙ„Ø§Øª
                  </button>
                  <button
                    type="button"
                    onClick={handleReturn}
                    disabled={isReturning || isDirty || isUpdating || isDelivering} title={isDirty ? "يجب حفظ التعديلات أولا" : ""}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" /> إرجاع بدون إصلاح
                  </button>
                  <button
                    type="button"
                    onClick={handleDeliver}
                    disabled={isDelivering || isDirty || isUpdating || isReturning} title={isDirty ? "يجب حفظ التعديلات أولا" : ""}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 shadow-md transition-colors"
                  >
                    <CheckCircle className="w-5 h-5" /> تسليم Ù„Ù„Ø¹Ù…ÙŠÙ„ ÙˆØªØ­ØµÙŠÙ„
                  </button>
                </>
              )}
              {ticket.status !== 'Pending' && (
                <button type="button" onClick={onClose} className={tokens.btn.primary}>
                  إغلاق
                </button>
              )}
            </div>
          </div>
        </form>
      )}
      {isPickerOpen && (
        <MaintenanceProductPicker
          isOpen={isPickerOpen}
          onClose={() => setIsPickerOpen(false)}
          excludeProductIds={watchProductsUsed.map(p => p.productId).filter(Boolean) as string[]}
          onAdd={(products) => {
            for (const p of products) {
              append({
                productId: p.productId,
                quantity: 1,
                maintenancePrice: p.batches?.[0]?.maintenancePrice || 0
              });
            }
          }}
        />
      )}
    </Drawer>
  );
}
```

## File: src/features/maintenance/components/MaintenanceListTable.tsx
```typescript
import { MaintenanceSummary } from '../schemas/maintenanceSchemas';
import { ChevronLeft, ChevronRight, Clock, User, Phone, Wrench, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props {
  tickets: MaintenanceSummary[];
  isLoading: boolean;
  onRowClick: (id: string) => void;
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}
const statusConfig: Record<string, { label: string; color: string }> = {
  Pending: { label: 'قيد الانتظار', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  Delivered: { label: 'تم التسليم', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  Returned: { label: 'مرتجع', color: 'bg-slate-100 text-slate-800 border-slate-200' },
};
function formatDateInfo(dateStr?: string, status?: string) {
  if (!dateStr) {
    return {
      primary: 'غير محدد',
      secondary: '',
      color: 'text-slate-500',
      isUrgent: false,
    };
  }
  const d = new Date(dateStr);
  const now = new Date();
  const dayName = d.toLocaleDateString('ar-EG', { weekday: 'long' });
  const timeStr = d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', hour12: true });
  const dayMonth = d.toLocaleDateString('ar-EG', { day: 'numeric', month: 'long' });
  const fullSecondary = `${timeStr} · ${dayMonth}`;
  if (status !== 'Pending') {
    return {
      primary: dayName,
      secondary: fullSecondary,
      color: 'text-slate-500',
      isUrgent: false,
    };
  }
  const diffMs = d.getTime() - now.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  const hoursLeft = Math.floor(Math.abs(diffHours));
  if (diffHours < 0) {
    const timeText = hoursLeft === 0 ? 'أقل من ساعة' : `${hoursLeft} ساعة`;
    return {
      primary: `${dayName} (متأخر بـ ${timeText})`,
      secondary: fullSecondary,
      color: 'text-red-600 font-bold',
      isUrgent: true,
    };
  } else if (diffHours <= 24) {
    const timeText = hoursLeft === 0 ? 'أقل من ساعة' : `${hoursLeft} ساعة`;
    const color = diffHours <= 3 ? 'text-amber-600 font-bold' : 'text-blue-600 font-bold';
    return {
      primary: `${dayName} (باقي ${timeText})`,
      secondary: fullSecondary,
      color,
      isUrgent: diffHours <= 3,
    };
  }
  return {
    primary: `${dayName} (باقي ${Math.floor(diffHours / 24)} يوم)`,
    secondary: fullSecondary,
    color: 'text-slate-700 font-semibold',
    isUrgent: false,
  };
}
export function MaintenanceListTable({
  tickets,
  isLoading,
  onRowClick,
  pageIndex,
  totalPages,
  totalCount,
  pageSize,
  onNextPage,
  onPrevPage
}: Props) {
  if (isLoading) {
    return (
      <div className="p-12 text-center text-slate-400">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-10 bg-slate-200 rounded-full mb-3"></div>
          <div className="text-lg">جاري التحميل...</div>
        </div>
      </div>
    );
  }
  if (tickets.length === 0) {
    return (
      <div className="p-16 text-center flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-5">
          <Wrench className="w-10 h-10 text-slate-300" />
        </div>
        <h3 className="text-xl font-bold text-slate-700 mb-2">لا توجد تذاكر صيانة</h3>
        <p className="text-slate-400 text-base">لم يتم العثور على أي تذاكر مطابقة للفلتر الحالي.</p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-right">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/70 text-slate-500">
            <th className="px-6 py-4 text-[14px] font-bold whitespace-nowrap">رقم / حالة</th>
            <th className="px-6 py-4 text-[14px] font-bold whitespace-nowrap">العميل</th>
            <th className="px-6 py-4 text-[14px] font-bold">الجهاز والمشكلة</th>
            <th className="px-6 py-4 text-[14px] font-bold whitespace-nowrap text-center">الماليات</th>
            <th className="px-6 py-4 text-[14px] font-bold whitespace-nowrap">موعد التسليم</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {tickets.map((t) => {
            const cfg = statusConfig[t.status] ?? { label: t.status, color: 'bg-slate-100 text-slate-700' };
            const dateInfo = formatDateInfo(t.deliveryDate, t.status);
            return (
              <tr
                key={t.id}
                onClick={() => onRowClick(t.id)}
                className={cn(
                  "hover:bg-blue-50/60 cursor-pointer transition-colors group",
                  dateInfo.isUrgent && "bg-red-50/40 hover:bg-red-50/80"
                )}
              >
                {}
                <td className="px-6 py-5">
                  <div className="flex flex-col gap-2.5 items-start">
                    <span className="text-xs font-mono font-medium text-slate-400 bg-slate-100/80 px-2 py-1 rounded-md">
                      #{t.id.slice(0, 8)}
                    </span>
                    <span className={cn('px-3 py-1.5 rounded-lg text-sm font-bold border shadow-sm', cfg.color)}>
                      {cfg.label}
                    </span>
                  </div>
                </td>
                {}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-800 text-base">{t.customerName}</div>
                      {t.customerPhone && (
                        <div className="text-sm font-medium text-slate-500 flex items-center gap-1.5 mt-1">
                          <Phone className="w-3.5 h-3.5" />
                          <span className="dir-ltr">{t.customerPhone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                {}
                <td className="px-6 py-5 max-w-[280px]">
                  <div className="font-extrabold text-slate-800 text-base mb-1.5 truncate">
                    {t.deviceDescription || 'غير محدد'}
                  </div>
                  {t.problem && (
                    <div className="text-[13px] text-slate-500 truncate" title={t.problem}>
                      {t.problem}
                    </div>
                  )}
                </td>
                {}
                <td className="px-6 py-5 text-center">
                  <div className="inline-flex flex-col items-center justify-center">
                    <div className="font-black text-slate-900 text-lg">
                      {t.totalPrice.toLocaleString('ar-EG')} ج.م
                    </div>
                    <div className="text-[13px] mt-1.5 flex gap-2.5 items-center">
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md" title="المدفوع">
                        {t.paidAmount > 0 ? `+${t.paidAmount.toLocaleString('ar-EG')}` : '0'}
                      </span>
                      {t.remainingAmount > 0 ? (
                        <span className="text-red-500 font-extrabold bg-red-50 px-2 py-0.5 rounded-md" title="الباقي">
                          باقي {t.remainingAmount.toLocaleString('ar-EG')}
                        </span>
                      ) : (
                        <span className="text-emerald-600 font-extrabold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md">
                          <CheckCircle2 className="w-3.5 h-3.5" /> مسدد
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                {}
                <td className="px-6 py-5">
                  <div className="flex flex-col gap-1.5">
                    <div className={cn("flex items-center gap-2 text-[15px]", dateInfo.color)}>
                      {dateInfo.isUrgent ? (
                        <AlertCircle className="w-5 h-5 shrink-0" />
                      ) : (
                        <Clock className="w-5 h-5 shrink-0" />
                      )}
                      <span>{dateInfo.primary}</span>
                    </div>
                    {dateInfo.secondary && (
                      <div className="text-sm font-medium text-slate-400 mr-7">
                        {dateInfo.secondary}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {}
      <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
        <span>
          إظهار {(pageIndex - 1) * pageSize + 1} إلى {Math.min(pageIndex * pageSize, totalCount)} من أصل {totalCount} سجل
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevPage}
            disabled={pageIndex <= 1 || isLoading}
            className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40 flex items-center gap-1 transition-colors"
          >
            <ChevronRight size={15} />
            السابق
          </button>
          <span className="px-3 py-1 border border-blue-600 bg-blue-50 text-blue-600 rounded-md font-semibold min-w-[60px] text-center">
            {pageIndex} / {totalPages || 1}
          </span>
          <button
            onClick={onNextPage}
            disabled={pageIndex >= totalPages || isLoading}
            className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40 flex items-center gap-1 transition-colors"
          >
            التالي
            <ChevronLeft size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
```

## File: src/features/maintenance/components/MaintenanceProductPicker.tsx
```typescript
import { useState, useMemo } from 'react';
import { Column } from '@/shared/components/ui/DataTable';
import { PickerModal } from '@/shared/components/ui/PickerModal';
import { useProducts } from '@/features/inventory/hooks/useInventory';
import { ProductResponse, isMaintenanceProduct } from '@/features/inventory/schemas/inventorySchemas';
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (products: ProductResponse[]) => void;
  excludeProductIds?: string[];
}
const PAGE_SIZE = 10;
export function MaintenanceProductPicker({ isOpen, onClose, onAdd, excludeProductIds = [] }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageIndex, setPageIndex] = useState(1);
  const [selectedMap, setSelectedMap] = useState<Map<string, ProductResponse>>(new Map());
  const excludedSet = useMemo(() => new Set(excludeProductIds), [excludeProductIds]);
  // Fetch all products (or a large enough page) and filter locally for maintenance usage
  const { data, isLoading } = useProducts({ pageSize: 2000 });
  const maintenanceProducts = useMemo(() => {
    if (!data?.items) return [];
    let filtered = data.items.filter(
      (p) => isMaintenanceProduct(p.usage)
    );
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) => (p.name && p.name.toLowerCase().includes(lower)) || (p.barcode && p.barcode.toLowerCase().includes(lower))
      );
    }
    return filtered;
  }, [data?.items, searchTerm]);
  // Client-side pagination
  const totalCount = maintenanceProducts.length;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (pageIndex - 1) * PAGE_SIZE;
    return maintenanceProducts.slice(start, start + PAGE_SIZE);
  }, [maintenanceProducts, pageIndex]);
  // Reset state when opened
  useMemo(() => {
    if (isOpen) {
      setSearchTerm('');
      setPageIndex(1);
      setSelectedMap(new Map());
    }
  }, [isOpen]);
  const toggleProduct = (product: ProductResponse) => {
    if (excludedSet.has(product.productId)) return;
    setSelectedMap((prev) => {
      const next = new Map(prev);
      if (next.has(product.productId)) next.delete(product.productId);
      else next.set(product.productId, product);
      return next;
    });
  };
  const handleAdd = () => {
    const selected = Array.from(selectedMap.values()).filter((p) => !excludedSet.has(p.productId));
    if (selected.length === 0) return;
    onAdd(selected);
    onClose();
  };
  const columns: Column<ProductResponse>[] = [
    {
      header: '',
      cell: (row) => {
        const alreadyOnInvoice = excludedSet.has(row.productId);
        const checked = alreadyOnInvoice || selectedMap.has(row.productId);
        return (
          <input
            type="checkbox"
            checked={checked}
            disabled={alreadyOnInvoice}
            onChange={() => toggleProduct(row)}
            onClick={(e) => e.stopPropagation()}
            className="w-4 h-4 accent-blue-600 cursor-pointer disabled:cursor-not-allowed"
          />
        );
      },
    },
    {
      header: 'المنتج',
      cell: (row) => (
        <div className="flex items-center gap-3">
          {row.imageUrl ? (
            <img src={row.imageUrl} alt={row.name} className="w-10 h-10 object-cover rounded-lg bg-gray-100" />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
              لا توجد
            </div>
          )}
          <div>
            <p className="font-bold text-gray-800">{row.name}</p>
            {excludedSet.has(row.productId) && (
              <p className="text-[11px] text-red-500 font-medium mt-0.5">مضاف مسبقاً للتذكرة</p>
            )}
          </div>
        </div>
      ),
    },
    {
      header: 'الباركود',
      cell: (row) => <span className="text-gray-500">{row.barcode || '—'}</span>,
    },
    {
      header: 'سعر الصيانة',
      cell: (row) => {
        const price = row.batches?.[0]?.maintenancePrice || 0;
        return <span className="font-semibold text-emerald-600">{price.toLocaleString('ar-EG')} ج.م</span>;
      },
    },
  ];
  return (
    <PickerModal
      isOpen={isOpen}
      onClose={onClose}
      title="إضافة قطع غيار"
      subtitle="اختر قطع الغيار المطلوبة من المخزن (منتجات الصيانة)"
      searchPlaceholder="ابحث باسم المنتج أو الباركود..."
      searchValue={searchTerm}
      onSearchChange={(value) => {
        setSearchTerm(value);
        setPageIndex(1);
      }}
      columns={columns}
      data={paginatedProducts}
      isLoading={isLoading}
      pagination={{
        pageIndex,
        totalPages,
        totalCount,
        pageSize: PAGE_SIZE,
        onNextPage: () => setPageIndex((p) => p + 1),
        onPrevPage: () => setPageIndex((p) => Math.max(1, p - 1)),
      }}
      onRowClick={toggleProduct}
      selectedCount={selectedMap.size}
      onConfirm={handleAdd}
    />
  );
}
```

## File: src/features/maintenance/components/MaintenanceQuickCreateDrawer.tsx
```typescript
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateMaintenanceRequest, createMaintenanceSchema } from '../schemas/maintenanceSchemas';
import { useCreateMaintenance } from '../api/queries';
import { useCustomers } from '@/features/contacts/hooks/useContacts';
import { RightDrawer as Drawer } from '@/shared/components/ui/RightDrawer';
import { Input } from '@/shared/components/ui/Input';
import { tokens } from '@/shared/styles/tokens';
import {
  User,
  Smartphone,
  Clock,
  Coins,
  Save,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const TIME_PRESETS = [
  { label: '30 Ø¯Ù‚ÙŠÙ‚Ø©', minutes: 30 },
  { label: 'Ø³Ø§Ø¹Ø©', minutes: 60 },
  { label: 'Ø³Ø§Ø¹ØªÙŠÙ†', minutes: 120 },
  { label: '3 Ø³Ø§Ø¹Ø§Øª', minutes: 180 },
  { label: 'ØºØ¯Ø§Ù‹', minutes: 1440 },
];
const COMMON_PROBLEMS = [
  'ØªØºÙŠÙŠØ± Ø´Ø§Ø´Ø©', 'ØªØºÙŠÙŠØ± Ø¨Ø·Ø§Ø±ÙŠØ©', 'Ø³ÙˆÙƒÙŠØª Ø´Ø­Ù†', 'Ø¨Ø§ØºØ©',
  'ØµÙŠØ§Ù†Ø© Ø¨ÙˆØ±Ø¯Ø©', 'Ø³ÙˆÙØª ÙˆÙŠØ±', 'Ø³Ù…Ø§Ø¹Ø© / Ù…Ø§ÙŠÙƒ', 'ÙØ­Øµ ÙˆÙƒØ´Ù'
];
const ADVANCE_PRESETS = [0, 50, 100, 200];
function toLocalDatetimeString(date: Date) {
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
function formatArabicDelivery(isoString?: string) {
  if (!isoString) return null;
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return null;
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const isTomorrow = date.toDateString() === tomorrow.toDateString();
  const timePart = date.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', hour12: true });
  if (isToday) return `Ø§Ù„ÙŠÙˆÙ…ØŒ ${timePart}`;
  if (isTomorrow) return `ØºØ¯Ø§Ù‹ØŒ ${timePart}`;
  return date.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: true });
}
export function MaintenanceQuickCreateDrawer({ isOpen, onClose }: Props) {
  const { mutate: createMaintenance, isPending } = useCreateMaintenance();
  const [activeTimePreset, setActiveTimePreset] = useState<number | 'custom' | null>(null);
  const [customerSearch, setCustomerSearch] = useState('');
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const { data: customersData } = useCustomers({
    searchValue: customerSearch.length >= 2 ? customerSearch : undefined,
    pageSize: 5,
  });
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<CreateMaintenanceRequest>({
    resolver: zodResolver(createMaintenanceSchema) as any,
    defaultValues: {
      customerName: '', customerPhone: '', customerId: '',
      deviceDescription: '', problem: '', paidAmount: 0, deliveryDate: '',
    },
  });
  const currentDeliveryDate = watch('deliveryDate');
  const currentProblem = watch('problem') || '';
  const currentPaid = watch('paidAmount');
  useEffect(() => {
    if (isOpen) {
      const defaultDate = new Date(Date.now() + 60 * 60 * 1000);
      reset({
        customerName: '', customerPhone: '', customerId: '',
        deviceDescription: '', problem: '', paidAmount: 0, deliveryDate: toLocalDatetimeString(defaultDate),
      });
      setActiveTimePreset(60);
      setCustomerSearch('');
      setShowCustomerDropdown(false);
    }
  }, [isOpen, reset]);
  const handleSelectPresetTime = (minutes: number) => {
    setActiveTimePreset(minutes);
    setValue('deliveryDate', toLocalDatetimeString(new Date(Date.now() + minutes * 60 * 1000)), { shouldValidate: true });
  };
  const handleAddProblemChip = (chip: string) => {
    if (!currentProblem.trim()) setValue('problem', chip, { shouldValidate: true });
    else if (!currentProblem.includes(chip)) setValue('problem', `${currentProblem} + ${chip}`, { shouldValidate: true });
  };
  const handleSelectCustomer = (customer: { customerId: string; name: string; phone?: string }) => {
    setValue('customerName', customer.name, { shouldValidate: true });
    setValue('customerPhone', customer.phone || '', { shouldValidate: true });
    setValue('customerId', customer.customerId, { shouldValidate: true });
    setShowCustomerDropdown(false);
  };
  const onSubmit = (data: CreateMaintenanceRequest) => {
    const payload = { ...data };
    if (!payload.deliveryDate) delete payload.deliveryDate;
    createMaintenance(payload, { onSuccess: () => onClose() });
  };
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Ø¥Ø¶Ø§ÙØ© ØªØ°ÙƒØ±Ø© ØµÙŠØ§Ù†Ø©" width="w-[500px]">
      <form onSubmit={handleSubmit(onSubmit as any)} className="h-full flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 bg-white">
          {}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-800">
              <User className="w-4 h-4 text-blue-600" /> Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø¹Ù…ÙŠÙ„
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Ø§Ø³Ù… Ø§Ù„Ø¹Ù…ÙŠÙ„ <span className="text-red-500">*</span></label>
                <Input
                  {...register('customerName')}
                  placeholder="Ù…Ø«Ø§Ù„: Ù…Ø­Ù…Ø¯ Ø¹Ù„ÙŠ"
                  autoComplete="off"
                  autoFocus
                  onChange={(e) => {
                    register('customerName').onChange(e);
                    setCustomerSearch(e.target.value);
                    setShowCustomerDropdown(true);
                  }}
                  onFocus={() => setShowCustomerDropdown(true)}
                  className="bg-slate-50/50 border-slate-200 focus:bg-white transition-colors h-11"
                />
                {errors.customerName && <p className="text-red-500 text-[11px] mt-1">{errors.customerName.message}</p>}
                {}
                {showCustomerDropdown && customersData?.items && customersData.items.length > 0 && customerSearch.length >= 2 && (
                  <div className="absolute z-20 top-full mt-1 w-full bg-white rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                    <div className="max-h-48 overflow-y-auto">
                      {customersData.items.map((cust) => (
                        <button
                          type="button"
                          key={cust.customerId}
                          onClick={() => handleSelectCustomer(cust)}
                          className="w-full text-right px-4 py-3 hover:bg-slate-50 flex flex-col gap-1 transition-colors border-b border-slate-50 last:border-0"
                        >
                          <span className="font-semibold text-sm text-slate-800">{cust.name}</span>
                          {cust.phone && <span className="text-xs text-slate-400 dir-ltr text-right">{cust.phone}</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ</label>
                <Input
                  {...register('customerPhone')}
                  placeholder="01xxxxxxxxx"
                  type="tel"
                  dir="ltr"
                  className="text-left bg-slate-50/50 border-slate-200 focus:bg-white h-11"
                />
                {errors.customerPhone && <p className="text-red-500 text-[11px] mt-1">{errors.customerPhone.message}</p>}
              </div>
            </div>
          </section>
          <hr className="border-slate-100" />
          {}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-800">
              <Smartphone className="w-4 h-4 text-blue-600" /> Ø§Ù„Ø¬Ù‡Ø§Ø² ÙˆØ§Ù„Ù…Ø´ÙƒÙ„Ø©
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">Ø§Ø³Ù… Ø§Ù„Ø¬Ù‡Ø§Ø² / Ø§Ù„Ù…ÙˆØ¯ÙŠÙ„</label>
              <Input
                {...register('deviceDescription')}
                placeholder="Ù…Ø«Ø§Ù„: iPhone 14 Pro"
                className="bg-slate-50/50 border-slate-200 focus:bg-white h-11"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-slate-500">ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø¹Ø·Ù„</label>
                <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Ø£Ø¶Ù Ø³Ø±ÙŠØ¹Ø§Ù‹
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {COMMON_PROBLEMS.map((chip) => (
                  <button
                    type="button"
                    key={chip}
                    onClick={() => handleAddProblemChip(chip)}
                    className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                  >
                    + {chip}
                  </button>
                ))}
              </div>
              <textarea
                {...register('problem')}
                placeholder="Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„Ø¹Ù…ÙŠÙ„ Ø£Ùˆ ØªÙØ§ØµÙŠÙ„ Ø§Ù„ÙØ­Øµ Ø§Ù„Ø³Ø±ÙŠØ¹..."
                className={cn(tokens.input, "min-h-[80px] bg-slate-50/50 border-slate-200 focus:bg-white resize-y py-3")}
              />
            </div>
          </section>
          <hr className="border-slate-100" />
          {}
          <section className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-800 mb-4">
                <Clock className="w-4 h-4 text-blue-600" /> Ù…ÙˆØ¹Ø¯ Ø§Ù„تسليم Ø§Ù„Ù…ØªÙˆÙ‚Ø¹
              </h3>
              <div className="bg-slate-100/70 p-1.5 rounded-xl flex items-center gap-1 mb-3">
                {TIME_PRESETS.map((preset) => (
                  <button
                    type="button"
                    key={preset.minutes}
                    onClick={() => handleSelectPresetTime(preset.minutes)}
                    className={cn(
                      "flex-1 py-2 text-xs font-semibold rounded-lg transition-all",
                      activeTimePreset === preset.minutes
                        ? "bg-white text-blue-700 shadow-sm"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                    )}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type="datetime-local"
                  {...register('deliveryDate')}
                  onChange={(e) => { register('deliveryDate').onChange(e); setActiveTimePreset('custom'); }}
                  className="flex-1 bg-slate-50/50 border-slate-200 h-11 text-sm text-slate-600"
                />
                {currentDeliveryDate && (
                  <div className="flex-1 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100 h-11 rounded-lg flex items-center justify-center px-3">
                    {formatArabicDelivery(currentDeliveryDate)}
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-800 mb-3">
                <Coins className="w-4 h-4 text-emerald-600" /> Ø§Ù„Ø¯ÙØ¹Ø© Ø§Ù„Ù…Ù‚Ø¯Ù…Ø© (Ø¹Ø±Ø¨ÙˆÙ†)
              </h3>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  {...register('paidAmount', { valueAsNumber: true })}
                  className="w-32 h-11 font-bold text-lg text-emerald-700 text-center bg-emerald-50/30 border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <div className="flex-1 bg-slate-100/70 p-1 rounded-xl flex items-center gap-1">
                  {ADVANCE_PRESETS.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => setValue('paidAmount', amt, { shouldValidate: true })}
                      className={cn(
                        "flex-1 py-2 text-xs font-semibold rounded-lg transition-all",
                        Number(currentPaid) === amt
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "text-slate-500 hover:bg-slate-200/50"
                      )}
                    >
                      {amt === 0 ? 'Ø¨Ø¯ÙˆÙ†' : `+${amt}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        {}
        <div className="p-6 bg-white border-t border-slate-100 flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 rounded-xl font-semibold text-slate-500 hover:bg-slate-100 transition-colors"
          >
            إلغاء
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <Save className="w-5 h-5" />
            {isPending ? 'Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡...' : 'Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„ØªØ°ÙƒØ±Ø©'}
          </button>
        </div>
      </form>
    </Drawer>
  );
}
```

## File: src/features/maintenance/pages/MaintenancePage.tsx
```typescript
import { useState } from 'react';
import { useMaintenanceList } from '../api/queries';
import { MaintenanceQuickCreateDrawer } from '../components/MaintenanceQuickCreateDrawer';
import { MaintenanceDetailDrawer } from '../components/MaintenanceDetailDrawer';
import { MaintenanceListTable } from '../components/MaintenanceListTable';
import { Wrench, Plus } from 'lucide-react';
export function MaintenancePage() {
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [pageIndex, setPageIndex] = useState(1);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data, isLoading } = useMaintenanceList({
    pageNumber: pageIndex,
    pageSize: 10,
    status: statusFilter || undefined,
    searchValue: searchValue || undefined,
  });
  const tickets = data?.items || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = data?.totalPages || 1;
  const pageSize = data?.pageSize || 10;
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4">
        <div className="flex items-center gap-3">
          <Wrench className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-800">الصيانة</h1>
          <span className="text-sm text-gray-400">({totalCount} تذكرة)</span>
        </div>
        <button
          onClick={() => setIsCreateOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          تذكرة جديدة
        </button>
      </div>
            {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-between">
        <div className="flex bg-slate-100/70 p-1.5 rounded-xl w-fit">
          {(['', 'Pending', 'Delivered', 'Returned'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                statusFilter === s
                  ? 'bg-white text-blue-700 shadow-sm border border-gray-200/60'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {s === '' ? 'الكل' : s === 'Pending' ? 'قيد الانتظار' : s === 'Delivered' ? 'تم التسليم' : 'مرتجع'}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="بحث باسم العميل أو رقم الهاتف..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      {}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <MaintenanceListTable
          tickets={tickets}
          isLoading={isLoading}
          onRowClick={(id) => setSelectedId(id)}
          pageIndex={pageIndex}
          totalPages={totalPages}
          totalCount={totalCount}
          pageSize={pageSize}
          onNextPage={() => setPageIndex(p => p + 1)}
          onPrevPage={() => setPageIndex(p => p - 1)}
        />
      </div>
      {}
      <MaintenanceQuickCreateDrawer
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />
      {}
      <MaintenanceDetailDrawer
        id={selectedId}
        onClose={() => setSelectedId(null)}
      />
    </div>
  );
}
```

## File: src/features/maintenance/schemas/maintenanceSchemas.ts
```typescript
import { z } from 'zod';
export enum MaintenanceStatus {
  Pending = 'Pending',
  Delivered = 'Delivered',
  Returned = 'Returned',
}
export const createMaintenanceSchema = z.object({
  customerName: z.string().min(1, 'اسم العميل مطلوب'),
  customerPhone: z.string().optional(),
  customerId: z.string().optional(),
  deviceDescription: z.string().optional(),
  problem: z.string().optional(),
  paidAmount: z.coerce.number().min(0).default(0),
  deliveryDate: z.string().optional(),
});
export const maintenanceProductItemSchema = z.object({
  productId: z.string().min(1, 'اختر منتجاً'),
  quantity: z.coerce.number().min(1, 'الكمية 1 على الأقل'),
  maintenancePrice: z.coerce.number().min(0, 'السعر لا يكون سالباً'),
});
export const updateMaintenanceSchema = z.object({
  customerName: z.string().min(1, 'اسم العميل مطلوب'),
  customerPhone: z.string().optional(),
  customerId: z.string().optional(),
  deviceDescription: z.string().optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  servicePrice: z.coerce.number().min(0).default(0),
  paidAmount: z.coerce.number().min(0).default(0),
  deliveryDate: z.string().optional(),
  productsUsed: z.array(maintenanceProductItemSchema).default([]),
});
export type CreateMaintenanceRequest = z.infer<typeof createMaintenanceSchema>;
export type UpdateMaintenanceRequest = z.infer<typeof updateMaintenanceSchema>;
export type MaintenanceProductItemRequest = z.infer<typeof maintenanceProductItemSchema>;
export interface MaintenanceProductItemResponse {
  productId: string;
  productName: string;
  quantity: number;
  maintenancePrice: number;
  costPrice: number;
}
export interface MaintenanceResponse {
  id: string;
  customerName: string;
  customerPhone?: string;
  customerId?: string;
  deviceDescription?: string;
  problem?: string;
  solution?: string;
  servicePrice: number;
  totalPartsPrice: number;
  totalPrice: number;
  totalCost: number;
  paidAmount: number;
  remainingAmount: number;
  deliveryDate?: string;
  status: string;
  productsUsed: MaintenanceProductItemResponse[];
  createdAt: string;
}
export interface MaintenanceSummary {
  id: string;
  customerName: string;
  customerPhone?: string;
  deviceDescription?: string;
  problem?: string;
  totalPrice: number;
  paidAmount: number;
  remainingAmount: number;
  deliveryDate?: string;
  status: string;
  createdAt: string;
}
```

## File: src/features/purchases/api/PurchaseApi.ts
```typescript
import { apiClient } from "@/lib/axios";
import { PaginatedList } from "@/shared/types/pagination";
import {
  PurchaseInvoiceResponse,
  CreatePurchaseInvoiceRequest,
  PurchaseFilters
} from "../schemas/purchaseSchemas";
export const purchaseRepository = {
  getPurchases: async (filters: PurchaseFilters): Promise<PaginatedList<PurchaseInvoiceResponse>> => {
    const response = await apiClient.get<PaginatedList<PurchaseInvoiceResponse>>('/purchase-invoices', { params: filters });
    return response.data;
  },
  getPurchaseInvoice: async (id: string): Promise<PurchaseInvoiceResponse> => {
    const response = await apiClient.get<PurchaseInvoiceResponse>(`/purchase-invoices/${id}`);
    return response.data;
  },
  createPurchaseInvoice: async (data: CreatePurchaseInvoiceRequest): Promise<PurchaseInvoiceResponse> => {
    const response = await apiClient.post<PurchaseInvoiceResponse>('/purchase-invoices', data);
    return response.data;
  },
};
```

## File: src/features/purchases/api/SupplierReturnApi.ts
```typescript
import { apiClient } from '@/lib/axios';
import { PaginatedList } from '@/shared/types/pagination';
import { SupplierReturnResponse, CreateSupplierReturnRequest, SupplierReturnFilters } from '../schemas/supplierReturnSchemas';
export const supplierReturnRepository = {
  getReturns: async (filters: SupplierReturnFilters): Promise<PaginatedList<SupplierReturnResponse>> => {
    const response = await apiClient.get<PaginatedList<SupplierReturnResponse>>('/supplier-transactions/returns', { params: filters });
    return response.data;
  },
  getReturn: async (id: string): Promise<SupplierReturnResponse> => {
    const response = await apiClient.get<SupplierReturnResponse>(`/supplier-transactions/returns/${id}`);
    return response.data;
  },
  createReturn: async (data: CreateSupplierReturnRequest): Promise<SupplierReturnResponse> => {
    const response = await apiClient.post<SupplierReturnResponse>('/supplier-transactions/returns', data);
    return response.data;
  },
};
```

## File: src/features/purchases/components/ProductPickerModal.tsx
```typescript
import { useEffect, useState } from 'react';
import { tokens } from '@/shared/styles/tokens';
import { Column } from '@/shared/components/ui/DataTable';
import { PickerModal } from '@/shared/components/ui/PickerModal';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useProducts, useCategories, useDepartments } from '@/features/inventory/hooks/useInventory';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
interface ProductPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (products: ProductResponse[]) => void;
  excludeProductIds?: string[];
}
const PAGE_SIZE = 10;
export function ProductPickerModal({
  isOpen,
  onClose,
  onAdd,
  excludeProductIds = [],
}: ProductPickerModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [pageIndex, setPageIndex] = useState(1);
  const [selectedMap, setSelectedMap] = useState<Map<string, ProductResponse>>(new Map());
  const debouncedSearch = useDebounce(searchTerm, 400);
  const excludedSet = new Set(excludeProductIds);
  const { data, isLoading } = useProducts({
    pageNumber: pageIndex,
    pageSize: PAGE_SIZE,
    searchValue: debouncedSearch || undefined,
    departmentId: departmentId || undefined,
    categoryId: categoryId || undefined,
  });
  const { data: departmentsData } = useDepartments();
  const { data: categoriesData } = useCategories();
  const products = data?.items ?? [];
  const departments = departmentsData?.items ?? [];
  const categories = categoriesData?.items ?? [];
  useEffect(() => {
    if (!isOpen) return;
    setSearchTerm('');
    setDepartmentId('');
    setCategoryId('');
    setPageIndex(1);
    setSelectedMap(new Map());
  }, [isOpen]);
  const toggleProduct = (product: ProductResponse) => {
    if (excludedSet.has(product.productId)) return;
    setSelectedMap((prev) => {
      const next = new Map(prev);
      if (next.has(product.productId)) next.delete(product.productId);
      else next.set(product.productId, product);
      return next;
    });
  };
  const handleAdd = () => {
    const selected = Array.from(selectedMap.values()).filter((p) => !excludedSet.has(p.productId));
    if (selected.length === 0) return;
    onAdd(selected);
    onClose();
  };
  const columns: Column<ProductResponse>[] = [
    {
      header: '',
      cell: (row) => {
        const alreadyOnInvoice = excludedSet.has(row.productId);
        const checked = alreadyOnInvoice || selectedMap.has(row.productId);
        return (
          <input
            type="checkbox"
            checked={checked}
            disabled={alreadyOnInvoice}
            onChange={() => toggleProduct(row)}
            onClick={(e) => e.stopPropagation()}
            className="w-4 h-4 accent-[var(--color-primary)] cursor-pointer disabled:cursor-not-allowed"
            aria-label={`اختيار ${row.name}`}
          />
        );
      },
    },
    {
      header: 'المنتج',
      cell: (row) => (
        <div>
          <p className="font-semibold text-[var(--color-text-main)]">{row.name}</p>
          {excludedSet.has(row.productId) && (
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">مضاف مسبقاً للفاتورة</p>
          )}
        </div>
      ),
    },
    {
      header: 'الباركود',
      cell: (row) => <span className="text-[var(--color-text-muted)]">{row.barcode || '—'}</span>,
    },
    {
      header: 'القسم الرئيسي',
      cell: (row) => row.department?.name || '—',
    },
    {
      header: 'القسم الفرعي',
      cell: (row) => row.category?.name || '—',
    },
  ];
  return (
    <PickerModal
      isOpen={isOpen}
      onClose={onClose}
      title="إضافة منتجات للفاتورة"
      subtitle="ابحث أو فلتر ثم حدد المنتجات المطلوبة"
      searchPlaceholder="ابحث باسم المنتج أو الباركود..."
      searchValue={searchTerm}
      onSearchChange={(value) => {
        setSearchTerm(value);
        setPageIndex(1);
      }}
      filters={
        <>
          <select
            value={departmentId}
            onChange={(e) => {
              setDepartmentId(e.target.value);
              setCategoryId('');
              setPageIndex(1);
            }}
            className={tokens.select}
          >
            <option value="">الأقسام الرئيسية</option>
            {departments.map((dep) => (
              <option key={dep.departmentId} value={dep.departmentId}>
                {dep.name}
              </option>
            ))}
          </select>
          <select
            value={categoryId}
            onChange={(e) => {
              setCategoryId(e.target.value);
              setPageIndex(1);
            }}
            className={tokens.select}
          >
            <option value="">الأقسام الفرعية</option>
            {categories
              .filter((cat) => !departmentId || cat.department.departmentId === departmentId)
              .map((cat) => (
                <option key={cat.categoryId} value={cat.categoryId}>
                  {cat.name}
                </option>
              ))}
          </select>
        </>
      }
      columns={columns}
      data={products}
      isLoading={isLoading}
      pagination={{
        pageIndex,
        totalPages: data?.totalPages ?? 1,
        totalCount: data?.totalCount ?? 0,
        pageSize: PAGE_SIZE,
        onNextPage: () => setPageIndex((p) => p + 1),
        onPrevPage: () => setPageIndex((p) => Math.max(1, p - 1)),
      }}
      onRowClick={toggleProduct}
      selectedCount={selectedMap.size}
      onConfirm={handleAdd}
    />
  );
}
```

## File: src/features/purchases/components/purchase-invoice-form/PurchaseInvoiceHeader.tsx
```typescript
import { useFormContext } from 'react-hook-form';
import { tokens } from '@/shared/styles/tokens';
import { CreatePurchaseInvoiceRequest } from '../../schemas/purchaseSchemas';
import { useSuppliers } from '@/features/suppliers/hooks/useSuppliers';
export function PurchaseInvoiceHeader() {
  const { register, formState: { errors } } = useFormContext<CreatePurchaseInvoiceRequest>();
  const { data: suppliersData, isLoading: isLoadingSuppliers } = useSuppliers({ pageNumber: 1, pageSize: 500 });
  const suppliers = suppliersData?.items || [];
  return (
    <div className={`${tokens.card} p-6 bg-white space-y-4`}>
      <h3 className="text-lg font-bold text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2">
        البيانات الأساسية
      </h3>
      <div>
        <label className={`${tokens.font.label} mb-2 block`}>
          المورد <span className="text-red-500">*</span>
        </label>
        <select
          {...register('supplierId')}
          className={`${tokens.select} max-w-md`}
          disabled={isLoadingSuppliers}
        >
          <option value="">-- اختر المورد --</option>
          {suppliers.map((s) => (
            <option key={s.supplierId} value={s.supplierId}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.supplierId && (
          <p className="text-red-500 text-xs mt-1 font-semibold">{errors.supplierId.message}</p>
        )}
      </div>
    </div>
  );
}
```

## File: src/features/purchases/components/purchase-invoice-form/PurchaseInvoiceItemsTable.tsx
```typescript
import { useFormContext, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { formatCurrency } from '@/shared/utils/currency';
import { tokens } from '@/shared/styles/tokens';
import { CreatePurchaseInvoiceRequest } from '../../schemas/purchaseSchemas';
import { ProductPickerModal } from '../ProductPickerModal';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
import { ClearablePriceInput } from '@/shared/components/ui/ClearablePriceInput';
export function PurchaseInvoiceItemsTable() {
  const { register, control, watch, setValue, formState: { errors } } = useFormContext<CreatePurchaseInvoiceRequest>();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });
  const watchItems = watch('items');
  const handleAddProducts = (products: ProductResponse[]) => {
    const existingIds = new Set(fields.map((f) => f.productId));
    products.forEach((product) => {
      if (existingIds.has(product.productId)) return;
      const needsMaintenance = product.usage === 2 || product.usage === 3;
      append({
        productId: product.productId,
        productName: product.name,
        productUsage: product.usage,
        quantity: 1,
        unitCost: 0,
        wholesalePrice: 0,
        retailPrice: 0,
        maintenancePrice: needsMaintenance ? 0 : undefined,
      });
    });
  };
  return (
    <>
      <div className={`${tokens.card} bg-white overflow-hidden`}>
        <div className="p-4 border-b border-[var(--color-border)] flex flex-wrap justify-between items-center gap-3 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold text-[var(--color-text-main)]">أصناف الفاتورة</h3>
            <span className={`${tokens.badge.indigo}`}>
              عدد الأصناف: {fields.length}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsPickerOpen(true)}
            className={`${tokens.btn.primary} flex items-center gap-2`}
          >
            <Plus size={16} />
            إضافة منتجات
          </button>
        </div>
        {errors.items?.message && (
          <div className="p-4 text-red-500 text-sm font-bold bg-red-50">
            {errors.items.message}
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right">
            <thead className="bg-white border-b border-[var(--color-border)] text-[var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-3">المنتج</th>
                <th className="px-4 py-3 w-32">الكمية</th>
                <th className="px-4 py-3 w-36">تكلفة الوحدة (الشراء)</th>
                <th className="px-4 py-3 w-36">سعر الجملة الجديد</th>
                <th className="px-4 py-3 w-36">سعر التجزئة الجديد</th>
                {fields.some(f => f.productUsage === 2 || f.productUsage === 3) && (
                  <th className="px-4 py-3 w-36 bg-orange-50 text-orange-700">سعر الصيانة</th>
                )}
                <th className="px-4 py-3 w-32">الإجمالي</th>
                <th className="px-4 py-3 w-16 text-center">حذف</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fields.map((field, index) => {
                const itemQty = watchItems[index]?.quantity || 0;
                const itemCost = watchItems[index]?.unitCost || 0;
                const total = itemQty * itemCost;
                const needsMaintenance = field.productUsage === 2 || field.productUsage === 3;
                const hasAnyMaintenance = fields.some(f => f.productUsage === 2 || f.productUsage === 3);
                return (
                  <tr key={field.id} className={`hover:bg-gray-50 transition-colors ${needsMaintenance ? 'bg-orange-50/30' : ''}`}>
                    <td className="px-4 py-3 font-bold text-[var(--color-text-main)]">
                      {field.productName}
                      {needsMaintenance && (
                        <span className="mr-2 text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">صيانة</span>
                      )}
                      <input type="hidden" {...register(`items.${index}.productId`)} />
                      <input type="hidden" {...register(`items.${index}.productUsage`, { valueAsNumber: true })} />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        min="1"
                        step="1"
                        className={`${tokens.input} py-1 px-2 text-center w-20`}
                        {...register(`items.${index}.quantity`, { valueAsNumber: true })}
                        onFocus={(e) => e.target.select()}
                        onBlur={(e) => {
                          if (!e.target.value || Number(e.target.value) < 1) {
                            setValue(`items.${index}.quantity`, 1, { shouldValidate: true });
                          }
                        }}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <ClearablePriceInput
                        registration={register(`items.${index}.unitCost`, { valueAsNumber: true })}
                        setValue={setValue}
                        name={`items.${index}.unitCost`}
                        currentValue={watchItems[index]?.unitCost}
                        className={`${tokens.input} py-1 px-2 text-center text-red-600 font-bold`}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <ClearablePriceInput
                        registration={register(`items.${index}.wholesalePrice`, { valueAsNumber: true })}
                        setValue={setValue}
                        name={`items.${index}.wholesalePrice`}
                        currentValue={watchItems[index]?.wholesalePrice}
                        className={`${tokens.input} py-1 px-2 text-center`}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <ClearablePriceInput
                        registration={register(`items.${index}.retailPrice`, { valueAsNumber: true })}
                        setValue={setValue}
                        name={`items.${index}.retailPrice`}
                        currentValue={watchItems[index]?.retailPrice}
                        className={`${tokens.input} py-1 px-2 text-center`}
                      />
                    </td>
                    {hasAnyMaintenance && (
                      <td className="px-4 py-3 bg-orange-50/50">
                        {needsMaintenance ? (
                          <ClearablePriceInput
                            registration={register(`items.${index}.maintenancePrice`, { valueAsNumber: true })}
                            setValue={setValue}
                            name={`items.${index}.maintenancePrice`}
                            currentValue={watchItems[index]?.maintenancePrice}
                            className={`${tokens.input} py-1 px-2 text-center text-orange-700 font-bold`}
                          />
                        ) : (
                          <span className="text-gray-300 text-xs text-center block">—</span>
                        )}
                      </td>
                    )}
                    <td className="px-4 py-3 font-bold text-[var(--color-text-main)]" dir="ltr">
                      {formatCurrency(total)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-400 hover:text-red-600 p-1"
                        aria-label={`حذف ${field.productName}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {fields.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-[var(--color-text-muted)] font-medium">
                    اضغط «إضافة منتجات» لاختيار أصناف الفاتورة
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {isPickerOpen && (
        <ProductPickerModal
          isOpen={isPickerOpen}
          onClose={() => setIsPickerOpen(false)}
          onAdd={handleAddProducts}
          excludeProductIds={fields.map((f) => f.productId)}
        />
      )}
    </>
  );
}
```

## File: src/features/purchases/components/purchase-invoice-form/PurchaseInvoiceSummary.tsx
```typescript
import { useFormContext } from 'react-hook-form';
import { formatCurrency } from '@/shared/utils/currency';
import { tokens } from '@/shared/styles/tokens';
import { CreatePurchaseInvoiceRequest } from '../../schemas/purchaseSchemas';
import { ClearablePriceInput } from '@/shared/components/ui/ClearablePriceInput';
interface PurchaseInvoiceSummaryProps {
  isSubmitting?: boolean;
}
export function PurchaseInvoiceSummary({ isSubmitting }: PurchaseInvoiceSummaryProps) {
  const { register, watch, setValue } = useFormContext<CreatePurchaseInvoiceRequest>();
  const watchItems = watch('items');
  const watchPaidAmount = watch('paidAmount');
  const totalInvoice = (watchItems || []).reduce(
    (acc, item) => acc + ((item.quantity || 0) * (item.unitCost || 0)),
    0
  );
  const remaining = totalInvoice - (watchPaidAmount || 0);
  const hasItems = watchItems && watchItems.length > 0;
  return (
    <div className={`${tokens.card} p-6 bg-white`}>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className={`${tokens.font.label} mb-2 block`}>ملاحظات الفاتورة</label>
            <textarea
              {...register('notes')}
              rows={3}
              className={tokens.input}
              placeholder="أي ملاحظات إضافية على الفاتورة..."
            />
          </div>
          <div>
            <label className={`${tokens.font.label} mb-2 block`}>
              المبلغ المدفوع (سداد نقدي من الخزينة/الدرج)
            </label>
            <ClearablePriceInput
              registration={register('paidAmount', { valueAsNumber: true })}
              setValue={setValue}
              name="paidAmount"
              currentValue={watchPaidAmount}
              className={`${tokens.input} text-xl font-bold text-green-700`}
            />
            <p className={`${tokens.font.helperText} mt-1`}>
              اتركه 0 إذا كانت الفاتورة آجلة بالكامل.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-xl border border-[var(--color-border)] flex flex-col gap-4">
          <div className="flex justify-between items-center text-lg">
            <span className="text-[var(--color-text-muted)]">إجمالي الفاتورة:</span>
            <span className="font-bold text-[var(--color-text-main)]">
              {formatCurrency(totalInvoice)}
            </span>
          </div>
          <div className="flex justify-between items-center text-lg text-green-700">
            <span>المدفوع:</span>
            <span className="font-bold">{formatCurrency(watchPaidAmount || 0)}</span>
          </div>
          <div className="h-px bg-gray-300 w-full" />
          <div className="flex justify-between items-center text-xl">
            <span className="text-[var(--color-text-main)] font-bold">المتبقي للمورد:</span>
            <span className={`font-bold ${remaining > 0 ? 'text-red-600' : 'text-[var(--color-text-main)]'}`}>
              {formatCurrency(remaining)}
            </span>
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !hasItems}
            className={`${tokens.btn.primary} w-full py-3 mt-2 text-lg disabled:opacity-50`}
          >
            {isSubmitting ? 'جاري الحفظ...' : 'حفظ الفاتورة'}
          </button>
        </div>
      </div>
    </div>
  );
}
```

## File: src/features/purchases/components/PurchaseInvoiceForm.tsx
```typescript
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPurchaseInvoiceSchema, CreatePurchaseInvoiceRequest } from '../schemas/purchaseSchemas';
import { PurchaseInvoiceHeader } from './purchase-invoice-form/PurchaseInvoiceHeader';
import { PurchaseInvoiceItemsTable } from './purchase-invoice-form/PurchaseInvoiceItemsTable';
import { PurchaseInvoiceSummary } from './purchase-invoice-form/PurchaseInvoiceSummary';
interface PurchaseInvoiceFormProps {
  onSubmit: (data: CreatePurchaseInvoiceRequest) => void;
  isSubmitting?: boolean;
}
export function PurchaseInvoiceForm({ onSubmit, isSubmitting }: PurchaseInvoiceFormProps) {
  const methods = useForm<CreatePurchaseInvoiceRequest>({
    resolver: zodResolver(createPurchaseInvoiceSchema),
    defaultValues: {
      supplierId: '',
      paidAmount: 0,
      notes: '',
      items: [],
    },
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <PurchaseInvoiceHeader />
        <PurchaseInvoiceItemsTable />
        <PurchaseInvoiceSummary isSubmitting={isSubmitting} />
      </form>
    </FormProvider>
  );
}
```

## File: src/features/purchases/components/PurchasesFilters.tsx
```typescript
import { tokens } from '@/shared/styles/tokens';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useSuppliers } from '@/features/suppliers/hooks/useSuppliers';
interface PurchasesFiltersProps {
  onSearch: (searchTerm: string) => void;
  onSupplierChange: (supplierId: string) => void;
  onDateChange: (startDate: string, endDate: string) => void;
}
export function PurchasesFilters({ onSearch, onSupplierChange, onDateChange }: PurchasesFiltersProps) {
  const [term, setTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { data: suppliersData } = useSuppliers({ pageNumber: 1, pageSize: 500 });
  const suppliers = suppliersData?.items || [];
  const handleDateChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
    onDateChange(start, end);
  };
  return (
    <div className={`${tokens.card} p-4 bg-white flex flex-col lg:flex-row gap-4 justify-between items-center mb-6`}>
      <div className="relative w-full lg:w-96">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="ابحث برقم الفاتورة..."
          className={`${tokens.input} pl-3 pr-10`}
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
            onSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row w-full lg:w-auto gap-4">
        <select
          className={tokens.input}
          onChange={(e) => onSupplierChange(e.target.value)}
        >
          <option value="">كل الموردين</option>
          {suppliers.map(s => (
            <option key={s.supplierId} value={s.supplierId}>{s.name}</option>
          ))}
        </select>
        <div className="flex items-center gap-2">
          <input
            type="date"
            className={tokens.input}
            value={startDate}
            onChange={(e) => handleDateChange(e.target.value, endDate)}
            title="من تاريخ"
          />
          <span className="text-gray-500">-</span>
          <input
            type="date"
            className={tokens.input}
            value={endDate}
            onChange={(e) => handleDateChange(startDate, e.target.value)}
            title="إلى تاريخ"
          />
        </div>
      </div>
    </div>
  );
}
```

## File: src/features/purchases/components/PurchasesTable.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { PurchaseInvoiceResponse } from '../schemas/purchaseSchemas';
import { PaginatedList } from '@/shared/types/pagination';
import { DataTable } from '@/shared/components/ui/DataTable';
interface PurchasesTableProps {
  data?: PaginatedList<PurchaseInvoiceResponse>;
  isLoading: boolean;
  pageIndex: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onRowClick?: (invoice: PurchaseInvoiceResponse) => void;
}
export function PurchasesTable({
  data,
  isLoading,
  pageIndex,
  onNextPage,
  onPrevPage,
  onRowClick,
}: PurchasesTableProps) {
  const columns = [
    {
      header: 'رقم الفاتورة',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className="font-mono bg-gray-50 px-2 py-1 rounded text-sm border border-gray-100">
          {row.invoiceNumber}
        </span>
      ),
    },
    {
      header: 'التاريخ',
      cell: (row: PurchaseInvoiceResponse) => (
        <span dir="ltr">{new Intl.DateTimeFormat('ar-EG', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(row.invoiceDate))}</span>
      ),
    },
    {
      header: 'المورد',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className="font-bold text-gray-900">{row.supplier?.name || '-'}</span>
      ),
    },
    {
      header: 'الإجمالي',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className="font-bold text-gray-900">
          {formatCurrency(row.totalAmount)}
        </span>
      ),
    },
    {
      header: 'المدفوع',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className="text-green-600 font-bold">
          {formatCurrency(row.paidAmount)}
        </span>
      ),
    },
    {
      header: 'المتبقي',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className={`${row.remainingAmount > 0 ? 'text-red-600' : 'text-gray-900'} font-bold`}>
          {formatCurrency(row.remainingAmount)}
        </span>
      ),
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={data?.items || []}
      isLoading={isLoading}
      pageIndex={pageIndex}
      totalPages={data?.totalPages || 1}
      totalCount={data?.totalCount || 0}
      pageSize={data?.pageSize || 10}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onRowClick={onRowClick}
    />
  );
}
```

## File: src/features/purchases/components/SupplierBatchPickerModal.tsx
```typescript
import { useMemo, useState } from 'react';
import { Search, Package } from 'lucide-react';
import { useSupplierBatches } from '@/features/suppliers/hooks/useSuppliers';
import { SupplierBatchResponse } from '@/features/suppliers/schemas/supplierSchemas';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { Spinner } from '@/shared/components/ui/Spinner';
interface SupplierBatchPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplierId: string;
  onSelectBatch: (batch: SupplierBatchResponse) => void;
}
export function SupplierBatchPickerModal({
  isOpen,
  onClose,
  supplierId,
  onSelectBatch,
}: SupplierBatchPickerModalProps) {
  const { data: batches, isLoading, error } = useSupplierBatches(supplierId);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBatches = useMemo(() => {
    if (!batches) return [];
    if (!searchTerm) return batches;
    const lower = searchTerm.toLowerCase();
    return batches.filter(
      (b) =>
        (b.productName && b.productName.toLowerCase().includes(lower)) ||
        (b.barcode && b.barcode.toLowerCase().includes(lower)) ||
        b.productId.toLowerCase().includes(lower)
    );
  }, [batches, searchTerm]);
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="اختيار صنف من المورد" size="3xl">
      <div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-page-bg)]">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={20} />
          <input
            type="text"
            placeholder="ابحث باسم المنتج أو الباركود..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`${tokens.input} pl-4 pr-10`}
          />
        </div>
      </div>
      <div className="p-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <Spinner size={32} />
          </div>
        ) : error ? (
          <div className="text-center py-10 text-[var(--color-danger)]">حدث خطأ أثناء جلب الأصناف.</div>
        ) : filteredBatches.length === 0 ? (
          <div className="text-center py-10 flex flex-col items-center justify-center text-[var(--color-text-muted)]">
            <Package size={48} className="text-gray-300 mb-4" />
            <p className="text-lg font-semibold text-[var(--color-text-main)]">لا توجد أصناف متوفرة</p>
            <p className="text-sm mt-1">لا يوجد رصيد حالي لأي أصناف تم شراؤها من هذا المورد.</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {filteredBatches.map((batch) => (
              <button
                type="button"
                key={batch.batchId}
                className="flex items-center justify-between p-4 bg-white border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:shadow-sm transition-all text-right"
                onClick={() => onSelectBatch(batch)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 text-[var(--color-primary)] rounded-lg flex items-center justify-center">
                    <Package size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-text-main)]">
                      {batch.productName || 'منتج غير معروف'}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-[var(--color-text-muted)]">
                      {batch.barcode && <span>{batch.barcode}</span>}
                      <span>•</span>
                      <span>شراء: {new Date(batch.dateReceived).toLocaleDateString('ar-EG')}</span>
                    </div>
                  </div>
                </div>
                <div className="text-left flex flex-col items-end gap-1">
                  <div className="text-lg font-bold text-[var(--color-text-main)]">
                    {formatCurrency(batch.purchasePrice)}
                  </div>
                  <div className="text-sm">
                    الكمية المتاحة:{' '}
                    <span className="font-semibold text-[var(--color-primary)]">{batch.availableQuantity}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </BaseModal>
  );
}
```

## File: src/features/purchases/components/SupplierReturnsFilters.tsx
```typescript
import { Search, Plus } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
interface SupplierReturnsFiltersProps {
  onSearch: (val: string) => void;
  onNewReturn: () => void;
}
export function SupplierReturnsFilters({ onSearch, onNewReturn }: SupplierReturnsFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-wrap gap-4 items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-sm w-full">
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="ابحث..."
            onChange={(e) => onSearch(e.target.value)}
            className={`${tokens.input} pl-4 pr-10`}
          />
        </div>
      </div>
      <button onClick={onNewReturn} className={`${tokens.btn.primary} flex items-center gap-2`}>
        <Plus size={18} />
        <span>مرتجع جديد</span>
      </button>
    </div>
  );
}
```

## File: src/features/purchases/components/SupplierReturnsTable.tsx
```typescript
import { DataTable } from '@/shared/components/ui/DataTable';
import { SupplierReturnResponse, RETURN_REASON_LABELS, RETURN_REASON_COLORS } from '../schemas/supplierReturnSchemas';
import { formatCurrency } from '@/shared/utils/currency';
interface SupplierReturnsTableProps {
  data: SupplierReturnResponse[];
  isLoading: boolean;
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onRowClick?: (row: SupplierReturnResponse) => void;
}
export function SupplierReturnsTable(props: SupplierReturnsTableProps) {
  const columns = [
    {
      header: 'التاريخ',
      cell: (row: SupplierReturnResponse) => new Intl.DateTimeFormat('ar-EG', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(row.returnDate)),
    },
    {
      header: 'المورد',
      cell: (row: SupplierReturnResponse) => row.supplier?.name || '—',
    },
    {
      header: 'سبب الإرجاع',
      cell: (row: SupplierReturnResponse) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${RETURN_REASON_COLORS[row.reason] || RETURN_REASON_COLORS[3]}`}>
          {RETURN_REASON_LABELS[row.reason] || 'غير معروف'}
        </span>
      ),
    },
    {
      header: 'عدد الأصناف',
      cell: (row: SupplierReturnResponse) => row.items?.length || 0,
    },
    {
      header: 'إجمالي المرتجع',
      cell: (row: SupplierReturnResponse) => (
        <span className="font-bold text-gray-900">{formatCurrency(row.totalReturnedAmount)}</span>
      ),
    },
  ];
  return <DataTable columns={columns} {...props} />;
}
```

## File: src/features/purchases/hooks/usePurchases.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { purchaseRepository } from "../api/PurchaseApi";
import { CreatePurchaseInvoiceRequest, PurchaseFilters } from "../schemas/purchaseSchemas";
export const PURCHASE_KEYS = {
  purchases: (filters: PurchaseFilters) => ["purchases", filters] as const,
  purchaseDetails: (id: string) => ["purchases", id] as const,
};
export function usePurchases(filters: PurchaseFilters) {
  return useQuery({
    queryKey: PURCHASE_KEYS.purchases(filters),
    queryFn: () => purchaseRepository.getPurchases(filters),
  });
}
export function usePurchaseInvoice(id: string) {
  return useQuery({
    queryKey: PURCHASE_KEYS.purchaseDetails(id),
    queryFn: () => purchaseRepository.getPurchaseInvoice(id),
    enabled: !!id,
  });
}
export function useCreatePurchaseInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreatePurchaseInvoiceRequest) => purchaseRepository.createPurchaseInvoice(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["purchases"] });
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
```

## File: src/features/purchases/hooks/useSupplierReturns.ts
```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supplierReturnRepository } from '../api/SupplierReturnApi';
import { SupplierReturnFilters, CreateSupplierReturnRequest } from '../schemas/supplierReturnSchemas';
export function useSupplierReturns(filters: SupplierReturnFilters) {
  return useQuery({
    queryKey: ['supplier-returns', filters],
    queryFn: () => supplierReturnRepository.getReturns(filters),
  });
}
export function useSupplierReturn(id: string) {
  return useQuery({
    queryKey: ['supplier-returns', id],
    queryFn: () => supplierReturnRepository.getReturn(id),
    enabled: !!id,
  });
}
export function useCreateSupplierReturn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSupplierReturnRequest) => supplierReturnRepository.createReturn(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["supplier-returns"] });
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
```

## File: src/features/purchases/pages/NewPurchasePage.tsx
```typescript
import { useEffect } from 'react';
import { PurchaseInvoiceForm } from '../components/PurchaseInvoiceForm';
import { useCreatePurchaseInvoice } from '../hooks/usePurchases';
import { toast } from 'sonner';
import { getApiErrorMessage } from '@/shared/utils/apiError';
import { CreatePurchaseInvoiceRequest } from '../schemas/purchaseSchemas';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useNavigate } from 'react-router-dom';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
export function NewPurchasePage() {
  const { mutate: createInvoice, isPending } = useCreatePurchaseInvoice();
  const { setTitle, setBackButton } = useHeaderStore();
  const navigate = useNavigate();
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(3);
  useEffect(() => {
    setTitle("فاتورة مشتريات جديدة");
    setBackButton(true, "/purchases/history");
  }, [setTitle, setBackButton]);
  const handleSubmit = async (data: CreatePurchaseInvoiceRequest) => {
    if (data.paidAmount > 0) {
      const source = await promptPaymentSource();
      if (!source) return;
      data.paymentSource = source;
    }
    createInvoice(data, {
      onSuccess: () => {
        toast.success("تم حفظ فاتورة المشتريات بنجاح وإضافة الكميات!");
        navigate("/purchases/history");
      },
      onError: (err: unknown) => {
        toast.error(getApiErrorMessage(err, "حدث خطأ أثناء حفظ الفاتورة"));
      }
    });
  };
  return (
    <>
      <PaymentSourcePromptModal />
      <div className="space-y-4 w-full">
        <PurchaseInvoiceForm onSubmit={handleSubmit} isSubmitting={isPending} />
      </div>
    </>
  );
}
```

## File: src/features/purchases/pages/NewSupplierReturnPage.tsx
```typescript
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useCreateSupplierReturn } from '../hooks/useSupplierReturns';
import { tokens } from '@/shared/styles/tokens';
import { useSuppliers } from '@/features/suppliers/hooks/useSuppliers';
import { Package, Trash2, AlertCircle, ShoppingCart } from 'lucide-react';
import { CreateSupplierReturnItemRequest } from '../schemas/supplierReturnSchemas';
import { formatCurrency } from '@/shared/utils/currency';
import { getApiErrorMessage } from '@/shared/utils/apiError';
import { SupplierBatchPickerModal } from '../components/SupplierBatchPickerModal';
import { SupplierBatchResponse } from '@/features/suppliers/schemas/supplierSchemas';
import { ReturnOptionsForm } from '@/features/sales/components/ReturnOptionsForm';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
export function NewSupplierReturnPage() {
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();
  const createReturn = useCreateSupplierReturn();
  const { data: suppliersData, isLoading: isLoadingSuppliers } = useSuppliers({ pageSize: 100 });
  const [supplierId, setSupplierId] = useState('');
  const [reason, setReason] = useState<number>(1);
  const [notes, setNotes] = useState('');
  const [items, setItems] = useState<CreateSupplierReturnItemRequest[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCashRefund, setIsCashRefund] = useState(false);
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(4);
  useEffect(() => {
    setTitle('Ù…Ø±ØªØ¬Ø¹ Ù…ÙˆØ±Ø¯ Ø¬Ø¯ÙŠØ¯');
    setBackButton(true, '/purchases/returns');
  }, [setTitle, setBackButton]);
  const handleOpenModal = () => {
    if (!supplierId) {
      setError('ÙŠØ±Ø¬Ù‰ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù…ÙˆØ±Ø¯ Ø£ÙˆÙ„Ø§Ù‹ Ù‚Ø¨Ù„ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ø£ØµÙ†Ø§Ù');
      return;
    }
    setError(null);
    setIsModalOpen(true);
  };
  const handleSelectBatch = (batch: SupplierBatchResponse) => {
    if (items.some(i => i.batchId === batch.batchId)) {
      alert('ØªÙ… Ø¥Ø¶Ø§ÙØ© Ù‡Ø°Ø§ Ø§Ù„ØµÙ†Ù Ù…Ø³Ø¨Ù‚Ø§Ù‹');
      return;
    }
    setItems([...items, {
      productId: batch.productId,
      batchId: batch.batchId,
      quantity: 1,
      returnPrice: batch.purchasePrice
    }]);
    setIsModalOpen(false);
  };
  const handleUpdateItem = (index: number, field: keyof CreateSupplierReturnItemRequest, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };
  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!supplierId) return setError('ÙŠØ¬Ø¨ Ø§Ø®ØªÙŠØ§Ø± Ù…ÙˆØ±Ø¯');
    if (items.length === 0) return setError('ÙŠØ¬Ø¨ Ø¥Ø¶Ø§ÙØ© ØµÙ†Ù ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„');
    if (items.some(i => !i.productId || !i.batchId || i.quantity <= 0)) {
      return setError('ÙŠØ±Ø¬Ù‰ Ø§Ø³ØªÙƒÙ…Ø§Ù„ Ø¬Ù…ÙŠØ¹ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø£ØµÙ†Ø§Ù Ø¨Ø´ÙƒÙ„ ØµØ­ÙŠØ­ (Ù…Ø¹Ø±Ù Ø§Ù„Ù…Ù†ØªØ¬ ÙˆÙ…Ø¹Ø±Ù Ø§Ù„Ø¯ÙØ¹Ø© ÙˆØ§Ù„ÙƒÙ…ÙŠØ©)');
    }
    let finalPaymentSource: number | undefined;
    if (isCashRefund) {
      const sourceId = await promptPaymentSource();
      if (!sourceId) return;
      finalPaymentSource = sourceId;
    }
    createReturn.mutate(
      { supplierId, reason: reason as 1 | 2 | 3, notes, items, isCashRefund, paymentSource: finalPaymentSource },
      {
        onSuccess: () => {
          toast.success("ØªÙ… Ø­ÙØ¸ Ø§Ù„Ù…Ø±ØªØ¬Ø¹ Ø¨Ù†Ø¬Ø§Ø­!");
          navigate('/purchases/returns');
        },
        onError: (err: unknown) => setError(getApiErrorMessage(err, 'Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø­ÙØ¸ Ø§Ù„Ù…Ø±ØªØ¬Ø¹'))
      }
    );
  };
  const totalAmount = items.reduce((sum, item) => sum + (item.quantity * item.returnPrice), 0);
  return (
    <div className="w-full space-y-6 pb-20">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 border border-red-200">
          <AlertCircle size={20} />
          <p>{error}</p>
        </div>
      )}
      <form id="new-return-form" onSubmit={handleSubmit} className="space-y-6">
        {}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ù…Ø±ØªØ¬Ø¹ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={`${tokens.font.label} block mb-2`}>Ø§Ù„Ù…ÙˆØ±Ø¯ <span className="text-red-500">*</span></label>
              <select
                value={supplierId}
                onChange={(e) => setSupplierId(e.target.value)}
                className={tokens.input}
                disabled={isLoadingSuppliers}
              >
                <option value="">-- Ø§Ø®ØªØ± Ø§Ù„Ù…ÙˆØ±Ø¯ --</option>
                {suppliersData?.items.map(s => (
                  <option key={s.supplierId} value={s.supplierId}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
          <ReturnOptionsForm
            reason={reason}
            onReasonChange={setReason}
            isCashRefund={isCashRefund}
            onCashRefundChange={setIsCashRefund}
            notes={notes}
            onNotesChange={setNotes}
          />
        </div>
        {/* Items */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h2 className="text-lg font-bold text-gray-800">Ø§Ù„Ø£ØµÙ†Ø§Ù Ø§Ù„Ù…Ø±ØªØ¬Ø¹Ø© <span className="text-red-500">*</span></h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleOpenModal}
                className="text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors"
              >
                <ShoppingCart size={16} /> Ø§Ø®ØªÙŠØ§Ø± ØµÙ†Ù Ù…Ù† Ø§Ù„Ù…ÙˆØ±Ø¯
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="flex flex-wrap md:flex-nowrap items-end gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg relative group">
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="absolute top-2 left-2 text-gray-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors"
                  title="Ø­Ø°Ù Ø§Ù„ØµÙ†Ù"
                >
                  <Trash2 size={16} />
                </button>
                <div className="w-full md:w-1/3">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Ù…Ø¹Ø±Ù Ø§Ù„Ù…Ù†ØªØ¬ (ID)</label>
                  <input
                    type="text"
                    value={item.productId}
                    readOnly
                    className={tokens.input + ' py-2 text-sm bg-gray-100 text-gray-500 cursor-not-allowed'}
                    placeholder="Product ID..."
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Ù…Ø¹Ø±Ù Ø§Ù„Ø¯ÙØ¹Ø© (Batch ID)</label>
                  <input
                    type="text"
                    value={item.batchId}
                    readOnly
                    className={tokens.input + ' py-2 text-sm bg-gray-100 text-gray-500 cursor-not-allowed'}
                    placeholder="Batch ID..."
                  />
                </div>
                <div className="w-1/2 md:w-24">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Ø§Ù„ÙƒÙ…ÙŠØ©</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || ''}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => handleUpdateItem(index, 'quantity', Number(e.target.value))}
                    className={tokens.input + ' py-2 text-sm text-center'}
                  />
                </div>
                <div className="w-1/2 md:w-32">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Ø³Ø¹Ø± Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.returnPrice || ''}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => handleUpdateItem(index, 'returnPrice', Number(e.target.value))}
                    className={tokens.input + ' py-2 text-sm text-center'}
                  />
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="py-10 text-center border-2 border-dashed border-gray-200 rounded-xl">
                <Package size={40} className="mx-auto text-gray-300 mb-3" />
                <p className="text-gray-500">Ù„Ù… ÙŠØªÙ… Ø¥Ø¶Ø§ÙØ© Ø£ÙŠ Ø£ØµÙ†Ø§Ù Ù„Ù„Ù…Ø±ØªØ¬Ø¹.</p>
                <p className="text-sm text-gray-400 mt-1">Ø§Ø¶ØºØ· Ø¹Ù„Ù‰ Ø²Ø± Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ù„Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ø£ØµÙ†Ø§Ù.</p>
              </div>
            )}
          </div>
        </div>
      </form>
      {}
      <div className="fixed bottom-0 left-0 right-0 md:right-64 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] flex justify-between items-center z-10">
        <div>
          <p className="text-sm text-gray-500 font-semibold">Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ù…Ø±ØªØ¬Ø¹</p>
          <p className="text-xl font-bold text-blue-700">{formatCurrency(totalAmount)}</p>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={() => navigate('/purchases/returns')} className={tokens.btn.secondary}>
            Ø¥Ù„ØºØ§Ø¡
          </button>
          <button
            type="submit"
            form="new-return-form"
            disabled={createReturn.isPending}
            className={`${tokens.btn.primary} disabled:opacity-50 min-w-[120px]`}
          >
            {createReturn.isPending ? 'Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø­ÙØ¸...' : 'Ø­ÙØ¸ Ø§Ù„Ù…Ø±ØªØ¬Ø¹'}
          </button>
        </div>
      </div>
      <SupplierBatchPickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        supplierId={supplierId}
        onSelectBatch={handleSelectBatch}
      />
      <PaymentSourcePromptModal />
    </div>
  );
}
```

## File: src/features/purchases/pages/PurchaseInvoiceDetailsPage.tsx
```typescript
import { useParams, useNavigate } from 'react-router-dom';
import { usePurchaseInvoice } from '../hooks/usePurchases';
import { Printer, AlertCircle, Package, ShoppingCart, CheckCircle, Clock, Building2, ChevronLeft } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { BackButton } from '@/shared/components/ui/BackButton';
import { Spinner } from '@/shared/components/ui/Spinner';
import { useEffect } from 'react';
export function PurchaseInvoiceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();
  const { data: invoice, isLoading, error } = usePurchaseInvoice(id!);
  useEffect(() => {
    if (invoice) {
      setTitle(`ÙØ§ØªÙˆØ±Ø© Ù…Ø´ØªØ±ÙŠØ§Øª #${invoice.invoiceNumber}`);
    } else {
      setTitle('ØªÙØ§ØµÙŠÙ„ Ø§Ù„ÙØ§ØªÙˆØ±Ø©');
    }
    setBackButton(true, "/purchases/history");
  }, [invoice, setTitle, setBackButton]);
  if (isLoading) {
    return (
      <div className="p-6 h-screen bg-gray-50">
        <BackButton to="/purchases/history" label="Ø±Ø¬ÙˆØ¹ Ù„Ù„Ø³Ø¬Ù„" />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Spinner size={40} className="mx-auto mb-3" />
            <p className="text-gray-500">Ø¬Ø§Ø±ÙŠ ØªØ­Ù…ÙŠÙ„ ØªÙØ§ØµÙŠÙ„ Ø§Ù„ÙØ§ØªÙˆØ±Ø©...</p>
          </div>
        </div>
      </div>
    );
  }
  if (error || !invoice) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <AlertCircle size={48} className="text-red-400" />
        <p className="text-gray-500">Ø§Ù„ÙØ§ØªÙˆØ±Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø© Ø£Ùˆ Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ­Ù…ÙŠÙ„.</p>
        <button className={tokens.btn.primary} onClick={() => navigate('/purchases/history')}>
          Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ø³Ø¬Ù„ Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª
        </button>
      </div>
    );
  }
  const isPaid = invoice.remainingAmount <= 0;
  return (
    <div className="space-y-5 max-w-5xl mx-auto">
      {}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-gray-500 text-sm">
            {new Intl.DateTimeFormat('ar-EG', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(invoice.invoiceDate))}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
            isPaid ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
          }`}>
            {isPaid
              ? <><CheckCircle size={13} /> Ù…Ø¯ÙÙˆØ¹Ø© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„</>
              : <><Clock size={13} /> Ù…ØªØ¨Ù‚ÙŠ Ø¯ÙØ¹</>
            }
          </span>
        </div>
        <button
          className={`${tokens.btn.secondary} flex items-center gap-2`}
          onClick={() => window.print()}
        >
          <Printer size={16} />
          <span>Ø·Ø¨Ø§Ø¹Ø©</span>
        </button>
      </div>
      {}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {}
        <div
          className={`${tokens.card} p-4 md:col-span-1 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group`}
          onClick={() => invoice.supplier?.id && navigate(`/contacts/suppliers/${invoice.supplier.id}`)}
        >
          <p className="text-xs text-gray-500 mb-2">Ø§Ù„Ù…ÙˆØ±Ø¯</p>
          <div className="flex items-center gap-3">
            {}
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
              <Building2 size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                {invoice.supplier?.name || '-'}
              </p>
              {invoice.supplier?.phone && (
                <p className="text-xs text-gray-400 mt-0.5">{invoice.supplier.phone}</p>
              )}
            </div>
            <ChevronLeft size={14} className="text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0" />
          </div>
        </div>
        {}
        <div className={`${tokens.card} p-4`}>
          <p className="text-xs text-gray-500 mb-1">Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„ÙØ§ØªÙˆØ±Ø©</p>
          <p className="text-base font-bold text-gray-900">{formatCurrency(invoice.totalAmount)}</p>
        </div>
        {}
        <div className={`${tokens.card} p-4`}>
          <p className="text-xs text-gray-500 mb-1">Ø§Ù„Ù…Ø¨Ù„Øº Ø§Ù„Ù…Ø¯ÙÙˆØ¹</p>
          <p className="text-base font-bold text-green-600">{formatCurrency(invoice.paidAmount)}</p>
        </div>
        {}
        <div className={`${tokens.card} p-4`}>
          <p className="text-xs text-gray-500 mb-1">Ø§Ù„Ù…ØªØ¨Ù‚ÙŠ Ù„Ù„Ù…ÙˆØ±Ø¯</p>
          <p className={`text-base font-bold ${invoice.remainingAmount > 0 ? 'text-red-600' : 'text-gray-400'}`}>
            {formatCurrency(invoice.remainingAmount)}
          </p>
        </div>
      </div>
      {}
      {invoice.notes && (
        <div className={`${tokens.card} p-4 border-r-4 border-blue-400 bg-blue-50`}>
          <p className="text-xs text-blue-600 font-semibold mb-1">Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„ÙØ§ØªÙˆØ±Ø©</p>
          <p className="text-gray-700 text-sm">{invoice.notes}</p>
        </div>
      )}
      {}
      <div className={tokens.card}>
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-800">
            Ø§Ù„Ø£ØµÙ†Ø§Ù
            <span className="mr-2 text-sm font-normal text-gray-400">({invoice.items?.length || 0} ØµÙ†Ù)</span>
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide border-b border-gray-100">
                <th className="px-5 py-3 font-semibold">Ø§Ù„ØµÙ†Ù</th>
                <th className="px-5 py-3 font-semibold text-center">Ø§Ù„ÙƒÙ…ÙŠØ©</th>
                <th className="px-5 py-3 font-semibold text-center">Ø³Ø¹Ø± Ø§Ù„Ø´Ø±Ø§Ø¡ (Ù„Ù„ÙˆØ­Ø¯Ø©)</th>
                <th className="px-5 py-3 font-semibold text-left">Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {invoice.items?.map((item, index) => (
                <tr key={item.purchaseInvoiceItemId ?? index} className="hover:bg-gray-50 transition-colors">
                  {}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {item.product?.imageUrl ? (
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name ?? ''}
                          className="w-10 h-10 rounded-lg object-cover border border-gray-100"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                          <Package size={18} />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-800">{item.product?.name || 'â€”'}</p>
                        {item.product?.barcode && (
                          <p className="text-xs text-gray-400 dir-ltr mt-0.5">{item.product.barcode}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  {}
                  <td className="px-5 py-4 text-center">
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 font-bold text-sm px-2.5 py-0.5 rounded-full">
                      <ShoppingCart size={12} />
                      {item.quantity}
                    </span>
                  </td>
                  {}
                  <td className="px-5 py-4 text-center text-gray-700 font-medium">
                    {formatCurrency(item.unitCost)}
                  </td>
                  {}
                  <td className="px-5 py-4 text-left font-bold text-gray-900">
                    {formatCurrency(item.lineTotal)}
                  </td>
                </tr>
              ))}
            </tbody>
            {}
            <tfoot className="bg-gray-50 border-t border-gray-200">
              <tr>
                <td colSpan={3} className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„ÙƒÙ„ÙŠ Ù„Ù„ÙØ§ØªÙˆØ±Ø©
                </td>
                <td className="px-5 py-3 text-left font-bold text-lg text-gray-900">
                  {formatCurrency(invoice.totalAmount)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
```

## File: src/features/purchases/pages/PurchasesHistoryPage.tsx
```typescript
import { useState } from 'react';
import { usePurchases } from '../hooks/usePurchases';
import { PurchasesTable } from '../components/PurchasesTable';
import { PurchasesFilters } from '../components/PurchasesFilters';
import { tokens } from '@/shared/styles/tokens';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
export function PurchasesHistoryPage() {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [supplierId, setSupplierId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { data, isLoading } = usePurchases({
    pageNumber: pageIndex,
    pageSize: 10,
    searchValue: searchTerm || undefined,
    supplierId: supplierId || undefined,
    startDate: startDate || undefined,
    endDate: endDate || undefined,
  });
  return (
    <div className="space-y-4">
      <div className="flex justify-end items-center">
        <button
          onClick={() => navigate('/purchases/new')}
          className={`${tokens.btn.primary} flex items-center gap-2`}
        >
          <Plus size={18} />
          <span>فاتورة مشتريات جديدة</span>
        </button>
      </div>
      <PurchasesFilters
        onSearch={(t) => { setSearchTerm(t); setPageIndex(1); }}
        onSupplierChange={(s) => { setSupplierId(s); setPageIndex(1); }}
        onDateChange={(start, end) => { setStartDate(start); setEndDate(end); setPageIndex(1); }}
      />
      <PurchasesTable
        data={data}
        isLoading={isLoading}
        pageIndex={pageIndex}
        onNextPage={() => setPageIndex(p => p + 1)}
        onPrevPage={() => setPageIndex(p => p - 1)}
        onRowClick={(invoice) => {
          navigate(`/purchases/${invoice.purchaseInvoiceId}`);
        }}
      />
    </div>
  );
}
```

## File: src/features/purchases/pages/SupplierReturnDetailsPage.tsx
```typescript
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useSupplierReturn } from '../hooks/useSupplierReturns';
import { AlertCircle, Building2, ChevronLeft, Package, Clock } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { Spinner } from '@/shared/components/ui/Spinner';
import { RETURN_REASON_LABELS, RETURN_REASON_COLORS } from '../schemas/supplierReturnSchemas';
export function SupplierReturnDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();
  const { data: returnData, isLoading, error } = useSupplierReturn(id!);
  useEffect(() => {
    if (returnData) {
      setTitle(`Ù…Ø±ØªØ¬Ø¹ #${returnData.supplierReturnId.substring(0, 8)}`);
    } else {
      setTitle('ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ø±ØªØ¬Ø¹');
    }
    setBackButton(true, '/purchases/returns');
  }, [returnData, setTitle, setBackButton]);
  if (isLoading) {
    return (
      <div className="p-6 h-screen bg-gray-50">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Spinner size={40} className="mx-auto mb-3" />
            <p className="text-gray-500">Ø¬Ø§Ø±ÙŠ ØªØ­Ù…ÙŠÙ„ ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ø±ØªØ¬Ø¹...</p>
          </div>
        </div>
      </div>
    );
  }
  if (error || !returnData) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <AlertCircle size={48} className="text-red-400" />
        <p className="text-gray-500">Ø§Ù„Ù…Ø±ØªØ¬Ø¹ ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯ Ø£Ùˆ Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ­Ù…ÙŠÙ„.</p>
        <button className={tokens.btn.primary} onClick={() => navigate('/purchases/returns')}>
          Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ø³Ø¬Ù„ Ø§Ù„Ù…Ø±ØªØ¬Ø¹Ø§Øª
        </button>
      </div>
    );
  }
  return (
    <div className="space-y-5 w-full">
      {}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm flex items-center gap-1.5">
            <Clock size={16} />
            {new Intl.DateTimeFormat('ar-EG', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(returnData.returnDate))}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${RETURN_REASON_COLORS[returnData.reason] || RETURN_REASON_COLORS[3]}`}>
            {RETURN_REASON_LABELS[returnData.reason] || 'Ø³Ø¨Ø¨ ØºÙŠØ± Ù…Ø¹Ø±ÙˆÙ'}
          </span>
        </div>
      </div>
      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {}
        <div
          className={`${tokens.card} p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group`}
          onClick={() => returnData.supplier?.id && navigate(`/contacts/suppliers/${returnData.supplier.id}`)}
        >
          <p className="text-xs text-gray-500 mb-2">Ø§Ù„Ù…ÙˆØ±Ø¯</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
              <Building2 size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                {returnData.supplier?.name || '-'}
              </p>
              {returnData.supplier?.phone && (
                <p className="text-xs text-gray-400 mt-0.5">{returnData.supplier.phone}</p>
              )}
            </div>
            <ChevronLeft size={14} className="text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0" />
          </div>
        </div>
        {}
        <div className={`${tokens.card} p-4 flex flex-col justify-center`}>
          <p className="text-xs text-gray-500 mb-1">Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ù…Ø±ØªØ¬Ø¹</p>
          <p className="text-xl font-bold text-gray-900">{formatCurrency(returnData.totalReturnedAmount)}</p>
        </div>
      </div>
      {}
      {returnData.notes && (
        <div className={`${tokens.card} p-4 border-r-4 border-blue-400 bg-blue-50`}>
          <p className="text-xs text-blue-600 font-semibold mb-1">Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø§Ù„Ù…Ø±ØªØ¬Ø¹</p>
          <p className="text-gray-700 text-sm">{returnData.notes}</p>
        </div>
      )}
      {}
      <div className={tokens.card}>
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800">
            Ø§Ù„Ø£ØµÙ†Ø§Ù Ø§Ù„Ù…Ø±ØªØ¬Ø¹Ø©
            <span className="mr-2 text-sm font-normal text-gray-400">({returnData.items?.length || 0} ØµÙ†Ù)</span>
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide border-b border-gray-100">
                <th className="px-5 py-3 font-semibold">Ø§Ù„ØµÙ†Ù</th>
                <th className="px-5 py-3 font-semibold text-center">Ø§Ù„ÙƒÙ…ÙŠØ©</th>
                <th className="px-5 py-3 font-semibold text-center">Ø³Ø¹Ø± Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹ (Ù„Ù„ÙˆØ­Ø¯Ø©)</th>
                <th className="px-5 py-3 font-semibold text-left">Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {returnData.items?.map((item, index) => (
                <tr key={item.supplierReturnItemId ?? index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {item.product?.imageUrl ? (
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name ?? ''}
                          className="w-10 h-10 rounded-lg object-cover border border-gray-100"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                          <Package size={18} />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-800">{item.product?.name || 'â€”'}</p>
                        {item.product?.barcode && (
                          <p className="text-xs text-gray-400 dir-ltr mt-0.5">{item.product.barcode}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <span className="inline-flex items-center bg-blue-50 text-blue-700 font-bold text-sm px-2.5 py-0.5 rounded-full">
                      {item.quantity}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center text-gray-700 font-medium">
                    {formatCurrency(item.unitCost)}
                  </td>
                  <td className="px-5 py-4 text-left font-bold text-gray-900">
                    {formatCurrency(item.lineTotal)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 border-t border-gray-200">
              <tr>
                <td colSpan={3} className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„ÙƒÙ„ÙŠ
                </td>
                <td className="px-5 py-3 text-left font-bold text-lg text-gray-900">
                  {formatCurrency(returnData.totalReturnedAmount)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
```

## File: src/features/purchases/pages/SupplierReturnsPage.tsx
```typescript
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useSupplierReturns } from '../hooks/useSupplierReturns';
import { SupplierReturnsFilters } from '../components/SupplierReturnsFilters';
import { SupplierReturnsTable } from '../components/SupplierReturnsTable';
export function SupplierReturnsPage() {
  const [pageIndex, setPageIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();
  useEffect(() => {
    setTitle('مرتجعات الموردين');
    setBackButton(false);
  }, [setTitle, setBackButton]);
  const { data, isLoading } = useSupplierReturns({
    pageNumber: pageIndex,
    pageSize: 10,
    searchValue: searchTerm || undefined,
  });
  return (
    <div className="space-y-4 w-full">
      <SupplierReturnsFilters
        onSearch={(val) => { setSearchTerm(val); setPageIndex(1); }}
        onNewReturn={() => navigate('/purchases/returns/new')}
      />
      <SupplierReturnsTable
        data={data?.items || []}
        isLoading={isLoading}
        pageIndex={data?.pageNumber || 1}
        totalPages={data?.totalPages || 1}
        totalCount={data?.totalCount || 0}
        pageSize={data?.pageSize || 10}
        onNextPage={() => setPageIndex((p) => p + 1)}
        onPrevPage={() => setPageIndex((p) => p - 1)}
        onRowClick={(row) => navigate(`/purchases/returns/${row.supplierReturnId}`)}
      />
    </div>
  );
}
```

## File: src/features/purchases/schemas/__tests__/purchaseSchemas.test.ts
```typescript
import { createPurchaseInvoiceSchema } from '../purchaseSchemas';
describe('createPurchaseInvoiceSchema', () => {
  it('rejects an empty items list', () => {
    const result = createPurchaseInvoiceSchema.safeParse({
      supplierId: 's1',
      paidAmount: 0,
      items: [],
    });
    expect(result.success).toBe(false);
  });
  it('accepts a valid invoice payload', () => {
    const result = createPurchaseInvoiceSchema.safeParse({
      supplierId: 's1',
      paidAmount: 100,
      notes: 'ملاحظة',
      items: [
        {
          productId: 'p1',
          productName: 'منتج',
          quantity: 2,
          unitCost: 50,
          wholesalePrice: 60,
          retailPrice: 80,
        },
      ],
    });
    expect(result.success).toBe(true);
  });
  it('rejects quantity below 1', () => {
    const result = createPurchaseInvoiceSchema.safeParse({
      supplierId: 's1',
      paidAmount: 0,
      items: [
        {
          productId: 'p1',
          quantity: 0,
          unitCost: 10,
          wholesalePrice: 12,
          retailPrice: 15,
        },
      ],
    });
    expect(result.success).toBe(false);
  });
});
```

## File: src/features/purchases/schemas/purchaseSchemas.ts
```typescript
import * as z from 'zod';
import { BaseFilters } from '@/shared/types/pagination';
export const purchaseInvoiceItemSchema = z.object({
  productId: z.string().min(1, "ÙŠØ¬Ø¨ Ø§Ø®ØªÙŠØ§Ø± Ù…Ù†ØªØ¬"),
  productName: z.string().optional(),
  productUsage: z.number().optional(),
  quantity: z.number().min(1, "Ø§Ù„ÙƒÙ…ÙŠØ© ÙŠØ¬Ø¨ Ø£Ù† ØªÙƒÙˆÙ† Ø£ÙƒØ¨Ø± Ù…Ù† ØµÙØ±"),
  unitCost: z.number().min(0, "ØªÙƒÙ„ÙØ© Ø§Ù„ÙˆØ­Ø¯Ø© ÙŠØ¬Ø¨ Ø£Ù† ØªÙƒÙˆÙ† 0 Ø£Ùˆ Ø£ÙƒØ«Ø±"),
  wholesalePrice: z.number().min(0, "Ø³Ø¹Ø± Ø§Ù„Ø¬Ù…Ù„Ø© ØºÙŠØ± ØµØ§Ù„Ø­"),
  retailPrice: z.number().min(0, "Ø³Ø¹Ø± Ø§Ù„ØªØ¬Ø²Ø¦Ø© ØºÙŠØ± ØµØ§Ù„Ø­"),
  maintenancePrice: z.number().min(0, "Ø³Ø¹Ø± Ø§Ù„ØµÙŠØ§Ù†Ø© ØºÙŠØ± ØµØ§Ù„Ø­").optional(),
});
export type CreatePurchaseInvoiceItemRequest = z.infer<typeof purchaseInvoiceItemSchema>;
export const createPurchaseInvoiceSchema = z.object({
  supplierId: z.string().min(1, "ÙŠØ¬Ø¨ Ø§Ø®ØªÙŠØ§Ø± Ù…ÙˆØ±Ø¯"),
  paidAmount: z.number().min(0, "Ø§Ù„Ù…Ø¨Ù„Øº Ø§Ù„Ù…Ø¯ÙÙˆØ¹ ØºÙŠØ± ØµØ§Ù„Ø­"),
  paymentSource: z.number().optional(),
  notes: z.string().optional(),
  items: z.array(purchaseInvoiceItemSchema).min(1, "ÙŠØ¬Ø¨ Ø¥Ø¶Ø§ÙØ© Ù…Ù†ØªØ¬ ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„"),
});
export type CreatePurchaseInvoiceRequest = z.infer<typeof createPurchaseInvoiceSchema>;
export interface ProductSummary {
  productId: string;
  name?: string;
  barcode?: string;
  imageUrl?: string;
  retailPrice: number;
  wholesalePrice?: number;
  quantity: number;
}
export interface PurchaseInvoiceItemResponse {
  purchaseInvoiceItemId: string;
  product: ProductSummary;
  quantity: number;
  unitCost: number;
  lineTotal: number;
}
export interface PurchaseInvoiceResponse {
  purchaseInvoiceId: string;
  invoiceNumber: string;
  invoiceDate: string;
  supplier: {
    id: string;
    name: string;
    phone?: string;
  };
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  notes?: string;
  items: PurchaseInvoiceItemResponse[];
}
export interface PurchaseFilters extends BaseFilters {
  supplierId?: string;
  startDate?: string;
  endDate?: string;
}
```

## File: src/features/purchases/schemas/supplierReturnSchemas.ts
```typescript
import * as z from 'zod';
import { BaseFilters } from '@/shared/types/pagination';
export const RETURN_REASON_LABELS: Record<number, string> = {
  1: 'Ø¹ÙŠØ¨ Ø£Ùˆ Ø®Ù„Ù„ ÙÙŠ Ø§Ù„Ù…Ù†ØªØ¬',
  2: 'ØªØºÙŠÙŠØ± Ø±Ø£ÙŠ',
  3: 'Ø³Ø¨Ø¨ Ø¢Ø®Ø±',
};
export const RETURN_REASON_COLORS: Record<number, string> = {
  1: 'bg-red-50 text-red-700',
  2: 'bg-amber-50 text-amber-700',
  3: 'bg-gray-100 text-gray-600',
};
export interface SupplierReturnProductSummary {
  productId: string;
  name?: string;
  barcode?: string;
  imageUrl?: string;
  retailPrice: number;
  wholesalePrice?: number;
  quantity: number;
}
export interface SupplierReturnItemResponse {
  supplierReturnItemId: string;
  product: SupplierReturnProductSummary;
  quantity: number;
  unitCost: number;
  lineTotal: number;
}
export interface SupplierReturnResponse {
  supplierReturnId: string;
  supplier: {
    id: string;
    name: string;
    phone?: string;
  };
  reason: 1 | 2 | 3;
  notes?: string;
  totalReturnedAmount: number;
  returnDate: string;
  items: SupplierReturnItemResponse[];
}
export const createSupplierReturnItemSchema = z.object({
  productId: z.string().min(1, 'ÙŠØ¬Ø¨ Ø§Ø®ØªÙŠØ§Ø± Ù…Ù†ØªØ¬'),
  batchId: z.string().min(1, 'ÙŠØ¬Ø¨ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ø¯ÙØ¹Ø©'),
  quantity: z.number().min(1, 'Ø§Ù„ÙƒÙ…ÙŠØ© ÙŠØ¬Ø¨ Ø£Ù† ØªÙƒÙˆÙ† 1 Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„'),
  returnPrice: z.number().min(0, 'Ø³Ø¹Ø± Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹ ØºÙŠØ± ØµØ§Ù„Ø­'),
});
export type CreateSupplierReturnItemRequest = z.infer<typeof createSupplierReturnItemSchema>;
export const createSupplierReturnSchema = z.object({
  supplierId: z.string().min(1, 'ÙŠØ¬Ø¨ Ø§Ø®ØªÙŠØ§Ø± Ù…ÙˆØ±Ø¯'),
  reason: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  notes: z.string().optional(),
  items: z.array(createSupplierReturnItemSchema).min(1, 'ÙŠØ¬Ø¨ Ø¥Ø¶Ø§ÙØ© ØµÙ†Ù ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„'),
  isCashRefund: z.boolean().default(false),
  paymentSource: z.number().optional(),
});
export type CreateSupplierReturnRequest = z.infer<typeof createSupplierReturnSchema>;
export interface SupplierReturnFilters extends BaseFilters {
  supplierId?: string;
}
```

## File: src/features/sales/api/salesApi.ts
```typescript
import { apiClient } from "@/lib/axios";
import { CreateSalesInvoiceRequest, SalesInvoiceResponse, CreateSalesReturnRequest, SalesReturnResponse } from "../schemas/salesSchemas";
import { PaginatedList } from "@/shared/types/pagination";
export const salesRepository = {
  createInvoice: async (data: CreateSalesInvoiceRequest): Promise<SalesInvoiceResponse> => {
    const response = await apiClient.post<SalesInvoiceResponse>('/sales-invoices', data);
    return response.data;
  },
  getInvoice: async (id: string): Promise<SalesInvoiceResponse> => {
    const response = await apiClient.get<SalesInvoiceResponse>(`/sales-invoices/${id}`);
    return response.data;
  },
  getInvoices: async (filters: { pageNumber?: number; pageSize?: number; searchValue?: string }): Promise<PaginatedList<SalesInvoiceResponse>> => {
    const response = await apiClient.get<PaginatedList<SalesInvoiceResponse>>('/sales-invoices', { params: filters });
    return response.data;
  },
  createReturn: async (data: CreateSalesReturnRequest): Promise<SalesReturnResponse> => {
    const response = await apiClient.post<SalesReturnResponse>('/sales-returns', data);
    return response.data;
  },
  getReturn: async (id: string): Promise<SalesReturnResponse> => {
    const response = await apiClient.get<SalesReturnResponse>(`/sales-returns/${id}`);
    return response.data;
  },
  getReturns: async (filters: { pageNumber?: number; pageSize?: number; searchValue?: string }): Promise<PaginatedList<SalesReturnResponse>> => {
    const response = await apiClient.get<PaginatedList<SalesReturnResponse>>('/sales-returns', { params: filters });
    return response.data;
  }
};
```

## File: src/features/sales/components/BatchSelectionModal.tsx
```typescript
import { Building2 } from 'lucide-react';
import { ProductResponse, ProductBatchResponse } from '@/features/inventory/schemas/inventorySchemas';
import { formatCurrency } from '@/shared/utils/currency';
import { BaseModal } from '@/shared/components/ui/BaseModal';
interface BatchSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductResponse | null;
  onSelectBatch: (batch: ProductBatchResponse, selectedPrice: number) => void;
}
export function BatchSelectionModal({ isOpen, onClose, product, onSelectBatch }: BatchSelectionModalProps) {
  if (!product) return null;
  const availableBatches = product.batches.filter((b) => b.availableQuantity > 0);
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="اختيار الشركة والسعر" subtitle={product.name} size="3xl">
      <div className="p-6">
        {availableBatches.length === 0 ? (
          <div className="text-center py-10 text-[var(--color-text-muted)] font-medium">
            لا توجد دفعات متاحة لهذا المنتج في المخزون.
          </div>
        ) : (
          <div className="space-y-3">
            {availableBatches.map((batch) => (
              <div
                key={batch.batchId}
                className="flex items-center justify-between p-4 bg-white border border-[var(--color-border)] rounded-xl gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 size={24} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[var(--color-text-main)] truncate">
                      {batch.supplierName || 'بدون مورد'}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">
                      تاريخ: {new Date(batch.dateReceived).toLocaleDateString('ar-EG')} • متاح {batch.availableQuantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => onSelectBatch(batch, batch.wholesalePrice)}
                    className="flex items-center justify-between w-[160px] p-3 bg-white hover:bg-gray-50 border-2 border-[var(--color-border)] hover:border-emerald-600 text-[var(--color-text-main)] rounded-xl transition-colors"
                  >
                    <span className="text-sm font-bold text-[var(--color-text-muted)]">جملة</span>
                    <span className="font-bold">{formatCurrency(batch.wholesalePrice)}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectBatch(batch, batch.retailPrice)}
                    className="flex items-center justify-between w-[160px] p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
                  >
                    <span className="text-sm font-bold">تجزئة</span>
                    <span className="font-bold">{formatCurrency(batch.retailPrice)}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </BaseModal>
  );
}
```

## File: src/features/sales/components/CheckoutModal.tsx
```typescript
import { useState, useEffect } from 'react';
import { User, Phone, Banknote } from 'lucide-react';
import { PaymentMethod, SaleType } from '../schemas/salesSchemas';
import { PaymentSource } from '@/features/finance/schemas/financeSchemas';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { BaseModal } from '@/shared/components/ui/BaseModal';
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  paymentMethod: PaymentMethod | null;
  onConfirm: (customerName: string, customerPhone: string, paidAmount: number, paymentSource?: PaymentSource, saleType?: SaleType) => void;
  isSubmitting: boolean;
}
export function CheckoutModal({
  isOpen,
  onClose,
  totalAmount,
  paymentMethod,
  onConfirm,
  isSubmitting,
}: CheckoutModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [saleType, setSaleType] = useState<SaleType>(SaleType.Retail);
  const [paidAmount, setPaidAmount] = useState<number | string>(totalAmount);
  const [error, setError] = useState('');
  const { promptPaymentSource, PaymentSourcePromptModal, isPoliciesLoading } = usePaymentSourcePrompt(1); // GlobalTransactionCategory.CashSale
  useEffect(() => {
    if (isOpen) {
      setCustomerName('');
      setCustomerPhone('');
      setPaidAmount(paymentMethod === PaymentMethod.Cash ? totalAmount : 0);
      setError('');
    }
  }, [isOpen, paymentMethod, totalAmount]);
  if (!paymentMethod) return null;
  const isCredit = paymentMethod === PaymentMethod.Deferred;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const paid = Number(paidAmount);
    if (isNaN(paid) || paid < 0) {
      setError('ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ù…Ø¨Ù„Øº Ø¯ÙØ¹ ØµØ­ÙŠØ­');
      return;
    }
    if (isCredit) {
      if (!customerName.trim() || !customerPhone.trim()) {
        setError('ÙŠØ¬Ø¨ Ø¥Ø¯Ø®Ø§Ù„ Ø§Ø³Ù… Ø§Ù„Ø¹Ù…ÙŠÙ„ ÙˆØ±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ ÙÙŠ Ø­Ø§Ù„Ø© Ø§Ù„Ø¨ÙŠØ¹ Ø§Ù„Ø¢Ø¬Ù„');
        return;
      }
      if (paid >= totalAmount) {
        setError('Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„Ù…Ø¨Ù„Øº Ø§Ù„Ù…Ø¯ÙÙˆØ¹ Ø£ÙƒØ¨Ø± Ù…Ù† Ø£Ùˆ ÙŠØ³Ø§ÙˆÙŠ Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ ÙÙŠ Ø­Ø§Ù„Ø© Ø§Ù„Ø¨ÙŠØ¹ Ø§Ù„Ø¢Ø¬Ù„');
        return;
      }
    } else if (paid < totalAmount) {
      setError('ÙÙŠ Ø­Ø§Ù„Ø© Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù†Ù‚Ø¯ÙŠ ÙŠØ¬Ø¨ Ø¯ÙØ¹ Ø§Ù„Ù…Ø¨Ù„Øº ÙƒØ§Ù…Ù„Ø§Ù‹');
      return;
    }
    let finalSource: PaymentSource | undefined = undefined;
    if (paid > 0) {
      const source = await promptPaymentSource();
      if (!source) return; // User closed the prompt
      finalSource = source;
    }
    onConfirm(customerName, customerPhone, isCredit ? paid : totalAmount, finalSource, saleType);
  };
  return (
    <>
      <PaymentSourcePromptModal />
      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        title={isCredit ? 'Ø¥ØªÙ…Ø§Ù… Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ø¢Ø¬Ù„' : 'Ø¥ØªÙ…Ø§Ù… Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù†Ù‚Ø¯ÙŠ'}
        size="md"
        zIndexClassName="z-[60]"
        headerClassName={isCredit ? 'bg-amber-50' : 'bg-emerald-50'}
      >
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-[var(--color-page-bg)] p-4 rounded-xl flex items-center justify-between border border-[var(--color-border)]">
            <span className="text-[var(--color-text-muted)] font-semibold">Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨:</span>
            <span className="text-2xl font-bold text-[var(--color-text-main)]">{formatCurrency(totalAmount)}</span>
          </div>
          {error && (
            <div className="p-3 bg-red-50 text-[var(--color-danger)] rounded-lg text-sm font-semibold text-center border border-red-100">
              {error}
            </div>
          )}
          <div>
            <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                نوع الفاتورة
              </span>
            </label>
            <select
              value={saleType}
              onChange={(e) => setSaleType(Number(e.target.value) as SaleType)}
              className={tokens.input + ' py-3 mb-4'}
            >
              <option value={SaleType.Retail}>قطاعي (تجزئة)</option>
              <option value={SaleType.Wholesale}>جملة</option>
            </select>
          </div>
          <div>`n            <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">`n              <span className="flex items-center gap-1.5">`n                <Phone size={16} /> Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ
              </span>
              {isCredit && <span className="text-[var(--color-danger)]">*</span>}
            </label>
            <input
              type="text"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="Ù…Ø«Ø§Ù„: 010xxxxxxxx"
              className={tokens.input + ' py-3 text-left'}
              required={isCredit}
              dir="ltr"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <User size={16} /> Ø§Ø³Ù… Ø§Ù„Ø¹Ù…ÙŠÙ„
              </span>
              {isCredit && <span className="text-[var(--color-danger)]">*</span>}
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Ù…Ø«Ø§Ù„: Ø£Ø­Ù…Ø¯ Ù…Ø­Ù…Ø¯"
              className={tokens.input + ' py-3'}
              required={isCredit}
            />
          </div>
          {isCredit && (
            <div className="pt-2 border-t border-[var(--color-border)]">
              <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Banknote size={16} /> Ø§Ù„Ù…Ø¨Ù„Øº Ø§Ù„Ù…Ø¯ÙÙˆØ¹ Ø§Ù„Ø¢Ù†
                </span>
                <span className="text-[var(--color-danger)]">*</span>
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={paidAmount}
                onChange={(e) => setPaidAmount(e.target.value)}
                onFocus={() => {
                  if (paidAmount === 0 || paidAmount === '0') setPaidAmount('');
                }}
                onBlur={(e) => {
                  if (e.target.value === '') setPaidAmount(0);
                }}
                className={`${tokens.input} py-3 text-xl font-bold text-[var(--color-primary)] text-left`}
                required
                dir="ltr"
              />
              {Number(paidAmount) >= 0 && Number(paidAmount) < totalAmount && (
                <p className="text-sm text-amber-700 mt-2.5 font-bold">
                  Ø§Ù„Ù…ØªØ¨Ù‚ÙŠ ÙƒÙ…Ø¯ÙŠÙˆÙ†ÙŠØ©: {formatCurrency(totalAmount - Number(paidAmount))}
                </p>
              )}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting || isPoliciesLoading}
            className={`w-full py-3.5 rounded-xl font-bold text-white text-lg disabled:opacity-70 ${
              isCredit ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {isSubmitting ? 'Ø¬Ø§Ø±ÙŠ Ø§Ù„ØªØ£ÙƒÙŠØ¯...' : 'ØªØ£ÙƒÙŠØ¯ ÙˆØ­ÙØ¸ Ø§Ù„ÙØ§ØªÙˆØ±Ø©'}
          </button>
        </form>
      </BaseModal>
    </>
  );
}
```

## File: src/features/sales/components/InvoiceDetailsCard.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { SalesInvoiceResponse } from '../schemas/salesSchemas';
interface InvoiceDetailsCardProps {
  invoice: SalesInvoiceResponse;
}
export function InvoiceDetailsCard({ invoice }: InvoiceDetailsCardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg">
      <div>
        <p className="text-sm text-gray-500">رقم الفاتورة</p>
        <p className="font-semibold">{invoice.invoiceNumber}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">العميل</p>
        <p className="font-semibold">{invoice.customer?.name || 'نقدي'}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">الإجمالي</p>
        <p className="font-semibold text-blue-600">{formatCurrency(invoice.totalAmount)}</p>
      </div>
    </div>
  );
}
```

## File: src/features/sales/components/InvoiceDetailsModal.tsx
```typescript
import { Receipt } from 'lucide-react';
import { useSalesInvoiceDetails } from '@/features/sales/hooks/useSales';
import { formatCurrency } from '@/shared/utils/currency';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { Spinner } from '@/shared/components/ui/Spinner';
interface InvoiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoiceId: string | null;
}
export function InvoiceDetailsModal({ isOpen, onClose, invoiceId }: InvoiceDetailsModalProps) {
  const { data: invoice, isLoading } = useSalesInvoiceDetails(invoiceId || '');
  return (
    <BaseModal
      isOpen={isOpen && !!invoiceId}
      onClose={onClose}
      title="تفاصيل الفاتورة"
      subtitle={invoice ? `رقم الفاتورة: ${invoice.invoiceNumber}` : undefined}
      size="3xl"
    >
      <div>
        {isLoading ? (
          <div className="py-12 flex justify-center">
            <Spinner size={32} />
          </div>
        ) : invoice ? (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[var(--color-page-bg)] rounded-xl p-4 border border-[var(--color-border)]">
                <span className="text-sm text-[var(--color-text-muted)] block mb-1">الإجمالي</span>
                <span className="text-xl font-bold text-[var(--color-text-main)]" dir="ltr">
                  {formatCurrency(invoice.totalAmount)}
                </span>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <span className="text-sm text-emerald-700 block mb-1">المدفوع</span>
                <span className="text-xl font-bold text-emerald-700" dir="ltr">
                  {formatCurrency(invoice.paidAmount)}
                </span>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                <span className="text-sm text-[var(--color-danger)] block mb-1">المتبقي (آجل)</span>
                <span className="text-xl font-bold text-[var(--color-danger)]" dir="ltr">
                  {formatCurrency(invoice.remainingAmount)}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-3 flex items-center gap-2">
                <Receipt size={18} /> المنتجات المباعة
              </h3>
              <div className="border border-[var(--color-border)] rounded-xl overflow-hidden">
                <table className="w-full text-right text-sm">
                  <thead className="bg-[var(--color-page-bg)] border-b border-[var(--color-border)] text-[var(--color-text-muted)] font-semibold">
                    <tr>
                      <th className="px-4 py-3">المنتج</th>
                      <th className="px-4 py-3">الكمية</th>
                      <th className="px-4 py-3">سعر الوحدة</th>
                      <th className="px-4 py-3">الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {invoice.items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3 font-medium">{item.productName || 'منتج غير معروف'}</td>
                        <td className="px-4 py-3">
                          {item.quantity}
                          {item.returnedQuantity > 0 && (
                            <span className="text-xs text-[var(--color-danger)] mr-2 block">
                              (تم استرجاع {item.returnedQuantity})
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3" dir="ltr">
                          {formatCurrency(item.unitPrice)}
                        </td>
                        <td className="px-4 py-3 font-bold" dir="ltr">
                          {formatCurrency(item.lineTotal)}
                        </td>
                      </tr>
                    ))}
                    {invoice.items.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-4 py-8 text-center text-[var(--color-text-muted)]">
                          لا يوجد منتجات
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-12 text-center text-[var(--color-danger)] font-bold">حدث خطأ أثناء تحميل الفاتورة</div>
        )}
      </div>
    </BaseModal>
  );
}
```

## File: src/features/sales/components/InvoiceSearchBar.tsx
```typescript
import { Search } from 'lucide-react';
interface InvoiceSearchBarProps {
  invoiceId: string;
  onInvoiceIdChange: (value: string) => void;
  onSearch: () => void;
}
export function InvoiceSearchBar({ invoiceId, onInvoiceIdChange, onSearch }: InvoiceSearchBarProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-1 relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="أدخل رقم الفاتورة للبحث..."
          value={invoiceId}
          onChange={(e) => onInvoiceIdChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <button
        onClick={onSearch}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        بحث
      </button>
    </div>
  );
}
```

## File: src/features/sales/components/PosCart.tsx
```typescript
import { resolveProductImageUrl } from '../utils/posUtils';
import { Trash2, Plus, Minus, Undo2, CreditCard, Wallet, Package } from 'lucide-react';
import { PaymentMethod } from '../schemas/salesSchemas';
import { CartItem } from '../utils/cartLogic';
export type { CartItem };
function fmt(value: number): string {
  return new Intl.NumberFormat('en-EG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}
interface PosCartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCheckout: (method: PaymentMethod) => void;
}
export function PosCart({ items, onUpdateQuantity, onRemoveItem, onClearCart, onCheckout }: PosCartProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal;
  const totalQuantity = items.reduce((s, i) => s + i.quantity, 0);
  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] z-20 relative">
      {}
      <div className="p-6 pb-4 flex items-start justify-between shrink-0 bg-[#f8f9fa]">
        <div className="flex flex-col items-end">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-1">
            Ø³Ù„Ø© Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </h2>
          <div className="text-sm font-semibold flex items-center gap-1.5" dir="rtl">
            <span className="text-[#0f8e4c]">Ø§Ù„ÙƒÙ…ÙŠØ© {totalQuantity}</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#0f8e4c]">{items.length} Ø£ØµÙ†Ø§Ù</span>
          </div>
        </div>
        <button
          onClick={onClearCart}
          disabled={items.length === 0}
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50 shadow-sm"
        >
          <Trash2 size={20} />
        </button>
      </div>
      {}
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4 custom-scrollbar bg-[#f8f9fa]">
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <p className="font-semibold text-lg">Ø§Ù„Ø³Ù„Ø© ÙØ§Ø±ØºØ©</p>
          </div>
        ) : (
          items.map(item => {
            const imageSrc = item.imageUrl ? resolveProductImageUrl(item.imageUrl) : null;
            return (
              <div key={item.id} className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex gap-4 relative group">
                {}
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 p-1">
                  {imageSrc ? (
                    <img src={imageSrc} alt={item.productName} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                  ) : (
                    <Package size={24} className="text-gray-300" />
                  )}
                </div>
                {}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{item.productName}</h4>
                    <p className="text-[11px] text-gray-400 line-clamp-1">
                      {item.properties && Object.keys(item.properties).length > 0
                        ? Object.values(item.properties).join(' - ')
                        : item.batchName}
                    </p>
                  </div>
                  <div className="mt-3 w-max">
                    <div className="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden h-9">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-9 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border-l border-gray-200"
                      >
                        <Minus size={14} />
                      </button>
                      <input
                        type="number"
                        min="1"
                        max={item.maxQuantity}
                        value={item.quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (!isNaN(val)) {
                            onUpdateQuantity(item.id, val - item.quantity);
                          }
                        }}
                        onFocus={(e) => e.target.select()}
                        className="w-10 h-full text-center font-bold text-sm bg-transparent outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        disabled={item.quantity >= item.maxQuantity}
                        className="w-9 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border-r border-gray-200 disabled:opacity-50"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
                {}
                <div className="flex flex-col items-end justify-between shrink-0 pl-1">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="w-9 h-9 flex items-center justify-center bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors shadow-sm"
                  >
                    <Undo2 size={16} />
                  </button>
                  <div className="font-bold text-[#0f8e4c] text-base mt-auto">
                    {fmt(item.price * item.quantity)} <span className="text-xs font-normal">Ø¬.Ù…</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {}
      <div className="p-6 bg-[#f8f9fa] shrink-0 mt-2">
        <div className="flex items-center justify-between text-gray-900 font-bold mb-4">
          <span className="text-sm">Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹ Ø§Ù„ÙØ±Ø¹ÙŠ</span>
          <span className="text-sm">{fmt(subtotal)} <span className="text-xs font-normal">Ø¬.Ù…</span></span>
        </div>
        <div className="flex items-center justify-between text-xl font-bold text-gray-900 mb-6">
          <span className="text-xl">Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ</span>
          <span className="text-[26px] text-[#0f8e4c]">{fmt(total)} <span className="text-sm font-normal">Ø¬.Ù…</span></span>
        </div>
        <div className="flex flex-col gap-4">
          <button
            disabled={items.length === 0}
            onClick={() => onCheckout(PaymentMethod.Cash)}
            className="w-full py-4 rounded-xl font-bold text-white bg-[#0f8e4c] hover:bg-[#0c7a40] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm text-lg"
          >
            <Wallet size={22} />
            Ø¯ÙØ¹ ÙƒØ§Ø´
          </button>
          <button
            disabled={items.length === 0}
            onClick={() => onCheckout(PaymentMethod.Deferred)}
            className="w-full py-4 rounded-xl font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-sm"
          >
            <CreditCard size={22} className="text-gray-500" />
            Ø¯ÙØ¹ Ø¢Ø¬Ù„
          </button>
        </div>
      </div>
    </div>
  );
}
```

## File: src/features/sales/components/PosProductGrid.tsx
```typescript
import { resolveProductImageUrl } from '../utils/posUtils';
import { tokens } from '@/shared/styles/tokens';
import { Search, Package, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react';
import { ProductResponse, CategorySummary } from '@/features/inventory/schemas/inventorySchemas';
import { useCategories, useDepartments } from '@/features/inventory/hooks/useInventory';
import { Spinner } from '@/shared/components/ui/Spinner';
interface PosProductGridProps {
  products: ProductResponse[];
  isLoading: boolean;
  onProductClick: (product: ProductResponse) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedDepartmentId: string;
  setSelectedDepartmentId: (id: string) => void;
  selectedCategoryId: string;
  setSelectedCategoryId: (id: string) => void;
  pageNumber: number;
  setPageNumber: (page: number) => void;
  totalPages: number;
}
export function PosProductGrid({
  products,
  isLoading,
  onProductClick,
  searchTerm,
  setSearchTerm,
  selectedDepartmentId,
  setSelectedDepartmentId,
  selectedCategoryId,
  setSelectedCategoryId,
  pageNumber,
  setPageNumber,
  totalPages
}: PosProductGridProps) {
  const { data: departmentsData } = useDepartments();
  const { data: categoriesData } = useCategories(selectedDepartmentId || undefined, { pageNumber: 1, pageSize: 50 });
  const departments = departmentsData?.items || [];
  const categories = categoriesData?.items || [];
  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-100">
      {}
      <div className="p-5 bg-white z-10 flex flex-col gap-5 border-b border-gray-100">
        {}
        <div className="flex gap-4 items-center">
          {}
          <div className="relative flex-1 h-12">
            <input
              type="text"
              placeholder="Ø§Ø¨Ø­Ø« Ø¹Ù† Ù…Ù†ØªØ¬ Ø¨Ø§Ù„Ø§Ø³Ù… Ø£Ùˆ Ø§Ù…Ø³Ø­ Ø§Ù„Ø¨Ø§Ø±ÙƒÙˆØ¯"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`${tokens.input} pl-12 h-full`}
              autoFocus
            />
            {}
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          {}
          <div className="relative w-[300px] h-12">
            <select
              value={selectedDepartmentId}
              onChange={(e) => {
                setSelectedDepartmentId(e.target.value);
                setSelectedCategoryId(''); // Reset category when department changes
              }}
              className={`${tokens.select} h-full cursor-pointer`}
            >
              <option value="">Ø§Ø®ØªØ± Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ</option>
              {departments.map((dept) => (
                <option key={dept.departmentId} value={dept.departmentId}>
                  {dept.name}
                </option>
              ))}
            </select>
            {/* Custom Chevron (as in design, drop down arrow on the left) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        {/* Categories Chips â€” only show when a department is selected */}
        {selectedDepartmentId && (
          <div className="flex items-center gap-3 overflow-x-auto pb-1 custom-scrollbar">
            <button
              onClick={() => setSelectedCategoryId('')}
              className={`whitespace-nowrap px-8 py-2.5 rounded-xl text-sm font-bold transition-colors border ${
                selectedCategoryId === ''
                  ? 'bg-[#0f8e4c] text-white border-[#0f8e4c] shadow-sm'
                  : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200 hover:bg-gray-50'
              }`}
            >
              Ø§Ù„ÙƒÙ„
            </button>
            {categories.map((cat: CategorySummary) => (
              <button
                key={cat.categoryId}
                onClick={() => setSelectedCategoryId(cat.categoryId)}
                className={`whitespace-nowrap px-8 py-2.5 rounded-xl text-sm font-bold transition-colors border ${
                  selectedCategoryId === cat.categoryId
                    ? 'bg-[#0f8e4c] text-white border-[#0f8e4c] shadow-sm'
                    : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Grid */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50/50">
        <div className="flex-1 p-5 overflow-y-auto custom-scrollbar">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Spinner size={40} />
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <Package size={64} className="text-gray-300 mb-4" />
              <p className="text-xl font-semibold">Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ù†ØªØ¬Ø§Øª</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 h-full content-start">
              {products.map(product => {
                const hasStock = product.totalQuantity > 0;
                const isLowStock = product.isLowStock;
                let statusLabel = 'Ù…ØªÙˆÙØ±';
                let statusClass = 'bg-[#e6f4ed] text-[#0f8e4c]'; // Light green bg, dark green text
                if (!hasStock) {
                  statusLabel = 'Ù†ÙØ¯ Ø§Ù„Ù…Ø®Ø²ÙˆÙ†';
                  statusClass = 'bg-[#fce8e6] text-[#c5221f]'; // Light red bg, dark red text
                } else if (isLowStock) {
                  statusLabel = 'Ù…Ø®Ø²ÙˆÙ† Ù…Ù†Ø®ÙØ¶';
                  statusClass = 'bg-[#fef7e0] text-[#ea8600]'; // Light orange bg, dark orange text
                }
                const imageSrc = product.imageUrl ? resolveProductImageUrl(product.imageUrl) : null;
                return (
                  <div
                    key={product.productId}
                    className="bg-white rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden flex flex-col p-2 sm:p-3 relative"
                  >
                    <span className={`absolute top-2 sm:top-3 right-2 sm:right-3 z-10 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md ${statusClass}`}>
                      {statusLabel}
                    </span>
                    <div className="h-24 sm:h-32 flex items-center justify-center mb-2 mt-2">
                      {imageSrc ? (
                        <img src={imageSrc} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                      ) : (
                        <Package size={48} className="text-gray-200" />
                      )}
                    </div>
                    <div className="flex flex-col flex-1 items-center text-center">
                      <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1 line-clamp-1 leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-gray-400 line-clamp-1 mb-2">
                        {product.properties && Object.keys(product.properties).length > 0
                          ? Object.values(product.properties).join(' - ')
                          : product.category.name}
                      </p>
                      <div className="mt-auto mb-3 font-bold text-[11px] sm:text-[12px] text-[#0f8e4c]">
                        Ø§Ù„Ù…Ø®Ø²ÙˆÙ†: {product.totalQuantity}
                      </div>
                      <button
                        onClick={() => hasStock && onProductClick(product)}
                        disabled={!hasStock}
                        className={`w-full py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                          hasStock
                            ? 'bg-[#0f8e4c] hover:bg-[#0c7a40] text-white shadow-sm'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart size={14} />
                        Ø¥Ø¶Ø§ÙØ©
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {}
        {totalPages > 1 && (
          <div className="border-t border-gray-100 p-4 bg-white flex items-center justify-center gap-4">
            <button
              disabled={pageNumber === 1}
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <span className="font-semibold text-gray-700 text-sm">
              ØµÙØ­Ø© {pageNumber} Ù…Ù† {totalPages}
            </span>
            <button
              disabled={pageNumber === totalPages}
              onClick={() => setPageNumber(Math.min(totalPages, pageNumber + 1))}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

## File: src/features/sales/components/ReturnItemsTable.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { SalesInvoiceResponse } from '../schemas/salesSchemas';
interface ReturnItemsTableProps {
  invoice: SalesInvoiceResponse;
  returnItems: { id: string; returnQty: number }[];
  onReturnQtyChange: (itemId: string, maxQty: number, qty: number) => void;
}
export function ReturnItemsTable({ invoice, returnItems, onReturnQtyChange }: ReturnItemsTableProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">المنتجات</h3>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm text-right">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3">المنتج</th>
              <th className="px-4 py-3">السعر</th>
              <th className="px-4 py-3">الكمية المباعة</th>
              <th className="px-4 py-3">كمية الإرجاع</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {invoice.items.map(item => {
              const currentQty = returnItems.find(i => i.id === item.id)?.returnQty || 0;
              const maxAllowed = item.quantity - (item.returnedQuantity || 0);
              return (
                <tr key={item.id}>
                  <td className="px-4 py-3 font-medium">{item.productName || item.productId}</td>
                  <td className="px-4 py-3">{formatCurrency(item.unitPrice)}</td>
                  <td className="px-4 py-3">
                    {item.quantity}
                    {item.returnedQuantity > 0 && (
                      <span className="text-xs text-red-500 mr-2 block">(تم إرجاع {item.returnedQuantity} مسبقاً)</span>
                    )}
                  </td>
                  <td className="px-4 py-3 w-48">
                    <input
                      type="number"
                      min="0"
                      max={maxAllowed}
                      disabled={maxAllowed === 0}
                      value={currentQty}
                      onChange={(e) => onReturnQtyChange(item.id, maxAllowed, parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-1 border border-gray-300 rounded text-center disabled:bg-gray-100"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```

## File: src/features/sales/components/ReturnOptionsForm.tsx
```typescript
import { ReturnReason } from '../schemas/salesSchemas';
interface ReturnOptionsFormProps {
  reason: ReturnReason;
  onReasonChange: (reason: ReturnReason) => void;
  isCashRefund: boolean;
  onCashRefundChange: (isCash: boolean) => void;
  notes: string;
  onNotesChange: (notes: string) => void;
}
export function ReturnOptionsForm({
  reason,
  onReasonChange,
  isCashRefund,
  onCashRefundChange,
  notes,
  onNotesChange
}: ReturnOptionsFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">سبب الإرجاع</label>
        <select
          value={reason}
          onChange={(e) => onReasonChange(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value={ReturnReason.ChangedMind}>تغيير رأي</option>
          <option value={ReturnReason.Defect}>تالف / عيب صناعة</option>
          <option value={ReturnReason.Other}>أخرى</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">طريقة الاسترداد</label>
        <select
          value={isCashRefund ? 'cash' : 'debt'}
          onChange={(e) => onCashRefundChange(e.target.value === 'cash')}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="debt">خصم من المديونية</option>
          <option value="cash">نقدي (كاش)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">ملاحظات</label>
        <input
          type="text"
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="ملاحظات إضافية..."
        />
      </div>
    </div>
  );
}
```

## File: src/features/sales/components/SalesHistoryColumns.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { CornerUpLeft } from 'lucide-react';
import { SaleType, PaymentMethod, SalesInvoiceResponse } from '../schemas/salesSchemas';
export const getSalesHistoryColumns = (onReturnClick: (invoiceNumber: string) => void) => [
  {
    header: 'رقم الفاتورة',
    cell: (row: SalesInvoiceResponse) => (
      <div className="flex items-center gap-2">
        <span className="font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">
          {row.invoiceNumber}
        </span>
        {row.hasReturns && (
          <span className="px-2 py-1 text-[10px] font-bold bg-red-100 text-red-600 rounded-full" title="يوجد مرتجعات على هذه الفاتورة">
            يوجد مرتجع
          </span>
        )}
      </div>
    ),
  },
  {
    header: 'العميل',
    cell: (row: SalesInvoiceResponse) => (
      <div className="flex flex-col">
        <span className="font-bold text-gray-800">{row.customer?.name || 'عميل نقدي (بدون اسم)'}</span>
        {row.customer?.phone && <span className="text-xs text-gray-500">{row.customer.phone}</span>}
      </div>
    ),
  },
  {
    header: 'تاريخ الفاتورة',
    cell: (row: SalesInvoiceResponse) => formatDate(row.createdAt),
  },
  {
    header: 'نوع الفاتورة',
    cell: (row: SalesInvoiceResponse) => {
      const isWholesale = row.saleType === SaleType.Wholesale;
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-bold ${isWholesale ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
          {isWholesale ? 'جملة' : 'قطاعي'}
        </span>
      );
    },
  },
  {
    header: 'طريقة الدفع',
    cell: (row: SalesInvoiceResponse) => {
      const isCash = row.paymentMethod === PaymentMethod.Cash;
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-bold ${isCash ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
          {isCash ? 'كاش (نقدي)' : 'آجل (ذمة)'}
        </span>
      );
    },
  },
  {
    header: 'الإجمالي',
    cell: (row: SalesInvoiceResponse) => (
      <span className="font-bold text-gray-900" dir="ltr">{formatCurrency(row.totalAmount)}</span>
    ),
  },
  {
    header: 'الإجراءات',
    cell: (row: SalesInvoiceResponse) => (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onReturnClick(row.invoiceNumber);
        }}
        className="flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded-md transition-colors font-medium text-sm border border-red-200"
        title="إرجاع الفاتورة"
      >
        <CornerUpLeft size={16} />
        <span>إرجاع</span>
      </button>
    ),
  },
];
```

## File: src/features/sales/components/SalesHistorySearchBar.tsx
```typescript
import { Search } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
interface SalesHistorySearchBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}
export function SalesHistorySearchBar({ searchValue, onSearchChange }: SalesHistorySearchBarProps) {
  return (
    <div className="p-5 border-b border-gray-100 bg-gray-50 flex items-center gap-4">
      <div className="relative w-full md:w-96">
        <input
          type="text"
          placeholder="ابحث برقم الفاتورة أو اسم العميل..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`${tokens.input} pl-10`}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>
    </div>
  );
}
```

## File: src/features/sales/components/SalesReturnsColumns.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { ReturnReason, SalesReturnResponse } from '../schemas/salesSchemas';
const getReasonLabel = (reason: ReturnReason) => {
  switch (reason) {
    case ReturnReason.Defect: return 'تالف / عيب صناعة';
    case ReturnReason.ChangedMind: return 'تغيير رأي العميل';
    case ReturnReason.Other: return 'أخرى';
    default: return 'غير معروف';
  }
};
export const getSalesReturnsColumns = () => [
  {
    header: 'تاريخ المرتجع',
    cell: (row: SalesReturnResponse) => formatDate(row.returnDate),
  },
  {
    header: 'رقم الفاتورة الأصلية',
    cell: (row: SalesReturnResponse) => row.invoiceNumber || row.invoiceId?.substring(0, 8) || '-',
  },
  {
    header: 'السبب',
    cell: (row: SalesReturnResponse) => getReasonLabel(row.reason),
  },
  {
    header: 'طريقة الاسترداد',
    cell: (row: SalesReturnResponse) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.isCashRefund ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}>
        {row.isCashRefund ? 'نقدي (كاش)' : 'خصم من المديونية'}
      </span>
    ),
  },
  {
    header: 'إجمالي المرتجع',
    cell: (row: SalesReturnResponse) => (
      <span className="font-bold text-red-600">
        {formatCurrency(row.totalReturnedAmount)}
      </span>
    ),
  }
];
```

## File: src/features/sales/components/SalesReturnsFilters.tsx
```typescript
import { Search } from 'lucide-react';
interface SalesReturnsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  dateFilter: string;
  onDateChange: (value: string) => void;
}
export function SalesReturnsFilters({ search, onSearchChange, dateFilter, onDateChange }: SalesReturnsFiltersProps) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="البحث برقم الفاتورة..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className="w-48">
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
    </div>
  );
}
```

## File: src/features/sales/hooks/usePosCart.ts
```typescript
import { useCallback, useState } from 'react';
import {
  CartItem,
  addOrIncrementCartItem,
  cartTotal,
  removeCartItem,
  updateCartQuantity,
} from '../utils/cartLogic';
export function usePosCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => addOrIncrementCartItem(prev, item));
  }, []);
  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) => updateCartQuantity(prev, id, delta));
  }, []);
  const removeItem = useCallback((id: string) => {
    setItems((prev) => removeCartItem(prev, id));
  }, []);
  const clear = useCallback(() => setItems([]), []);
  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    totalAmount: cartTotal(items),
  };
}
```

## File: src/features/sales/hooks/useSales.ts
```typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { salesRepository } from "../api/salesApi";
import { CreateSalesInvoiceRequest, CreateSalesReturnRequest } from "../schemas/salesSchemas";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/shared/utils/apiError";
import { BaseFilters } from "@/shared/types/pagination";
export const SALES_KEYS = {
  invoices: (filters: BaseFilters) => ["sales-invoices", filters] as const,
  invoiceDetails: (id: string) => ["sales-invoices", id] as const,
};
export function useCreateSalesInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSalesInvoiceRequest) => salesRepository.createInvoice(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sales-invoices"] });
      toast.success("تم إنشاء فاتورة المبيعات بنجاح");
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, "حدث خطأ أثناء إنشاء الفاتورة"));
    }
  });
}
export function useSalesInvoices(filters: { pageNumber: number; pageSize: number; searchValue?: string }) {
  return useQuery({
    queryKey: SALES_KEYS.invoices(filters),
    queryFn: () => salesRepository.getInvoices(filters),
  });
}
export function useSalesInvoiceDetails(id: string) {
  return useQuery({
    queryKey: SALES_KEYS.invoiceDetails(id),
    queryFn: () => salesRepository.getInvoice(id),
    enabled: !!id,
  });
}
export function useCreateSalesReturn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSalesReturnRequest) => salesRepository.createReturn(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sales-returns"] });
      toast.success("تم حفظ المرتجع بنجاح");
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, "حدث خطأ أثناء حفظ المرتجع"));
    }
  });
}
export function useSalesReturns(filters: { pageNumber: number; pageSize: number; searchValue?: string }) {
  return useQuery({
    queryKey: ["sales-returns", filters],
    queryFn: () => salesRepository.getReturns(filters),
  });
}
export function useSalesReturnDetails(id: string) {
  return useQuery({
    queryKey: ["sales-returns", id],
    queryFn: () => salesRepository.getReturn(id),
    enabled: !!id,
  });
}
```

## File: src/features/sales/pages/NewSalesReturnPage.tsx
```typescript
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSalesInvoiceDetails, useCreateSalesReturn } from '../hooks/useSales';
import { ReturnReason } from '../schemas/salesSchemas';
import { AlertCircle, Save } from 'lucide-react';
import { toast } from 'sonner';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
import { InvoiceSearchBar } from '../components/InvoiceSearchBar';
import { InvoiceDetailsCard } from '../components/InvoiceDetailsCard';
import { ReturnItemsTable } from '../components/ReturnItemsTable';
import { ReturnOptionsForm } from '../components/ReturnOptionsForm';
export const NewSalesReturnPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialInvoiceId = searchParams.get('invoiceId') || '';
  const [invoiceId, setInvoiceId] = useState(initialInvoiceId);
  const [searchId, setSearchId] = useState(initialInvoiceId);
  const { data: invoice, isLoading, error: fetchError } = useSalesInvoiceDetails(searchId);
  const createReturn = useCreateSalesReturn();
  const [returnItems, setReturnItems] = useState<{ id: string; returnQty: number }[]>([]);
  const [reason, setReason] = useState<ReturnReason>(ReturnReason.ChangedMind);
  const [isCashRefund, setIsCashRefund] = useState(true);
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(2); // GlobalTransactionCategory.SalesReturn
  const [notes, setNotes] = useState('');
  const handleSearch = () => {
    if (invoiceId.trim()) {
      setSearchId(invoiceId.trim());
      setReturnItems([]); // reset
    }
  };
  const handleReturnQtyChange = (itemId: string, maxQty: number, qty: number) => {
    if (qty < 0) qty = 0;
    if (qty > maxQty) qty = maxQty;
    setReturnItems(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing) {
        return prev.map(i => i.id === itemId ? { ...i, returnQty: qty } : i);
      }
      return [...prev, { id: itemId, returnQty: qty }];
    });
  };
  const handleSubmit = async () => {
    if (!invoice) return;
    const itemsToReturn = returnItems
      .filter(i => i.returnQty > 0)
      .map(i => {
        const originalItem = invoice.items.find(invItem => invItem.id === i.id);
        return {
          productId: originalItem!.productId,
          batchId: originalItem!.batchId,
          quantity: i.returnQty,
          unitPrice: originalItem!.unitPrice
        };
      });
    if (itemsToReturn.length === 0) {
      toast.error('ÙŠØ¬Ø¨ ØªØ­Ø¯ÙŠØ¯ ÙƒÙ…ÙŠØ© Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„ Ù„Ù„Ø¥Ø±Ø¬Ø§Ø¹');
      return;
    }
    let source: number | undefined = undefined;
    if (isCashRefund) {
      const pSource = await promptPaymentSource();
      if (!pSource) return;
      source = pSource;
    }
    try {
      await createReturn.mutateAsync({
        invoiceId: invoice.id,
        reason,
        notes,
        isCashRefund,
        paymentSource: source,
        items: itemsToReturn
      });
      navigate('/sales/returns');
    } catch (err) {
    }
  };
  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Ø¥Ø¶Ø§ÙØ© Ù…Ø±ØªØ¬Ø¹ Ù…Ø¨ÙŠØ¹Ø§Øª Ø¬Ø¯ÙŠØ¯</h1>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
        <InvoiceSearchBar
          invoiceId={invoiceId}
          onInvoiceIdChange={setInvoiceId}
          onSearch={handleSearch}
        />
        {isLoading && <div className="text-center py-4">Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø¨Ø­Ø«...</div>}
        {fetchError && <div className="text-red-500 text-center py-4 flex items-center justify-center gap-2"><AlertCircle size={20} /> Ø§Ù„ÙØ§ØªÙˆØ±Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©</div>}
        {invoice && (
          <div className="space-y-6 mt-6 border-t pt-6">
            <InvoiceDetailsCard invoice={invoice} />
            <ReturnItemsTable
              invoice={invoice}
              returnItems={returnItems}
              onReturnQtyChange={handleReturnQtyChange}
            />
            <ReturnOptionsForm
              reason={reason}
              onReasonChange={setReason}
              isCashRefund={isCashRefund}
              onCashRefundChange={setIsCashRefund}
              notes={notes}
              onNotesChange={setNotes}
            />
            <div className="flex justify-end pt-4 border-t">
              <button
                onClick={handleSubmit}
                disabled={createReturn.isPending}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                <Save size={20} />
                <span>Ø­ÙØ¸ Ø§Ù„Ù…Ø±ØªØ¬Ø¹</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <PaymentSourcePromptModal />
    </div>
  );
};
```

## File: src/features/sales/pages/PosPage.tsx
```typescript
import { useState, useEffect } from 'react';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useProducts } from '@/features/inventory/hooks/useInventory';
import { ProductResponse, ProductBatchResponse, ProductUsageDto } from '@/features/inventory/schemas/inventorySchemas';
import { PosProductGrid } from '../components/PosProductGrid';
import { PosCart } from '../components/PosCart';
import { BatchSelectionModal } from '../components/BatchSelectionModal';
import { CheckoutModal } from '../components/CheckoutModal';
import { useCreateSalesInvoice } from '../hooks/useSales';
import { usePosCart } from '../hooks/usePosCart';
import { SaleType, PaymentMethod } from '../schemas/salesSchemas';
import { ShoppingCart, X } from 'lucide-react';
export function PosPage() {
  const { setTitle, setBackButton } = useHeaderStore();
  const cart = usePosCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | null>(null);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [checkoutMethod, setCheckoutMethod] = useState<PaymentMethod | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const { data: productsData, isLoading: isLoadingProducts } = useProducts({
    pageNumber: pageNumber,
    pageSize: 8,
    searchValue: searchTerm || undefined,
    categoryId: selectedCategoryId || undefined,
    departmentId: selectedDepartmentId || undefined,
    excludeUsage: ProductUsageDto.MaintenanceOnly,
  });
  const createInvoiceMutation = useCreateSalesInvoice();
  useEffect(() => {
    setPageNumber(1);
  }, [searchTerm, selectedDepartmentId, selectedCategoryId]);
  useEffect(() => {
    setTitle('Ù†Ù‚Ø·Ø© Ø§Ù„Ø¨ÙŠØ¹ (POS)');
    setBackButton(false);
  }, [setTitle, setBackButton]);
  const handleProductClick = (product: ProductResponse) => {
    setSelectedProduct(product);
    setIsBatchModalOpen(true);
  };
  const handleSelectBatch = (batch: ProductBatchResponse, selectedPrice: number) => {
    if (!selectedProduct) return;
    cart.addItem({
      id: `${selectedProduct.productId}_${batch.batchId}_${selectedPrice}`,
      productId: selectedProduct.productId,
      productName: selectedProduct.name || 'Ù…Ù†ØªØ¬ ØºÙŠØ± Ù…Ø¹Ø±ÙˆÙ',
      batchId: batch.batchId,
      batchName: batch.supplierName || 'Ø´Ø±ÙƒØ© ØºÙŠØ± Ù…Ø¹Ø±ÙˆÙØ©',
      imageUrl: selectedProduct.imageUrl,
      properties: selectedProduct.properties,
      price: selectedPrice,
      quantity: 1,
      maxQuantity: batch.availableQuantity,
    });
    setIsBatchModalOpen(false);
    setSelectedProduct(null);
  };
  const handleCheckoutClick = (method: PaymentMethod) => {
    setCheckoutMethod(method);
    setIsCheckoutModalOpen(true);
  };
  const handleConfirmCheckout = (customerName: string, customerPhone: string, paidAmount: number, paymentSource?: number, saleType: SaleType = SaleType.Retail) => {
    if (!checkoutMethod) return;
    createInvoiceMutation.mutate({
      customerName: customerName.trim() || undefined,
      customerPhone: customerPhone.trim() || undefined,
      saleType: saleType,
      paymentMethod: checkoutMethod,
      paidAmount: paidAmount,
      paymentSource: paymentSource,
      items: cart.items.map((item) => ({
        productId: item.productId,
        batchId: item.batchId,
        quantity: item.quantity,
        sellingPrice: item.price,
      })),
    }, {
      onSuccess: () => {
        cart.clear();
        setIsCheckoutModalOpen(false);
        setCheckoutMethod(null);
      },
    });
  };
  const totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="-m-6 w-[calc(100%+3rem)] h-[calc(100vh-theme(spacing.16))] bg-gray-50 overflow-hidden flex flex-col lg:flex-row relative">
      <div className="flex-1 overflow-hidden relative pb-[80px] lg:pb-0">
        <PosProductGrid
          products={productsData?.items || []}
          isLoading={isLoadingProducts}
          onProductClick={handleProductClick}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDepartmentId={selectedDepartmentId}
          setSelectedDepartmentId={setSelectedDepartmentId}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={productsData?.totalPages || 1}
        />
      </div>
      {/* Desktop Cart */}
      <div className="hidden lg:block w-[380px] shrink-0 h-full border-r border-gray-200">
        <PosCart
          items={cart.items}
          onUpdateQuantity={cart.updateQuantity}
          onRemoveItem={cart.removeItem}
          onClearCart={cart.clear}
          onCheckout={handleCheckoutClick}
        />
      </div>
      {/* Mobile Cart Button / Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex items-center justify-between">
         <div className="flex flex-col">
            <span className="text-gray-500 text-sm font-semibold">Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ ({totalQuantity} Ù…Ù†ØªØ¬Ø§Øª)</span>
            <span className="text-[#0f8e4c] font-bold text-lg">{new Intl.NumberFormat('en-EG', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(totalAmount)} Ø¬.Ù…</span>
         </div>
         <button
           onClick={() => setIsMobileCartOpen(true)}
           className="bg-[#0f8e4c] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm"
         >
           <ShoppingCart size={20} />
           Ø¹Ø±Ø¶ Ø§Ù„Ø³Ù„Ø©
         </button>
      </div>
      {}
      {isMobileCartOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileCartOpen(false)} />
          {}
          <div className="absolute top-0 right-0 bottom-0 w-[90%] max-w-[400px] bg-[#f8f9fa] shadow-2xl flex flex-col">
             {}
             <div className="p-4 pb-0 flex justify-start bg-[#f8f9fa] shrink-0 z-30">
               <button onClick={() => setIsMobileCartOpen(false)} className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 rounded-xl transition-colors shadow-sm">
                 <X size={20} className="text-gray-600" />
               </button>
             </div>
             <div className="flex-1 overflow-hidden relative">
               <PosCart
                 items={cart.items}
                 onUpdateQuantity={cart.updateQuantity}
                 onRemoveItem={cart.removeItem}
                 onClearCart={cart.clear}
                 onCheckout={(method) => {
                   handleCheckoutClick(method);
                   setIsMobileCartOpen(false);
                 }}
               />
             </div>
          </div>
        </div>
      )}
      <BatchSelectionModal
        isOpen={isBatchModalOpen}
        onClose={() => setIsBatchModalOpen(false)}
        product={selectedProduct}
        onSelectBatch={handleSelectBatch}
      />
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        totalAmount={cart.totalAmount}
        paymentMethod={checkoutMethod}
        onConfirm={handleConfirmCheckout}
        isSubmitting={createInvoiceMutation.isPending}
      />
    </div>
  );
}
```

## File: src/features/sales/pages/SalesHistoryPage.tsx
```typescript
import { useState, useEffect } from 'react';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useSalesInvoices } from '../hooks/useSales';
import { DataTable } from '@/shared/components/ui/DataTable';
import { InvoiceDetailsModal } from '../components/InvoiceDetailsModal';
import { getSalesHistoryColumns } from '../components/SalesHistoryColumns';
import { SalesHistorySearchBar } from '../components/SalesHistorySearchBar';
import { useNavigate } from 'react-router-dom';
export function SalesHistoryPage() {
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 10;
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 500);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    setPageIndex(1);
  }, [debouncedSearch]);
  const { data, isLoading } = useSalesInvoices({
    pageNumber: pageIndex,
    pageSize,
    searchValue: debouncedSearch,
  });
  const columns = getSalesHistoryColumns((invoiceNumber) => {
    navigate(`/sales/returns/new?invoiceId=${invoiceNumber}`);
  });
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {}
        <SalesHistorySearchBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />
        {}
        <div className="p-5">
          <DataTable
            columns={columns}
            data={data?.items || []}
            isLoading={isLoading}
            totalCount={data?.totalCount || 0}
            pageSize={pageSize}
            pageIndex={pageIndex}
            totalPages={data?.totalPages || 1}
            onNextPage={() => setPageIndex(p => Math.min(p + 1, data?.totalPages || 1))}
            onPrevPage={() => setPageIndex(p => Math.max(p - 1, 1))}
            onRowClick={(row) => setSelectedInvoiceId(row.id)}
          />
        </div>
      </div>
      {}
      <InvoiceDetailsModal
        isOpen={!!selectedInvoiceId}
        onClose={() => setSelectedInvoiceId(null)}
        invoiceId={selectedInvoiceId}
      />
    </div>
  );
}
```

## File: src/features/sales/pages/SalesReturnsPage.tsx
```typescript
import { useState } from 'react';
import { useSalesReturns } from '../hooks/useSales';
import { DataTable } from '@/shared/components/ui/DataTable';
import { Plus } from 'lucide-react';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useNavigate } from 'react-router-dom';
import { getSalesReturnsColumns } from '../components/SalesReturnsColumns';
import { SalesReturnsFilters } from '../components/SalesReturnsFilters';
export const SalesReturnsPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();
  const { data, isLoading } = useSalesReturns({
    pageNumber: page,
    pageSize: 10,
    searchValue: debouncedSearch,
    // date: dateFilter // If backend supports it, otherwise frontend filter or just pass it if backend can handle it. Wait, backend RequestFilters doesn't have Date out of the box unless we add it.
  });
  const columns = getSalesReturnsColumns();
  const filteredData = data?.items || [];
  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-end items-center">
        <button
          onClick={() => navigate('/sales/returns/new')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>Ø¥Ø¶Ø§ÙØ© Ù…Ø±ØªØ¬Ø¹ Ø¬Ø¯ÙŠØ¯</span>
        </button>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <SalesReturnsFilters
          search={search}
          onSearchChange={setSearch}
          dateFilter={dateFilter}
          onDateChange={setDateFilter}
        />
        <DataTable
          data={filteredData}
          columns={columns}
          isLoading={isLoading}
          pageIndex={page}
          pageSize={10}
          totalCount={data?.totalCount || 0}
          totalPages={data?.totalPages || 1}
          onNextPage={() => setPage(p => Math.min(p + 1, data?.totalPages || 1))}
          onPrevPage={() => setPage(p => Math.max(p - 1, 1))}
        />
      </div>
    </div>
  );
};
```

## File: src/features/sales/schemas/salesSchemas.ts
```typescript
export enum SaleType {
  Wholesale = 1,
  Retail = 2,
}
export enum PaymentMethod {
  Cash = 1,
  Deferred = 2,
}
export interface CreateSalesInvoiceItemRequest {
  productId: string;
  batchId: string;
  quantity: number;
  sellingPrice: number;
}
export interface CreateSalesInvoiceRequest {
  customerId?: string;
  customerName?: string;
  customerPhone?: string;
  saleType: SaleType;
  paymentMethod: PaymentMethod;
  paidAmount: number;
  paymentSource?: number;
  notes?: string;
  items: CreateSalesInvoiceItemRequest[];
}
export interface SalesInvoiceItemResponse {
  id: string;
  productId: string;
  productName: string;
  batchId: string;
  quantity: number;
  returnedQuantity: number;
  unitPrice: number;
  unitCost: number;
  lineTotal: number;
}
export interface SalesInvoiceResponse {
  id: string;
  invoiceNumber: string;
  customer?: {
    id: string;
    name: string;
    phone: string;
  };
  saleType: SaleType;
  paymentMethod: PaymentMethod;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  notes?: string;
  createdAt: string;
  hasReturns: boolean;
  items: SalesInvoiceItemResponse[];
}
export enum ReturnReason {
  Defect = 1,
  ChangedMind = 2,
  Other = 3
}
export interface ReturnItemRequest {
  productId: string;
  batchId: string;
  quantity: number;
  unitPrice: number;
}
export interface CreateSalesReturnRequest {
  invoiceId: string;
  reason: ReturnReason;
  notes?: string;
  isCashRefund: boolean;
  paymentSource?: number;
  items: ReturnItemRequest[];
}
export interface ReturnItemResponse {
  id: string;
  productId: string;
  batchId: string;
  quantity: number;
  unitPrice: number;
}
export interface SalesReturnResponse {
  id: string;
  invoiceId: string;
  invoiceNumber: string;
  isFullInvoiceReturn: boolean;
  reason: ReturnReason;
  notes?: string;
  isCashRefund: boolean;
  totalReturnedAmount: number;
  returnDate: string;
  items: ReturnItemResponse[];
}
```

## File: src/features/sales/utils/__tests__/cartLogic.test.ts
```typescript
import { CartItem, addOrIncrementCartItem, cartTotal, removeCartItem, updateCartQuantity } from '../cartLogic';
function item(overrides: Partial<CartItem> = {}): CartItem {
  return {
    id: 'p1_b1_10',
    productId: 'p1',
    productName: 'آيفون',
    batchId: 'b1',
    batchName: 'مورد',
    quantity: 1,
    price: 10,
    maxQuantity: 5,
    ...overrides,
  };
}
describe('cartLogic', () => {
  it('adds a new line then increments the same line', () => {
    const first = addOrIncrementCartItem([], item());
    expect(first).toHaveLength(1);
    expect(first[0].quantity).toBe(1);
    const second = addOrIncrementCartItem(first, item());
    expect(second).toHaveLength(1);
    expect(second[0].quantity).toBe(2);
  });
  it('does not exceed maxQuantity', () => {
    const full = [item({ quantity: 5, maxQuantity: 5 })];
    const next = addOrIncrementCartItem(full, item({ maxQuantity: 5 }));
    expect(next[0].quantity).toBe(5);
  });
  it('updates quantity and removes the line when it reaches zero', () => {
    const items = [item({ quantity: 2 })];
    expect(updateCartQuantity(items, 'p1_b1_10', 1)[0].quantity).toBe(3);
    expect(updateCartQuantity(items, 'p1_b1_10', -2)).toHaveLength(0);
  });
  it('ignores increment past stock', () => {
    const items = [item({ quantity: 5, maxQuantity: 5 })];
    expect(updateCartQuantity(items, 'p1_b1_10', 1)[0].quantity).toBe(5);
  });
  it('removes a line and calculates the total', () => {
    const items = [item({ quantity: 2, price: 50 }), item({ id: 'other', quantity: 1, price: 20 })];
    expect(cartTotal(items)).toBe(120);
    expect(removeCartItem(items, 'p1_b1_10')).toHaveLength(1);
  });
});
```

## File: src/features/sales/utils/__tests__/posUtils.test.ts
```typescript
import { formatProductSpecs, getStockStatus, resolveProductImageUrl } from '../posUtils';
describe('posUtils', () => {
  it('returns out of stock when quantity is zero or flagged', () => {
    expect(getStockStatus(0, false, false, 5)).toBe('out');
    expect(getStockStatus(3, true, false, 5)).toBe('out');
  });
  it('returns low stock from flag or min alert', () => {
    expect(getStockStatus(4, false, true, 5)).toBe('low');
    expect(getStockStatus(2, false, false, 5)).toBe('low');
  });
  it('returns in stock otherwise', () => {
    expect(getStockStatus(10, false, false, 5)).toBe('in');
  });
  it('formats specs and skips empty values', () => {
    expect(formatProductSpecs()).toBe('');
    expect(formatProductSpecs({ color: 'أحمر', storage: '512', extra: '' })).toBe('أحمر - 512');
  });
  it('resolves relative image urls against the API base', () => {
    expect(resolveProductImageUrl(undefined)).toBeUndefined();
    expect(resolveProductImageUrl('https://cdn.example/p.png')).toBe('https://cdn.example/p.png');
    expect(resolveProductImageUrl('/uploads/p.png')).toMatch(/\/uploads\/p\.png$/);
  });
});
```

## File: src/features/sales/utils/cartLogic.ts
```typescript
export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  imageUrl?: string;
  batchId: string;
  batchName: string;
  properties?: Record<string, string>;
  quantity: number;
  price: number;
  maxQuantity: number;
}
export function addOrIncrementCartItem(items: CartItem[], incoming: CartItem): CartItem[] {
  const existing = items.find((item) => item.id === incoming.id);
  if (!existing) return [...items, incoming];
  if (existing.quantity >= existing.maxQuantity) return items;
  return items.map((item) =>
    item.id === incoming.id ? { ...item, quantity: item.quantity + 1 } : item
  );
}
export function updateCartQuantity(items: CartItem[], id: string, delta: number): CartItem[] {
  return items.flatMap((item) => {
    if (item.id !== id) return [item];
    const nextQty = item.quantity + delta;
    if (nextQty <= 0) return [];
    if (nextQty > item.maxQuantity) return [item];
    return [{ ...item, quantity: nextQty }];
  });
}
export function removeCartItem(items: CartItem[], id: string): CartItem[] {
  return items.filter((item) => item.id !== id);
}
export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
```

## File: src/features/sales/utils/posUtils.ts
```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://localhost:7073';
export function resolveProductImageUrl(imageUrl?: string): string | undefined {
  if (!imageUrl) return undefined;
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) return imageUrl;
  const base = API_BASE_URL.replace(/\/$/, '');
  return `${base}${imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`}`;
}
export function formatProductSpecs(properties?: Record<string, string>): string {
  if (!properties) return '';
  return Object.values(properties).filter(Boolean).join(' - ');
}
export type StockStatus = 'in' | 'low' | 'out';
export function getStockStatus(
  totalQuantity: number,
  isOutOfStock: boolean,
  isLowStock: boolean,
  minQuantityAlert: number
): StockStatus {
  if (isOutOfStock || totalQuantity <= 0) return 'out';
  if (isLowStock || totalQuantity <= minQuantityAlert) return 'low';
  return 'in';
}
```

## File: src/features/suppliers/api/SupplierApi.ts
```typescript
import { apiClient } from "@/lib/axios";
import { PaginatedList } from "@/shared/types/pagination";
import { SupplierResponse, CreateSupplierRequest, UpdateSupplierRequest, SupplierFilters, SupplierStatementItemResponse, SupplierBatchResponse } from "../schemas/supplierSchemas";
export const supplierRepository = {
  getSuppliers: async (filters: SupplierFilters): Promise<PaginatedList<SupplierResponse>> => {
    const response = await apiClient.get<PaginatedList<SupplierResponse>>('/suppliers', { params: filters });
    return response.data;
  },
  getSupplier: async (id: string): Promise<SupplierResponse> => {
    const response = await apiClient.get<SupplierResponse>(`/suppliers/${id}`);
    return response.data;
  },
  createSupplier: async (data: CreateSupplierRequest): Promise<SupplierResponse> => {
    const response = await apiClient.post<SupplierResponse>('/suppliers', data);
    return response.data;
  },
  updateSupplier: async (id: string, data: UpdateSupplierRequest): Promise<SupplierResponse> => {
    const response = await apiClient.put<SupplierResponse>(`/suppliers/${id}`, data);
    return response.data;
  },
  deleteSupplier: async (id: string): Promise<void> => {
    await apiClient.delete(`/suppliers/${id}`);
  },
  getSupplierStatement: async (id: string, filters: SupplierFilters): Promise<SupplierStatementItemResponse[]> => {
    const response = await apiClient.get<SupplierStatementItemResponse[]>(`/suppliers/${id}/statement`, { params: filters });
    return response.data;
  },
  getSupplierBatches: async (id: string): Promise<SupplierBatchResponse[]> => {
    const response = await apiClient.get<SupplierBatchResponse[]>(`/suppliers/${id}/batches`);
    return response.data;
  },
  addSupplierPayment: async (data: import('../schemas/supplierSchemas').CreateSupplierPaymentRequest): Promise<import('../schemas/supplierSchemas').SupplierPaymentResponse> => {
    const response = await apiClient.post<import('../schemas/supplierSchemas').SupplierPaymentResponse>(`/supplier-transactions/payments`, data);
    return response.data;
  },
};
```

## File: src/features/suppliers/components/SupplierFilters.tsx
```typescript
import { Search, Plus } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
interface SupplierFiltersProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  onAddClick: () => void;
}
export function SupplierFilters({
  searchTerm,
  onSearchChange,
  onAddClick,
}: SupplierFiltersProps) {
  return (
    <div className={`${tokens.card} p-4 flex flex-wrap gap-4 items-center justify-between bg-white shadow-sm`}>
      {}
      <div className="flex items-center gap-3 flex-1 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-[350px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="بحث بالاسم أو الهاتف..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`${tokens.input} bg-gray-50`}
          />
        </div>
      </div>
      {}
      <button onClick={onAddClick} className={tokens.btn.primary + " flex items-center gap-2 whitespace-nowrap"}>
        <Plus size={16} />
        إضافة مورد جديد
      </button>
    </div>
  );
}
```

## File: src/features/suppliers/components/SupplierForm.tsx
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { tokens } from '@/shared/styles/tokens';
import { SupplierResponse, createSupplierSchema } from '../schemas/supplierSchemas';
import { useEffect } from 'react';
type SupplierFormValues = z.infer<typeof createSupplierSchema>;
interface SupplierFormProps {
  initialData?: SupplierResponse;
  onSubmit: (data: SupplierFormValues) => void;
  isSubmitting?: boolean;
}
export function SupplierForm({ initialData, onSubmit }: SupplierFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SupplierFormValues>({
    resolver: zodResolver(createSupplierSchema),
    defaultValues: {
      name: initialData?.name || '',
      type: initialData?.type || '',
      phone: initialData?.phone || '',
      address: initialData?.address || '',
    },
  });
  // Reset form when initialData changes
  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        type: initialData.type || '',
        phone: initialData.phone || '',
        address: initialData.address || '',
      });
    } else {
      reset({
        name: '',
        type: '',
        phone: '',
        address: '',
      });
    }
  }, [initialData, reset]);
  return (
    <form id="supplier-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>اسم المورد <span className="text-red-500">*</span></label>
        <input
          {...register('name')}
          type="text"
          placeholder="مثال: شركة سامسونج"
          className={tokens.input}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>
      {}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>نوع التوريد</label>
        <input
          {...register('type')}
          type="text"
          placeholder="مثال: إلكترونيات، شاشات..."
          className={tokens.input}
        />
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
      </div>
      {}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>رقم الهاتف</label>
        <input
          {...register('phone')}
          type="text"
          dir="ltr"
          placeholder="01xxxxxxxxx"
          className={`${tokens.input} text-left`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>
      {}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>العنوان</label>
        <textarea
          {...register('address')}
          placeholder="عنوان المورد بالتفصيل..."
          rows={3}
          className={`${tokens.input} resize-none`}
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
      </div>
    </form>
  );
}
```

## File: src/features/suppliers/components/SupplierOverviewCard.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { tokens } from '@/shared/styles/tokens';
import { SupplierResponse } from '../schemas/supplierSchemas';
import { Phone, MapPin, Tag, CreditCard } from 'lucide-react';
interface SupplierOverviewCardProps {
  supplier: SupplierResponse;
  onPay?: () => void;
}
const translateType = (type?: string) => {
  if (!type) return 'غير محدد';
  const map: Record<string, string> = {
    'Wholesale': 'جملة',
    'Retail': 'تجزئة (قطاعي)',
    'Distributor': 'موزع',
    'Company': 'شركة',
    'Individual': 'فرد (شخصي)',
  };
  return map[type] || type;
};
export function SupplierOverviewCard({ supplier, onPay }: SupplierOverviewCardProps) {
  const isOwedByUs = supplier.debtBalance > 0;
  const isOwedToUs = supplier.debtBalance < 0;
  return (
    <div className={`${tokens.card} p-6 bg-white flex flex-col md:flex-row gap-6 justify-between items-start`}>
      <div className="space-y-4 flex-1">
        <h2 className="text-2xl font-bold text-gray-900">{supplier.name}</h2>
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Tag size={18} className="text-gray-400" />
            <span className="text-sm font-medium">النوع:</span>
            <span className="text-sm font-bold text-gray-800">{translateType(supplier.type)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={18} className="text-gray-400" />
            <span className="text-sm font-medium">الهاتف:</span>
            <span className="text-sm font-bold text-gray-800 font-mono" dir="ltr">{supplier.phone || '---'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} className="text-gray-400" />
            <span className="text-sm font-medium">العنوان:</span>
            <span className="text-sm font-bold text-gray-800">{supplier.address || '---'}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 min-w-[250px]">
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col items-center justify-center text-center relative">
          <span className="text-sm text-gray-500 font-medium mb-1">الرصيد الحالي للمورد</span>
          <span className={`text-2xl font-bold ${isOwedByUs ? 'text-green-600' : isOwedToUs ? 'text-red-600' : 'text-gray-900'}`}>
            {formatCurrency(Math.abs(supplier.debtBalance))}
          </span>
          <span className="text-xs text-gray-500 mt-1 font-medium">
            {isOwedByUs ? '(مطلوب سداده للمورد)' : isOwedToUs ? '(دفعنا بزيادة - لنا عند المورد)' : '(الحساب مغلق ومُصفّى)'}
          </span>
          {supplier.debtBalance !== 0 && onPay && (
            <button
              onClick={onPay}
              className={`mt-3 w-full justify-center text-sm ${isOwedByUs ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors`}
            >
              <CreditCard size={16} />
              {isOwedByUs ? 'تسديد دفعة' : 'استلام دفعة'}
            </button>
          )}
        </div>
        <div className="flex gap-4">
          <div className="flex-1 bg-blue-50/50 rounded-xl p-3 border border-blue-100 text-center">
            <span className="text-xs text-gray-500 block mb-1">فواتير الشراء</span>
            <span className="text-lg font-bold text-blue-700">{supplier.purchaseInvoicesCount}</span>
          </div>
          <div className="flex-1 bg-orange-50/50 rounded-xl p-3 border border-orange-100 text-center">
            <span className="text-xs text-gray-500 block mb-1">المرتجعات</span>
            <span className="text-lg font-bold text-orange-700">{supplier.returnsCount}</span>
          </div>
        </div>
        <div className="text-center mt-2">
          <span className="text-xs text-gray-400">تاريخ الإضافة: {new Intl.DateTimeFormat('ar-EG').format(new Date(supplier.createdAt))}</span>
        </div>
      </div>
    </div>
  );
}
```

## File: src/features/suppliers/components/SupplierPaymentModal.tsx
```typescript
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { createSupplierPaymentSchema, SupplierResponse } from '../schemas/supplierSchemas';
import { useCreateSupplierPayment } from '../hooks/useSuppliers';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
interface SupplierPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplier: SupplierResponse;
}
export function SupplierPaymentModal({ isOpen, onClose, supplier }: SupplierPaymentModalProps) {
  const createPayment = useCreateSupplierPayment();
  const defaultIsReceipt = supplier.debtBalance < 0;
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(createSupplierPaymentSchema),
    defaultValues: {
      supplierId: supplier.supplierId,
      amount: Math.abs(supplier.debtBalance) > 0 ? Math.abs(supplier.debtBalance) : 0,
      notes: '',
      isReceipt: defaultIsReceipt
    }
  });
  const onSubmit = async (data: any) => {
    // Determine category based on receipt or payment
    const categoryId = data.isReceipt ? 6 : 5; // SupplierReceipt or SupplierPayment
    const source = await promptPaymentSource(categoryId);
    if (!source) return;
    const finalData = {
      ...data,
      amount: data.isReceipt ? -Math.abs(data.amount) : Math.abs(data.amount),
      paymentSource: source
    };
    createPayment.mutate(finalData, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };
  return (
    <>
      <PaymentSourcePromptModal />
      <BaseModal isOpen={isOpen} onClose={onClose} title={`تسوية حساب مع المورد: ${supplier.name}`}>
        <div className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-xl flex justify-between items-center">
          <span className="text-gray-600 font-semibold">إجمالي الرصيد الحالي للمورد:</span>
          <span className={`text-xl font-bold ${supplier.debtBalance > 0 ? 'text-green-600' : supplier.debtBalance < 0 ? 'text-red-600' : 'text-gray-900'}`}>
            {formatCurrency(supplier.debtBalance)}
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className={tokens.font.label + " block mb-2"}>نوع العملية</label>
            <Controller
              name="isReceipt"
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => field.onChange(false)}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border-2 transition-all ${
                      !field.value
                        ? 'border-green-600 bg-green-50 text-green-700 font-bold'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    <ArrowUpRight size={18} className={!field.value ? 'text-green-600' : 'text-gray-400'} />
                    <span>دفع (تسديد للمورد)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => field.onChange(true)}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border-2 transition-all ${
                      field.value
                        ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    <ArrowDownRight size={18} className={field.value ? 'text-blue-600' : 'text-gray-400'} />
                    <span>قبض (استلام من المورد)</span>
                  </button>
                </div>
              )}
            />
          </div>
          <div>
            <label className={tokens.font.label + " block mb-1.5"}>المبلغ (ج.م)</label>
            <input
              type="number"
              step="0.01"
              {...register('amount', { valueAsNumber: true })}
              onFocus={(e) => e.target.value === '0' && (e.target.value = '')}
              className={tokens.input}
              placeholder="0.00"
            />
            {errors.amount && <p className="text-red-500 text-xs mt-1">{String(errors.amount.message)}</p>}
          </div>
          <div>
            <label className={tokens.font.label + " block mb-1.5"}>ملاحظات</label>
            <input
              type="text"
              {...register('notes')}
              className={tokens.input}
              placeholder="مثال: دفعة نقدية أو استرداد نقدي..."
            />
          </div>
          <div className="flex justify-end gap-3 pt-4 mt-2">
            <button type="button" onClick={onClose} className={tokens.btn.ghost}>
              إلغاء
            </button>
            <button
              type="submit"
              disabled={createPayment.isPending}
              className={tokens.btn.primary}
            >
              {createPayment.isPending ? 'جاري الحفظ...' : 'حفظ العملية'}
            </button>
          </div>
        </form>
      </BaseModal>
    </>
  );
}
```

## File: src/features/suppliers/components/SuppliersTable.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { Trash2, Edit, CreditCard } from 'lucide-react';
import { DataTable } from '@/shared/components/ui/DataTable';
import { SupplierResponse } from '../schemas/supplierSchemas';
import { PaginatedList } from '@/shared/types/pagination';
import { HasPermission } from '@/features/auth/components/HasPermission';
import { Permissions } from '@/features/auth/schemas/permissions';
interface SuppliersTableProps {
  data?: PaginatedList<SupplierResponse>;
  isLoading: boolean;
  pageIndex: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onEdit?: (supplier: SupplierResponse) => void;
  onDelete?: (supplier: SupplierResponse) => void;
  onPay?: (supplier: SupplierResponse) => void;
  onRowClick?: (supplier: SupplierResponse) => void;
}
export function SuppliersTable({
  data,
  isLoading,
  pageIndex,
  onNextPage,
  onPrevPage,
  onEdit,
  onDelete,
  onPay,
  onRowClick,
}: SuppliersTableProps) {
  const columns = [
    {
      header: 'Ø§Ø³Ù… Ø§Ù„Ù…ÙˆØ±Ø¯',
      cell: (row: SupplierResponse) => (
        <span className="text-base font-bold text-gray-900">{row.name}</span>
      ),
    },
    {
      header: 'Ø§Ù„Ù‡Ø§ØªÙ',
      cell: (row: SupplierResponse) => (
        <span className="text-sm font-semibold text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100" dir="ltr">
          {row.phone || '---'}
        </span>
      ),
    },
    {
      header: 'Ø§Ù„Ø±ØµÙŠØ¯ Ø§Ù„Ù…Ø³ØªØ­Ù‚',
      cell: (row: SupplierResponse) => (
        <div className="flex items-center gap-3">
          <span className={`text-base font-bold ${row.debtBalance > 0 ? 'text-green-600' : row.debtBalance < 0 ? 'text-red-600' : 'text-gray-900'}`}>
            {formatCurrency(row.debtBalance)}
          </span>
          {row.debtBalance !== 0 && onPay && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPay(row);
              }}
              className={`text-xs px-2 py-1 rounded flex items-center gap-1 border transition-colors ${
                row.debtBalance > 0
                  ? 'bg-green-50 text-green-700 hover:bg-green-100 border-green-200'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200'
              }`}
              title={row.debtBalance > 0 ? "ØªØ³Ø¯ÙŠØ¯ Ø¯ÙØ¹Ø©" : "Ø§Ø³ØªÙ„Ø§Ù… Ø¯ÙØ¹Ø©"}
            >
              <CreditCard size={14} />
              {row.debtBalance > 0 ? 'ØªØ³Ø¯ÙŠØ¯' : 'Ø§Ø³ØªÙ„Ø§Ù…'}
            </button>
          )}
        </div>
      ),
    },
    {
      header: 'Ø¹Ø¯Ø¯ Ø§Ù„ÙÙˆØ§ØªÙŠØ±',
      cell: (row: SupplierResponse) => (
        <span className="text-sm font-bold text-gray-800">{row.purchaseInvoicesCount}</span>
      ),
    },
    {
      header: 'Ø¹Ø¯Ø¯ Ø§Ù„Ù…Ø±ØªØ¬Ø¹Ø§Øª',
      cell: (row: SupplierResponse) => (
        <span className="text-sm font-bold text-gray-800">{row.returnsCount}</span>
      ),
    },
    {
      header: 'Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª',
      cell: (row: SupplierResponse) => (
        <div className="flex justify-center gap-3 text-gray-400">
          <HasPermission permission={Permissions.SuppliersWrite}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.(row);
              }}
              className="hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50"
              title="ØªØ¹Ø¯ÙŠÙ„"
              aria-label="ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ù…ÙˆØ±Ø¯"
            >
              <Edit size={18} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(row);
              }}
              className="hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50"
              title="Ø­Ø°Ù"
              aria-label="Ø­Ø°Ù Ø§Ù„Ù…ÙˆØ±Ø¯"
            >
              <Trash2 size={18} />
            </button>
          </HasPermission>
        </div>
      ),
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={data?.items || []}
      isLoading={isLoading}
      pageIndex={data?.pageNumber || pageIndex}
      totalPages={data?.totalPages || 1}
      totalCount={data?.totalCount || 0}
      pageSize={10}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onRowClick={onRowClick}
    />
  );
}
```

## File: src/features/suppliers/components/SupplierStatementCard.tsx
```typescript
import { formatCurrency } from '@/shared/utils/currency';
import { tokens } from '@/shared/styles/tokens';
import { SupplierStatementItemResponse } from '../schemas/supplierSchemas';
interface SupplierStatementCardProps {
  statement?: SupplierStatementItemResponse[];
  isLoading: boolean;
}
const translateTxType = (type: string) => {
  const map: Record<string, string> = {
    'PurchaseInvoice': 'فاتورة مشتريات (استلام بضاعة)',
    'InvoicePayment': 'سداد من فاتورة',
    'Payment': 'دفعة نقدية (سند صرف للمورد)',
    'Return': 'مرتجع مشتريات (ترجيع بضاعة)',
    'OpeningBalance': 'رصيد افتتاحي',
  };
  return map[type] || type;
};
export function SupplierStatementCard({ statement, isLoading }: SupplierStatementCardProps) {
  return (
    <div className={`${tokens.card} bg-white overflow-hidden`}>
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-800">كشف الحساب (حركة المورد)</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right">
          <thead className="bg-gray-50/50 text-gray-500 font-medium">
            <tr>
              <th className="px-4 py-3">تاريخ الحركة</th>
              <th className="px-4 py-3">البيان (نوع الحركة)</th>
              <th className="px-4 py-3">خصم من حسابه (دفعنا له)</th>
              <th className="px-4 py-3">أضيف لحسابه (اشترينا منه)</th>
              <th className="px-4 py-3">صافي الحساب (بعد الحركة)</th>
              <th className="px-4 py-3">ملاحظات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                  جاري تحميل كشف الحساب...
                </td>
              </tr>
            ) : statement && statement.length > 0 ? (
              statement.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-3" dir="ltr">
                    {new Intl.DateTimeFormat('ar-EG', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(item.date))}
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                      {translateTxType(item.transactionType)}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-bold text-red-600">
                    {item.debit > 0 ? formatCurrency(item.debit) : '-'}
                  </td>
                  <td className="px-4 py-3 font-bold text-green-600">
                    {item.credit > 0 ? formatCurrency(item.credit) : '-'}
                  </td>
                  <td className="px-4 py-3 font-bold" dir="ltr">
                    {formatCurrency(item.balanceAfter)}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500">{item.notes || '---'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                  لا توجد حركات مسجلة لهذا المورد حتى الآن.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```

## File: src/features/suppliers/hooks/useSuppliers.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supplierRepository } from "../api/SupplierApi";
import { SupplierFilters, CreateSupplierRequest, UpdateSupplierRequest } from "../schemas/supplierSchemas";
import { toast } from "sonner";
export const SUPPLIER_KEYS = {
  suppliers: (filters: SupplierFilters) => ["suppliers", filters] as const,
  supplierDetails: (id: string) => ["suppliers", id] as const,
  supplierStatement: (id: string, filters: SupplierFilters) => ["suppliers", id, "statement", filters] as const,
  supplierBatches: (id: string) => ["suppliers", id, "batches"] as const,
};
export function useSuppliers(filters: SupplierFilters) {
  return useQuery({
    queryKey: SUPPLIER_KEYS.suppliers(filters),
    queryFn: () => supplierRepository.getSuppliers(filters),
  });
}
export function useSupplierDetails(id: string) {
  return useQuery({
    queryKey: SUPPLIER_KEYS.supplierDetails(id),
    queryFn: () => supplierRepository.getSupplier(id),
    enabled: !!id,
  });
}
export function useSupplierStatement(id: string, filters: SupplierFilters = { pageNumber: 1, pageSize: 100 }) {
  return useQuery({
    queryKey: SUPPLIER_KEYS.supplierStatement(id, filters),
    queryFn: () => supplierRepository.getSupplierStatement(id, filters),
    enabled: !!id,
  });
}
export function useSupplierBatches(id: string) {
  return useQuery({
    queryKey: SUPPLIER_KEYS.supplierBatches(id),
    queryFn: () => supplierRepository.getSupplierBatches(id),
    enabled: !!id,
  });
}
export function useCreateSupplier() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSupplierRequest) => supplierRepository.createSupplier(data),
    onSuccess: () => {
      toast.success("تم إضافة المورد بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
    onError: () => toast.error("حدث خطأ أثناء إضافة المورد"),
  });
}
export function useUpdateSupplier() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateSupplierRequest }) =>
      supplierRepository.updateSupplier(id, data),
    onSuccess: (_, { id }) => {
      toast.success("تم تحديث بيانات المورد بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: SUPPLIER_KEYS.supplierDetails(id) });
    },
    onError: () => toast.error("حدث خطأ أثناء تحديث المورد"),
  });
}
export function useDeleteSupplier() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => supplierRepository.deleteSupplier(id),
    onSuccess: () => {
      toast.success("تم حذف المورد بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
    onError: () => toast.error("حدث خطأ أثناء حذف المورد، قد يكون مرتبطاً بفواتير"),
  });
}
export function useCreateSupplierPayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: import('../schemas/supplierSchemas').CreateSupplierPaymentRequest) =>
      supplierRepository.addSupplierPayment(data),
    onSuccess: (_, variables) => {
      toast.success("تم تسجيل الدفعة بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: SUPPLIER_KEYS.supplierDetails(variables.supplierId) });
      queryClient.invalidateQueries({ queryKey: ["finance", "drawer"] });
    },
    onError: () => toast.error("حدث خطأ أثناء تسجيل الدفعة"),
  });
}
```

## File: src/features/suppliers/pages/SupplierDetailsPage.tsx
```typescript
import { useParams } from 'react-router-dom';
import { useSupplierDetails, useSupplierStatement } from '../hooks/useSuppliers';
import { SupplierOverviewCard } from '../components/SupplierOverviewCard';
import { SupplierStatementCard } from '../components/SupplierStatementCard';
import { SupplierPaymentModal } from '../components/SupplierPaymentModal';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { BackButton } from '@/shared/components/ui/BackButton';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useEffect, useState } from 'react';
export function SupplierDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { setTitle, setBackButton } = useHeaderStore();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { data: supplier, isLoading: isLoadingSupplier, isError } = useSupplierDetails(id!);
  const { data: statement, isLoading: isLoadingStatement } = useSupplierStatement(id!);
  useEffect(() => {
    setTitle("تفاصيل المورد");
    setBackButton(true, "/contacts/suppliers");
  }, [setTitle, setBackButton]);
  if (isLoadingSupplier) {
    return <PageLoader />;
  }
  if (isError || !supplier) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-gray-500">لم يتم العثور على المورد.</p>
        <BackButton to="/contacts/suppliers" label="العودة للقائمة" />
      </div>
    );
  }
  return (
    <div className="space-y-4 max-w-full overflow-hidden">
      <div className="grid grid-cols-1 gap-4">
        {}
        <SupplierOverviewCard
          supplier={supplier}
          onPay={() => setIsPaymentModalOpen(true)}
        />
        {}
        <SupplierStatementCard statement={statement} isLoading={isLoadingStatement} />
      </div>
      {isPaymentModalOpen && (
        <SupplierPaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          supplier={supplier}
        />
      )}
    </div>
  );
}
```

## File: src/features/suppliers/pages/SuppliersPage.tsx
```typescript
import { useState } from 'react';
import { useSuppliers, useCreateSupplier, useUpdateSupplier, useDeleteSupplier } from '../hooks/useSuppliers';
import { SupplierResponse, CreateSupplierRequest } from '../schemas/supplierSchemas';
import { SupplierFilters } from '../components/SupplierFilters';
import { SuppliersTable } from '../components/SuppliersTable';
import { SupplierForm } from '../components/SupplierForm';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { ConfirmModal } from '@/shared/components/ui/ConfirmModal';
import { tokens } from '@/shared/styles/tokens';
import * as z from 'zod';
import { createSupplierSchema } from '../schemas/supplierSchemas';
import { useNavigate } from 'react-router-dom';
import { SupplierPaymentModal } from '../components/SupplierPaymentModal';
export function SuppliersPage() {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [supplierToEdit, setSupplierToEdit] = useState<SupplierResponse | undefined>(undefined);
  // Delete modal state
  const [supplierToDelete, setSupplierToDelete] = useState<SupplierResponse | null>(null);
  // Payment modal state
  const [supplierToPay, setSupplierToPay] = useState<SupplierResponse | null>(null);
  const { data, isLoading } = useSuppliers({
    pageNumber: pageIndex,
    pageSize: 10,
    searchValue: searchTerm || undefined,
  });
  const createSupplier = useCreateSupplier();
  const updateSupplier = useUpdateSupplier();
  const deleteSupplier = useDeleteSupplier();
  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setPageIndex(1);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSupplierToEdit(undefined);
  };
  const openAddDrawer = () => {
    setSupplierToEdit(undefined);
    setIsDrawerOpen(true);
  };
  const openEditDrawer = (supplier: SupplierResponse) => {
    setSupplierToEdit(supplier);
    setIsDrawerOpen(true);
  };
  const handleFormSubmit = (formData: z.infer<typeof createSupplierSchema>) => {
    const payload: CreateSupplierRequest = {
      name: formData.name,
      type: formData.type || undefined,
      phone: formData.phone || undefined,
      address: formData.address || undefined,
    };
    if (supplierToEdit) {
      updateSupplier.mutate(
        { id: supplierToEdit.supplierId, data: payload },
        { onSuccess: closeDrawer }
      );
    } else {
      createSupplier.mutate(payload, { onSuccess: closeDrawer });
    }
  };
  const handleDeleteConfirm = () => {
    if (supplierToDelete) {
      deleteSupplier.mutate(supplierToDelete.supplierId, {
        onSuccess: () => setSupplierToDelete(null),
      });
    }
  };
  const isSubmitting = createSupplier.isPending || updateSupplier.isPending;
  const drawerFooter = (
    <>
      <button type="button" onClick={closeDrawer} className={tokens.btn.secondary}>
        إلغاء
      </button>
      <button
        type="submit"
        form="supplier-form"
        disabled={isSubmitting}
        className={tokens.btn.primary + " disabled:opacity-60"}
      >
        {isSubmitting ? 'جاري الحفظ...' : (supplierToEdit ? 'حفظ التعديلات' : 'إضافة المورد')}
      </button>
    </>
  );
  return (
    <div className="space-y-4">
      {/* Filter toolbar */}
      <SupplierFilters
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onAddClick={openAddDrawer}
      />
      {/* Data table */}
      <SuppliersTable
        data={data}
        isLoading={isLoading}
        pageIndex={pageIndex}
        onNextPage={() => setPageIndex((p) => p + 1)}
        onPrevPage={() => setPageIndex((p) => p - 1)}
        onEdit={openEditDrawer}
        onDelete={(supplier) => setSupplierToDelete(supplier)}
        onPay={(supplier) => setSupplierToPay(supplier)}
        onRowClick={(supplier) => navigate(`/contacts/suppliers/${supplier.supplierId}`)}
      />
      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!supplierToDelete}
        title="تأكيد حذف المورد"
        message={
          supplierToDelete
            ? `هل أنت متأكد من حذف المورد "${supplierToDelete.name}" نهائياً؟ لا يمكن التراجع عن هذا الإجراء وقد يؤدي لحذف الفواتير المرتبطة به.`
            : ''
        }
        confirmText={deleteSupplier.isPending ? 'جاري الحذف...' : 'نعم، احذف'}
        cancelText="إلغاء"
        onConfirm={handleDeleteConfirm}
        onClose={() => setSupplierToDelete(null)}
        type="danger"
      />
      {}
      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title={supplierToEdit ? "تعديل بيانات المورد" : "إضافة مورد جديد"}
        footer={drawerFooter}
      >
        <SupplierForm
          initialData={supplierToEdit}
          onSubmit={handleFormSubmit}
          isSubmitting={isSubmitting}
        />
      </RightDrawer>
      {}
      {supplierToPay && (
        <SupplierPaymentModal
          isOpen={!!supplierToPay}
          onClose={() => setSupplierToPay(null)}
          supplier={supplierToPay}
        />
      )}
    </div>
  );
}
```

## File: src/features/suppliers/schemas/supplierSchemas.ts
```typescript
import { z } from "zod";
import { BaseFilters } from "@/shared/types/pagination";
export interface SupplierFilters extends BaseFilters {
  searchValue?: string;
}
export interface SupplierResponse {
  supplierId: string;
  name: string;
  type?: string;
  phone?: string;
  address?: string;
  debtBalance: number;
  purchaseInvoicesCount: number;
  returnsCount: number;
  createdAt: string;
}
export interface SupplierStatementItemResponse {
  date: string;
  transactionType: string;
  transactionId: string;
  debit: number;
  credit: number;
  balanceAfter: number;
  notes?: string;
}
export const createSupplierSchema = z.object({
  name: z.string().min(1, "Ø§Ø³Ù… Ø§Ù„Ù…ÙˆØ±Ø¯ Ù…Ø·Ù„ÙˆØ¨"),
  type: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
});
export type CreateSupplierRequest = z.infer<typeof createSupplierSchema>;
export type UpdateSupplierRequest = CreateSupplierRequest;
export interface SupplierBatchResponse {
  batchId: string;
  productId: string;
  productName?: string;
  barcode?: string;
  availableQuantity: number;
  purchasePrice: number;
  dateReceived: string;
}
export const createSupplierPaymentSchema = z.object({
  supplierId: z.string().min(1),
  amount: z.number().min(0.01, "Ø§Ù„Ù…Ø¨Ù„Øº ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø£ÙƒØ¨Ø± Ù…Ù† 0"),
  isReceipt: z.boolean().default(false),
  paymentSource: z.number().optional(),
  notes: z.string().optional(),
});
export type CreateSupplierPaymentRequest = z.infer<typeof createSupplierPaymentSchema>;
export interface SupplierPaymentResponse {
  id: string;
  supplier: {
    id: string;
    name: string;
    phone?: string;
  };
  amount: number;
  paymentDate: string;
  notes?: string;
}
```

## File: src/features/wallets/api/WalletApi.ts
```typescript
import { apiClient } from "@/lib/axios";
import {
  WalletResponse,
  CreateWalletRequest,
  ProcessOperationRequest,
  WalletOperationResponse,
  UpdateWalletRequest,
  WalletDetailsResponse,
  WalletOperationFilter,
  WalletOperationsSummaryResponse,
} from "../schemas/walletSchemas";
import { PaginatedList as PaginatedResponse } from "@/shared/types/pagination";
export class WalletApi {
  async getWallets(): Promise<WalletResponse[]> {
    const { data } = await apiClient.get<{ items: WalletResponse[] }>("/wallets", { params: { pageSize: 1000 } });
    return data.items;
  }
  async getWalletById(walletId: string): Promise<WalletDetailsResponse> {
    const { data } = await apiClient.get<WalletDetailsResponse>(`/wallets/${walletId}`);
    return data;
  }
  async getWalletOperations(filter: WalletOperationFilter): Promise<PaginatedResponse<WalletOperationResponse>> {
    const { data } = await apiClient.get<PaginatedResponse<WalletOperationResponse>>(`/wallets/operations`, {
      params: { ...filter, pageSize: filter.pageSize ?? 20 }
    });
    return data;
  }
  async getWalletOperationsSummary(filter: WalletOperationFilter): Promise<WalletOperationsSummaryResponse> {
    const { data } = await apiClient.get<WalletOperationsSummaryResponse>(`/wallets/operations/summary`, {
      params: filter
    });
    return data;
  }
  async createWallet(reqData: CreateWalletRequest): Promise<WalletResponse> {
    const formData = new FormData();
    formData.append("Name", reqData.name);
    formData.append("PhoneNumber", reqData.phoneNumber);
    if (reqData.ownerName) formData.append("OwnerName", reqData.ownerName);
    formData.append("InitialBalance", reqData.initialBalance.toString());
    formData.append("Image", reqData.image);
    const { data } = await apiClient.post<WalletResponse>("/wallets", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  }
  async updateWallet(walletId: string, reqData: UpdateWalletRequest): Promise<WalletResponse> {
    const formData = new FormData();
    formData.append("Name", reqData.name);
    formData.append("PhoneNumber", reqData.phoneNumber);
    if (reqData.ownerName) formData.append("OwnerName", reqData.ownerName);
    formData.append("IsActive", reqData.isActive.toString());
    if (reqData.image) formData.append("Image", reqData.image);
    const { data } = await apiClient.put<WalletResponse>(`/wallets/${walletId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  }
  async processOperation(reqData: ProcessOperationRequest): Promise<WalletOperationResponse> {
    const { data } = await apiClient.post<WalletOperationResponse>(`/wallets/${reqData.walletId}/operations`, reqData);
    return data;
  }
}
export const walletApi = new WalletApi();
```

## File: src/features/wallets/components/GlobalWalletOperationsTable.tsx
```typescript
import { useState } from 'react';
import { useGlobalWalletOperations } from '../hooks/useGlobalWalletOperations';
import { useWallets } from '../hooks/useWallets';
import { tokens } from '@/shared/styles/tokens';
import { ArrowDownToLine, ArrowUpFromLine, ChevronLeft, ChevronRight, Filter, TrendingUp } from 'lucide-react';
import { formatDate } from '@/shared/utils/date';
import { WalletOperationType, WalletOperationResponse } from '../schemas/walletSchemas';
export function GlobalWalletOperationsTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [operationType, setOperationType] = useState<WalletOperationType | ''>('');
  const [walletId, setWalletId] = useState('');
  const { wallets } = useWallets();
  const { operations, totalPages, isLoadingOperations, totalProfit } = useGlobalWalletOperations({
    pageNumber,
    dateFrom: dateFrom || undefined,
    dateTo: dateTo || undefined,
    operationType: operationType !== '' ? operationType : undefined,
    walletId: walletId || undefined
  });
  const isProfitable = totalProfit >= 0;
  return (
    <div className="space-y-6">
      {/* Top Summary Card */}
      <div className={`bg-white rounded-2xl shadow-sm border p-6 flex items-center justify-between gap-4 ${isProfitable ? 'border-green-100' : 'border-red-100'}`}>
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">صافي الأرباح (للفلتر الحالي)</h2>
          <p className="text-gray-500 text-sm">يتم حسابه بناءً على العمليات المعروضة فقط</p>
        </div>
        <div className="flex items-center gap-4">
          <p className={`text-4xl font-black font-mono dir-ltr ${isProfitable ? 'text-green-600' : 'text-red-600'}`}>
            {isProfitable ? '+' : ''}{(totalProfit || 0).toFixed(2)}
          </p>
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${isProfitable ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            <TrendingUp size={28} />
          </div>
        </div>
      </div>
      {/* Operations Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm min-w-[150px]">
              <Filter size={16} className="text-gray-400 shrink-0" />
              <select
                value={walletId}
                onChange={e => { setWalletId(e.target.value); setPageNumber(1); }}
                className="bg-transparent border-none text-sm focus:ring-0 text-gray-600 py-0 w-full"
              >
                <option value="">كل المحافظ</option>
                {wallets.map(w => (
                  <option key={w.id} value={w.id}>{w.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm">
              <Filter size={16} className="text-gray-400 shrink-0" />
              <select
                value={operationType}
                onChange={e => { setOperationType(e.target.value ? Number(e.target.value) : ''); setPageNumber(1); }}
                className="bg-transparent border-none text-sm focus:ring-0 text-gray-600 py-0"
              >
                <option value="">كل العمليات</option>
                <option value={WalletOperationType.CashIn}>إيداع</option>
                <option value={WalletOperationType.CashOut}>سحب</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={dateFrom}
                onChange={e => { setDateFrom(e.target.value); setPageNumber(1); }}
                className={tokens.input + " py-1.5 text-sm w-auto"}
                title="من تاريخ"
              />
              <span className="text-gray-400">-</span>
              <input
                type="date"
                value={dateTo}
                onChange={e => { setDateTo(e.target.value); setPageNumber(1); }}
                className={tokens.input + " py-1.5 text-sm w-auto"}
                title="إلى تاريخ"
              />
            </div>
          </div>
        </div>
        {isLoadingOperations ? (
          <div className="p-8 text-center text-gray-500">جاري تحميل السجل...</div>
        ) : operations.length === 0 ? (
          <div className="p-12 text-center text-gray-400">لا يوجد عمليات تطابق البحث</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="bg-white text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">التاريخ</th>
                  <th className="px-6 py-4 font-semibold">المحفظة</th>
                  <th className="px-6 py-4 font-semibold">نوع العملية</th>
                  <th className="px-6 py-4 font-semibold">المبلغ المحول</th>
                  <th className="px-6 py-4 font-semibold">المبلغ الكاش</th>
                  <th className="px-6 py-4 font-semibold">الربح</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {operations.map((op: WalletOperationResponse) => {
                  const isDeposit = op.operationType === WalletOperationType.CashIn;
                  const wallet = wallets.find(w => w.id === op.walletId);
                  return (
                    <tr key={op.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 text-slate-600">{formatDate(op.createdAt)}</td>
                      <td className="px-6 py-4 font-medium text-slate-800">{wallet?.name || 'غير معروف'}</td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${isDeposit ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}`}>
                          {isDeposit ? <ArrowDownToLine size={14} /> : <ArrowUpFromLine size={14} />}
                          {isDeposit ? 'إيداع' : 'سحب'}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-700">{op.transferredAmount.toFixed(2)}</td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-700">{op.physicalCashAmount.toFixed(2)}</td>
                      <td className="px-6 py-4 font-mono font-bold">
                        <span className={op.profit > 0 ? 'text-green-600' : op.profit < 0 ? 'text-red-600' : 'text-gray-400'}>
                          {op.profit > 0 ? '+' : ''}{op.profit.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {totalPages > 1 && (
          <div className="border-t border-gray-100 p-4 bg-white flex items-center justify-center gap-4">
            <button
              disabled={pageNumber === 1}
              onClick={() => setPageNumber(p => Math.max(1, p - 1))}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <span className="font-semibold text-gray-700 text-sm">
              صفحة {pageNumber} من {totalPages}
            </span>
            <button
              disabled={pageNumber === totalPages}
              onClick={() => setPageNumber(p => Math.min(totalPages, p + 1))}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

## File: src/features/wallets/hooks/useGlobalWalletOperations.ts
```typescript
import { useQuery } from "@tanstack/react-query";
import { walletApi } from "../api/WalletApi";
import { WalletOperationFilter } from "../schemas/walletSchemas";
export function useGlobalWalletOperations(filter: WalletOperationFilter) {
  const operationsQuery = useQuery({
    queryKey: ["global-wallet-operations", filter],
    queryFn: () => walletApi.getWalletOperations(filter),
  });
  const summaryQuery = useQuery({
    queryKey: ["global-wallet-operations-summary", filter],
    queryFn: () => walletApi.getWalletOperationsSummary(filter),
  });
  return {
    operations: operationsQuery.data?.items ?? [],
    totalPages: operationsQuery.data?.totalPages ?? 1,
    totalCount: operationsQuery.data?.totalCount ?? 0,
    isLoadingOperations: operationsQuery.isLoading,
    totalProfit: summaryQuery.data?.totalProfit ?? 0,
    isLoadingSummary: summaryQuery.isLoading,
  };
}
```

## File: src/features/wallets/hooks/useWalletDetails.ts
```typescript
import { useQuery } from "@tanstack/react-query";
import { walletApi } from "../api/WalletApi";
import { WalletOperationFilter } from "../schemas/walletSchemas";
export function useWalletDetails(walletId: string, filter: WalletOperationFilter) {
  const detailsQuery = useQuery({
    queryKey: ["wallet", walletId],
    queryFn: () => walletApi.getWalletById(walletId),
    enabled: !!walletId,
  });
  const operationsQuery = useQuery({
    queryKey: ["wallet-operations", walletId, filter],
    queryFn: () => walletApi.getWalletOperations({ ...filter, walletId }),
    enabled: !!walletId,
  });
  return {
    wallet: detailsQuery.data,
    isLoadingWallet: detailsQuery.isLoading,
    operations: operationsQuery.data?.items ?? [],
    totalPages: operationsQuery.data?.totalPages ?? 1,
    totalCount: operationsQuery.data?.totalCount ?? 0,
    isLoadingOperations: operationsQuery.isLoading,
  };
}
```

## File: src/features/wallets/hooks/useWallets.ts
```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { walletApi } from "../api/WalletApi";
import { CreateWalletRequest, ProcessOperationRequest } from "../schemas/walletSchemas";
import { toast } from "sonner";
export function useWallets() {
  const queryClient = useQueryClient();
  const walletsQuery = useQuery({
    queryKey: ["wallets"],
    queryFn: () => walletApi.getWallets(),
  });
  const createWalletMutation = useMutation({
    mutationFn: (data: CreateWalletRequest) => walletApi.createWallet(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wallets"] });
      toast.success("تم إضافة المحفظة بنجاح");
    },
    onError: () => {
      toast.error("حدث خطأ أثناء إضافة المحفظة");
    }
  });
  const processOperationMutation = useMutation({
    mutationFn: (data: ProcessOperationRequest) => walletApi.processOperation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wallets"] });
      toast.success("تم تنفيذ العملية بنجاح");
    },
    onError: () => {
      toast.error("حدث خطأ أثناء تنفيذ العملية");
    }
  });
  const updateWalletMutation = useMutation({
    mutationFn: ({ walletId, data }: { walletId: string, data: any }) => walletApi.updateWallet(walletId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wallets"] });
      toast.success("تم تعديل المحفظة بنجاح");
    },
    onError: () => {
      toast.error("حدث خطأ أثناء تعديل المحفظة");
    }
  });
  return {
    wallets: walletsQuery.data ?? [],
    isLoading: walletsQuery.isLoading,
    createWallet: createWalletMutation.mutate,
    isCreating: createWalletMutation.isPending,
    updateWallet: updateWalletMutation.mutate,
    isUpdating: updateWalletMutation.isPending,
    processOperation: processOperationMutation.mutate,
    isProcessing: processOperationMutation.isPending,
  };
}
```

## File: src/features/wallets/pages/WalletDetailsPage.tsx
```typescript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useWalletDetails } from '../hooks/useWalletDetails';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { Wallet, ArrowDownToLine, ArrowUpFromLine, ChevronLeft, ChevronRight, TrendingUp, Filter } from 'lucide-react';
import { formatDate } from '@/shared/utils/date';
import { WalletOperationType, WalletOperationResponse } from '../schemas/walletSchemas';
import { tokens } from '@/shared/styles/tokens';
export function WalletDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { setTitle, setBackButton } = useHeaderStore();
  const [pageNumber, setPageNumber] = useState(1);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [operationType, setOperationType] = useState<WalletOperationType | ''>('');
  const { wallet, isLoadingWallet, operations, totalPages, isLoadingOperations } = useWalletDetails(id || '', {
    pageNumber,
    dateFrom: dateFrom || undefined,
    dateTo: dateTo || undefined,
    operationType: operationType !== '' ? operationType : undefined
  });
  useEffect(() => {
    setTitle('ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ø­ÙØ¸Ø©');
    setBackButton(true, '/settings/wallets');
    return () => setBackButton(false);
  }, [setTitle, setBackButton]);
  if (isLoadingWallet) {
    return <div className="p-8 text-center text-gray-500">Ø¬Ø§Ø±ÙŠ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª...</div>;
  }
  if (!wallet) {
    return <div className="p-8 text-center text-red-500">Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø­ÙØ¸Ø©</div>;
  }
  const isProfitable = wallet.netProfit >= 0;
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 md:col-span-2">
          <div className="w-20 h-20 rounded-[20px] bg-blue-50 flex items-center justify-center border border-gray-100 overflow-hidden shrink-0">
            {wallet.imageUrl ? (
              <img src={wallet.imageUrl.startsWith('http') ? wallet.imageUrl : `${import.meta.env.VITE_API_BASE_URL ?? 'https://localhost:7073'}${wallet.imageUrl}`} alt={wallet.name} className="w-full h-full object-cover" />
            ) : (
              <Wallet size={36} className="text-blue-500" />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{wallet.name}</h1>
            <p className="text-gray-500 text-lg mb-2" dir="ltr">{wallet.phoneNumber}</p>
            <div className="flex gap-3">
              <span className={`px-3 py-1 text-sm font-medium rounded-lg ${wallet.isActive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {wallet.isActive ? 'Ù†Ø´Ø·' : 'ØºÙŠØ± Ù†Ø´Ø·'}
              </span>
              <span className="px-3 py-1 text-sm font-medium bg-gray-50 text-gray-600 rounded-lg">
                ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡: {formatDate(wallet.createdAt)}
              </span>
            </div>
          </div>
          <div className="mr-auto text-center border-r border-gray-100 pr-6">
            <p className="text-gray-500 font-medium mb-1">Ø§Ù„Ø±ØµÙŠØ¯ Ø§Ù„Ø­Ø§Ù„ÙŠ</p>
            <p className="text-3xl font-black text-[#0f8e4c] font-mono">
              {(wallet.balance || 0).toFixed(2)}
            </p>
          </div>
        </div>
        <div className={`bg-white rounded-2xl shadow-sm border p-6 flex flex-col justify-center items-center ${isProfitable ? 'border-green-100' : 'border-red-100'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${isProfitable ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            <TrendingUp size={24} />
          </div>
          <p className="text-gray-500 font-medium mb-1">ØµØ§ÙÙŠ Ø§Ù„Ø£Ø±Ø¨Ø§Ø­ (Ù„ÙƒÙ„ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª)</p>
          <p className={`text-3xl font-black font-mono dir-ltr ${isProfitable ? 'text-green-600' : 'text-red-600'}`}>
            {isProfitable ? '+' : ''}{(wallet.netProfit || 0).toFixed(2)}
          </p>
        </div>
      </div>
      {/* Operations Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-gray-800">Ø³Ø¬Ù„ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª</h2>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm">
              <Filter size={16} className="text-gray-400" />
              <select
                value={operationType}
                onChange={e => {
                  setOperationType(e.target.value ? Number(e.target.value) : '');
                  setPageNumber(1);
                }}
                className="bg-transparent border-none text-sm focus:ring-0 text-gray-600 py-0"
              >
                <option value="">ÙƒÙ„ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª</option>
                <option value={WalletOperationType.CashIn}>Ø¥ÙŠØ¯Ø§Ø¹</option>
                <option value={WalletOperationType.CashOut}>Ø³Ø­Ø¨</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={dateFrom}
                onChange={e => { setDateFrom(e.target.value); setPageNumber(1); }}
                className={tokens.input + " py-1.5 text-sm w-auto"}
                title="Ù…Ù† ØªØ§Ø±ÙŠØ®"
              />
              <span className="text-gray-400">-</span>
              <input
                type="date"
                value={dateTo}
                onChange={e => { setDateTo(e.target.value); setPageNumber(1); }}
                className={tokens.input + " py-1.5 text-sm w-auto"}
                title="Ø¥Ù„Ù‰ ØªØ§Ø±ÙŠØ®"
              />
            </div>
          </div>
        </div>
        {isLoadingOperations ? (
          <div className="p-8 text-center text-gray-500">Ø¬Ø§Ø±ÙŠ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø³Ø¬Ù„...</div>
        ) : operations.length === 0 ? (
          <div className="p-12 text-center text-gray-400">Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø¹Ù…Ù„ÙŠØ§Øª ØªØ·Ø§Ø¨Ù‚ Ø§Ù„Ø¨Ø­Ø«</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="bg-white text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Ø§Ù„ØªØ§Ø±ÙŠØ®</th>
                  <th className="px-6 py-4 font-semibold">Ù†ÙˆØ¹ Ø§Ù„Ø¹Ù…Ù„ÙŠØ©</th>
                  <th className="px-6 py-4 font-semibold">Ø§Ù„Ù…Ø¨Ù„Øº Ø§Ù„Ù…Ø­ÙˆÙ„</th>
                  <th className="px-6 py-4 font-semibold">Ø§Ù„Ù…Ø¨Ù„Øº Ø§Ù„ÙƒØ§Ø´</th>
                  <th className="px-6 py-4 font-semibold">Ø§Ù„Ø±Ø¨Ø­</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {operations.map((op: WalletOperationResponse) => {
                  const isDeposit = op.operationType === WalletOperationType.CashIn;
                  return (
                    <tr key={op.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 text-slate-600">{formatDate(op.createdAt)}</td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${isDeposit ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}`}>
                          {isDeposit ? <ArrowDownToLine size={14} /> : <ArrowUpFromLine size={14} />}
                          {isDeposit ? 'Ø¥ÙŠØ¯Ø§Ø¹' : 'Ø³Ø­Ø¨'}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-700">{op.transferredAmount.toFixed(2)}</td>
                      <td className="px-6 py-4 font-mono font-medium text-slate-700">{op.physicalCashAmount.toFixed(2)}</td>
                      <td className="px-6 py-4 font-mono font-bold">
                        <span className={op.profit > 0 ? 'text-green-600' : op.profit < 0 ? 'text-red-600' : 'text-gray-400'}>
                          {op.profit > 0 ? '+' : ''}{op.profit.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {totalPages > 1 && (
          <div className="border-t border-gray-100 p-4 bg-white flex items-center justify-center gap-4">
            <button
              disabled={pageNumber === 1}
              onClick={() => setPageNumber(p => Math.max(1, p - 1))}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <span className="font-semibold text-gray-700 text-sm">
              ØµÙØ­Ø© {pageNumber} Ù…Ù† {totalPages}
            </span>
            <button
              disabled={pageNumber === totalPages}
              onClick={() => setPageNumber(p => Math.min(totalPages, p + 1))}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

## File: src/features/wallets/pages/WalletOperationsPage.tsx
```typescript
import { useState, useEffect } from 'react';
import { useWallets } from '../hooks/useWallets';
import { WalletOperationType, WalletResponse } from '../schemas/walletSchemas';
import { tokens } from '@/shared/styles/tokens';
import { Wallet, CreditCard, Banknote, X, ArrowDownToLine, ArrowUpFromLine, Coins } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
const operationSchema = z.object({
  walletId: z.string().min(1, 'الرجاء اختيار المحفظة'),
  operationType: z.nativeEnum(WalletOperationType),
  transferredAmount: z.coerce.number().min(0.01, 'المبلغ يجب أن يكون أكبر من 0'),
  physicalCashAmount: z.coerce.number().min(0.01, 'المبلغ يجب أن يكون أكبر من 0'),
  notes: z.string().optional(),
});
type OperationForm = z.infer<typeof operationSchema>;
export function WalletOperationsPage() {
  const { setTitle } = useHeaderStore();
  const { wallets, isLoading, processOperation, isProcessing } = useWallets();
  const [selectedWallet, setSelectedWallet] = useState<WalletResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setTitle('عمليات المحافظ');
  }, [setTitle]);
  const form = useForm<OperationForm>({
    resolver: zodResolver(operationSchema) as any,
    defaultValues: {
      walletId: '',
      operationType: WalletOperationType.CashIn,
      transferredAmount: 0,
      physicalCashAmount: 0,
      notes: ''
    }
  });
  const { watch, handleSubmit, reset } = form;
  const operationType = watch('operationType');
  const transferredAmount = watch('transferredAmount') || 0;
  const physicalCashAmount = watch('physicalCashAmount') || 0;
  const profit = operationType === WalletOperationType.CashIn
    ? Number(physicalCashAmount) - Number(transferredAmount)
    : Number(transferredAmount) - Number(physicalCashAmount);
  const openOperationModal = (wallet: WalletResponse, type: WalletOperationType) => {
    setSelectedWallet(wallet);
    reset({
      walletId: wallet.id,
      operationType: type,
      transferredAmount: 0,
      physicalCashAmount: 0,
      notes: ''
    });
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWallet(null);
  };
  const onSubmit = (data: OperationForm) => {
    processOperation({
      walletId: data.walletId,
      operationType: data.operationType,
      transferredAmount: Number(data.transferredAmount),
      physicalCashAmount: Number(data.physicalCashAmount),
      notes: data.notes || null,
    }, {
      onSuccess: () => {
        closeModal();
      }
    });
  };
  const activeWallets = wallets.filter(w => w.isActive);
  return (
    <div className="flex flex-col h-full bg-gray-50/50">
      {isLoading ? (
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <div className="text-center text-gray-500 py-12">جاري تحميل المحافظ...</div>
        </div>
      ) : activeWallets.length === 0 ? (
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <div className="text-center text-red-500 py-12">
            لا يوجد محافظ نشطة مسجلة! يرجى إضافة محفظة أولاً من الإعدادات.
          </div>
        </div>
      ) : (
        <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 content-start max-w-screen-2xl mx-auto">
            {activeWallets.map(wallet => (
              <div
                key={wallet.id}
                className="bg-white rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden flex flex-col p-4 sm:p-5 relative"
              >
                <div className="h-28 sm:h-36 flex items-center justify-center mb-3 mt-2">
                  {wallet.imageUrl ? (
                    <img src={wallet.imageUrl} alt={wallet.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                  ) : (
                    <Wallet size={56} className="text-gray-200" />
                  )}
                </div>
                <div className="flex flex-col flex-1 items-center text-center">
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 line-clamp-1 leading-snug">
                    {wallet.name}
                  </h3>
                  <div className="bg-gray-50/80 px-4 py-2 rounded-xl mb-5 border border-gray-100 shadow-sm">
                    <p className="text-[20px] sm:text-[22px] font-black text-[#0f8e4c] tracking-[0.15em]" dir="ltr">
                      {wallet.phoneNumber}
                    </p>
                  </div>
                  <div className="mt-auto mb-5 font-bold text-[16px] sm:text-[20px] text-[#0f8e4c] bg-[#e6f4ed] px-5 py-2 rounded-xl border border-[#0f8e4c]/20 flex items-center justify-center gap-2">
                    <Coins size={22} className="text-[#0f8e4c]" />
                    الرصيد: {Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(wallet.balance)}
                  </div>
                  <div className="w-full flex gap-2 sm:gap-3">
                    <button
                      onClick={() => openOperationModal(wallet, WalletOperationType.CashOut)}
                      className="flex-1 py-2 sm:py-3 rounded-xl text-sm sm:text-[15px] font-bold flex items-center justify-center gap-2 transition-all bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 hover:border-red-300 shadow-sm"
                    >
                      <ArrowUpFromLine size={18} />
                      سحب
                    </button>
                    <button
                      onClick={() => openOperationModal(wallet, WalletOperationType.CashIn)}
                      className="flex-1 py-2 sm:py-3 rounded-xl text-sm sm:text-[15px] font-bold flex items-center justify-center gap-2 transition-all bg-[#0f8e4c] hover:bg-[#0c7a40] text-white shadow-sm"
                    >
                      <ArrowDownToLine size={18} />
                      إيداع
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {}
      {isModalOpen && selectedWallet && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          onMouseDown={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="p-4 text-white flex justify-between items-center bg-[#0f8e4c]">
              <h2 className="text-lg font-bold flex items-center gap-2">
                {operationType === WalletOperationType.CashIn ? <CreditCard size={20} /> : <Banknote size={20} />}
                {operationType === WalletOperationType.CashIn ? 'عملية إيداع' : 'عملية سحب'} - {selectedWallet.name}
              </h2>
              <button onClick={closeModal} className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-5">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {operationType === WalletOperationType.CashIn ? 'هتحول كام للمحفظة؟ *' : 'الزبون حولك كام؟ *'}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...form.register('transferredAmount')}
                    onFocus={(e) => e.target.select()}
                    className={tokens.input + " h-12 text-xl font-mono text-center focus:ring-[#0f8e4c] focus:border-[#0f8e4c] bg-gray-50"}
                    placeholder="0.00"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {operationType === WalletOperationType.CashIn ? 'أخدت كاش كام من الزبون؟ *' : 'هتدي للزبون كاش كام؟ *'}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...form.register('physicalCashAmount')}
                    onFocus={(e) => e.target.select()}
                    className={tokens.input + " h-12 text-xl font-mono text-center focus:ring-[#0f8e4c] focus:border-[#0f8e4c] bg-gray-50"}
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="flex justify-between px-2">
                  <div className="w-1/2 text-center">
                    {form.formState.errors.transferredAmount && (
                      <p className="text-red-500 text-xs mt-1">{form.formState.errors.transferredAmount.message}</p>
                    )}
                  </div>
                  <div className="w-1/2 text-center">
                    {form.formState.errors.physicalCashAmount && (
                      <p className="text-red-500 text-xs mt-1">{form.formState.errors.physicalCashAmount.message}</p>
                    )}
                  </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">رقم الموبايل / ملاحظات (اختياري)</label>
                <input
                  {...form.register('notes')}
                  className={tokens.input + " h-10 focus:ring-[#0f8e4c] focus:border-[#0f8e4c]"}
                  placeholder="ملاحظات..."
                />
              </div>
              <div className={`p-3 rounded-xl border flex justify-between items-center ${profit > 0 ? 'bg-[#e6f4ed] border-[#0f8e4c]/30 text-[#0f8e4c]' : profit < 0 ? 'bg-red-50 border-red-200 text-red-800' : 'bg-gray-50 border-gray-200 text-gray-800'}`}>
                <span className="font-bold text-sm">صافي الربح:</span>
                <span className="text-xl font-black font-mono dir-ltr">{profit > 0 ? '+' : ''}{profit.toFixed(2)}</span>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors text-sm"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`flex-2 px-4 py-3 text-white rounded-xl font-bold transition-colors disabled:opacity-60 flex-[2] text-sm bg-[#0f8e4c] hover:bg-[#0c7a40]`}
                >
                  {isProcessing ? 'جاري التنفيذ...' : 'تأكيد العملية'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
```

## File: src/features/wallets/pages/WalletsAdminPage.tsx
```typescript
import { useState, useEffect } from 'react';
import { useWallets } from '../hooks/useWallets';
import { tokens } from '@/shared/styles/tokens';
import { Wallet, Plus, Edit2, Info } from 'lucide-react';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formatDate } from '@/shared/utils/date';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useNavigate } from 'react-router-dom';
import { WalletResponse } from '../schemas/walletSchemas';
import { GlobalWalletOperationsTable } from '../components/GlobalWalletOperationsTable';
const walletFormSchema = z.object({
  name: z.string().min(1, 'Ø§Ø³Ù… Ø§Ù„Ù…Ø­ÙØ¸Ø© Ù…Ø·Ù„ÙˆØ¨'),
  phoneNumber: z.string().min(1, 'Ø±Ù‚Ù… Ø§Ù„ØªÙ„ÙŠÙÙˆÙ† Ù…Ø·Ù„ÙˆØ¨'),
  ownerName: z.string().optional(),
  initialBalance: z.coerce.number().min(0, 'ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„Ø±ØµÙŠØ¯ 0 Ø£Ùˆ Ø£ÙƒØ«Ø±').optional(),
  isActive: z.boolean(),
  image: z.any().optional()
});
type WalletFormValues = z.infer<typeof walletFormSchema>;
export function WalletsAdminPage() {
  const { setTitle } = useHeaderStore();
  const navigate = useNavigate();
  const { wallets, isLoading, createWallet, isCreating, updateWallet, isUpdating } = useWallets();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingWallet, setEditingWallet] = useState<WalletResponse | null>(null);
  const [activeTab, setActiveTab] = useState<'list' | 'history'>('list');
  useEffect(() => {
    setTitle('Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø­Ø§ÙØ¸');
  }, [setTitle]);
  const form = useForm<WalletFormValues>({
    resolver: zodResolver(walletFormSchema) as any,
    defaultValues: { name: '', phoneNumber: '', ownerName: '', initialBalance: 0, isActive: true }
  });
  const openCreateDrawer = () => {
    setEditingWallet(null);
    form.reset({ name: '', phoneNumber: '', ownerName: '', initialBalance: 0, isActive: true });
    setIsDrawerOpen(true);
  };
  const openEditDrawer = (wallet: WalletResponse, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingWallet(wallet);
    form.reset({
      name: wallet.name,
      phoneNumber: wallet.phoneNumber,
      ownerName: wallet.ownerName || '',
      initialBalance: wallet.balance,
      isActive: wallet.isActive,
    });
    setIsDrawerOpen(true);
  };
  const onSubmit = (data: WalletFormValues) => {
    if (editingWallet) {
      updateWallet(
        {
          walletId: editingWallet.id,
          data: {
            name: data.name,
            phoneNumber: data.phoneNumber,
            ownerName: data.ownerName || undefined,
            isActive: data.isActive,
            image: data.image?.[0]
          }
        },
        { onSuccess: () => setIsDrawerOpen(false) }
      );
    } else {
      createWallet(
        {
          name: data.name,
          phoneNumber: data.phoneNumber,
          ownerName: data.ownerName || undefined,
          initialBalance: data.initialBalance || 0,
          image: data.image?.[0]
        },
        { onSuccess: () => setIsDrawerOpen(false) }
      );
    }
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setEditingWallet(null);
    form.reset();
  };
  const isSaving = isCreating || isUpdating;
  const drawerFooter = (
    <>
      <button type="button" onClick={closeDrawer} className={tokens.btn.secondary}>
        Ø¥Ù„ØºØ§Ø¡
      </button>
      <button
        type="submit"
        form="wallet-form"
        disabled={isSaving}
        className={tokens.btn.primary + " disabled:opacity-60"}
      >
        {isSaving ? 'Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø­ÙØ¸...' : 'Ø­ÙØ¸'}
      </button>
    </>
  );
  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('list')}
          className={`py-3 px-6 font-semibold text-sm border-b-2 transition-colors ${activeTab === 'list' ? 'border-[#0f8e4c] text-[#0f8e4c]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Ø§Ù„Ù…Ø­Ø§ÙØ¸
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`py-3 px-6 font-semibold text-sm border-b-2 transition-colors ${activeTab === 'history' ? 'border-[#0f8e4c] text-[#0f8e4c]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Ø³Ø¬Ù„ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø´Ø§Ù…Ù„
        </button>
      </div>
      {activeTab === 'list' && (
        <>
          <div className="flex justify-end">
            <button
              onClick={openCreateDrawer}
              className={tokens.btn.primary + " flex items-center gap-2"}
            >
              <Plus size={18} />
              Ù…Ø­ÙØ¸Ø© Ø¬Ø¯ÙŠØ¯Ø©
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {isLoading ? (
              <div className="p-8 text-center text-gray-500">Ø¬Ø§Ø±ÙŠ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ø­Ø§ÙØ¸...</div>
            ) : wallets.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-flex w-16 h-16 rounded-full bg-blue-50 items-center justify-center text-blue-500 mb-4">
                  <Wallet size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ù…Ø­Ø§ÙØ¸ Ù…Ø³Ø¬Ù„Ø©</h3>
                <p className="text-gray-500 mb-4">Ù‚Ù… Ø¨Ø¥Ø¶Ø§ÙØ© Ø£ÙˆÙ„ Ù…Ø­ÙØ¸Ø© Ù„Ù„Ø¨Ø¯Ø¡ ÙÙŠ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-right">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-semibold">Ø§Ø³Ù… Ø§Ù„Ù…Ø­ÙØ¸Ø©</th>
                  <th className="px-6 py-4 font-semibold">Ø±Ù‚Ù… Ø§Ù„ØªÙ„ÙŠÙÙˆÙ†</th>
                  <th className="px-6 py-4 font-semibold">Ø§Ø³Ù… Ø§Ù„Ù…Ø§Ù„Ùƒ</th>
                  <th className="px-6 py-4 font-semibold">Ø§Ù„Ø±ØµÙŠØ¯ Ø§Ù„Ø­Ø§Ù„ÙŠ</th>
                  <th className="px-6 py-4 font-semibold">ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥Ù†Ø´Ø§Ø¡</th>
                  <th className="px-6 py-4 font-semibold">Ø§Ù„Ø­Ø§Ù„Ø©</th>
                  <th className="px-6 py-4 font-semibold">Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {wallets.map(wallet => (
                  <tr
                    key={wallet.id}
                    className="hover:bg-slate-50/50 cursor-pointer transition-colors"
                    onClick={() => navigate(`/wallets/${wallet.id}`)}
                  >
                    <td className="px-6 py-4 font-medium text-slate-800">
                      <div className="flex items-center gap-3">
                        {wallet.imageUrl ? (
                          <img src={wallet.imageUrl.startsWith('http') ? wallet.imageUrl : `${import.meta.env.VITE_API_BASE_URL ?? 'https://localhost:7073'}${wallet.imageUrl}`} alt={wallet.name} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                            <Wallet size={16} />
                          </div>
                        )}
                        <span>{wallet.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500" dir="ltr">{wallet.phoneNumber}</td>
                    <td className="px-6 py-4 text-slate-500">{wallet.ownerName || '-'}</td>
                    <td className="px-6 py-4 font-bold text-[#0f8e4c] font-mono">
                      {wallet.balance.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-slate-500">{formatDate(wallet.createdAt)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${wallet.isActive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {wallet.isActive ? 'Ù†Ø´Ø·' : 'ØºÙŠØ± Ù†Ø´Ø·'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => openEditDrawer(wallet, e)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="ØªØ¹Ø¯ÙŠÙ„"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                          title="Ø§Ù„ØªÙØ§ØµÙŠÙ„"
                        >
                          <Info size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </>
      )}
      {activeTab === 'history' && (
        <GlobalWalletOperationsTable />
      )}
      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title={editingWallet ? "ØªØ¹Ø¯ÙŠÙ„ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ù…Ø­ÙØ¸Ø©" : "Ø¥Ø¶Ø§ÙØ© Ù…Ø­ÙØ¸Ø© Ø¬Ø¯ÙŠØ¯Ø©"}
        footer={drawerFooter}
      >
        <form id="wallet-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ø§Ø³Ù… Ø§Ù„Ù…Ø­ÙØ¸Ø© *</label>
            <input
              {...form.register('name')}
              className={tokens.input}
              placeholder="Ù…Ø«Ø§Ù„: ÙÙˆØ¯Ø§ÙÙˆÙ† ÙƒØ§Ø´ - Ø±Ù‚Ù… 1"
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ø±Ù‚Ù… Ø§Ù„ØªÙ„ÙŠÙÙˆÙ† *</label>
            <input
              {...form.register('phoneNumber')}
              className={tokens.input}
              placeholder="Ù…Ø«Ø§Ù„: 01012345678"
            />
            {form.formState.errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.phoneNumber.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ø§Ø³Ù… Ø§Ù„Ù…Ø§Ù„Ùƒ (Ø§Ø®ØªÙŠØ§Ø±ÙŠ)</label>
            <input
              {...form.register('ownerName')}
              className={tokens.input}
              placeholder="Ù…Ø«Ø§Ù„: Ø£Ø­Ù…Ø¯ Ù…Ø­Ù…Ø¯"
            />
          </div>
          {!editingWallet && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ø§Ù„Ø±ØµÙŠØ¯ Ø§Ù„Ø§ÙØªØªØ§Ø­ÙŠ</label>
              <input
                type="number"
                step="0.01"
                {...form.register('initialBalance')}
                className={tokens.input}
              />
              {form.formState.errors.initialBalance && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.initialBalance.message}</p>
              )}
            </div>
          )}
          {editingWallet && (
            <div className="flex items-center gap-2 pt-2 pb-2">
              <input
                type="checkbox"
                id="isActive"
                {...form.register('isActive')}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                Ø§Ù„Ù…Ø­ÙØ¸Ø© Ù†Ø´Ø·Ø©
              </label>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ØµÙˆØ±Ø© Ø§Ù„Ù…Ø­ÙØ¸Ø© {editingWallet ? '(Ø§Ø®ØªÙŠØ§Ø±ÙŠ - Ù„Ø¹Ø¯Ù… Ø§Ù„ØªØºÙŠÙŠØ± Ø§ØªØ±ÙƒÙ‡Ø§ ÙØ§Ø±ØºØ©)' : '*'}
            </label>
            <input
              type="file"
              accept="image/*"
              {...form.register('image')}
              className={tokens.input}
            />
            {form.formState.errors.image && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.image?.message as string}</p>
            )}
          </div>
        </form>
      </RightDrawer>
    </div>
  );
}
```

## File: src/features/wallets/schemas/walletSchemas.ts
```typescript
export enum WalletOperationType {
  CashIn = 1,
  CashOut = 2,
}
export interface WalletResponse {
  id: string;
  name: string;
  phoneNumber: string;
  ownerName: string | null;
  balance: number;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: string;
}
export interface CreateWalletRequest {
  name: string;
  phoneNumber: string;
  ownerName?: string | null;
  initialBalance: number;
  image: File;
}
export interface ProcessOperationRequest {
  walletId: string;
  operationType: WalletOperationType;
  transferredAmount: number;
  physicalCashAmount: number;
  notes: string | null;
}
export interface WalletOperationResponse {
  id: string;
  walletId: string;
  operationType: WalletOperationType;
  transferredAmount: number;
  physicalCashAmount: number;
  profit: number;
  drawerTransactionId: string | null;
  createdAt: string;
}
export interface UpdateWalletRequest {
  name: string;
  phoneNumber: string;
  ownerName?: string | null;
  isActive: boolean;
  image?: File;
}
export interface WalletDetailsResponse extends WalletResponse {
  netProfit: number;
}
export interface WalletOperationFilter {
  pageNumber?: number;
  pageSize?: number;
  walletId?: string;
  operationType?: WalletOperationType;
  dateFrom?: string;
  dateTo?: string;
}
export interface WalletOperationsSummaryResponse {
  totalProfit: number;
}
```

## File: src/index.css
```css
@import "tailwindcss";
@layer base {
  :root {
    --color-primary: #2563eb;
    --color-primary-hover: #1d4ed8;
    --color-page-bg: #f8fafc;
    --color-surface: #ffffff;
    --color-text-main: #374151;
    --color-text-muted: #6b7280;
    --color-sidebar-bg: #0f172a;
    --color-sidebar-logo: #020617;
    --color-sidebar-border: #1e293b;
    --color-sidebar-text: #cbd5e1;
    --color-border: #d1d5db;
    --color-danger: #ef4444;
  }
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Cairo', sans-serif;
    background-color: #f8fafc;
    color: #374151;
    direction: rtl;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 9999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
}
```

## File: src/lib/axios.ts
```typescript
import axios from 'axios';
import { storage } from '@/lib/storage';
import { toast } from 'sonner';
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://localhost:7073';
export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
apiClient.interceptors.request.use((config) => {
  const token = storage.getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
let isRefreshing = false;
let failedQueue: any[] = [];
const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function(resolve, reject) {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers.Authorization = 'Bearer ' + token;
          return apiClient(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }
      originalRequest._retry = true;
      isRefreshing = true;
      const token = storage.getToken();
      const refreshToken = storage.getRefreshToken();
      if (token && refreshToken) {
        try {
          const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {
            token,
            refreshToken
          });
          storage.setToken(data.token);
          storage.setRefreshToken(data.refreshToken);
          if (data.permissions) {
             storage.setPermissions(data.permissions);
          }
          apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
          originalRequest.headers.Authorization = 'Bearer ' + data.token;
          processQueue(null, data.token);
          return apiClient(originalRequest);
        } catch (err) {
          processQueue(err, null);
          storage.clearToken();
          storage.clearRefreshToken();
          storage.clearPermissions();
          window.location.href = '/login';
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      } else {
        storage.clearToken();
        storage.clearRefreshToken();
        storage.clearPermissions();
        window.location.href = '/login';
        return Promise.reject(error);
      }
    } else if (error.response?.status >= 500) {
      toast.error('حدث خطأ في الخادم (Server Error).');
    }
    return Promise.reject(error);
  }
);
```

## File: src/lib/storage.ts
```typescript
export const storage = {
  getToken: () => localStorage.getItem('token'),
  setToken: (token: string) => localStorage.setItem('token', token),
  clearToken: () => localStorage.removeItem('token'),
  getRefreshToken: () => localStorage.getItem('refreshToken'),
  setRefreshToken: (token: string) => localStorage.setItem('refreshToken', token),
  clearRefreshToken: () => localStorage.removeItem('refreshToken'),
  getPermissions: (): string[] => {
    const perms = localStorage.getItem('permissions');
    return perms ? JSON.parse(perms) : [];
  },
  setPermissions: (permissions: string[]) => localStorage.setItem('permissions', JSON.stringify(permissions)),
  clearPermissions: () => localStorage.removeItem('permissions'),
  getRoles: (): string[] => {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
  },
  setRoles: (roles: string[]) => localStorage.setItem('roles', JSON.stringify(roles)),
  clearRoles: () => localStorage.removeItem('roles'),
};
```

## File: src/lib/utils.ts
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## File: src/main.tsx
```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalErrorBoundary } from "./shared/components/errors/GlobalErrorBoundary";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  </StrictMode>
);
```

## File: src/setupTests.ts
```typescript
import '@testing-library/jest-dom';
```

## File: src/shared/components/errors/FeatureBoundaryLayout.tsx
```typescript
import { Outlet } from "react-router-dom";
import { FeatureErrorBoundary } from "./FeatureErrorBoundary";
interface Props {
  featureName: string;
}
export function FeatureBoundaryLayout({ featureName }: Props) {
  return (
    <FeatureErrorBoundary featureName={featureName}>
      <Outlet />
    </FeatureErrorBoundary>
  );
}
```

## File: src/shared/components/errors/FeatureErrorBoundary.tsx
```typescript
import { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
interface Props {
  children: ReactNode;
  featureName?: string;
}
interface State {
  hasError: boolean;
  error: Error | null;
}
export class FeatureErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Feature Error (${this.props.featureName || 'Unknown'}):`, error, errorInfo);
  }
  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };
  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4 w-full flex flex-col items-center text-center">
          <AlertCircle className="text-red-500 mb-3" size={28} />
          <h3 className="text-red-800 font-semibold mb-1">
            فشل تحميل {this.props.featureName ? `قسم ${this.props.featureName}` : 'هذا القسم'}
          </h3>
          <p className="text-red-600 text-sm mb-4">حدث خطأ داخلي. يرجى المحاولة مرة أخرى.</p>
          <button
            onClick={this.handleRetry}
            className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md text-sm font-medium transition-colors"
          >
            إعادة المحاولة
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

## File: src/shared/components/errors/GlobalErrorBoundary.tsx
```typescript
import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { tokens } from "../../styles/tokens";
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
  error: Error | null;
}
export class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  private handleReload = () => {
    window.location.reload();
  };
  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-page-bg)] p-4">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 max-w-md w-full text-center shadow-sm">
            <div className="mx-auto bg-red-50 text-[var(--color-danger)] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-xl font-bold text-[var(--color-text-main)] mb-2">عذرًا، حدث خطأ غير متوقع</h1>
            <p className="text-[var(--color-text-muted)] text-sm mb-6">
              واجه النظام مشكلة أثناء معالجة طلبك. لقد تم تسجيل الخطأ.
            </p>
            <button
              onClick={this.handleReload}
              className={tokens.btn.primary + " w-full"}
            >
              إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
```

## File: src/shared/components/layout/AppLayout.tsx
```typescript
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useHeaderStore } from "../../hooks/useHeaderStore";
import { useSidebarStore } from "../../hooks/useSidebarStore";
import { BackButton } from "../ui/BackButton";
import { useEffect } from "react";
import { Menu } from "lucide-react";
const defaultPageTitles: Record<string, string> = {
  "/": "لوحة القيادة",
  "/sales/pos": "نقطة البيع (POS)",
  "/sales/history": "سجل المبيعات",
  "/sales/returns": "مرتجعات المبيعات",
  "/purchases/new": "فاتورة مشتريات جديدة",
  "/purchases/history": "سجل المشتريات",
  "/purchases/returns": "مرتجعات الموردين",
  "/inventory/products": "المنتجات",
  "/inventory/categories": "الأقسام",
  "/contacts/customers": "العملاء",
  "/contacts/suppliers": "الموردين",
  "/finance/drawer": "الدرج والوردية",
  "/finance/safe": "الخزينة",
  "/finance/expenses": "المصروفات",
  "/settings": "الإعدادات",
};
export function AppLayout() {
  const location = useLocation();
  const { title, backPath, setTitle, setBackButton } = useHeaderStore();
  const { isOpen, toggle } = useSidebarStore();
  useEffect(() => {
    const defaultTitle = defaultPageTitles[location.pathname];
    if (defaultTitle) {
      setTitle(defaultTitle);
      setBackButton(false);
    }
  }, [location.pathname, setTitle, setBackButton]);
  return (
    <div className="flex h-screen bg-[#F5F7FA] font-sans" dir="rtl">
      {}
      <Sidebar />
      {}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isOpen ? 'mr-64' : 'mr-20'}`}>
        {}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 sticky top-0 z-10 transition-all duration-300">
          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <BackButton to={backPath} />
            <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer p-1 pr-2 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-700">مدير النظام</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
              <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                م
              </div>
            </div>
          </div>
        </header>
        {}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
```

## File: src/shared/components/layout/Header.tsx
```typescript
import { tokens } from '@/shared/styles/tokens';
import { Bell, Search, User } from "lucide-react";
export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
      {}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            aria-label="بحث شامل"
            placeholder="ابحث عن فاتورة، عميل، منتج..."
            className={`${tokens.input} bg-gray-50`}
          />
        </div>
      </div>
      {}
      <div className="flex items-center gap-4">
        <button
          className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="التنبيهات"
        >
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-px bg-gray-200 mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer p-1 pr-2 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="text-left hidden md:block">
            <p className="text-sm font-semibold text-gray-700">مدير النظام</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
```

## File: src/shared/components/layout/ProtectedRoute.tsx
```typescript
import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
  allowedRoles?: string[];
}
export function ProtectedRoute({ children, requiredPermissions, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, hasPermission, hasAnyRole } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && allowedRoles.length > 0) {
    if (!hasAnyRole(allowedRoles)) {
      return <Navigate to="/unauthorized" replace />;
    }
  }
  if (requiredPermissions && requiredPermissions.length > 0) {
    const hasAnyRequired = requiredPermissions.some(perm => hasPermission(perm));
    if (!hasAnyRequired) {
      return <Navigate to="/unauthorized" replace />;
    }
  }
  return <>{children}</>;
}
```

## File: src/shared/components/layout/Sidebar.tsx
```typescript
import { Link, useLocation } from "react-router-dom";
import {
  MonitorSmartphone, ShoppingCart, Wrench, Package,
  Users, Wallet, Settings, LogOut, ShoppingBag,
  ChevronDown, ChevronUp, Grip, Zap
} from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useSidebarStore } from "@/shared/hooks/useSidebarStore";
import { useState } from "react";
type MenuItem = {
  name: string;
  path: string;
  icon: any;
  allowedRoles?: string[];
};
type MenuGroup = {
  title: string;
  items: MenuItem[];
  allowedRoles?: string[];
};
const SALES_ROLES = ["Admin", "Manager", "Salesperson"];
const INVENTORY_ROLES = ["Admin", "Manager", "Salesperson", "Technician"];
const PURCHASES_ROLES = ["Admin", "Manager"];
const MAINTENANCE_ROLES = ["Admin", "Manager", "Technician"];
const CUSTOMER_ROLES = ["Admin", "Manager", "Salesperson"];
const SUPPLIER_ROLES = ["Admin", "Manager"];
const DRAWER_EXPENSE_ROLES = ["Admin", "Manager", "Salesperson", "Technician"];
const ADMIN_MANAGER = ["Admin", "Manager"];
const menuGroups: MenuGroup[] = [
  {
    title: "الوصول السريع",
    allowedRoles: SALES_ROLES,
    items: [
      { name: "شاشة الكاشير (POS)", path: "/sales/pos", icon: MonitorSmartphone, allowedRoles: SALES_ROLES },
      { name: "عمليات المحافظ", path: "/operations/wallets", icon: Zap, allowedRoles: SALES_ROLES },
    ]
  },
  {
    title: "الصيانة",
    allowedRoles: MAINTENANCE_ROLES,
    items: [
      { name: "تذاكر الصيانة", path: "/maintenance", icon: Wrench, allowedRoles: MAINTENANCE_ROLES },
    ]
  },
  {
    title: "المبيعات",
    allowedRoles: SALES_ROLES,
    items: [
      { name: "سجل المبيعات", path: "/sales/history", icon: ShoppingCart, allowedRoles: SALES_ROLES },
      { name: "مرتجعات المبيعات", path: "/sales/returns", icon: ShoppingCart, allowedRoles: SALES_ROLES },
    ]
  },
  {
    title: "المشتريات",
    allowedRoles: PURCHASES_ROLES,
    items: [
      { name: "فاتورة مشتريات", path: "/purchases/new", icon: ShoppingBag, allowedRoles: PURCHASES_ROLES },
      { name: "سجل المشتريات", path: "/purchases/history", icon: ShoppingBag, allowedRoles: PURCHASES_ROLES },
      { name: "مرتجعات الموردين", path: "/purchases/returns", icon: ShoppingBag, allowedRoles: PURCHASES_ROLES },
    ]
  },
  {
    title: "المخزون",
    allowedRoles: INVENTORY_ROLES,
    items: [
      { name: "المنتجات", path: "/inventory/products", icon: Package, allowedRoles: INVENTORY_ROLES },
      { name: "التصنيفات", path: "/inventory/categories", icon: Package, allowedRoles: INVENTORY_ROLES },
    ]
  },
  {
    title: "جهات الاتصال",
    allowedRoles: SALES_ROLES,
    items: [
      { name: "العملاء", path: "/contacts/customers", icon: Users, allowedRoles: CUSTOMER_ROLES },
      { name: "الموردين", path: "/contacts/suppliers", icon: Users, allowedRoles: SUPPLIER_ROLES },
    ]
  },
  {
    title: "الماليات",
    allowedRoles: DRAWER_EXPENSE_ROLES,
    items: [
      { name: "الدرج والمصروفات", path: "/finance/drawer", icon: Wallet, allowedRoles: DRAWER_EXPENSE_ROLES },
      { name: "الخزينات", path: "/finance/safe", icon: Wallet, allowedRoles: ADMIN_MANAGER },
      { name: "المصروفات", path: "/finance/expenses", icon: Wallet, allowedRoles: DRAWER_EXPENSE_ROLES },
      { name: "معاملات المالك", path: "/finance/owner-transactions", icon: Wallet, allowedRoles: ADMIN_MANAGER },
    ]
  },
  {
    title: "الإدارة والصلاحيات",
    allowedRoles: ADMIN_MANAGER,
    items: [
      { name: "إدارة المستخدمين", path: "/admin/users", icon: Users, allowedRoles: ADMIN_MANAGER },
      { name: "الأدوار والصلاحيات", path: "/admin/roles", icon: Settings, allowedRoles: ADMIN_MANAGER },
    ]
  }
];
export function Sidebar() {
  const location = useLocation();
  const { logout, hasAnyRole } = useAuth();
  const { isOpen } = useSidebarStore();
  const [collapsedGroups, setCollapsedGroups] = useState<Record<number, boolean>>({});
  const toggleGroup = (index: number) => {
    setCollapsedGroups(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-[#F1F5F9] text-slate-900 flex flex-col h-screen fixed right-0 top-0 border-l border-slate-200 flex-shrink-0 z-20 shadow-[rgba(0,0,0,0.04)_inset_0px_0px_0px,rgba(0,0,0,0.05)_-4px_0px_10px]`}>
      {}
      <div className="h-20 flex items-center justify-center border-b border-slate-200 bg-[#F1F5F9] shrink-0 relative overflow-hidden">
        <div className={`${isOpen ? 'opacity-100 flex items-center gap-3' : 'opacity-0 hidden'} transition-all duration-300 relative z-10 w-full px-6`}>
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20">
            <Grip className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-wide">
            سنترالي
          </h1>
        </div>
        {!isOpen && (
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20 relative z-10">
            <Grip className="w-6 h-6 text-white" />
          </div>
        )}
      </div>
      {}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-6 px-4 custom-scrollbar" dir="rtl">
        {menuGroups.map((group, gi) => {
          const visibleItems = group.items.filter((item) => !item.allowedRoles || hasAnyRole(item.allowedRoles));
          if (visibleItems.length === 0) return null;
          if (group.allowedRoles && !hasAnyRole(group.allowedRoles)) return null;
          const isCollapsed = collapsedGroups[gi];
          return (
          <div key={gi} className="mb-6">
            <div
              onClick={() => isOpen && toggleGroup(gi)}
              className={`${isOpen ? 'cursor-pointer hover:text-slate-800' : ''} flex items-center justify-between px-3 mb-2 text-slate-400 group transition-colors`}
            >
              <h3 className={`${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} text-[13px] font-bold uppercase tracking-wider transition-all duration-300 select-none`}>
                {group.title}
              </h3>
              {isOpen && (
                <div className="text-slate-400 group-hover:text-slate-600 transition-colors">
                  {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                </div>
              )}
            </div>
            {!isOpen && gi > 0 && <div className="h-5"></div>}
            <ul className={`${isCollapsed && isOpen ? 'hidden' : 'block'} space-y-1.5`}>
              {visibleItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      title={!isOpen ? item.name : undefined}
                      className={`${isOpen ? 'gap-3 px-3.5' : 'justify-center px-0'} flex items-center py-3 rounded-xl transition-all duration-200 text-[15px] font-semibold relative ${active ? "bg-white text-blue-700 shadow-sm border border-slate-200/60" : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 border border-transparent"}`}
                    >
                      <item.icon size={22} strokeWidth={active ? 2.5 : 2} className={`${active ? "text-blue-600" : "text-slate-500"} shrink-0`} />
                      <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'} transition-all duration-300 whitespace-nowrap`}>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          );
        })}
        {hasAnyRole(ADMIN_MANAGER) && (
          <div className="border-t border-slate-200 pt-6 mt-3 mb-3 space-y-1.5">
            <Link
              to="/settings/finance-policies"
              title={!isOpen ? "سياسات النظام" : undefined}
              className={`${isOpen ? 'gap-3 px-3.5' : 'justify-center px-0'} flex items-center py-3 rounded-xl transition-all duration-200 text-[15px] font-semibold relative ${location.pathname === "/settings/finance-policies" ? "bg-white text-blue-700 shadow-sm border border-slate-200/60" : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 border border-transparent"}`}
            >
              <Settings size={22} strokeWidth={location.pathname === "/settings/finance-policies" ? 2.5 : 2} className={`${location.pathname === "/settings/finance-policies" ? "text-blue-600" : "text-slate-500"} shrink-0`} />
              <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'} transition-all duration-300 whitespace-nowrap`}>
                سياسات النظام
              </span>
            </Link>
            <Link
              to="/settings/wallets"
              title={!isOpen ? "إدارة المحافظ" : undefined}
              className={`${isOpen ? 'gap-3 px-3.5' : 'justify-center px-0'} flex items-center py-3 rounded-xl transition-all duration-200 text-[15px] font-semibold relative ${location.pathname === "/settings/wallets" ? "bg-white text-blue-700 shadow-sm border border-slate-200/60" : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 border border-transparent"}`}
            >
              <Wallet size={22} strokeWidth={location.pathname === "/settings/wallets" ? 2.5 : 2} className={`${location.pathname === "/settings/wallets" ? "text-blue-600" : "text-slate-500"} shrink-0`} />
              <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'} transition-all duration-300 whitespace-nowrap`}>
                إدارة المحافظ
              </span>
            </Link>
          </div>
        )}
      </div>
      {}
      <div className={`${!isOpen ? 'flex justify-center' : ''} p-4 border-t border-slate-200 bg-transparent shrink-0`}>
        <button
          onClick={logout}
          title={!isOpen ? "تسجيل الخروج" : undefined}
          className={`${isOpen ? 'gap-3 px-4 w-full' : 'justify-center w-12'} flex items-center py-3 rounded-xl text-red-500 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all duration-200 text-[15px] font-bold group`}
        >
          <LogOut size={22} className="shrink-0 group-hover:scale-110 transition-transform" />
          <span className={`${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'} transition-all duration-300 whitespace-nowrap`}>
            تسجيل الخروج
          </span>
        </button>
      </div>
    </aside>
  );
}
```

## File: src/shared/components/ui/__tests__/Button.test.tsx
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';
describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('does not fire click when disabled', async () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
});
```

## File: src/shared/components/ui/BackButton.tsx
```typescript
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface BackButtonProps {
  to?: string;
  label?: string;
}
export function BackButton({ to, label }: BackButtonProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) navigate(to);
    else navigate(-1);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg transition-colors shadow-sm text-sm font-medium"
      title="رجوع"
    >
      <ArrowRight size={16} />
      {label && <span>{label}</span>}
    </button>
  );
}
```

## File: src/shared/components/ui/BaseModal.tsx
```typescript
import { ReactNode, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useModalBehavior } from '@/shared/hooks/useModalBehavior';
type ModalSize = 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
const sizeClass: Record<ModalSize, string> = {
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
};
export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  headerClassName?: string;
  zIndexClassName?: string;
  hideCloseButton?: boolean;
}
export function BaseModal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size = 'md',
  headerClassName = 'bg-[var(--color-page-bg)]',
  zIndexClassName = 'z-50',
  hideCloseButton = false,
}: BaseModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useModalBehavior(isOpen, onClose, panelRef);
  if (!isOpen) return null;
  return createPortal(
    <div
      className={`fixed inset-0 ${zIndexClassName} flex items-center justify-center bg-black/40 backdrop-blur-sm p-4`}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        className={`bg-[var(--color-surface)] rounded-xl shadow-xl w-full ${sizeClass[size]} max-h-[90vh] flex flex-col overflow-hidden`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className={`px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between shrink-0 ${headerClassName}`}>
          <div>
            <h2 id={titleId} className="text-lg font-bold text-[var(--color-text-main)]">
              {title}
            </h2>
            {subtitle && (
              <div className="text-sm text-[var(--color-text-muted)] mt-0.5">{subtitle}</div>
            )}
          </div>
          {!hideCloseButton && (
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-label="إغلاق"
            >
              <X size={20} className="text-[var(--color-text-muted)]" />
            </button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
        {footer && (
          <div className="px-6 py-4 bg-[var(--color-page-bg)] border-t border-[var(--color-border)] shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
```

## File: src/shared/components/ui/Button.tsx
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}
const buttonVariants = ({ variant = "default", size = "default", className = "" }: any) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";
  const variants: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md",
    destructive: "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-200",
    outline: "border border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 shadow-sm",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-500",
    link: "text-blue-600 underline-offset-4 hover:underline",
  };
  const sizes: Record<string, string> = {
    default: "h-11 px-5 py-2",
    sm: "h-9 rounded-md px-3 text-xs",
    lg: "h-12 rounded-xl px-8 text-base",
    icon: "h-10 w-10 rounded-full",
  };
  return cn(baseStyles, variants[variant], sizes[size], className);
};
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button, buttonVariants }
```

## File: src/shared/components/ui/ClearablePriceInput.tsx
```typescript
import { UseFormRegisterReturn, UseFormSetValue, FieldPath, FieldValues } from 'react-hook-form';
interface ClearablePriceInputProps<T extends FieldValues> {
  registration: UseFormRegisterReturn;
  setValue: UseFormSetValue<T>;
  name: FieldPath<T>;
  currentValue: number | undefined;
  className?: string;
}
export function ClearablePriceInput<T extends FieldValues>({
  registration,
  setValue,
  name,
  currentValue,
  className,
}: ClearablePriceInputProps<T>) {
  const { onBlur, onChange, ...rest } = registration;
  return (
    <input
      type="number"
      min="0"
      step="0.01"
      className={className}
      {...rest}
      onChange={onChange}
      onFocus={(e) => {
        if (currentValue === 0 || e.target.value === '0') {
          setValue(name, '', { shouldDirty: true });
        } else {
          e.target.select();
        }
      }}
      onBlur={(e) => {
        onBlur(e);
        if (e.target.value === '' || Number.isNaN(e.target.valueAsNumber)) {
          setValue(name, 0, { shouldValidate: true });
        }
      }}
    />
  );
}
```

## File: src/shared/components/ui/ConfirmModal.tsx
```typescript
import { ReactNode } from 'react';
import { AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { BaseModal } from './BaseModal';
interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: ReactNode;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
  isLoading?: boolean;
}
export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'تأكيد',
  cancelText = 'إلغاء',
  type = 'danger',
  isLoading = false,
}: ConfirmModalProps) {
  const getIcon = () => {
    switch (type) {
      case 'danger':
        return (
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[var(--color-danger)] shrink-0">
            <AlertTriangle size={20} />
          </div>
        );
      case 'warning':
        return (
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
            <AlertCircle size={20} />
          </div>
        );
      case 'info':
        return (
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[var(--color-primary)] shrink-0">
            <Info size={20} />
          </div>
        );
    }
  };
  const getBtnClass = () => {
    if (type === 'danger') {
      return 'bg-[var(--color-danger)] hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-60';
    }
    if (type === 'warning') {
      return 'bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-60';
    }
    return tokens.btn.primary;
  };
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="md"
      footer={
        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose} disabled={isLoading} className={tokens.btn.secondary}>
            {cancelText}
          </button>
          <button type="button" onClick={onConfirm} disabled={isLoading} className={getBtnClass()}>
            {isLoading ? 'جاري المعالجة...' : confirmText}
          </button>
        </div>
      }
    >
      <div className="p-6 flex gap-4">
        {getIcon()}
        <div className="text-sm text-[var(--color-text-muted)] leading-relaxed">{message}</div>
      </div>
    </BaseModal>
  );
}
```

## File: src/shared/components/ui/DataTable.tsx
```typescript
import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Spinner } from "./Spinner";
export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
}
interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onRowClick?: (row: T) => void;
}
export function DataTable<T>({
  columns,
  data,
  isLoading,
  pageIndex,
  totalPages,
  totalCount,
  pageSize,
  onNextPage,
  onPrevPage,
  onRowClick,
}: DataTableProps<T>) {
  const from = totalCount === 0 ? 0 : (pageIndex - 1) * pageSize + 1;
  const to = Math.min(pageIndex * pageSize, totalCount);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right">
          {}
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-6 py-3 font-semibold text-gray-600 text-sm whitespace-nowrap">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          {}
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-10 text-center text-gray-400 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Spinner size={16} />
                    جاري تحميل البيانات...
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-10 text-center text-gray-400 text-sm">
                  لا توجد بيانات لعرضها
                </td>
              </tr>
            ) : (
              data.map((row, ri) => (
                <tr
                  key={ri}
                  className={`transition-colors ${onRowClick ? 'hover:bg-gray-50 cursor-pointer' : 'hover:bg-gray-50'}`}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((col, ci) => (
                    <td key={ci} className="px-6 py-4">
                      {col.cell
                        ? col.cell(row)
                        : (row[col.accessorKey as keyof T] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {}
      <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
        <span>
          إظهار {from} إلى {to} من أصل {totalCount} سجل
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevPage}
            disabled={pageIndex <= 1 || isLoading}
            className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40 flex items-center gap-1 transition-colors"
          >
            <ChevronRight size={15} />
            السابق
          </button>
          <span className="px-3 py-1 border border-blue-600 bg-blue-50 text-blue-600 rounded-md font-semibold min-w-[60px] text-center">
            {pageIndex} / {totalPages || 1}
          </span>
          <button
            onClick={onNextPage}
            disabled={pageIndex >= totalPages || isLoading}
            className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40 flex items-center gap-1 transition-colors"
          >
            التالي
            <ChevronLeft size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
```

## File: src/shared/components/ui/Input.tsx
```typescript
import * as React from "react"
import { cn } from "@/lib/utils"
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-[var(--color-border)] bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"
export { Input }
```

## File: src/shared/components/ui/Label.tsx
```typescript
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName
export { Label }
```

## File: src/shared/components/ui/PageLoader.tsx
```typescript
import { Loader2 } from 'lucide-react';
import { Spinner } from './Spinner';
export function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[var(--color-page-bg)]">
      <div className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
        <Spinner size={32} />
        <span className="text-sm text-[var(--color-text-main)]">جاري التحميل...</span>
      </div>
    </div>
  );
}
export function InlineLoader({ label = 'جاري تحميل البيانات...' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-10 text-sm text-[var(--color-text-muted)]">
      <Loader2 className="animate-spin text-[var(--color-primary)]" size={16} />
      {label}
    </div>
  );
}
```

## File: src/shared/components/ui/PickerModal.tsx
```typescript
import { ReactNode } from 'react';
import { Search } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { BaseModal } from './BaseModal';
import { DataTable, Column } from './DataTable';
interface PickerModalPagination {
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}
export interface PickerModalProps<T> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  searchPlaceholder?: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters?: ReactNode;
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  pagination: PickerModalPagination;
  onRowClick?: (row: T) => void;
  selectedCount?: number;
  confirmLabel?: string;
  confirmDisabled?: boolean;
  onConfirm?: () => void;
}
export function PickerModal<T>({
  isOpen,
  onClose,
  title,
  subtitle,
  searchPlaceholder = 'بحث...',
  searchValue,
  onSearchChange,
  filters,
  columns,
  data,
  isLoading,
  pagination,
  onRowClick,
  selectedCount = 0,
  confirmLabel = 'إضافة',
  confirmDisabled,
  onConfirm,
}: PickerModalProps<T>) {
  const footer = onConfirm ? (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-[var(--color-text-muted)]">
        {selectedCount > 0 ? `تم تحديد ${selectedCount} عنصر` : 'لم يتم تحديد عناصر بعد'}
      </span>
      <div className="flex gap-3">
        <button type="button" onClick={onClose} className={tokens.btn.secondary}>
          إلغاء
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={confirmDisabled ?? selectedCount === 0}
          className={`${tokens.btn.primary} disabled:opacity-50`}
        >
          {confirmLabel} ({selectedCount})
        </button>
      </div>
    </div>
  ) : undefined;
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={title} subtitle={subtitle} size="4xl" footer={footer}>
      <div className="px-6 py-3 border-b border-[var(--color-border)] bg-[var(--color-page-bg)]">
        <div className={filters ? 'grid grid-cols-1 md:grid-cols-3 gap-3 items-center' : ''}>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={16} />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className={`${tokens.input} pr-10`}
              autoFocus
            />
          </div>
          {filters}
        </div>
      </div>
      <div className="px-6 py-4">
        <DataTable
          columns={columns}
          data={data}
          isLoading={isLoading}
          pageIndex={pagination.pageIndex}
          totalPages={pagination.totalPages}
          totalCount={pagination.totalCount}
          pageSize={pagination.pageSize}
          onNextPage={pagination.onNextPage}
          onPrevPage={pagination.onPrevPage}
          onRowClick={onRowClick}
        />
      </div>
    </BaseModal>
  );
}
```

## File: src/shared/components/ui/RightDrawer.tsx
```typescript
import React, { useRef } from 'react';
import { X } from 'lucide-react';
import { useModalBehavior } from '@/shared/hooks/useModalBehavior';
import { cn } from '@/lib/utils';
interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
}
export function RightDrawer({ isOpen, onClose, title, children, footer, width = 'w-[450px]' }: RightDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useModalBehavior(isOpen, onClose, drawerRef);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end" dir="rtl" role="presentation">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={drawerRef}
        className={cn("relative bg-[var(--color-surface)] h-full shadow-2xl flex flex-col", width)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        tabIndex={-1}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-[var(--color-border)] bg-[var(--color-page-bg)] flex-shrink-0">
          <h2 id="drawer-title" className="text-lg font-bold text-[var(--color-text-main)]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-gray-200 p-1.5 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
        {footer && (
          <div className="border-t border-[var(--color-border)] bg-[var(--color-page-bg)] px-6 py-4 flex justify-end gap-3 flex-shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
```

## File: src/shared/components/ui/Spinner.tsx
```typescript
import { Loader2 } from 'lucide-react';
interface SpinnerProps {
  size?: number;
  className?: string;
  label?: string;
}
export function Spinner({ size = 24, className = '', label = 'جاري التحميل' }: SpinnerProps) {
  return (
    <Loader2
      className={`animate-spin text-[var(--color-primary)] ${className}`}
      size={size}
      aria-label={label}
    />
  );
}
```

## File: src/shared/hooks/__tests__/useDebounce.test.ts
```typescript
import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../useDebounce';
import { vi } from 'vitest';
describe('useDebounce Hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));
    expect(result.current).toBe('initial');
  });
  it('should debounce the value change', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } }
    );
    rerender({ value: 'updated', delay: 500 });
    expect(result.current).toBe('initial');
    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(result.current).toBe('initial');
    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(result.current).toBe('updated');
  });
});
```

## File: src/shared/hooks/__tests__/useFocusTrap.test.ts
```typescript
import { getFocusableElements } from '../useFocusTrap';
describe('getFocusableElements', () => {
  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
      configurable: true,
      get() {
        return document.body;
      },
    });
  });
  it('returns enabled interactive elements only', () => {
    document.body.innerHTML = `
      <div id="root">
        <button type="button">ok</button>
        <button type="button" disabled>no</button>
        <input />
        <a href="#x">link</a>
      </div>
    `;
    const root = document.getElementById('root')!;
    const ids = getFocusableElements(root).map((el) => el.tagName.toLowerCase());
    expect(ids).toEqual(['button', 'input', 'a']);
  });
});
```

## File: src/shared/hooks/useDebounce.ts
```typescript
import { useState, useEffect } from 'react';
export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}
```

## File: src/shared/hooks/useFocusTrap.ts
```typescript
import { RefObject, useEffect } from 'react';
const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1 && el.offsetParent !== null
  );
}
export function useFocusTrap(containerRef: RefObject<HTMLElement | null>, isActive: boolean) {
  useEffect(() => {
    if (!isActive) return;
    const container = containerRef.current;
    if (!container) return;
    const focusFirst = () => {
      const focusable = getFocusableElements(container);
      (focusable[0] ?? container).focus();
    };
    const timer = window.setTimeout(focusFirst, 10);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = getFocusableElements(container);
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first || !container.contains(document.activeElement)) {
          last.focus();
          e.preventDefault();
        }
      } else if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [containerRef, isActive]);
}
```

## File: src/shared/hooks/useHeaderStore.ts
```typescript
import { create } from 'zustand';
interface HeaderState {
  title: string;
  showBackButton: boolean;
  backPath?: string;
  setTitle: (title: string) => void;
  setBackButton: (show: boolean, path?: string) => void;
}
export const useHeaderStore = create<HeaderState>((set) => ({
  title: 'سنترالي',
  showBackButton: false,
  backPath: undefined,
  setTitle: (title) => set({ title }),
  setBackButton: (showBackButton, backPath) => set({ showBackButton, backPath }),
}));
```

## File: src/shared/hooks/useModalBehavior.ts
```typescript
import { RefObject, useEffect, useRef } from 'react';
import { useFocusTrap } from './useFocusTrap';
export function useModalBehavior(
  isOpen: boolean,
  onClose: () => void,
  containerRef: RefObject<HTMLElement | null>
) {
  const previousFocusRef = useRef<HTMLElement | null>(null);
  useFocusTrap(containerRef, isOpen);
  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);
}
```

## File: src/shared/hooks/useSidebarStore.ts
```typescript
import { create } from 'zustand';
interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
  setIsOpen: (isOpen: boolean) => void;
}
export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen) => set({ isOpen }),
}));
```

## File: src/shared/styles/tokens.ts
```typescript
export const tokens = {
  font: {
    label:      "text-sm font-semibold text-[var(--color-text-main)]",
    helperText: "text-xs text-[var(--color-text-muted)]",
    muted:      "text-sm text-[var(--color-text-muted)]",
  },
  input: "w-full px-3 py-2 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none",
  select: "w-full px-3 py-2 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none bg-white",
  btn: {
    primary:   "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
    secondary: "px-4 py-2 border border-[var(--color-border)] rounded-lg text-[var(--color-text-main)] hover:bg-gray-100 font-medium text-sm",
    ghost:     "px-4 py-2 bg-gray-100 border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-main)] hover:bg-gray-200 transition-colors font-medium",
  },
  table: {
    header: "px-6 py-3 font-semibold text-[var(--color-text-main)] text-sm whitespace-nowrap",
    cell:   "px-6 py-4",
  },
  badge: {
    indigo: "bg-indigo-50 text-[var(--color-primary)] px-2.5 py-1 rounded-full text-xs font-medium",
    success: "bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium",
    warning: "bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-xs font-medium",
    danger: "bg-red-50 text-red-600 px-2.5 py-1 rounded-full text-xs font-medium",
  },
  card: "bg-[var(--color-surface)] rounded-xl shadow-sm border border-[var(--color-border)]",
  sidebar: {
    root:       "w-64 bg-[var(--color-sidebar-bg)] text-[var(--color-sidebar-text)] flex flex-col h-screen fixed right-0 top-0 border-l border-[var(--color-sidebar-border)]",
    logo:       "h-16 flex items-center justify-center border-b border-[var(--color-sidebar-border)] bg-[var(--color-sidebar-logo)]",
    groupTitle: "px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2",
    link:       "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium",
    activeLink: "bg-[var(--color-primary)] text-white",
    hoverLink:  "hover:bg-[var(--color-sidebar-border)] hover:text-white",
  },
} as const;
```

## File: src/shared/types/pagination.ts
```typescript
export type SortDirection = 0 | 1;
export interface BaseFilters {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: SortDirection;
}
export interface PaginatedList<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
```

## File: src/shared/utils/__tests__/apiError.test.ts
```typescript
import { describe, it, expect } from 'vitest';
import axios from 'axios';
import { getApiErrorMessage } from '../apiError';
describe('getApiErrorMessage', () => {
  it('uses fallback for unknown errors', () => {
    expect(getApiErrorMessage('x', 'فشل')).toBe('فشل');
  });
  it('reads Error.message', () => {
    expect(getApiErrorMessage(new Error('network'))).toBe('network');
  });
  it('reads axios description', () => {
    const axiosError = new axios.AxiosError('fail');
    axiosError.response = {
      data: { description: 'غير مصرح' },
      status: 400,
      statusText: 'Bad Request',
      headers: {},
      config: { headers: new axios.AxiosHeaders() },
    };
    expect(getApiErrorMessage(axiosError, 'fallback')).toBe('غير مصرح');
  });
});
```

## File: src/shared/utils/__tests__/currency.test.ts
```typescript
import { formatCurrency } from '../currency';
describe('formatCurrency', () => {
  it('formats zero with two decimals', () => {
    expect(formatCurrency(0)).toContain('٠');
  });
  it('formats integers without forcing extra decimals', () => {
    const formatted = formatCurrency(1500);
    expect(formatted).toMatch(/١٬٥٠٠|1,500/);
  });
  it('returns a fallback for invalid numbers', () => {
    expect(formatCurrency(Number.NaN)).toBe('٠٫٠٠ ج.م.');
  });
});
```

## File: src/shared/utils/apiError.ts
```typescript
import axios from 'axios';
interface ApiErrorBody {
  message?: string;
  description?: string;
}
export function getApiErrorMessage(error: unknown, fallback = 'حدث خطأ غير متوقع'): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ApiErrorBody | undefined;
    return data?.description || data?.message || fallback;
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return fallback;
}
```

## File: src/shared/utils/currency.ts
```typescript
export function formatCurrency(value: number): string {
  if (value == null || isNaN(value)) {
    return '٠٫٠٠ ج.م.';
  }
  if (value === 0) {
    const zeroFormatter = new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return zeroFormatter.format(0);
  }
  const formatter = new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}
```

## File: src/shared/utils/date.ts
```typescript
export function formatDate(dateString: string | Date | undefined): string {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateString));
}
```

## File: src/vite-env.d.ts
```typescript

```

## File: tsconfig.app.json
```json
{
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    },
    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["src"]
}
```

## File: tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## File: tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "module": "nodenext",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

## File: vite.config.ts
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
```
