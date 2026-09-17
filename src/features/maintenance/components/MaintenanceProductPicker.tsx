import { useState, useMemo } from 'react';
import { Column } from '@/shared/components/ui/DataTable';
import { PickerModal } from '@/shared/components/ui/PickerModal';
import { useProducts } from '@/features/inventory/hooks/useInventory';
import { ProductResponse, isMaintenanceProduct, getMaintenancePrice } from '@/features/inventory/schemas/inventorySchemas';
import { formatNumber } from '@/shared/utils/currency';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (products: ProductResponse[]) => void;
  excludeProductIds?: string[];
}

const PAGE_SIZE = 10;

export function MaintenanceProductPicker({ isOpen, onClose, onAdd, excludeProductIds = [] }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageIndex, setPageIndex] = useState(1);
  const [selectedMap, setSelectedMap] = useState<Map<string, ProductResponse>>(new Map());

  const excludedSet = useMemo(() => new Set(excludeProductIds), [excludeProductIds]);

  // Fetch all products (or a large enough page) and filter locally for maintenance usage
  const { data, isLoading } = useProducts({ pageSize: 2000 });

  const maintenanceProducts = useMemo(() => {
    if (!data?.items) return [];
    let filtered = data.items.filter(
      (p) => isMaintenanceProduct(p.usage)
    );
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) => (p.name && p.name.toLowerCase().includes(lower)) || (p.barcode && p.barcode.toLowerCase().includes(lower))
      );
    }
    return filtered;
  }, [data?.items, searchTerm]);

  // Client-side pagination
  const totalCount = maintenanceProducts.length;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (pageIndex - 1) * PAGE_SIZE;
    return maintenanceProducts.slice(start, start + PAGE_SIZE);
  }, [maintenanceProducts, pageIndex]);

  // Reset state when opened
  useMemo(() => {
    if (isOpen) {
      setSearchTerm('');
      setPageIndex(1);
      setSelectedMap(new Map());
    }
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
            className="w-4 h-4 accent-blue-600 cursor-pointer disabled:cursor-not-allowed"
          />
        );
      },
    },
    {
      header: 'المنتج',
      cell: (row) => (
        <div className="flex items-center gap-3">
          {row.imageUrl ? (
            <img src={row.imageUrl} alt={row.name} className="w-10 h-10 object-cover rounded-lg bg-gray-100" />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
              لا توجد
            </div>
          )}
          <div>
            <p className="font-bold text-gray-800">{row.name}</p>
            {excludedSet.has(row.productId) && (
              <p className="text-[11px] text-red-500 font-medium mt-0.5">مضاف مسبقاً للتذكرة</p>
            )}
          </div>
        </div>
      ),
    },
    {
      header: 'الباركود',
      cell: (row) => <span className="text-gray-500">{row.barcode || '—'}</span>,
    },
    {
      header: 'سعر الصيانة',
      cell: (row) => {
        const price = getMaintenancePrice(row);
        return <span className="font-semibold text-emerald-600">{formatNumber(price)} ج.م</span>;
      },
    },
  ];

  return (
    <PickerModal
      isOpen={isOpen}
      onClose={onClose}
      title="إضافة قطع غيار"
      subtitle="اختر قطع الغيار المطلوبة من المخزن (منتجات الصيانة)"
      searchPlaceholder="ابحث باسم المنتج أو الباركود..."
      searchValue={searchTerm}
      onSearchChange={(value) => {
        setSearchTerm(value);
        setPageIndex(1);
      }}
      columns={columns}
      data={paginatedProducts}
      isLoading={isLoading}
      pagination={{
        pageIndex,
        totalPages,
        totalCount,
        pageSize: PAGE_SIZE,
        onNextPage: () => setPageIndex((p) => p + 1),
        onPrevPage: () => setPageIndex((p) => Math.max(1, p - 1)),
      }}
      onRowClick={toggleProduct}
      selectedCount={selectedMap.size}
      onConfirm={handleAdd}
    />
  );
}
