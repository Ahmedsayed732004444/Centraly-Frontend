import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ownerTransactionApi } from "../api/OwnerTransactionApi";
import { CreateOwnerTransactionRequest } from "../schemas/financeSchemas";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/shared/utils/apiError";
import { FINANCE_KEYS } from "./useFinance"; // For cache invalidation of drawers/safes

export const OWNER_TRANSACTION_KEYS = {
  all: ["ownerTransactions"] as const,
};

export function useOwnerTransactions() {
  return useQuery({
    queryKey: OWNER_TRANSACTION_KEYS.all,
    queryFn: () => ownerTransactionApi.getOwnerTransactions(),
  });
}

export function useCreateOwnerTransaction() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateOwnerTransactionRequest) => ownerTransactionApi.createOwnerTransaction(data),
    onSuccess: () => {
      toast.success("تم التنفيذ بنجاح");
      queryClient.invalidateQueries({ queryKey: OWNER_TRANSACTION_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ["drawer", "active"] });
      queryClient.invalidateQueries({ queryKey: FINANCE_KEYS.safes });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تنفيذ العملية"));
    },
  });
}

