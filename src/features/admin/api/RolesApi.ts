import { apiClient } from '@/lib/axios';
import { RoleDetailResponse, RoleRequest, RoleResponse } from '../schemas/roleSchemas';

export const rolesApi = {
  getRoles: async (includeDisabled = false): Promise<RoleResponse[]> => {
    const { data } = await apiClient.get<RoleResponse[]>(`/roles?includeDisabled=${includeDisabled}`);
    return data;
  },

  getRole: async (id: string): Promise<RoleDetailResponse> => {
    const { data } = await apiClient.get<RoleDetailResponse>(`/roles/${id}`);
    return data;
  },

  getPermissions: async (): Promise<string[]> => {
    const { data } = await apiClient.get<string[]>('/roles/permissions');
    return data;
  },

  createRole: async (request: RoleRequest): Promise<RoleResponse> => {
    const { data } = await apiClient.post<RoleResponse>('/roles', request);
    return data;
  },

  updateRole: async ({ id, request }: { id: string; request: RoleRequest }): Promise<void> => {
    await apiClient.put(`/roles/${id}`, request);
  },

  toggleRoleStatus: async (id: string): Promise<void> => {
    await apiClient.patch(`/roles/${id}/toggle-status`);
  },
};
