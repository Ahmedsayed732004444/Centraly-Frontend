import { ReactNode } from 'react';
import { AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { BaseModal } from './BaseModal';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: ReactNode;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
  isLoading?: boolean;
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'تأكيد',
  cancelText = 'إلغاء',
  type = 'danger',
  isLoading = false,
}: ConfirmModalProps) {
  const getIcon = () => {
    switch (type) {
      case 'danger':
        return (
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[var(--color-danger)] shrink-0">
            <AlertTriangle size={20} />
          </div>
        );
      case 'warning':
        return (
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
            <AlertCircle size={20} />
          </div>
        );
      case 'info':
        return (
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[var(--color-primary)] shrink-0">
            <Info size={20} />
          </div>
        );
    }
  };

  const getBtnClass = () => {
    if (type === 'danger') {
      return 'bg-[var(--color-danger)] hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-60';
    }
    if (type === 'warning') {
      return 'bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-60';
    }
    return tokens.btn.primary;
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="md"
      footer={
        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose} disabled={isLoading} className={tokens.btn.secondary}>
            {cancelText}
          </button>
          <button type="button" onClick={onConfirm} disabled={isLoading} className={getBtnClass()}>
            {isLoading ? 'جاري المعالجة...' : confirmText}
          </button>
        </div>
      }
    >
      <div className="p-6 flex gap-4">
        {getIcon()}
        <div className="text-sm text-[var(--color-text-muted)] leading-relaxed">{message}</div>
      </div>
    </BaseModal>
  );
}
