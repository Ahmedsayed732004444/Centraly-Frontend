import React, { useEffect } from 'react';
import { MaintenanceResponse } from '../schemas/maintenanceSchemas';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { CheckCircle2, Printer, Clock, Smartphone, User, X } from 'lucide-react';
import { formatCurrency } from '@/shared/utils/currency';
import {
  printMaintenanceIntakeReceipt,
  printMaintenanceDeliveryReceipt,
  getDisplayTicketNumber,
  formatDeliveryDateDetailed,
} from '../utils/maintenanceReceiptPrint';

interface MaintenanceSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: MaintenanceResponse | null;
  mode: 'intake' | 'delivery'; // intake: upon creation, delivery: upon delivery
}

export const MaintenanceSuccessModal: React.FC<MaintenanceSuccessModalProps> = ({
  isOpen,
  onClose,
  ticket,
  mode,
}) => {
  // Keyboard shortcut: Enter to print, Esc to close
  useEffect(() => {
    if (!isOpen || !ticket) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
        e.preventDefault();
        handlePrint();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, ticket, mode]);

  if (!ticket) return null;

  const ticketNumber = getDisplayTicketNumber(ticket.id);
  const deliveryInfo = formatDeliveryDateDetailed(ticket.deliveryDate);
  const isIntake = mode === 'intake';

  const handlePrint = () => {
    if (isIntake) {
      printMaintenanceIntakeReceipt(ticket);
    } else {
      printMaintenanceDeliveryReceipt(ticket);
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={isIntake ? 'تم استلام الجهاز وفتح التذكرة' : 'تم تسليم الجهاز وإغلاق التذكرة'}
      size="md"
      zIndexClassName="z-[75]"
    >
      <div className="p-5 sm:p-6 space-y-5 text-right">
        {/* Top Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 shadow-inner ring-8 ring-emerald-50">
            <CheckCircle2 size={36} className="stroke-[2.5]" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            {isIntake ? 'تم فتح طلب الصيانة بنجاح' : 'تم تسليم الجهاز وتحصيل الحساب'}
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            {isIntake ? 'جاهز لطباعة إيصال استلام العميل' : 'جاهز لطباعة فاتورة التسليم والضمان'}
          </p>
        </div>

        {/* Ticket Number Box */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-center">
          <span className="text-xs font-bold text-blue-700 block uppercase tracking-wider">رقم تذكرة الصيانة</span>
          <span className="text-2xl sm:text-3xl font-black text-gray-900 font-mono tracking-wide mt-0.5 block">
            #{ticketNumber}
          </span>
        </div>

        {/* Prominent Delivery Date in Intake Mode */}
        {isIntake && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-800">
              <Clock size={16} />
              <span>ميعاد التسليم المتوقع للعميل</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-amber-900 mt-1">
              {deliveryInfo.relative || deliveryInfo.formatted}
            </div>
            {deliveryInfo.relative && deliveryInfo.formatted !== deliveryInfo.relative && (
              <div className="text-xs text-amber-700 mt-0.5">{deliveryInfo.formatted}</div>
            )}
          </div>
        )}

        {/* Quick Details Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 space-y-2 text-xs sm:text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-1">
              <User size={14} /> العميل:
            </span>
            <span className="font-bold text-gray-800">{ticket.customerName}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-1">
              <Smartphone size={14} /> الجهاز:
            </span>
            <span className="font-bold text-gray-800">{ticket.deviceDescription || 'جهاز عميل'}</span>
          </div>

          {isIntake ? (
            <div className="flex justify-between items-center border-t border-gray-200 pt-2">
              <span className="text-gray-500">العربون المدفوع:</span>
              <span className="font-bold text-emerald-700" dir="ltr">
                {ticket.paidAmount > 0 ? formatCurrency(ticket.paidAmount) : 'لا يوجد'}
              </span>
            </div>
          ) : (
            <div className="flex justify-between items-center border-t border-gray-200 pt-2">
              <span className="text-gray-700 font-bold">السعر الكلي للصيانة:</span>
              <span className="text-base font-black text-blue-700" dir="ltr">
                {formatCurrency(ticket.totalPrice)}
              </span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base transition-all shadow-md active:scale-[0.98] ring-2 ring-blue-600/30"
          >
            <Printer size={20} />
            <span>
              {isIntake ? 'طباعة إيصال الاستلام (Enter)' : 'طباعة فاتورة التسليم (Enter)'}
            </span>
          </button>

          <button
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-3.5 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold text-base transition-colors border border-gray-300 active:scale-[0.98]"
          >
            <X size={18} />
            <span>إغلاق (Esc)</span>
          </button>
        </div>
      </div>
    </BaseModal>
  );
};
