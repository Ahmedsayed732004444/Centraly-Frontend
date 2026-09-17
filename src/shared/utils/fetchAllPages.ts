import { PaginatedList } from '@/shared/types/pagination';

// The backend clamps PageSize to 50 regardless of what's requested
// (Centraly.Api/Contracts/Common/RequestFilters.cs), so an export button can't just ask
// for one huge page - it has to walk every page under the current filters and
// concatenate the results. Capped at MAX_PAGES as a safety net against a runaway loop
// if a filter combination somehow returns an ever-growing totalPages.
const MAX_PAGES = 200; // 200 * 50 = 10,000 rows

export async function fetchAllPages<T>(
  fetchPage: (pageNumber: number) => Promise<PaginatedList<T>>
): Promise<T[]> {
  const first = await fetchPage(1);
  const items = [...first.items];
  const totalPages = Math.min(first.totalPages || 1, MAX_PAGES);

  for (let page = 2; page <= totalPages; page++) {
    const next = await fetchPage(page);
    items.push(...next.items);
  }

  return items;
}

/**
 * A couple of endpoints (getExpenses, getSafeTransactions) are typed on the frontend
 * as returning a plain array while the backend actually always sends back a
 * PaginatedList - the consuming table components already defend against both shapes
 * at runtime, so this normalizes the same mismatch for export code.
 */
export function normalizePaginated<T>(response: T[] | PaginatedList<T>): PaginatedList<T> {
  if (Array.isArray(response)) {
    return { items: response, pageNumber: 1, pageSize: response.length, totalCount: response.length, totalPages: 1, hasPreviousPage: false, hasNextPage: false };
  }
  return response;
}
