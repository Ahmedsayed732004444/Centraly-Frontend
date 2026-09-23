import { ReactNode, useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
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
 * Has an expand/collapse toggle for filters.
 */
export function FiltersBar({ searchValue, onSearchChange, searchPlaceholder = 'بحث...', children, className = '' }: FiltersBarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className={`${tokens.card} p-3 sm:p-4 bg-white flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6 ${className}`}>
      <div className="flex items-center gap-2 sm:gap-4 w-full">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className={`${tokens.input} pl-3 pr-10 w-full h-11 text-xs sm:text-sm placeholder:text-gray-400 placeholder:text-xs sm:placeholder:text-sm`}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        {children && (
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`flex items-center justify-center gap-1.5 px-3.5 sm:px-4 h-11 text-xs sm:text-sm font-bold border rounded-xl transition-all shrink-0 ${
              showAdvanced
                ? 'bg-[#e6f4ed] text-[#0f8e4c] border-[#0f8e4c] shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
            }`}
          >
            <SlidersHorizontal size={16} />
            <span>فلترة</span>
            {showAdvanced ? (
              <ChevronUp size={16} className="text-[#0f8e4c]" />
            ) : (
              <ChevronDown size={16} className="text-slate-500" />
            )}
          </button>
        )}
      </div>

      {children && showAdvanced && (
        <div className="flex flex-col sm:flex-row flex-wrap w-full gap-3 pt-3 sm:pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}
