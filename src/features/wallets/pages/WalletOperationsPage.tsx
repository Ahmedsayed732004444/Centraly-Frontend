import { useState, useEffect } from 'react';
import { useWallets } from '../hooks/useWallets';
import { WalletOperationType, WalletResponse } from '../schemas/walletSchemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { WalletCard } from '../components/WalletCard';
import { WalletOperationModal } from '../components/WalletOperationModal';

const operationSchema = z.object({
  walletId: z.string().min(1, 'الرجاء اختيار المحفظة'),
  operationType: z.nativeEnum(WalletOperationType),
  transferredAmount: z.coerce.number().min(0.01, 'المبلغ يجب أن يكون أكبر من 0'),
  physicalCashAmount: z.coerce.number().min(0.01, 'المبلغ يجب أن يكون أكبر من 0'),
  notes: z.string().optional(),
});

type OperationForm = z.infer<typeof operationSchema>;

export function WalletOperationsPage() {
  const { setTitle } = useHeaderStore();
  const { wallets, isLoading, processOperation, isProcessing } = useWallets();
  const [selectedWallet, setSelectedWallet] = useState<WalletResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTitle('عمليات المحافظ');
  }, [setTitle]);

  const form = useForm<OperationForm>({
    resolver: zodResolver(operationSchema) as any,
    mode: 'onBlur',
    defaultValues: {
      walletId: '',
      operationType: WalletOperationType.CashIn,
      transferredAmount: 0,
      physicalCashAmount: 0,
      notes: ''
    }
  });

  const { watch, handleSubmit, reset } = form;
  const operationType = watch('operationType');
  const transferredAmount = watch('transferredAmount') || 0;
  const physicalCashAmount = watch('physicalCashAmount') || 0;

  // profit = (Cash received by store) - (Cash sent to customer/wallet)
  // For CashIn (Deposit): We take physicalCash, and we transfer money to wallet. Profit = physicalCash - transferred
  // For CashOut (Withdrawal): We receive transfer, and we give physicalCash. Profit = transferred - physicalCash
  const profit = operationType === WalletOperationType.CashIn 
    ? Number(physicalCashAmount) - Number(transferredAmount)
    : Number(transferredAmount) - Number(physicalCashAmount);

  const openOperationModal = (wallet: WalletResponse, type: WalletOperationType) => {
    setSelectedWallet(wallet);
    reset({
      walletId: wallet.id,
      operationType: type,
      transferredAmount: 0,
      physicalCashAmount: 0,
      notes: ''
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWallet(null);
  };

  const onSubmit = (data: OperationForm) => {
    processOperation({
      walletId: data.walletId,
      operationType: data.operationType,
      transferredAmount: Number(data.transferredAmount),
      physicalCashAmount: Number(data.physicalCashAmount),
      notes: data.notes || null,
    }, {
      onSuccess: () => {
        closeModal();
      }
    });
  };

  const activeWallets = wallets.filter(w => w.isActive);

  return (
    <div className="flex flex-col h-full bg-gray-50/50">
      {isLoading ? (
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <div className="text-center text-gray-500 py-12">جاري تحميل المحافظ...</div>
        </div>
      ) : activeWallets.length === 0 ? (
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <div className="text-center text-red-500 py-12">
            لا يوجد محافظ نشطة مسجلة! يرجى إضافة محفظة أولاً من الإعدادات.
          </div>
        </div>
      ) : (
        <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 content-start max-w-screen-2xl mx-auto">
            {activeWallets.map(wallet => (
              <WalletCard
                key={wallet.id}
                wallet={wallet}
                onCashIn={(w) => openOperationModal(w, WalletOperationType.CashIn)}
                onCashOut={(w) => openOperationModal(w, WalletOperationType.CashOut)}
                onRecharge={(w) => openOperationModal(w, WalletOperationType.Recharge)}
              />
            ))}
          </div>
        </div>
      )}

      <WalletOperationModal
        isOpen={isModalOpen}
        selectedWallet={selectedWallet}
        operationType={operationType}
        profit={profit}
        form={form}
        onSubmit={handleSubmit(onSubmit)}
        onClose={closeModal}
        isProcessing={isProcessing}
      />

    </div>
  );
}
