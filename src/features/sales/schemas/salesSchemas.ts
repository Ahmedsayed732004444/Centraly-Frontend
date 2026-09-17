import { BaseFilters } from '@/shared/types/pagination';

export enum SaleType {
  Wholesale = 1,
  Retail = 2,
}

export enum PaymentMethod {
  Cash = 1,
  Deferred = 2, // Credit/آجل
}

export interface SalesInvoiceFilters extends BaseFilters {
  startDate?: string;
  endDate?: string;
  saleType?: SaleType;
  paymentMethod?: PaymentMethod;
}

export interface CreateSalesInvoiceItemRequest {
  productId: string;
  batchId: string;
  quantity: number;
  sellingPrice: number;
}

export interface CreateSalesInvoiceRequest {
  customerId?: string;
  customerName?: string;
  customerPhone?: string;
  saleType: SaleType;
  paymentMethod: PaymentMethod;
  paidAmount: number;
  paymentSource?: number;
  notes?: string;
  items: CreateSalesInvoiceItemRequest[];
}

export interface SalesInvoiceItemResponse {
  id: string;
  productId: string;
  productName: string;
  batchId: string;
  quantity: number;
  returnedQuantity: number;
  unitPrice: number;
  unitCost: number;
  lineTotal: number;
}

export interface SalesInvoiceResponse {
  id: string;
  invoiceNumber: string;
  customer?: {
    id: string;
    name: string;
    phone: string;
  };
  saleType: SaleType;
  paymentMethod: PaymentMethod;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  notes?: string;
  createdAt: string;
  hasReturns: boolean;
  items: SalesInvoiceItemResponse[];
}

export enum ReturnReason {
  Defect = 1,
  ChangedMind = 2,
  Other = 3
}

export interface ReturnItemRequest {
  productId: string;
  batchId: string;
  quantity: number;
  unitPrice: number;
}

export interface CreateSalesReturnRequest {
  invoiceId: string;
  reason: ReturnReason;
  notes?: string;
  isCashRefund: boolean;
  paymentSource?: number;
  items: ReturnItemRequest[];
}

export interface ReturnItemResponse {
  id: string;
  productId: string;
  batchId: string;
  quantity: number;
  unitPrice: number;
}

export interface SalesReturnResponse {
  id: string;
  invoiceId: string;
  invoiceNumber: string;
  isFullInvoiceReturn: boolean;
  reason: ReturnReason;
  notes?: string;
  isCashRefund: boolean;
  totalReturnedAmount: number;
  returnDate: string;
  items: ReturnItemResponse[];
}

