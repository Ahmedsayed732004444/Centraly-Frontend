import { formatCurrency } from '@/shared/utils/currency';
import { formatDateTime } from '@/shared/utils/date';
import { PurchaseInvoiceResponse } from '../schemas/purchaseSchemas';
import { DataTable } from '@/shared/components/ui/DataTable';

interface PurchasesTableProps {
  data: PurchaseInvoiceResponse[];
  totalCount?: number;
  isLoading: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore?: () => void;
  onRowClick?: (invoice: PurchaseInvoiceResponse) => void;
}

export function PurchasesTable({
  data,
  totalCount,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
  onRowClick,
}: PurchasesTableProps) {
  const columns = [
    {
      header: 'رقم الفاتورة',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className="font-mono bg-gray-50 px-2 py-1 rounded text-sm border border-gray-100">
          {row.invoiceNumber}
        </span>
      ),
    },
    {
      header: 'التاريخ',
      cell: (row: PurchaseInvoiceResponse) => (
        <span dir="ltr">{formatDateTime(row.invoiceDate)}</span>
      ),
    },
    {
      header: 'المورد',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className="font-medium text-gray-900">{row.supplier?.name || '-'}</span>
      ),
    },
    {
      header: 'الإجمالي',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className="font-semibold text-gray-900">
          {formatCurrency(row.totalAmount)}
        </span>
      ),
    },
    {
      header: 'المدفوع',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className="text-green-600 font-semibold">
          {formatCurrency(row.paidAmount)}
        </span>
      ),
    },
    {
      header: 'المتبقي',
      cell: (row: PurchaseInvoiceResponse) => (
        <span className={`${row.remainingAmount > 0 ? 'text-red-600' : 'text-gray-900'} font-semibold`}>
          {formatCurrency(row.remainingAmount)}
        </span>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      isLoading={isLoading}
      totalCount={totalCount}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      onLoadMore={onLoadMore}
      onRowClick={onRowClick}
      emptyEntity="فواتير مشتريات"
    />
  );
}
