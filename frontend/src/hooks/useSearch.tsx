import { useState } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');

  const handleSearch = (searchQuery: string) => {
    setSearch(searchQuery.toLowerCase().trim());
  };

  return { search, handleSearch };
}
