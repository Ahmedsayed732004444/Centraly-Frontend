import { PaginatedList } from "@/shared/types/pagination";
import { 
  CategoryResponse, 
  CreateProductRequest, 
  DepartmentResponse, 
  ProductResponse,
  ProductFilters
} from "@/features/inventory/schemas/inventorySchemas";

export interface IInventoryRepository {
  // Categories
  getCategories(departmentId?: string, filters?: ProductFilters): Promise<PaginatedList<CategoryResponse>>;
  createCategory(reqData: { name: string; departmentId: string }): Promise<string>;
  updateCategory(id: string, reqData: { name: string; departmentId: string }): Promise<void>;
  deleteCategory(id: string): Promise<void>;
  
  // Departments
  getDepartments(filters?: ProductFilters): Promise<PaginatedList<DepartmentResponse>>;
  createDepartment(reqData: { name: string }): Promise<string>;
  updateDepartment(id: string, reqData: { name: string }): Promise<void>;
  deleteDepartment(id: string): Promise<void>;

  // Products
  getProducts(filters: ProductFilters): Promise<PaginatedList<ProductResponse>>;
  getProduct(id: string): Promise<ProductResponse>;
  createProduct(data: CreateProductRequest): Promise<string>;
  updateProduct(id: string, data: CreateProductRequest): Promise<void>;
  deleteProduct(id: string): Promise<void>;
}

