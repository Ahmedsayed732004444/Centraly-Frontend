import { useState, useEffect } from 'react';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useSalesInvoices } from '../hooks/useSales';
import { DataTable } from '@/shared/components/ui/DataTable';
import { InvoiceDetailsModal } from '../components/InvoiceDetailsModal';
import { getSalesHistoryColumns } from '../components/SalesHistoryColumns';
import { SalesHistoryFilters } from '../components/SalesHistoryFilters';
import { useNavigate } from 'react-router-dom';
import { printThermalReceipt } from '../utils/thermalReceiptPrint';
import { salesRepository } from '../api/salesApi';
import { toast } from 'sonner';
import { toUtcStartOfDayISOString, toUtcEndOfDayISOString, formatDateOnly } from '@/shared/utils/date';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { fetchAllPages } from '@/shared/utils/fetchAllPages';
import { SalesInvoiceResponse, SaleType, PaymentMethod } from '../schemas/salesSchemas';

export function SalesHistoryPage() {
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 10;
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 500);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [saleType, setSaleType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    setPageIndex(1);
  }, [debouncedSearch, startDate, endDate, saleType, paymentMethod]);
  const { data, isLoading } = useSalesInvoices({
    pageNumber: pageIndex,
    pageSize,
    searchValue: debouncedSearch,
    startDate: startDate ? toUtcStartOfDayISOString(startDate) : undefined,
    endDate: endDate ? toUtcEndOfDayISOString(endDate) : undefined,
    saleType: saleType ? Number(saleType) : undefined,
    paymentMethod: paymentMethod ? Number(paymentMethod) : undefined,
  });
  const columns = getSalesHistoryColumns(
    (invoiceId) => {
      navigate(`/sales/returns/new?invoiceId=${invoiceId}`);
    },
    async (invoice) => {
      try {
        const toastId = toast.loading('جاري تحضير الفاتورة للطباعة...');
        const fullInvoice = await salesRepository.getInvoice(invoice.id);
        toast.dismiss(toastId);
        printThermalReceipt(fullInvoice);
      } catch (error) {
        toast.dismiss();
        toast.error('حدث خطأ أثناء جلب تفاصيل الفاتورة');
      }
    }
  );
  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-500">
      <SalesHistoryFilters
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        startDate={startDate}
        endDate={endDate}
        onDateChange={(start, end) => { setStartDate(start); setEndDate(end); }}
        saleType={saleType}
        onSaleTypeChange={setSaleType}
        paymentMethod={paymentMethod}
        onPaymentMethodChange={setPaymentMethod}
      />
      <div className="flex justify-end">
        <ExportExcelButton
          onExport={async () => {
            const rows = await fetchAllPages<SalesInvoiceResponse>((pageNumber) =>
              salesRepository.getInvoices({
                pageNumber,
                pageSize: 50,
                searchValue: debouncedSearch,
                startDate: startDate ? toUtcStartOfDayISOString(startDate) : undefined,
                endDate: endDate ? toUtcEndOfDayISOString(endDate) : undefined,
                saleType: saleType ? Number(saleType) : undefined,
                paymentMethod: paymentMethod ? Number(paymentMethod) : undefined,
              })
            );
            await exportToExcel<SalesInvoiceResponse>({
              fileName: 'سجل-المبيعات',
              sheetName: 'المبيعات',
              title: 'سجل فواتير المبيعات',
              columns: [
                { header: 'رقم الفاتورة', value: (r) => r.invoiceNumber },
                { header: 'العميل', value: (r) => r.customer?.name || 'عميل نقدي' },
                { header: 'الهاتف', value: (r) => r.customer?.phone || '-' },
                { header: 'التاريخ', value: (r) => formatDateOnly(r.createdAt) },
                { header: 'نوع الفاتورة', value: (r) => (r.saleType === SaleType.Wholesale ? 'جملة' : 'قطاعي') },
                { header: 'طريقة الدفع', value: (r) => (r.paymentMethod === PaymentMethod.Cash ? 'كاش' : 'آجل') },
                { header: 'الإجمالي', value: (r) => r.totalAmount, money: true },
                { header: 'المدفوع', value: (r) => r.paidAmount, money: true },
                { header: 'المتبقي', value: (r) => r.remainingAmount, money: true },
              ],
              rows,
            });
          }}
        />
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-3 sm:p-5 overflow-x-auto">
          <DataTable
            columns={columns}
            data={data?.items || []}
            isLoading={isLoading}
            totalCount={data?.totalCount || 0}
            pageSize={pageSize}
            pageIndex={pageIndex}
            totalPages={data?.totalPages || 1}
            onNextPage={() => setPageIndex(p => Math.min(p + 1, data?.totalPages || 1))}
            onPrevPage={() => setPageIndex(p => Math.max(p - 1, 1))}
            onRowClick={(row) => setSelectedInvoiceId(row.id)}
            emptyEntity="فواتير مبيعات"
          />
        </div>
      </div>
      <InvoiceDetailsModal
        isOpen={!!selectedInvoiceId}
        onClose={() => setSelectedInvoiceId(null)}
        invoiceId={selectedInvoiceId}
      />
    </div>
  );
}
