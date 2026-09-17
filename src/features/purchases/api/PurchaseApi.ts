import { apiClient } from "@/lib/axios";
import { PaginatedList } from "@/shared/types/pagination";
import { 
  PurchaseInvoiceResponse, 
  CreatePurchaseInvoiceRequest, 
  PurchaseFilters 
} from "../schemas/purchaseSchemas";

export const purchaseRepository = {
  getPurchases: async (filters: PurchaseFilters): Promise<PaginatedList<PurchaseInvoiceResponse>> => {
    const response = await apiClient.get<PaginatedList<PurchaseInvoiceResponse>>('/purchase-invoices', { params: filters });
    return response.data;
  },
  
  getPurchaseInvoice: async (id: string): Promise<PurchaseInvoiceResponse> => {
    const response = await apiClient.get<PurchaseInvoiceResponse>(`/purchase-invoices/${id}`);
    return response.data;
  },
  
  createPurchaseInvoice: async (data: CreatePurchaseInvoiceRequest): Promise<PurchaseInvoiceResponse> => {
    const response = await apiClient.post<PurchaseInvoiceResponse>('/purchase-invoices', data);
    return response.data;
  },
};
