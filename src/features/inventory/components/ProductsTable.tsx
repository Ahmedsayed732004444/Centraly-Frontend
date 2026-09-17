import { Trash2, Package } from 'lucide-react';
import { DataTable } from '@/shared/components/ui/DataTable';
import { ProductStatusBadge } from './ProductStatusBadge';
import { ProductResponse } from '@/features/inventory/schemas/inventorySchemas';
import { PaginatedList } from '@/shared/types/pagination';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Permissions } from '@/features/auth/schemas/permissions';
import { RowActions } from '@/shared/components/ui/RowActions';
import { EntityImage } from '@/shared/components/ui/EntityImage';
import { Badge } from '@/shared/components/ui/Badge';

interface ProductsTableProps {
  data?: PaginatedList<ProductResponse>;
  isLoading: boolean;
  pageIndex: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onDelete?: (product: ProductResponse) => void;
  onRowClick?: (product: ProductResponse) => void;
}

export function ProductsTable({
  data,
  isLoading,
  pageIndex,
  onNextPage,
  onPrevPage,
  onDelete,
  onRowClick,
}: ProductsTableProps) {
  const { hasPermission } = useAuth();
  const canWrite = hasPermission(Permissions.InventoryWrite);
  const columns = [
    {
      header: 'الصورة',
      cell: (row: ProductResponse) => <EntityImage name={row.name || '?'} imageUrl={row.imageUrl} />,
    },
    {
      header: 'اسم المنتج',
      cell: (row: ProductResponse) => (
        <span className="text-sm font-medium text-gray-900">{row.name}</span>
      ),
    },
    {
      header: 'الباركود',
      cell: (row: ProductResponse) => (
        <span className="text-sm font-normal text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100">
          {row.barcode || '---'}
        </span>
      ),
    },
    {
      header: 'القسم',
      cell: (row: ProductResponse) => (
        <div className="flex flex-col gap-1.5 items-start">
          {row.department?.name && <Badge variant="indigo">{row.department.name}</Badge>}
          <Badge variant="neutral">{row.category?.name || '---'}</Badge>
        </div>
      ),
    },
    {
      header: 'النوع',
      cell: (row: ProductResponse) => {
        let label = 'غير محدد';
        let variant: 'success' | 'warning' | 'purple' | 'neutral' = 'neutral';
        if (row.usage === 1) { label = 'بيع فقط'; variant = 'success'; }
        else if (row.usage === 2) { label = 'صيانة فقط'; variant = 'warning'; }
        else if (row.usage === 3) { label = 'بيع وصيانة'; variant = 'purple'; }
        return <Badge variant={variant}>{label}</Badge>;
      },
    },
    {
      header: 'الكمية',
      cell: (row: ProductResponse) => (
        <span className="text-sm font-medium text-gray-800">{row.totalQuantity}</span>
      ),
    },
    {
      header: 'الدفعات',
      cell: (row: ProductResponse) => (
        <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md border border-indigo-100 w-fit">
          <Package size={14} />
          <span className="text-sm font-medium">{row.batches?.length || 0}</span>
        </div>
      ),
    },
    {
      header: 'موقع التخزين',
      cell: (row: ProductResponse) => (
        <span className="text-sm font-normal text-gray-600">{row.storageLocation || '---'}</span>
      ),
    },
    {
      header: 'حالة المخزون',
      cell: (row: ProductResponse) => (
        <ProductStatusBadge quantity={row.totalQuantity} reorderLevel={row.minQuantityAlert} />
      ),
    },
    {
      header: 'الإجراءات',
      cell: (row: ProductResponse) => (
        <RowActions actions={[{ icon: Trash2, label: 'حذف', onClick: () => onDelete?.(row), tone: 'danger', hidden: !canWrite }]} />
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data?.items || []}
      isLoading={isLoading}
      pageIndex={data?.pageNumber || pageIndex}
      totalPages={data?.totalPages || 1}
      totalCount={data?.totalCount || 0}
      pageSize={10}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onRowClick={onRowClick}
      emptyEntity="منتجات"
    />
  );
}
