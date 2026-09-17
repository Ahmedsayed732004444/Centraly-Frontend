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
