import { tokens } from '@/shared/styles/tokens';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSuppliers } from '@/features/suppliers/hooks/useSuppliers';
import { DateRangeFilter } from '@/shared/components/ui/DateRangeFilter';
import { useDebounce } from '@/shared/hooks/useDebounce';
interface PurchasesFiltersProps {
  onSearch: (searchTerm: string) => void;
  onSupplierChange: (supplierId: string) => void;
  onDateChange: (startDate: string, endDate: string) => void;
}
export function PurchasesFilters({ onSearch, onSupplierChange, onDateChange }: PurchasesFiltersProps) {
  const [term, setTerm] = useState('');
  const debouncedTerm = useDebounce(term, 500);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { data: suppliersData } = useSuppliers({ pageNumber: 1, pageSize: 500 });
  const suppliers = suppliersData?.items || [];
  const handleDateChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
    onDateChange(start, end);
  };
  // Debounced the same way sales history's search box is, so typing a purchase
  // invoice number doesn't fire a request per keystroke.
  useEffect(() => {
    onSearch(debouncedTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTerm]);
  return (
    <div className={`${tokens.card} p-4 bg-white flex flex-col md:flex-row gap-4 md:justify-between md:items-center mb-6`}>
      <div className="relative w-full md:w-80">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="ابحث برقم الفاتورة..."
          className={`${tokens.input} pl-3 pr-10 w-full`}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-4">
        <select
          className={`${tokens.input} w-full sm:w-auto`}
          onChange={(e) => onSupplierChange(e.target.value)}
        >
          <option value="">كل الموردين</option>
          {suppliers.map(s => (
            <option key={s.supplierId} value={s.supplierId}>{s.name}</option>
          ))}
        </select>
        <DateRangeFilter startDate={startDate} endDate={endDate} onChange={handleDateChange} />
      </div>
    </div>
  );
}