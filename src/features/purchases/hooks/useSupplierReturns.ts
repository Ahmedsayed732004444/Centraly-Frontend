import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supplierReturnRepository } from '../api/SupplierReturnApi';
import { SupplierReturnFilters, CreateSupplierReturnRequest } from '../schemas/supplierReturnSchemas';
import { useInfiniteResource } from '@/shared/hooks/useInfiniteResource';

export function useSupplierReturns(filters: SupplierReturnFilters) {
  return useInfiniteResource(['supplier-returns'], (f) => supplierReturnRepository.getReturns(f), filters);
}

export function useSupplierReturn(id: string) {
  return useQuery({
    queryKey: ['supplier-returns', id],
    queryFn: () => supplierReturnRepository.getReturn(id),
    enabled: !!id,
  });
}

export function useCreateSupplierReturn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateSupplierReturnRequest) => supplierReturnRepository.createReturn(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["supplier-returns"] });
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
