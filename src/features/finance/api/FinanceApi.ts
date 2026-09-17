import { apiClient } from "@/lib/axios";
import { IFinanceRepository } from "@/core/repositories/IFinanceRepository";
import { PaginatedList } from "@/shared/types/pagination";
import { 
  OpenSessionRequest, DrawerSessionResponse, AddManualTransactionRequest,
  CreateSafeRequest, SafeResponse, SafeTransactionResponse, ReceiveDrawerDepositRequest, AddManualSafeTransactionRequest,
  CreateExpenseCategoryRequest, ExpenseCategoryResponse,
  CreateExpenseRequest, ExpenseResponse,
  FinanceFilters
} from "../schemas/financeSchemas";

export class FinanceRepository implements IFinanceRepository {
  // --- Drawer ---
  async getCurrentDrawerSession(type: number = 1): Promise<DrawerSessionResponse> {
    const { data } = await apiClient.get<DrawerSessionResponse>('/drawers/active', { params: { type } });
    return data;
  }

  async openDrawerSession(reqData: OpenSessionRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/drawers/open', reqData);
    return data;
  }

  async closeDrawerSession(type: number = 1): Promise<void> {
    await apiClient.post('/drawers/close', null, { params: { type } });
  }

  async addDrawerTransaction(reqData: AddManualTransactionRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/drawers/transactions/manual', reqData);
    return data;
  }

  async getDrawerHistory(filters: FinanceFilters): Promise<PaginatedList<DrawerSessionResponse>> {
    const { data } = await apiClient.get<PaginatedList<DrawerSessionResponse>>('/drawers/history', { params: filters });
    return data;
  }

  async getDrawerSessionById(id: string): Promise<DrawerSessionResponse> {
    const { data } = await apiClient.get<DrawerSessionResponse>(`/drawers/history/${id}`);
    return data;
  }

  // --- Safe ---
  async getSafes(): Promise<SafeResponse[]> {
    const { data } = await apiClient.get<SafeResponse[]>('/Safe'); // Route is 'Safe' uppercase in backend controller
    return data;
  }

  async createSafe(reqData: CreateSafeRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/Safe', reqData);
    return data;
  }

  async depositFromDrawer(safeId: string, reqData: ReceiveDrawerDepositRequest): Promise<SafeTransactionResponse> {
    const { data } = await apiClient.post<SafeTransactionResponse>(`/Safe/${safeId}/deposit`, reqData);
    return data;
  }

  async addManualSafeTransaction(safeId: string, reqData: AddManualSafeTransactionRequest): Promise<SafeTransactionResponse> {
    const { data } = await apiClient.post<SafeTransactionResponse>(`/Safe/${safeId}/manual-transaction`, reqData);
    return data;
  }

  async getSafeTransactions(safeId: string, filters?: FinanceFilters): Promise<SafeTransactionResponse[]> {
    const { data } = await apiClient.get<SafeTransactionResponse[]>(`/Safe/${safeId}/transactions`, { params: filters });
    return data;
  }

  // --- Expenses ---
  async getExpenseCategories(): Promise<ExpenseCategoryResponse[]> {
    const { data } = await apiClient.get<ExpenseCategoryResponse[]>('/expenses/categories');
    return data;
  }

  async createExpenseCategory(reqData: CreateExpenseCategoryRequest): Promise<ExpenseCategoryResponse> {
    const { data } = await apiClient.post<ExpenseCategoryResponse>('/expenses/categories', reqData);
    return data;
  }

  async getExpenses(filters?: FinanceFilters): Promise<ExpenseResponse[]> {
    const { data } = await apiClient.get<ExpenseResponse[]>('/expenses', { params: filters });
    return data;
  }

  async recordExpense(reqData: CreateExpenseRequest): Promise<ExpenseResponse> {
    const { data } = await apiClient.post<ExpenseResponse>('/expenses', reqData);
    return data;
  }
}

export const financeRepository = new FinanceRepository();
