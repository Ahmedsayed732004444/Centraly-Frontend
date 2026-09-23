import { useQuery } from "@tanstack/react-query";
import { walletApi } from "../api/WalletApi";
import { WalletOperationFilter } from "../schemas/walletSchemas";
import { useInfiniteResource } from "@/shared/hooks/useInfiniteResource";

export function useWalletDetails(walletId: string, filter: WalletOperationFilter) {
  const detailsQuery = useQuery({
    queryKey: ["wallet", walletId],
    queryFn: () => walletApi.getWalletById(walletId),
    enabled: !!walletId,
  });

  const operationsQuery = useInfiniteResource(
    ["wallet-operations", walletId],
    (f) => walletApi.getWalletOperations({ ...f, walletId }),
    filter,
    { enabled: !!walletId }
  );

  return {
    wallet: detailsQuery.data,
    isLoadingWallet: detailsQuery.isLoading,

    operations: operationsQuery.items,
    totalCount: operationsQuery.totalCount ?? 0,
    hasNextPage: operationsQuery.hasNextPage,
    isFetchingNextPage: operationsQuery.isFetchingNextPage,
    fetchNextPage: operationsQuery.fetchNextPage,
    isLoadingOperations: operationsQuery.isLoading,
  };
}
