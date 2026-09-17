import { LucideIcon } from 'lucide-react';
import { Button } from './Button';

export interface RowAction {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  tone?: 'default' | 'danger';
  hidden?: boolean;
}

const toneClasses: Record<NonNullable<RowAction['tone']>, string> = {
  default: 'bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600',
  danger: 'bg-white border border-slate-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600',
};

/**
 * One actions-column cell for every table row - icon buttons only, same size/spacing
 * everywhere. Each button stops propagation itself (rather than a wrapper div) so the
 * cell stays a plain, non-interactive container.
 * Replaces 6 divergent per-page implementations (icon-only, text+icon, or an action
 * button smuggled into a data cell like the suppliers "تسديد" button used to be).
 */
export function RowActions({ actions, className = '' }: { actions: RowAction[]; className?: string }) {
  const visible = actions.filter((a) => !a.hidden);
  if (visible.length === 0) return null;

  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`}>
      {visible.map(({ icon: Icon, label, onClick, tone = 'default' }) => (
        <Button
          key={label}
          type="button"
          variant="ghost"
          size="icon"
          aria-label={label}
          title={label}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className={`transition-colors ${toneClasses[tone]}`}
        >
          <Icon size={18} />
        </Button>
      ))}
    </div>
  );
}
