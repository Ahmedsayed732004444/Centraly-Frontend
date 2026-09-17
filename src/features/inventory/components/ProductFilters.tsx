import { Search, Plus } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { useCategories, useDepartments } from '@/features/inventory/hooks/useInventory';
import { HasPermission } from '@/features/auth/components/HasPermission';
import { Permissions } from '@/features/auth/schemas/permissions';

interface ProductFiltersProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  departmentFilter: string;
  onDepartmentChange: (val: string) => void;
  categoryFilter: string;
  onCategoryChange: (val: string) => void;
  stockFilter: string;
  onStockChange: (val: string) => void;
  usageFilter: string;
  onUsageChange: (val: string) => void;
  onAddClick: () => void;
}

export function ProductFilters({
  searchTerm,
  onSearchChange,
  departmentFilter,
  onDepartmentChange,
  categoryFilter,
  onCategoryChange,
  stockFilter,
  onStockChange,
  usageFilter,
  onUsageChange,
  onAddClick,
}: ProductFiltersProps) {
  const { data: categoriesData } = useCategories();
  const { data: departmentsData } = useDepartments();

  const categories = categoriesData?.items || [];
  const departments = departmentsData?.items || [];

  return (
    <div className={`${tokens.card} p-4 flex flex-wrap gap-4 items-center justify-between bg-white shadow-sm`}>
      {/* Left side: Filters */}
      <div className="flex items-center gap-3 flex-1 flex-wrap">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px] max-w-[300px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="بحث بالاسم أو الباركود..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`${tokens.input} bg-gray-50`}
          />
        </div>

        {/* Department Filter */}
        <div className="flex items-center gap-2">
          <select
            value={departmentFilter}
            onChange={(e) => {
              onDepartmentChange(e.target.value);
              // Reset category when department changes if desired, but here we just leave it to backend logic or user
            }}
            className={`${tokens.select} bg-gray-50 min-w-[140px]`}
          >
            <option value="">جميع الأقسام الرئيسية</option>
            {departments.map((dep) => (
              <option key={dep.departmentId} value={dep.departmentId}>
                {dep.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={`${tokens.select} bg-gray-50 min-w-[140px]`}
          >
            <option value="">جميع الأقسام الفرعية</option>
            {categories
              .filter(cat => !departmentFilter || cat.department.departmentId === departmentFilter)
              .map((cat) => (
              <option key={cat.categoryId} value={cat.categoryId}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Stock Status Filter */}
        <div className="flex items-center gap-2">
          <select
            value={stockFilter}
            onChange={(e) => onStockChange(e.target.value)}
            className={`${tokens.select} bg-gray-50 min-w-[140px]`}
          >
            <option value="">حالة المخزون (الكل)</option>
            <option value="InStock">متوفر</option>
            <option value="LowStock">منخفض</option>
            <option value="OutOfStock">نفد المخزون</option>
          </select>
        </div>

        {/* Usage Filter */}
        <div className="flex items-center gap-2">
          <select
            value={usageFilter}
            onChange={(e) => onUsageChange(e.target.value)}
            className={`${tokens.select} bg-gray-50 min-w-[140px]`}
          >
            <option value="">النوع (الكل)</option>
            <option value="1">بيع فقط</option>
            <option value="2">صيانة فقط</option>
            <option value="3">بيع أو صيانة</option>
          </select>
        </div>
      </div>

      {/* Right side: Add Button */}
      <HasPermission permission={Permissions.InventoryWrite}>
        <button onClick={onAddClick} className={tokens.btn.primary + " flex items-center gap-2 whitespace-nowrap"}>
          <Plus size={16} />
          إضافة منتج جديد
        </button>
      </HasPermission>
    </div>
  );
}
