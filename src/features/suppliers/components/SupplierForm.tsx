import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { tokens } from '@/shared/styles/tokens';
import { SupplierResponse, createSupplierSchema } from '../schemas/supplierSchemas';
import { useEffect } from 'react';

type SupplierFormValues = z.infer<typeof createSupplierSchema>;

interface SupplierFormProps {
  initialData?: SupplierResponse;
  onSubmit: (data: SupplierFormValues) => void;
  isSubmitting?: boolean;
}

export function SupplierForm({ initialData, onSubmit }: SupplierFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SupplierFormValues>({
    resolver: zodResolver(createSupplierSchema),
    mode: 'onBlur',
    defaultValues: {
      name: initialData?.name || '',
      type: initialData?.type || '',
      phone: initialData?.phone || '',
      address: initialData?.address || '',
    },
  });

  // Reset form when initialData changes
  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        type: initialData.type || '',
        phone: initialData.phone || '',
        address: initialData.address || '',
      });
    } else {
      reset({
        name: '',
        type: '',
        phone: '',
        address: '',
      });
    }
  }, [initialData, reset]);

  return (
    <form id="supplier-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      {/* Name */}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>اسم المورد <span className="text-red-500">*</span></label>
        <input
          {...register('name')}
          type="text"
          placeholder="مثال: شركة سامسونج"
          className={tokens.input}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      {/* Type */}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>نوع التوريد</label>
        <input
          {...register('type')}
          type="text"
          placeholder="مثال: إلكترونيات، شاشات..."
          className={tokens.input}
        />
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>رقم الهاتف</label>
        <input
          {...register('phone')}
          type="text"
          dir="ltr"
          placeholder="01xxxxxxxxx"
          className={`${tokens.input} text-left`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      {/* Address */}
      <div>
        <label className={tokens.font.label + " mb-2 block"}>العنوان</label>
        <textarea
          {...register('address')}
          placeholder="عنوان المورد بالتفصيل..."
          rows={3}
          className={`${tokens.input} resize-none`}
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
      </div>

    </form>
  );
}
