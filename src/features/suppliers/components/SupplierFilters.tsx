import { Search, Plus } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
interface SupplierFiltersProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  onAddClick: () => void;
}
export function SupplierFilters({
  searchTerm,
  onSearchChange,
  onAddClick,
}: SupplierFiltersProps) {
  return (
    <div className={`${tokens.card} p-4 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:items-center sm:justify-between bg-white shadow-sm`}>
      {}
      <div className="flex items-center gap-3 flex-1 w-full sm:flex-wrap">
        <div className="relative flex-1 w-full sm:min-w-[200px] sm:max-w-[350px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="بحث بالاسم أو الهاتف..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`${tokens.input} bg-gray-50 w-full`}
          />
        </div>
      </div>
      {}
      <button onClick={onAddClick} className={tokens.btn.primary + " flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto"}>
        <Plus size={16} />
        إضافة مورد جديد
      </button>
    </div>
  );
}