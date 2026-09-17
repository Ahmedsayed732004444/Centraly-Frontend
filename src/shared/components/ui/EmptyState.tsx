import { Inbox, LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  /** Arabic noun phrase for what's missing, e.g. "مصروفات", "مرتجعات مبيعات". Renders as "لا توجد {entity} مسجلة حتى الآن." */
  entity: string;
  /** Full override when the entity-based template doesn't fit (e.g. a search-result empty state). */
  message?: string;
  icon?: LucideIcon;
  className?: string;
}

// Was 11 independently-worded empty states across the app before this existed -
// one wording, so every list reads the same when there's nothing in it.
export function EmptyState({ entity, message, icon: Icon = Inbox, className = '' }: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 py-12 px-4 text-center ${className}`}>
      <Icon className="text-gray-300" size={32} />
      <p className="text-gray-500 text-sm">{message ?? `لا توجد ${entity} مسجلة حتى الآن.`}</p>
    </div>
  );
}
