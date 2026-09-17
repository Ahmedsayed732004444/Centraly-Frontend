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
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onNextPage: () => void;
  onPrevPage: () => void;
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
  onRowClick,
  emptyEntity,
}: DataTableProps<T>) {
  return (
    <div className={tokens.table.wrapper}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right">
          <thead className={tokens.table.head}>
            <tr>
              {columns.map((col, i) => (
                <th key={i} className={tokens.table.header}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className={tokens.table.body}>
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-10 text-center text-gray-400 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Spinner size={16} />
                    جاري تحميل البيانات...
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length}>
                  <EmptyState entity={emptyEntity ?? "بيانات"} message={emptyEntity ? undefined : "لا توجد بيانات لعرضها"} />
                </td>
              </tr>
            ) : (
              data.map((row, ri) => (
                <tr
                  key={ri}
                  className={`${tokens.table.row} ${onRowClick ? 'cursor-pointer' : ''}`}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((col, ci) => (
                    <td key={ci} className={tokens.table.cell}>
                      {col.cell
                        ? col.cell(row)
                        : (row[col.accessorKey as keyof T] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <TablePagination
        pageIndex={pageIndex}
        totalPages={totalPages}
        totalCount={totalCount}
        pageSize={pageSize}
        isLoading={isLoading}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </div>
  );
}
