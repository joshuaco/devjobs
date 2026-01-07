import { useState } from 'react';
import type { Filters } from '@/types/form-types';

export function useFilters() {
  const [filters, setFilters] = useState<Filters>({
    technology: '',
    location: '',
    experience: '',
  });

  const handleChangeFilters = (filters: Filters) => {
    setFilters(filters);
  };

  return { filters, handleChangeFilters };
}
