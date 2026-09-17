import { SearchIcon, PlusIcon } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useState, useEffect } from 'react';

interface CustomersFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onAddClick: () => void;
}

export function CustomersFilters({ searchTerm, onSearchChange, onAddClick }: CustomersFiltersProps) {
  const [localSearch, setLocalSearch] = useState(searchTerm);
  const debouncedSearch = useDebounce(localSearch, 300);

  useEffect(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch, onSearchChange]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative w-full sm:w-96">
        <input
          type="text"
          placeholder="ابحث عن عميل بالاسم أو رقم الهاتف..."
          className={tokens.input + ' pl-10'}
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
        <SearchIcon size={18} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
      </div>
      <button onClick={onAddClick} className={tokens.btn.primary + ' w-full sm:w-auto shrink-0 flex items-center justify-center gap-2'}>
        <PlusIcon size={18} />
        إضافة عميل
      </button>
    </div>
  );
}
