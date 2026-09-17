import { useForm, useWatch, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { useDepartments, useCategories } from '@/features/inventory/hooks/useInventory';
import { tokens } from '@/shared/styles/tokens';
import { Plus, Trash2 } from 'lucide-react';
import { ProductResponse, createProductSchema } from '../schemas/inventorySchemas';

type ProductFormValues = z.infer<typeof createProductSchema>;

interface AddProductFormProps {
  onSubmit: (data: ProductFormValues) => void;
  isSubmitting: boolean;
  initialData?: ProductResponse;
}

export function AddProductForm({ onSubmit, initialData, isSubmitting: _ }: AddProductFormProps) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductSchema),
    mode: 'onBlur',
    defaultValues: initialData ? {
      name: initialData.name,
      barcode: initialData.barcode || '',
      categoryId: initialData.category?.categoryId || '',
      departmentId: initialData.department?.departmentId || '',
      minQuantityAlert: initialData.minQuantityAlert,
      storageLocation: initialData.storageLocation || '',
      usage: initialData.usage || 3,
      propertiesList: Object.entries(initialData.properties || {}).map(([key, value]) => ({ key, value: value as string }))
    } : { minQuantityAlert: 5, categoryId: '', departmentId: '', usage: 3, propertiesList: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'propertiesList'
  });

  // Watch departmentId to fetch related categories
  const selectedDepartmentId = useWatch({ control, name: 'departmentId' });
  const { data: categoriesData } = useCategories(selectedDepartmentId || undefined);
  const categories = categoriesData?.items || [];
  
  const { data: departmentsData } = useDepartments();
  const departments = departmentsData?.items || [];

  return (
    <form id="add-product-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Product Name */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          اسم المنتج <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register('name')}
          placeholder="مثال: لابتوب ديل XPS"
          className={tokens.input}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{String(errors.name.message)}</p>
        )}
      </div>

      {/* Barcode */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>الباركود</label>
        <div className="flex gap-2">
          <input
            type="text"
            {...register('barcode')}
            placeholder="ادخل الباركود أو استخدم القارئ"
            className={tokens.input}
          />
          <button 
            type="button" 
            className={tokens.btn.ghost}
            onClick={() => {
              const randomBarcode = Math.floor(100000000000 + Math.random() * 900000000000).toString();
              setValue('barcode', randomBarcode, { shouldValidate: true });
            }}
          >
            توليد
          </button>
        </div>
        {errors.barcode && <p className={"text-xs text-[var(--color-danger)]"}>{String(errors.barcode.message)}</p>}
      </div>

      {/* Department Select */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          القسم الرئيسي <span className="text-red-500">*</span>
        </label>
        <select className={tokens.input} {...register('departmentId')} onChange={(e) => {
          register('departmentId').onChange(e);
          setValue('categoryId', ''); // Reset child when parent changes
        }}>
          <option value="">اختر القسم الرئيسي...</option>
          {departments?.map((dep) => (
            <option key={dep.departmentId} value={dep.departmentId}>
              {dep.name}
            </option>
          ))}
        </select>
        {errors.departmentId && <p className="text-red-500 text-xs mt-1">{String(errors.departmentId.message)}</p>}
      </div>

      {/* Category Select */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>القسم الفرعي</label>
        <select className={tokens.input} {...register('categoryId')} disabled={!selectedDepartmentId}>
          <option value="">اختر القسم الفرعي...</option>
          {categories?.map((cat) => (
            <option key={cat.categoryId} value={cat.categoryId}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.categoryId && (
          <p className="text-red-500 text-xs mt-1">{String(errors.categoryId.message)}</p>
        )}
      </div>

      {/* Usage Select */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          نوع المنتج (Usage) <span className="text-red-500">*</span>
        </label>
        <select className={tokens.input} {...register('usage', { valueAsNumber: true })}>
          <option value={3}>بيع أو صيانة</option>
          <option value={1}>بيع فقط</option>
          <option value={2}>صيانة فقط (قطع غيار داخلية)</option>
        </select>
        {errors.usage && (
          <p className="text-red-500 text-xs mt-1">{String(errors.usage.message)}</p>
        )}
      </div>

      {/* Min Quantity Alert */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          حد تنبيه الكمية (Min Quantity Alert) <span className="text-red-500">*</span>
        </label>
        <input type="number" {...register('minQuantityAlert', { valueAsNumber: true })} onFocus={(e) => e.target.select()} className={tokens.input} />
        <p className={tokens.font.helperText + " mt-1"}>
          سيتم تنبيهك عندما تصل كمية هذا المنتج إلى هذا الرقم
        </p>
      </div>

      {/* Storage Location */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>مكان التخزين (Storage Location)</label>
        <input
          type="text"
          {...register('storageLocation')}
          placeholder="مثال: الرف A1"
          className={tokens.input}
        />
      </div>

      {/* Properties (Dictionary) */}
      <div className="pt-2 border-t border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <label className={tokens.font.label}>خصائص إضافية (اختياري)</label>
          <button
            type="button"
            onClick={() => append({ key: '', value: '' })}
            className="text-blue-600 text-xs font-semibold flex items-center gap-1 hover:text-blue-700 bg-blue-50 px-2 py-1 rounded-md"
          >
            <Plus size={14} /> إضافة خاصية
          </button>
        </div>

        {fields.length > 0 ? (
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-start">
                <div className="flex-1">
                  <input
                    {...register(`propertiesList.${index}.key`)}
                    placeholder="الخاصية (مثال: اللون)"
                    className={tokens.input}
                  />
                  {errors.propertiesList?.[index]?.key && (
                    <p className="text-red-500 text-xs mt-1">{String(errors.propertiesList[index].key?.message)}</p>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    {...register(`propertiesList.${index}.value`)}
                    placeholder="القيمة (مثال: أحمر)"
                    className={tokens.input}
                  />
                  {errors.propertiesList?.[index]?.value && (
                    <p className="text-red-500 text-xs mt-1">{String(errors.propertiesList[index].value?.message)}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400">لا توجد خصائص مضافة. يمكنك إضافة تفاصيل مثل اللون، المقاس، إلخ.</p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>صورة المنتج</label>
        <input
          type="file"
          accept="image/*"
          className={tokens.input}
          name="image"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setValue('image', file || undefined, { shouldValidate: true });
          }}
        />
        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message as string}</p>}
      </div>
    </form>
  );
}

