import { useQuery } from "@tanstack/react-query";
import { walletApi } from "../api/WalletApi";
import { WalletOperationFilter } from "../schemas/walletSchemas";
import { useInfiniteResource } from "@/shared/hooks/useInfiniteResource";

export function useGlobalWalletOperations(filter: WalletOperationFilter) {
  const operationsQuery = useInfiniteResource(
    ["global-wallet-operations"],
    (f) => walletApi.getWalletOperations(f),
    filter
  );

  const summaryQuery = useQuery({
    queryKey: ["global-wallet-operations-summary", filter],
    queryFn: () => walletApi.getWalletOperationsSummary(filter),
  });

  return {
    operations: operationsQuery.items,
    totalCount: operationsQuery.totalCount ?? 0,
    hasNextPage: operationsQuery.hasNextPage,
    isFetchingNextPage: operationsQuery.isFetchingNextPage,
    fetchNextPage: operationsQuery.fetchNextPage,
    isLoadingOperations: operationsQuery.isLoading,

    totalProfit: summaryQuery.data?.totalProfit ?? 0,
    isLoadingSummary: summaryQuery.isLoading,
  };
}
