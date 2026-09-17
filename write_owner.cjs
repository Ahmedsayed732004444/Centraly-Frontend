const fs = require('fs');

const content = import { formatCurrency } from '@/shared/utils/currency';
import { formatDate } from '@/shared/utils/date';
import { useState } from 'react';
import { useOwnerTransactions, useCreateOwnerTransaction } from '../hooks/useOwnerTransactions';
import { usePaymentSourcePrompt } from '../hooks/usePaymentSourcePrompt';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { tokens } from '@/shared/styles/tokens';
import { ArrowDownCircle, ArrowUpCircle, Wallet } from 'lucide-react';
import { DataTable } from '@/shared/components/ui/DataTable';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { OwnerTransactionResponse } from '../schemas/financeSchemas';

export function OwnerTransactionsPage() {
  const { data: transactionsData, isLoading } = useOwnerTransactions();
  const { mutate: createTransaction, isPending: isSubmitting } = useCreateOwnerTransaction();
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt();

  const transactions = Array.isArray(transactionsData) ? transactionsData : ((transactionsData as any)?.items || []);
  const totalCount = Array.isArray(transactionsData) ? transactionsData.length : ((transactionsData as any)?.totalCount || 0);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0 || !modalState.type) return;

    if (modalState.type === 'Withdrawal') {
      promptPaymentSource((paymentSource) => {
        executeTransaction(paymentSource);
      });
    } else {
      executeTransaction(); 
    }
  };

  const executeTransaction = (paymentSource?: 1 | 2) => {
    createTransaction({
      type: modalState.type!,
      amount: Number(amount),
      notes: notes || undefined,
      paymentSource: paymentSource
    }, {
      onSuccess: () => {
        setModalState({ isOpen: false, type: null });
      }
    });
  };

  const columns = [
    {
      header: 'التاريخ',
      accessorKey: 'createdAt',
      cell: (val: any) => <div dir="ltr">{formatDate(val as string)}</div>
    },
    {
      header: 'النوع',
      accessorKey: 'type',
      cell: (val: any) => {
        const type = val as string;
        const isDeposit = type === 'Deposit' || type === '1' || type === 'DepositOwner';
        return (
          <span className={\inline-flex items-center px-2 py-1 rounded-md text-xs font-medium \\}>
            {isDeposit ? 'إيداع رأس مال' : 'سحب أرباح'}
          </span>
        );
      }
    },
    {
      header: 'المبلغ',
      accessorKey: 'amount',
      cell: (val: any, row: any) => {
        const type = row.type as string;
        const isDeposit = type === 'Deposit' || type === '1' || type === 'DepositOwner';
        return (
          <span className={isDeposit ? 'text-green-600 font-bold' : 'text-red-600 font-bold'} dir="ltr">
            {isDeposit ? '+' : '-'} {formatCurrency(Math.abs(val as number))}
          </span>
        );
      }
    },
    {
      header: 'مصدر الدفع',
      accessorKey: 'paymentSource',
      cell: (val: any) => {
        if (!val) return '-';
        if (val === 1 || val === '1' || val === 'Drawer') return 'الدرج (مبيعات)';
        if (val === 2 || val === '2' || val === 'Safe') return 'الخزينة (رئيسية)';
        return val;
      }
    },
    {
      header: 'الرصيد بعد الحركة',
      accessorKey: 'balanceAfter',
      cell: (val: any) => <div className="font-bold text-gray-800" dir="ltr">{formatCurrency(val as number)}</div>
    },
    {
      header: 'الملاحظات',
      accessorKey: 'notes',
      cell: (val: any) => <div className="text-gray-500">{val as string || '-'}</div>
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Wallet className="w-7 h-7 text-indigo-600" />
            معاملات المالك
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            إدارة إيداعات رأس المال وسحب الأرباح للمالك
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => handleOpenModal('Deposit')}
            className={tokens.btn.primary + " flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"}
          >
            <ArrowDownCircle className="w-5 h-5" />
            إيداع رأس مال جديد
          </button>
          <button 
            onClick={() => handleOpenModal('Withdrawal')}
            className={tokens.btn.primary + " flex items-center gap-2 bg-red-600 hover:bg-red-700"}
          >
            <ArrowUpCircle className="w-5 h-5" />
            سحب أرباح
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">سجل المعاملات</h3>
        <DataTable
          columns={columns}
          data={transactions}
          pageIndex={1}
          totalPages={1}
          totalCount={totalCount}
          pageSize={50}
          onNextPage={() => {}}
          onPrevPage={() => {}}
        />
      </div>

      <PaymentSourcePromptModal />

      <BaseModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: null })}
        title={modalState.type === 'Deposit' ? 'إيداع رأس مال جديد' : 'سحب أرباح'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">المبلغ</label>
            <input 
              type="number"
              required
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
              onFocus={(e) => e.target.select()}
              className={tokens.input.base}
              placeholder="0.00"
              dir="ltr"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ملاحظات (اختياري)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={tokens.input.base}
              rows={3}
              placeholder="سبب السحب أو تفاصيل الإيداع..."
            />
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={() => setModalState({ isOpen: false, type: null })}
              className={tokens.btn.ghost}
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !amount || amount <= 0}
              className={tokens.btn.primary + (modalState.type === 'Withdrawal' ? ' bg-red-600 hover:bg-red-700' : ' bg-emerald-600 hover:bg-emerald-700')}
            >
              {isSubmitting ? 'جاري الحفظ...' : 'تأكيد العملية'}
            </button>
          </div>
        </form>
      </BaseModal>
    </div>
  );
}
;
fs.writeFileSync('src/features/finance/pages/OwnerTransactionsPage.tsx', content, 'utf8');
