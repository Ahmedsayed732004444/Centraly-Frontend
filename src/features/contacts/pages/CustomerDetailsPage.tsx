import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomer, useCustomerStatement, useAddCustomerPayment } from '../hooks/useContacts';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { DataTable } from '@/shared/components/ui/DataTable';
import { InvoiceDetailsModal } from '@/features/sales/components/InvoiceDetailsModal';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
import { ReceiptText } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { toast } from 'sonner';
import { CustomerSummaryCard } from '../components/CustomerSummaryCard';
import { getCustomerStatementColumns } from '../components/CustomerStatementColumns';
import { CustomerPaymentForm } from '../components/CustomerPaymentForm';
import { CustomerPaymentDrawerFooter } from '../components/CustomerPaymentDrawerFooter';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { CustomerStatementResponse } from '../schemas/contactSchemas';
import { formatDateTime } from '@/shared/utils/date';
export function CustomerDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { setTitle, setBackButton } = useHeaderStore();
  const [pageIndex, setPageIndex] = useState(1);
  const [isPaymentDrawerOpen, setIsPaymentDrawerOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentNotes, setPaymentNotes] = useState('');
  const [filterType, setFilterType] = useState('الكل');
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);
  const [isRefund, setIsRefund] = useState(false);
  const { data: customer, isLoading: isLoadingCustomer } = useCustomer(id!);
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(7); // GlobalTransactionCategory.CustomerPayment
  const { data: statementData, isLoading: isLoadingStatement } = useCustomerStatement(id!);
  const addPayment = useAddCustomerPayment();
  // Client-side pagination and filtering for statement array
  const rawStatementArray = statementData || [];
  const statementArray = rawStatementArray.filter(item => {
    if (filterType === 'الكل') return true;
    if (filterType === 'فاتورة') return item.transactionType === 'Invoice' || item.transactionType === 'فاتورة';
    if (filterType === 'مرتجع') return item.transactionType === 'Return' || item.transactionType === 'مرتجع';
    if (filterType === 'سداد مديونية') return item.transactionType === 'Payment' || item.transactionType === 'دفعة';
    return true;
  });
  const pageSize = 10;
  const totalCount = statementArray.length;
  const totalPages = Math.ceil(totalCount / pageSize) || 1;
  const paginatedStatement = statementArray.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
  useEffect(() => {
    if (customer) {
      setTitle(`كشف حساب: ${customer.name}`);
      setBackButton(true, '/contacts/customers');
    }
    return () => setBackButton(false);
  }, [customer, setTitle, setBackButton]);
  if (isLoadingCustomer) {
    return <div className="p-8 text-center text-gray-500">جاري تحميل بيانات العميل...</div>;
  }
  if (!customer) {
    return <div className="p-8 text-center text-red-500">العميل غير موجود.</div>;
  }
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = Number(paymentAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      toast.error('المبلغ غير صحيح');
      return;
    }
    const source = await promptPaymentSource(isRefund ? 8 : 7);
    if (!source) return;
    const finalAmount = isRefund ? -Math.abs(parsedAmount) : Math.abs(parsedAmount);
    addPayment.mutate(
      { id: id!, data: { amount: finalAmount, notes: paymentNotes, paymentSource: source } },
      {
        onSuccess: () => {
          setIsPaymentDrawerOpen(false);
          setPaymentAmount('');
          setPaymentNotes('');
        }
      }
    );
  };
  const columns = getCustomerStatementColumns();
  const currentBalance = customer.debtBalance || 0;
  return (
    <div className="space-y-6">
      <CustomerSummaryCard
        name={customer.name}
        phone={customer.phone}
        debtBalance={customer.debtBalance || 0}
        onPaymentClick={() => setIsPaymentDrawerOpen(true)}
      />
      {/* Statement Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <ReceiptText className="text-gray-500" />
            حركة الحساب (كشف الحساب)
          </h3>
          <div className="flex items-center gap-3 flex-wrap w-full sm:w-auto">
            <select
              value={filterType}
              onChange={(e) => {
                setFilterType(e.target.value);
                setPageIndex(1);
              }}
              className={tokens.select + ' w-full sm:w-auto'}
            >
              <option value="الكل">جميع العمليات</option>
              <option value="فاتورة">فاتورة مبيعات</option>
              <option value="مرتجع">مرتجع مبيعات</option>
              <option value="سداد مديونية">سداد مديونية</option>
            </select>
            <ExportExcelButton
              onExport={async () => {
                await exportToExcel<CustomerStatementResponse>({
                  fileName: `كشف-حساب-${customer.name}`,
                  sheetName: 'كشف الحساب',
                  title: `كشف حساب العميل: ${customer.name}`,
                  columns: [
                    { header: 'التاريخ', value: (r) => formatDateTime(r.date) },
                    { header: 'نوع العملية', value: (r) => r.transactionType },
                    { header: 'مدين (عليه)', value: (r) => (r.debit > 0 ? r.debit : ''), money: true },
                    { header: 'دائن (له)', value: (r) => (r.credit > 0 ? r.credit : ''), money: true },
                    { header: 'الرصيد بعد العملية', value: (r) => r.balanceAfter, money: true },
                    { header: 'البيان', value: (r) => r.notes || '-', width: 30, align: 'right' },
                  ],
                  rows: statementArray,
                });
              }}
            />
          </div>
        </div>
        <div className="p-3 sm:p-5">
          <DataTable
            columns={columns}
            data={paginatedStatement}
            isLoading={isLoadingStatement}
            pageIndex={pageIndex}
            totalPages={totalPages}
            totalCount={totalCount}
            pageSize={pageSize}
            onNextPage={() => setPageIndex(p => Math.min(p + 1, totalPages))}
            onPrevPage={() => setPageIndex(p => Math.max(p - 1, 1))}
            onRowClick={(row) => {
              if (row.transactionType === 'Invoice' || row.transactionType === 'فاتورة') {
                setSelectedInvoiceId(row.transactionId);
              }
            }}
          />
        </div>
      </div>
      <InvoiceDetailsModal
        isOpen={!!selectedInvoiceId}
        onClose={() => setSelectedInvoiceId(null)}
        invoiceId={selectedInvoiceId}
      />
      {}
      <RightDrawer
        isOpen={isPaymentDrawerOpen}
        onClose={() => setIsPaymentDrawerOpen(false)}
        title="استلام دفعة من العميل"
        footer={<CustomerPaymentDrawerFooter isSubmitting={addPayment.isPending} onCancel={() => setIsPaymentDrawerOpen(false)} />}
      >
        <CustomerPaymentForm
          currentBalance={currentBalance}
          paymentAmount={paymentAmount}
          onPaymentAmountChange={setPaymentAmount}
          paymentNotes={paymentNotes}
          onPaymentNotesChange={setPaymentNotes}
          isRefund={isRefund}
          onRefundChange={setIsRefund}
          onSubmit={handlePaymentSubmit}
          isSubmitting={addPayment.isPending}
        />
      </RightDrawer>
      <PaymentSourcePromptModal />
    </div>
  );
}