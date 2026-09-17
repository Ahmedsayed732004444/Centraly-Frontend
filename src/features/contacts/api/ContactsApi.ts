import { apiClient } from "@/lib/axios";
import { IContactsRepository } from "@/core/repositories/IContactsRepository";
import { PaginatedList } from "@/shared/types/pagination";
import { 
  CreateCustomerRequest, CustomerResponse, CustomerStatementResponse, 
  CreatePaymentRequest,
  ContactFilters
} from "../schemas/contactSchemas";

import { CustomerDebtHistoryResponse } from '../schemas/contactSchemas';

export class ContactsRepository implements IContactsRepository {
  // --- Customers ---
  async getCustomers(filters: ContactFilters): Promise<PaginatedList<CustomerResponse>> {
    const { data } = await apiClient.get<PaginatedList<CustomerResponse>>('/customers', { params: filters });
    return data;
  }

  async getCustomer(id: string): Promise<CustomerResponse> {
    const { data } = await apiClient.get<CustomerResponse>(`/customers/${id}`);
    return data;
  }

  async getCustomerDebtHistory(id: string): Promise<CustomerDebtHistoryResponse> {
    const { data } = await apiClient.get<CustomerDebtHistoryResponse>(`/customers/${id}/debt-history`);
    return data;
  }

  async createCustomer(reqData: CreateCustomerRequest): Promise<string> {
    const { data } = await apiClient.post<string>('/customers', reqData);
    return data;
  }

  async updateCustomer(id: string, reqData: CreateCustomerRequest): Promise<void> {
    await apiClient.put(`/customers/${id}`, reqData);
  }

  async deleteCustomer(id: string): Promise<void> {
    await apiClient.delete(`/customers/${id}`);
  }

  async getCustomerStatement(customerId: string): Promise<CustomerStatementResponse[]> {
    if (!customerId) throw new Error("customerId is required for statement");
    const { data } = await apiClient.get<CustomerStatementResponse[]>(`/customers/${customerId}/transactions/statement`);
    return data;
  }

  async addCustomerPayment(customerId: string, reqData: CreatePaymentRequest): Promise<string> {
    const { data } = await apiClient.post<string>(`/customers/${customerId}/transactions/payments`, reqData);
    return data;
  }
}

export const contactsRepository = new ContactsRepository();
