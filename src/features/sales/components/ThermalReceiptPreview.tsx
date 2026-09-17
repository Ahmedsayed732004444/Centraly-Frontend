import React from 'react';
import { SalesInvoiceResponse, SaleType, PaymentMethod } from '../schemas/salesSchemas';
import { getReceiptSettings } from '../utils/receiptSettings';
import { generateCode128Svg } from '../utils/barcode128';
import { formatDate } from '@/shared/utils/date';
import { formatCurrency } from '@/shared/utils/currency';
import { Printer } from 'lucide-react';
import { printThermalReceipt } from '../utils/thermalReceiptPrint';

interface ThermalReceiptPreviewProps {
  invoice: SalesInvoiceResponse;
  onPrint?: () => void;
  showPrintButton?: boolean;
}

export const ThermalReceiptPreview: React.FC<ThermalReceiptPreviewProps> = ({
  invoice,
  onPrint,
  showPrintButton = true,
}) => {
  const settings = getReceiptSettings();
  const barcodeSvg = generateCode128Svg(invoice.invoiceNumber || invoice.id.slice(0, 8), {
    height: 38,
    includeText: true,
  });

  const saleTypeLabel = invoice.saleType === SaleType.Wholesale ? 'جملة' : 'قطاعي (تجزئة)';
  const paymentMethodLabel = invoice.paymentMethod === PaymentMethod.Cash ? 'نقدي (كاش)' : 'آجل (ذمة)';
  const formattedDate = formatDate(invoice.createdAt);
  const totalQty = invoice.items.reduce((sum, item) => sum + item.quantity, 0);

  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      printThermalReceipt(invoice);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Printable Receipt Paper Mockup */}
      <div className="w-full max-w-[320px] bg-white text-black p-4 rounded-xl shadow-md border border-gray-300 font-sans text-xs select-none">
        {/* Store Header */}
        <div className="text-center mb-2">
          <h3 className="font-extrabold text-sm text-gray-900 tracking-wide">{settings.storeName}</h3>
          {settings.activityDescription && (
            <p className="text-[11px] text-gray-600 mt-0.5">{settings.activityDescription}</p>
          )}
          {settings.storePhone && (
            <p className="text-[10px] text-gray-500 mt-0.5" dir="ltr">{settings.storePhone}</p>
          )}
        </div>

        {/* Double Line Divider */}
        <div className="border-t-2 border-double border-black my-2" />

        {/* Invoice Number Badge */}
        <div className="border border-black rounded p-1.5 text-center my-2 bg-gray-50">
          <div className="text-[10px] font-bold text-gray-700">
            فاتورة مبيعات {invoice.paymentMethod === PaymentMethod.Deferred ? '(آجل)' : ''}
          </div>
          <div className="text-sm font-black tracking-wider text-black font-mono mt-0.5">
            #{invoice.invoiceNumber}
          </div>
        </div>

        {/* Invoice Metadata */}
        <div className="space-y-1 my-2 text-[11px] leading-tight">
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">التاريخ والوقت:</span>
            <span className="font-semibold text-black">{formattedDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">نوع الفاتورة:</span>
            <span className="font-semibold text-black">{saleTypeLabel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">طريقة الدفع:</span>
            <span className="font-semibold text-black">{paymentMethodLabel}</span>
          </div>
          {invoice.customer?.name && (
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">العميل:</span>
              <span className="font-semibold text-black">{invoice.customer.name}</span>
            </div>
          )}
          {invoice.customer?.phone && (
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">رقم الهاتف:</span>
              <span className="font-semibold text-black" dir="ltr">{invoice.customer.phone}</span>
            </div>
          )}
        </div>

        {/* Items Table */}
        <div className="border-t border-b border-black py-1 my-2">
          <div className="flex justify-between font-bold text-[10px] pb-1 border-b border-gray-300">
            <span className="w-6 text-center">#</span>
            <span className="flex-1 text-right pr-1">الصنف</span>
            <span className="w-16 text-left">الإجمالي</span>
          </div>
          <div className="divide-y divide-gray-200 mt-1">
            {invoice.items.map((item, idx) => (
              <div key={item.id || idx} className="py-1">
                <div className="flex justify-between items-start">
                  <span className="w-6 text-center text-gray-500 text-[10px]">{idx + 1}</span>
                  <div className="flex-1 pr-1">
                    <div className="font-bold text-[11px] text-black leading-tight">
                      {item.productName || 'منتج'}
                    </div>
                    <div className="text-[10px] text-gray-600 mt-0.5" dir="ltr">
                      {item.quantity} × {formatCurrency(item.unitPrice)}
                    </div>
                  </div>
                  <div className="w-16 text-left font-bold text-black" dir="ltr">
                    {formatCurrency(item.lineTotal)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Summary */}
        <div className="space-y-1 my-2 text-[11px]">
          <div className="flex justify-between text-gray-700">
            <span>عدد القطع المباعة:</span>
            <span className="font-semibold">{totalQty} قطعة</span>
          </div>
          <div className="flex justify-between text-sm font-black border-t border-gray-400 pt-1 text-black">
            <span>الإجمالي النهائي:</span>
            <span dir="ltr">{formatCurrency(invoice.totalAmount)}</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-800">
            <span>المدفوع:</span>
            <span dir="ltr">{formatCurrency(invoice.paidAmount)}</span>
          </div>
          {invoice.remainingAmount > 0 && (
            <div className="flex justify-between font-bold text-red-600 bg-red-50 p-1 rounded border border-red-200 mt-1">
              <span>المتبقي (آجل):</span>
              <span dir="ltr">{formatCurrency(invoice.remainingAmount)}</span>
            </div>
          )}
        </div>

        {/* Barcode Section */}
        <div className="border-t border-dashed border-black pt-3 pb-1 my-2 text-center">
          <div
            className="flex justify-center"
            dangerouslySetInnerHTML={{ __html: barcodeSvg }}
          />
        </div>

        {/* Footer Note */}
        <div className="text-[10px] text-gray-600 text-center mt-2 leading-relaxed whitespace-pre-line border-t border-gray-200 pt-2">
          {settings.footerNote}
        </div>
      </div>

      {/* Action Button */}
      {showPrintButton && (
        <button
          onClick={handlePrint}
          className="mt-3 w-full max-w-[320px] flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold transition-all shadow-sm active:scale-[0.98]"
        >
          <Printer size={18} />
          <span>طباعة الفاتورة الحرارية (80mm)</span>
        </button>
      )}
    </div>
  );
};
