import { useInfiniteQuery } from "@tanstack/react-query";
import { BaseFilters, PaginatedList } from "@/shared/types/pagination";

/**
 * Generic infinite-scroll wrapper around a paginated list endpoint. Pages are
 * keyed by `queryKey` + `filters`, so changing a filter (search, status, ...)
 * naturally resets the accumulated pages instead of appending to stale data.
 */
export function useInfiniteResource<T, F extends BaseFilters>(
  queryKey: readonly unknown[],
  fetchFn: (filters: F) => Promise<PaginatedList<T>>,
  filters: F,
  options?: { enabled?: boolean }
) {
  const query = useInfiniteQuery({
    queryKey: [...queryKey, filters],
    queryFn: ({ pageParam }) => fetchFn({ ...filters, pageNumber: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.pageNumber + 1 : undefined),
    ...options,
  });

  const items = query.data?.pages.flatMap((page) => page.items) ?? [];
  const totalCount = query.data?.pages[0]?.totalCount;

  return {
    ...query,
    items,
    totalCount,
  };
}
