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
