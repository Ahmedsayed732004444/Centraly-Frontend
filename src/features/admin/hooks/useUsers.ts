import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usersApi } from '../api/UsersApi';
import { CreateUserRequest, UpdateUserRequest } from '../schemas/userSchemas';
import { toast } from 'sonner';
import { getApiErrorMessage } from '@/shared/utils/apiError';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => usersApi.getUsers(),
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => usersApi.getUser(id),
    enabled: !!id,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateUserRequest) => usersApi.createUser(data),
    onSuccess: () => {
      toast.success('تم إنشاء المستخدم بنجاح');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, 'حدث خطأ أثناء إنشاء المستخدم'));
    }
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (params: { id: string; request: UpdateUserRequest }) => usersApi.updateUser(params),
    onSuccess: (_, variables) => {
      toast.success('تم تحديث المستخدم بنجاح');
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['users', variables.id] });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, 'حدث خطأ أثناء تحديث المستخدم'));
    }
  });
};
