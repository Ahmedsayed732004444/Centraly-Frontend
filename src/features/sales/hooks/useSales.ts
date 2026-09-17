import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { salesRepository } from "../api/salesApi";
import { CreateSalesInvoiceRequest, CreateSalesReturnRequest, SalesInvoiceFilters } from "../schemas/salesSchemas";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/shared/utils/apiError";

export const SALES_KEYS = {
  invoices: (filters: SalesInvoiceFilters) => ["sales-invoices", filters] as const,
  invoiceDetails: (id: string) => ["sales-invoices", id] as const,
};

export function useCreateSalesInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSalesInvoiceRequest) => salesRepository.createInvoice(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ["sales-invoices"] });
      toast.success("تم إنشاء فاتورة المبيعات بنجاح");
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, "حدث خطأ أثناء إنشاء الفاتورة"));
    }
  });
}

export function useSalesInvoices(filters: SalesInvoiceFilters) {
  return useQuery({
    queryKey: SALES_KEYS.invoices(filters),
    queryFn: () => salesRepository.getInvoices(filters),
  });
}

export function useSalesInvoiceDetails(id: string) {
  return useQuery({
    queryKey: SALES_KEYS.invoiceDetails(id),
    queryFn: () => salesRepository.getInvoice(id),
    enabled: !!id,
  });
}

export function useCreateSalesReturn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSalesReturnRequest) => salesRepository.createReturn(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ["sales-returns"] });
      toast.success("تم حفظ المرتجع بنجاح");
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, "حدث خطأ أثناء حفظ المرتجع"));
    }
  });
}

export function useSalesReturns(filters: { pageNumber: number; pageSize: number; searchValue?: string; startDate?: string; endDate?: string }) {
  return useQuery({
    queryKey: ["sales-returns", filters],
    queryFn: () => salesRepository.getReturns(filters),
  });
}

export function useSalesReturnDetails(id: string) {
  return useQuery({
    queryKey: ["sales-returns", id],
    queryFn: () => salesRepository.getReturn(id),
    enabled: !!id,
  });
}

