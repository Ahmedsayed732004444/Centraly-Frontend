import { apiClient } from '@/lib/axios';
import {
  CreateMaintenanceRequest,
  UpdateMaintenanceRequest,
  MaintenanceResponse,
  MaintenanceSummary,
} from '../schemas/maintenanceSchemas';
import { PaginatedList, BaseFilters } from '@/shared/types/pagination';

export interface MaintenanceFilters extends BaseFilters {
  status?: string;
}

export class MaintenanceRepository {
  async getAll(filters?: MaintenanceFilters): Promise<PaginatedList<MaintenanceSummary>> {
    const { data } = await apiClient.get<PaginatedList<MaintenanceSummary>>('/maintenance', { params: filters });
    return data;
  }

  async getById(id: string): Promise<MaintenanceResponse> {
    const { data } = await apiClient.get<MaintenanceResponse>('/maintenance/' + id);
    return data;
  }

  async create(req: CreateMaintenanceRequest): Promise<MaintenanceResponse> {
    const { data } = await apiClient.post<MaintenanceResponse>('/maintenance', req);
    return data;
  }

  async update(id: string, req: UpdateMaintenanceRequest): Promise<MaintenanceResponse> {
    const { data } = await apiClient.put<MaintenanceResponse>('/maintenance/' + id, req);
    return data;
  }

  async deliver(id: string): Promise<MaintenanceResponse> {
    const { data } = await apiClient.post<MaintenanceResponse>('/maintenance/' + id + '/deliver');
    return data;
  }

  async returnMaintenance(id: string): Promise<MaintenanceResponse> {
    const { data } = await apiClient.post<MaintenanceResponse>('/maintenance/' + id + '/return');
    return data;
  }
}

export const maintenanceApi = new MaintenanceRepository();