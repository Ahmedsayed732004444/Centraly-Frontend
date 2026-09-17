// Single source of Arabic labels for backend enums that are sent to the client as
// their C# member name (e.g. "Pending", "Wholesale"). Mirrors
// Centraly.Api/Contracts/Shared/Enums/*.cs one-to-one - the Arabic there only exists
// as `//` comments, so components were re-typing their own copy of these labels
// (e.g. SafeTransactionsTable's local TYPE_TRANSLATIONS/CATEGORY_TRANSLATIONS, and
// MaintenancePage's inline ternary). Import from here instead of adding another copy.

export const MAINTENANCE_STATUS_LABELS: Record<string, string> = {
  Pending: 'قيد الانتظار',
  Delivered: 'تم التسليم',
  Returned: 'مرتجع',
};

export const SALE_TYPE_LABELS: Record<string, string> = {
  Wholesale: 'جملة',
  Retail: 'تجزئة',
};

export const PAYMENT_METHOD_LABELS: Record<string, string> = {
  Cash: 'كاش',
  Deferred: 'آجل',
};

export const RETURN_REASON_LABELS: Record<string, string> = {
  Defect: 'عطل',
  ChangedMind: 'تغيير رأي',
  Other: 'سبب آخر',
};

export const DRAWER_TRANSACTION_TYPE_LABELS: Record<string, string> = {
  Income: 'إيراد',
  Expense: 'صادر',
};

export const DRAWER_TRANSACTION_CATEGORY_LABELS: Record<string, string> = {
  Sales: 'مبيعات',
  Suppliers: 'موردين',
  Maintenance: 'صيانة',
  Returns: 'مرتجعات',
  CustomerDebt: 'تسديد مديونية عميل',
  Operational: 'تشغيلية',
  Purchases: 'واردات',
  SupplierReturn: 'إرجاع بضاعة لمورد',
  WalletOperation: 'عملية محفظة',
};

export function translateEnum(labels: Record<string, string>, value: string): string {
  return labels[value] ?? value;
}
