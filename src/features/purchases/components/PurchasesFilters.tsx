import { tokens } from '@/shared/styles/tokens';
import { useEffect, useState } from 'react';
import { useSuppliers } from '@/features/suppliers/hooks/useSuppliers';
import { DateRangeFilter } from '@/shared/components/ui/DateRangeFilter';
import { FiltersBar } from '@/shared/components/ui/FiltersBar';
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

  useEffect(() => {
    onSearch(debouncedTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTerm]);

  return (
    <FiltersBar
      searchValue={term}
      onSearchChange={setTerm}
      searchPlaceholder="ابحث برقم الفاتورة..."
    >
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
    </FiltersBar>
  );
}