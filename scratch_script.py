import codecs

path = r'C:\Users\AIO\source\reposVsc\Centraly-Frontend\src\shared\utils\apiError.ts'
with codecs.open(path, 'r', 'utf-8') as f:
    content = f.read()

new_translations = """
  "TransactionRouter.NoMainSafe": "لا يوجد خزينة رئيسية. يرجى إنشاء خزينة رئيسية أولاً من قسم الماليات.",
  "TransactionRouter.NoActiveDrawerSession": "لا يوجد وردية (درج) مفتوحة حالياً لهذا المستخدم.",
  "PurchaseInvoice.SupplierNotFound": "المورد غير موجود أو تم حذفه.",
  "PurchaseInvoice.ProductNotFound": "أحد المنتجات في الفاتورة غير موجود.",
  "PurchaseInvoice.InvalidPaidAmount": "المبلغ المدفوع لا يمكن أن يكون أكبر من إجمالي الفاتورة.",
  "PurchaseInvoice.CreationFailed": "حدث خطأ غير متوقع أثناء إنشاء الفاتورة.",
"""

content = content.replace('const ERROR_TRANSLATIONS: Record<string, string> = {', 'const ERROR_TRANSLATIONS: Record<string, string> = {\n' + new_translations)

with codecs.open(path, 'w', 'utf-8') as f:
    f.write(content)

print('Updated translations successfully.')
