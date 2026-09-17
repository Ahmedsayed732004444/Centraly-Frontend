import { MaintenanceResponse, MaintenanceSummary } from '../schemas/maintenanceSchemas';
import { getReceiptSettings, ReceiptSettings } from '@/features/sales/utils/receiptSettings';
import { generateCode128Svg } from '@/features/sales/utils/barcode128';
import { formatDate } from '@/shared/utils/date';
import { formatCurrency } from '@/shared/utils/currency';

function escapeHtml(text?: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function getDisplayTicketNumber(id: string): string {
  if (!id) return '';
  if (id.length > 8) {
    return 'MNT-' + id.slice(-6).toUpperCase();
  }
  return 'MNT-' + id.toUpperCase();
}

export function formatDeliveryDateDetailed(deliveryDate?: string): { formatted: string; relative: string } {
  if (!deliveryDate) {
    return { formatted: 'غير محدد (سيتم التواصل مع العميل)', relative: 'غير محدد' };
  }
  const date = new Date(deliveryDate);
  if (isNaN(date.getTime())) {
    return { formatted: deliveryDate, relative: deliveryDate };
  }

  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const isTomorrow = date.toDateString() === tomorrow.toDateString();

  const timePart = date.toLocaleTimeString('ar-EG-u-nu-latn', { hour: '2-digit', minute: '2-digit', hour12: true });
  const datePart = date.toLocaleDateString('ar-EG-u-nu-latn', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  let relative = '';
  if (isToday) relative = `اليوم، ${timePart}`;
  else if (isTomorrow) relative = `غداً، ${timePart}`;
  else relative = `${datePart} - ${timePart}`;

  return { formatted: `${datePart} (${timePart})`, relative };
}

/**
 * 1. إيصال استلام جهاز وصيانة (Intake Receipt / تذكرة استلام)
 * يُعطى للزبون عند فتح طلب الصيانة - يوضح ميعاد التسليم بدقة والتفاصيل والشروط.
 */
export function buildMaintenanceIntakeReceiptHtml(
  ticket: MaintenanceResponse | MaintenanceSummary,
  customSettings?: Partial<ReceiptSettings>
): string {
  const settings = { ...getReceiptSettings(), ...customSettings };
  const ticketNumber = getDisplayTicketNumber(ticket.id);
  const barcodeSvg = generateCode128Svg(ticketNumber, { height: 40, includeText: true });
  const deliveryInfo = formatDeliveryDateDetailed(ticket.deliveryDate);
  const createdAtFormatted = formatDate(ticket.createdAt);

  return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>إيصال استلام جهاز صيانة - ${escapeHtml(ticketNumber)}</title>
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
    .font-bold { font-weight: 700; }

    /* Dividers */
    .divider-solid { border-top: 1.5px solid #000; margin: 6px 0; }
    .divider-dashed { border-top: 1px dashed #000; margin: 5px 0; }
    .divider-double { border-top: 3px double #000; margin: 6px 0; }

    /* Store Header */
    .store-header { text-align: center; margin-bottom: 5px; }
    .store-name { font-size: 16px; font-weight: 800; }
    .store-sub { font-size: 11px; margin-top: 1px; color: #111; }
    .store-contact { font-size: 10px; margin-top: 1px; }

    /* Ticket Header */
    .ticket-badge {
      border: 1.5px solid #000;
      border-radius: 4px;
      padding: 4px 6px;
      margin: 6px 0;
      text-align: center;
    }
    .ticket-title { font-size: 11px; font-weight: bold; }
    .ticket-num { font-size: 16px; font-weight: 900; font-family: monospace; letter-spacing: 1px; }

    /* Highlighted Delivery Box */
    .delivery-box {
      border: 2px solid #000;
      background: #fdfdfd;
      border-radius: 6px;
      padding: 6px;
      margin: 8px 0;
      text-align: center;
    }
    .delivery-label {
      font-size: 11px;
      font-weight: 800;
      text-decoration: underline;
    }
    .delivery-time {
      font-size: 13px;
      font-weight: 900;
      margin-top: 2px;
    }
    .delivery-full {
      font-size: 10px;
      color: #222;
      margin-top: 1px;
    }

    /* Meta Details */
    .meta-table { width: 100%; border-collapse: collapse; font-size: 11px; margin: 4px 0; }
    .meta-table td { padding: 2.5px 0; vertical-align: top; }
    .meta-lbl { font-weight: bold; width: 38%; }
    .meta-val { font-weight: 600; width: 62%; }

    /* Terms */
    .terms-box {
      font-size: 9.5px;
      line-height: 1.35;
      border-top: 1px dashed #000;
      padding-top: 5px;
      margin-top: 6px;
      text-align: right;
    }
    .terms-box ol { padding-right: 14px; margin-top: 3px; }
    .terms-box li { margin-bottom: 2px; }
  </style>
</head>
<body>
  <!-- Store Header -->
  <div class="store-header">
    <div class="store-name">${escapeHtml(settings.storeName)}</div>
    <div class="store-sub">قسم الصيانة والدعم الفني المعتمد</div>
    ${settings.storePhone ? `<div class="store-contact">خدمة العملاء: ${escapeHtml(settings.storePhone)}</div>` : ''}
  </div>

  <div class="divider-double"></div>

  <!-- Ticket Number -->
  <div class="ticket-badge">
    <div class="ticket-title">إيصال استلام جهاز صيانة</div>
    <div class="ticket-num">#${escapeHtml(ticketNumber)}</div>
  </div>

  <!-- PROMINENT DELIVERY DATE -->
  <div class="delivery-box">
    <div class="delivery-label">⏰ ميعاد التسليم المتوقع للعميل:</div>
    <div class="delivery-time">${escapeHtml(deliveryInfo.relative || deliveryInfo.formatted)}</div>
    ${deliveryInfo.relative && deliveryInfo.formatted !== deliveryInfo.relative ? `
      <div class="delivery-full">${escapeHtml(deliveryInfo.formatted)}</div>
    ` : ''}
  </div>

  <!-- Customer & Device Details -->
  <table class="meta-table">
    <tr>
      <td class="meta-lbl">تاريخ الاستلام:</td>
      <td class="meta-val">${createdAtFormatted}</td>
    </tr>
    <tr>
      <td class="meta-lbl">اسم العميل:</td>
      <td class="meta-val font-bold">${escapeHtml(ticket.customerName)}</td>
    </tr>
    ${ticket.customerPhone ? `
    <tr>
      <td class="meta-lbl">رقم الهاتف:</td>
      <td class="meta-val" dir="ltr" style="text-align:right;">${escapeHtml(ticket.customerPhone)}</td>
    </tr>
    ` : ''}
    <tr>
      <td class="meta-lbl">نوع الجهاز:</td>
      <td class="meta-val font-bold">${escapeHtml(ticket.deviceDescription || 'جهاز عميل')}</td>
    </tr>
    <tr>
      <td class="meta-lbl">العطل المسجل:</td>
      <td class="meta-val">${escapeHtml(ticket.problem || 'فحص وكشف')}</td>
    </tr>
    <tr>
      <td class="meta-lbl">العربون المدفوع:</td>
      <td class="meta-val font-bold">${ticket.paidAmount > 0 ? formatCurrency(ticket.paidAmount) : 'لا يوجد (0 ج.م)'}</td>
    </tr>
    ${(ticket as any).servicePrice > 0 ? `
    <tr>
      <td class="meta-lbl">تكلفة الكشف/الخدمة:</td>
      <td class="meta-val font-bold">${formatCurrency((ticket as any).servicePrice)}</td>
    </tr>
    ` : ''}
  </table>

  <!-- Barcode -->
  <div class="divider-dashed"></div>
  <div style="text-align:center; margin: 6px 0;">
    ${barcodeSvg}
  </div>

  <!-- Important Terms -->
  <div class="terms-box">
    <div class="font-bold">⚠️ تنبيهات وشروط استلام الجهاز:</div>
    <ol>
      <li>يجب إحضار أصل هذا الإيصال كشرط أساسي لاستلام الجهاز.</li>
      <li>المحل غير مسؤول عن فقدان البيانات (Data)، يُرجى عمل نسخة احتياطية.</li>
      <li>المحل غير مسؤول عن الأجهزة التي لم تُستلم خلال 30 يوماً من تاريخ الإبلاغ.</li>
      <li>لا يُسلم الجهاز إلا لحامل هذا الإيصال أو بمطابقة رقم الهاتف.</li>
    </ol>
  </div>

  <div style="font-size: 8px; text-align: center; color: #444; margin-top: 6px;">
    شكراً لاختياركم مركزنا • نسعد بخدمتكم دائماً
  </div>
</body>
</html>
`;
}

/**
 * 2. فاتورة تسليم جهاز صيانة (Delivery & Settlement Receipt)
 * مهم جداً: لا تذكر فيها أي شيء عن قطع الغيار أو أسعارها إطلاقاً - فقط السعر الإجمالي للصيانة والحساب.
 */
export function buildMaintenanceDeliveryReceiptHtml(
  ticket: MaintenanceResponse,
  customSettings?: Partial<ReceiptSettings>
): string {
  const settings = { ...getReceiptSettings(), ...customSettings };
  const ticketNumber = getDisplayTicketNumber(ticket.id);
  const barcodeSvg = generateCode128Svg(ticketNumber, { height: 40, includeText: true });
  const deliveryDateFormatted = formatDate(ticket.deliveryDate || new Date().toISOString());
  const intakeDateFormatted = formatDate(ticket.createdAt);

  const total = ticket.totalPrice || ticket.servicePrice || 0;
  const paidAdvance = ticket.paidAmount || 0;
  const paidAtDelivery = Math.max(0, total - paidAdvance);

  return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>فاتورة تسليم صيانة - ${escapeHtml(ticketNumber)}</title>
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
    .font-bold { font-weight: 700; }

    /* Dividers */
    .divider-solid { border-top: 1.5px solid #000; margin: 6px 0; }
    .divider-dashed { border-top: 1px dashed #000; margin: 5px 0; }
    .divider-double { border-top: 3px double #000; margin: 6px 0; }

    /* Store Header */
    .store-header { text-align: center; margin-bottom: 5px; }
    .store-name { font-size: 16px; font-weight: 800; }
    .store-sub { font-size: 11px; margin-top: 1px; color: #111; }
    .store-contact { font-size: 10px; margin-top: 1px; }

    /* Badge */
    .ticket-badge {
      border: 1.5px solid #000;
      border-radius: 4px;
      padding: 4px 6px;
      margin: 6px 0;
      text-align: center;
    }
    .ticket-title { font-size: 11px; font-weight: bold; }
    .ticket-num { font-size: 16px; font-weight: 900; font-family: monospace; letter-spacing: 1px; }

    /* Meta Details */
    .meta-table { width: 100%; border-collapse: collapse; font-size: 11px; margin: 4px 0; }
    .meta-table td { padding: 2.5px 0; vertical-align: top; }
    .meta-lbl { font-weight: bold; width: 40%; }
    .meta-val { font-weight: 600; width: 60%; }

    /* Total Section */
    .total-box {
      border: 2px solid #000;
      border-radius: 6px;
      padding: 8px 6px;
      margin: 8px 0;
      background: #fafafa;
    }
    .total-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14.5px;
      font-weight: 900;
      border-bottom: 1.5px solid #000;
      padding-bottom: 4px;
      margin-bottom: 5px;
    }
    .sub-line {
      display: flex;
      justify-content: space-between;
      font-size: 11.5px;
      font-weight: 600;
      padding: 2px 0;
    }
    .settled-badge {
      text-align: center;
      font-size: 12px;
      font-weight: 800;
      border: 1px dashed #000;
      padding: 4px;
      margin-top: 6px;
      background: #fff;
    }

    /* Warranty */
    .warranty-box {
      font-size: 10px;
      line-height: 1.4;
      border-top: 1px dashed #000;
      padding-top: 6px;
      margin-top: 6px;
      text-align: center;
    }
  </style>
</head>
<body>
  <!-- Store Header -->
  <div class="store-header">
    <div class="store-name">${escapeHtml(settings.storeName)}</div>
    <div class="store-sub">فاتورة تسليم صيانة وضمان</div>
    ${settings.storePhone ? `<div class="store-contact">هاتف: ${escapeHtml(settings.storePhone)}</div>` : ''}
  </div>

  <div class="divider-double"></div>

  <!-- Ticket Number -->
  <div class="ticket-badge">
    <div class="ticket-title">سند تسليم جهاز صيانة</div>
    <div class="ticket-num">#${escapeHtml(ticketNumber)}</div>
  </div>

  <!-- Customer & Device Details -->
  <table class="meta-table">
    <tr>
      <td class="meta-lbl">تاريخ التسليم:</td>
      <td class="meta-val font-bold">${deliveryDateFormatted}</td>
    </tr>
    <tr>
      <td class="meta-lbl">تاريخ الاستلام الأصلي:</td>
      <td class="meta-val">${intakeDateFormatted}</td>
    </tr>
    <tr>
      <td class="meta-lbl">اسم العميل:</td>
      <td class="meta-val font-bold">${escapeHtml(ticket.customerName)}</td>
    </tr>
    ${ticket.customerPhone ? `
    <tr>
      <td class="meta-lbl">رقم الهاتف:</td>
      <td class="meta-val" dir="ltr" style="text-align:right;">${escapeHtml(ticket.customerPhone)}</td>
    </tr>
    ` : ''}
    <tr>
      <td class="meta-lbl">الجهاز:</td>
      <td class="meta-val font-bold">${escapeHtml(ticket.deviceDescription || 'جهاز عميل')}</td>
    </tr>
    <tr>
      <td class="meta-lbl">العطل الأساسي:</td>
      <td class="meta-val">${escapeHtml(ticket.problem || 'صيانة')}</td>
    </tr>
    ${ticket.solution ? `
    <tr>
      <td class="meta-lbl">الإصلاح المنفذ:</td>
      <td class="meta-val">${escapeHtml(ticket.solution)}</td>
    </tr>
    ` : ''}
  </table>

  <!-- TOTAL FINANCIAL SUMMARY (STRICTLY NO PARTS MENTIONED) -->
  <div class="total-box">
    <div class="total-line">
      <span>السعر الكلي للصيانة:</span>
      <span dir="ltr">${formatCurrency(total)}</span>
    </div>

    ${paidAdvance > 0 ? `
    <div class="sub-line">
      <span>العربون المدفوع مسبقاً:</span>
      <span dir="ltr">${formatCurrency(paidAdvance)}</span>
    </div>
    ` : ''}

    <div class="sub-line" style="font-weight:800;">
      <span>المدفوع الآن عند التسليم:</span>
      <span dir="ltr">${formatCurrency(paidAtDelivery)}</span>
    </div>

    <div class="settled-badge">
      ✅ تم سداد كامل تكلفة الصيانة واستلام الجهاز
    </div>
  </div>

  <!-- Barcode -->
  <div style="text-align:center; margin: 6px 0;">
    ${barcodeSvg}
  </div>

  <!-- Warranty Policy -->
  <div class="warranty-box">
    <div class="font-bold">🛡️ شروط وسياسة الضمان:</div>
    <div>يسري ضمان الصيانة لمدة 14 يوماً من تاريخ هذا السند.</div>
    <div>الضمان لا يشمل الكسر، السوائل، أو محاولة الفك خارج المركز.</div>
    <div style="margin-top: 4px; font-weight: bold;">شكراً لتعاملكم معنا، نسعد بخدمتكم دائماً</div>
  </div>
</body>
</html>
`;
}

function triggerIframePrint(html: string): Promise<void> {
  return new Promise((resolve) => {
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

    setTimeout(() => {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch (err) {
        console.error('Maintenance print failed:', err);
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

/**
 * طبع إيصال استلام جهاز صيانة حراري (80mm)
 */
export function printMaintenanceIntakeReceipt(
  ticket: MaintenanceResponse | MaintenanceSummary,
  customSettings?: Partial<ReceiptSettings>
): Promise<void> {
  const html = buildMaintenanceIntakeReceiptHtml(ticket, customSettings);
  return triggerIframePrint(html);
}

/**
 * طبع فاتورة تسليم صيانة حراري (80mm) - لا تذكر فيها قطع الغيار نهائياً
 */
export function printMaintenanceDeliveryReceipt(
  ticket: MaintenanceResponse,
  customSettings?: Partial<ReceiptSettings>
): Promise<void> {
  const html = buildMaintenanceDeliveryReceiptHtml(ticket, customSettings);
  return triggerIframePrint(html);
}
