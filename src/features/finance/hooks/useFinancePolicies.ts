import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { financePolicyRepository, UpdateTransactionPolicyRequest } from "../api/FinancePolicyApi";
import { GlobalTransactionCategory } from "../schemas/financeSchemas";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/shared/utils/apiError";

export const FINANCE_POLICY_KEYS = {
  all: ["financePolicies"] as const,
};

export function useFinancePolicies() {
  return useQuery({
    queryKey: FINANCE_POLICY_KEYS.all,
    queryFn: () => financePolicyRepository.getPolicies(),
    // Cache this aggressively since policies rarely change and are needed everywhere
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useUpdateFinancePolicy() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ category, data }: { category: GlobalTransactionCategory, data: UpdateTransactionPolicyRequest }) => 
      financePolicyRepository.updatePolicy(category, data),
    onSuccess: () => {
      toast.success("تم تحديث سياسة المصدر المالي بنجاح");
      queryClient.invalidateQueries({ queryKey: FINANCE_POLICY_KEYS.all });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تحديث السياسة"));
    }
  });
}
