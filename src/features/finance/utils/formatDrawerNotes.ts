// نص "البيان/الملاحظات" الخام القادم من الباك اند (مثل "Sales Invoice <guid>") غير مقروء
// للمستخدم - هذه الدالة تترجمه لنص عربي مفهوم، وتُستخدم في الجدول على الشاشة وفي تصدير Excel معاً.
export function formatDrawerNotes(notes?: string, source?: string): string {
  const text = (notes || source || '').trim();
  if (!text) return 'حركة نقدية بالدرج';

  const lower = text.toLowerCase();
  if (lower.includes('sales invoice') || lower.includes('salesinvoice')) {
    const parts = text.split(/[\s-]+/);
    const id = parts[parts.length - 1] || '';
    return 'فاتورة مبيعات (' + id.slice(-6).toUpperCase() + ')';
  }
  if (lower.includes('purchase invoice') || lower.includes('purchaseinvoice')) {
    const parts = text.split(/[\s-]+/);
    const id = parts[parts.length - 1] || '';
    return 'فاتورة مشتريات (' + id.slice(-6).toUpperCase() + ')';
  }
  if (lower.includes('maintenance')) {
    return 'خدمة / تذكرة صيانة';
  }
  if (lower.includes('customer payment') || lower.includes('customer transaction')) {
    return 'تحصيل دفعة من حساب عميل';
  }
  if (lower.includes('supplier payment')) {
    return 'سداد دفعة لحساب مورد';
  }
  return text;
}
