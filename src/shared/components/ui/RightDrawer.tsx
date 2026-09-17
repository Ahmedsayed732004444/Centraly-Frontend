import React, { useRef } from 'react';
import { X } from 'lucide-react';
import { useModalBehavior } from '@/shared/hooks/useModalBehavior';
import { cn } from '@/lib/utils';

interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
}

export function RightDrawer({ isOpen, onClose, title, children, footer, width = 'w-[450px]' }: RightDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useModalBehavior(isOpen, onClose, drawerRef);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" dir="rtl" role="presentation">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        className={cn("relative bg-[var(--color-surface)] h-full shadow-2xl flex flex-col max-w-[100vw]", width)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        tabIndex={-1}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-[var(--color-border)] bg-[var(--color-page-bg)] flex-shrink-0">
          <h2 id="drawer-title" className="text-lg font-bold text-[var(--color-text-main)]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:bg-gray-200 p-1.5 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">{children}</div>

        {footer && (
          <div className="border-t border-[var(--color-border)] bg-[var(--color-page-bg)] px-6 py-4 flex justify-end gap-3 flex-shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
