import { Info, Package, Archive, Hash, Calendar, CheckCircle2, Layers, Tag, BellRing } from 'lucide-react';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
import { formatDateOnly, formatDateTime } from '@/shared/utils/date';

interface ProductOverviewCardProps {
  product: ProductResponse;
}

export function ProductOverviewCard({ product }: ProductOverviewCardProps) {
  const isOutOfStock = product.totalQuantity === 0;
  const isLowStock = !isOutOfStock && product.totalQuantity <= product.minQuantityAlert;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative z-10">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center justify-end gap-3 w-full">
          <div className="text-right">
            <h2 className="text-lg font-bold text-gray-900">المعلومات الأساسية</h2>
            <p className="text-xs text-gray-500 mt-0.5">المعلومات الرئيسية للمنتج</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm">
            <Info size={20} />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <InfoRow 
              icon={<Package size={18} />} 
              label="الكمية الإجمالية" 
              value={<span className="text-emerald-700 font-bold">{product.totalQuantity}</span>} 
            />
            <InfoRow 
              icon={<Archive size={18} />} 
              label="موقع التخزين" 
              value={product.storageLocation || '---'} 
            />
            <InfoRow 
              icon={<Hash size={18} />} 
              label="الباركود" 
              value={product.barcode || '---'} 
            />
            <InfoRow 
              icon={<Calendar size={18} />} 
              label="تاريخ الإنشاء" 
              value={formatDateTime(product.createdAt)}
            />
            <InfoRow 
              icon={<CheckCircle2 size={18} className={isOutOfStock ? 'text-red-500' : 'text-emerald-500'} />} 
              label="حالة المخزون" 
              value={
                <span className={isOutOfStock ? 'text-red-600' : 'text-emerald-600'}>
                  {isOutOfStock ? 'نفد' : 'سليم'}
                </span>
              } 
            />
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <InfoRow 
              icon={<Layers size={18} className="text-blue-500" />} 
              label="القسم الرئيسي" 
              value={
                <div className="flex flex-col text-left">
                  <span>{product.department?.name || '---'}</span>
                </div>
              } 
            />
            <InfoRow 
              icon={<Tag size={18} className="text-blue-500" />} 
              label="القسم الفرعي" 
              value={<span className="text-gray-900">{product.category?.name || '---'}</span>} 
            />
            <InfoRow 
              icon={<Calendar size={18} />} 
              label="تاريخ الإضافة" 
              value={formatDateOnly(product.createdAt)}
            />
            <InfoRow 
              icon={<CheckCircle2 size={18} className={isLowStock ? 'text-amber-500' : 'text-emerald-500'} />} 
              label="حالة المخزون" 
              value={
                <span className={isLowStock ? 'text-amber-600' : 'text-emerald-600'}>
                  {isOutOfStock ? 'نفد المخزون' : isLowStock ? 'منخفض' : 'متوفر'}
                </span>
              } 
            />
            <InfoRow 
              icon={<BellRing size={18} className="text-amber-500" />} 
              label="الحد الأدنى للتنبيه" 
              value={<span className="text-gray-900">{product.minQuantityAlert}</span>} 
            />
          </div>

        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode, label: string, value: React.ReactNode }) {
  return (
    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center justify-between hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 shadow-sm">
          {icon}
        </div>
        <span className="text-sm font-semibold text-gray-600">{label}</span>
      </div>
      <div className="font-bold text-gray-900 text-base text-left" dir="ltr">
        {value}
      </div>
    </div>
  );
}
