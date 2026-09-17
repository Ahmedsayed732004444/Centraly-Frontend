import { tokens } from '@/shared/styles/tokens';
import { Bell, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Global Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            aria-label="بحث شامل"
            placeholder="ابحث عن فاتورة، عميل، منتج..." 
            className={`${tokens.input} bg-gray-50`}
          />
        </div>
      </div>

      {/* Actions & Profile */}
      <div className="flex items-center gap-4">
        <button 
          className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="التنبيهات"
        >
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-gray-200 mx-2"></div>
        
        <div className="flex items-center gap-3 cursor-pointer p-1 pr-2 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="text-left hidden md:block">
            <p className="text-sm font-semibold text-gray-700">مدير النظام</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
