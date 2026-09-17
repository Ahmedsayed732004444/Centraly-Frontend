import { z } from "zod";
import { BaseFilters } from "@/shared/types/pagination";

export enum ProductUsageDto {
  SaleOnly = 1,
  MaintenanceOnly = 2,
  SaleAndMaintenance = 3
}

export interface ProductFilters extends BaseFilters {
  categoryId?: string;
  departmentId?: string;
  stockStatus?: string;
  usage?: ProductUsageDto;
  excludeUsage?: ProductUsageDto;
}

// Shared common filters
// Categories
export interface CategoryResponse {
  categoryId: string;
  name: string;
  department: DepartmentSummary;
  productsCount: number;
  createdAt: string;
}

// Departments
export interface DepartmentResponse {
  departmentId: string;
  name: string;
  categoriesCount: number;
  productsCount: number;
  createdAt: string;
}

export const createDepartmentSchema = z.object({
  name: z.string().min(1, "اسم القسم الرئيسي مطلوب"),
});

export type CreateDepartmentRequest = z.infer<typeof createDepartmentSchema>;

export const createCategorySchema = z.object({
  name: z.string().min(1, "اسم القسم الفرعي مطلوب"),
  departmentId: z.string().min(1, "يجب اختيار القسم الرئيسي"),
});

export type CreateCategoryRequest = z.infer<typeof createCategorySchema>;

// Products
export const createProductSchema = z.object({
  barcode: z.string().optional(),
  name: z.string().min(1, "اسم المنتج مطلوب"),
  departmentId: z.string().min(1, "القسم الفرعي مطلوب"),
  categoryId: z.string().min(1, "القسم الرئيسي مطلوب"),
  image: z.instanceof(File, { message: "يجب أن يكون ملفًا" }).optional(),
  minQuantityAlert: z.coerce.number().min(0, "يجب أن تكون 0 أو أكثر"),
  storageLocation: z.string().optional(),
  usage: z.coerce.number().default(ProductUsageDto.SaleAndMaintenance),
  propertiesList: z.array(z.object({
    key: z.string().min(1, "الاسم مطلوب"),
    value: z.string().min(1, "القيمة مطلوبة")
  })).optional()
});

export type CreateProductRequest = z.infer<typeof createProductSchema> & {
  properties?: Record<string, string>;
};

export interface DepartmentSummary {
  departmentId: string;
  name: string;
}

export interface CategorySummary {
  categoryId: string;
  name: string;
}

export interface ProductBatchResponse {
  batchId: string;
  supplierId?: string;
  supplierName?: string;
  availableQuantity: number;
  purchasePrice: number;
  wholesalePrice: number;
  retailPrice: number;
  maintenancePrice: number;
  dateReceived: string;
}

export interface ProductResponse {
  productId: string;
  barcode?: string;
  name?: string;
  department: DepartmentSummary;
  category: CategorySummary;
  totalQuantity: number;
  imageUrl?: string;
  minQuantityAlert: number;
  storageLocation?: string;
  isOutOfStock: boolean;
  isLowStock: boolean;
  createdAt: string;
  usage: ProductUsageDto;
  properties: Record<string, string>;
  batches: ProductBatchResponse[];
}

export function isMaintenanceProduct(usage?: ProductUsageDto): boolean {
  return usage === ProductUsageDto.MaintenanceOnly || usage === ProductUsageDto.SaleAndMaintenance;
}

/**
 * The maintenance price to prefill when a part is added to a ticket. `batches[0]` is
 * not safe to use directly - a product can carry a zero-priced batch created by a
 * stock adjustment (AdjustQuantityAsync always sets MaintenancePrice = 0), and batches
 * come back in no guaranteed order, so the picker could land on that batch instead of
 * a real purchase one. This picks the most recently received batch that actually has a
 * price set, falling back to 0 only if none do.
 */
export function getMaintenancePrice(product: Pick<ProductResponse, 'batches'>): number {
  const priced = (product.batches || []).filter((b) => b.maintenancePrice > 0);
  if (priced.length === 0) return 0;
  return priced.reduce((latest, b) => (new Date(b.dateReceived) > new Date(latest.dateReceived) ? b : latest)).maintenancePrice;
}
