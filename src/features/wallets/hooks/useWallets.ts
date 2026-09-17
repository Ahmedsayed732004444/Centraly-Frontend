import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { walletApi } from "../api/WalletApi";
import { CreateWalletRequest, ProcessOperationRequest } from "../schemas/walletSchemas";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/shared/utils/apiError";

export function useWallets() {
  const queryClient = useQueryClient();

  const walletsQuery = useQuery({
    queryKey: ["wallets"],
    queryFn: () => walletApi.getWallets(),
  });

  const createWalletMutation = useMutation({
    mutationFn: (data: CreateWalletRequest) => walletApi.createWallet(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wallets"] });
      toast.success("تم إضافة المحفظة بنجاح");
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, "حدث خطأ أثناء إضافة المحفظة"));
    }
  });

  const processOperationMutation = useMutation({
    mutationFn: (data: ProcessOperationRequest) => walletApi.processOperation(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wallets"] });
      toast.success("تم تنفيذ العملية بنجاح");
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تنفيذ العملية"));
    }
  });

  const updateWalletMutation = useMutation({
    mutationFn: ({ walletId, data }: { walletId: string, data: any }) => walletApi.updateWallet(walletId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wallets"] });
      toast.success("تم تعديل المحفظة بنجاح");
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, "حدث خطأ أثناء تعديل المحفظة"));
    }
  });

  return {
    wallets: walletsQuery.data ?? [],
    isLoading: walletsQuery.isLoading,
    createWallet: createWalletMutation.mutate,
    isCreating: createWalletMutation.isPending,
    updateWallet: updateWalletMutation.mutate,
    isUpdating: updateWalletMutation.isPending,
    processOperation: processOperationMutation.mutate,
    isProcessing: processOperationMutation.isPending,
  };
}
