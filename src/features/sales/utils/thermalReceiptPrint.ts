import { SalesInvoiceResponse, SaleType, PaymentMethod } from '../schemas/salesSchemas';
import { getReceiptSettings, ReceiptSettings } from './receiptSettings';
import { generateCode128Svg } from './barcode128';
import { formatDate } from '@/shared/utils/date';
import { formatCurrency } from '@/shared/utils/currency';

/**
 * Builds standard, clean HTML specifically structured for 80mm Xprinter thermal paper.
 * High-contrast monochrome, dashed borders, crisp barcode, zero bloat.
 */
export function buildThermalReceiptHtml(invoice: SalesInvoiceResponse, customSettings?: Partial<ReceiptSettings>): string {
  const settings = { ...getReceiptSettings(), ...customSettings };
  const barcodeSvg = generateCode128Svg(invoice.invoiceNumber || invoice.id.slice(0, 8), {
    height: 42,
    includeText: true,
  });

  const saleTypeLabel = invoice.saleType === SaleType.Wholesale ? 'جملة' : 'قطاعي (تجزئة)';
  const paymentMethodLabel = invoice.paymentMethod === PaymentMethod.Cash ? 'نقدي (كاش)' : 'آجل (ذمة)';
  const formattedDate = formatDate(invoice.createdAt);
  const totalQty = invoice.items.reduce((sum, item) => sum + item.quantity, 0);

  const itemsRows = invoice.items.map((item, index) => {
    return `
      <tr class="item-row">
        <td class="col-num">${index + 1}</td>
        <td class="col-desc">
          <div class="product-name">${escapeHtml(item.productName || 'منتج')}</div>
          <div class="calc-hint">${item.quantity} × ${formatCurrency(item.unitPrice)}</div>
        </td>
        <td class="col-total">${formatCurrency(item.lineTotal)}</td>
      </tr>
    `;
  }).join('');

  return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>فاتورة مبيعات - ${escapeHtml(invoice.invoiceNumber)}</title>
  <style>
    @page {
      size: ${settings.paperWidth === '58mm' ? '58mm' : '80mm'} auto;
      margin: 0;
    }
    @media print {
      html, body {
        width: ${settings.paperWidth === '58mm' ? '58mm' : '80mm'};
        margin: 0 !important;
        padding: 0 !important;
        background: #fff !important;
        color: #000 !important;
      }
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    body {
      font-family: 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif;
      font-size: 12px;
      line-height: 1.35;
      color: #000;
      background: #fff;
      direction: rtl;
      padding: 6px 8px;
      max-width: ${settings.paperWidth === '58mm' ? '54mm' : '76mm'};
      margin: 0 auto;
    }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .text-left { text-align: left; }
    .font-bold { font-weight: 700; }

    /* Dividers */
    .divider-solid {
      border-top: 1.5px solid #000;
      margin: 6px 0;
    }
    .divider-dashed {
      border-top: 1px dashed #000;
      margin: 5px 0;
    }
    .divider-double {
      border-top: 3px double #000;
      margin: 6px 0;
    }

    /* Store Header */
    .store-header {
      text-align: center;
      margin-bottom: 6px;
    }
    .store-name {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 0.5px;
    }
    .store-sub {
      font-size: 11px;
      margin-top: 2px;
    }
    .store-contact {
      font-size: 10px;
      margin-top: 2px;
    }

    /* Prominent Invoice Number Badge */
    .invoice-badge-container {
      border: 1.5px solid #000;
      border-radius: 4px;
      padding: 4px 6px;
      margin: 6px 0;
      text-align: center;
      background-color: #fff;
    }
    .invoice-badge-title {
      font-size: 11px;
      font-weight: bold;
    }
    .invoice-badge-number {
      font-size: 15px;
      font-weight: 900;
      letter-spacing: 1px;
      font-family: monospace, Courier, sans-serif;
      margin-top: 1px;
    }

    /* Metadata Table */
    .meta-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11px;
      margin: 4px 0;
    }
    .meta-table td {
      padding: 2px 0;
      vertical-align: top;
    }
    .meta-label {
      color: #111;
      font-weight: bold;
      width: 42%;
    }
    .meta-val {
      font-weight: 600;
      width: 58%;
    }

    /* Items Table */
    .items-table {
      width: 100%;
      border-collapse: collapse;
      margin: 4px 0;
      font-size: 11px;
    }
    .items-table th {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      padding: 4px 1px;
      font-weight: 800;
    }
    .item-row td {
      padding: 4px 1px 2px;
      vertical-align: top;
    }
    .col-num {
      width: 18px;
      text-align: center;
      font-size: 10px;
      color: #333;
    }
    .col-desc {
      text-align: right;
    }
    .col-total {
      text-align: left;
      font-weight: bold;
      white-space: nowrap;
    }
    .product-name {
      font-weight: 700;
      word-break: break-word;
      line-height: 1.2;
    }
    .calc-hint {
      font-size: 10px;
      color: #222;
      direction: ltr;
      text-align: right;
      margin-top: 1px;
    }

    /* Financial Summary */
    .summary-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 11.5px;
      margin: 4px 0;
    }
    .summary-table td {
      padding: 2.5px 0;
    }
    .summary-label {
      text-align: right;
      font-weight: 600;
    }
    .summary-val {
      text-align: left;
      font-weight: 700;
      white-space: nowrap;
    }
    .total-row {
      font-size: 14px;
      font-weight: 900;
    }
    .remaining-alert {
      font-size: 12.5px;
      font-weight: 800;
      border: 1px dashed #000;
      padding: 3px 6px;
      margin-top: 4px;
      text-align: center;
    }

    /* Barcode & Footer */
    .barcode-section {
      text-align: center;
      margin: 8px 0 4px;
    }
    .footer-note {
      font-size: 10px;
      text-align: center;
      margin-top: 5px;
      line-height: 1.4;
      white-space: pre-line;
    }
  </style>
</head>
<body>
  <!-- Store Header -->
  <div class="store-header">
    <div class="store-name">${escapeHtml(settings.storeName)}</div>
    ${settings.activityDescription ? `<div class="store-sub">${escapeHtml(settings.activityDescription)}</div>` : ''}
    ${settings.storeAddress ? `<div class="store-contact">${escapeHtml(settings.storeAddress)}</div>` : ''}
    ${settings.storePhone ? `<div class="store-contact">هاتف: ${escapeHtml(settings.storePhone)}</div>` : ''}
  </div>

  <div class="divider-double"></div>

  <!-- Prominent Invoice Number Badge -->
  <div class="invoice-badge-container">
    <div class="invoice-badge-title">فاتورة مبيعات ${invoice.paymentMethod === PaymentMethod.Deferred ? '(آجل)' : ''}</div>
    <div class="invoice-badge-number">#${escapeHtml(invoice.invoiceNumber)}</div>
  </div>

  <!-- Meta Info -->
  <table class="meta-table">
    <tr>
      <td class="meta-label">التاريخ والوقت:</td>
      <td class="meta-val">${formattedDate}</td>
    </tr>
    <tr>
      <td class="meta-label">نوع الفاتورة:</td>
      <td class="meta-val">${saleTypeLabel}</td>
    </tr>
    <tr>
      <td class="meta-label">طريقة الدفع:</td>
      <td class="meta-val">${paymentMethodLabel}</td>
    </tr>
    ${invoice.customer?.name ? `
    <tr>
      <td class="meta-label">العميل:</td>
      <td class="meta-val">${escapeHtml(invoice.customer.name)}</td>
    </tr>
    ` : ''}
    ${invoice.customer?.phone ? `
    <tr>
      <td class="meta-label">هاتف العميل:</td>
      <td class="meta-val" dir="ltr" style="text-align:right;">${escapeHtml(invoice.customer.phone)}</td>
    </tr>
    ` : ''}
  </table>

  <!-- Items Table -->
  <table class="items-table">
    <thead>
      <tr>
        <th class="col-num">#</th>
        <th class="col-desc">الصنف / الكمية × السعر</th>
        <th class="col-total">الإجمالي</th>
      </tr>
    </thead>
    <tbody>
      ${itemsRows}
    </tbody>
  </table>

  <div class="divider-dashed"></div>

  <!-- Financial Totals -->
  <table class="summary-table">
    <tr>
      <td class="summary-label">عدد القطع:</td>
      <td class="summary-val">${totalQty} قطعة</td>
    </tr>
    <tr class="total-row">
      <td class="summary-label">الإجمالي النهائي:</td>
      <td class="summary-val">${formatCurrency(invoice.totalAmount)}</td>
    </tr>
    <tr>
      <td class="summary-label">المدفوع:</td>
      <td class="summary-val">${formatCurrency(invoice.paidAmount)}</td>
    </tr>
    ${invoice.remainingAmount > 0 ? `
    <tr>
      <td class="summary-label">المتبقي (آجل):</td>
      <td class="summary-val">${formatCurrency(invoice.remainingAmount)}</td>
    </tr>
    ` : ''}
  </table>

  ${invoice.remainingAmount > 0 ? `
  <div class="remaining-alert">
    مديونية متبقية: ${formatCurrency(invoice.remainingAmount)}
  </div>
  ` : ''}

  <!-- Barcode Section -->
  <div class="divider-dashed"></div>
  <div class="barcode-section">
    ${barcodeSvg}
  </div>

  <!-- Footer Notes -->
  <div class="footer-note">
    ${escapeHtml(settings.footerNote)}
  </div>
  <div style="font-size: 8px; text-align: center; color: #555; margin-top: 6px;">
    Centraly System • POS Thermal
  </div>
</body>
</html>
`;
}

function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Triggers thermal receipt printing using a clean, isolated hidden iframe.
 * Avoids disturbing the main UI, scroll positions, or application state.
 */
export function printThermalReceipt(invoice: SalesInvoiceResponse, customSettings?: Partial<ReceiptSettings>): Promise<void> {
  return new Promise((resolve) => {
    const html = buildThermalReceiptHtml(invoice, customSettings);

    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.visibility = 'hidden';

    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) {
      document.body.removeChild(iframe);
      resolve();
      return;
    }

    doc.open();
    doc.write(html);
    doc.close();

    // Allow browser rendering / font parsing
    setTimeout(() => {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch (err) {
        console.error('Print failed:', err);
      } finally {
        setTimeout(() => {
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
          resolve();
        }, 1500);
      }
    }, 250);
  });
}
