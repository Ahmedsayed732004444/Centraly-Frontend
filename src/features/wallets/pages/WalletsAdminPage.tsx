import { useState, useEffect } from 'react';
import { useWallets } from '../hooks/useWallets';
import { tokens } from '@/shared/styles/tokens';
import { Wallet, Plus, Edit2, Info, Trash2, Eye, EyeOff } from 'lucide-react';
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
import { Badge } from '@/shared/components/ui/Badge';
import { RowActions } from '@/shared/components/ui/RowActions';
import { walletOpLabels } from '../utils/walletOpLabels';
import { DataTable, Column } from '@/shared/components/ui/DataTable';

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

function savePinnedIds(ids: Set<string>) {
  localStorage.setItem(PINNED_WALLETS_KEY, JSON.stringify([...ids]));
}

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
  const { wallets, isLoading, createWallet, isCreating, updateWallet, isUpdating, deleteWallet } = useWallets();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingWallet, setEditingWallet] = useState<WalletResponse | null>(null);
  const [activeTab, setActiveTab] = useState<'list' | 'history'>('list');
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(getPinnedIds);

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setTitle('إدارة المحافظ');
  }, [setTitle]);

  // On first load with no saved pins, default to showing all active wallets
  useEffect(() => {
    if (!isLoading && wallets.length > 0) {
      const stored = localStorage.getItem(PINNED_WALLETS_KEY);
      if (stored === null) {
        const allIds = new Set(wallets.filter(w => w.isActive).map(w => w.id));
        savePinnedIds(allIds);
        setPinnedIds(allIds);
      }
    }
  }, [isLoading, wallets]);

  const togglePin = (walletId: string) => {
    setPinnedIds(prev => {
      const next = new Set(prev);
      if (next.has(walletId)) {
        next.delete(walletId);
      } else {
        next.add(walletId);
      }
      savePinnedIds(next);
      return next;
    });
  };

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
      if (current.length === 1) return;
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

  const totalCount = wallets.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const paginatedWallets = wallets.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);

  const totalBalance = wallets.reduce((sum, w) => sum + (w.balance || 0), 0);
  const pinnedCount = wallets.filter(w => pinnedIds.has(w.id)).length;

  const columns: Column<WalletResponse>[] = [
    {
      header: 'إظهار في العمليات',
      cell: (wallet) => {
        const isPinned = pinnedIds.has(wallet.id);
        return (
          <button
            type="button"
            onClick={() => togglePin(wallet.id)}
            title={isPinned ? 'ظاهر - اضغط للإخفاء' : 'مخفي - اضغط للإظهار'}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
              isPinned
                ? 'bg-[#e6f4ed] text-[#0f8e4c] border-[#0f8e4c]/30 hover:bg-[#d0ecdf]'
                : 'bg-gray-100 text-gray-400 border-gray-200 hover:bg-gray-200'
            }`}
          >
            {isPinned ? <Eye size={13} /> : <EyeOff size={13} />}
            {isPinned ? 'ظاهر' : 'مخفي'}
          </button>
        );
      }
    },
    {
      header: 'اسم المحفظة',
      cell: (wallet) => (
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
      )
    },
    {
      header: 'العمليات المتاحة',
      cell: (wallet) => (
        <div className="flex items-center gap-1.5 flex-wrap">
          {(wallet.allowedOperations && wallet.allowedOperations.length > 0
            ? wallet.allowedOperations
            : [WalletOperationType.CashIn, WalletOperationType.CashOut]
          ).map(op => (
            <Badge key={op} variant={walletOpLabels[op].variant}>{walletOpLabels[op].label}</Badge>
          ))}
        </div>
      )
    },
    {
      header: 'رقم التليفون',
      cell: (wallet) => <span dir="ltr" className="text-slate-500">{wallet.phoneNumber}</span>
    },
    {
      header: 'اسم المالك',
      cell: (wallet) => <span className="text-slate-500">{wallet.ownerName || '-'}</span>
    },
    {
      header: 'الرصيد الحالي',
      cell: (wallet) => <span className="font-semibold text-[#0f8e4c] font-mono">{formatNumber(wallet.balance)}</span>
    },
    {
      header: 'تاريخ الإنشاء',
      cell: (wallet) => <span className="text-slate-500">{formatDateTime(wallet.createdAt)}</span>
    },
    {
      header: 'الحالة',
      cell: (wallet) => (
        <Badge variant={wallet.isActive ? 'success' : 'danger'}>
          {wallet.isActive ? 'نشط' : 'غير نشط'}
        </Badge>
      )
    },
    {
      header: 'إجراءات',
      cell: (wallet) => (
        <RowActions
          actions={[
            { icon: Edit2, label: 'تعديل', onClick: () => openEditDrawer(wallet) },
            { icon: Info, label: 'التفاصيل', onClick: () => navigate(`/wallets/${wallet.id}`) },
            { 
              icon: Trash2, 
              label: 'حذف', 
              onClick: () => {
                if (window.confirm('هل أنت متأكد من حذف هذه المحفظة؟')) {
                  deleteWallet(wallet.id);
                }
              },
              tone: 'danger'
            }
          ]}
        />
      )
    }
  ];

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
          {/* ── Summary cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total balance */}
            <div className="col-span-1 sm:col-span-2 bg-gradient-to-l from-[#0f8e4c] to-[#0a6e3a] rounded-2xl p-5 text-white shadow-md flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/70 mb-1">إجمالي الأرصدة في جميع المحافظ</p>
                <p className="text-3xl font-bold font-mono tracking-tight">
                  {isLoading ? '...' : formatNumber(totalBalance)}
                  <span className="text-lg font-normal ms-1 text-white/70">ج.م</span>
                </p>
                <p className="text-xs text-white/60 mt-1">{wallets.length} محفظة إجمالاً</p>
              </div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Wallet size={28} className="text-white" />
              </div>
            </div>

            {/* Pinned / visible wallets */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">ظاهر في صفحة العمليات</p>
                <p className="text-3xl font-bold text-gray-800">
                  {pinnedCount}
                  <span className="text-base font-normal text-gray-400 ms-1">/ {wallets.length}</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">اضغط "إظهار / إخفاء" للتحكم</p>
              </div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <Eye size={24} className="text-blue-500" />
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>عرض</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setPageIndex(1);
                }}
                className={tokens.input + " py-1.5 px-3 min-h-0 text-sm"}
                style={{ width: '80px' }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span>محفظة بالصفحة</span>
            </div>
            <button
              onClick={openCreateDrawer}
              className={tokens.btn.primary + " flex items-center gap-2"}
            >
              <Plus size={18} />
              محفظة جديدة
            </button>
          </div>

          <DataTable
            columns={columns}
            data={paginatedWallets}
            isLoading={isLoading}
            pageIndex={pageIndex}
            totalPages={totalPages}
            totalCount={totalCount}
            pageSize={pageSize}
            onNextPage={() => setPageIndex((p) => p + 1)}
            onPrevPage={() => setPageIndex((p) => p - 1)}
            emptyEntity="محافظ"
          />
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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