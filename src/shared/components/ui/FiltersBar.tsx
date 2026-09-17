import { ReactNode } from 'react';
import { Search } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';

interface FiltersBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  /** Extra filter controls (selects, DateRangeFilter, ...), laid out beside the search box. */
  children?: ReactNode;
  className?: string;
}

/**
 * One search-box-plus-filters shell used by every list page's filter bar, so a page
 * with 4 filters (like purchases history) and a page with 1 (like sales history used
 * to) render inside the same layout instead of diverging.
 */
export function FiltersBar({ searchValue, onSearchChange, searchPlaceholder = 'بحث...', children, className = '' }: FiltersBarProps) {
  return (
    <div className={`${tokens.card} p-4 bg-white flex flex-col md:flex-row gap-4 md:justify-between md:items-center mb-6 ${className}`}>
      <div className="relative w-full md:w-80">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder={searchPlaceholder}
          className={`${tokens.input} pl-3 pr-10 w-full`}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      {children && (
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-4">
          {children}
        </div>
      )}
    </div>
  );
}
