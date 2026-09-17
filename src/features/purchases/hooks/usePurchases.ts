import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { purchaseRepository } from "../api/PurchaseApi";
import { CreatePurchaseInvoiceRequest, PurchaseFilters } from "../schemas/purchaseSchemas";

export const PURCHASE_KEYS = {
  purchases: (filters: PurchaseFilters) => ["purchases", filters] as const,
  purchaseDetails: (id: string) => ["purchases", id] as const,
};

export function usePurchases(filters: PurchaseFilters) {
  return useQuery({
    queryKey: PURCHASE_KEYS.purchases(filters),
    queryFn: () => purchaseRepository.getPurchases(filters),
  });
}

export function usePurchaseInvoice(id: string) {
  return useQuery({
    queryKey: PURCHASE_KEYS.purchaseDetails(id),
    queryFn: () => purchaseRepository.getPurchaseInvoice(id),
    enabled: !!id,
  });
}

export function useCreatePurchaseInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreatePurchaseInvoiceRequest) => purchaseRepository.createPurchaseInvoice(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      // Invalidate purchases history and supplier details so balances/statements update
      queryClient.invalidateQueries({ queryKey: ["purchases"] });
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: ["products"] }); // Refresh inventory quantities
    },
  });
}
