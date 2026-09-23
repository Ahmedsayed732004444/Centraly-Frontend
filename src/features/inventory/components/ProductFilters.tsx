import { tokens } from '@/shared/styles/tokens';
import { useCategories, useDepartments } from '@/features/inventory/hooks/useInventory';
import { FiltersBar } from '@/shared/components/ui/FiltersBar';

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
}: ProductFiltersProps) {
  const { data: categoriesData } = useCategories();
  const { data: departmentsData } = useDepartments();

  const categories = categoriesData?.items || [];
  const departments = departmentsData?.items || [];

  return (
    <FiltersBar
      searchValue={searchTerm}
      onSearchChange={onSearchChange}
      searchPlaceholder="بحث بالاسم أو الباركود..."
    >
      <select
        value={departmentFilter}
        onChange={(e) => onDepartmentChange(e.target.value)}
        className={`${tokens.select} bg-gray-50 min-w-[140px] w-full sm:w-auto`}
      >
        <option value="">جميع الأقسام الرئيسية</option>
        {departments.map((dep) => (
          <option key={dep.departmentId} value={dep.departmentId}>
            {dep.name}
          </option>
        ))}
      </select>

      <select
        value={categoryFilter}
        onChange={(e) => onCategoryChange(e.target.value)}
        className={`${tokens.select} bg-gray-50 min-w-[140px] w-full sm:w-auto`}
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

      <select
        value={stockFilter}
        onChange={(e) => onStockChange(e.target.value)}
        className={`${tokens.select} bg-gray-50 min-w-[140px] w-full sm:w-auto`}
      >
        <option value="">حالة المخزون (الكل)</option>
        <option value="InStock">متوفر</option>
        <option value="LowStock">منخفض</option>
        <option value="OutOfStock">نفد المخزون</option>
      </select>

      <select
        value={usageFilter}
        onChange={(e) => onUsageChange(e.target.value)}
        className={`${tokens.select} bg-gray-50 min-w-[140px] w-full sm:w-auto`}
      >
        <option value="">النوع (الكل)</option>
        <option value="1">بيع فقط</option>
        <option value="2">صيانة فقط</option>
        <option value="3">بيع أو صيانة</option>
      </select>
    </FiltersBar>
  );
}
