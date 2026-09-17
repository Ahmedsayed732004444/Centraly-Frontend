export type SortDirection = 0 | 1;

export interface BaseFilters {
  pageNumber?: number;
  pageSize?: number;
  searchValue?: string;
  sortColumn?: string;
  sortDirection?: SortDirection;
}

export interface PaginatedList<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
