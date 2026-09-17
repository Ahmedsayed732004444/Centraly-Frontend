import { useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { getNotificationConnection, stopNotificationConnection } from "@/lib/signalr";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { notificationRepository } from "../api/NotificationApi";
import { NotificationFilters, NotificationResponse } from "../schemas/notificationSchemas";

export const NOTIFICATION_KEYS = {
  list: (filters: NotificationFilters) => ["notifications", "list", filters] as const,
  unreadCount: ["notifications", "unread-count"] as const,
};

export function useNotificationList(filters: NotificationFilters) {
  const { isAuthenticated } = useAuth();
  return useQuery({
    queryKey: NOTIFICATION_KEYS.list(filters),
    queryFn: () => notificationRepository.getAll(filters),
    enabled: isAuthenticated,
  });
}

export function useUnreadCount() {
  const { isAuthenticated } = useAuth();
  return useQuery({
    queryKey: NOTIFICATION_KEYS.unreadCount,
    queryFn: () => notificationRepository.getUnreadCount(),
    enabled: isAuthenticated,
    refetchInterval: 30_000,
  });
}

export function useMarkAsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => notificationRepository.markAsRead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
}

export function useMarkAllAsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => notificationRepository.markAllAsRead(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
}

const severityToastVariant: Record<string, "info" | "warning" | "error"> = {
  Info: "info",
  Warning: "warning",
  Critical: "error",
};

/**
 * Opens the shared SignalR connection while the user is authenticated, and tears it
 * down on logout/unmount. Mount this once near the app root (AppLayout) - every
 * component that needs live notification data reads it via React Query instead of
 * holding its own connection.
 */
export function useNotificationSocket() {
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isAuthenticated) {
      if (startedRef.current) {
        stopNotificationConnection();
        startedRef.current = false;
      }
      return;
    }

    const connection = getNotificationConnection();

    const handleNotification = (notification: NotificationResponse) => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });

      const variant = severityToastVariant[notification.severity] ?? "info";
      toast[variant](notification.titleAr, {
        description: notification.bodyAr,
        action: notification.link
          ? { label: "عرض", onClick: () => navigate(notification.link as string) }
          : undefined,
      });
    };

    const handleReconnect = () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    };

    connection.on("ReceiveNotification", handleNotification);
    connection.onreconnected(handleReconnect);

    if (connection.state === "Disconnected") {
      connection.start().catch((err) => console.error("SignalR connection failed", err));
    }
    startedRef.current = true;

    return () => {
      connection.off("ReceiveNotification", handleNotification);
    };
  }, [isAuthenticated, queryClient, navigate]);
}
