import { ReactNode, useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
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
 * One search-box-plus-filters shell used by every list page's filter bar.
 * Has an expand/collapse toggle for advanced filters.
 */
export function FiltersBar({ searchValue, onSearchChange, searchPlaceholder = 'بحث...', children, className = '' }: FiltersBarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className={`${tokens.card} p-4 bg-white flex flex-col gap-4 mb-6 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
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
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors w-full sm:w-auto shrink-0"
          >
            <Filter size={16} />
            <span>تصفية متقدمة</span>
            {showAdvanced ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
          </button>
        )}
      </div>

      {children && showAdvanced && (
        <div className="flex flex-col sm:flex-row flex-wrap w-full gap-3 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}
