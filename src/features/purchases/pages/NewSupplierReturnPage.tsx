import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useCreateSupplierReturn } from '../hooks/useSupplierReturns';
import { tokens } from '@/shared/styles/tokens';
import { useSuppliers } from '@/features/suppliers/hooks/useSuppliers';
import { Package, Trash2, AlertCircle, ShoppingCart } from 'lucide-react';
import { CreateSupplierReturnItemRequest } from '../schemas/supplierReturnSchemas';
import { formatCurrency } from '@/shared/utils/currency';
import { getApiErrorMessage } from '@/shared/utils/apiError';
import { SupplierBatchPickerModal } from '../components/SupplierBatchPickerModal';
import { SupplierBatchResponse } from '@/features/suppliers/schemas/supplierSchemas';
import { ReturnOptionsForm } from '@/features/sales/components/ReturnOptionsForm';
import { usePaymentSourcePrompt } from '@/features/finance/hooks/usePaymentSourcePrompt';
export function NewSupplierReturnPage() {
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();
  const createReturn = useCreateSupplierReturn();
  const { data: suppliersData, isLoading: isLoadingSuppliers } = useSuppliers({ pageSize: 100 });
  const [supplierId, setSupplierId] = useState('');
  const [reason, setReason] = useState<number>(1);
  const [notes, setNotes] = useState('');
  const [items, setItems] = useState<CreateSupplierReturnItemRequest[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCashRefund, setIsCashRefund] = useState(false);
  const { promptPaymentSource, PaymentSourcePromptModal } = usePaymentSourcePrompt(4);
  useEffect(() => {
    setTitle('مرتجع مورد جديد');
    setBackButton(true, '/purchases/returns');
    return () => setBackButton(false);
  }, [setTitle, setBackButton]);
  const handleOpenModal = () => {
    if (!supplierId) {
      setError('يرجى اختيار المورد أولاً قبل إضافة الأصناف');
      return;
    }
    setError(null);
    setIsModalOpen(true);
  };
  const handleSelectBatch = (batch: SupplierBatchResponse) => {
    if (items.some(i => i.batchId === batch.batchId)) {
      alert('تم إضافة هذا الصنف مسبقاً');
      return;
    }
    setItems([...items, {
      productId: batch.productId,
      batchId: batch.batchId,
      quantity: 1,
      returnPrice: batch.purchasePrice
    }]);
    setIsModalOpen(false);
  };
  const handleUpdateItem = (index: number, field: keyof CreateSupplierReturnItemRequest, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };
  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!supplierId) return setError('يجب اختيار مورد');
    if (items.length === 0) return setError('يجب إضافة صنف واحد على الأقل');
    if (items.some(i => !i.productId || !i.batchId || i.quantity <= 0)) {
      return setError('يرجى استكمال جميع بيانات الأصناف بشكل صحيح (معرف المنتج ومعرف الدفعة والكمية)');
    }
    let finalPaymentSource: number | undefined;
    if (isCashRefund) {
      const sourceId = await promptPaymentSource();
      if (!sourceId) return;
      finalPaymentSource = sourceId;
    }
    createReturn.mutate(
      { supplierId, reason: reason as 1 | 2 | 3, notes, items, isCashRefund, paymentSource: finalPaymentSource },
      {
        onSuccess: () => {
          toast.success("تم حفظ المرتجع بنجاح!");
          navigate('/purchases/returns');
        },
        onError: (err: unknown) => setError(getApiErrorMessage(err, 'حدث خطأ أثناء حفظ المرتجع'))
      }
    );
  };
  const totalAmount = items.reduce((sum, item) => sum + (item.quantity * item.returnPrice), 0);
  return (
    <div className="w-full space-y-6 pb-24">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 border border-red-200">
          <AlertCircle size={20} />
          <p>{error}</p>
        </div>
      )}
      <form id="new-return-form" onSubmit={handleSubmit} className="space-y-6">
        {}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">بيانات المرتجع الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={`${tokens.font.label} block mb-2`}>المورد <span className="text-red-500">*</span></label>
              <select
                value={supplierId}
                onChange={(e) => setSupplierId(e.target.value)}
                className={`${tokens.input} w-full`}
                disabled={isLoadingSuppliers}
              >
                <option value="">-- اختر المورد --</option>
                {suppliersData?.items.map(s => (
                  <option key={s.supplierId} value={s.supplierId}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
          <ReturnOptionsForm
            reason={reason}
            onReasonChange={setReason}
            isCashRefund={isCashRefund}
            onCashRefundChange={setIsCashRefund}
            notes={notes}
            onNotesChange={setNotes}
          />
        </div>
        {/* Items */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3">
            <h2 className="text-lg font-bold text-gray-800">الأصناف المرتجعة <span className="text-red-500">*</span></h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleOpenModal}
                className="text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors shrink-0"
              >
                <ShoppingCart size={16} /> اختيار صنف من المورد
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="flex flex-wrap md:flex-nowrap items-end gap-3 p-4 pt-8 md:pt-4 bg-gray-50 border border-gray-200 rounded-lg relative group">
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="absolute top-2 left-2 text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-md transition-colors"
                  title="حذف الصنف"
                  aria-label="حذف الصنف"
                >
                  <Trash2 size={16} />
                </button>
                <div className="w-full md:w-1/3">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">معرف المنتج (ID)</label>
                  <input
                    type="text"
                    value={item.productId}
                    readOnly
                    className={tokens.input + ' py-2 text-sm bg-gray-100 text-gray-500 cursor-not-allowed w-full'}
                    placeholder="Product ID..."
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">معرف الدفعة (Batch ID)</label>
                  <input
                    type="text"
                    value={item.batchId}
                    readOnly
                    className={tokens.input + ' py-2 text-sm bg-gray-100 text-gray-500 cursor-not-allowed w-full'}
                    placeholder="Batch ID..."
                  />
                </div>
                <div className="w-1/2 md:w-24">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">الكمية</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || ''}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => handleUpdateItem(index, 'quantity', Number(e.target.value))}
                    className={tokens.input + ' py-2 text-sm text-center w-full'}
                  />
                </div>
                <div className="w-1/2 md:w-32">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">سعر الإرجاع</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={item.returnPrice || ''}
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => handleUpdateItem(index, 'returnPrice', Number(e.target.value))}
                    className={tokens.input + ' py-2 text-sm text-center w-full'}
                  />
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="py-10 text-center border-2 border-dashed border-gray-200 rounded-xl">
                <Package size={40} className="mx-auto text-gray-300 mb-3" />
                <p className="text-gray-500">لم يتم إضافة أي أصناف للمرتجع.</p>
                <p className="text-sm text-gray-400 mt-1">اضغط على زر الإضافة لاختيار الأصناف.</p>
              </div>
            )}
          </div>
        </div>
      </form>
      {/* Sticky footer stacks vertically on phones so the total and both action buttons
          stay fully visible instead of being squeezed into (and clipped from) one row. */}
      <div className="sticky bottom-0 -mx-3 md:-mx-6 -mb-3 md:-mb-6 mt-6 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-stretch sm:items-center z-10">
        <div className="text-center sm:text-right">
          <p className="text-sm text-gray-500 font-semibold">إجمالي المرتجع</p>
          <p className="text-xl font-bold text-blue-700">{formatCurrency(totalAmount)}</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button type="button" onClick={() => navigate('/purchases/returns')} className={`${tokens.btn.secondary} flex-1 sm:flex-none`}>
            إلغاء
          </button>
          <button
            type="submit"
            form="new-return-form"
            disabled={createReturn.isPending}
            className={`${tokens.btn.primary} disabled:opacity-50 flex-1 sm:flex-none sm:min-w-[120px]`}
          >
            {createReturn.isPending ? 'جاري الحفظ...' : 'حفظ المرتجع'}
          </button>
        </div>
      </div>
      <SupplierBatchPickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        supplierId={supplierId}
        onSelectBatch={handleSelectBatch}
      />
      <PaymentSourcePromptModal />
    </div>
  );
}