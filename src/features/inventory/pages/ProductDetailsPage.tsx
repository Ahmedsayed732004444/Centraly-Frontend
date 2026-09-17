import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as z from 'zod';
import { useProduct, useUpdateProduct } from '@/features/inventory/hooks/useInventory';
import { createProductSchema, CreateProductRequest } from '@/features/inventory/schemas/inventorySchemas';
import { tokens } from '@/shared/styles/tokens';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { AddProductForm } from '@/features/inventory/components/AddProductForm';
import { ProductDetailsHeader } from '@/features/inventory/components/ProductDetailsHeader';
import { ProductBatchesCard } from '@/features/inventory/components/ProductBatchesCard';
import { ProductPropertiesCard } from '@/features/inventory/components/ProductPropertiesCard';
import { ProductOverviewCard } from '@/features/inventory/components/ProductOverviewCard';
import { ProductNotesCard } from '@/features/inventory/components/ProductNotesCard';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { setTitle, setBackButton } = useHeaderStore();

  const { data: product, isLoading, error } = useProduct(id!);
  const updateProduct = useUpdateProduct();

  useEffect(() => {
    if (product) {
      setTitle(`تفاصيل المنتج: ${product.name}`);
    } else {
      setTitle('تفاصيل المنتج');
    }
    setBackButton(true, "/inventory/products");
    return () => setBackButton(false);
  }, [product, setTitle, setBackButton]);

  if (isLoading) return <div className="p-8 text-center text-gray-500">جاري تحميل تفاصيل المنتج...</div>;
  if (error || !product) return <div className="p-8 text-center text-red-500">حدث خطأ أثناء تحميل تفاصيل المنتج.</div>;

  const closeDrawer = () => setIsDrawerOpen(false);

  const handleFormSubmit = (formData: z.infer<typeof createProductSchema>) => {
    const payload: CreateProductRequest = { 
      name: formData.name,
      departmentId: formData.departmentId,
      categoryId: formData.categoryId,
      minQuantityAlert: formData.minQuantityAlert,
      usage: formData.usage || 3,
      barcode: formData.barcode || undefined,
      storageLocation: formData.storageLocation || undefined,
    };
    
    if (formData.image) {
      payload.image = formData.image;
    }

    if (formData.propertiesList && formData.propertiesList.length > 0) {
      payload.properties = {};
      formData.propertiesList.forEach((p: { key: string; value: string }) => {
        if (p.key && p.value) {
          payload.properties![p.key] = p.value;
        }
      });
    }

    updateProduct.mutate({ id: id!, data: payload }, { onSuccess: closeDrawer });
  };

  const drawerFooter = (
    <>
      <button type="button" onClick={closeDrawer} className={tokens.btn.secondary}>
        إلغاء
      </button>
      <button
        type="submit"
        form="add-product-form"
        disabled={updateProduct.isPending}
        className={tokens.btn.primary + " disabled:opacity-60"}
      >
        {updateProduct.isPending ? 'جاري الحفظ...' : 'حفظ التعديلات'}
      </button>
    </>
  );

  return (
    <div className="space-y-4 w-full pb-10 pt-4">
      <ProductDetailsHeader product={product} onEditClick={() => setIsDrawerOpen(true)} />
      
      <ProductBatchesCard product={product} />
      
      <ProductPropertiesCard product={product} />

      <ProductOverviewCard product={product} />

      <ProductNotesCard />

      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title="تعديل بيانات المنتج"
        footer={drawerFooter}
      >
        <AddProductForm
          onSubmit={handleFormSubmit}
          isSubmitting={updateProduct.isPending}
          initialData={product}
        />
      </RightDrawer>
    </div>
  );
}
