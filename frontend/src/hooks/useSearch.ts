import { useState } from 'react';
import { useSearchParams } from 'react-router';

export function useSearch() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(() =>
    (searchParams.get('query') ?? '').toLowerCase().trim()
  );

  const handleSearch = (searchQuery: string) => {
    setSearch(searchQuery.toLowerCase().trim());
  };

  return { search, handleSearch };
}
