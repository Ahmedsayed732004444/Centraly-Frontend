import { DatePicker } from '@/shared/components/ui/DatePicker';
import { FiltersBar } from '@/shared/components/ui/FiltersBar';

interface SalesReturnsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  dateFilter: string;
  onDateChange: (value: string) => void;
}

export function SalesReturnsFilters({ search, onSearchChange, dateFilter, onDateChange }: SalesReturnsFiltersProps) {
  return (
    <FiltersBar
      searchValue={search}
      onSearchChange={onSearchChange}
      searchPlaceholder="البحث برقم الفاتورة..."
    >
      <div className="w-full sm:w-48 shrink-0">
        <DatePicker value={dateFilter} onChange={onDateChange} placeholder="تاريخ المرتجع" />
      </div>
    </FiltersBar>
  );
}
