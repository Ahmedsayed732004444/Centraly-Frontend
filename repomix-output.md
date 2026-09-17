This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

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
- Files matching these patterns are excluded: dist, node_modules, package-lock.json
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.cursorrules
.env.example
.gitignore
.husky/pre-commit
.oxlintrc.json
docs/AI_GUIDELINES.md
docs/ARCHITECTURE.md
docs/PERMISSIONS.md
eslint.config.js
index.html
package.json
public/favicon.svg
public/icons.svg
README.md
repomix.config.json
src/App.css
src/App.tsx
src/assets/hero.png
src/assets/react.svg
src/assets/vite.svg
src/core/repositories/IAuthRepository.ts
src/core/repositories/IContactsRepository.ts
src/core/repositories/IFinanceRepository.ts
src/core/repositories/IInventoryRepository.ts
src/core/repositories/IInvoicesRepository.ts
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
src/features/finance/hooks/useFinance.ts
src/features/finance/pages/DrawerPage.tsx
src/features/finance/pages/ExpensesPage.tsx
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
src/features/invoices/api/InvoicesApi.ts
src/features/invoices/hooks/useInvoices.ts
src/features/invoices/schemas/invoiceSchemas.ts
src/features/invoices/schemas/returnSchemas.ts
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
src/features/sales/components/InvoiceDetailsModal.tsx
src/features/sales/components/PosCart.tsx
src/features/sales/components/PosProductGrid.tsx
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
src/features/suppliers/components/SuppliersTable.tsx
src/features/suppliers/components/SupplierStatementCard.tsx
src/features/suppliers/hooks/useSuppliers.ts
src/features/suppliers/pages/SupplierDetailsPage.tsx
src/features/suppliers/pages/SuppliersPage.tsx
src/features/suppliers/schemas/supplierSchemas.ts
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

## File: .cursorrules
````
# AI Context & Instructions for Centraly Frontend

You are an expert React TypeScript developer working on the Centraly Frontend project.
Always enforce the architectural rules laid out in `docs/ARCHITECTURE.md` and `docs/AI_GUIDELINES.md`.

## Critical Directives
1. **Never use `any`**. Use `unknown` or write proper TS interfaces.
2. **Strict Structure**: Features live in `src/features/[name]/{api,components,hooks,pages,schemas}`. Never mix domain logic into `shared/`.
3. **Styling**: Always use CSS variables mapped via `src/shared/styles/tokens.ts`. No hardcoded hex values or raw tailwind colors (like `text-blue-500`) unless explicitly mapped in `tokens.ts`.
4. **Data Fetching**: ONLY use `TanStack Query` (React Query) in custom hooks. Never fetch directly in components.
5. **Forms**: Use `react-hook-form` + `zod`. Keep validation schemas strictly in `src/features/*/schemas/`.
6. **Error Handling**: Do not let errors crash the app. Assume `FeatureErrorBoundary` is wrapping your page. Use `sonner` for toast notifications.

Before writing code, analyze existing shared components (e.g., `Button`, `RightDrawer`, `BaseModal`, `PickerModal`, `DataTable`, `Spinner`) and re-use them instead of building from scratch.

Any overlay/dialog MUST use `BaseModal` or `RightDrawer` so a11y (role, aria-modal, focus trap, Escape) is guaranteed.
````

## File: .env.example
````
VITE_API_BASE_URL=https://localhost:7073/api
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: .husky/pre-commit
````
npx lint-staged
````

## File: .oxlintrc.json
````json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc", "jsx-a11y"],
  "rules": {
    "typescript/no-explicit-any": "error",
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }],
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/role-has-required-aria-props": "error"
  }
}
````

## File: docs/AI_GUIDELINES.md
````markdown
# قواعد وتوجيهات الذكاء الاصطناعي (AI Coding Guidelines)
## مشروع سنترالي (Centraly Frontend)

أنت الآن تعمل كمساعد برمجي ذكي في مشروع "سنترالي". لضمان الحفاظ على جودة الكود، **يجب** عليك قراءة هذه القواعد واتباعها حرفياً قبل كتابة أي كود أو اقتراح أي تعديلات.

### 1. الالتزام بالمعمارية (Architecture & Folder Structure)
المشروع مبني على معمارية **Feature-Based** (مستوحاة من Feature-Sliced Design).
- **لا تضع كوداً في المكان الخطأ.** كل ميزة (Feature) يجب أن تكون مستقلة في مجلدها داخل `src/features/`.
- هيكل الميزة الواحدة يجب أن يكون كالتالي:
  - `api/`: ملفات الاتصال بالباك-إند (Axios + Repositories).
  - `components/`: مكونات الـ UI الخاصة بهذه الميزة فقط.
  - `hooks/`: الـ Custom Hooks (مثل React Query `useQuery` و `useMutation`).
  - `schemas/`: ملفات التحقق `Zod schemas` والـ `Types/Interfaces`.
  - `pages/`: الصفحات الرئيسية التي تجمع المكونات معاً.
- **الأشياء المشتركة (Shared):** إذا كان المكون أو الـ Hook يُستخدم في أكثر من Feature، يجب وضعه في `src/shared/`.

### 2. التوحيد اللوني والتصميم (Styling & Theming)
- **ممنوع منعاً باتاً استخدام أكواد ألوان صريحة (Hardcoded Colors)** مثل `#FF0000` أو `text-blue-500` في الكود الأساسي إلا للضرورة القصوى.
- يجب استخدام الـ Design Tokens الموجودة في `src/shared/styles/tokens.ts`.
- يتم تعريف الألوان في المتغيرات `CSS Variables` داخل `src/index.css`، ويتم استدعاؤها عبر `tokens.ts`.
- مثال صحيح: `<div className={tokens.font.muted}>` أو `bg-[var(--color-primary)]`.
- حافظ على الـ Layout موحداً. استخدم المكونات المشتركة مثل `<AppLayout>` للصفحات، و `<RightDrawer>` للنوافذ الجانبية، و `<BaseModal>` / `<PickerModal>` لأي نافذة منبثقة بدلاً من اختراع مودال من الصفر.

### 3. كتابة كود نظيف وآمن (Clean Code & Type Safety)
- **ممنوع استخدام `any`.** استخدم `unknown` إذا كنت لا تعرف النوع، أو قم بكتابة الـ Interface الصحيح. استخرج رسالة الخطأ من الـ API عبر `getApiErrorMessage`.
- تعامل مع الأخطاء دائماً بطريقة الـ Error Boundaries ولا تدع الـ App ينهار.
- النماذج (Forms) تُبنى حصراً باستخدام `react-hook-form` مع `zodResolver` لربطها بـ `Zod` schemas.
- لا تضع منطق الـ API داخل مكونات الـ UI (`Components`). المكونات يجب أن تستدعي `Custom Hooks` فقط.
- استخدم `<Spinner>` / `<PageLoader>` بدلاً من إعادة كتابة دائرة تحميل. استخدم `<Input>` أو `tokens.input` لحقول الإدخال.
- أي منطق حساب مالي (سلة POS، فاتورة، مرتجع) يجب أن يرافقه اختبار unit.

### 4. الوصولية (Accessibility - a11y)
- أي زر يحتوي على أيقونة فقط يجب أن يمتلك `aria-label`.
- النوافذ المنبثقة **يجب** أن تُبنى على `BaseModal` أو `RightDrawer` لتوفير `role="dialog"`, `aria-modal="true"`, Escape، و Focus Trap تلقائياً.

### 5. التعليمات الخاصة بالـ Commits
- اجعل الـ Commits صغيرة، ذرية (Atomic)، وتعبر عن تغيير واحد (Feature, Fix, Refactor).
- تأكد من تشغيل `npm run build` لتجنب كسر المشروع.
````

## File: docs/ARCHITECTURE.md
````markdown
# البنية المعمارية لمشروع سنترالي (Centraly Frontend Architecture)

تم بناء مشروع **سنترالي** ليكون قابلاً للتوسع (Scalable)، وسهل الصيانة، ومستعداً لبيئة الـ Enterprise. يعتمد المشروع بشكل أساسي على معمارية **Feature-Based**.

## 1. الهيكل العام (Folder Structure)

```text
src/
├── core/             # الأساسيات التقنية التي لا تعتمد على ميزات معينة
│   ├── api/          # إعدادات Axios و Interceptors الأساسية
│   └── repositories/ # Interfaces عامة مثل IRepository
├── features/         # الميزات (Features) مقسمة بشكل منطقي
│   ├── auth/         # المصادقة (تسجيل الدخول، الصلاحيات)
│   ├── inventory/    # المخزون (المنتجات، الأقسام)
│   ├── sales/        # المبيعات و POS والمرتجعات
│   ├── purchases/    # فواتير المشتريات ومرتجعات الموردين
│   ├── suppliers/    # الموردين
│   ├── contacts/     # العملاء
│   └── finance/      # المالية (الخزينة، المصروفات، الدرج)
├── shared/           # المكونات المشتركة بين عدة ميزات
│   ├── components/   # مكونات UI العامة (Button, Table, BaseModal, PickerModal)
│   ├── hooks/        # Hooks عامة (useDebounce, useFocusTrap, useModalBehavior)
│   ├── styles/       # Design Tokens و CSS Variables
│   └── types/        # الأنواع العامة (Pagination, Common enums)
└── App.tsx           # الموجه الرئيسي وربط الـ Routes
```

## 2. هيكل الميزة الواحدة (Feature Structure)
كل ميزة تعتبر "صندوق أسود" يحتوي على كل ما تحتاجه لتعمل:
- `api/`: يحتوي على الكلاس الذي يطبق واجهة التواصل مع الباك-إند (مثال: `InventoryApi.ts`).
- `hooks/`: يغلف نداءات الـ API باستخدام `React Query` (مثال: `useProducts()`, `useCreateProduct()`).
- `components/`: أجزاء الواجهة الخاصة بالميزة (مثال: `ProductsTable.tsx`, `AddProductForm.tsx`).
- `schemas/`: ملفات `Zod` للتحقق من المدخلات، بالإضافة إلى أنواع الـ TypeScript (`Types / Interfaces`) الخاصة بالنماذج والمسترجعات.
- `pages/`: الصفحات التي تجمع المكونات وتُستدعى في الـ Router.

## 3. إدارة الحالة (State Management)
- **حالة السيرفر (Server State):** يتم إدارتها بالكامل عبر `TanStack Query (React Query)`. لا نستخدم `useEffect` لجلب البيانات.
- **حالة الفورم (Form State):** تُدار عبر `react-hook-form`.
- **الحالة العامة (Global UI State):** تُدار عبر `React Context` البسيطة (مثل `AuthContext`).

## 4. نظام التصميم والـ Theming
- يعتمد المشروع على **CSS Variables** معرفة في `src/index.css` لتسهيل تغيير السمة (White-labeling أو Dark Mode).
- يتم استدعاء الألوان والمسافات والخطوط حصرياً عبر `src/shared/styles/tokens.ts`.
- مكونات الـ UI مبنية فوق `TailwindCSS` ومجمعة في `shared/components/ui/` لضمان التوحيد (Consistency).

## 5. الحماية ومعالجة الأخطاء (Security & Error Handling)
- **Token Storage:** يتم تخزين الـ JWT حالياً في `localStorage` عبر `src/lib/storage.ts` لأن الباك-إند لا يوفّر refresh token بعد. الخطة المستقبلية: الانتقال إلى HttpOnly Cookies عند دعم الـ refresh endpoint.
- **RBAC:** صلاحيات موحدة في `src/features/auth/schemas/permissions.ts`. `ProtectedRoute` يحمي الصفحات، و`HasPermission` يخفي أزرار UI الحساسة. حتى يرسل الباك permissions في login تُستخدم مجموعة صلاحيات مؤقتة كاملة للمستخدم المسجّل.
- **Error Boundaries:** المشروع محمي بـ `GlobalErrorBoundary` و `FeatureErrorBoundary` لضمان عدم انهيار التطبيق بالكامل عند حدوث خطأ في مكون فرعي.
````

## File: docs/PERMISSIONS.md
````markdown
# صلاحيات سنترالي (RBAC)

المصدر الموحد للكود: `src/features/auth/schemas/permissions.ts`

| الصلاحية | الاستخدام |
|----------|-----------|
| `inventory:read` | عرض المنتجات والأقسام |
| `inventory:write` | إضافة / تعديل / حذف منتج |
| `sales:read` | سجل المبيعات والمرتجعات |
| `sales:write` | POS وإنشاء فاتورة/مرتجع |
| `purchases:read` | سجل المشتريات ومرتجعات المورد |
| `purchases:write` | إنشاء فاتورة مشتريات أو مرتجع |
| `contacts:read` | العملاء والموردين |
| `contacts:write` | إضافة/تعديل جهات الاتصال |
| `finance:read` | الدرج / الخزينة / المصروفات |
| `finance:write` | عمليات مالية |
| `admin` | يتجاوز كل الفحوصات |

## الحالة الحالية
الـ login لا يُرجع permissions بعد. المستخدم المسجّل يحصل مؤقتاً على `DEFAULT_AUTHENTICATED_PERMISSIONS`.

عند جاهزية الباك: اقرأ المصفوفة من استجابة تسجيل الدخول واستبدل المجموعة المؤقتة.
````

## File: eslint.config.js
````javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      ...jsxA11y.configs.recommended.rules,
    },
  }
);
````

## File: index.html
````html
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
````

## File: package.json
````json
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
````

## File: public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
````

## File: public/icons.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
````

## File: README.md
````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
````

## File: repomix.config.json
````json
{
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown"
  },
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": [
      "dist",
      "node_modules",
      "package-lock.json"
    ]
  }
}
````

## File: src/App.css
````css
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
````

## File: src/App.tsx
````typescript
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { AuthProvider, useAuth } from "./features/auth/hooks/useAuth";
import { AppLayout } from "./shared/components/layout/AppLayout";
import { PageLoader } from "./shared/components/ui/PageLoader";
import { FeatureBoundaryLayout } from "./shared/components/errors/FeatureBoundaryLayout";
import { Permissions } from "./features/auth/schemas/permissions";

// Lazy Loaded Pages
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
const SafePage = lazy(() => import("./features/finance/pages/SafePage").then(module => ({ default: module.SafePage })));
const ExpensesPage = lazy(() => import("./features/finance/pages/ExpensesPage").then(module => ({ default: module.ExpensesPage })));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 1000 * 60 },
  },
});

// Guard: redirects to /login if not authenticated, and checks permissions
function ProtectedRoute({ children, requiredPermissions = [] }: { children: React.ReactNode, requiredPermissions?: string[] }) {
  const { isAuthenticated, hasPermission } = useAuth();
  
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (requiredPermissions.length > 0) {
    const hasAll = requiredPermissions.every(p => hasPermission(p));
    if (!hasAll) {
      return (
        <div className="flex h-screen items-center justify-center bg-gray-50 flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">غير مصرح لك بالدخول</h1>
          <p className="text-gray-500">لا تملك الصلاحيات الكافية للوصول إلى هذه الصفحة.</p>
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

              {/* Protected — wrapped in AppLayout */}
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<DashboardPage />} />

                <Route element={<FeatureBoundaryLayout featureName="المبيعات" />}>
                  <Route path="/sales/pos"          element={<ProtectedRoute requiredPermissions={[Permissions.SalesWrite]}><PosPage /></ProtectedRoute>} />
                  <Route path="/sales/history"      element={<ProtectedRoute requiredPermissions={[Permissions.SalesRead]}><SalesHistoryPage /></ProtectedRoute>} />
                  <Route path="/sales/returns"      element={<ProtectedRoute requiredPermissions={[Permissions.SalesRead]}><SalesReturnsPage /></ProtectedRoute>} />
                  <Route path="/sales/returns/new"  element={<ProtectedRoute requiredPermissions={[Permissions.SalesWrite]}><NewSalesReturnPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="المشتريات" />}>
                  <Route path="/purchases/new"      element={<ProtectedRoute requiredPermissions={[Permissions.PurchasesWrite]}><NewPurchasePage /></ProtectedRoute>} />
                  <Route path="/purchases/history"  element={<ProtectedRoute requiredPermissions={[Permissions.PurchasesRead]}><PurchasesHistoryPage /></ProtectedRoute>} />
                  <Route path="/purchases/returns"  element={<ProtectedRoute requiredPermissions={[Permissions.PurchasesRead]}><SupplierReturnsPage /></ProtectedRoute>} />
                  <Route path="/purchases/returns/new" element={<ProtectedRoute requiredPermissions={[Permissions.PurchasesWrite]}><NewSupplierReturnPage /></ProtectedRoute>} />
                  <Route path="/purchases/returns/:id" element={<ProtectedRoute requiredPermissions={[Permissions.PurchasesRead]}><SupplierReturnDetailsPage /></ProtectedRoute>} />
                  <Route path="/purchases/:id"      element={<ProtectedRoute requiredPermissions={[Permissions.PurchasesRead]}><PurchaseInvoiceDetailsPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="المخزون" />}>
                  <Route path="/inventory/products"   element={<ProtectedRoute requiredPermissions={[Permissions.InventoryRead]}><ProductsPage /></ProtectedRoute>} />
                  <Route path="/inventory/products/:id" element={<ProtectedRoute requiredPermissions={[Permissions.InventoryRead]}><ProductDetailsPage /></ProtectedRoute>} />
                  <Route path="/inventory/categories" element={<ProtectedRoute requiredPermissions={[Permissions.InventoryRead]}><CategoriesPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="إدارة جهات الاتصال" />}>
                  <Route path="/contacts/customers" element={<ProtectedRoute requiredPermissions={[Permissions.ContactsRead]}><CustomersPage /></ProtectedRoute>} />
                  <Route path="/contacts/customers/:id" element={<ProtectedRoute requiredPermissions={[Permissions.ContactsRead]}><CustomerDetailsPage /></ProtectedRoute>} />
                  <Route path="/contacts/suppliers" element={<ProtectedRoute requiredPermissions={[Permissions.ContactsRead]}><SuppliersPage /></ProtectedRoute>} />
                  <Route path="/contacts/suppliers/:id" element={<ProtectedRoute requiredPermissions={[Permissions.ContactsRead]}><SupplierDetailsPage /></ProtectedRoute>} />
                </Route>

                <Route element={<FeatureBoundaryLayout featureName="المالية" />}>
                  <Route path="/finance/drawer"   element={<ProtectedRoute requiredPermissions={[Permissions.FinanceRead]}><DrawerPage /></ProtectedRoute>} />
                  <Route path="/finance/safe"     element={<ProtectedRoute requiredPermissions={[Permissions.FinanceRead]}><SafePage /></ProtectedRoute>} />
                  <Route path="/finance/expenses" element={<ProtectedRoute requiredPermissions={[Permissions.FinanceRead]}><ExpensesPage /></ProtectedRoute>} />
                </Route>

                <Route path="/settings" element={<ComingSoon label="الإعدادات" />} />
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
````

## File: src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/assets/vite.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
````

## File: src/core/repositories/IAuthRepository.ts
````typescript
import { LoginFormData } from "@/features/auth/schemas/loginSchema";

export interface AuthResponse {
  token: string;
  permissions?: string[];
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export interface IAuthRepository {
  login(data: LoginFormData): Promise<AuthResponse>;
}
````

## File: src/core/repositories/IContactsRepository.ts
````typescript
import { PaginatedList } from "@/shared/types/pagination";
import { 
  CreateCustomerRequest, 
  CustomerResponse, 
  CustomerStatementResponse, CustomerDebtHistoryResponse, 
  CreateSupplierRequest, 
  SupplierResponse, 
  SupplierStatementItemResponse, 
  CreatePaymentRequest,
  ContactFilters,
  StatementFilters
} from "@/features/contacts/schemas/contactSchemas";

export interface IContactsRepository {
  // Customers
  getCustomers(filters: ContactFilters): Promise<PaginatedList<CustomerResponse>>;
  getCustomer(id: string): Promise<CustomerResponse>;
  getCustomerDebtHistory(id: string): Promise<CustomerDebtHistoryResponse>;
  createCustomer(data: CreateCustomerRequest): Promise<string>;
  updateCustomer(id: string, data: CreateCustomerRequest): Promise<void>;
  deleteCustomer(id: string): Promise<void>;
  
  // Customer Transactions
  getCustomerStatement(customerId: string): Promise<CustomerStatementResponse[]>;
  addCustomerPayment(customerId: string, data: CreatePaymentRequest): Promise<string>;

  // Suppliers
  getSuppliers(filters: ContactFilters): Promise<PaginatedList<SupplierResponse>>;
  getSupplier(id: string): Promise<SupplierResponse>;
  createSupplier(data: CreateSupplierRequest): Promise<string>;
  updateSupplier(id: string, data: CreateSupplierRequest): Promise<void>;
  deleteSupplier(id: string): Promise<void>;

  // Supplier Transactions
  getSupplierStatement(filters: StatementFilters): Promise<PaginatedList<SupplierStatementItemResponse>>;
  addSupplierPayment(supplierId: string, data: CreatePaymentRequest): Promise<string>;
}
````

## File: src/core/repositories/IFinanceRepository.ts
````typescript
import { PaginatedList } from "@/shared/types/pagination";
import { 
  OpenSessionRequest, DrawerSessionResponse, AddManualTransactionRequest,
  CreateSafeRequest, SafeResponse, SafeTransactionResponse, ReceiveDrawerDepositRequest,
  CreateExpenseCategoryRequest, ExpenseCategoryResponse,
  CreateExpenseRequest, ExpenseResponse,
  FinanceFilters
} from "@/features/finance/schemas/financeSchemas";

export interface IFinanceRepository {
  // Drawer
  getCurrentDrawerSession(): Promise<DrawerSessionResponse>;
  openDrawerSession(data: OpenSessionRequest): Promise<string>;
  closeDrawerSession(): Promise<void>;
  addDrawerTransaction(data: AddManualTransactionRequest): Promise<string>;

  // Safe
  getSafes(): Promise<SafeResponse[]>;
  createSafe(data: CreateSafeRequest): Promise<string>;
  getSafeTransactions(safeId: string, filters: FinanceFilters): Promise<PaginatedList<SafeTransactionResponse>>;
  receiveDrawerDeposit(safeId: string, data: ReceiveDrawerDepositRequest): Promise<string>;

  // Expenses
  getExpenseCategories(): Promise<ExpenseCategoryResponse[]>;
  createExpenseCategory(data: CreateExpenseCategoryRequest): Promise<string>;
  getExpenses(filters: FinanceFilters): Promise<PaginatedList<ExpenseResponse>>;
  createExpense(data: CreateExpenseRequest): Promise<string>;
}
````

## File: src/core/repositories/IInventoryRepository.ts
````typescript
import { PaginatedList } from "@/shared/types/pagination";
import { 
  CategoryResponse, 
  CreateProductRequest, 
  DepartmentResponse, 
  ProductBatchResponse, 
  ProductResponse,
  ProductFilters
} from "@/features/inventory/schemas/inventorySchemas";

export interface IInventoryRepository {
  // Categories
  getCategories(filters?: ProductFilters): Promise<PaginatedList<CategoryResponse>>;
  createCategory(reqData: { name: string; departmentId: string }): Promise<string>;
  updateCategory(id: string, reqData: { name: string; departmentId: string }): Promise<void>;
  deleteCategory(id: string): Promise<void>;
  
  // Departments
  getDepartments(categoryId?: string, filters?: ProductFilters): Promise<PaginatedList<DepartmentResponse>>;
  createDepartment(reqData: { name: string }): Promise<string>;
  updateDepartment(id: string, reqData: { name: string }): Promise<void>;
  deleteDepartment(id: string): Promise<void>;

  // Products
  getProducts(filters: ProductFilters): Promise<PaginatedList<ProductResponse>>;
  getProduct(id: string): Promise<ProductResponse>;
  createProduct(data: CreateProductRequest): Promise<string>;
  updateProduct(id: string, data: CreateProductRequest): Promise<void>;
  deleteProduct(id: string): Promise<void>;

  // Batches
  getProductBatches(filters: ProductFilters): Promise<PaginatedList<ProductBatchResponse>>;
}
````

## File: src/core/repositories/IInvoicesRepository.ts
````typescript
import { PaginatedList } from "@/shared/types/pagination";
import { 
  CreateSalesInvoiceRequest,  SalesInvoiceResponse, 
  CreatePurchaseInvoiceRequest, 
  PurchaseInvoiceResponse,
  InvoiceFilters
} from "@/features/invoices/schemas/invoiceSchemas";
import { CreateSupplierReturnRequest, CreateCustomerReturnRequest } from "@/features/invoices/schemas/returnSchemas";

export interface IInvoicesRepository {
  // Sales Invoices
  getSalesInvoices(filters: InvoiceFilters): Promise<PaginatedList<SalesInvoiceResponse>>;
  getSalesInvoice(id: string): Promise<SalesInvoiceResponse>;
  createSalesInvoice(data: CreateSalesInvoiceRequest): Promise<string>;
  
  // Purchase Invoices
  getPurchaseInvoices(filters: InvoiceFilters): Promise<PaginatedList<PurchaseInvoiceResponse>>;
  getPurchaseInvoice(id: string): Promise<PurchaseInvoiceResponse>;
  createPurchaseInvoice(data: CreatePurchaseInvoiceRequest): Promise<string>;

  // Returns
  createSupplierReturn(data: CreateSupplierReturnRequest): Promise<string>;
  createCustomerReturn(customerId: string, data: CreateCustomerReturnRequest): Promise<string>;
}
````

## File: src/features/auth/api/AuthApi.ts
````typescript
import { apiClient } from '@/lib/axios';
import { IAuthRepository, AuthResponse } from '@/core/repositories/IAuthRepository';
import { LoginFormData } from '../schemas/loginSchema';

export class AuthRepository implements IAuthRepository {
  async login(data: LoginFormData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);
    return response.data;
  }
}

export const authRepository = new AuthRepository();
````

## File: src/features/auth/components/HasPermission.tsx
````typescript
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
````

## File: src/features/auth/components/LoginForm.tsx
````typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../schemas/loginSchema";
import { useLogin } from "../hooks/useAuth";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { tokens } from "@/shared/styles/tokens";

/**
 * Login form — userName + password with show/hide toggle.
 * Sends { userName, password } matching the backend's LoginRequest record.
 */
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

      {/* Username */}
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

      {/* Password */}
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

      {/* Submit */}
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
````

## File: src/features/auth/hooks/useAuth.tsx
````typescript
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
  logout: () => void;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!storage.getToken());
  const [permissions, setPermissions] = useState<string[]>(
    isAuthenticated ? storage.getPermissions() : []
  );

  const logout = () => {
    storage.clearToken();
    storage.clearPermissions();
    setIsAuthenticated(false);
    setPermissions([]);
    window.location.href = '/login';
  };

  const hasPermission = (permission: string) => {
    // Admin override or specific permission check
    return permissions.includes("admin") || permissions.includes(permission);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, permissions, logout, hasPermission }}>
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
      // Ensure we have permissions array, default to empty if not returned by old backend
      const perms = data.permissions || [];
      storage.setPermissions(perms);
      window.location.href = '/';
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, "فشل تسجيل الدخول. تحقق من البيانات."));
    },
  });
}
````

## File: src/features/auth/pages/LoginPage.tsx
````typescript
import { LoginForm } from "@/features/auth/components/LoginForm";

/**
 * Login Page — full-screen centered layout matching design spec.
 * Background: #f8fafc (slate-50), card: white rounded-xl shadow-sm.
 */
export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="w-full max-w-md">

        {/* Logo / Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg mb-4">
            <span className="text-white text-2xl font-bold">س</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">سنترالي</h1>
          <p className="text-gray-500 text-sm mt-1">
            نظام إدارة الأعمال الذكية
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">مرحباً بك</h2>
            <p className="text-sm text-gray-500 mt-1">
              قم بتسجيل الدخول للوصول إلى لوحة التحكم
            </p>
          </div>

          <LoginForm />
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} سنترالي — جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
}
````

## File: src/features/auth/schemas/loginSchema.ts
````typescript
import * as z from "zod";

// Matches the backend's LoginRequest record: { UserName, Password }
export const loginSchema = z.object({
  userName: z.string().min(1, "اسم المستخدم مطلوب"),
  password: z.string().min(1, "كلمة المرور مطلوبة"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
````

## File: src/features/auth/schemas/permissions.ts
````typescript
export const Permissions = {
  InventoryRead: 'inventory:read',
  InventoryWrite: 'inventory:write',
  SalesRead: 'sales:read',
  SalesWrite: 'sales:write',
  PurchasesRead: 'purchases:read',
  PurchasesWrite: 'purchases:write',
  ContactsRead: 'contacts:read',
  ContactsWrite: 'contacts:write',
  FinanceRead: 'finance:read',
  FinanceWrite: 'finance:write',
  Admin: 'admin',
} as const;

export type Permission = (typeof Permissions)[keyof typeof Permissions];

/** Temporary full set until login response includes permissions. */
export const DEFAULT_AUTHENTICATED_PERMISSIONS: Permission[] = [
  Permissions.InventoryRead,
  Permissions.InventoryWrite,
  Permissions.SalesRead,
  Permissions.SalesWrite,
  Permissions.PurchasesRead,
  Permissions.PurchasesWrite,
  Permissions.ContactsRead,
  Permissions.ContactsWrite,
  Permissions.FinanceRead,
  Permissions.FinanceWrite,
];
````

## File: src/features/contacts/api/ContactsApi.ts
````typescript
import { apiClient } from "@/lib/axios";
import { IContactsRepository } from "@/core/repositories/IContactsRepository";
import { PaginatedList } from "@/shared/types/pagination";
import { 
  CreateCustomerRequest, CustomerResponse, CustomerStatementResponse, 
  CreateSupplierRequest, SupplierResponse, SupplierStatementItemResponse, 
  CreatePaymentRequest,
  ContactFilters,
  StatementFilters
} from "../schemas/contactSchemas";

import { CustomerDebtHistoryResponse } from '../schemas/contactSchemas';

export class ContactsRepository implements IContactsRepository {
  // --- Customers ---
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

  // --- Suppliers ---
  async getSuppliers(filters: ContactFilters): Promise<PaginatedList<SupplierResponse>> {
    const { data } = await apiClient.get<PaginatedList<SupplierResponse>>('/suppliers', { params: filters });
    return data;
  }

  async getSupplier(id: string): Promise<SupplierResponse> {
    const { data } = await apiClient.get<SupplierResponse>(`/suppliers/${id}`);
    return data;
  }

  async createSupplier(reqData: CreateSupplierRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/suppliers', reqData);
    return data;
  }

  async updateSupplier(id: string, reqData: CreateSupplierRequest): Promise<void> {
    await apiClient.put(`/suppliers/${id}`, reqData);
  }

  async deleteSupplier(id: string): Promise<void> {
    await apiClient.delete(`/suppliers/${id}`);
  }

  async getSupplierStatement(filters: StatementFilters): Promise<PaginatedList<SupplierStatementItemResponse>> {
    if (!filters.supplierId) throw new Error("supplierId is required for statement");
    const { data } = await apiClient.get<PaginatedList<SupplierStatementItemResponse>>(`/suppliers/${filters.supplierId}/statement`, { params: filters });
    return data;
  }

  async addSupplierPayment(supplierId: string, reqData: CreatePaymentRequest): Promise<string> {
    const payload = { ...reqData, supplierId };
    const { data } = await apiClient.post<string>('/supplier-transactions/payments', payload);
    return data;
  }
}

export const contactsRepository = new ContactsRepository();
````

## File: src/features/contacts/components/CustomerForm.tsx
````typescript
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
````

## File: src/features/contacts/components/CustomersFilters.tsx
````typescript
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
````

## File: src/features/contacts/components/CustomersTable.tsx
````typescript
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
      header: 'اسم العميل',
      cell: (row: CustomerResponse) => (
        <span className="font-bold text-gray-800">{row.name}</span>
      ),
    },
    {
      header: 'رقم الهاتف',
      cell: (row: CustomerResponse) => row.phone || <span className="text-gray-400">-</span>,
    },
    {
      header: 'المديونية (الرصيد)',
      cell: (row: CustomerResponse) => {
        const balance = row.debtBalance || 0;
        if (balance === 0) return <span className="text-gray-500 font-medium">0 ج.م</span>;
        if (balance > 0) return <span className="text-red-600 font-bold" dir="ltr">{formatCurrency(balance)}</span>; // owes us
        return <span className="text-green-600 font-bold" dir="ltr">{formatCurrency(Math.abs(balance))} (مقدم)</span>; // we owe them
      },
    },
    {
      header: 'تاريخ الإضافة',
      cell: (row: CustomerResponse) => new Date(row.createdAt).toLocaleDateString('ar-EG'),
    },
    {
      header: 'إجراءات',
      cell: (row: CustomerResponse) => (
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => onRowClick(row)}
            className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
            title="كشف حساب / التفاصيل"
            aria-label="تفاصيل العميل"
          >
            <Eye size={18} />
          </button>
          <HasPermission permission={Permissions.ContactsWrite}>
            <button
              type="button"
              onClick={() => onEdit(row)}
              className="p-1.5 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
              title="تعديل"
              aria-label="تعديل العميل"
            >
              <Edit2 size={18} />
            </button>
            <button
              type="button"
              onClick={() => onDelete(row)}
              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="حذف"
              aria-label="حذف العميل"
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
````

## File: src/features/contacts/hooks/useContacts.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { contactsRepository } from "../api/ContactsApi";

import { 
  CreateCustomerRequest, CreateSupplierRequest, CreatePaymentRequest,
  ContactFilters, StatementFilters 
} from "../schemas/contactSchemas";
import { toast } from "sonner";

export const CONTACT_KEYS = {
  customers: (filters: ContactFilters) => ["customers", filters] as const,
  customerDetails: (id: string) => ["customers", id] as const,
  customerStatement: (filters: StatementFilters) => ["customers", "statement", filters] as const,
  
  suppliers: (filters: ContactFilters) => ["suppliers", filters] as const,
  supplierDetails: (id: string) => ["suppliers", id] as const,
  supplierStatement: (filters: StatementFilters) => ["suppliers", "statement", filters] as const,
};

// --- Customer Queries & Mutations ---

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

// --- Supplier Queries & Mutations ---

export function useSuppliers(filters: ContactFilters) {
  return useQuery({
    queryKey: CONTACT_KEYS.suppliers(filters),
    queryFn: () => contactsRepository.getSuppliers(filters),
  });
}

export function useSupplier(id: string) {
  return useQuery({
    queryKey: CONTACT_KEYS.supplierDetails(id),
    queryFn: () => contactsRepository.getSupplier(id),
    enabled: !!id,
  });
}

export function useSupplierStatement(filters: StatementFilters) {
  return useQuery({
    queryKey: CONTACT_KEYS.supplierStatement(filters),
    queryFn: () => contactsRepository.getSupplierStatement(filters),
  });
}

export function useCreateSupplier() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSupplierRequest) => contactsRepository.createSupplier(data),
    onSuccess: () => {
      toast.success("تم إضافة المورد بنجاح");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
    onError: () => toast.error("حدث خطأ أثناء إضافة المورد"),
  });
}

export function useAddSupplierPayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreatePaymentRequest }) => 
      contactsRepository.addSupplierPayment(id, data),
    onSuccess: (_, { id }) => {
      toast.success("تم تسجيل الدفعة بنجاح");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: CONTACT_KEYS.supplierDetails(id) });
    },
    onError: () => toast.error("حدث خطأ أثناء تسجيل الدفعة"),
  });
}
````

## File: src/features/contacts/pages/CustomerDetailsPage.tsx
````typescript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomer, useCustomerStatement, useAddCustomerPayment } from '../hooks/useContacts';
import { formatCurrency } from '@/shared/utils/currency';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { DataTable } from '@/shared/components/ui/DataTable';
import { InvoiceDetailsModal } from '@/features/sales/components/InvoiceDetailsModal';
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

  const { data: customer, isLoading: isLoadingCustomer } = useCustomer(id!);
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

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = Number(paymentAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('المبلغ غير صحيح');
      return;
    }
    
    addPayment.mutate(
      { id: id!, data: { amount, notes: paymentNotes } },
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
      
      {/* Customer Summary Card */}
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

      {/* Statement Table */}
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
            className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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

      {/* Add Payment Drawer */}
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

    </div>
  );
}
````

## File: src/features/contacts/pages/CustomersPage.tsx
````typescript
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
    customerPhone: searchTerm || undefined, // Backend might need search string in phone or general search
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
````

## File: src/features/contacts/schemas/contactSchemas.ts
````typescript
import * as z from "zod";
import { BaseFilters } from "@/shared/types/pagination";

export interface ContactFilters extends BaseFilters {
  customerPhone?: string;
}
export interface StatementFilters extends BaseFilters {
  startDate?: string;
  endDate?: string;
  customerId?: string;
  supplierId?: string;
}

// --- Customers ---

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

// --- Suppliers ---

export const createSupplierSchema = z.object({
  name: z.string().min(1, "Ø§Ù„Ø§Ø³Ù… Ù…Ø·Ù„ÙˆØ¨"),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  email: z.string().email("Ø¨Ø±ÙŠØ¯ ØºÙŠØ± ØµØ§Ù„Ø­").optional().or(z.literal("")),
  address: z.string().optional(),
  notes: z.string().optional(),
});
export type CreateSupplierRequest = z.infer<typeof createSupplierSchema>;

export interface SupplierResponse {
  id: string;
  name: string;
  companyName?: string;
  phone?: string;
  email?: string;
  address?: string;
  notes?: string;
  balance: number;
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

// --- Payments ---

export const createPaymentSchema = z.object({
  amount: z.number().min(0.01, "Ø§Ù„Ù…Ø¨Ù„Øº ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø£ÙƒØ¨Ø± Ù…Ù† ØµÙØ±"),
  notes: z.string().optional(),
});
export type CreatePaymentRequest = z.infer<typeof createPaymentSchema>;

// --- Customer Debt History ---
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
````

## File: src/features/dashboard/pages/DashboardPage.tsx
````typescript
export function DashboardPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h1 className="text-2xl font-bold text-gray-800">DashboardPage</h1>
      <p className="text-gray-500 mt-2">هذه الصفحة قيد الإنشاء...</p>
    </div>
  );
}
````

## File: src/features/finance/api/FinanceApi.ts
````typescript
import { apiClient } from "@/lib/axios";
import { IFinanceRepository } from "@/core/repositories/IFinanceRepository";
import { PaginatedList } from "@/shared/types/pagination";
import { 
  OpenSessionRequest, DrawerSessionResponse, AddManualTransactionRequest,
  CreateSafeRequest, SafeResponse, SafeTransactionResponse, ReceiveDrawerDepositRequest,
  CreateExpenseCategoryRequest, ExpenseCategoryResponse,
  CreateExpenseRequest, ExpenseResponse,
  FinanceFilters
} from "../schemas/financeSchemas";

export class FinanceRepository implements IFinanceRepository {
  // --- Drawer ---
  async getCurrentDrawerSession(): Promise<DrawerSessionResponse> {
    const { data } = await apiClient.get<DrawerSessionResponse>('/drawers/active');
    return data;
  }

  async openDrawerSession(reqData: OpenSessionRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/drawers/open', reqData);
    return data;
  }

  async closeDrawerSession(): Promise<void> {
    await apiClient.post('/drawers/close');
  }

  async addDrawerTransaction(reqData: AddManualTransactionRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/drawers/transactions/manual', reqData);
    return data;
  }

  // --- Safe ---
  async getSafes(): Promise<SafeResponse[]> {
    const { data } = await apiClient.get<SafeResponse[]>('/Safe'); // Route is 'Safe' uppercase in backend controller
    return data;
  }

  async createSafe(reqData: CreateSafeRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/Safe', reqData);
    return data;
  }

  async receiveDrawerDeposit(safeId: string, reqData: ReceiveDrawerDepositRequest): Promise<string> {
    const { data } = await apiClient.post<string>(`/Safe/${safeId}/deposit`, reqData);
    return data;
  }

  async getSafeTransactions(safeId: string, filters: FinanceFilters): Promise<PaginatedList<SafeTransactionResponse>> {
    // Backend doesn't have GetAllSafeTransactions endpoint in controller yet, mocking it for now or leaving it ready
    const { data } = await apiClient.get<PaginatedList<SafeTransactionResponse>>(`/Safe/${safeId}/transactions`, { params: filters });
    return data;
  }

  // --- Expenses ---
  async getExpenseCategories(): Promise<ExpenseCategoryResponse[]> {
    const { data } = await apiClient.get<ExpenseCategoryResponse[]>('/expenses/categories');
    return data;
  }

  async createExpenseCategory(reqData: CreateExpenseCategoryRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/expenses/categories', reqData);
    return data;
  }

  async getExpenses(filters: FinanceFilters): Promise<PaginatedList<ExpenseResponse>> {
    // Note: Ensure backend has a GET /expenses endpoint with pagination.
    const { data } = await apiClient.get<PaginatedList<ExpenseResponse>>('/expenses', { params: filters });
    return data;
  }

  async createExpense(reqData: CreateExpenseRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/expenses', reqData);
    return data;
  }
}

export const financeRepository = new FinanceRepository();
````

## File: src/features/finance/hooks/useFinance.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { financeRepository } from "../api/FinanceApi";

import { 
  OpenSessionRequest, AddManualTransactionRequest, CreateSafeRequest, 
  ReceiveDrawerDepositRequest, CreateExpenseCategoryRequest, CreateExpenseRequest,
  FinanceFilters 
} from "../schemas/financeSchemas";
import { toast } from "sonner";

export const FINANCE_KEYS = {
  activeDrawer: ["drawer", "active"] as const,
  safes: ["safes"] as const,
  safeTransactions: (safeId: string, filters: FinanceFilters) => ["safes", safeId, "transactions", filters] as const,
  expenseCategories: ["expenseCategories"] as const,
  expenses: (filters: FinanceFilters) => ["expenses", filters] as const,
};

// --- Drawer ---

export function useActiveDrawer() {
  return useQuery({
    queryKey: FINANCE_KEYS.activeDrawer,
    queryFn: () => financeRepository.getCurrentDrawerSession(),
  });
}

export function useOpenDrawer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: OpenSessionRequest) => financeRepository.openDrawerSession(data),
    onSuccess: () => {
      toast.success("تم فتح الدرج بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.activeDrawer });
    },
    onError: () => toast.error("حدث خطأ أثناء فتح الدرج"),
  });
}

export function useCloseDrawer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => financeRepository.closeDrawerSession(),
    onSuccess: () => {
      toast.success("تم إغلاق الدرج بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.activeDrawer });
    },
    onError: () => toast.error("حدث خطأ أثناء إغلاق الدرج"),
  });
}

export function useAddDrawerTransaction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AddManualTransactionRequest) => financeRepository.addDrawerTransaction(data),
    onSuccess: () => {
      toast.success("تم تسجيل الحركة بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.activeDrawer });
    },
    onError: () => toast.error("حدث خطأ أثناء تسجيل الحركة"),
  });
}

// --- Safe ---

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
      toast.success("تم إضافة الخزينة بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.safes });
    },
    onError: () => toast.error("حدث خطأ أثناء إضافة الخزينة"),
  });
}

export function useReceiveDrawerDeposit() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ safeId, data }: { safeId: string, data: ReceiveDrawerDepositRequest }) => 
      financeRepository.receiveDrawerDeposit(safeId, data),
    onSuccess: () => {
      toast.success("تم إيداع النقدية بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.safes });
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.activeDrawer });
    },
    onError: () => toast.error("حدث خطأ أثناء الإيداع"),
  });
}

// --- Expenses ---

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
      toast.success("تم إضافة بند المصروف بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.expenseCategories });
    },
    onError: () => toast.error("حدث خطأ أثناء إضافة البند"),
  });
}

export function useCreateExpense() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateExpenseRequest) => financeRepository.createExpense(data),
    onSuccess: () => {
      toast.success("تم تسجيل المصروف بنجاح");
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.activeDrawer });
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.safes });
    },
    onError: () => toast.error("حدث خطأ أثناء تسجيل المصروف"),
  });
}
````

## File: src/features/finance/pages/DrawerPage.tsx
````typescript
export function DrawerPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h1 className="text-2xl font-bold text-gray-800">DrawerPage</h1>
      <p className="text-gray-500 mt-2">هذه الصفحة قيد الإنشاء...</p>
    </div>
  );
}
````

## File: src/features/finance/pages/ExpensesPage.tsx
````typescript
export function ExpensesPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h1 className="text-2xl font-bold text-gray-800">ExpensesPage</h1>
      <p className="text-gray-500 mt-2">هذه الصفحة قيد الإنشاء...</p>
    </div>
  );
}
````

## File: src/features/finance/pages/SafePage.tsx
````typescript
export function SafePage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h1 className="text-2xl font-bold text-gray-800">SafePage</h1>
      <p className="text-gray-500 mt-2">هذه الصفحة قيد الإنشاء...</p>
    </div>
  );
}
````

## File: src/features/finance/schemas/financeSchemas.ts
````typescript
import { z } from "zod";
import { BaseFilters } from "@/shared/types/pagination";

export interface FinanceFilters extends BaseFilters {
  startDate?: string;
  endDate?: string;
}

// --- Enums ---
export type DrawerTransactionType = 1 | 2; // Income = 1, Expense = 2
export type DrawerTransactionCategory = 1 | 2 | 3 | 4 | 5; 
export type ExpensePaymentSource = 1 | 2; // Drawer = 1, Safe = 2

// --- Drawer ---

export const openSessionSchema = z.object({
  openingBalance: z.number().min(0),
});
export type OpenSessionRequest = z.infer<typeof openSessionSchema>;

export const addManualTransactionSchema = z.object({
  type: z.number(),
  category: z.number(),
  amount: z.number().min(0.01),
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
  closedAt?: string;
  totalIncome?: number;
  totalExpense?: number;
  closingBalance?: number;
  transactions: DrawerTransactionResponse[];
}

// --- Safe ---

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

// --- Expenses ---

export const createExpenseCategorySchema = z.object({
  name: z.string().min(1),
});
export type CreateExpenseCategoryRequest = z.infer<typeof createExpenseCategorySchema>;

export const createExpenseSchema = z.object({
  categoryId: z.string().min(1),
  amount: z.number().min(0.01),
  paymentSource: z.number(), // ExpensePaymentSource
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
````

## File: src/features/inventory/api/InventoryApi.ts
````typescript
import { apiClient } from "@/lib/axios";
import { IInventoryRepository } from "@/core/repositories/IInventoryRepository";
import { PaginatedList } from "@/shared/types/pagination";
import { 
  CategoryResponse, 
  CreateProductRequest, 
  DepartmentResponse, 
  ProductBatchResponse, 
  ProductResponse,
  ProductFilters
} from "../schemas/inventorySchemas";

export class InventoryRepository implements IInventoryRepository {
  async getCategories(filters?: ProductFilters): Promise<PaginatedList<CategoryResponse>> {
    const { data } = await apiClient.get<PaginatedList<CategoryResponse>>('/categories', { params: filters });
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

  async getDepartments(categoryId?: string, filters?: ProductFilters): Promise<PaginatedList<DepartmentResponse>> {
    const params = { ...filters, categoryId };
    const { data } = await apiClient.get<PaginatedList<DepartmentResponse>>('/departments', { params });
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
      Object.entries(reqData.properties).forEach(([key, value]) => {
        formData.append(`Properties[${key}]`, value as string);
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
      Object.entries(reqData.properties).forEach(([key, value]) => {
        formData.append(`Properties[${key}]`, value as string);
      });
    }

    await apiClient.put(`/products/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }

  async deleteProduct(id: string): Promise<void> {
    await apiClient.delete(`/products/${id}`);
  }

  async getProductBatches(filters: ProductFilters): Promise<PaginatedList<ProductBatchResponse>> {
    const { data } = await apiClient.get<PaginatedList<ProductBatchResponse>>('/products/batches', { params: filters });
    return data;
  }
}

export const inventoryRepository = new InventoryRepository();
````

## File: src/features/inventory/components/AddProductForm.tsx
````typescript
import { useForm, useWatch, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { useDepartments } from '@/features/inventory/hooks/useInventory';
import { tokens } from '@/shared/styles/tokens';
import { Plus, Trash2 } from 'lucide-react';
import { ProductResponse, CategoryResponse, createProductSchema } from '../schemas/inventorySchemas';

type ProductFormValues = z.infer<typeof createProductSchema>;

interface AddProductFormProps {
  categories?: CategoryResponse[];
  onSubmit: (data: ProductFormValues) => void;
  isSubmitting: boolean;
  initialData?: ProductResponse;
}

export function AddProductForm({ categories, onSubmit, initialData, isSubmitting: _ }: AddProductFormProps) {
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
      propertiesList: Object.entries(initialData.properties || {}).map(([key, value]) => ({ key, value: value as string }))
    } : { minQuantityAlert: 5, categoryId: '', departmentId: '', propertiesList: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'propertiesList'
  });

  // Watch categoryId to fetch related departments
  const selectedCategoryId = useWatch({ control, name: 'categoryId' });
  const { data: departmentsData } = useDepartments(selectedCategoryId || undefined);
  const departments = departmentsData?.items || [];

  return (
    <form id="add-product-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Product Name */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          اسم المنتج <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register('name')}
          placeholder="مثال: لابتوب ديل XPS"
          className={tokens.input}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{String(errors.name.message)}</p>
        )}
      </div>

      {/* Barcode */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>الباركود</label>
        <div className="flex gap-2">
          <input
            type="text"
            {...register('barcode')}
            placeholder="ادخل الباركود أو استخدم القارئ"
            className={tokens.input}
          />
          <button type="button" className={tokens.btn.ghost}>
            توليد
          </button>
        </div>
      </div>

      {/* Category */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          القسم الرئيسي <span className="text-red-500">*</span>
        </label>
        <select className={tokens.input} {...register('categoryId')}>
          <option value="">اختر القسم الرئيسي...</option>
          {categories?.map((cat) => (
            <option key={cat.categoryId} value={cat.categoryId}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId.message as string}</p>}
      </div>

      {/* Department Select */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>القسم الفرعي</label>
        <select className={tokens.input} {...register('departmentId')} disabled={!selectedCategoryId}>
          <option value="">اختر القسم الفرعي...</option>
          {departments?.map((dep) => (
            <option key={dep.departmentId} value={dep.departmentId}>
              {dep.name}
            </option>
          ))}
        </select>
        {errors.departmentId && (
          <p className="text-red-500 text-xs mt-1">{String(errors.departmentId.message)}</p>
        )}
      </div>

      {/* Min Quantity Alert */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          حد تنبيه الكمية (Min Quantity Alert) <span className="text-red-500">*</span>
        </label>
        <input type="number" {...register('minQuantityAlert')} className={tokens.input} />
        <p className={tokens.font.helperText + " mt-1"}>
          سيتم تنبيهك عندما تصل كمية هذا المنتج إلى هذا الرقم
        </p>
      </div>

      {/* Storage Location */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>مكان التخزين (Storage Location)</label>
        <input
          type="text"
          {...register('storageLocation')}
          placeholder="مثال: الرف A1"
          className={tokens.input}
        />
      </div>

      {/* Properties (Dictionary) */}
      <div className="pt-2 border-t border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <label className={tokens.font.label}>خصائص إضافية (اختياري)</label>
          <button
            type="button"
            onClick={() => append({ key: '', value: '' })}
            className="text-blue-600 text-xs font-semibold flex items-center gap-1 hover:text-blue-700 bg-blue-50 px-2 py-1 rounded-md"
          >
            <Plus size={14} /> إضافة خاصية
          </button>
        </div>

        {fields.length > 0 ? (
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-start">
                <div className="flex-1">
                  <input
                    {...register(`propertiesList.${index}.key`)}
                    placeholder="الخاصية (مثال: اللون)"
                    className={tokens.input}
                  />
                  {errors.propertiesList?.[index]?.key && (
                    <p className="text-red-500 text-xs mt-1">{String(errors.propertiesList[index].key?.message)}</p>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    {...register(`propertiesList.${index}.value`)}
                    placeholder="القيمة (مثال: أحمر)"
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
          <p className="text-xs text-gray-400">لا توجد خصائص مضافة. يمكنك إضافة تفاصيل مثل اللون، المقاس، إلخ.</p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>صورة المنتج</label>
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
````

## File: src/features/inventory/components/CategoryForms.tsx
````typescript
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
          className={`mt-1 block w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${form.formState.errors.name ? 'border-red-500' : 'border-gray-300'}`}
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
          className={`mt-1 block w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white ${form.formState.errors.departmentId ? 'border-red-500' : 'border-gray-300'}`}
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
          className={`mt-1 block w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${form.formState.errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
      </div>
    </form>
  );
}
````

## File: src/features/inventory/components/DepartmentCard.tsx
````typescript
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
      {/* Department Header */}
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

      {/* Categories List (Expanded) */}
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
````

## File: src/features/inventory/components/ProductBatchesCard.tsx
````typescript
import { Calendar, Truck, Package, Plus, MoreHorizontal } from 'lucide-react';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';

interface ProductBatchesCardProps {
  product: ProductResponse;
}

export function ProductBatchesCard({ product }: ProductBatchesCardProps) {
  const batches = product.batches || [];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative z-10">
      {/* Added pr-40 to avoid overlapping with the absolute positioned image from the header */}
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
````

## File: src/features/inventory/components/ProductDetailsHeader.tsx
````typescript
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
        {/* Overlapping Image Card */}
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

        {/* Product Title */}
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
````

## File: src/features/inventory/components/ProductFilters.tsx
````typescript
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
  onAddClick,
}: ProductFiltersProps) {
  const { data: categoriesData } = useCategories();
  const { data: departmentsData } = useDepartments();

  const categories = categoriesData?.items || [];
  const departments = departmentsData?.items || [];

  return (
    <div className={`${tokens.card} p-4 flex flex-wrap gap-4 items-center justify-between bg-white shadow-sm`}>
      {/* Left side: Filters */}
      <div className="flex items-center gap-3 flex-1 flex-wrap">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px] max-w-[300px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="بحث بالاسم أو الباركود..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50"
          />
        </div>

        {/* Department Filter */}
        <div className="flex items-center gap-2">
          <select
            value={departmentFilter}
            onChange={(e) => {
              onDepartmentChange(e.target.value);
              // Reset category when department changes if desired, but here we just leave it to backend logic or user
            }}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 min-w-[140px]"
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
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 min-w-[140px]"
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
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 min-w-[140px]"
          >
            <option value="">حالة المخزون (الكل)</option>
            <option value="InStock">متوفر</option>
            <option value="LowStock">منخفض</option>
            <option value="OutOfStock">نفد المخزون</option>
          </select>
        </div>
      </div>

      {/* Right side: Add Button */}
      <HasPermission permission={Permissions.InventoryWrite}>
        <button onClick={onAddClick} className={tokens.btn.primary + " flex items-center gap-2 whitespace-nowrap"}>
          <Plus size={16} />
          إضافة منتج جديد
        </button>
      </HasPermission>
    </div>
  );
}
````

## File: src/features/inventory/components/ProductNotesCard.tsx
````typescript
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
````

## File: src/features/inventory/components/ProductOverviewCard.tsx
````typescript
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
          
          {/* Col 1 */}
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

          {/* Col 2 */}
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
````

## File: src/features/inventory/components/ProductPropertiesCard.tsx
````typescript
import { Tag, Layers } from 'lucide-react';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';

interface ProductPropertiesCardProps {
  product: ProductResponse;
}

export function ProductPropertiesCard({ product }: ProductPropertiesCardProps) {
  if (!product.properties || Object.keys(product.properties).length === 0) {
    return null; // Don't show section if no properties
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
````

## File: src/features/inventory/components/ProductsTable.tsx
````typescript
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
````

## File: src/features/inventory/components/ProductStatusBadge.tsx
````typescript
import { AlertTriangle } from 'lucide-react';

interface ProductStatusBadgeProps {
  quantity: number;
  reorderLevel: number;
}

/**
 * Shows a colored dot/icon + quantity text.
 * Green dot = stock OK, Red warning icon = low stock (below reorder level).
 */
export function ProductStatusBadge({ quantity, reorderLevel }: ProductStatusBadgeProps) {
  const isLow = quantity <= reorderLevel;
  
  if (isLow) {
    return (
      <div className="flex items-center gap-1.5 bg-red-50 text-red-700 px-2.5 py-1 rounded-md border border-red-100 w-fit">
        <AlertTriangle size={14} className="text-red-600" />
        <span className="text-sm font-bold">
          {quantity === 0 ? 'نفد المخزون' : 'مخزون منخفض'}
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
````

## File: src/features/inventory/hooks/useInventory.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { inventoryRepository } from "../api/InventoryApi";
import { ProductFilters, CreateProductRequest } from "../schemas/inventorySchemas";
import { toast } from "sonner";

export const INVENTORY_KEYS = {
  categories: ["categories"] as const,
  departments: (categoryId?: string) => ["departments", categoryId] as const,
  products: (filters: ProductFilters) => ["products", filters] as const,
  productDetails: (id: string) => ["products", id] as const,
  batches: (filters: ProductFilters) => ["batches", filters] as const,
};

// --- Queries ---

export function useCategories(filters: ProductFilters = { pageNumber: 1, pageSize: 100 }) {
  return useQuery({
    queryKey: [...INVENTORY_KEYS.categories, filters],
    queryFn: () => inventoryRepository.getCategories(filters),
  });
}

export function useDepartments(categoryId?: string, filters: ProductFilters = { pageNumber: 1, pageSize: 100 }) {
  return useQuery({
    queryKey: [...INVENTORY_KEYS.departments(categoryId), filters],
    queryFn: () => inventoryRepository.getDepartments(categoryId, filters),
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

export function useProductBatches(filters: ProductFilters) {
  return useQuery({
    queryKey: INVENTORY_KEYS.batches(filters),
    queryFn: () => inventoryRepository.getProductBatches(filters),
  });
}

// --- Mutations ---

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProductRequest) => inventoryRepository.createProduct(data),
    onSuccess: () => {
      toast.success("تم إضافة المنتج بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("حدث خطأ أثناء إضافة المنتج"),
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreateProductRequest }) => 
      inventoryRepository.updateProduct(id, data),
    onSuccess: (_, { id }) => {
      toast.success("تم تعديل المنتج بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.productDetails(id) });
    },
    onError: () => toast.error("حدث خطأ أثناء تعديل المنتج"),
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryRepository.deleteProduct(id),
    onSuccess: () => {
      toast.success("تم حذف المنتج بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("حدث خطأ أثناء حذف المنتج"),
  });
}

// --- Categories Mutations ---

export function useCreateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string; departmentId: string }) => inventoryRepository.createCategory(data),
    onSuccess: () => {
      toast.success("تم إضافة القسم الفرعي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.categories });
    },
    onError: () => toast.error("حدث خطأ أثناء إضافة القسم الفرعي"),
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string; departmentId: string } }) => 
      inventoryRepository.updateCategory(id, data),
    onSuccess: () => {
      toast.success("تم تعديل القسم الفرعي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.categories });
    },
    onError: () => toast.error("حدث خطأ أثناء تعديل القسم الفرعي"),
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryRepository.deleteCategory(id),
    onSuccess: () => {
      toast.success("تم حذف القسم الفرعي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.categories });
    },
    onError: () => toast.error("حدث خطأ أثناء حذف القسم الفرعي"),
  });
}

// --- Departments Mutations ---

export function useCreateDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string }) => inventoryRepository.createDepartment(data),
    onSuccess: () => {
      toast.success("تم إضافة القسم الرئيسي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.departments() });
    },
    onError: () => toast.error("حدث خطأ أثناء إضافة القسم الرئيسي"),
  });
}

export function useUpdateDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string } }) => 
      inventoryRepository.updateDepartment(id, data),
    onSuccess: () => {
      toast.success("تم تعديل القسم الرئيسي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.departments() });
    },
    onError: () => toast.error("حدث خطأ أثناء تعديل القسم الرئيسي"),
  });
}

export function useDeleteDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryRepository.deleteDepartment(id),
    onSuccess: () => {
      toast.success("تم حذف القسم الرئيسي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.departments() });
    },
    onError: () => toast.error("حدث خطأ أثناء حذف القسم الرئيسي"),
  });
}
````

## File: src/features/inventory/pages/CategoriesPage.tsx
````typescript
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

  // Queries
  const { data: departmentsData, isLoading: isLoadingDeps } = useDepartments();
  const { data: categoriesData, isLoading: isLoadingCats } = useCategories();

  // Mutations
  const createDepartment = useCreateDepartment();
  const updateDepartment = useUpdateDepartment();
  const deleteDepartment = useDeleteDepartment();
  
  const createCategory = useCreateCategory();
  const updateCategory = useUpdateCategory();
  const deleteCategory = useDeleteCategory();

  // Group Categories by Department
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

  // Forms
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
      
      {/* Actions */}
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

      {/* Loading State */}
      {(isLoadingDeps || isLoadingCats) && (
        <div className="p-8 text-center text-gray-500">جاري تحميل الأقسام...</div>
      )}

      {/* Departments List */}
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

      {/* Create / Edit Drawer */}
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

      {/* Delete Confirmation Modal */}
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
````

## File: src/features/inventory/pages/ProductDetailsPage.tsx
````typescript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as z from 'zod';
import { useProduct, useUpdateProduct, useCategories } from '@/features/inventory/hooks/useInventory';
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
  const { data: categoriesData } = useCategories();
  const categories = categoriesData?.items || [];

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
      barcode: formData.barcode,
      storageLocation: formData.storageLocation,
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
          categories={categories}
          onSubmit={handleFormSubmit}
          isSubmitting={updateProduct.isPending}
          initialData={product}
        />
      </RightDrawer>
    </div>
  );
}
````

## File: src/features/inventory/pages/ProductsPage.tsx
````typescript
import { useState } from 'react';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { createProductSchema, CreateProductRequest } from '../schemas/inventorySchemas';
import { useProducts, useCategories, useCreateProduct, useDeleteProduct } from '@/features/inventory/hooks/useInventory';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { ConfirmModal } from '@/shared/components/ui/ConfirmModal';
import { ProductFilters } from '@/features/inventory/components/ProductFilters';
import { ProductsTable } from '@/features/inventory/components/ProductsTable';
import { AddProductForm } from '@/features/inventory/components/AddProductForm';
import { tokens } from '@/shared/styles/tokens';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';

/**
 * ProductsPage – composes feature components only.
 * No inline UI, no column definitions, no form markup lives here.
 * Responsible only for: state management + data fetching + event wiring.
 */
export function ProductsPage() {
  const [pageIndex, setPageIndex]         = useState(1);
  const [searchTerm, setSearchTerm]       = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [stockFilter, setStockFilter]       = useState('');
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
  });
  const { data: categoriesData } = useCategories();
  const categories = categoriesData?.items || [];
  const createProduct        = useCreateProduct();
  const deleteProduct        = useDeleteProduct();

  const closeDrawer = () => setIsDrawerOpen(false);

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setPageIndex(1);
  };

  const handleDepartmentChange = (val: string) => {
    setDepartmentFilter(val);
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

      {/* Add product drawer */}
      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title="إضافة منتج جديد"
        footer={drawerFooter}
      >
        <AddProductForm
          categories={categories}
          onSubmit={handleFormSubmit}
          isSubmitting={createProduct.isPending}
        />
      </RightDrawer>
    </div>
  );
}
````

## File: src/features/inventory/schemas/inventorySchemas.ts
````typescript
import { z } from "zod";
import { BaseFilters } from "@/shared/types/pagination";

export interface ProductFilters extends BaseFilters {
  categoryId?: string;
  departmentId?: string;
  stockStatus?: string;
}

// Shared common filters
// Categories
export interface CategoryResponse {
  categoryId: string;
  name: string;
  department: DepartmentSummary;
  productsCount: number;
  createdAt: string;
}

// Departments
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

// Products
export const createProductSchema = z.object({
  barcode: z.string().optional(),
  name: z.string().min(1, "اسم المنتج مطلوب"),
  departmentId: z.string().min(1, "القسم الفرعي مطلوب"),
  categoryId: z.string().min(1, "القسم الرئيسي مطلوب"),
  image: z.instanceof(File, { message: "يجب أن يكون ملفًا" }).optional(),
  minQuantityAlert: z.coerce.number().min(0, "يجب أن تكون 0 أو أكثر"),
  storageLocation: z.string().optional(),
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
  properties: Record<string, string>;
  batches: ProductBatchResponse[];
}
````

## File: src/features/invoices/api/InvoicesApi.ts
````typescript
import { apiClient } from "@/lib/axios";
import { IInvoicesRepository } from "@/core/repositories/IInvoicesRepository";
import { PaginatedList } from "@/shared/types/pagination";
import { 
  CreateSalesInvoiceRequest,  SalesInvoiceResponse, 
  CreatePurchaseInvoiceRequest, 
  PurchaseInvoiceResponse,
  InvoiceFilters
} from "../schemas/invoiceSchemas";
import { CreateSupplierReturnRequest } from "../schemas/returnSchemas";

import { CreateCustomerReturnRequest } from '../schemas/returnSchemas';

export class InvoicesRepository implements IInvoicesRepository {
  // --- Sales ---
  async getSalesInvoices(filters: InvoiceFilters): Promise<PaginatedList<SalesInvoiceResponse>> {
    const { data } = await apiClient.get<PaginatedList<SalesInvoiceResponse>>('/sales-invoices', { params: filters });
    return data;
  }

  async getSalesInvoice(id: string): Promise<SalesInvoiceResponse> {
    const { data } = await apiClient.get<SalesInvoiceResponse>(`/sales-invoices/${id}`);
    return data;
  }

  async createSalesInvoice(reqData: CreateSalesInvoiceRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/sales-invoices', reqData);
    return data;
  }

  // --- Purchases ---
  async getPurchaseInvoices(filters: InvoiceFilters): Promise<PaginatedList<PurchaseInvoiceResponse>> {
    const { data } = await apiClient.get<PaginatedList<PurchaseInvoiceResponse>>('/purchase-invoices', { params: filters });
    return data;
  }

  async getPurchaseInvoice(id: string): Promise<PurchaseInvoiceResponse> {
    const { data } = await apiClient.get<PurchaseInvoiceResponse>(`/purchase-invoices/${id}`);
    return data;
  }

  async createPurchaseInvoice(reqData: CreatePurchaseInvoiceRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/purchase-invoices', reqData);
    return data;
  }

  // --- Returns ---
  async createCustomerReturn(customerId: string, reqData: CreateCustomerReturnRequest): Promise<string> {
    const { data } = await apiClient.post<string>(`/customers/${customerId}/transactions/returns`, reqData);
    return data;
  }

  async createSupplierReturn(reqData: CreateSupplierReturnRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/supplier-transactions/returns', reqData);
    return data;
  }
}

export const invoicesRepository = new InvoicesRepository();
````

## File: src/features/invoices/hooks/useInvoices.ts
````typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { invoicesRepository } from "../api/InvoicesApi";

import { 
  CreateSalesInvoiceRequest, 
  CreatePurchaseInvoiceRequest,
  InvoiceFilters
} from "../schemas/invoiceSchemas";
import { CreateSupplierReturnRequest } from "../schemas/returnSchemas";
import { toast } from "sonner";

export const INVOICE_KEYS = {
  sales: (filters: InvoiceFilters) => ["salesInvoices", filters] as const,
  salesDetails: (id: string) => ["salesInvoices", id] as const,
  
  purchases: (filters: InvoiceFilters) => ["purchaseInvoices", filters] as const,
  purchaseDetails: (id: string) => ["purchaseInvoices", id] as const,
};

// --- Sales Invoices ---

export function useSalesInvoices(filters: InvoiceFilters) {
  return useQuery({
    queryKey: INVOICE_KEYS.sales(filters),
    queryFn: () => invoicesRepository.getSalesInvoices(filters),
  });
}

export function useSalesInvoice(id: string) {
  return useQuery({
    queryKey: INVOICE_KEYS.salesDetails(id),
    queryFn: () => invoicesRepository.getSalesInvoice(id),
    enabled: !!id,
  });
}

export function useCreateSalesInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSalesInvoiceRequest) => invoicesRepository.createSalesInvoice(data),
    onSuccess: () => {
      toast.success("تم إنشاء فاتورة المبيعات بنجاح");
      queryClient.invalidateQueries({ queryKey: ["salesInvoices"] });
    },
    onError: () => toast.error("حدث خطأ أثناء إنشاء فاتورة المبيعات"),
  });
}

// --- Purchase Invoices ---

export function usePurchaseInvoices(filters: InvoiceFilters) {
  return useQuery({
    queryKey: INVOICE_KEYS.purchases(filters),
    queryFn: () => invoicesRepository.getPurchaseInvoices(filters),
  });
}

export function usePurchaseInvoice(id: string) {
  return useQuery({
    queryKey: INVOICE_KEYS.purchaseDetails(id),
    queryFn: () => invoicesRepository.getPurchaseInvoice(id),
    enabled: !!id,
  });
}

export function useCreatePurchaseInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreatePurchaseInvoiceRequest) => invoicesRepository.createPurchaseInvoice(data),
    onSuccess: () => {
      toast.success("تم إنشاء فاتورة المشتريات بنجاح");
      queryClient.invalidateQueries({ queryKey: ["purchaseInvoices"] });
    },
    onError: () => toast.error("حدث خطأ أثناء إنشاء فاتورة المشتريات"),
  });
}

// --- Returns ---

export function useCreateSupplierReturn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSupplierReturnRequest) => invoicesRepository.createSupplierReturn(data),
    onSuccess: () => {
      toast.success("تم تسجيل مرتجع المورد بنجاح");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      // Might want to invalidate batches/inventory as well
      queryClient.invalidateQueries({ queryKey: ["batches"] });
    },
    onError: () => toast.error("حدث خطأ أثناء تسجيل המرتجع"),
  });
}
````

## File: src/features/invoices/schemas/invoiceSchemas.ts
````typescript
import { z } from "zod";
import { BaseFilters } from "@/shared/types/pagination";

export interface InvoiceFilters extends BaseFilters {
  startDate?: string;
  endDate?: string;
  customerId?: string;
  supplierId?: string;
}

// --- Enums ---
export type SaleTypeDto = 1 | 2; // e.g. 1 = Retail, 2 = Wholesale
export type PaymentMethodDto = 1 | 2 | 3; // e.g. 1 = Cash, 2 = Credit/Visa, 3 = Deferred

// --- Sales Invoice ---

export const createSalesInvoiceItemSchema = z.object({
  productId: z.string().min(1, "المنتج مطلوب"),
  batchId: z.string().min(1, "رقم الدفعة مطلوب"),
  quantity: z.number().min(1, "الكمية يجب أن تكون 1 على الأقل"),
  sellingPrice: z.number().min(0),
});
export type CreateSalesInvoiceItemRequest = z.infer<typeof createSalesInvoiceItemSchema>;

export const createSalesInvoiceSchema = z.object({
  customerId: z.string().nullable().optional(),
  customerName: z.string().nullable().optional(),
  customerPhone: z.string().nullable().optional(),
  saleType: z.number(), // SaleTypeDto
  paymentMethod: z.number(), // PaymentMethodDto
  paidAmount: z.number().min(0),
  notes: z.string().nullable().optional(),
  items: z.array(createSalesInvoiceItemSchema).min(1, "يجب إضافة منتج واحد على الأقل"),
});
export type CreateSalesInvoiceRequest = z.infer<typeof createSalesInvoiceSchema>;

export interface SalesInvoiceItemResponse {
  id: string;
  productId: string;
  batchId: string;
  quantity: number;
  unitPrice: number;
  unitCost: number;
  lineTotal: number;
}

export interface CustomerSummary {
  id: string;
  name: string;
  phone?: string;
}

export interface SalesInvoiceResponse {
  id: string;
  invoiceNumber: string;
  customer?: CustomerSummary;
  saleType: SaleTypeDto;
  paymentMethod: PaymentMethodDto;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  notes?: string;
  createdAt: string;
  items: SalesInvoiceItemResponse[];
}

// --- Purchase Invoice ---

export const createPurchaseInvoiceItemSchema = z.object({
  productId: z.string().min(1, "المنتج مطلوب"),
  quantity: z.number().min(1, "الكمية يجب أن تكون 1 على الأقل"),
  unitCost: z.number().min(0, "سعر الشراء غير صالح"),
  wholesalePrice: z.number().min(0),
  retailPrice: z.number().min(0),
});
export type CreatePurchaseInvoiceItemRequest = z.infer<typeof createPurchaseInvoiceItemSchema>;

export const createPurchaseInvoiceSchema = z.object({
  supplierId: z.string().min(1, "المورد مطلوب"),
  paidAmount: z.number().min(0),
  notes: z.string().nullable().optional(),
  items: z.array(createPurchaseInvoiceItemSchema).min(1, "يجب إضافة منتج واحد على الأقل"),
});
export type CreatePurchaseInvoiceRequest = z.infer<typeof createPurchaseInvoiceSchema>;

export interface PurchaseInvoiceItemResponse {
  id: string;
  productId: string;
  quantity: number;
  unitCost: number;
  lineTotal: number;
}

export interface PurchaseInvoiceResponse {
  id: string;
  invoiceNumber: string;
  supplierId: string;
  supplierName: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  notes?: string;
  createdAt: string;
  items: PurchaseInvoiceItemResponse[];
}
````

## File: src/features/invoices/schemas/returnSchemas.ts
````typescript
import * as z from "zod";

export type ReturnReasonDto = 1 | 2 | 3 | 4;

// --- Supplier Return ---

export const createSupplierReturnItemSchema = z.object({
  productId: z.string().min(1, "Ø§Ù„Ù…Ù†ØªØ¬ Ù…Ø·Ù„ÙˆØ¨"),
  batchId: z.string().min(1, "Ø§Ù„Ø¯ÙØ¹Ø© Ù…Ø·Ù„ÙˆØ¨Ø©"),
  quantity: z.number().min(1),
  returnPrice: z.number().min(0),
});
export type CreateSupplierReturnItemRequest = z.infer<typeof createSupplierReturnItemSchema>;

export const createSupplierReturnSchema = z.object({
  supplierId: z.string().min(1, "Ø§Ù„Ù…ÙˆØ±Ø¯ Ù…Ø·Ù„ÙˆØ¨"),
  reason: z.number(), // ReturnReasonDto
  notes: z.string().nullable().optional(),
  items: z.array(createSupplierReturnItemSchema).min(1, "ÙŠØ¬Ø¨ Ø¥Ø¶Ø§ÙØ© Ù…Ù†ØªØ¬ ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„"),
});
export type CreateSupplierReturnRequest = z.infer<typeof createSupplierReturnSchema>;

export interface SupplierReturnItemResponse {
  supplierReturnItemId: string;
  product: { id: string; name: string };
  quantity: number;
  unitCost: number;
  lineTotal: number;
}

export interface SupplierReturnResponse {
  supplierReturnId: string;
  supplier: { id: string; name: string };
  reason: ReturnReasonDto;
  notes?: string;
  totalReturnedAmount: number;
  returnDate: string;
  items: SupplierReturnItemResponse[];
}

// Note: CustomerReturn follows a similar structure in backend.

// --- Customer Return ---
export const returnItemSchema = z.object({
  productId: z.string(),
  batchId: z.string(),
  quantity: z.number().min(1),
  unitPrice: z.number().min(0),
});
export type ReturnItemRequest = z.infer<typeof returnItemSchema>;

export const createCustomerReturnSchema = z.object({
  invoiceId: z.string(),
  reason: z.number(), // ReturnReasonDto
  notes: z.string().optional(),
  isCashRefund: z.boolean(),
  items: z.array(returnItemSchema).min(1),
});
export type CreateCustomerReturnRequest = z.infer<typeof createCustomerReturnSchema>;

export interface ReturnItemResponse {
  id: string;
  productId: string;
  batchId: string;
  quantity: number;
  unitPrice: number;
}

export interface ReturnRecordResponse {
  id: string;
  invoiceId: string;
  isFullInvoiceReturn: boolean;
  reason: ReturnReasonDto;
  notes?: string;
  isCashRefund: boolean;
  totalReturnedAmount: number;
  returnDate: string;
  items: ReturnItemResponse[];
}
````

## File: src/features/purchases/api/PurchaseApi.ts
````typescript
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
````

## File: src/features/purchases/api/SupplierReturnApi.ts
````typescript
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
````

## File: src/features/purchases/components/ProductPickerModal.tsx
````typescript
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
````

## File: src/features/purchases/components/purchase-invoice-form/PurchaseInvoiceHeader.tsx
````typescript
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
````

## File: src/features/purchases/components/purchase-invoice-form/PurchaseInvoiceItemsTable.tsx
````typescript
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
      append({
        productId: product.productId,
        productName: product.name,
        quantity: 1,
        unitCost: 0,
        wholesalePrice: 0,
        retailPrice: 0,
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
                <th className="px-4 py-3 w-32">الإجمالي</th>
                <th className="px-4 py-3 w-16 text-center">حذف</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fields.map((field, index) => {
                const itemQty = watchItems[index]?.quantity || 0;
                const itemCost = watchItems[index]?.unitCost || 0;
                const total = itemQty * itemCost;

                return (
                  <tr key={field.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-bold text-[var(--color-text-main)]">
                      {field.productName}
                      <input type="hidden" {...register(`items.${index}.productId`)} />
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
````

## File: src/features/purchases/components/purchase-invoice-form/PurchaseInvoiceSummary.tsx
````typescript
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
              المبلغ المدفوع (سداد نقدي من الخزينة)
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
````

## File: src/features/purchases/components/PurchaseInvoiceForm.tsx
````typescript
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
````

## File: src/features/purchases/components/PurchasesFilters.tsx
````typescript
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
````

## File: src/features/purchases/components/PurchasesTable.tsx
````typescript
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
````

## File: src/features/purchases/components/SupplierBatchPickerModal.tsx
````typescript
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
````

## File: src/features/purchases/components/SupplierReturnsFilters.tsx
````typescript
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
````

## File: src/features/purchases/components/SupplierReturnsTable.tsx
````typescript
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
````

## File: src/features/purchases/hooks/usePurchases.ts
````typescript
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
      // Invalidate purchases history and supplier details so balances/statements update
      queryClient.invalidateQueries({ queryKey: ["purchases"] });
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: ["products"] }); // Refresh inventory quantities
    },
  });
}
````

## File: src/features/purchases/hooks/useSupplierReturns.ts
````typescript
import { useQuery, useMutation } from '@tanstack/react-query';
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
  return useMutation({
    mutationFn: (data: CreateSupplierReturnRequest) => supplierReturnRepository.createReturn(data),
  });
}
````

## File: src/features/purchases/pages/NewPurchasePage.tsx
````typescript
import { useEffect } from 'react';
import { PurchaseInvoiceForm } from '../components/PurchaseInvoiceForm';
import { useCreatePurchaseInvoice } from '../hooks/usePurchases';
import { toast } from 'sonner';
import { getApiErrorMessage } from '@/shared/utils/apiError';
import { CreatePurchaseInvoiceRequest } from '../schemas/purchaseSchemas';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useNavigate } from 'react-router-dom';

export function NewPurchasePage() {
  const { mutate: createInvoice, isPending } = useCreatePurchaseInvoice();
  const { setTitle, setBackButton } = useHeaderStore();
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("فاتورة مشتريات جديدة");
    setBackButton(true, "/purchases/history");
  }, [setTitle, setBackButton]);

  const handleSubmit = (data: CreatePurchaseInvoiceRequest) => {
    createInvoice(data, {
      onSuccess: () => {
        toast.success("تم حفظ فاتورة المشتريات بنجاح وإضافة الكميات للمخزن!");
        navigate("/purchases/history");
      },
      onError: (err: unknown) => {
        toast.error(getApiErrorMessage(err, "حدث خطأ أثناء حفظ الفاتورة"));
      }
    });
  };

  return (
    <div className="space-y-4 w-full">
      <PurchaseInvoiceForm onSubmit={handleSubmit} isSubmitting={isPending} />
    </div>
  );
}
````

## File: src/features/purchases/pages/NewSupplierReturnPage.tsx
````typescript
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export function NewSupplierReturnPage() {
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();
  const createReturn = useCreateSupplierReturn();
  const { data: suppliersData, isLoading: isLoadingSuppliers } = useSuppliers({ pageSize: 100 });

  const [supplierId, setSupplierId] = useState('');
  const [reason, setReason] = useState<1 | 2 | 3>(1);
  const [notes, setNotes] = useState('');
  const [items, setItems] = useState<CreateSupplierReturnItemRequest[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTitle('مرتجع مورد جديد');
    setBackButton(true, '/purchases/returns');
  }, [setTitle, setBackButton]);

  const handleOpenModal = () => {
    if (!supplierId) {
      setError('يرجى اختيار المورد أولاً قبل إضافة الأصناف');
      return;
    }
    setError(null);
    setIsModalOpen(true);
  };

  const handleSelectBatch = (batch: SupplierBatchResponse) => {
    // Check if already added
    if (items.some(i => i.batchId === batch.batchId)) {
      alert('تم إضافة هذا الصنف مسبقاً');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!supplierId) return setError('يجب اختيار مورد');
    if (items.length === 0) return setError('يجب إضافة صنف واحد على الأقل');
    if (items.some(i => !i.productId || !i.batchId || i.quantity <= 0)) {
      return setError('يرجى استكمال جميع بيانات الأصناف بشكل صحيح (معرف المنتج ومعرف الدفعة والكمية)');
    }

    createReturn.mutate(
      { supplierId, reason, notes, items },
      {
        onSuccess: () => navigate('/purchases/returns'),
        onError: (err: unknown) => setError(getApiErrorMessage(err, 'حدث خطأ أثناء حفظ المرتجع'))
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
        {/* Main Details */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">بيانات المرتجع الأساسية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={`${tokens.font.label} block mb-2`}>المورد <span className="text-red-500">*</span></label>
              <select
                value={supplierId}
                onChange={(e) => setSupplierId(e.target.value)}
                className={tokens.input}
                disabled={isLoadingSuppliers}
              >
                <option value="">-- اختر المورد --</option>
                {suppliersData?.items.map(s => (
                  <option key={s.supplierId} value={s.supplierId}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`${tokens.font.label} block mb-2`}>سبب الإرجاع <span className="text-red-500">*</span></label>
              <select
                value={reason}
                onChange={(e) => setReason(Number(e.target.value) as 1 | 2 | 3)}
                className={tokens.input}
              >
                <option value={1}>عيب أو خلل في المنتج</option>
                <option value={2}>تغيير رأي</option>
                <option value={3}>سبب آخر</option>
              </select>
            </div>
          </div>

          <div>
            <label className={`${tokens.font.label} block mb-2`}>ملاحظات إضافية</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={tokens.input}
              rows={2}
              placeholder="أي تفاصيل أخرى حول الإرجاع..."
            />
          </div>
        </div>

        {/* Items */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h2 className="text-lg font-bold text-gray-800">الأصناف المرتجعة <span className="text-red-500">*</span></h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleOpenModal}
                className="text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors"
              >
                <ShoppingCart size={16} /> اختيار صنف من المورد
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
                  title="حذف الصنف"
                >
                  <Trash2 size={16} />
                </button>

                <div className="w-full md:w-1/3">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">معرف المنتج (ID)</label>
                  <input
                    type="text"
                    value={item.productId}
                    readOnly
                    className={tokens.input + ' py-2 text-sm bg-gray-100 text-gray-500 cursor-not-allowed'}
                    placeholder="Product ID..."
                  />
                </div>
                
                <div className="w-full md:w-1/3">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">معرف الدفعة (Batch ID)</label>
                  <input
                    type="text"
                    value={item.batchId}
                    readOnly
                    className={tokens.input + ' py-2 text-sm bg-gray-100 text-gray-500 cursor-not-allowed'}
                    placeholder="Batch ID..."
                  />
                </div>

                <div className="w-1/2 md:w-24">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">الكمية</label>
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
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">سعر الإرجاع</label>
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
                <p className="text-gray-500">لم يتم إضافة أي أصناف للمرتجع.</p>
                <p className="text-sm text-gray-400 mt-1">اضغط على زر الإضافة لاختيار الأصناف.</p>
              </div>
            )}
          </div>
        </div>
      </form>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:right-64 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] flex justify-between items-center z-10">
        <div>
          <p className="text-sm text-gray-500 font-semibold">إجمالي المرتجع</p>
          <p className="text-xl font-bold text-blue-700">{formatCurrency(totalAmount)}</p>
        </div>
        
        <div className="flex gap-3">
          <button type="button" onClick={() => navigate('/purchases/returns')} className={tokens.btn.secondary}>
            إلغاء
          </button>
          <button 
            type="submit" 
            form="new-return-form" 
            disabled={createReturn.isPending}
            className={`${tokens.btn.primary} disabled:opacity-50 min-w-[120px]`}
          >
            {createReturn.isPending ? 'جاري الحفظ...' : 'حفظ المرتجع'}
          </button>
        </div>
      </div>

      <SupplierBatchPickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        supplierId={supplierId}
        onSelectBatch={handleSelectBatch}
      />
    </div>
  );
}
````

## File: src/features/purchases/pages/PurchaseInvoiceDetailsPage.tsx
````typescript
import { useParams, useNavigate } from 'react-router-dom';
import { usePurchaseInvoice } from '../hooks/usePurchases';
import { Printer, AlertCircle, Package, ShoppingCart, CheckCircle, Clock, Building2, ChevronLeft } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useEffect } from 'react';

export function PurchaseInvoiceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();

  const { data: invoice, isLoading, error } = usePurchaseInvoice(id!);

  useEffect(() => {
    if (invoice) {
      setTitle(`فاتورة مشتريات #${invoice.invoiceNumber}`);
    } else {
      setTitle('تفاصيل الفاتورة');
    }
    setBackButton(true, "/purchases/history");
  }, [invoice, setTitle, setBackButton]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-gray-500">جاري تحميل تفاصيل الفاتورة...</p>
        </div>
      </div>
    );
  }

  if (error || !invoice) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <AlertCircle size={48} className="text-red-400" />
        <p className="text-gray-500">الفاتورة غير موجودة أو حدث خطأ أثناء التحميل.</p>
        <button className={tokens.btn.primary} onClick={() => navigate('/purchases/history')}>
          العودة لسجل المشتريات
        </button>
      </div>
    );
  }

  const isPaid = invoice.remainingAmount <= 0;

  return (
    <div className="space-y-5 max-w-5xl mx-auto">

      {/* Top bar: date + status + print */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-gray-500 text-sm">
            {new Intl.DateTimeFormat('ar-EG', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(invoice.invoiceDate))}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
            isPaid ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
          }`}>
            {isPaid
              ? <><CheckCircle size={13} /> مدفوعة بالكامل</>
              : <><Clock size={13} /> متبقي دفع</>
            }
          </span>
        </div>
        <button
          className={`${tokens.btn.secondary} flex items-center gap-2`}
          onClick={() => window.print()}
        >
          <Printer size={16} />
          <span>طباعة</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Supplier - clickable */}
        <div
          className={`${tokens.card} p-4 md:col-span-1 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group`}
          onClick={() => invoice.supplier?.id && navigate(`/contacts/suppliers/${invoice.supplier.id}`)}
        >
          <p className="text-xs text-gray-500 mb-2">المورد</p>
          <div className="flex items-center gap-3">
            {/* Avatar */}
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

        {/* Total */}
        <div className={`${tokens.card} p-4`}>
          <p className="text-xs text-gray-500 mb-1">إجمالي الفاتورة</p>
          <p className="text-base font-bold text-gray-900">{formatCurrency(invoice.totalAmount)}</p>
        </div>

        {/* Paid */}
        <div className={`${tokens.card} p-4`}>
          <p className="text-xs text-gray-500 mb-1">المبلغ المدفوع</p>
          <p className="text-base font-bold text-green-600">{formatCurrency(invoice.paidAmount)}</p>
        </div>

        {/* Remaining */}
        <div className={`${tokens.card} p-4`}>
          <p className="text-xs text-gray-500 mb-1">المتبقي للمورد</p>
          <p className={`text-base font-bold ${invoice.remainingAmount > 0 ? 'text-red-600' : 'text-gray-400'}`}>
            {formatCurrency(invoice.remainingAmount)}
          </p>
        </div>
      </div>

      {/* Notes */}
      {invoice.notes && (
        <div className={`${tokens.card} p-4 border-r-4 border-blue-400 bg-blue-50`}>
          <p className="text-xs text-blue-600 font-semibold mb-1">ملاحظات الفاتورة</p>
          <p className="text-gray-700 text-sm">{invoice.notes}</p>
        </div>
      )}

      {/* Items Table */}
      <div className={tokens.card}>
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-800">
            الأصناف
            <span className="mr-2 text-sm font-normal text-gray-400">({invoice.items?.length || 0} صنف)</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide border-b border-gray-100">
                <th className="px-5 py-3 font-semibold">الصنف</th>
                <th className="px-5 py-3 font-semibold text-center">الكمية</th>
                <th className="px-5 py-3 font-semibold text-center">سعر الشراء (للوحدة)</th>
                <th className="px-5 py-3 font-semibold text-left">الإجمالي</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {invoice.items?.map((item, index) => (
                <tr key={item.purchaseInvoiceItemId ?? index} className="hover:bg-gray-50 transition-colors">
                  {/* Product info */}
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
                        <p className="font-semibold text-gray-800">{item.product?.name || '—'}</p>
                        {item.product?.barcode && (
                          <p className="text-xs text-gray-400 dir-ltr mt-0.5">{item.product.barcode}</p>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Quantity */}
                  <td className="px-5 py-4 text-center">
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 font-bold text-sm px-2.5 py-0.5 rounded-full">
                      <ShoppingCart size={12} />
                      {item.quantity}
                    </span>
                  </td>

                  {/* Unit cost (purchase price) */}
                  <td className="px-5 py-4 text-center text-gray-700 font-medium">
                    {formatCurrency(item.unitCost)}
                  </td>

                  {/* Line total */}
                  <td className="px-5 py-4 text-left font-bold text-gray-900">
                    {formatCurrency(item.lineTotal)}
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Footer row */}
            <tfoot className="bg-gray-50 border-t border-gray-200">
              <tr>
                <td colSpan={3} className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  الإجمالي الكلي للفاتورة
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
````

## File: src/features/purchases/pages/PurchasesHistoryPage.tsx
````typescript
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
````

## File: src/features/purchases/pages/SupplierReturnDetailsPage.tsx
````typescript
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useSupplierReturn } from '../hooks/useSupplierReturns';
import { AlertCircle, Building2, ChevronLeft, Package, Clock } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { RETURN_REASON_LABELS, RETURN_REASON_COLORS } from '../schemas/supplierReturnSchemas';

export function SupplierReturnDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();

  const { data: returnData, isLoading, error } = useSupplierReturn(id!);

  useEffect(() => {
    if (returnData) {
      setTitle(`مرتجع #${returnData.supplierReturnId.substring(0, 8)}`);
    } else {
      setTitle('تفاصيل المرتجع');
    }
    setBackButton(true, '/purchases/returns');
  }, [returnData, setTitle, setBackButton]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-gray-500">جاري تحميل تفاصيل المرتجع...</p>
        </div>
      </div>
    );
  }

  if (error || !returnData) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <AlertCircle size={48} className="text-red-400" />
        <p className="text-gray-500">المرتجع غير موجود أو حدث خطأ أثناء التحميل.</p>
        <button className={tokens.btn.primary} onClick={() => navigate('/purchases/returns')}>
          العودة لسجل المرتجعات
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5 w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm flex items-center gap-1.5">
            <Clock size={16} />
            {new Intl.DateTimeFormat('ar-EG', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(returnData.returnDate))}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${RETURN_REASON_COLORS[returnData.reason] || RETURN_REASON_COLORS[3]}`}>
            {RETURN_REASON_LABELS[returnData.reason] || 'سبب غير معروف'}
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Supplier */}
        <div
          className={`${tokens.card} p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group`}
          onClick={() => returnData.supplier?.id && navigate(`/contacts/suppliers/${returnData.supplier.id}`)}
        >
          <p className="text-xs text-gray-500 mb-2">المورد</p>
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

        {/* Total Amount */}
        <div className={`${tokens.card} p-4 flex flex-col justify-center`}>
          <p className="text-xs text-gray-500 mb-1">إجمالي المرتجع</p>
          <p className="text-xl font-bold text-gray-900">{formatCurrency(returnData.totalReturnedAmount)}</p>
        </div>
      </div>

      {/* Notes */}
      {returnData.notes && (
        <div className={`${tokens.card} p-4 border-r-4 border-blue-400 bg-blue-50`}>
          <p className="text-xs text-blue-600 font-semibold mb-1">ملاحظات المرتجع</p>
          <p className="text-gray-700 text-sm">{returnData.notes}</p>
        </div>
      )}

      {/* Items Table */}
      <div className={tokens.card}>
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800">
            الأصناف المرتجعة
            <span className="mr-2 text-sm font-normal text-gray-400">({returnData.items?.length || 0} صنف)</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide border-b border-gray-100">
                <th className="px-5 py-3 font-semibold">الصنف</th>
                <th className="px-5 py-3 font-semibold text-center">الكمية</th>
                <th className="px-5 py-3 font-semibold text-center">سعر الإرجاع (للوحدة)</th>
                <th className="px-5 py-3 font-semibold text-left">الإجمالي</th>
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
                        <p className="font-semibold text-gray-800">{item.product?.name || '—'}</p>
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
                  الإجمالي الكلي
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
````

## File: src/features/purchases/pages/SupplierReturnsPage.tsx
````typescript
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
````

## File: src/features/purchases/schemas/__tests__/purchaseSchemas.test.ts
````typescript
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
````

## File: src/features/purchases/schemas/purchaseSchemas.ts
````typescript
import * as z from 'zod';
import { BaseFilters } from '@/shared/types/pagination';

// Requests
export const purchaseInvoiceItemSchema = z.object({
  productId: z.string().min(1, "يجب اختيار منتج"),
  productName: z.string().optional(), // Frontend only helper
  quantity: z.number().min(1, "الكمية يجب أن تكون أكبر من صفر"),
  unitCost: z.number().min(0, "تكلفة الوحدة يجب أن تكون 0 أو أكثر"),
  wholesalePrice: z.number().min(0, "سعر الجملة غير صالح"),
  retailPrice: z.number().min(0, "سعر التجزئة غير صالح"),
});

export type CreatePurchaseInvoiceItemRequest = z.infer<typeof purchaseInvoiceItemSchema>;

export const createPurchaseInvoiceSchema = z.object({
  supplierId: z.string().min(1, "يجب اختيار مورد"),
  paidAmount: z.number().min(0, "المبلغ المدفوع غير صالح"),
  notes: z.string().optional(),
  items: z.array(purchaseInvoiceItemSchema).min(1, "يجب إضافة منتج واحد على الأقل"),
});

export type CreatePurchaseInvoiceRequest = z.infer<typeof createPurchaseInvoiceSchema>;

// Responses
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
````

## File: src/features/purchases/schemas/supplierReturnSchemas.ts
````typescript
import * as z from 'zod';
import { BaseFilters } from '@/shared/types/pagination';

// Return reason labels and colors
export const RETURN_REASON_LABELS: Record<number, string> = {
  1: 'عيب أو خلل في المنتج',
  2: 'تغيير رأي',
  3: 'سبب آخر',
};

export const RETURN_REASON_COLORS: Record<number, string> = {
  1: 'bg-red-50 text-red-700',
  2: 'bg-amber-50 text-amber-700',
  3: 'bg-gray-100 text-gray-600',
};

// Response types
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

// Request schema
export const createSupplierReturnItemSchema = z.object({
  productId: z.string().min(1, 'يجب اختيار منتج'),
  batchId: z.string().min(1, 'يجب تحديد الدفعة'),
  quantity: z.number().min(1, 'الكمية يجب أن تكون 1 على الأقل'),
  returnPrice: z.number().min(0, 'سعر الإرجاع غير صالح'),
});

export type CreateSupplierReturnItemRequest = z.infer<typeof createSupplierReturnItemSchema>;

export const createSupplierReturnSchema = z.object({
  supplierId: z.string().min(1, 'يجب اختيار مورد'),
  reason: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  notes: z.string().optional(),
  items: z.array(createSupplierReturnItemSchema).min(1, 'يجب إضافة صنف واحد على الأقل'),
});

export type CreateSupplierReturnRequest = z.infer<typeof createSupplierReturnSchema>;

// Filters
export interface SupplierReturnFilters extends BaseFilters {
  supplierId?: string;
}
````

## File: src/features/sales/api/salesApi.ts
````typescript
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
````

## File: src/features/sales/components/BatchSelectionModal.tsx
````typescript
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
````

## File: src/features/sales/components/CheckoutModal.tsx
````typescript
import { useState, useEffect } from 'react';
import { User, Phone, Banknote } from 'lucide-react';
import { PaymentMethod } from '../schemas/salesSchemas';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { BaseModal } from '@/shared/components/ui/BaseModal';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  paymentMethod: PaymentMethod | null;
  onConfirm: (customerName: string, customerPhone: string, paidAmount: number) => void;
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
  const [paidAmount, setPaidAmount] = useState<number | string>(totalAmount);
  const [error, setError] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const paid = Number(paidAmount);
    if (isNaN(paid) || paid < 0) {
      setError('المبلغ المدفوع غير صحيح');
      return;
    }

    if (isCredit) {
      if (!customerName.trim() || !customerPhone.trim()) {
        setError('يجب إدخال اسم العميل ورقم الهاتف في حالة الدفع الآجل');
        return;
      }
      if (paid >= totalAmount) {
        setError('لا يمكن أن يكون المبلغ المدفوع أكبر من أو يساوي الإجمالي في حالة الدفع الآجل');
        return;
      }
    } else if (paid < totalAmount) {
      setError('في حالة الدفع النقدي يجب دفع المبلغ كاملاً');
      return;
    }

    onConfirm(customerName, customerPhone, isCredit ? paid : totalAmount);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={isCredit ? 'إتمام الدفع الآجل' : 'إتمام الدفع النقدي'}
      size="md"
      zIndexClassName="z-[60]"
      headerClassName={isCredit ? 'bg-amber-50' : 'bg-emerald-50'}
    >
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="bg-[var(--color-page-bg)] p-4 rounded-xl flex items-center justify-between border border-[var(--color-border)]">
          <span className="text-[var(--color-text-muted)] font-semibold">الإجمالي المطلوب:</span>
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
              <Phone size={16} /> رقم الهاتف
            </span>
            {isCredit && <span className="text-[var(--color-danger)]">*</span>}
          </label>
          <input
            type="text"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            placeholder="مثال: 010xxxxxxxx"
            className={tokens.input + ' py-3 text-left'}
            required={isCredit}
            dir="ltr"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <User size={16} /> اسم العميل
            </span>
            {isCredit && <span className="text-[var(--color-danger)]">*</span>}
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="مثال: أحمد محمد"
            className={tokens.input + ' py-3'}
            required={isCredit}
          />
        </div>

        {isCredit && (
          <div className="pt-2 border-t border-[var(--color-border)]">
            <label className="text-sm font-semibold text-[var(--color-text-main)] mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Banknote size={16} /> المبلغ المدفوع الآن
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
                المتبقي كمديونية: {formatCurrency(totalAmount - Number(paidAmount))}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 rounded-xl font-bold text-white text-lg disabled:opacity-70 ${
            isCredit ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'
          }`}
        >
          {isSubmitting ? 'جاري التأكيد...' : 'تأكيد وحفظ الفاتورة'}
        </button>
      </form>
    </BaseModal>
  );
}
````

## File: src/features/sales/components/InvoiceDetailsModal.tsx
````typescript
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
      <div className="p-6">
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
                              (تم إرجاع {item.returnedQuantity})
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
                          لا توجد منتجات
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
````

## File: src/features/sales/components/PosCart.tsx
````typescript
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
  const total = subtotal; // No tax calculation implemented yet

  const totalQuantity = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] z-20 relative">
      
      {/* Header */}
      <div className="p-6 pb-4 flex items-start justify-between shrink-0 bg-[#f8f9fa]">
        
        <div className="flex flex-col items-end">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-1">
            سلة المشتريات
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </h2>
          <div className="text-sm font-semibold flex items-center gap-1.5" dir="rtl">
            <span className="text-[#0f8e4c]">الكمية {totalQuantity}</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#0f8e4c]">{items.length} أصناف</span>
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

      {/* Cart Items List */}
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4 custom-scrollbar bg-[#f8f9fa]">
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <p className="font-semibold text-lg">السلة فارغة</p>
          </div>
        ) : (
          items.map(item => {
            const imageSrc = item.imageUrl ? (item.imageUrl.startsWith('http') ? item.imageUrl : `http://localhost:5033${item.imageUrl}`) : null;
            return (
              <div key={item.id} className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex gap-4 relative group">
                
                {/* Image (Right) */}
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 p-1">
                  {imageSrc ? (
                    <img src={imageSrc} alt={item.productName} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                  ) : (
                    <Package size={24} className="text-gray-300" />
                  )}
                </div>

                {/* Info (Middle) */}
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

                {/* Actions & Price (Left) */}
                <div className="flex flex-col items-end justify-between shrink-0 pl-1">
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="w-9 h-9 flex items-center justify-center bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors shadow-sm"
                  >
                    <Undo2 size={16} />
                  </button>
                  <div className="font-bold text-[#0f8e4c] text-base mt-auto">
                    {fmt(item.price * item.quantity)} <span className="text-xs font-normal">ج.م</span>
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Totals & Actions */}
      <div className="p-6 bg-[#f8f9fa] shrink-0 mt-2">
        <div className="flex items-center justify-between text-gray-900 font-bold mb-4">
          <span className="text-sm">المجموع الفرعي</span>
          <span className="text-sm">{fmt(subtotal)} <span className="text-xs font-normal">ج.م</span></span>
        </div>
        
        <div className="flex items-center justify-between text-xl font-bold text-gray-900 mb-6">
          <span className="text-xl">الإجمالي</span>
          <span className="text-[26px] text-[#0f8e4c]">{fmt(total)} <span className="text-sm font-normal">ج.م</span></span>
        </div>

        <div className="flex flex-col gap-4">
          <button
            disabled={items.length === 0}
            onClick={() => onCheckout(PaymentMethod.Cash)}
            className="w-full py-4 rounded-xl font-bold text-white bg-[#0f8e4c] hover:bg-[#0c7a40] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm text-lg"
          >
            <Wallet size={22} />
            دفع كاش
          </button>
          <button
            disabled={items.length === 0}
            onClick={() => onCheckout(PaymentMethod.Deferred)}
            className="w-full py-4 rounded-xl font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-sm"
          >
            <CreditCard size={22} className="text-gray-500" />
            دفع آجل
          </button>
        </div>
      </div>

    </div>
  );
}
````

## File: src/features/sales/components/PosProductGrid.tsx
````typescript
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
  const { data: categoriesData } = useCategories({ departmentId: selectedDepartmentId || undefined, pageNumber: 1, pageSize: 50 });
  const departments = departmentsData?.items || [];
  const categories = categoriesData?.items || [];

  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-100">
      {/* Top Bar: Search and Filters */}
      <div className="p-5 bg-white z-10 flex flex-col gap-5 border-b border-gray-100">
        
        {/* Search & Department row */}
        <div className="flex gap-4 items-center">
          {/* Search (Right side in RTL) */}
          <div className="relative flex-1 h-12">
            <input
              type="text"
              placeholder="ابحث عن منتج بالاسم أو امسح الباركود"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-full pl-12 pr-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-700 text-sm transition-all"
              autoFocus
            />
            {/* Search Icon on the left side of input in RTL */}
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Department Select (Left side in RTL) */}
          <div className="relative w-[300px] h-12">
            <select
              value={selectedDepartmentId}
              onChange={(e) => {
                setSelectedDepartmentId(e.target.value);
                setSelectedCategoryId(''); // Reset category when department changes
              }}
              className="w-full h-full pl-4 pr-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-700 text-sm transition-all appearance-none cursor-pointer"
            >
              <option value="">اختر القسم الرئيسي</option>
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
        
        {/* Categories Chips — only show when a department is selected */}
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
              الكل
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
              <p className="text-xl font-semibold">لا توجد منتجات</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 h-full content-start">
              {products.map(product => {
                const hasStock = product.totalQuantity > 0;
                const isLowStock = product.isLowStock;
                
                let statusLabel = 'متوفر';
                let statusClass = 'bg-[#e6f4ed] text-[#0f8e4c]'; // Light green bg, dark green text
                if (!hasStock) {
                  statusLabel = 'نفد المخزون';
                  statusClass = 'bg-[#fce8e6] text-[#c5221f]'; // Light red bg, dark red text
                } else if (isLowStock) {
                  statusLabel = 'مخزون منخفض';
                  statusClass = 'bg-[#fef7e0] text-[#ea8600]'; // Light orange bg, dark orange text
                }

                const imageSrc = product.imageUrl ? (product.imageUrl.startsWith('http') ? product.imageUrl : `http://localhost:5033${product.imageUrl}`) : null;

                return (
                  <div
                    key={product.productId}
                    className="bg-white rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden flex flex-col p-3 relative"
                  >
                    <span className={`absolute top-3 right-3 z-10 text-[10px] font-bold px-2 py-0.5 rounded-md ${statusClass}`}>
                      {statusLabel}
                    </span>

                    <div className="h-32 flex items-center justify-center mb-2 mt-2">
                      {imageSrc ? (
                        <img src={imageSrc} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                      ) : (
                        <Package size={48} className="text-gray-200" />
                      )}
                    </div>
                    
                    <div className="flex flex-col flex-1 items-center text-center">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-1 leading-snug">
                        {product.name}
                      </h3>
                      
                      <p className="text-[11px] text-gray-400 line-clamp-1 mb-2">
                        {product.properties && Object.keys(product.properties).length > 0 
                          ? Object.values(product.properties).join(' - ') 
                          : product.category.name}
                      </p>
                      
                      <div className="mt-auto mb-3 font-bold text-[12px] text-[#0f8e4c]">
                        المخزون: {product.totalQuantity}
                      </div>

                      <button
                        onClick={() => hasStock && onProductClick(product)}
                        disabled={!hasStock}
                        className={`w-full py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                          hasStock 
                            ? 'bg-[#0f8e4c] hover:bg-[#0c7a40] text-white shadow-sm' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart size={14} />
                        إضافة
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Pagination */}
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
              صفحة {pageNumber} من {totalPages}
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
````

## File: src/features/sales/hooks/usePosCart.ts
````typescript
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
````

## File: src/features/sales/hooks/useSales.ts
````typescript
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
````

## File: src/features/sales/pages/NewSalesReturnPage.tsx
````typescript
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSalesInvoiceDetails, useCreateSalesReturn } from '../hooks/useSales';
import { ReturnReason } from '../schemas/salesSchemas';
import { formatCurrency } from '@/shared/utils/currency';
import { Search, AlertCircle, Save } from 'lucide-react';
import { toast } from 'sonner';

export const NewSalesReturnPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialInvoiceId = searchParams.get('invoiceId') || '';

  const [invoiceId, setInvoiceId] = useState(initialInvoiceId);
  const [searchId, setSearchId] = useState(initialInvoiceId);
  
  const { data: invoice, isLoading, error: fetchError } = useSalesInvoiceDetails(searchId);
  const createReturn = useCreateSalesReturn();

  const [returnItems, setReturnItems] = useState<{ id: string; returnQty: number }[]>([]);
  const [reason, setReason] = useState<ReturnReason>(ReturnReason.CustomerChangedMind);
  const [isCashRefund, setIsCashRefund] = useState(false);
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
      toast.error('يجب تحديد كمية لمنتج واحد على الأقل للإرجاع');
      return;
    }

    try {
      await createReturn.mutateAsync({
        invoiceId: invoice.id,
        reason,
        notes,
        isCashRefund,
        items: itemsToReturn
      });
      navigate('/sales/returns');
    } catch (err) {
      // error handled in mutation
    }
  };

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">إضافة مرتجع مبيعات جديد</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="أدخل رقم الفاتورة للبحث..."
              value={invoiceId}
              onChange={(e) => setInvoiceId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <button 
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            بحث
          </button>
        </div>

        {isLoading && <div className="text-center py-4">جاري البحث...</div>}
        {fetchError && <div className="text-red-500 text-center py-4 flex items-center justify-center gap-2"><AlertCircle size={20} /> الفاتورة غير موجودة</div>}

        {invoice && (
          <div className="space-y-6 mt-6 border-t pt-6">
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
                              onChange={(e) => handleReturnQtyChange(item.id, maxAllowed, parseInt(e.target.value) || 0)}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">سبب الإرجاع</label>
                <select 
                  value={reason} 
                  onChange={(e) => setReason(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value={ReturnReason.CustomerChangedMind}>تغيير رأي العميل</option>
                  <option value={ReturnReason.Defective}>تالف / عيب صناعة</option>
                  <option value={ReturnReason.WrongItem}>منتج خطأ</option>
                  <option value={ReturnReason.Other}>أخرى</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">طريقة الاسترداد</label>
                <select 
                  value={isCashRefund ? 'cash' : 'debt'} 
                  onChange={(e) => setIsCashRefund(e.target.value === 'cash')}
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
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="ملاحظات إضافية..."
                />
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t">
              <button 
                onClick={handleSubmit}
                disabled={createReturn.isPending}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                <Save size={20} />
                <span>حفظ المرتجع</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
````

## File: src/features/sales/pages/PosPage.tsx
````typescript
import { useState, useEffect } from 'react';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useProducts } from '@/features/inventory/hooks/useInventory';
import { ProductResponse, ProductBatchResponse } from '@/features/inventory/schemas/inventorySchemas';
import { PosProductGrid } from '../components/PosProductGrid';
import { PosCart } from '../components/PosCart';
import { BatchSelectionModal } from '../components/BatchSelectionModal';
import { CheckoutModal } from '../components/CheckoutModal';
import { useCreateSalesInvoice } from '../hooks/useSales';
import { usePosCart } from '../hooks/usePosCart';
import { SaleType, PaymentMethod } from '../schemas/salesSchemas';

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

  const { data: productsData, isLoading: isLoadingProducts } = useProducts({
    pageNumber: pageNumber,
    pageSize: 8,
    searchValue: searchTerm || undefined,
    categoryId: selectedCategoryId || undefined,
    departmentId: selectedDepartmentId || undefined,
  });

  const createInvoiceMutation = useCreateSalesInvoice();

  useEffect(() => {
    setPageNumber(1);
  }, [searchTerm, selectedDepartmentId, selectedCategoryId]);

  useEffect(() => {
    setTitle('نقطة البيع (POS)');
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
      productName: selectedProduct.name || 'منتج غير معروف',
      batchId: batch.batchId,
      batchName: batch.supplierName || 'شركة غير معروفة',
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

  const handleConfirmCheckout = (customerName: string, customerPhone: string, paidAmount: number) => {
    if (!checkoutMethod) return;

    createInvoiceMutation.mutate({
      customerName: customerName.trim() || undefined,
      customerPhone: customerPhone.trim() || undefined,
      saleType: SaleType.Retail,
      paymentMethod: checkoutMethod,
      paidAmount: paidAmount,
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

  return (
    <div className="-m-6 w-[calc(100%+3rem)] h-[calc(100vh-theme(spacing.16))] bg-gray-50 overflow-hidden flex">
      <div className="flex-1 overflow-hidden relative">
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

      <div className="w-[380px] shrink-0 h-full border-r border-gray-200">
        <PosCart
          items={cart.items}
          onUpdateQuantity={cart.updateQuantity}
          onRemoveItem={cart.removeItem}
          onClearCart={cart.clear}
          onCheckout={handleCheckoutClick}
        />
      </div>

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
````

## File: src/features/sales/pages/SalesHistoryPage.tsx
````typescript
import { useState, useEffect } from 'react';
import { useSalesInvoices } from '../hooks/useSales';
import { DataTable } from '@/shared/components/ui/DataTable';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { Search, CornerUpLeft } from 'lucide-react';
import { InvoiceDetailsModal } from '../components/InvoiceDetailsModal';
import { SaleType, PaymentMethod, SalesInvoiceResponse } from '../schemas/salesSchemas';
import { useNavigate } from 'react-router-dom';

export function SalesHistoryPage() {
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 10;
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);
  const navigate = useNavigate();

  // Simple debounce for search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchValue);
      setPageIndex(1);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchValue]);

  const { data, isLoading } = useSalesInvoices({
    pageNumber: pageIndex,
    pageSize,
    searchValue: debouncedSearch,
  });

  const columns = [
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
            navigate(`/sales/returns/new?invoiceId=${row.invoiceNumber}`);
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

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Filters and Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Search Bar */}
        <div className="p-5 border-b border-gray-100 bg-gray-50 flex items-center gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="ابحث برقم الفاتورة أو اسم العميل..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Data Table */}
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

      {/* Invoice Details Modal */}
      <InvoiceDetailsModal
        isOpen={!!selectedInvoiceId}
        onClose={() => setSelectedInvoiceId(null)}
        invoiceId={selectedInvoiceId}
      />
    </div>
  );
}
````

## File: src/features/sales/pages/SalesReturnsPage.tsx
````typescript
import { useState } from 'react';
import { useSalesReturns } from '../hooks/useSales';
import { DataTable } from '@/shared/components/ui/DataTable';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { ReturnReason, SalesReturnResponse } from '../schemas/salesSchemas';
import { Search, Plus } from 'lucide-react';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useNavigate } from 'react-router-dom';

const getReasonLabel = (reason: ReturnReason) => {
  switch (reason) {
    case ReturnReason.Defective: return 'تالف / عيب صناعة';
    case ReturnReason.WrongItem: return 'منتج خطأ';
    case ReturnReason.CustomerChangedMind: return 'تغيير رأي العميل';
    case ReturnReason.Other: return 'أخرى';
    default: return 'غير معروف';
  }
};

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

  const columns = [
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

  // Client side date filtering if backend doesn't support it directly in RequestFilters
  const filteredData = data?.items?.filter((item) => {
    if (!dateFilter) return true;
    return item.returnDate.startsWith(dateFilter);
  }) || [];

  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-end items-center">
        <button
          onClick={() => navigate('/sales/returns/new')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>إضافة مرتجع جديد</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="البحث برقم الفاتورة..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="w-48">
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

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
````

## File: src/features/sales/schemas/salesSchemas.ts
````typescript
export enum SaleType {
  Wholesale = 1,
  Retail = 2,
}

export enum PaymentMethod {
  Cash = 1,
  Deferred = 2, // Credit/آجل
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
  Defective = 1,
  WrongItem = 2,
  CustomerChangedMind = 3,
  Other = 4
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
````

## File: src/features/sales/utils/__tests__/cartLogic.test.ts
````typescript
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
````

## File: src/features/sales/utils/__tests__/posUtils.test.ts
````typescript
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
````

## File: src/features/sales/utils/cartLogic.ts
````typescript
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
````

## File: src/features/sales/utils/posUtils.ts
````typescript
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
````

## File: src/features/suppliers/api/SupplierApi.ts
````typescript
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
};
````

## File: src/features/suppliers/components/SupplierFilters.tsx
````typescript
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
      {/* Left side: Search */}
      <div className="flex items-center gap-3 flex-1 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-[350px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="بحث بالاسم أو الهاتف..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50"
          />
        </div>
      </div>

      {/* Right side: Add Button */}
      <button onClick={onAddClick} className={tokens.btn.primary + " flex items-center gap-2 whitespace-nowrap"}>
        <Plus size={16} />
        إضافة مورد جديد
      </button>
    </div>
  );
}
````

## File: src/features/suppliers/components/SupplierForm.tsx
````typescript
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
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      {/* Type */}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>نوع التوريد</label>
        <input
          {...register('type')}
          type="text"
          placeholder="مثال: إلكترونيات، شاشات..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>رقم الهاتف</label>
        <input
          {...register('phone')}
          type="text"
          dir="ltr"
          placeholder="01xxxxxxxxx"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-left"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      {/* Address */}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>العنوان</label>
        <textarea
          {...register('address')}
          placeholder="عنوان المورد بالتفصيل..."
          rows={3}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
      </div>

    </form>
  );
}
````

## File: src/features/suppliers/components/SupplierOverviewCard.tsx
````typescript
import { formatCurrency } from '@/shared/utils/currency';
import { tokens } from '@/shared/styles/tokens';
import { SupplierResponse } from '../schemas/supplierSchemas';
import { Phone, MapPin, Tag } from 'lucide-react';

interface SupplierOverviewCardProps {
  supplier: SupplierResponse;
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

export function SupplierOverviewCard({ supplier }: SupplierOverviewCardProps) {
  // فى حسابات الموردين: 
  // إذا كان الرصيد بالسالب (دائن) يعني أن المورد له فلوس عندنا.
  // إذا كان بالموجب (مدين) يعني أننا دافعين بزيادة أو المورد عليه فلوس لنا.
  const isOwedByUs = supplier.debtBalance < 0; // المورد له فلوس
  const isOwedToUs = supplier.debtBalance > 0; // نحن لنا فلوس

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
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col items-center justify-center text-center">
          <span className="text-sm text-gray-500 font-medium mb-1">الرصيد الحالي للمورد</span>
          <span className={`text-2xl font-bold ${isOwedByUs ? 'text-red-600' : isOwedToUs ? 'text-green-600' : 'text-gray-900'}`}>
            {formatCurrency(Math.abs(supplier.debtBalance))}
          </span>
          <span className="text-xs text-gray-500 mt-1 font-medium">
            {isOwedByUs ? '(مطلوب سداده للمورد)' : isOwedToUs ? '(دفعنا بزيادة - لنا عند المورد)' : '(الحساب خالص ومُصَفَّر)'}
          </span>
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
````

## File: src/features/suppliers/components/SuppliersTable.tsx
````typescript
import { formatCurrency } from '@/shared/utils/currency';
import { Trash2, Edit } from 'lucide-react';
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
  onRowClick,
}: SuppliersTableProps) {
  const columns = [
    {
      header: 'اسم المورد',
      cell: (row: SupplierResponse) => (
        <span className="text-base font-bold text-gray-900">{row.name}</span>
      ),
    },
    {
      header: 'الهاتف',
      cell: (row: SupplierResponse) => (
        <span className="text-sm font-semibold text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100" dir="ltr">
          {row.phone || '---'}
        </span>
      ),
    },
    {
      header: 'الرصيد المستحق',
      cell: (row: SupplierResponse) => (
        <span className={`text-base font-bold ${row.debtBalance > 0 ? 'text-red-600' : row.debtBalance < 0 ? 'text-green-600' : 'text-gray-900'}`}>
          {formatCurrency(row.debtBalance)}
        </span>
      ),
    },
    {
      header: 'عدد الفواتير',
      cell: (row: SupplierResponse) => (
        <span className="text-sm font-bold text-gray-800">{row.purchaseInvoicesCount}</span>
      ),
    },
    {
      header: 'عدد المرتجعات',
      cell: (row: SupplierResponse) => (
        <span className="text-sm font-bold text-gray-800">{row.returnsCount}</span>
      ),
    },
    {
      header: 'الإجراءات',
      cell: (row: SupplierResponse) => (
        <div className="flex justify-center gap-3 text-gray-400">
          <HasPermission permission={Permissions.ContactsWrite}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.(row);
              }}
              className="hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50"
              title="تعديل"
              aria-label="تعديل المورد"
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
              title="حذف"
              aria-label="حذف المورد"
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
````

## File: src/features/suppliers/components/SupplierStatementCard.tsx
````typescript
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
    'Return': 'مرتجع مشتريات (إرجاع بضاعة)',
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
              <th className="px-4 py-3">خُصم من حسابه (دفعنا له)</th>
              <th className="px-4 py-3">أُضيف لحسابه (اشترينا منه)</th>
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
````

## File: src/features/suppliers/hooks/useSuppliers.ts
````typescript
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
````

## File: src/features/suppliers/pages/SupplierDetailsPage.tsx
````typescript
import { useParams } from 'react-router-dom';
import { useSupplierDetails, useSupplierStatement } from '../hooks/useSuppliers';
import { SupplierOverviewCard } from '../components/SupplierOverviewCard';
import { SupplierStatementCard } from '../components/SupplierStatementCard';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { BackButton } from '@/shared/components/ui/BackButton';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useEffect } from 'react';

export function SupplierDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { setTitle, setBackButton } = useHeaderStore();

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
        {/* Overview */}
        <SupplierOverviewCard supplier={supplier} />

        {/* Statement / Transactions */}
        <SupplierStatementCard statement={statement} isLoading={isLoadingStatement} />
      </div>
    </div>
  );
}
````

## File: src/features/suppliers/pages/SuppliersPage.tsx
````typescript
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

export function SuppliersPage() {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [supplierToEdit, setSupplierToEdit] = useState<SupplierResponse | undefined>(undefined);

  // Delete modal state
  const [supplierToDelete, setSupplierToDelete] = useState<SupplierResponse | null>(null);

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
        onRowClick={(supplier) => navigate(`/contacts/suppliers/${supplier.supplierId}`)}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!supplierToDelete}
        title="تأكيد حذف المورد"
        message={
          supplierToDelete
            ? `هل أنت متأكد من حذف المورد "${supplierToDelete.name}" نهائياً؟ لا يمكن التراجع عن هذه الخطوة وقد يؤثر على فواتير المشتريات المرتبطة به.`
            : ''
        }
        confirmText={deleteSupplier.isPending ? 'جاري الحذف...' : 'نعم، احذف'}
        cancelText="إلغاء"
        onConfirm={handleDeleteConfirm}
        onClose={() => setSupplierToDelete(null)}
        type="danger"
      />

      {/* Add/Edit Drawer */}
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
    </div>
  );
}
````

## File: src/features/suppliers/schemas/supplierSchemas.ts
````typescript
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
  name: z.string().min(1, "اسم المورد مطلوب"),
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
````

## File: src/index.css
````css
@import "tailwindcss";

/* =========================================
   CENTRALY DESIGN SYSTEM
   Based on Design Spec v1.0
   Font: Cairo (400, 600, 700) from Google Fonts
   Direction: RTL
   ========================================= */

@layer base {
  :root {
    /* Primary Colors */
    --color-primary: #2563eb;       /* blue-600 */
    --color-primary-hover: #1d4ed8; /* blue-700 */
    
    /* UI Backgrounds */
    --color-page-bg: #f8fafc;
    --color-surface: #ffffff;
    
    /* Text */
    --color-text-main: #374151;
    --color-text-muted: #6b7280;
    
    /* Sidebar */
    --color-sidebar-bg: #0f172a;    /* slate-900 */
    --color-sidebar-logo: #020617;  /* slate-950 */
    --color-sidebar-border: #1e293b;/* slate-800 */
    --color-sidebar-text: #cbd5e1;  /* slate-300 */
    
    /* States */
    --color-border: #d1d5db;        /* gray-300 */
    --color-danger: #ef4444;        /* red-500 */
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
    background-color: #f8fafc; /* slate-50 */
    color: #374151; /* gray-700 */
    direction: rtl;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Smooth scrollbar */
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
````

## File: src/lib/axios.ts
````typescript
import axios from 'axios';
import { storage } from '@/lib/storage';
import { toast } from 'sonner';

// ─────────────────────────────────────────────────────────
// Base URL — always points to the .NET backend
// ─────────────────────────────────────────────────────────
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://localhost:7073';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT to every request
apiClient.interceptors.request.use((config) => {
  const token = storage.getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      storage.clearToken();
      window.location.href = '/login';
      toast.error('انتهت صلاحية الجلسة. يرجى تسجيل الدخول مرة أخرى.');
    } else if (error.response?.status >= 500) {
      toast.error('حدث خطأ في الخادم (Server Error).');
    }
    return Promise.reject(error);
  }
);
````

## File: src/lib/storage.ts
````typescript
export const storage = {
  getToken: () => localStorage.getItem('token'),
  setToken: (token: string) => localStorage.setItem('token', token),
  clearToken: () => localStorage.removeItem('token'),
  getPermissions: (): string[] => {
    const perms = localStorage.getItem('permissions');
    return perms ? JSON.parse(perms) : [];
  },
  setPermissions: (permissions: string[]) => localStorage.setItem('permissions', JSON.stringify(permissions)),
  clearPermissions: () => localStorage.removeItem('permissions'),
};
````

## File: src/lib/utils.ts
````typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
````

## File: src/main.tsx
````typescript
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
````

## File: src/setupTests.ts
````typescript
import '@testing-library/jest-dom';
````

## File: src/shared/components/errors/FeatureBoundaryLayout.tsx
````typescript
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
````

## File: src/shared/components/errors/FeatureErrorBoundary.tsx
````typescript
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
    // TODO: Send to monitoring service (e.g., Sentry)
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
````

## File: src/shared/components/errors/GlobalErrorBoundary.tsx
````typescript
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
    // TODO: Send to monitoring service (e.g., Sentry)
    // Sentry.captureException(error, { extra: errorInfo });
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
````

## File: src/shared/components/layout/AppLayout.tsx
````typescript
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useHeaderStore } from "../../hooks/useHeaderStore";
import { useSidebarStore } from "../../hooks/useSidebarStore";
import { BackButton } from "../ui/BackButton";
import { useEffect } from "react";
import { Menu } from "lucide-react";

// Map routes to default page titles
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

  // Set default title based on route if available, and reset back button
  useEffect(() => {
    const defaultTitle = defaultPageTitles[location.pathname];
    if (defaultTitle) {
      setTitle(defaultTitle);
      setBackButton(false);
    }
  }, [location.pathname, setTitle, setBackButton]);

  return (
    <div className="flex h-screen bg-gray-50 font-sans" dir="rtl">
      {/* Sidebar fixed on the right */}
      <Sidebar />

      {/* Main Content — offset by sidebar width */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isOpen ? 'mr-64' : 'mr-20'}`}>

        {/* Page Header */}
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

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
````

## File: src/shared/components/layout/Header.tsx
````typescript
import { Bell, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Global Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            aria-label="بحث شامل"
            placeholder="ابحث عن فاتورة، عميل، منتج..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pr-10 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Actions & Profile */}
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
````

## File: src/shared/components/layout/ProtectedRoute.tsx
````typescript
import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
}

export function ProtectedRoute({ children, requiredPermissions }: ProtectedRouteProps) {
  const { isAuthenticated, hasPermission } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredPermissions && requiredPermissions.length > 0) {
    const hasAnyRequired = requiredPermissions.some(perm => hasPermission(perm));
    if (!hasAnyRequired) {
      // User is logged in but doesn't have the required permission
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <>{children}</>;
}
````

## File: src/shared/components/layout/Sidebar.tsx
````typescript
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, ShoppingCart, ShoppingBag,
  Package, Users, Wallet, Settings,
  LogOut, MonitorSmartphone
} from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Permissions } from "@/features/auth/schemas/permissions";
import { useSidebarStore } from "../../hooks/useSidebarStore";

const menuGroups: { title: string, permission?: string, items: { name: string, path: string, icon: any, permission?: string }[] }[] = [
  {
    title: "الرئيسية",
    items: [
      { name: "لوحة القيادة", path: "/", icon: LayoutDashboard },
    ]
  },
  {
    title: "المبيعات",
    permission: Permissions.SalesRead,
    items: [
      { name: "نقطة البيع (POS)", path: "/sales/pos", icon: MonitorSmartphone, permission: Permissions.SalesWrite },
      { name: "سجل المبيعات", path: "/sales/history", icon: ShoppingCart, permission: Permissions.SalesRead },
      { name: "المرتجعات", path: "/sales/returns", icon: ShoppingCart, permission: Permissions.SalesRead },
    ]
  },
  {
    title: "المشتريات",
    permission: Permissions.PurchasesRead,
    items: [
      { name: "فاتورة مشتريات", path: "/purchases/new", icon: ShoppingBag, permission: Permissions.PurchasesWrite },
      { name: "سجل المشتريات", path: "/purchases/history", icon: ShoppingBag, permission: Permissions.PurchasesRead },
      { name: "مرتجعات الموردين", path: "/purchases/returns", icon: ShoppingBag, permission: Permissions.PurchasesRead },
    ]
  },
  {
    title: "المخزون",
    permission: Permissions.InventoryRead,
    items: [
      { name: "المنتجات", path: "/inventory/products", icon: Package, permission: Permissions.InventoryRead },
      { name: "الأقسام", path: "/inventory/categories", icon: Package, permission: Permissions.InventoryRead },
    ]
  },
  {
    title: "جهات الاتصال",
    permission: Permissions.ContactsRead,
    items: [
      { name: "العملاء", path: "/contacts/customers", icon: Users, permission: Permissions.ContactsRead },
      { name: "الموردين", path: "/contacts/suppliers", icon: Users, permission: Permissions.ContactsRead },
    ]
  },
  {
    title: "المالية",
    permission: Permissions.FinanceRead,
    items: [
      { name: "الدرج والوردية", path: "/finance/drawer", icon: Wallet, permission: Permissions.FinanceRead },
      { name: "الخزينة", path: "/finance/safe", icon: Wallet, permission: Permissions.FinanceRead },
      { name: "المصروفات", path: "/finance/expenses", icon: Wallet, permission: Permissions.FinanceRead },
    ]
  }
];

export function Sidebar() {
  const location = useLocation();
  const { logout, hasPermission } = useAuth();
  const { isOpen } = useSidebarStore();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-slate-900 text-slate-300 flex flex-col h-screen fixed right-0 top-0 border-l border-slate-800 flex-shrink-0 z-20`}>

      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-slate-800 bg-slate-950 shrink-0">
        <h1 className={`text-xl font-bold text-white tracking-wider transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
          سنترالي
        </h1>
        {!isOpen && (
          <h1 className="text-xl font-bold text-white tracking-wider">س</h1>
        )}
      </div>

      {/* Nav Groups */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 custom-scrollbar">
        {menuGroups.map((group, gi) => {
          const visibleItems = group.items.filter((item) => !item.permission || hasPermission(item.permission));
          if (visibleItems.length === 0) return null;
          if (group.permission && !hasPermission(group.permission)) return null;

          return (
          <div key={gi} className="mb-6">
            {/* Group title */}
            <h3 className={`px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 mb-0 overflow-hidden'}`}>
              {group.title}
            </h3>
            
            {/* When closed, we still need some spacing between groups */}
            {!isOpen && gi > 0 && <div className="h-4"></div>}

            <ul className="space-y-1">
              {visibleItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      title={!isOpen ? item.name : undefined}
                      className={`flex items-center ${isOpen ? 'gap-3 px-3' : 'justify-center px-0'} py-2.5 rounded-lg transition-colors text-sm font-medium ${
                        active
                          ? "bg-blue-600 text-white"
                          : "hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      {/* Icons — w-5 h-5 = 20px */}
                      <item.icon size={20} className={`shrink-0 ${active ? "text-white" : "text-slate-400"}`} />
                      <span className={`transition-all duration-300 whitespace-nowrap ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'}`}>
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

        {/* Settings */}
        <div className="border-t border-slate-800 pt-4 mt-2">
          <Link
            to="/settings"
            title={!isOpen ? "الإعدادات" : undefined}
            className={`flex items-center ${isOpen ? 'gap-3 px-3' : 'justify-center px-0'} py-2.5 rounded-lg transition-colors text-sm font-medium ${
              location.pathname.startsWith("/settings")
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 hover:text-white"
            }`}
          >
            <Settings size={20} className="text-slate-400 shrink-0" />
            <span className={`transition-all duration-300 whitespace-nowrap ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'}`}>
              الإعدادات
            </span>
          </Link>
        </div>
      </div>

      {/* Logout */}
      <div className={`p-4 border-t border-slate-800 bg-slate-950 shrink-0 ${!isOpen && 'flex justify-center'}`}>
        <button
          onClick={logout}
          title={!isOpen ? "تسجيل خروج" : undefined}
          className={`flex items-center ${isOpen ? 'gap-3 px-3 w-full' : 'justify-center w-10'} py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium`}
        >
          <LogOut size={20} className="shrink-0" />
          <span className={`transition-all duration-300 whitespace-nowrap ${isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 hidden'}`}>
            تسجيل خروج
          </span>
        </button>
      </div>
    </aside>
  );
}
````

## File: src/shared/components/ui/__tests__/Button.test.tsx
````typescript
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

  // Button component does not have an isLoading prop natively.
  // It handles standard HTML button props.
});
````

## File: src/shared/components/ui/BackButton.tsx
````typescript
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  /** اختياري: مسار محدد للرجوع إليه. إذا لم يُحدد يرجع للصفحة السابقة في التاريخ. */
  to?: string;
  label?: string;
}

/**
 * زر رجوع موحد يُستخدم في جميع صفحات التفاصيل والنماذج.
 * الشكل: مربع بحواف دائرية، أيقونة سهم، اختياري نص.
 */
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
````

## File: src/shared/components/ui/BaseModal.tsx
````typescript
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
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="إغلاق"
            >
              <X size={20} className="text-[var(--color-text-muted)]" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto">{children}</div>

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
````

## File: src/shared/components/ui/Button.tsx
````typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] h-10 px-4 py-2",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
````

## File: src/shared/components/ui/ClearablePriceInput.tsx
````typescript
import { UseFormRegisterReturn, UseFormSetValue, FieldPath, FieldValues } from 'react-hook-form';

interface ClearablePriceInputProps<T extends FieldValues> {
  registration: UseFormRegisterReturn;
  setValue: UseFormSetValue<T>;
  name: FieldPath<T>;
  currentValue: number | undefined;
  className?: string;
}

/** Clears default 0 on focus so the user can type a clean price; restores 0 if left empty. */
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
          // @ts-ignore
          setValue(name, '', { shouldDirty: true });
        } else {
          e.target.select();
        }
      }}
      onBlur={(e) => {
        onBlur(e);
        if (e.target.value === '' || Number.isNaN(e.target.valueAsNumber)) {
          // @ts-ignore
          setValue(name, 0, { shouldValidate: true });
        }
      }}
    />
  );
}
````

## File: src/shared/components/ui/ConfirmModal.tsx
````typescript
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
````

## File: src/shared/components/ui/DataTable.tsx
````typescript
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
          {/* thead — bg-gray-50, text-gray-600 */}
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-6 py-3 font-semibold text-gray-600 text-sm whitespace-nowrap">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* tbody — divide-y divide-gray-100, hover:bg-gray-50 */}
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

      {/* Pagination — p-4, border-t border-gray-200 */}
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
````

## File: src/shared/components/ui/Input.tsx
````typescript
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
````

## File: src/shared/components/ui/Label.tsx
````typescript
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
````

## File: src/shared/components/ui/PageLoader.tsx
````typescript
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

/** Inline loader for tables and modal bodies. */
export function InlineLoader({ label = 'جاري تحميل البيانات...' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-10 text-sm text-[var(--color-text-muted)]">
      <Loader2 className="animate-spin text-[var(--color-primary)]" size={16} />
      {label}
    </div>
  );
}
````

## File: src/shared/components/ui/PickerModal.tsx
````typescript
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
````

## File: src/shared/components/ui/RightDrawer.tsx
````typescript
import React, { useRef } from 'react';
import { X } from 'lucide-react';
import { useModalBehavior } from '@/shared/hooks/useModalBehavior';

interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function RightDrawer({ isOpen, onClose, title, children, footer }: RightDrawerProps) {
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
        className="relative w-[450px] bg-[var(--color-surface)] h-full shadow-2xl flex flex-col"
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
````

## File: src/shared/components/ui/Spinner.tsx
````typescript
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
````

## File: src/shared/hooks/__tests__/useDebounce.test.ts
````typescript
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

    // Update the value
    rerender({ value: 'updated', delay: 500 });
    
    // Value should not update immediately
    expect(result.current).toBe('initial');

    // Fast-forward half the delay
    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(result.current).toBe('initial');

    // Fast-forward remaining delay
    act(() => {
      vi.advanceTimersByTime(250);
    });
    expect(result.current).toBe('updated');
  });
});
````

## File: src/shared/hooks/__tests__/useFocusTrap.test.ts
````typescript
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
````

## File: src/shared/hooks/useDebounce.ts
````typescript
import { useState, useEffect } from 'react';

/**
 * Delays updating a value until the user stops typing.
 * Used in search inputs to avoid firing API calls on every keystroke.
 */
export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
````

## File: src/shared/hooks/useFocusTrap.ts
````typescript
import { RefObject, useEffect } from 'react';

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1 && el.offsetParent !== null
  );
}

/**
 * Traps keyboard Tab focus inside a container while active.
 */
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
````

## File: src/shared/hooks/useHeaderStore.ts
````typescript
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
````

## File: src/shared/hooks/useModalBehavior.ts
````typescript
import { RefObject, useEffect, useRef } from 'react';
import { useFocusTrap } from './useFocusTrap';

/**
 * Shared overlay behavior: body scroll lock, Escape to close, focus trap, restore focus.
 */
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
````

## File: src/shared/hooks/useSidebarStore.ts
````typescript
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
````

## File: src/shared/styles/tokens.ts
````typescript
/**
 * CENTRALY DESIGN SYSTEM — Design Tokens
 * Single source of truth for all shared class names.
 * Usage: import { tokens } from '@/shared/styles/tokens'
 */

export const tokens = {
  // --- Typography ---
  font: {
    label:      "text-sm font-semibold text-[var(--color-text-main)]",
    helperText: "text-xs text-[var(--color-text-muted)]",
    muted:      "text-sm text-[var(--color-text-muted)]",
  },

  // --- Form Inputs ---
  input: "w-full px-3 py-2 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none",
  select: "w-full px-3 py-2 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none bg-white",

  // --- Buttons ---
  btn: {
    primary:   "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
    secondary: "px-4 py-2 border border-[var(--color-border)] rounded-lg text-[var(--color-text-main)] hover:bg-gray-100 font-medium text-sm",
    ghost:     "px-4 py-2 bg-gray-100 border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-main)] hover:bg-gray-200 transition-colors font-medium",
  },

  // --- Table ---
  table: {
    header: "px-6 py-3 font-semibold text-[var(--color-text-main)] text-sm whitespace-nowrap",
    cell:   "px-6 py-4",
  },

  // --- Badge ---
  badge: {
    indigo: "bg-indigo-50 text-[var(--color-primary)] px-2.5 py-1 rounded-full text-xs font-medium",
    success: "bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium",
    warning: "bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-xs font-medium",
    danger: "bg-red-50 text-red-600 px-2.5 py-1 rounded-full text-xs font-medium",
  },

  // --- Card / Surface ---
  card: "bg-[var(--color-surface)] rounded-xl shadow-sm border border-[var(--color-border)]",

  // --- Sidebar ---
  sidebar: {
    root:       "w-64 bg-[var(--color-sidebar-bg)] text-[var(--color-sidebar-text)] flex flex-col h-screen fixed right-0 top-0 border-l border-[var(--color-sidebar-border)]",
    logo:       "h-16 flex items-center justify-center border-b border-[var(--color-sidebar-border)] bg-[var(--color-sidebar-logo)]",
    groupTitle: "px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2",
    link:       "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium",
    activeLink: "bg-[var(--color-primary)] text-white",
    hoverLink:  "hover:bg-[var(--color-sidebar-border)] hover:text-white",
  },
} as const;
````

## File: src/shared/types/pagination.ts
````typescript
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
````

## File: src/shared/utils/__tests__/apiError.test.ts
````typescript
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
````

## File: src/shared/utils/__tests__/currency.test.ts
````typescript
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
````

## File: src/shared/utils/apiError.ts
````typescript
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
````

## File: src/shared/utils/currency.ts
````typescript
export function formatCurrency(value: number): string {
  if (value == null || isNaN(value)) {
    return '٠٫٠٠ ج.م.';
  }

  if (value === 0) {
    // Specifically format 0 as 0.00
    const zeroFormatter = new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return zeroFormatter.format(0);
  }

  // Use Intl.NumberFormat to get comma separators (e.g. 155,000)
  const formatter = new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value);
}
````

## File: src/shared/utils/date.ts
````typescript
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
````

## File: src/vite-env.d.ts
````typescript
/// <reference types="vite/client" />
````

## File: tsconfig.app.json
````json
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
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: tsconfig.node.json
````json
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
````

## File: vite.config.ts
````typescript
/// <reference types="vitest" />
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
````
