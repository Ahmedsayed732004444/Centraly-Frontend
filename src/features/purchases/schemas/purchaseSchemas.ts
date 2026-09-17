import * as z from 'zod';
import { BaseFilters } from '@/shared/types/pagination';

// Requests
export const purchaseInvoiceItemSchema = z.object({
  productId: z.string().min(1, "يجب اختيار منتج"),
  productName: z.string().optional(), // Frontend only helper
  productUsage: z.number().optional(), // Frontend only: 1=SaleOnly, 2=MaintenanceOnly, 3=Both
  quantity: z.number().int().min(1, "الكمية يجب أن تكون أكبر من صفر"),
  unitCost: z.number().int().min(0, "تكلفة الوحدة يجب أن تكون 0 أو أكثر"),
  wholesalePrice: z.number().int().min(0, "سعر الجملة غير صالح"),
  retailPrice: z.number().int().min(0, "سعر التجزئة غير صالح"),
  maintenancePrice: z.number().int().min(0, "سعر الصيانة غير صالح").optional(),
});

export type CreatePurchaseInvoiceItemRequest = z.infer<typeof purchaseInvoiceItemSchema>;

export const createPurchaseInvoiceSchema = z.object({
  supplierId: z.string().min(1, "يجب اختيار مورد"),
  paidAmount: z.number().int().min(0, "المبلغ المدفوع غير صالح"),
  paymentSource: z.number().optional(),
  notes: z.string().optional(),
  items: z.array(purchaseInvoiceItemSchema).min(1, "يجب إضافة منتج واحد على الأقل"),
});

export type CreatePurchaseInvoiceRequest = z.infer<typeof createPurchaseInvoiceSchema>;

// Responses
export interface ProductSummary {
  productId: string;
  name?: string;
  barcode?: string;
  imageUrl?: string;
  retailPrice: number;
  wholesalePrice?: number;
  quantity: number;
}

export interface PurchaseInvoiceItemResponse {
  purchaseInvoiceItemId: string;
  product: ProductSummary;
  quantity: number;
  unitCost: number;
  lineTotal: number;
}

export interface PurchaseInvoiceResponse {
  purchaseInvoiceId: string;
  invoiceNumber: string;
  invoiceDate: string;
  supplier: {
    id: string;
    name: string;
    phone?: string;
  };
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  notes?: string;
  items: PurchaseInvoiceItemResponse[];
}

export interface PurchaseFilters extends BaseFilters {
  supplierId?: string;
  startDate?: string;
  endDate?: string;
}
