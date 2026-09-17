import { BaseFilters } from "@/shared/types/pagination";

export type NotificationType =
  | "MaintenanceDueSoon"
  | "MaintenanceOverdue"
  | "ProductOutOfStock"
  | "ProductLowStock"
  | "OwnerWithdrawal"
  | "DrawerLeftOpenOvernight";

export type NotificationSeverity = "Info" | "Warning" | "Critical";

export interface NotificationResponse {
  id: string;
  type: NotificationType;
  severity: NotificationSeverity;
  titleAr: string;
  bodyAr: string;
  entityType: string | null;
  entityId: string | null;
  link: string | null;
  isRead: boolean;
  readAt: string | null;
  createdAt: string;
}

export interface NotificationFilters extends BaseFilters {
  unreadOnly?: boolean;
}
