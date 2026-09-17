import { useState, useEffect } from 'react';
import { useWallets } from '../hooks/useWallets';
import { tokens } from '@/shared/styles/tokens';
import { Wallet, Plus, Edit2, Info } from 'lucide-react';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formatDateTime } from '@/shared/utils/date';
import { formatNumber } from '@/shared/utils/currency';
import { resolveImageUrl } from '@/shared/utils/resolveImageUrl';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useNavigate } from 'react-router-dom';
import { WalletResponse, WalletOperationType } from '../schemas/walletSchemas';
import { GlobalWalletOperationsTable } from '../components/GlobalWalletOperationsTable';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { Badge } from '@/shared/components/ui/Badge';
import { RowActions } from '@/shared/components/ui/RowActions';
import { walletOpLabels } from '../utils/walletOpLabels';

const walletFormSchema = z.object({
  name: z.string().min(1, 'اسم المحفظة مطلوب'),
  phoneNumber: z.string().min(1, 'رقم التليفون مطلوب'),
  ownerName: z.string().optional(),
  initialBalance: z.coerce.number().min(0, 'يجب أن يكون الرصيد 0 أو أكثر').optional(),
  isActive: z.boolean(),
  allowedOperations: z.array(z.nativeEnum(WalletOperationType)).min(1, 'يرجى اختيار عملية واحدة على الأقل'),
  image: z.any().optional()
});

type WalletFormValues = z.infer<typeof walletFormSchema>;

export function WalletsAdminPage() {
  const { setTitle } = useHeaderStore();
  const navigate = useNavigate();
  const { wallets, isLoading, createWallet, isCreating, updateWallet, isUpdating } = useWallets();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingWallet, setEditingWallet] = useState<WalletResponse | null>(null);
  const [activeTab, setActiveTab] = useState<'list' | 'history'>('list');

  useEffect(() => {
    setTitle('إدارة المحافظ');
  }, [setTitle]);

  const form = useForm<WalletFormValues>({
    resolver: zodResolver(walletFormSchema) as any,
    mode: 'onBlur',
    defaultValues: {
      name: '', 
      phoneNumber: '', 
      ownerName: '', 
      initialBalance: 0, 
      isActive: true,
      allowedOperations: [WalletOperationType.CashIn, WalletOperationType.CashOut]
    }
  });

  const selectedOps = form.watch('allowedOperations') || [];

  const toggleOperation = (type: WalletOperationType) => {
    const current = form.getValues('allowedOperations') || [];
    if (current.includes(type)) {
      if (current.length === 1) return; // Must have at least one
      form.setValue('allowedOperations', current.filter(t => t !== type), { shouldValidate: true });
    } else {
      form.setValue('allowedOperations', [...current, type], { shouldValidate: true });
    }
  };

  const openCreateDrawer = () => {
    setEditingWallet(null);
    form.reset({ 
      name: '', 
      phoneNumber: '', 
      ownerName: '', 
      initialBalance: 0, 
      isActive: true,
      allowedOperations: [WalletOperationType.CashIn, WalletOperationType.CashOut]
    });
    setIsDrawerOpen(true);
  };

  const openEditDrawer = (wallet: WalletResponse) => {
    setEditingWallet(wallet);
    form.reset({
      name: wallet.name,
      phoneNumber: wallet.phoneNumber,
      ownerName: wallet.ownerName || '',
      initialBalance: wallet.balance,
      isActive: wallet.isActive,
      allowedOperations: wallet.allowedOperations && wallet.allowedOperations.length > 0
        ? wallet.allowedOperations
        : [WalletOperationType.CashIn, WalletOperationType.CashOut],
    });
    setIsDrawerOpen(true);
  };

  const onSubmit = (data: WalletFormValues) => {
    if (editingWallet) {
      updateWallet(
        {
          walletId: editingWallet.id,
          data: {
            name: data.name,
            phoneNumber: data.phoneNumber,
            ownerName: data.ownerName || undefined,
            isActive: data.isActive,
            allowedOperations: data.allowedOperations,
            image: data.image?.[0]
          }
        },
        { onSuccess: () => setIsDrawerOpen(false) }
      );
    } else {
      createWallet(
        {
          name: data.name,
          phoneNumber: data.phoneNumber,
          ownerName: data.ownerName || undefined,
          initialBalance: data.initialBalance || 0,
          allowedOperations: data.allowedOperations,
          image: data.image?.[0]
        },
        { onSuccess: () => setIsDrawerOpen(false) }
      );
    }
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setEditingWallet(null);
    form.reset();
  };
  const isSaving = isCreating || isUpdating;
  const drawerFooter = (
    <>
      <button type="button" onClick={closeDrawer} className={tokens.btn.secondary}>
        إلغاء
      </button>
      <button
        type="submit"
        form="wallet-form"
        disabled={isSaving}
        className={tokens.btn.primary + " disabled:opacity-60"}
      >
        {isSaving ? 'جاري الحفظ...' : 'حفظ'}
      </button>
    </>
  );
  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        <button
          onClick={() => setActiveTab('list')}
          className={`py-3 px-6 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${activeTab === 'list' ? 'border-[#0f8e4c] text-[#0f8e4c]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          المحافظ
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`py-3 px-6 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${activeTab === 'history' ? 'border-[#0f8e4c] text-[#0f8e4c]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          سجل العمليات الشامل
        </button>
      </div>
      {activeTab === 'list' && (
        <>
          <div className="flex justify-end">
            <button
              onClick={openCreateDrawer}
              className={tokens.btn.primary + " flex items-center gap-2"}
            >
              <Plus size={18} />
              محفظة جديدة
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {isLoading ? (
              <div className="p-8 text-center text-gray-500">جاري تحميل المحافظ...</div>
            ) : wallets.length === 0 ? (
              <EmptyState entity="محافظ" icon={Wallet} />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-right">
              <thead className="text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold whitespace-nowrap">اسم المحفظة</th>
                  <th className="px-6 py-3 text-xs font-semibold whitespace-nowrap">العمليات المتاحة</th>
                  <th className="px-6 py-3 text-xs font-semibold whitespace-nowrap">رقم التليفون</th>
                  <th className="px-6 py-3 text-xs font-semibold whitespace-nowrap">اسم المالك</th>
                  <th className="px-6 py-3 text-xs font-semibold whitespace-nowrap">الرصيد الحالي</th>
                  <th className="px-6 py-3 text-xs font-semibold whitespace-nowrap">تاريخ الإنشاء</th>
                  <th className="px-6 py-3 text-xs font-semibold whitespace-nowrap">الحالة</th>
                  <th className="px-6 py-3 text-xs font-semibold whitespace-nowrap">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {wallets.map(wallet => (
                  <tr
                    key={wallet.id}
                    className="hover:bg-slate-50/50 cursor-pointer transition-colors"
                    onClick={() => navigate(`/wallets/${wallet.id}`)}
                  >
                    <td className="px-6 py-4 font-medium text-slate-800 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        {wallet.imageUrl ? (
                          <img src={resolveImageUrl(wallet.imageUrl)} alt={wallet.name} className="w-8 h-8 rounded-full object-cover border border-gray-200 shrink-0" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                            <Wallet size={16} />
                          </div>
                        )}
                        <span>{wallet.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {(wallet.allowedOperations && wallet.allowedOperations.length > 0
                          ? wallet.allowedOperations
                          : [WalletOperationType.CashIn, WalletOperationType.CashOut]
                        ).map(op => (
                          <Badge key={op} variant={walletOpLabels[op].variant}>{walletOpLabels[op].label}</Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 whitespace-nowrap" dir="ltr">{wallet.phoneNumber}</td>
                    <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{wallet.ownerName || '-'}</td>
                    <td className="px-6 py-4 font-semibold text-[#0f8e4c] font-mono whitespace-nowrap">
                      {formatNumber(wallet.balance)}
                    </td>
                    <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{formatDateTime(wallet.createdAt)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={wallet.isActive ? 'success' : 'danger'}>
                        {wallet.isActive ? 'نشط' : 'غير نشط'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <RowActions
                        actions={[
                          { icon: Edit2, label: 'تعديل', onClick: () => openEditDrawer(wallet) },
                          { icon: Info, label: 'التفاصيل', onClick: () => navigate(`/wallets/${wallet.id}`) },
                        ]}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </>
      )}
      {activeTab === 'history' && (
        <GlobalWalletOperationsTable />
      )}
      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title={editingWallet ? "تعديل بيانات المحفظة" : "إضافة محفظة جديدة"}
        footer={drawerFooter}
      >
        <form id="wallet-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">اسم المحفظة *</label>
            <input
              {...form.register('name')}
              className={tokens.input}
              placeholder="مثال: فودافون كاش - رقم 1"
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">رقم التليفون *</label>
            <input
              {...form.register('phoneNumber')}
              className={tokens.input}
              placeholder="مثال: 01012345678"
            />
            {form.formState.errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.phoneNumber.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">اسم المالك (اختياري)</label>
            <input
              {...form.register('ownerName')}
              className={tokens.input}
              placeholder="مثال: أحمد محمد"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نوع المحفظة (العمليات المتاحة) *
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { type: WalletOperationType.CashIn, label: 'بيع', desc: 'إيداع رصيد للعميل' },
                { type: WalletOperationType.CashOut, label: 'سحب', desc: 'سحب كاش من العميل' },
                { type: WalletOperationType.Recharge, label: 'رصيد', desc: 'شحن رصيد هوائي' },
              ].map(op => {
                const isSelected = selectedOps.includes(op.type);
                return (
                  <button
                    key={op.type}
                    type="button"
                    onClick={() => toggleOperation(op.type)}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      isSelected
                        ? 'border-[#0f8e4c] bg-[#e6f4ed] text-[#0f8e4c] font-bold shadow-sm ring-1 ring-[#0f8e4c]'
                        : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-sm font-bold">{op.label}</span>
                    <span className="text-[10px] opacity-75">{op.desc}</span>
                  </button>
                );
              })}
            </div>
            {form.formState.errors.allowedOperations && (
              <p className="text-red-500 text-xs mt-1.5">{form.formState.errors.allowedOperations.message}</p>
            )}
          </div>
          {!editingWallet && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الرصيد الافتتاحي</label>
              <input
                type="number"
                step="1"
                {...form.register('initialBalance')} onFocus={(e) => e.target.select()}
                className={tokens.input}
              />
              {form.formState.errors.initialBalance && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.initialBalance.message}</p>
              )}
            </div>
          )}
          {editingWallet && (
            <div className="flex items-center gap-2 pt-2 pb-2">
              <input
                type="checkbox"
                id="isActive"
                {...form.register('isActive')}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                المحفظة نشطة
              </label>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              صورة المحفظة {editingWallet ? '(اختياري - لعدم التغيير اتركها فارغة)' : '*'}
            </label>
            <input
              type="file"
              accept="image/*"
              {...form.register('image')}
              className={tokens.input}
            />
            {form.formState.errors.image && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.image?.message as string}</p>
            )}
          </div>
        </form>
      </RightDrawer>
    </div>
  );
}