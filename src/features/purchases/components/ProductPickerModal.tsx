import { useEffect, useState } from 'react';
import { tokens } from '@/shared/styles/tokens';
import { Column } from '@/shared/components/ui/DataTable';
import { PickerModal } from '@/shared/components/ui/PickerModal';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useInfiniteProducts, useCategories, useDepartments } from '@/features/inventory/hooks/useInventory';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';

interface ProductPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (products: ProductResponse[]) => void;
  excludeProductIds?: string[];
}

const PAGE_SIZE = 10;

export function ProductPickerModal({
  isOpen,
  onClose,
  onAdd,
  excludeProductIds = [],
}: ProductPickerModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [selectedMap, setSelectedMap] = useState<Map<string, ProductResponse>>(new Map());

  const debouncedSearch = useDebounce(searchTerm, 400);
  const excludedSet = new Set(excludeProductIds);

  const { items: products, totalCount, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteProducts({
    pageSize: PAGE_SIZE,
    searchValue: debouncedSearch || undefined,
    departmentId: departmentId || undefined,
    categoryId: categoryId || undefined,
  });

  const { data: departmentsData } = useDepartments();
  const { data: categoriesData } = useCategories();

  const departments = departmentsData?.items ?? [];
  const categories = categoriesData?.items ?? [];

  useEffect(() => {
    if (!isOpen) return;
    setSearchTerm('');
    setDepartmentId('');
    setCategoryId('');
    setSelectedMap(new Map());
  }, [isOpen]);

  const toggleProduct = (product: ProductResponse) => {
    if (excludedSet.has(product.productId)) return;
    setSelectedMap((prev) => {
      const next = new Map(prev);
      if (next.has(product.productId)) next.delete(product.productId);
      else next.set(product.productId, product);
      return next;
    });
  };

  const handleAdd = () => {
    const selected = Array.from(selectedMap.values()).filter((p) => !excludedSet.has(p.productId));
    if (selected.length === 0) return;
    onAdd(selected);
    onClose();
  };

  const columns: Column<ProductResponse>[] = [
    {
      header: '',
      cell: (row) => {
        const alreadyOnInvoice = excludedSet.has(row.productId);
        const checked = alreadyOnInvoice || selectedMap.has(row.productId);
        return (
          <input
            type="checkbox"
            checked={checked}
            disabled={alreadyOnInvoice}
            onChange={() => toggleProduct(row)}
            onClick={(e) => e.stopPropagation()}
            className="w-4 h-4 accent-[var(--color-primary)] cursor-pointer disabled:cursor-not-allowed"
            aria-label={`اختيار ${row.name}`}
          />
        );
      },
    },
    {
      header: 'المنتج',
      cell: (row) => (
        <div>
          <p className="font-semibold text-[var(--color-text-main)]">{row.name}</p>
          {excludedSet.has(row.productId) && (
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">مضاف مسبقاً للفاتورة</p>
          )}
        </div>
      ),
    },
    {
      header: 'الباركود',
      cell: (row) => <span className="text-[var(--color-text-muted)]">{row.barcode || '—'}</span>,
    },
    {
      header: 'القسم الرئيسي',
      cell: (row) => row.department?.name || '—',
    },
    {
      header: 'القسم الفرعي',
      cell: (row) => row.category?.name || '—',
    },
  ];

  return (
    <PickerModal
      isOpen={isOpen}
      onClose={onClose}
      title="إضافة منتجات للفاتورة"
      subtitle="ابحث أو فلتر ثم حدد المنتجات المطلوبة"
      searchPlaceholder="ابحث باسم المنتج أو الباركود..."
      searchValue={searchTerm}
      onSearchChange={(value) => setSearchTerm(value)}
      filters={
        <>
          <select
            value={departmentId}
            onChange={(e) => {
              setDepartmentId(e.target.value);
              setCategoryId('');
            }}
            className={tokens.select}
          >
            <option value="">الأقسام الرئيسية</option>
            {departments.map((dep) => (
              <option key={dep.departmentId} value={dep.departmentId}>
                {dep.name}
              </option>
            ))}
          </select>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className={tokens.select}
          >
            <option value="">الأقسام الفرعية</option>
            {categories
              .filter((cat) => !departmentId || cat.department.departmentId === departmentId)
              .map((cat) => (
                <option key={cat.categoryId} value={cat.categoryId}>
                  {cat.name}
                </option>
              ))}
          </select>
        </>
      }
      columns={columns}
      data={products}
      isLoading={isLoading}
      pagination={{
        totalCount,
        hasNextPage,
        isFetchingNextPage,
        onLoadMore: () => fetchNextPage(),
      }}
      onRowClick={toggleProduct}
      selectedCount={selectedMap.size}
      onConfirm={handleAdd}
    />
  );
}
