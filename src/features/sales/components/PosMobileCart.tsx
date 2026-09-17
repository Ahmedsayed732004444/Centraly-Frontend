import { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { PosCart } from './PosCart';
import { PaymentMethod } from '../schemas/salesSchemas';
interface PosMobileCartProps {
  items: any[];
  totalQuantity: number;
  totalAmount: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCheckout: (method: PaymentMethod) => void;
}
export function PosMobileCart({
  items,
  totalQuantity,
  totalAmount,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout
}: PosMobileCartProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex items-center justify-between gap-3">
         <div className="flex flex-col min-w-0">
            <span className="text-gray-500 text-xs sm:text-sm font-semibold truncate">الإجمالي ({totalQuantity} منتجات)</span>
            <span className="text-[#0f8e4c] font-bold text-base sm:text-lg truncate">{new Intl.NumberFormat('en-EG', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(totalAmount)} ج.م</span>
         </div>
         <button
           onClick={() => setIsOpen(true)}
           className="bg-[#0f8e4c] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold flex items-center gap-1.5 sm:gap-2 shadow-sm text-sm sm:text-base shrink-0"
         >
           <ShoppingCart size={18} className="sm:hidden" />
           <ShoppingCart size={20} className="hidden sm:block" />
           عرض السلة
         </button>
      </div>
      {}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          {}
          <div className="absolute top-0 right-0 bottom-0 w-full sm:w-[90%] sm:max-w-[400px] bg-[#f8f9fa] shadow-2xl flex flex-col">
             {}
             <div className="p-4 pb-0 flex justify-start bg-[#f8f9fa] shrink-0 z-30">
               <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 rounded-xl transition-colors shadow-sm">
                 <X size={20} className="text-gray-600" />
               </button>
             </div>
             <div className="flex-1 overflow-hidden relative">
               <PosCart
                 items={items}
                 onUpdateQuantity={onUpdateQuantity}
                 onRemoveItem={onRemoveItem}
                 onClearCart={onClearCart}
                 onCheckout={(method) => {
                   onCheckout(method);
                   setIsOpen(false);
                 }}
               />
             </div>
          </div>
        </div>
      )}
    </>
  );
}