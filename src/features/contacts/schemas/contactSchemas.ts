import * as z from "zod";
import { BaseFilters } from "@/shared/types/pagination";

export interface ContactFilters extends BaseFilters {
  searchValue?: string;
}
export interface StatementFilters extends BaseFilters {
  startDate?: string;
  endDate?: string;
  customerId?: string;
}

// --- Customers ---

export const createCustomerSchema = z.object({
  name: z.string().min(1, "اسم العميل مطلوب"),
  phone: z.string().optional(),
});
export type CreateCustomerRequest = z.infer<typeof createCustomerSchema>;

export interface CustomerResponse {
  customerId: string;
  name: string;
  phone?: string;
  debtBalance: number;
  invoicesCount: number;
  createdAt: string;
}

export interface CustomerStatementResponse {
  date: string;
  transactionType: string;
  transactionId: string;
  debit: number;
  credit: number;
  balanceAfter: number;
  notes?: string;
}

// --- Payments ---

export const createPaymentSchema = z.object({
  amount: z.number().int().refine(val => val !== 0, "المبلغ يجب ألا يكون صفراً"),
  notes: z.string().optional(),
  paymentSource: z.number().optional(),
});
export type CreatePaymentRequest = z.infer<typeof createPaymentSchema>;

// --- Customer Debt History ---
export interface CustomerInvoiceSummary {
  id: string;
  invoiceNumber: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  createdAt: string;
}
export interface CustomerDebtPaymentResponse {
  id: string;
  amount: number;
  createdAt: string;
  notes?: string;
}
export interface CustomerDebtHistoryResponse {
  customer: CustomerResponse;
  deferredInvoices: CustomerInvoiceSummary[];
  payments: CustomerDebtPaymentResponse[];
}
