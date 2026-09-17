import { useNavigate } from "react-router-dom";
import { Bell, CheckCheck } from "lucide-react";
import { RightDrawer } from "@/shared/components/ui/RightDrawer";
import { InlineLoader } from "@/shared/components/ui/PageLoader";
import { useMarkAllAsRead, useMarkAsRead, useNotificationList } from "../hooks/useNotifications";
import { NotificationResponse, NotificationSeverity } from "../schemas/notificationSchemas";

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const severityDot: Record<NotificationSeverity, string> = {
  Info: "bg-blue-500",
  Warning: "bg-amber-500",
  Critical: "bg-red-500",
};

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return "الآن";
  if (minutes < 60) return `منذ ${minutes} د`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `منذ ${hours} س`;
  const days = Math.floor(hours / 24);
  return `منذ ${days} ي`;
}

function NotificationRow({ notification, onOpen }: { notification: NotificationResponse; onOpen: (n: NotificationResponse) => void }) {
  return (
    <button
      onClick={() => onOpen(notification)}
      className={`w-full text-right p-3 rounded-lg border transition-colors flex gap-3 items-start ${
        notification.isRead
          ? "border-[var(--color-border)] bg-[var(--color-surface)]"
          : "border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5"
      }`}
    >
      <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${severityDot[notification.severity]}`} />
      <span className="flex-1 min-w-0">
        <span className="block text-sm font-semibold text-[var(--color-text-main)]">{notification.titleAr}</span>
        <span className="block text-xs text-[var(--color-text-muted)] mt-0.5">{notification.bodyAr}</span>
        <span className="block text-[11px] text-[var(--color-text-muted)] mt-1">{timeAgo(notification.createdAt)}</span>
      </span>
    </button>
  );
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useNotificationList({ pageNumber: 1, pageSize: 30 });
  const markAsRead = useMarkAsRead();
  const markAllAsRead = useMarkAllAsRead();

  const notifications = data?.items ?? [];

  const handleOpen = (notification: NotificationResponse) => {
    if (!notification.isRead) markAsRead.mutate(notification.id);
    onClose();
    if (notification.link) navigate(notification.link);
  };

  return (
    <RightDrawer
      isOpen={isOpen}
      onClose={onClose}
      title="الإشعارات"
      width="w-full sm:w-[400px]"
      footer={
        notifications.length > 0 ? (
          <button
            onClick={() => markAllAsRead.mutate()}
            disabled={markAllAsRead.isPending}
            className="flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline disabled:opacity-50"
          >
            <CheckCheck size={16} />
            تحديد الكل كمقروء
          </button>
        ) : undefined
      }
    >
      {isLoading ? (
        <InlineLoader label="جاري تحميل الإشعارات..." />
      ) : isError ? (
        <p className="text-sm text-[var(--color-text-muted)] text-center py-10">تعذر تحميل الإشعارات</p>
      ) : notifications.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-14 text-[var(--color-text-muted)]">
          <Bell size={28} className="opacity-40" />
          <p className="text-sm">لا توجد إشعارات حالياً</p>
        </div>
      ) : (
        <div className="space-y-2">
          {notifications.map((n) => (
            <NotificationRow key={n.id} notification={n} onOpen={handleOpen} />
          ))}
        </div>
      )}
    </RightDrawer>
  );
}
