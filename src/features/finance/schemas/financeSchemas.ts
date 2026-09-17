import { z } from "zod";
import { BaseFilters } from "@/shared/types/pagination";

export interface FinanceFilters extends BaseFilters {
  startDate?: string;
  endDate?: string;
  type?: number;
}

// --- Enums ---
export type DrawerTransactionType = 1 | 2; // Income = 1, Expense = 2
export type DrawerTransactionCategory = 1 | 2 | 3 | 4 | 5; 
export type PaymentSource = 1 | 2; // Drawer = 1, Safe = 2

export type GlobalTransactionCategory = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
export type PaymentSourcePolicy = 1 | 2 | 3; // DrawerOnly = 1, SafeOnly = 2, Either = 3

// --- Drawer ---

export const openSessionSchema = z.object({
  openingBalance: z.number().int().min(0),
  type: z.number().optional()
});
export type OpenSessionRequest = z.infer<typeof openSessionSchema>;

export const addManualTransactionSchema = z.object({
  type: z.number().int(),
  category: z.number().int(),
  amount: z.number().int().min(1, 'يجب إدخال مبلغ صحيح'),
  notes: z.string().min(3, 'البيان يجب أن يكون 3 أحرف على الأقل'),
  source: z.string().optional(),
  drawerType: z.number().int().optional(),
});
export type AddManualTransactionRequest = z.infer<typeof addManualTransactionSchema>;

export interface DrawerTransactionResponse {
  id: string;
  type: DrawerTransactionType;
  category: DrawerTransactionCategory;
  amount: number;
  balance: number;
  source?: string;
  notes?: string;
  createdAt: string;
  userId: string;
}

export interface DrawerSessionResponse {
  id: string;
  openingBalance: number;
  openedAt: string;
  openedByUserId: string;
  isClosed: boolean;
  type: number;
  closedAt?: string;
  totalIncome?: number;
  totalExpense?: number;
  closingBalance?: number;
  totalProfit?: number;
  depositedToSafeAt?: string;
  transactions: DrawerTransactionResponse[];
}

// --- Safe ---

export const createSafeSchema = z.object({
  name: z.string().min(1),
  isMain: z.boolean(),
  initialBalance: z.number().int().min(0),
});
export type CreateSafeRequest = z.infer<typeof createSafeSchema>;

export const receiveDrawerDepositSchema = z.object({
  drawerSessionId: z.string().min(1),
  amount: z.number().int().min(1),
  notes: z.string().optional(),
});
export type ReceiveDrawerDepositRequest = z.infer<typeof receiveDrawerDepositSchema>;

export const addManualSafeTransactionSchema = z.object({
  type: z.number(),
  category: z.number(),
  amount: z.number().int().min(1),
  notes: z.string().optional(),
});
export type AddManualSafeTransactionRequest = z.infer<typeof addManualSafeTransactionSchema>;

export interface SafeResponse {
  id: string;
  name: string;
  balance: number;
  isMain: boolean;
}

export interface SafeTransactionResponse {
  id: string;
  safeId: string;
  transactionType: string;
  category: string;
  amount: number;
  balanceAfter: number;
  createdAt: string;
  notes?: string;
}

// --- Expenses ---

export const createExpenseCategorySchema = z.object({
  name: z.string().min(1),
});
export type CreateExpenseCategoryRequest = z.infer<typeof createExpenseCategorySchema>;

export const createExpenseSchema = z.object({
  categoryId: z.string().min(1),
  amount: z.number().int().min(1),
  paymentSource: z.number().optional(),
  notes: z.string().optional(),
});
export type CreateExpenseRequest = z.infer<typeof createExpenseSchema>;

export interface ExpenseCategoryResponse {
  id: string;
  name: string;
}

export interface ExpenseResponse {
  id: string;
  categoryId: string;
  categoryName: string;
  amount: number;
  paymentSource: string;
  expenseDate: string;
  notes?: string;
}

// --- Owner Transactions ---

export const createOwnerTransactionSchema = z.object({
  category: z.number(),
  amount: z.number().int().min(1),
  paymentSource: z.number(),
  notes: z.string().optional(),
});
export type CreateOwnerTransactionRequest = z.infer<typeof createOwnerTransactionSchema>;

export interface OwnerTransactionResponse {
  id: string;
  category: number;
  amount: number;
  paymentSource: number;
  notes?: string;
  createdAt: string;
  createdByUserId?: string;
}
