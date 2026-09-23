import React from "react";
import { Spinner } from "./Spinner";
import { TablePagination } from "./TablePagination";
import { EmptyState } from "./EmptyState";
import { tokens } from "@/shared/styles/tokens";
import { useInfiniteScrollTrigger } from "@/shared/hooks/useInfiniteScrollTrigger";

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  onRowClick?: (row: T) => void;
  /** Arabic noun phrase for the empty state, e.g. "فواتير مبيعات". Defaults to a generic message. */
  emptyEntity?: string;
  totalCount?: number;

  // Pagination visbility
  hidePagination?: boolean;

  // Infinite-scroll pagination: pass onLoadMore to enable it. Auto-fetches the next
  // page when the user scrolls near the bottom, instead of showing prev/next buttons.
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore?: () => void;

  // Legacy prev/next button pagination, still used by tables not yet migrated to infinite
  // scroll. Ignored once onLoadMore is passed.
  pageIndex?: number;
  totalPages?: number;
  pageSize?: number;
  onNextPage?: () => void;
  onPrevPage?: () => void;
}

export function DataTable<T>({
  columns,
  data,
  isLoading,
  onRowClick,
  emptyEntity,
  totalCount,
  hidePagination,
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
  pageIndex,
  totalPages,
  pageSize,
  onNextPage,
  onPrevPage,
}: DataTableProps<T>) {
  const isInfiniteScroll = typeof onLoadMore === "function";

  const sentinelRef = useInfiniteScrollTrigger(
    () => onLoadMore?.(),
    isInfiniteScroll && !!hasNextPage && !isLoading && !isFetchingNextPage
  );

  return (
    <div className={tokens.table.wrapper}>
      <div className="overflow-x-auto p-4 md:p-0">
        <table className="w-full text-sm text-right block md:table">
          <thead className={`${tokens.table.head} hidden md:table-header-group`}>
            <tr>
              {columns.map((col, i) => (
                <th key={i} className={tokens.table.header}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className={`${tokens.table.body} block md:table-row-group space-y-4 md:space-y-0`}>
            {isLoading ? (
              <tr className="block md:table-row">
                <td colSpan={columns.length} className="block md:table-cell px-6 py-10 text-center text-gray-400 text-sm w-full">
                  <div className="flex items-center justify-center gap-2">
                    <Spinner size={16} />
                    جاري تحميل البيانات...
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr className="block md:table-row">
                <td colSpan={columns.length} className="block md:table-cell w-full">
                  <EmptyState entity={emptyEntity ?? "بيانات"} message={emptyEntity ? undefined : "لا توجد بيانات لعرضها"} />
                </td>
              </tr>
            ) : (
              data.map((row, ri) => (
                <tr
                  key={ri}
                  className={`${tokens.table.row} ${onRowClick ? 'cursor-pointer' : ''} block md:table-row bg-slate-50 md:bg-transparent border border-slate-100 md:border-none rounded-2xl md:rounded-none overflow-hidden mb-4 md:mb-0`}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((col, ci) => (
                    <td 
                      key={ci} 
                      className={`${tokens.table.cell} flex md:table-cell justify-between items-center md:items-start border-b border-slate-200/60 md:border-none last:border-none gap-4`}
                    >
                      <span className="md:hidden text-xs font-semibold text-slate-500 whitespace-nowrap">
                        {col.header}
                      </span>
                      <div className="flex-1 flex justify-end md:block md:text-right">
                        {col.cell
                          ? col.cell(row)
                          : (row[col.accessorKey as keyof T] as React.ReactNode)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {!hidePagination && (
        isInfiniteScroll ? (
          !isLoading &&
          data.length > 0 && (
            <div className="px-4 py-3 border-t border-gray-200 flex flex-col items-center gap-2 text-sm text-gray-500">
              <span>
                عرض {data.length} من أصل {totalCount ?? data.length} سجل
              </span>
              {isFetchingNextPage && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Spinner size={16} />
                  جاري تحميل المزيد...
                </div>
              )}
              {hasNextPage && !isFetchingNextPage && <div ref={sentinelRef} className="h-px w-full" />}
            </div>
          )
        ) : (
          <TablePagination
            pageIndex={pageIndex ?? 1}
            totalPages={totalPages ?? 1}
            totalCount={totalCount ?? 0}
            pageSize={pageSize ?? 0}
            isLoading={isLoading}
            onNextPage={onNextPage ?? (() => {})}
            onPrevPage={onPrevPage ?? (() => {})}
          />
        )
      )}
    </div>
  );
}
