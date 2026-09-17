import * as z from 'zod';
import { BaseFilters } from '@/shared/types/pagination';

// Return reason labels and colors
export const RETURN_REASON_LABELS: Record<number, string> = {
  1: 'عيب أو خلل في المنتج',
  2: 'تغيير رأي',
  3: 'سبب آخر',
};

export const RETURN_REASON_COLORS: Record<number, string> = {
  1: 'bg-red-50 text-red-700',
  2: 'bg-amber-50 text-amber-700',
  3: 'bg-gray-100 text-gray-600',
};

// Response types
export interface SupplierReturnProductSummary {
  productId: string;
  name?: string;
  barcode?: string;
  imageUrl?: string;
  retailPrice: number;
  wholesalePrice?: number;
  quantity: number;
}

export interface SupplierReturnItemResponse {
  supplierReturnItemId: string;
  product: SupplierReturnProductSummary;
  quantity: number;
  unitCost: number;
  lineTotal: number;
}

export interface SupplierReturnResponse {
  supplierReturnId: string;
  supplier: {
    id: string;
    name: string;
    phone?: string;
  };
  reason: 1 | 2 | 3;
  notes?: string;
  totalReturnedAmount: number;
  returnDate: string;
  items: SupplierReturnItemResponse[];
  itemsCount: number;
}

// Request schema
export const createSupplierReturnItemSchema = z.object({
  productId: z.string().min(1, 'يجب اختيار منتج'),
  batchId: z.string().min(1, 'يجب تحديد الدفعة'),
  quantity: z.number().int().min(1, 'الكمية يجب أن تكون 1 على الأقل'),
  returnPrice: z.number().int().min(0, 'سعر الإرجاع غير صالح'),
});

export type CreateSupplierReturnItemRequest = z.infer<typeof createSupplierReturnItemSchema>;

export const createSupplierReturnSchema = z.object({
  supplierId: z.string().min(1, 'يجب اختيار مورد'),
  reason: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  notes: z.string().optional(),
  items: z.array(createSupplierReturnItemSchema).min(1, 'يجب إضافة صنف واحد على الأقل'),
  isCashRefund: z.boolean().default(false),
  paymentSource: z.number().optional(),
});

export type CreateSupplierReturnRequest = z.infer<typeof createSupplierReturnSchema>;

// Filters
export interface SupplierReturnFilters extends BaseFilters {
  supplierId?: string;
}
