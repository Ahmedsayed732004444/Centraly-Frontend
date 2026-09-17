import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { maintenanceApi, MaintenanceFilters } from './MaintenanceApi';
import { CreateMaintenanceRequest, UpdateMaintenanceRequest } from '../schemas/maintenanceSchemas';
import { toast } from 'sonner';
import { getApiErrorMessage } from '@/shared/utils/apiError';

export const maintenanceKeys = {
  all: ['maintenance'] as const,
  lists: () => [...maintenanceKeys.all, 'list'] as const,
  list: (filters?: MaintenanceFilters) => [...maintenanceKeys.lists(), filters] as const,
  details: () => [...maintenanceKeys.all, 'detail'] as const,
  detail: (id: string) => [...maintenanceKeys.details(), id] as const,
};

export function useMaintenanceList(filters?: MaintenanceFilters) {
  return useQuery({
    queryKey: maintenanceKeys.list(filters),
    queryFn: () => maintenanceApi.getAll(filters),
  });
}

export function useMaintenanceDetail(id: string | null) {
  return useQuery({
    queryKey: maintenanceKeys.detail(id ?? ''),
    queryFn: () => maintenanceApi.getById(id!),
    enabled: !!id,
  });
}

export function useCreateMaintenance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateMaintenanceRequest) => maintenanceApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.lists() });
      toast.success('تم فتح تذكرة الصيانة بنجاح');
    },
    onError: (error) => toast.error(getApiErrorMessage(error, 'حدث خطأ أثناء الإنشاء')),
  });
}

export function useUpdateMaintenance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateMaintenanceRequest }) =>
      maintenanceApi.update(id, data),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.lists() });
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.detail(variables.id) });
      toast.success('تم حفظ التعديلات بنجاح');
    },
    onError: (error) => toast.error(getApiErrorMessage(error, 'حدث خطأ أثناء التعديل')),
  });
}

export function useDeliverMaintenance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => maintenanceApi.deliver(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.lists() });
      toast.success('تم تسليم الجهاز بنجاح ✅');
    },
    onError: (error) => toast.error(getApiErrorMessage(error, 'حدث خطأ أثناء التسليم')),
  });
}

export function useReturnMaintenance() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => maintenanceApi.returnMaintenance(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: maintenanceKeys.lists() });
      toast.success('تم إرجاع الجهاز بدون إصلاح');
    },
    onError: (error) => toast.error(getApiErrorMessage(error, 'حدث خطأ أثناء إرجاع الجهاز')),
  });
}

