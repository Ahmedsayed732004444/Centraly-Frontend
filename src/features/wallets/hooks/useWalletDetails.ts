import { useQuery } from "@tanstack/react-query";
import { walletApi } from "../api/WalletApi";
import { WalletOperationFilter } from "../schemas/walletSchemas";

export function useWalletDetails(walletId: string, filter: WalletOperationFilter) {
  const detailsQuery = useQuery({
    queryKey: ["wallet", walletId],
    queryFn: () => walletApi.getWalletById(walletId),
    enabled: !!walletId,
  });

  const operationsQuery = useQuery({
    queryKey: ["wallet-operations", walletId, filter],
    queryFn: () => walletApi.getWalletOperations({ ...filter, walletId }),
    enabled: !!walletId,
  });

  return {
    wallet: detailsQuery.data,
    isLoadingWallet: detailsQuery.isLoading,
    
    operations: operationsQuery.data?.items ?? [],
    totalPages: operationsQuery.data?.totalPages ?? 1,
    totalCount: operationsQuery.data?.totalCount ?? 0,
    isLoadingOperations: operationsQuery.isLoading,
  };
}
