import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { inventoryRepository } from "../api/InventoryApi";
import { ProductFilters, CreateProductRequest } from "../schemas/inventorySchemas";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/shared/utils/apiError";

export const INVENTORY_KEYS = {
  categories: ["categories"] as const,
  departments: ["departments"] as const,
  products: (filters: ProductFilters) => ["products", filters] as const,
  productDetails: (id: string) => ["products", id] as const,
};

// --- Queries ---

export function useCategories(departmentId?: string, filters: ProductFilters = { pageNumber: 1, pageSize: 100 }) {
  return useQuery({
    queryKey: [...INVENTORY_KEYS.categories, departmentId, filters],
    queryFn: () => inventoryRepository.getCategories(departmentId, filters),
  });
}

export function useDepartments(filters: ProductFilters = { pageNumber: 1, pageSize: 100 }) {
  return useQuery({
    queryKey: [...INVENTORY_KEYS.departments, filters],
    queryFn: () => inventoryRepository.getDepartments(filters),
  });
}

export function useProducts(filters: ProductFilters) {
  return useQuery({
    queryKey: INVENTORY_KEYS.products(filters),
    queryFn: () => inventoryRepository.getProducts(filters),
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: INVENTORY_KEYS.productDetails(id),
    queryFn: () => inventoryRepository.getProduct(id),
    enabled: !!id,
  });
}

// --- Mutations ---

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProductRequest) => inventoryRepository.createProduct(data),
    onSuccess: () => {
      toast.success("تم إضافة المنتج بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء إضافة المنتج")),
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreateProductRequest }) => 
      inventoryRepository.updateProduct(id, data),
    onSuccess: (_, { id }) => {
      toast.success("تم تعديل المنتج بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.productDetails(id) });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تعديل المنتج")),
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryRepository.deleteProduct(id),
    onSuccess: () => {
      toast.success("تم حذف المنتج بنجاح!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء حذف المنتج")),
  });
}

// --- Categories Mutations ---

export function useCreateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string; departmentId: string }) => inventoryRepository.createCategory(data),
    onSuccess: () => {
      toast.success("تم إضافة القسم الفرعي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.categories });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء إضافة القسم الفرعي")),
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string; departmentId: string } }) => 
      inventoryRepository.updateCategory(id, data),
    onSuccess: () => {
      toast.success("تم تعديل القسم الفرعي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.categories });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تعديل القسم الفرعي")),
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryRepository.deleteCategory(id),
    onSuccess: () => {
      toast.success("تم حذف القسم الفرعي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.categories });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء حذف القسم الفرعي")),
  });
}

// --- Departments Mutations ---

export function useCreateDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string }) => inventoryRepository.createDepartment(data),
    onSuccess: () => {
      toast.success("تم إضافة القسم الرئيسي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.departments });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء إضافة القسم الرئيسي")),
  });
}

export function useUpdateDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string } }) => 
      inventoryRepository.updateDepartment(id, data),
    onSuccess: () => {
      toast.success("تم تعديل القسم الرئيسي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.departments });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تعديل القسم الرئيسي")),
  });
}

export function useDeleteDepartment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryRepository.deleteDepartment(id),
    onSuccess: () => {
      toast.success("تم حذف القسم الرئيسي بنجاح!");
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.departments });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء حذف القسم الرئيسي")),
  });
}

