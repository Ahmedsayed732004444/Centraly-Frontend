import { ChevronRight, ChevronLeft } from "lucide-react";

interface TablePaginationProps {
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  isLoading?: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
}

// Was implemented twice, byte-for-byte, in DataTable and MaintenanceListTable.
// Extracted here so every paginated table (built on DataTable's generic columns, or
// with its own bespoke row rendering like MaintenanceListTable) shares one footer.
export function TablePagination({
  pageIndex,
  totalPages,
  totalCount,
  pageSize,
  isLoading,
  onNextPage,
  onPrevPage,
}: TablePaginationProps) {
  if (totalPages <= 1) return null;

  const from = totalCount === 0 ? 0 : (pageIndex - 1) * pageSize + 1;
  const to = Math.min(pageIndex * pageSize, totalCount);

  return (
    <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
      <span className="text-center sm:text-right">
        إظهار {from} إلى {to} من أصل {totalCount} سجل
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevPage}
          disabled={pageIndex <= 1 || isLoading}
          className="px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40 flex items-center gap-1 transition-colors"
        >
          <ChevronRight size={15} />
          السابق
        </button>
        <span className="px-3 py-2 border border-blue-600 bg-blue-50 text-blue-600 rounded-md font-semibold min-w-[60px] text-center">
          {pageIndex} / {totalPages || 1}
        </span>
        <button
          onClick={onNextPage}
          disabled={pageIndex >= totalPages || isLoading}
          className="px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40 flex items-center gap-1 transition-colors"
        >
          التالي
          <ChevronLeft size={15} />
        </button>
      </div>
    </div>
  );
}
