import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supplierRepository } from "../api/SupplierApi";
import { SupplierFilters, CreateSupplierRequest, UpdateSupplierRequest } from "../schemas/supplierSchemas";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/shared/utils/apiError";

export const SUPPLIER_KEYS = {
  suppliers: (filters: SupplierFilters) => ["suppliers", filters] as const,
  supplierDetails: (id: string) => ["suppliers", id] as const,
  supplierStatement: (id: string, filters: SupplierFilters) => ["suppliers", id, "statement", filters] as const,
  supplierBatches: (id: string) => ["suppliers", id, "batches"] as const,
};

export function useSuppliers(filters: SupplierFilters) {
  return useQuery({
    queryKey: SUPPLIER_KEYS.suppliers(filters),
    queryFn: () => supplierRepository.getSuppliers(filters),
  });
}

export function useSupplierDetails(id: string) {
  return useQuery({
    queryKey: SUPPLIER_KEYS.supplierDetails(id),
    queryFn: () => supplierRepository.getSupplier(id),
    enabled: !!id,
  });
}

export function useSupplierStatement(id: string, filters: SupplierFilters = { pageNumber: 1, pageSize: 100 }) {
  return useQuery({
    queryKey: SUPPLIER_KEYS.supplierStatement(id, filters),
    queryFn: () => supplierRepository.getSupplierStatement(id, filters),
    enabled: !!id,
  });
}

export function useSupplierBatches(id: string) {
  return useQuery({
    queryKey: SUPPLIER_KEYS.supplierBatches(id),
    queryFn: () => supplierRepository.getSupplierBatches(id),
    enabled: !!id,
  });
}

export function useCreateSupplier() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSupplierRequest) => supplierRepository.createSupplier(data),
    onSuccess: () => {
      toast.success("تم إضافة المورد بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء إضافة المورد")),
  });
}

export function useUpdateSupplier() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateSupplierRequest }) => 
      supplierRepository.updateSupplier(id, data),
    onSuccess: (_, { id }) => {
      toast.success("تم تحديث بيانات المورد بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: SUPPLIER_KEYS.supplierDetails(id) });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تحديث المورد")),
  });
}

export function useDeleteSupplier() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => supplierRepository.deleteSupplier(id),
    onSuccess: () => {
      toast.success("تم حذف المورد بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء حذف المورد، قد يكون مرتبطاً بفواتير")),
  });
}

export function useCreateSupplierPayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: import('../schemas/supplierSchemas').CreateSupplierPaymentRequest) => 
      supplierRepository.addSupplierPayment(data),
    onSuccess: (_, variables) => {
      toast.success("تم تسجيل الدفعة بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: SUPPLIER_KEYS.supplierDetails(variables.supplierId) });
      queryClient.invalidateQueries({ queryKey: ["finance", "drawer"] });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تسجيل الدفعة")),
  });
}
