import { Loader2 } from 'lucide-react';
import { Spinner } from './Spinner';

export function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[var(--color-page-bg)]">
      <div className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
        <Spinner size={32} />
        <span className="text-sm text-[var(--color-text-main)]">جاري التحميل...</span>
      </div>
    </div>
  );
}

/** Inline loader for tables and modal bodies. */
export function InlineLoader({ label = 'جاري تحميل البيانات...' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-10 text-sm text-[var(--color-text-muted)]">
      <Loader2 className="animate-spin text-[var(--color-primary)]" size={16} />
      {label}
    </div>
  );
}
