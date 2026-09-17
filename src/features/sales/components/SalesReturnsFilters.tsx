import { Search } from 'lucide-react';
import { DatePicker } from '@/shared/components/ui/DatePicker';
interface SalesReturnsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  dateFilter: string;
  onDateChange: (value: string) => void;
}
export function SalesReturnsFilters({ search, onSearchChange, dateFilter, onDateChange }: SalesReturnsFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div className="relative flex-1 sm:max-w-md">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="البحث برقم الفاتورة..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className="w-full sm:w-48 shrink-0">
        <DatePicker value={dateFilter} onChange={onDateChange} placeholder="تاريخ المرتجع" />
      </div>
    </div>
  );
}
