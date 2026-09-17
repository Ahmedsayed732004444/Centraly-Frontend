import { apiClient } from '@/lib/axios';
import { CreateUserRequest, UpdateUserRequest, UserResponse } from '../schemas/userSchemas';

export const usersApi = {
  getUsers: async (): Promise<UserResponse[]> => {
    const { data } = await apiClient.get<UserResponse[]>('/users');
    return data;
  },

  getUser: async (id: string): Promise<UserResponse> => {
    const { data } = await apiClient.get<UserResponse>(`/users/${id}`);
    return data;
  },

  createUser: async (request: CreateUserRequest): Promise<UserResponse> => {
    const { data } = await apiClient.post<UserResponse>('/users', request);
    return data;
  },

  updateUser: async ({ id, request }: { id: string; request: UpdateUserRequest }): Promise<void> => {
    await apiClient.put(`/users/${id}`, request);
  },
};
