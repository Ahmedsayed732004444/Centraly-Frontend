import { PaginatedList } from "@/shared/types/pagination";
import { 
  CreateCustomerRequest, 
  CustomerResponse, 
  CustomerStatementResponse, CustomerDebtHistoryResponse, 
  CreatePaymentRequest,
  ContactFilters
} from "@/features/contacts/schemas/contactSchemas";

export interface IContactsRepository {
  // Customers
  getCustomers(filters: ContactFilters): Promise<PaginatedList<CustomerResponse>>;
  getCustomer(id: string): Promise<CustomerResponse>;
  getCustomerDebtHistory(id: string): Promise<CustomerDebtHistoryResponse>;
  createCustomer(data: CreateCustomerRequest): Promise<string>;
  updateCustomer(id: string, data: CreateCustomerRequest): Promise<void>;
  deleteCustomer(id: string): Promise<void>;
  
  // Customer Transactions
  getCustomerStatement(customerId: string): Promise<CustomerStatementResponse[]>;
  addCustomerPayment(customerId: string, data: CreatePaymentRequest): Promise<string>;
}
