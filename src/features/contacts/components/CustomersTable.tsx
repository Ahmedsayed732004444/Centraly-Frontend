import { CustomerResponse } from '../schemas/contactSchemas';
import { PaginatedList } from '@/shared/types/pagination';
import { DataTable } from '@/shared/components/ui/DataTable';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDateOnly } from '@/shared/utils/date';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Permissions } from '@/features/auth/schemas/permissions';
import { RowActions } from '@/shared/components/ui/RowActions';
import { Avatar } from '@/shared/components/ui/Avatar';
interface CustomersTableProps {
  data?: PaginatedList<CustomerResponse>;
  isLoading: boolean;
  pageIndex: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onEdit: (customer: CustomerResponse) => void;
  onDelete: (customer: CustomerResponse) => void;
  onRowClick: (customer: CustomerResponse) => void;
}
export function CustomersTable({
  data,
  isLoading,
  pageIndex,
  onNextPage,
  onPrevPage,
  onEdit,
  onDelete,
  onRowClick
}: CustomersTableProps) {
  const { hasPermission } = useAuth();
  const canWrite = hasPermission(Permissions.CustomersWrite);
  const columns = [
    {
      header: 'اسم العميل',
      cell: (row: CustomerResponse) => (
        <div className="flex items-center gap-3">
          <Avatar name={row.name} size="sm" />
          <span className="font-medium text-gray-900">{row.name}</span>
        </div>
      ),
    },
    {
      header: 'رقم الهاتف',
      cell: (row: CustomerResponse) => row.phone || <span className="text-gray-400">-</span>,
    },
    {
      header: 'المديونية (الرصيد)',
      cell: (row: CustomerResponse) => {
        const balance = row.debtBalance || 0;
        if (balance === 0) return <span className="text-gray-500 font-medium" dir="ltr">{formatCurrency(0)}</span>;
        if (balance > 0) return <span className="text-red-600 font-bold" dir="ltr">{formatCurrency(balance)}</span>;
        return <span className="text-green-600 font-bold" dir="ltr">{formatCurrency(Math.abs(balance))} (مقدم)</span>;
      },
    },
    {
      header: 'تاريخ الإضافة',
      cell: (row: CustomerResponse) => formatDateOnly(row.createdAt),
    },
    {
      header: 'الإجراءات',
      cell: (row: CustomerResponse) => (
        <RowActions
          actions={[
            { icon: Eye, label: 'كشف حساب / التفاصيل', onClick: () => onRowClick(row) },
            { icon: Edit2, label: 'تعديل', onClick: () => onEdit(row), hidden: !canWrite },
            { icon: Trash2, label: 'حذف', onClick: () => onDelete(row), tone: 'danger', hidden: !canWrite },
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
      pageIndex={pageIndex}
      totalPages={data?.totalPages || 1}
      totalCount={data?.totalCount || 0}
      pageSize={data?.pageSize || 10}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onRowClick={onRowClick}
      emptyEntity="عملاء"
    />
  );
}