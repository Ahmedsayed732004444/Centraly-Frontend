import { resolveProductImageUrl } from '../utils/posUtils';
import { tokens } from '@/shared/styles/tokens';
import { Search, Package, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react';
import { ProductResponse, CategorySummary } from '@/features/inventory/schemas/inventorySchemas';
import { useCategories, useDepartments } from '@/features/inventory/hooks/useInventory';
import { Spinner } from '@/shared/components/ui/Spinner';
import { Avatar } from '@/shared/components/ui/Avatar';
import { EmptyState } from '@/shared/components/ui/EmptyState';
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
  pageNumber: number;
  setPageNumber: (page: number) => void;
  totalPages: number;
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
  pageNumber,
  setPageNumber,
  totalPages
}: PosProductGridProps) {
  const { data: departmentsData } = useDepartments();
  const { data: categoriesData } = useCategories(selectedDepartmentId || undefined, { pageNumber: 1, pageSize: 50 });
  const departments = departmentsData?.items || [];
  const categories = categoriesData?.items || [];
  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-100">
      {}
      <div className="p-3 sm:p-5 bg-white z-10 flex flex-col gap-3 sm:gap-5 border-b border-gray-100">
        {}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
          {}
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
              className={`${tokens.input} pl-12 h-full text-sm sm:text-base`}
              autoFocus
            />
            {}
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          {}
          <div className="relative w-full sm:w-[220px] md:w-[260px] lg:w-[300px] h-11 sm:h-12 shrink-0">
            <select
              value={selectedDepartmentId}
              onChange={(e) => {
                setSelectedDepartmentId(e.target.value);
                setSelectedCategoryId(''); // Reset category when department changes
              }}
              className={`${tokens.select} h-full cursor-pointer`}
            >
              <option value="">اختر القسم الرئيسي</option>
              {departments.map((dept) => (
                <option key={dept.departmentId} value={dept.departmentId}>
                  {dept.name}
                </option>
              ))}
            </select>
            {/* Custom Chevron (as in design, drop down arrow on the left) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        {/* Categories Chips â€” only show when a department is selected */}
        {selectedDepartmentId && (
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 custom-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
            <button
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
        </div>
        {}
        {totalPages > 1 && (
          <div className="border-t border-gray-100 p-3 sm:p-4 bg-white flex items-center justify-center gap-3 sm:gap-4">
            <button
              disabled={pageNumber === 1}
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              className="p-1.5 sm:p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <span className="font-semibold text-gray-700 text-xs sm:text-sm">
              صفحة {pageNumber} من {totalPages}
            </span>
            <button
              disabled={pageNumber === totalPages}
              onClick={() => setPageNumber(Math.min(totalPages, pageNumber + 1))}
              className="p-1.5 sm:p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}