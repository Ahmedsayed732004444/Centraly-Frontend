import { useMemo, useState } from 'react';
import { Search, Package } from 'lucide-react';
import { useSupplierBatches } from '@/features/suppliers/hooks/useSuppliers';
import { SupplierBatchResponse } from '@/features/suppliers/schemas/supplierSchemas';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { formatDateOnly } from '@/shared/utils/date';
import { BaseModal } from '@/shared/components/ui/BaseModal';
import { Spinner } from '@/shared/components/ui/Spinner';
interface SupplierBatchPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplierId: string;
  onSelectBatch: (batch: SupplierBatchResponse) => void;
}
export function SupplierBatchPickerModal({
  isOpen,
  onClose,
  supplierId,
  onSelectBatch,
}: SupplierBatchPickerModalProps) {
  const { data: batches, isLoading, error } = useSupplierBatches(supplierId);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBatches = useMemo(() => {
    if (!batches) return [];
    if (!searchTerm) return batches;
    const lower = searchTerm.toLowerCase();
    return batches.filter(
      (b) =>
        (b.productName && b.productName.toLowerCase().includes(lower)) ||
        (b.barcode && b.barcode.toLowerCase().includes(lower)) ||
        b.productId.toLowerCase().includes(lower)
    );
  }, [batches, searchTerm]);
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="اختيار صنف من المورد" size="3xl">
      <div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-page-bg)]">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={20} />
          <input
            type="text"
            placeholder="ابحث باسم المنتج أو الباركود..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`${tokens.input} pl-4 pr-10`}
          />
        </div>
      </div>
      <div className="p-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <Spinner size={32} />
          </div>
        ) : error ? (
          <div className="text-center py-10 text-[var(--color-danger)]">حدث خطأ أثناء جلب الأصناف.</div>
        ) : filteredBatches.length === 0 ? (
          <div className="text-center py-10 flex flex-col items-center justify-center text-[var(--color-text-muted)]">
            <Package size={48} className="text-gray-300 mb-4" />
            <p className="text-lg font-semibold text-[var(--color-text-main)]">لا توجد أصناف متوفرة</p>
            <p className="text-sm mt-1">لا يوجد رصيد حالي لأي أصناف تم شراؤها من هذا المورد.</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {filteredBatches.map((batch) => (
              <button
                type="button"
                key={batch.batchId}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-white border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] hover:shadow-sm transition-all text-right w-full"
                onClick={() => onSelectBatch(batch)}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 bg-indigo-50 text-[var(--color-primary)] rounded-lg flex items-center justify-center shrink-0">
                    <Package size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[var(--color-text-main)] truncate">
                      {batch.productName || 'منتج غير معروف'}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-[var(--color-text-muted)] flex-wrap">
                      {batch.barcode && <span>{batch.barcode}</span>}
                      <span>•</span>
                      <span>شراء: {formatDateOnly(batch.dateReceived)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0">
                  <div className="text-lg font-bold text-[var(--color-text-main)]">
                    {formatCurrency(batch.purchasePrice)}
                  </div>
                  <div className="text-sm">
                    الكمية المتاحة:{' '}
                    <span className="font-semibold text-[var(--color-primary)]">{batch.availableQuantity}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </BaseModal>
  );
}