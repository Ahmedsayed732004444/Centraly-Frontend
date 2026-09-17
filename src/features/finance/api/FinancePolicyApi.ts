import { apiClient } from "@/lib/axios";
import { GlobalTransactionCategory, PaymentSourcePolicy } from "../schemas/financeSchemas";

export interface TransactionPolicyResponse {
  id: string;
  category: string;
  allowedSource: string;
}

export interface UpdateTransactionPolicyRequest {
  allowedSource: PaymentSourcePolicy;
}

export class FinancePolicyRepository {
  async getPolicies(): Promise<TransactionPolicyResponse[]> {
    const { data } = await apiClient.get<TransactionPolicyResponse[]>('/finance-policies');
    return data;
  }

  async updatePolicy(category: GlobalTransactionCategory, reqData: UpdateTransactionPolicyRequest): Promise<TransactionPolicyResponse> {
    const { data } = await apiClient.put<TransactionPolicyResponse>(`/finance-policies/${category}`, reqData);
    return data;
  }
}

export const financePolicyRepository = new FinancePolicyRepository();

