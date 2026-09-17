import { Search, Plus } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';

interface SupplierReturnsFiltersProps {
  onSearch: (val: string) => void;
  onNewReturn: () => void;
}

export function SupplierReturnsFilters({ onSearch, onNewReturn }: SupplierReturnsFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-wrap gap-4 items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-sm w-full">
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="ابحث..."
            onChange={(e) => onSearch(e.target.value)}
            className={`${tokens.input} pl-4 pr-10`}
          />
        </div>
      </div>
      <button onClick={onNewReturn} className={`${tokens.btn.primary} flex items-center gap-2`}>
        <Plus size={18} />
        <span>مرتجع جديد</span>
      </button>
    </div>
  );
}
