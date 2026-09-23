import { useEffect, useState } from 'react';
import { Column } from '@/shared/components/ui/DataTable';
import { PickerModal } from '@/shared/components/ui/PickerModal';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useInfiniteProducts } from '@/features/inventory/hooks/useInventory';
import { ProductResponse, ProductUsageDto, getMaintenancePrice } from '@/features/inventory/schemas/inventorySchemas';
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
  const [selectedMap, setSelectedMap] = useState<Map<string, ProductResponse>>(new Map());

  const excludedSet = new Set(excludeProductIds);
  const debouncedSearch = useDebounce(searchTerm, 400);

  // Let the backend do the search and pagination (same pattern as ProductPickerModal),
  // instead of pulling every maintenance product into the browser and filtering there -
  // the API caps page size at 50, so a "fetch everything" approach silently misses any
  // product past the first 50 of each usage bucket. ExcludeUsage=SaleOnly covers both
  // MaintenanceOnly and SaleAndMaintenance products in a single server-side query.
  const { items: maintenanceProducts, totalCount, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteProducts({
    pageSize: PAGE_SIZE,
    searchValue: debouncedSearch || undefined,
    excludeUsage: ProductUsageDto.SaleOnly,
  });

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
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
      onSearchChange={(value) => setSearchTerm(value)}
      columns={columns}
      data={maintenanceProducts}
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
