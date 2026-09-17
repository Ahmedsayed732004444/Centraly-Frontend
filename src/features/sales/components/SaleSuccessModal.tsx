import React, { useState, useEffect } from 'react';
import { SalesInvoiceResponse } from '../schemas/salesSchemas';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { CheckCircle2, Printer, Plus, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import { formatCurrency } from '@/shared/utils/currency';
import { printThermalReceipt } from '../utils/thermalReceiptPrint';
import { getReceiptSettings, saveReceiptSettings } from '../utils/receiptSettings';
import { ThermalReceiptPreview } from './ThermalReceiptPreview';

interface SaleSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoice: SalesInvoiceResponse | null;
  onNewSale?: () => void;
}

export const SaleSuccessModal: React.FC<SaleSuccessModalProps> = ({
  isOpen,
  onClose,
  invoice,
  onNewSale,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [autoPrint, setAutoPrint] = useState(() => getReceiptSettings().autoPrint);

  useEffect(() => {
    if (isOpen) {
      setShowPreview(false);
      setCopied(false);
      setAutoPrint(getReceiptSettings().autoPrint);
    }
  }, [isOpen]);

  // Keyboard shortcut listener: Enter to print, Esc to new sale/close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
        e.preventDefault();
        handlePrint();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, invoice]);

  if (!invoice) return null;

  const handlePrint = () => {
    printThermalReceipt(invoice);
  };

  const handleAutoPrintToggle = (checked: boolean) => {
    setAutoPrint(checked);
    saveReceiptSettings({ autoPrint: checked });
  };

  const handleCopyInvoiceNumber = () => {
    if (!invoice.invoiceNumber) return;
    navigator.clipboard.writeText(invoice.invoiceNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNewSale = () => {
    onClose();
    if (onNewSale) {
      onNewSale();
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="تم إتمام عملية البيع"
      size="lg"
      zIndexClassName="z-[70]"
    >
      <div className="p-5 sm:p-6 space-y-5">
        {/* Top Celebration Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 shadow-inner ring-8 ring-emerald-50">
            <CheckCircle2 size={36} className="stroke-[2.5]" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">تم حفظ الفاتورة بنجاح</h2>
          <p className="text-sm text-gray-500 mt-0.5">جاهزة للطباعة على طابعة Xprinter الحرارية</p>
        </div>

        {/* Invoice Number Box (Prominent) */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="text-center sm:text-right">
            <span className="text-xs font-bold text-blue-700 block uppercase tracking-wider">رقم الفاتورة الرسمي</span>
            <span className="text-2xl sm:text-3xl font-black text-gray-900 font-mono tracking-wide mt-0.5 block">
              #{invoice.invoiceNumber}
            </span>
          </div>

          <button
            onClick={handleCopyInvoiceNumber}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-blue-200 text-blue-800 rounded-lg hover:bg-blue-100/60 transition-colors shadow-2xs"
            title="نسخ رقم الفاتورة"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-600" />
                <span>تم النسخ!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>نسخ الرقم</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Financial Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center">
            <span className="text-xs text-gray-500 block mb-1">الإجمالي المطلوب</span>
            <span className="text-lg font-bold text-gray-900" dir="ltr">
              {formatCurrency(invoice.totalAmount)}
            </span>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center">
            <span className="text-xs text-emerald-700 block mb-1">المبلغ المدفوع</span>
            <span className="text-lg font-bold text-emerald-800" dir="ltr">
              {formatCurrency(invoice.paidAmount)}
            </span>
          </div>

          <div className={`col-span-2 sm:col-span-1 rounded-xl p-3 text-center border ${
            invoice.remainingAmount > 0
              ? 'bg-amber-50 border-amber-200 text-amber-900'
              : 'bg-gray-50 border-gray-200 text-gray-600'
          }`}>
            <span className="text-xs block mb-1">
              {invoice.remainingAmount > 0 ? 'متبقي كمديونية' : 'الحساب'}
            </span>
            <span className="text-lg font-bold" dir="ltr">
              {invoice.remainingAmount > 0 ? formatCurrency(invoice.remainingAmount) : 'خالص بالكامل'}
            </span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base transition-all shadow-md active:scale-[0.98] ring-2 ring-blue-600/30"
          >
            <Printer size={20} />
            <span>طباعة الفاتورة الحرارية (Enter)</span>
          </button>

          <button
            onClick={handleNewSale}
            className="flex items-center justify-center gap-2 py-3.5 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold text-base transition-colors border border-gray-300 active:scale-[0.98]"
          >
            <Plus size={20} />
            <span>فاتورة جديدة (Esc)</span>
          </button>
        </div>

        {/* Auto-print checkbox */}
        <div className="flex items-center justify-between pt-1 border-t border-gray-100">
          <label className="flex items-center gap-2 text-xs font-medium text-gray-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={autoPrint}
              onChange={(e) => handleAutoPrintToggle(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
            />
            <span>طباعة الإيصال تلقائياً فور تأكيد البيع في المرات القادمة</span>
          </label>

          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>{showPreview ? 'إخفاء المعاينة' : 'معاينة شكل الإيصال'}</span>
            {showPreview ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {/* Collapsible Thermal Preview */}
        {showPreview && (
          <div className="pt-3 border-t border-gray-200 bg-gray-100/70 p-4 rounded-xl">
            <ThermalReceiptPreview invoice={invoice} onPrint={handlePrint} showPrintButton={false} />
          </div>
        )}
      </div>
    </BaseModal>
  );
};
