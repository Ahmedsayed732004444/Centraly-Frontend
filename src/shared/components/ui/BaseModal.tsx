import { ReactNode, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useModalBehavior } from '@/shared/hooks/useModalBehavior';

type ModalSize = 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

const sizeClass: Record<ModalSize, string> = {
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
};

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  headerClassName?: string;
  zIndexClassName?: string;
  hideCloseButton?: boolean;
}

export function BaseModal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size = 'md',
  headerClassName = 'bg-[var(--color-page-bg)]',
  zIndexClassName = 'z-50',
  hideCloseButton = false,
}: BaseModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useModalBehavior(isOpen, onClose, panelRef);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 ${zIndexClassName} flex items-center justify-center bg-black/40 backdrop-blur-sm p-4`}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        className={`bg-[var(--color-surface)] rounded-xl shadow-xl w-full ${sizeClass[size]} max-h-[90vh] flex flex-col overflow-hidden`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className={`px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between shrink-0 ${headerClassName}`}>
          <div>
            <h2 id={titleId} className="text-lg font-bold text-[var(--color-text-main)]">
              {title}
            </h2>
            {subtitle && (
              <div className="text-sm text-[var(--color-text-muted)] mt-0.5">{subtitle}</div>
            )}
          </div>
          {!hideCloseButton && (
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-label="إغلاق"
            >
              <X size={20} className="text-[var(--color-text-muted)]" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-6">{children}</div>

        {footer && (
          <div className="px-6 py-4 bg-[var(--color-page-bg)] border-t border-[var(--color-border)] shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
