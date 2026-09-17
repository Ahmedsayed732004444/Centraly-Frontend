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
