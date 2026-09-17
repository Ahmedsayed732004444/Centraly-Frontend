import { apiClient } from "@/lib/axios";
import { IInventoryRepository } from "@/core/repositories/IInventoryRepository";
import { PaginatedList } from "@/shared/types/pagination";
import { 
  CategoryResponse, 
  CreateProductRequest, 
  DepartmentResponse, 
  ProductResponse,
  ProductFilters
} from "../schemas/inventorySchemas";

export class InventoryRepository implements IInventoryRepository {
  async getCategories(departmentId?: string, filters?: ProductFilters): Promise<PaginatedList<CategoryResponse>> {
    const params = { ...filters, departmentId };
    const { data } = await apiClient.get<PaginatedList<CategoryResponse>>('/categories', { params });
    return data;
  }

  async createCategory(reqData: { name: string; departmentId: string }): Promise<string> {
    const { data } = await apiClient.post<string>('/categories', reqData);
    return data;
  }

  async updateCategory(id: string, reqData: { name: string; departmentId: string }): Promise<void> {
    await apiClient.put(`/categories/${id}`, reqData);
  }

  async deleteCategory(id: string): Promise<void> {
    await apiClient.delete(`/categories/${id}`);
  }

  async getDepartments(filters?: ProductFilters): Promise<PaginatedList<DepartmentResponse>> {
    const { data } = await apiClient.get<PaginatedList<DepartmentResponse>>('/departments', { params: filters });
    return data;
  }

  async createDepartment(reqData: { name: string }): Promise<string> {
    const { data } = await apiClient.post<string>('/departments', reqData);
    return data;
  }

  async updateDepartment(id: string, reqData: { name: string }): Promise<void> {
    await apiClient.put(`/departments/${id}`, reqData);
  }

  async deleteDepartment(id: string): Promise<void> {
    await apiClient.delete(`/departments/${id}`);
  }

  async getProducts(filters: ProductFilters): Promise<PaginatedList<ProductResponse>> {
    const { data } = await apiClient.get<PaginatedList<ProductResponse>>('/products', { params: filters });
    return data;
  }

  async getProduct(id: string): Promise<ProductResponse> {
    const { data } = await apiClient.get<ProductResponse>(`/products/${id}`);
    return data;
  }

  async createProduct(reqData: CreateProductRequest): Promise<string> {
    const formData = new FormData();
    if (reqData.barcode) formData.append('Barcode', reqData.barcode);
    if (reqData.name) formData.append('Name', reqData.name);
    if (reqData.departmentId) formData.append('DepartmentId', reqData.departmentId);
    if (reqData.categoryId) formData.append('CategoryId', reqData.categoryId);
    formData.append('MinQuantityAlert', reqData.minQuantityAlert.toString());
    if (reqData.usage !== undefined && reqData.usage !== null) {
      formData.append('Usage', reqData.usage.toString());
    }
    if (reqData.storageLocation) formData.append('StorageLocation', reqData.storageLocation);
    if (reqData.image instanceof File) {
      formData.append('Image', reqData.image);
    }
    if (reqData.properties) {
      Object.entries(reqData.properties).forEach(([key, value], index) => {
        formData.append(`Properties[${index}].Key`, key);
        formData.append(`Properties[${index}].Value`, value as string);
      });
    }

    const { data } = await apiClient.post<string>('/products', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data;
  }

  async updateProduct(id: string, reqData: CreateProductRequest): Promise<void> {
    const formData = new FormData();
    if (reqData.barcode) formData.append('Barcode', reqData.barcode);
    if (reqData.name) formData.append('Name', reqData.name);
    if (reqData.departmentId) formData.append('DepartmentId', reqData.departmentId);
    if (reqData.categoryId) formData.append('CategoryId', reqData.categoryId);
    formData.append('MinQuantityAlert', reqData.minQuantityAlert.toString());
    if (reqData.usage !== undefined && reqData.usage !== null) {
      formData.append('Usage', reqData.usage.toString());
    }
    if (reqData.storageLocation) formData.append('StorageLocation', reqData.storageLocation);
    if (reqData.image instanceof File) {
      formData.append('Image', reqData.image);
    }
    if (reqData.properties) {
      Object.entries(reqData.properties).forEach(([key, value], index) => {
        formData.append(`Properties[${index}].Key`, key);
        formData.append(`Properties[${index}].Value`, value as string);
      });
    }

    await apiClient.put(`/products/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }

  async deleteProduct(id: string): Promise<void> {
    await apiClient.delete(`/products/${id}`);
  }
}

export const inventoryRepository = new InventoryRepository();

