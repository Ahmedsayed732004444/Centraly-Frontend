import { resolveProductImageUrl } from '../utils/posUtils';
import { Trash2, Plus, Minus, Undo2, CreditCard, Wallet } from 'lucide-react';
import { PaymentMethod } from '../schemas/salesSchemas';
import { CartItem } from '../utils/cartLogic';
import { Avatar } from '@/shared/components/ui/Avatar';
export type { CartItem };
function fmt(value: number): string {
  return new Intl.NumberFormat('en-EG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}
interface PosCartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCheckout: (method: PaymentMethod) => void;
}
export function PosCart({ items, onUpdateQuantity, onRemoveItem, onClearCart, onCheckout }: PosCartProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal;
  const totalQuantity = items.reduce((s, i) => s + i.quantity, 0);
  return (
    <div className="flex flex-col h-full bg-[#f8f9fa] z-20 relative">
      {}
      <div className="p-4 sm:p-6 pb-4 flex items-start justify-between shrink-0 bg-[#f8f9fa]">
        <div className="flex flex-col items-end">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2 mb-1">
            سلة المشتريات
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </h2>
          <div className="text-sm font-semibold flex items-center gap-1.5" dir="rtl">
            <span className="text-[#0f8e4c]">الكمية {totalQuantity}</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#0f8e4c]">{items.length} أصناف</span>
          </div>
        </div>
        <button
          onClick={onClearCart}
          disabled={items.length === 0}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50 shadow-sm shrink-0"
        >
          <Trash2 size={20} />
        </button>
      </div>
      {}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-2 space-y-3 sm:space-y-4 custom-scrollbar bg-[#f8f9fa]">
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <p className="font-semibold text-lg">السلة فارغة</p>
          </div>
        ) : (
          items.map(item => {
            const imageSrc = item.imageUrl ? resolveProductImageUrl(item.imageUrl) : null;
            return (
              <div key={item.id} className="bg-white border border-gray-100 p-3 sm:p-4 rounded-2xl shadow-sm flex gap-3 sm:gap-4 relative group">
                {}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 p-1">
                  {imageSrc ? (
                    <img src={imageSrc} alt={item.productName} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                  ) : (
                    <Avatar name={item.productName} size="md" />
                  )}
                </div>
                {}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{item.productName}</h4>
                    <p className="text-[11px] text-gray-400 line-clamp-1">
                      {item.properties && Object.keys(item.properties).length > 0
                        ? Object.values(item.properties).join(' - ')
                        : item.batchName}
                    </p>
                  </div>
                  <div className="mt-3 w-max">
                    <div className="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden h-9">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-9 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border-l border-gray-200"
                      >
                        <Minus size={14} />
                      </button>
                      <input
                        type="number"
                        min="1"
                        max={item.maxQuantity}
                        value={item.quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (!isNaN(val)) {
                            onUpdateQuantity(item.id, val - item.quantity);
                          }
                        }}
                        onFocus={(e) => e.target.select()}
                        className="w-10 h-full text-center font-bold text-sm bg-transparent outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        disabled={item.quantity >= item.maxQuantity}
                        className="w-9 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors border-r border-gray-200 disabled:opacity-50"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
                {}
                <div className="flex flex-col items-end justify-between shrink-0 pl-1">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="w-9 h-9 flex items-center justify-center bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors shadow-sm"
                  >
                    <Undo2 size={16} />
                  </button>
                  <div className="font-bold text-[#0f8e4c] text-base mt-auto">
                    {fmt(item.price * item.quantity)} <span className="text-xs font-normal">ج.م</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {}
      <div className="p-4 sm:p-6 bg-[#f8f9fa] shrink-0 mt-2">
        <div className="flex items-center justify-between text-gray-900 font-bold mb-4">
          <span className="text-sm">المجموع الفرعي</span>
          <span className="text-sm">{fmt(subtotal)} <span className="text-xs font-normal">ج.م</span></span>
        </div>
        <div className="flex items-center justify-between text-xl font-bold text-gray-900 mb-6">
          <span className="text-xl">الإجمالي</span>
          <span className="text-[26px] text-[#0f8e4c]">{fmt(total)} <span className="text-sm font-normal">ج.م</span></span>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          <button
            disabled={items.length === 0}
            onClick={() => onCheckout(PaymentMethod.Cash)}
            className="w-full py-3 sm:py-4 rounded-xl font-bold text-white bg-[#0f8e4c] hover:bg-[#0c7a40] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm text-base sm:text-lg"
          >
            <Wallet size={22} />
            دفع كاش
          </button>
          <button
            disabled={items.length === 0}
            onClick={() => onCheckout(PaymentMethod.Deferred)}
            className="w-full py-3 sm:py-4 rounded-xl font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base sm:text-lg shadow-sm"
          >
            <CreditCard size={22} className="text-gray-500" />
            دفع آجل
          </button>
        </div>
      </div>
    </div>
  );
}