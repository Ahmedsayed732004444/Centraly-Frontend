import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createCustomerSchema, CreateCustomerRequest, CustomerResponse } from '../schemas/contactSchemas';
import { tokens } from '@/shared/styles/tokens';
import { useEffect } from 'react';

interface CustomerFormProps {
  initialData?: CustomerResponse;
  onSubmit: (data: CreateCustomerRequest) => void;
}

export function CustomerForm({ initialData, onSubmit }: CustomerFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCustomerRequest>({
    resolver: zodResolver(createCustomerSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        phone: initialData.phone || '',
      });
    } else {
      reset({
        name: '',
        phone: '',
      });
    }
  }, [initialData, reset]);

  return (
    <form id="customer-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className={tokens.font.label + " mb-2 block"}>اسم العميل <span className="text-red-500">*</span></label>
        <input
          type="text"
          {...register('name')}
          className={tokens.input}
          placeholder="مثال: أحمد محمد"
          autoFocus
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className={tokens.font.label + " mb-2 block"}>رقم الهاتف</label>
        <input
          type="text"
          {...register('phone')}
          className={tokens.input}
          placeholder="مثال: 010xxxxxxxx"
          dir="ltr"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>
    </form>
  );
}
