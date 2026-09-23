import React from "react";
import { Spinner } from "./Spinner";
import { TablePagination } from "./TablePagination";
import { EmptyState } from "./EmptyState";
import { tokens } from "@/shared/styles/tokens";

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  pageIndex?: number;
  totalPages?: number;
  totalCount?: number;
  pageSize?: number;
  onNextPage?: () => void;
  onPrevPage?: () => void;
  hidePagination?: boolean;
  onRowClick?: (row: T) => void;
  /** Arabic noun phrase for the empty state, e.g. "فواتير مبيعات". Defaults to a generic message. */
  emptyEntity?: string;
}

export function DataTable<T>({
  columns,
  data,
  isLoading,
  pageIndex,
  totalPages,
  totalCount,
  pageSize,
  onNextPage,
  onPrevPage,
  hidePagination,
  onRowClick,
  emptyEntity,
}: DataTableProps<T>) {
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

      {!hidePagination && pageIndex !== undefined && totalPages !== undefined && totalCount !== undefined && pageSize !== undefined && onNextPage && onPrevPage && (
        <TablePagination
          pageIndex={pageIndex}
          totalPages={totalPages}
          totalCount={totalCount}
          pageSize={pageSize}
          isLoading={isLoading}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
        />
      )}
    </div>
  );
}
