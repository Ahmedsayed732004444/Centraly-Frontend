import { z } from 'zod';

export enum MaintenanceStatus {
  Pending = 'Pending',
  Delivered = 'Delivered',
  Returned = 'Returned',
}

// Step 1: Quick create schema
export const createMaintenanceSchema = z.object({
  customerName: z.string().min(1, 'اسم العميل مطلوب'),
  customerPhone: z.string().optional(),
  customerId: z.string().optional(),
  deviceDescription: z.string().optional(),
  problem: z.string().optional(),
  paidAmount: z.coerce.number().int().min(0).default(0),
  deliveryDate: z.string().optional(),
});

// Step 2: Update (add products + service price)
export const maintenanceProductItemSchema = z.object({
  productId: z.string().min(1, 'اختر منتجاً'),
  quantity: z.coerce.number().int().min(1, 'الكمية 1 على الأقل'),
  maintenancePrice: z.coerce.number().int().min(0, 'السعر لا يكون سالباً'),
});

export const updateMaintenanceSchema = z.object({
  customerName: z.string().min(1, 'اسم العميل مطلوب'),
  customerPhone: z.string().optional(),
  customerId: z.string().optional(),
  deviceDescription: z.string().optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  servicePrice: z.coerce.number().int().min(0).default(0),
  paidAmount: z.coerce.number().int().min(0).default(0),
  deliveryDate: z.string().optional(),
  productsUsed: z.array(maintenanceProductItemSchema).default([]),
});

export type CreateMaintenanceRequest = z.infer<typeof createMaintenanceSchema>;
export type UpdateMaintenanceRequest = z.infer<typeof updateMaintenanceSchema>;
export type MaintenanceProductItemRequest = z.infer<typeof maintenanceProductItemSchema>;

export interface MaintenanceProductItemResponse {
  productId: string;
  productName: string;
  quantity: number;
  maintenancePrice: number;
  costPrice: number;
}

export interface MaintenanceResponse {
  id: string;
  customerName: string;
  customerPhone?: string;
  customerId?: string;
  deviceDescription?: string;
  problem?: string;
  solution?: string;
  servicePrice: number;
  totalPartsPrice: number;
  totalPrice: number;
  totalCost: number;
  paidAmount: number;
  remainingAmount: number;
  deliveryDate?: string;
  status: string;
  productsUsed: MaintenanceProductItemResponse[];
  createdAt: string;
}

export interface MaintenanceSummary {
  id: string;
  customerName: string;
  customerPhone?: string;
  deviceDescription?: string;
  problem?: string;
  totalPrice: number;
  paidAmount: number;
  remainingAmount: number;
  deliveryDate?: string;
  status: string;
  createdAt: string;
}
