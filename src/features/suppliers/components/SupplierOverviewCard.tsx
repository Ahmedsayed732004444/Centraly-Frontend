import { formatCurrency } from '@/shared/utils/currency';
import { formatDateOnly } from '@/shared/utils/date';
import { tokens } from '@/shared/styles/tokens';
import { SupplierResponse } from '../schemas/supplierSchemas';
import { Phone, MapPin, Tag, CreditCard } from 'lucide-react';
interface SupplierOverviewCardProps {
  supplier: SupplierResponse;
  onPay?: () => void;
}
const translateType = (type?: string) => {
  if (!type) return 'غير محدد';
  const map: Record<string, string> = {
    'Wholesale': 'جملة',
    'Retail': 'تجزئة (قطاعي)',
    'Distributor': 'موزع',
    'Company': 'شركة',
    'Individual': 'فرد (شخصي)',
  };
  return map[type] || type;
};
export function SupplierOverviewCard({ supplier, onPay }: SupplierOverviewCardProps) {
  const isOwedByUs = supplier.debtBalance > 0;
  const isOwedToUs = supplier.debtBalance < 0;
  return (
    <div className={`${tokens.card} p-6 bg-white flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-start`}>
      <div className="space-y-4 flex-1 min-w-0 w-full">
        <h2 className="text-2xl font-bold text-gray-900 break-words">{supplier.name}</h2>
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-2 text-gray-600 flex-wrap">
            <Tag size={18} className="text-gray-400 shrink-0" />
            <span className="text-sm font-medium">النوع:</span>
            <span className="text-sm font-bold text-gray-800">{translateType(supplier.type)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 flex-wrap">
            <Phone size={18} className="text-gray-400 shrink-0" />
            <span className="text-sm font-medium">الهاتف:</span>
            <span className="text-sm font-bold text-gray-800 font-mono" dir="ltr">{supplier.phone || '---'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 flex-wrap">
            <MapPin size={18} className="text-gray-400 shrink-0" />
            <span className="text-sm font-medium">العنوان:</span>
            <span className="text-sm font-bold text-gray-800 break-words">{supplier.address || '---'}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[250px] shrink-0">
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col items-center justify-center text-center relative">
          <span className="text-sm text-gray-500 font-medium mb-1">الرصيد الحالي للمورد</span>
          <span className={`text-2xl font-bold break-all ${isOwedByUs ? 'text-green-600' : isOwedToUs ? 'text-red-600' : 'text-gray-900'}`}>
            {formatCurrency(Math.abs(supplier.debtBalance))}
          </span>
          <span className="text-xs text-gray-500 mt-1 font-medium">
            {isOwedByUs ? '(مطلوب سداده للمورد)' : isOwedToUs ? '(دفعنا بزيادة - لنا عند المورد)' : '(الحساب مغلق ومُصفّى)'}
          </span>
          {supplier.debtBalance !== 0 && onPay && (
            <button
              onClick={onPay}
              className={`mt-3 w-full justify-center text-sm ${isOwedByUs ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors`}
            >
              <CreditCard size={16} />
              {isOwedByUs ? 'تسديد دفعة' : 'استلام دفعة'}
            </button>
          )}
        </div>
        <div className="flex gap-4">
          <div className="flex-1 bg-blue-50/50 rounded-xl p-3 border border-blue-100 text-center">
            <span className="text-xs text-gray-500 block mb-1">فواتير الشراء</span>
            <span className="text-lg font-bold text-blue-700">{supplier.purchaseInvoicesCount}</span>
          </div>
          <div className="flex-1 bg-orange-50/50 rounded-xl p-3 border border-orange-100 text-center">
            <span className="text-xs text-gray-500 block mb-1">المرتجعات</span>
            <span className="text-lg font-bold text-orange-700">{supplier.returnsCount}</span>
          </div>
        </div>
        <div className="text-center mt-2">
          <span className="text-xs text-gray-400">تاريخ الإضافة: {formatDateOnly(supplier.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}