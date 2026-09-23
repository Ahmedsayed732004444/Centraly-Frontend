import { useEffect, useRef } from "react";

/**
 * Returns a ref to attach to a sentinel element. Calls onLoadMore once the
 * sentinel scrolls into view (200px lookahead so the next page is ready
 * before the user hits the bottom). Root defaults to the viewport, which is
 * correct here since the app's scrollable area (AppLayout's <main>) fills it.
 */
export function useInfiniteScrollTrigger(onLoadMore: () => void, enabled: boolean) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const onLoadMoreRef = useRef(onLoadMore);
  useEffect(() => {
    onLoadMoreRef.current = onLoadMore;
  });

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) onLoadMoreRef.current();
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled]);

  return sentinelRef;
}
