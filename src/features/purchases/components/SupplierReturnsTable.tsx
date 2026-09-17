import { DataTable } from '@/shared/components/ui/DataTable';
import { SupplierReturnResponse, RETURN_REASON_LABELS, RETURN_REASON_COLORS } from '../schemas/supplierReturnSchemas';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';

interface SupplierReturnsTableProps {
  data: SupplierReturnResponse[];
  isLoading: boolean;
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onRowClick?: (row: SupplierReturnResponse) => void;
}

export function SupplierReturnsTable(props: SupplierReturnsTableProps) {
  const columns = [
    {
      header: 'التاريخ',
      cell: (row: SupplierReturnResponse) => formatDateTime(row.returnDate),
    },
    {
      header: 'المورد',
      cell: (row: SupplierReturnResponse) => row.supplier?.name || '—',
    },
    {
      header: 'سبب الإرجاع',
      cell: (row: SupplierReturnResponse) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${RETURN_REASON_COLORS[row.reason] || RETURN_REASON_COLORS[3]}`}>
          {RETURN_REASON_LABELS[row.reason] || 'غير معروف'}
        </span>
      ),
    },
    {
      header: 'عدد الأصناف',
      cell: (row: SupplierReturnResponse) => row.itemsCount,
    },
    {
      header: 'إجمالي المرتجع',
      cell: (row: SupplierReturnResponse) => (
        <span className="font-semibold text-gray-900">{formatCurrency(row.totalReturnedAmount)}</span>
      ),
    },
  ];

  return <DataTable columns={columns} emptyEntity="مرتجعات موردين" {...props} />;
}
