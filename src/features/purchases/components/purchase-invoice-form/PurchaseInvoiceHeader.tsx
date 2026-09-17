import { useFormContext } from 'react-hook-form';
import { tokens } from '@/shared/styles/tokens';
import { CreatePurchaseInvoiceRequest } from '../../schemas/purchaseSchemas';
import { useSuppliers } from '@/features/suppliers/hooks/useSuppliers';

export function PurchaseInvoiceHeader() {
  const { register, formState: { errors } } = useFormContext<CreatePurchaseInvoiceRequest>();
  const { data: suppliersData, isLoading: isLoadingSuppliers } = useSuppliers({ pageNumber: 1, pageSize: 500 });
  const suppliers = suppliersData?.items || [];

  return (
    <div className={`${tokens.card} p-6 bg-white space-y-4`}>
      <h3 className="text-lg font-bold text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2">
        البيانات الأساسية
      </h3>

      <div>
        <label className={`${tokens.font.label} mb-2 block`}>
          المورد <span className="text-red-500">*</span>
        </label>
        <select
          {...register('supplierId')}
          className={`${tokens.select} max-w-md`}
          disabled={isLoadingSuppliers}
        >
          <option value="">-- اختر المورد --</option>
          {suppliers.map((s) => (
            <option key={s.supplierId} value={s.supplierId}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.supplierId && (
          <p className="text-red-500 text-xs mt-1 font-semibold">{errors.supplierId.message}</p>
        )}
      </div>
    </div>
  );
}
