import { useSearchParams } from 'react-router';
import { useCallback, useMemo } from 'react';
import type { Filters } from '@/types/form-types';

interface QueryParams {
  query: string;
  page: number;
  filters: Filters;
}

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo<QueryParams>(() => ({
    query: searchParams.get("query") ?? "",
    page: parseInt(searchParams.get("page") ?? "1", 10),
    filters: {
      technology: searchParams.get("technology") ?? "",
      location: searchParams.get("location") ?? "",
      experience: searchParams.get("experience") ?? "",
    }
  }), [searchParams]);

  const updateParams = useCallback((updates: Partial<QueryParams>) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      if (updates.query !== undefined) {
        updates.query ? next.set('query', updates.query) : next.delete('query');
      }

      if (updates.page !== undefined) {
        updates.page > 1 ? next.set('page', String(updates.page)) : next.delete('page');
      }

      if (updates.filters) {
        Object.entries(updates.filters).forEach(([key, value]) => {
          value ? next.set(key, value) : next.delete(key);
        });
      }

      return next;
    });
  }, [setSearchParams]);

  const setPage = useCallback((page: number) => updateParams({ page }), [updateParams]);
  const setQuery = useCallback((query: string) => updateParams({ query, page: 1 }), [updateParams]);
  const setFilters = useCallback((filters: Filters) => updateParams({ filters, page: 1 }), [updateParams]);

  return { ...params, setPage, setQuery, setFilters };
}