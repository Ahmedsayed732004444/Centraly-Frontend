import { apiClient } from "@/lib/axios";
import { PaginatedList } from "@/shared/types/pagination";
import { NotificationFilters, NotificationResponse } from "../schemas/notificationSchemas";

export class NotificationRepository {
  async getAll(filters: NotificationFilters): Promise<PaginatedList<NotificationResponse>> {
    const { data } = await apiClient.get<PaginatedList<NotificationResponse>>("/notifications", { params: filters });
    return data;
  }

  async getUnreadCount(): Promise<number> {
    const { data } = await apiClient.get<{ count: number }>("/notifications/unread-count");
    return data.count;
  }

  async markAsRead(id: string): Promise<void> {
    await apiClient.post(`/notifications/${id}/read`);
  }

  async markAllAsRead(): Promise<void> {
    await apiClient.post("/notifications/read-all");
  }
}

export const notificationRepository = new NotificationRepository();
