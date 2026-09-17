import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { rolesApi } from '../api/RolesApi';
import { RoleRequest } from '../schemas/roleSchemas';
import { toast } from 'sonner';
import { getApiErrorMessage } from '@/shared/utils/apiError';

export const useRoles = (includeDisabled = false) => {
  return useQuery({
    queryKey: ['roles', includeDisabled],
    queryFn: () => rolesApi.getRoles(includeDisabled),
  });
};

export const useRole = (id: string) => {
  return useQuery({
    queryKey: ['roles', id],
    queryFn: () => rolesApi.getRole(id),
    enabled: !!id,
  });
};

export const usePermissions = () => {
  return useQuery({
    queryKey: ['permissions'],
    queryFn: () => rolesApi.getPermissions(),
  });
};

export const useCreateRole = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: RoleRequest) => rolesApi.createRole(data),
    onSuccess: () => {
      toast.success('تم إنشاء الدور بنجاح');
      queryClient.invalidateQueries({ queryKey: ['roles'] });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, 'حدث خطأ أثناء إنشاء الدور'));
    }
  });
};

export const useUpdateRole = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (params: { id: string; request: RoleRequest }) => rolesApi.updateRole(params),
    onSuccess: (_, variables) => {
      toast.success('تم تحديث الدور بنجاح');
      queryClient.invalidateQueries({ queryKey: ['roles'] });
      queryClient.invalidateQueries({ queryKey: ['roles', variables.id] });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, 'حدث خطأ أثناء تحديث الدور'));
    }
  });
};

export const useToggleRoleStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => rolesApi.toggleRoleStatus(id),
    onSuccess: () => {
      toast.success('تم تغيير حالة الدور بنجاح');
      queryClient.invalidateQueries({ queryKey: ['roles'] });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, 'حدث خطأ أثناء تغيير حالة الدور'));
    }
  });
};
