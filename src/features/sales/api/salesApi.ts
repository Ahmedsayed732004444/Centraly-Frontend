import { apiClient } from "@/lib/axios";
import { CreateSalesInvoiceRequest, SalesInvoiceResponse, CreateSalesReturnRequest, SalesReturnResponse, SalesInvoiceFilters } from "../schemas/salesSchemas";
import { PaginatedList } from "@/shared/types/pagination";

export const salesRepository = {
  createInvoice: async (data: CreateSalesInvoiceRequest): Promise<SalesInvoiceResponse> => {
    const response = await apiClient.post<SalesInvoiceResponse>('/sales-invoices', data);
    return response.data;
  },

  getInvoice: async (id: string): Promise<SalesInvoiceResponse> => {
    const response = await apiClient.get<SalesInvoiceResponse>(`/sales-invoices/${id}`);
    return response.data;
  },

  getInvoices: async (filters: SalesInvoiceFilters): Promise<PaginatedList<SalesInvoiceResponse>> => {
    const response = await apiClient.get<PaginatedList<SalesInvoiceResponse>>('/sales-invoices', { params: filters });
    return response.data;
  },

  createReturn: async (data: CreateSalesReturnRequest): Promise<SalesReturnResponse> => {
    const response = await apiClient.post<SalesReturnResponse>('/sales-returns', data);
    return response.data;
  },

  getReturn: async (id: string): Promise<SalesReturnResponse> => {
    const response = await apiClient.get<SalesReturnResponse>(`/sales-returns/${id}`);
    return response.data;
  },

  getReturns: async (filters: { pageNumber?: number; pageSize?: number; searchValue?: string; startDate?: string; endDate?: string }): Promise<PaginatedList<SalesReturnResponse>> => {
    const response = await apiClient.get<PaginatedList<SalesReturnResponse>>('/sales-returns', { params: filters });
    return response.data;
  }
};
