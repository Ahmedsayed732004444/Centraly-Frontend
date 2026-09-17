import { useState } from 'react';
import { useSuppliers, useCreateSupplier, useUpdateSupplier, useDeleteSupplier } from '../hooks/useSuppliers';
import { SupplierResponse, CreateSupplierRequest } from '../schemas/supplierSchemas';
import { SupplierFilters } from '../components/SupplierFilters';
import { SuppliersTable } from '../components/SuppliersTable';
import { SupplierForm } from '../components/SupplierForm';
import { RightDrawer } from '@/shared/components/ui/RightDrawer';
import { ConfirmModal } from '@/shared/components/ui/ConfirmModal';
import { tokens } from '@/shared/styles/tokens';
import * as z from 'zod';
import { createSupplierSchema } from '../schemas/supplierSchemas';
import { useNavigate } from 'react-router-dom';
import { SupplierPaymentModal } from '../components/SupplierPaymentModal';
import { ExportExcelButton } from '@/shared/components/ui/ExportExcelButton';
import { exportToExcel } from '@/shared/utils/exportToExcel';
import { fetchAllPages } from '@/shared/utils/fetchAllPages';
import { supplierRepository } from '../api/SupplierApi';
import { formatDateOnly } from '@/shared/utils/date';

export function SuppliersPage() {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [supplierToEdit, setSupplierToEdit] = useState<SupplierResponse | undefined>(undefined);

  // Delete modal state
  const [supplierToDelete, setSupplierToDelete] = useState<SupplierResponse | null>(null);

  // Payment modal state
  const [supplierToPay, setSupplierToPay] = useState<SupplierResponse | null>(null);

  const { data, isLoading } = useSuppliers({
    pageNumber: pageIndex,
    pageSize: 10,
    searchValue: searchTerm || undefined,
  });

  const createSupplier = useCreateSupplier();
  const updateSupplier = useUpdateSupplier();
  const deleteSupplier = useDeleteSupplier();

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setPageIndex(1);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSupplierToEdit(undefined);
  };

  const openAddDrawer = () => {
    setSupplierToEdit(undefined);
    setIsDrawerOpen(true);
  };

  const openEditDrawer = (supplier: SupplierResponse) => {
    setSupplierToEdit(supplier);
    setIsDrawerOpen(true);
  };

  const handleFormSubmit = (formData: z.infer<typeof createSupplierSchema>) => {
    const payload: CreateSupplierRequest = {
      name: formData.name,
      type: formData.type || undefined,
      phone: formData.phone || undefined,
      address: formData.address || undefined,
    };

    if (supplierToEdit) {
      updateSupplier.mutate(
        { id: supplierToEdit.supplierId, data: payload },
        { onSuccess: closeDrawer }
      );
    } else {
      createSupplier.mutate(payload, { onSuccess: closeDrawer });
    }
  };

  const handleDeleteConfirm = () => {
    if (supplierToDelete) {
      deleteSupplier.mutate(supplierToDelete.supplierId, {
        onSuccess: () => setSupplierToDelete(null),
      });
    }
  };

  const isSubmitting = createSupplier.isPending || updateSupplier.isPending;

  const drawerFooter = (
    <>
      <button type="button" onClick={closeDrawer} className={tokens.btn.secondary}>
        إلغاء
      </button>
      <button
        type="submit"
        form="supplier-form"
        disabled={isSubmitting}
        className={tokens.btn.primary + " disabled:opacity-60"}
      >
        {isSubmitting ? 'جاري الحفظ...' : (supplierToEdit ? 'حفظ التعديلات' : 'إضافة المورد')}
      </button>
    </>
  );

  return (
    <div className="space-y-4">
      {/* Filter toolbar */}
      <SupplierFilters
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onAddClick={openAddDrawer}
      />

      <div className="flex justify-end">
        <ExportExcelButton
          onExport={async () => {
            const rows = await fetchAllPages<SupplierResponse>((pageNumber) =>
              supplierRepository.getSuppliers({ pageNumber, pageSize: 50, searchValue: searchTerm || undefined })
            );
            await exportToExcel<SupplierResponse>({
              fileName: 'الموردين',
              sheetName: 'الموردين',
              title: 'سجل الموردين',
              columns: [
                { header: 'اسم المورد', value: (r) => r.name },
                { header: 'الهاتف', value: (r) => r.phone || '-' },
                { header: 'الرصيد المستحق', value: (r) => r.debtBalance, money: true },
                { header: 'عدد الفواتير', value: (r) => r.purchaseInvoicesCount },
                { header: 'عدد المرتجعات', value: (r) => r.returnsCount },
                { header: 'تاريخ الإضافة', value: (r) => formatDateOnly(r.createdAt) },
              ],
              rows,
            });
          }}
        />
      </div>

      {/* Data table */}
      <SuppliersTable
        data={data}
        isLoading={isLoading}
        pageIndex={pageIndex}
        onNextPage={() => setPageIndex((p) => p + 1)}
        onPrevPage={() => setPageIndex((p) => p - 1)}
        onEdit={openEditDrawer}
        onDelete={(supplier) => setSupplierToDelete(supplier)}
        onPay={(supplier) => setSupplierToPay(supplier)}
        onRowClick={(supplier) => navigate(`/contacts/suppliers/${supplier.supplierId}`)}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!supplierToDelete}
        title="تأكيد حذف المورد"
        message={
          supplierToDelete
            ? `هل أنت متأكد من حذف المورد "${supplierToDelete.name}" نهائياً؟ لا يمكن التراجع عن هذا الإجراء وقد يؤدي لحذف الفواتير المرتبطة به.`
            : ''
        }
        confirmText={deleteSupplier.isPending ? 'جاري الحذف...' : 'نعم، احذف'}
        cancelText="إلغاء"
        onConfirm={handleDeleteConfirm}
        onClose={() => setSupplierToDelete(null)}
        type="danger"
      />

      {/* Add/Edit Drawer */}
      <RightDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title={supplierToEdit ? "تعديل بيانات المورد" : "إضافة مورد جديد"}
        footer={drawerFooter}
      >
        <SupplierForm
          initialData={supplierToEdit}
          onSubmit={handleFormSubmit}
          isSubmitting={isSubmitting}
        />
      </RightDrawer>

      {/* Payment Modal */}
      {supplierToPay && (
        <SupplierPaymentModal
          isOpen={!!supplierToPay}
          onClose={() => setSupplierToPay(null)}
          supplier={supplierToPay}
        />
      )}
    </div>
  );
}
