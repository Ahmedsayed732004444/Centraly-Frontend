import { QueryClient } from "@tanstack/react-query";

// Extracted out of App.tsx so code outside the React tree - the SignalR message
// handler in particular - can call invalidateQueries() too.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 1000 * 60 },
  },
});
