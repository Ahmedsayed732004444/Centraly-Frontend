import { useQuery } from "@tanstack/react-query";
import { walletApi } from "../api/WalletApi";
import { WalletOperationFilter } from "../schemas/walletSchemas";

export function useGlobalWalletOperations(filter: WalletOperationFilter) {
  const operationsQuery = useQuery({
    queryKey: ["global-wallet-operations", filter],
    queryFn: () => walletApi.getWalletOperations(filter),
  });

  const summaryQuery = useQuery({
    queryKey: ["global-wallet-operations-summary", filter],
    queryFn: () => walletApi.getWalletOperationsSummary(filter),
  });

  return {
    operations: operationsQuery.data?.items ?? [],
    totalPages: operationsQuery.data?.totalPages ?? 1,
    totalCount: operationsQuery.data?.totalCount ?? 0,
    isLoadingOperations: operationsQuery.isLoading,
    
    totalProfit: summaryQuery.data?.totalProfit ?? 0,
    isLoadingSummary: summaryQuery.isLoading,
  };
}
