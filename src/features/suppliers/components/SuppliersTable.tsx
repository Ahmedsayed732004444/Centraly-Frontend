import { formatCurrency } from '@/shared/utils/currency';
import { Trash2, Edit, CreditCard } from 'lucide-react';
import { DataTable } from '@/shared/components/ui/DataTable';
import { SupplierResponse } from '../schemas/supplierSchemas';
import { PaginatedList } from '@/shared/types/pagination';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Permissions } from '@/features/auth/schemas/permissions';
import { RowActions } from '@/shared/components/ui/RowActions';
import { Avatar } from '@/shared/components/ui/Avatar';
interface SuppliersTableProps {
  data?: PaginatedList<SupplierResponse>;
  isLoading: boolean;
  pageIndex: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onEdit?: (supplier: SupplierResponse) => void;
  onDelete?: (supplier: SupplierResponse) => void;
  onPay?: (supplier: SupplierResponse) => void;
  onRowClick?: (supplier: SupplierResponse) => void;
}
export function SuppliersTable({
  data,
  isLoading,
  pageIndex,
  onNextPage,
  onPrevPage,
  onEdit,
  onDelete,
  onPay,
  onRowClick,
}: SuppliersTableProps) {
  const { hasPermission } = useAuth();
  const canWrite = hasPermission(Permissions.SuppliersWrite);
  const columns = [
    {
      header: 'اسم المورد',
      cell: (row: SupplierResponse) => (
        <div className="flex items-center gap-3">
          <Avatar name={row.name} size="sm" />
          <span className="text-sm font-medium text-gray-900 whitespace-nowrap">{row.name}</span>
        </div>
      ),
    },
    {
      header: 'الهاتف',
      cell: (row: SupplierResponse) => (
        <span className="text-sm font-normal text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100 whitespace-nowrap" dir="ltr">
          {row.phone || '---'}
        </span>
      ),
    },
    {
      header: 'الرصيد المستحق',
      cell: (row: SupplierResponse) => (
        // "money direction" convention: positive balance = we owe the supplier
        // (outgoing obligation) -> red, matches "المتبقي" coloring on the purchases
        // history table; negative = supplier owes us -> green.
        <span className={`text-sm font-semibold whitespace-nowrap ${row.debtBalance > 0 ? 'text-red-600' : row.debtBalance < 0 ? 'text-green-600' : 'text-gray-900'}`} dir="ltr">
          {formatCurrency(row.debtBalance)}
        </span>
      ),
    },
    {
      header: 'عدد الفواتير',
      cell: (row: SupplierResponse) => (
        <span className="text-sm font-medium text-gray-700">{row.purchaseInvoicesCount}</span>
      ),
    },
    {
      header: 'عدد المرتجعات',
      cell: (row: SupplierResponse) => (
        <span className="text-sm font-medium text-gray-700">{row.returnsCount}</span>
      ),
    },
    {
      header: 'الإجراءات',
      cell: (row: SupplierResponse) => (
        <RowActions
          actions={[
            {
              icon: CreditCard,
              label: row.debtBalance > 0 ? 'تسديد دفعة' : 'استلام دفعة',
              onClick: () => onPay?.(row),
              tone: row.debtBalance > 0 ? 'danger' : 'default',
              hidden: row.debtBalance === 0 || !onPay,
            },
            { icon: Edit, label: 'تعديل', onClick: () => onEdit?.(row), hidden: !canWrite },
            { icon: Trash2, label: 'حذف', onClick: () => onDelete?.(row), tone: 'danger', hidden: !canWrite },
          ]}
        />
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
      emptyEntity="موردين"
    />
  );
}