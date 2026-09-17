import { ReactNode } from 'react';
import { Search } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';
import { BaseModal } from './BaseModal';
import { DataTable, Column } from './DataTable';

interface PickerModalPagination {
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export interface PickerModalProps<T> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  searchPlaceholder?: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters?: ReactNode;
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  pagination: PickerModalPagination;
  onRowClick?: (row: T) => void;
  selectedCount?: number;
  confirmLabel?: string;
  confirmDisabled?: boolean;
  onConfirm?: () => void;
}

export function PickerModal<T>({
  isOpen,
  onClose,
  title,
  subtitle,
  searchPlaceholder = 'بحث...',
  searchValue,
  onSearchChange,
  filters,
  columns,
  data,
  isLoading,
  pagination,
  onRowClick,
  selectedCount = 0,
  confirmLabel = 'إضافة',
  confirmDisabled,
  onConfirm,
}: PickerModalProps<T>) {
  const footer = onConfirm ? (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-[var(--color-text-muted)]">
        {selectedCount > 0 ? `تم تحديد ${selectedCount} عنصر` : 'لم يتم تحديد عناصر بعد'}
      </span>
      <div className="flex gap-3">
        <button type="button" onClick={onClose} className={tokens.btn.secondary}>
          إلغاء
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={confirmDisabled ?? selectedCount === 0}
          className={`${tokens.btn.primary} disabled:opacity-50`}
        >
          {confirmLabel} ({selectedCount})
        </button>
      </div>
    </div>
  ) : undefined;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={title} subtitle={subtitle} size="4xl" footer={footer}>
      <div className="px-6 py-3 border-b border-[var(--color-border)] bg-[var(--color-page-bg)]">
        <div className={filters ? 'grid grid-cols-1 md:grid-cols-3 gap-3 items-center' : ''}>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={16} />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className={`${tokens.input} pr-10`}
              autoFocus
            />
          </div>
          {filters}
        </div>
      </div>

      <div className="px-6 py-4">
        <DataTable
          columns={columns}
          data={data}
          isLoading={isLoading}
          pageIndex={pagination.pageIndex}
          totalPages={pagination.totalPages}
          totalCount={pagination.totalCount}
          pageSize={pagination.pageSize}
          onNextPage={pagination.onNextPage}
          onPrevPage={pagination.onPrevPage}
          onRowClick={onRowClick}
        />
      </div>
    </BaseModal>
  );
}
