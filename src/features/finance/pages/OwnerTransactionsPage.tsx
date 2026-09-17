import { useState } from 'react';
import { useOwnerTransactions, useCreateOwnerTransaction } from '../hooks/useOwnerTransactions';
import { usePaymentSourcePrompt } from '../hooks/usePaymentSourcePrompt';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { DataTable } from '@/shared/components/ui/DataTable';
import { getOwnerTransactionsColumns } from '../components/OwnerTransactionsColumns';
import { OwnerTransactionsHeader } from '../components/OwnerTransactionsHeader';
import { OwnerTransactionForm } from '../components/OwnerTransactionForm';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { ownerTxDirection } from '@/shared/utils/moneyDirection';
import { OwnerTransactionResponse } from '../schemas/financeSchemas';

export function OwnerTransactionsPage() {
  const { data: transactions, isLoading } = useOwnerTransactions();
  const { mutate: createTransaction, isPending: isSubmitting } = useCreateOwnerTransaction();
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt();

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'Deposit' | 'Withdrawal' | null;
  }>({ isOpen: false, type: null });

  const [amount, setAmount] = useState<number | ''>('');
  const [notes, setNotes] = useState('');

  if (isLoading) return <PageLoader />;

  const handleOpenModal = (type: 'Deposit' | 'Withdrawal') => {
    setModalState({ isOpen: true, type });
    setAmount('');
    setNotes('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0) return;

    const category = modalState.type === 'Deposit' ? 10 : 11;
    const source = await promptPaymentSource(category);

    if (source) {
      createTransaction(
        {
          category,
          amount: Number(amount),
          notes,
          paymentSource: source,
        },
        {
          onSuccess: () => {
            setModalState({ isOpen: false, type: null });
          },
        }
      );
    }
  };

  const columns = getOwnerTransactionsColumns();

  return (
    <div className="space-y-6">
      <OwnerTransactionsHeader
        onDeposit={() => handleOpenModal('Deposit')}
        onWithdraw={() => handleOpenModal('Withdrawal')}
      />

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">سجل المعاملات</h3>
          <ExportExcelButton
            onExport={async () => {
              const rows = Array.isArray(transactions) ? transactions : [];
              await exportToExcel<OwnerTransactionResponse>({
                fileName: 'معاملات-المالك',
                sheetName: 'معاملات المالك',
                title: 'سجل معاملات المالك',
                columns: [
                  { header: 'النوع', value: (r) => (ownerTxDirection(r.category) === 'in' ? 'إيداع رأس مال' : 'سحب أرباح') },
                  { header: 'المبلغ', value: (r) => r.amount, money: true },
                  { header: 'المصدر', value: (r) => (r.paymentSource === 1 ? 'الدرج' : 'الخزينة') },
                  { header: 'التاريخ', value: (r) => new Date(r.createdAt).toLocaleString('ar-EG-u-nu-latn') },
                  { header: 'ملاحظات', value: (r) => r.notes || '-', width: 30, align: 'right' },
                ],
                rows,
              });
            }}
          />
        </div>
        <DataTable
          columns={columns}
          data={Array.isArray(transactions) ? transactions : ((transactions as any)?.items || [])}
          pageIndex={1}
          totalPages={1}
          totalCount={Array.isArray(transactions) ? transactions.length : ((transactions as any)?.totalCount || 0)}
          pageSize={transactions?.length || 50}
          onNextPage={() => {}}
          onPrevPage={() => {}}
          emptyEntity="معاملات مالك"
        />
      </div>

      <PaymentSourcePromptModal />

      <OwnerTransactionForm
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: null })}
        title={modalState.type === 'Deposit' ? 'إيداع رأس مال جديد' : 'سحب أرباح'}
        amount={amount}
        onAmountChange={setAmount}
        notes={notes}
        onNotesChange={setNotes}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}




