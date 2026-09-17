import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { contactsRepository } from "../api/ContactsApi";

import { 
  CreateCustomerRequest, CreatePaymentRequest,
  ContactFilters, StatementFilters 
} from "../schemas/contactSchemas";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/shared/utils/apiError";

export const CONTACT_KEYS = {
  customers: (filters: ContactFilters) => ["customers", filters] as const,
  customerDetails: (id: string) => ["customers", id] as const,
  customerStatement: (filters: StatementFilters) => ["customers", "statement", filters] as const,
};

// --- Customer Queries & Mutations ---

export function useCustomers(filters: ContactFilters) {
  return useQuery({
    queryKey: CONTACT_KEYS.customers(filters),
    queryFn: () => contactsRepository.getCustomers(filters),
  });
}

export function useCustomer(id: string) {
  return useQuery({
    queryKey: CONTACT_KEYS.customerDetails(id),
    queryFn: () => contactsRepository.getCustomer(id),
    enabled: !!id,
  });
}

export function useCustomerStatement(customerId: string) {
  return useQuery({
    queryKey: ['customers', 'statement', customerId],
    queryFn: () => contactsRepository.getCustomerStatement(customerId),
    enabled: !!customerId,
  });
}

export function useCreateCustomer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateCustomerRequest) => contactsRepository.createCustomer(data),
    onSuccess: () => {
      toast.success("تم إضافة العميل بنجاح");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء إضافة العميل")),
  });
}

export function useUpdateCustomer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreateCustomerRequest }) => 
      contactsRepository.updateCustomer(id, data),
    onSuccess: (_, { id }) => {
      toast.success("تم تحديث بيانات العميل بنجاح");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      queryClient.invalidateQueries({ queryKey: CONTACT_KEYS.customerDetails(id) });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تحديث العميل")),
  });
}

export function useDeleteCustomer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => contactsRepository.deleteCustomer(id),
    onSuccess: () => {
      toast.success("تم حذف العميل بنجاح");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء حذف العميل، قد يكون مرتبطاً بفواتير")),
  });
}

export function useAddCustomerPayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreatePaymentRequest }) => 
      contactsRepository.addCustomerPayment(id, data),
    onSuccess: (_, { id }) => {
      toast.success("تم تسجيل الدفعة بنجاح");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      queryClient.invalidateQueries({ queryKey: CONTACT_KEYS.customerDetails(id) });
    },
    onError: (error) => toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تسجيل الدفعة")),
  });
}
