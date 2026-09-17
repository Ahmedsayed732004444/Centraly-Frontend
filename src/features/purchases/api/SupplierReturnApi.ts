import { apiClient } from '@/lib/axios';
import { PaginatedList } from '@/shared/types/pagination';
import { SupplierReturnResponse, CreateSupplierReturnRequest, SupplierReturnFilters } from '../schemas/supplierReturnSchemas';

export const supplierReturnRepository = {
  getReturns: async (filters: SupplierReturnFilters): Promise<PaginatedList<SupplierReturnResponse>> => {
    const response = await apiClient.get<PaginatedList<SupplierReturnResponse>>('/supplier-transactions/returns', { params: filters });
    return response.data;
  },

  getReturn: async (id: string): Promise<SupplierReturnResponse> => {
    const response = await apiClient.get<SupplierReturnResponse>(`/supplier-transactions/returns/${id}`);
    return response.data;
  },

  createReturn: async (data: CreateSupplierReturnRequest): Promise<SupplierReturnResponse> => {
    const response = await apiClient.post<SupplierReturnResponse>('/supplier-transactions/returns', data);
    return response.data;
  },
};
