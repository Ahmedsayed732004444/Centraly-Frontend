import { useState, useEffect } from 'react';
import { useWallets } from '../hooks/useWallets';
import { WalletOperationType, WalletResponse } from '../schemas/walletSchemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { WalletCard } from '../components/WalletCard';
import { WalletOperationModal } from '../components/WalletOperationModal';

const PINNED_WALLETS_KEY = 'pinnedWalletIds';

function getPinnedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(PINNED_WALLETS_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

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
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(getPinnedIds);

  useEffect(() => {
    setTitle('عمليات المحافظ');
  }, [setTitle]);

  // Re-read pinned IDs when page comes into focus (in case admin updated them)
  useEffect(() => {
    const handleFocus = () => setPinnedIds(getPinnedIds());
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

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

  const profit = operationType === WalletOperationType.CashOut
    ? Number(transferredAmount) - Number(physicalCashAmount)
    : Number(physicalCashAmount) - Number(transferredAmount);

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

  // If we have saved pinned IDs, show only those; otherwise fall back to all active
  const noPinsSaved = localStorage.getItem(PINNED_WALLETS_KEY) === null;
  const visibleWallets = noPinsSaved
    ? activeWallets
    : activeWallets.filter(w => pinnedIds.has(w.id));

  return (
    <div className="flex flex-col h-full bg-gray-50/50">
      {isLoading ? (
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <div className="text-center text-gray-500 py-12">جاري تحميل المحافظ...</div>
        </div>
      ) : visibleWallets.length === 0 ? (
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <div className="text-center text-gray-500 py-12 space-y-2">
            <p className="font-semibold text-gray-700">لا توجد محافظ مسجلة</p>
            <p className="text-sm text-gray-400">
              {activeWallets.length > 0
                ? 'يمكنك تفعيل عرض المحافظ من صفحة إدارة المحافظ عبر زر "إظهار"'
                : 'يرجى إضافة محفظة أولاً من الإعدادات'}
            </p>
          </div>
        </div>
      ) : (
        <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 content-start max-w-screen-2xl mx-auto">
            {visibleWallets.map(wallet => (
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
