import axios from 'axios';

// Matches Centraly.Api.Abstractions.ResultExtensions.ToProblem() and the global
// exception handler / validation-error shaping - every error response (business
// errors, validation errors, unhandled exceptions) carries `errors: [code, description]`
// as a ProblemDetails extension, never a `code`/`description` field at the top level.
interface ApiErrorBody {
  errors?: [string, string];
}

const ERROR_TRANSLATIONS: Record<string, string> = {
  "Category.CreationFailed": "فشل إنشاء التصنيف",
  "Category.NotFound": "التصنيف غير موجود",
  "Category.DepartmentNotFound": "القسم المحدد غير موجود",
  "Category.UpdateFailed": "فشل تحديث التصنيف",
  "Category.DeleteFailed": "فشل حذف التصنيف",
  "Customer.NotFound": "العميل غير موجود",
  "Customer.CreationFailed": "فشل إنشاء العميل",
  "Customer.HasOutstandingDebt": "لا يمكن حذف عميل لديه ديون أو رصيد متبقي",
  "Customer.UpdateFailed": "فشل تحديث بيانات العميل",
  "Customer.DeleteFailed": "فشل حذف العميل",
  "CustomerTransaction.PaymentFailed": "فشل تسجيل الدفعة",
  "CustomerTransaction.ReturnFailed": "فشل تسجيل المرتجع",
  "CustomerTransaction.InvoiceNotFound": "الفاتورة غير موجودة أو لا تخص هذا العميل",
  "CustomerTransaction.InvalidReturn": "المنتج غير موجود في الفاتورة أو الكمية المرتجعة أكبر من المتبقي",
  "Department.CreationFailed": "فشل إنشاء القسم",
  "Department.NotFound": "القسم غير موجود",
  "Department.UpdateFailed": "فشل تحديث القسم",
  "Department.DeleteFailed": "فشل حذف القسم",
  "Drawer.AlreadyOpen": "يوجد وردية مفتوحة بالفعل. يجب إغلاقها أولاً.",
  "Drawer.NoActiveSession": "لا يوجد وردية (درج) مفتوحة حالياً.",
  "Drawer.InvalidAmount": "المبلغ يجب أن يكون أكبر من صفر.",
  "Drawer.NotFound": "الوردية غير موجودة.",
  "Drawer.InsufficientFunds": "لا يوجد رصيد كافٍ في الدرج لهذه العملية.",
  "Expense.CategoryNotFound": "بند المصروفات غير موجود",
  "Maintenance.NotFound": "تذكرة الصيانة غير موجودة",
  "Maintenance.InvalidStatus": "حالة التذكرة غير صالحة لهذه العملية",
  "Maintenance.AlreadyDelivered": "تم تسليم تذكرة الصيانة بالفعل",
  "Maintenance.ProductNotFound": "المنتج المستخدم في الصيانة غير موجود",
  "Product.CreationFailed": "فشل إنشاء المنتج",
  "Product.NotFound": "المنتج غير موجود",
  "Product.DepartmentNotFound": "القسم المحدد غير موجود",
  "Product.CategoryNotFound": "التصنيف المحدد غير موجود",
  "Product.BarcodeAlreadyExists": "يوجد منتج آخر بنفس الباركود",
  "Product.BatchNotFound": "الدفعة المحددة غير موجودة لهذا المنتج",
  "Product.UpdateFailed": "فشل تحديث المنتج",
  "Product.DeleteFailed": "فشل حذف المنتج",
  "PurchaseInvoice.CreationFailed": "فشل إنشاء فاتورة المشتريات",
  "PurchaseInvoice.NotFound": "فاتورة المشتريات غير موجودة",
  "PurchaseInvoice.SupplierNotFound": "المورد المحدد غير موجود",
  "PurchaseInvoice.ProductNotFound": "أحد المنتجات في الفاتورة غير موجود",
  "PurchaseInvoice.InvalidPaidAmount": "المبلغ المدفوع لا يمكن أن يكون أكبر من إجمالي الفاتورة",
  "Role.RoleNotFound": "الصلاحية غير موجودة",
  "Role.DuplicatedRole": "يوجد صلاحية أخرى بنفس الاسم",
  "Safe.NotFound": "الخزينة غير موجودة",
  "Safe.DrawerNotClosed": "لا يمكن توريد نقدية من وردية مفتوحة، يجب إغلاقها أولاً",
  "Safe.InsufficientFunds": "لا يوجد رصيد كافٍ في الخزينة",
  "SalesInvoice.NotFound": "فاتورة المبيعات غير موجودة",
  "SalesInvoice.CustomerNotFound": "العميل المحدد غير موجود",
  "SalesInvoice.InvalidPayment": "مبيعات الكاش / النقدي يجب أن تدفع بالكامل",
  "SalesInvoice.BatchNotFound": "بعض الدفعات غير موجودة أو لا تتطابق مع المنتج",
  "SalesInvoice.InsufficientQuantity": "الكمية المتاحة في المخزن غير كافية",
  "SalesInvoice.CreationFailed": "حدث خطأ أثناء إنشاء فاتورة المبيعات",
  "SalesReturn.NotFound": "سجل المرتجع غير موجود",
  "SalesReturn.InvoiceNotFound": "الفاتورة غير موجودة",
  "SalesReturn.InvalidReturn": "المنتج غير موجود أو الكمية المرتجعة تتجاوز المسموح",
  "Supplier.CreationFailed": "فشل إنشاء المورد",
  "Supplier.NotFound": "المورد غير موجود",
  "Supplier.UpdateFailed": "فشل تحديث المورد",
  "Supplier.DeleteFailed": "فشل حذف المورد",
  "Supplier.HasOutstandingDebt": "لا يمكن حذف مورد له ديون أو مستحقات",
  "SupplierTransaction.PaymentCreationFailed": "فشل تسجيل دفعة المورد",
  "SupplierTransaction.ReturnCreationFailed": "فشل تسجيل مرتجع المورد",
  "SupplierTransaction.InsufficientQuantity": "لا يمكن إرجاع كمية أكبر من المتاحة في المخزن",
  "TransactionRouter.PolicyViolation": "طريقة الدفع المحددة غير مسموح بها لهذا النوع من العمليات",
  "TransactionRouter.NoMainSafe": "لا يوجد خزينة رئيسية. يرجى إنشاء خزينة رئيسية أولاً من قسم الماليات.",
  "User.InvalidCredentials": "البريد الإلكتروني أو كلمة المرور غير صحيحة",
  "User.DuplicateEmail": "يوجد مستخدم آخر بنفس البريد الإلكتروني",
  "User.LockedUser": "حساب المستخدم مغلق، يرجى مراجعة الإدارة",
  "User.UserNotFound": "المستخدم غير موجود",
  "User.InvalidPassword": "كلمة المرور الحالية غير صحيحة",
  "User.DisabledUser": "الحساب معطل، يرجى مراجعة الإدارة",
  "Wallet.NotFound": "المحفظة غير موجودة",
  "Wallet.Inactive": "المحفظة غير مفعلة",
  "Wallet.InsufficientBalance": "لا يوجد رصيد كافٍ في المحفظة",
  "Wallet.InvalidOperation": "نوع العملية غير صالح",
};

export function getApiErrorMessage(error: unknown, fallback = 'حدث خطأ غير متوقع'): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ApiErrorBody | undefined;
    const [code, description] = data?.errors ?? [];

    if (code && ERROR_TRANSLATIONS[code]) {
      return ERROR_TRANSLATIONS[code];
    }

    return description || fallback;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}
