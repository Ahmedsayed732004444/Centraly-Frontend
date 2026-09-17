import { PaginatedList } from "@/shared/types/pagination";
import { 
  OpenSessionRequest, DrawerSessionResponse, AddManualTransactionRequest,
  CreateSafeRequest, SafeResponse, SafeTransactionResponse, ReceiveDrawerDepositRequest, AddManualSafeTransactionRequest,
  CreateExpenseCategoryRequest, ExpenseCategoryResponse,
  CreateExpenseRequest, ExpenseResponse,
  FinanceFilters
} from "@/features/finance/schemas/financeSchemas";

export interface IFinanceRepository {
  // Drawer
  getCurrentDrawerSession(type?: number): Promise<DrawerSessionResponse>;
  openDrawerSession(data: OpenSessionRequest): Promise<string>;
  closeDrawerSession(type?: number): Promise<void>;
  addDrawerTransaction(data: AddManualTransactionRequest): Promise<string>;
  getDrawerHistory(filters: FinanceFilters): Promise<PaginatedList<DrawerSessionResponse>>;
  getDrawerSessionById(id: string): Promise<DrawerSessionResponse>;

  // Safe
  getSafes(): Promise<SafeResponse[]>;
  createSafe(data: CreateSafeRequest): Promise<string>;
  getSafeTransactions(safeId: string, filters: FinanceFilters): Promise<SafeTransactionResponse[]>;
  depositFromDrawer(safeId: string, request: ReceiveDrawerDepositRequest): Promise<SafeTransactionResponse>;
  addManualSafeTransaction(safeId: string, request: AddManualSafeTransactionRequest): Promise<SafeTransactionResponse>;

  // Expenses
  getExpenseCategories(): Promise<ExpenseCategoryResponse[]>;
  createExpenseCategory(request: CreateExpenseCategoryRequest): Promise<ExpenseCategoryResponse>;
  getExpenses(filters: FinanceFilters): Promise<ExpenseResponse[]>;
  recordExpense(request: CreateExpenseRequest): Promise<ExpenseResponse>;
}

