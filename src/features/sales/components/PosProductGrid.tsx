import { useState } from 'react';
import { resolveProductImageUrl } from '../utils/posUtils';
import { tokens } from '@/shared/styles/tokens';
import { Search, Package, ShoppingCart, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { ProductResponse, CategorySummary } from '@/features/inventory/schemas/inventorySchemas';
import { useCategories, useDepartments } from '@/features/inventory/hooks/useInventory';
import { Spinner } from '@/shared/components/ui/Spinner';
import { Avatar } from '@/shared/components/ui/Avatar';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { useInfiniteScrollTrigger } from '@/shared/hooks/useInfiniteScrollTrigger';
interface PosProductGridProps {
  products: ProductResponse[];
  isLoading: boolean;
  onProductClick: (product: ProductResponse) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedDepartmentId: string;
  setSelectedDepartmentId: (id: string) => void;
  selectedCategoryId: string;
  setSelectedCategoryId: (id: string) => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore?: () => void;
}
export function PosProductGrid({
  products,
  isLoading,
  onProductClick,
  searchTerm,
  setSearchTerm,
  selectedDepartmentId,
  setSelectedDepartmentId,
  selectedCategoryId,
  setSelectedCategoryId,
  hasNextPage,
  isFetchingNextPage,
  onLoadMore
}: PosProductGridProps) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const hasActiveFilters = Boolean(selectedDepartmentId || selectedCategoryId);

  const sentinelRef = useInfiniteScrollTrigger(
    () => onLoadMore?.(),
    !!hasNextPage && !isLoading && !isFetchingNextPage
  );
  const { data: departmentsData } = useDepartments();
  const { data: categoriesData } = useCategories(selectedDepartmentId || undefined, { pageNumber: 1, pageSize: 50 });
  const departments = departmentsData?.items || [];
  const categories = categoriesData?.items || [];
  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-100">
      {/* Top Search & Filter Bar */}
      <div className="p-3 sm:p-5 bg-white z-10 flex flex-col gap-2.5 sm:gap-4 border-b border-gray-100">
        {/* Search Bar + Mobile Filter Toggle / Desktop Department Select */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Input */}
          <div className="relative flex-1 h-11 sm:h-12">
            <input
              type="text"
              placeholder="ابحث عن منتج بالاسم أو امسح الباركود"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                // Barcode scanners type-then-Enter just like a keyboard. When the search
                // has narrowed to exactly one in-stock product, Enter adds it straight to
                // the cart instead of making the cashier reach for the mouse to click it.
                if (e.key !== 'Enter') return;
                if (products.length !== 1) return;
                const only = products[0];
                if (only.totalQuantity <= 0) return;
                e.preventDefault();
                onProductClick(only);
                setSearchTerm('');
              }}
              className={`${tokens.input} pl-10 pr-4 sm:pl-12 h-full text-xs sm:text-base placeholder:text-gray-400 placeholder:text-xs sm:placeholder:text-sm`}
              autoFocus
            />
            <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="مسح البحث"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileFiltersOpen((prev) => !prev)}
            className={`sm:hidden h-11 px-3 rounded-xl border flex items-center justify-center gap-1.5 transition-all text-xs font-bold shrink-0 relative ${
              isMobileFiltersOpen || hasActiveFilters
                ? 'bg-[#e6f4ed] text-[#0f8e4c] border-[#0f8e4c] shadow-sm'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
            title="تصفية الأقسام"
          >
            <SlidersHorizontal size={16} />
            <span>فلترة</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-[#0f8e4c] absolute -top-1 -right-1 ring-2 ring-white" />
            )}
          </button>

          {/* Desktop Department Select */}
          <div className="hidden sm:block relative w-[220px] md:w-[260px] lg:w-[300px] h-12 shrink-0">
            <select
              value={selectedDepartmentId}
              onChange={(e) => {
                setSelectedDepartmentId(e.target.value);
                setSelectedCategoryId(''); // Reset category when department changes
              }}
              className={`${tokens.select} h-full cursor-pointer appearance-none pl-10 pr-4 text-sm`}
            >
              <option value="">جميع الأقسام الرئيسية</option>
              {departments.map((dept) => (
                <option key={dept.departmentId} value={dept.departmentId}>
                  {dept.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" size={18} />
          </div>
        </div>

        {/* Mobile Dropdown Filters (Collapsible on mobile) */}
        {isMobileFiltersOpen && (
          <div className="sm:hidden flex flex-col gap-2 pt-1 pb-1 border-t border-gray-50">
            <div className="flex items-center gap-2">
              <div className="relative flex-1 h-10">
                <select
                  value={selectedDepartmentId}
                  onChange={(e) => {
                    setSelectedDepartmentId(e.target.value);
                    setSelectedCategoryId('');
                  }}
                  className={`${tokens.select} h-full cursor-pointer appearance-none pl-9 pr-3 text-xs`}
                >
                  <option value="">جميع الأقسام الرئيسية</option>
                  {departments.map((dept) => (
                    <option key={dept.departmentId} value={dept.departmentId}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" size={16} />
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDepartmentId('');
                    setSelectedCategoryId('');
                  }}
                  className="h-10 px-2.5 rounded-lg border border-red-200 bg-red-50 text-red-600 text-xs font-medium flex items-center gap-1 shrink-0 hover:bg-red-100 transition-colors"
                >
                  <X size={14} />
                  <span>إلغاء</span>
                </button>
              )}
            </div>

            {/* Mobile Categories Chips — only show when a department is selected */}
            {selectedDepartmentId && categories.length > 0 && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar -mx-3 px-3">
                <button
                  type="button"
                  onClick={() => setSelectedCategoryId('')}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border shrink-0 ${
                    selectedCategoryId === ''
                      ? 'bg-[#0f8e4c] text-white border-[#0f8e4c] shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  الكل
                </button>
                {categories.map((cat: CategorySummary) => (
                  <button
                    type="button"
                    key={cat.categoryId}
                    onClick={() => setSelectedCategoryId(cat.categoryId)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border shrink-0 ${
                      selectedCategoryId === cat.categoryId
                        ? 'bg-[#0f8e4c] text-white border-[#0f8e4c] shadow-sm'
                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Desktop Categories Chips — only show when a department is selected */}
        {selectedDepartmentId && (
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 custom-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
            <button
              type="button"
              onClick={() => setSelectedCategoryId('')}
              className={`whitespace-nowrap px-4 sm:px-8 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors border shrink-0 ${
                selectedCategoryId === ''
                  ? 'bg-[#0f8e4c] text-white border-[#0f8e4c] shadow-sm'
                  : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200 hover:bg-gray-50'
              }`}
            >
              الكل
            </button>
            {categories.map((cat: CategorySummary) => (
              <button
                type="button"
                key={cat.categoryId}
                onClick={() => setSelectedCategoryId(cat.categoryId)}
                className={`whitespace-nowrap px-4 sm:px-8 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors border shrink-0 ${
                  selectedCategoryId === cat.categoryId
                    ? 'bg-[#0f8e4c] text-white border-[#0f8e4c] shadow-sm'
                    : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Grid */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50/50">
        <div className="flex-1 p-3 sm:p-5 overflow-y-auto custom-scrollbar">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Spinner size={40} />
            </div>
          ) : products.length === 0 ? (
            <EmptyState entity="منتجات" icon={Package} className="h-full" />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-3 sm:gap-4 content-start">
              {products.map(product => {
                const hasStock = product.totalQuantity > 0;
                const isLowStock = product.isLowStock;
                let statusLabel = 'متوفر';
                let statusClass = 'bg-[#e6f4ed] text-[#0f8e4c]'; // Light green bg, dark green text
                if (!hasStock) {
                  statusLabel = 'نفد المخزون';
                  statusClass = 'bg-[#fce8e6] text-[#c5221f]'; // Light red bg, dark red text
                } else if (isLowStock) {
                  statusLabel = 'مخزون منخفض';
                  statusClass = 'bg-[#fef7e0] text-[#ea8600]'; // Light orange bg, dark orange text
                }
                const imageSrc = product.imageUrl ? resolveProductImageUrl(product.imageUrl) : null;
                return (
                  <div
                    key={product.productId}
                    role="button"
                    tabIndex={hasStock ? 0 : -1}
                    onClick={() => hasStock && onProductClick(product)}
                    onKeyDown={(e) => {
                      if (hasStock && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        onProductClick(product);
                      }
                    }}
                    className={`bg-white rounded-2xl border border-gray-100 transition-all overflow-hidden flex flex-col p-2 sm:p-3 relative min-h-[190px] sm:min-h-[220px] ${
                      hasStock
                        ? 'cursor-pointer hover:border-gray-300 hover:shadow-md active:scale-[0.98] active:bg-gray-50'
                        : 'cursor-not-allowed opacity-70'
                    }`}
                  >
                    <span className={`absolute top-2 sm:top-3 right-2 sm:right-3 z-10 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md ${statusClass}`}>
                      {statusLabel}
                    </span>
                    <div className="h-20 sm:h-28 flex items-center justify-center mb-2 mt-2 shrink-0">
                      {imageSrc ? (
                        <img src={imageSrc} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                      ) : (
                        <Avatar name={product.name || '?'} size="xl" />
                      )}
                    </div>
                    <div className="flex flex-col flex-1 items-center text-center min-h-0">
                      <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1 line-clamp-1 leading-snug w-full">
                        {product.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-gray-400 line-clamp-1 mb-2 w-full">
                        {product.properties && Object.keys(product.properties).length > 0
                          ? Object.values(product.properties).join(' - ')
                          : product.category.name}
                      </p>
                      <div
                        className={`mt-auto mb-2 sm:mb-3 font-bold text-[11px] sm:text-[12px] shrink-0 ${
                          !hasStock ? 'text-[#c5221f]' : isLowStock ? 'text-[#ea8600]' : 'text-[#0f8e4c]'
                        }`}
                      >
                        المخزون: {product.totalQuantity}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          hasStock && onProductClick(product);
                        }}
                        disabled={!hasStock}
                        className={`w-full py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shrink-0 ${
                          hasStock
                            ? 'bg-[#0f8e4c] hover:bg-[#0c7a40] text-white shadow-sm'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart size={14} />
                        إضافة
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {!isLoading && products.length > 0 && (
            <div className="flex flex-col items-center gap-2 pt-4">
              {isFetchingNextPage && (
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                  <Spinner size={16} />
                  جاري تحميل المزيد...
                </div>
              )}
              {hasNextPage && !isFetchingNextPage && <div ref={sentinelRef} className="h-px w-full" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}