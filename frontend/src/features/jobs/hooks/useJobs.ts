import { useEffect, useState } from 'react';
import { getData } from '@/features/jobs/api/get-data';
import type { Jobs } from '@/types/job-types';
import type { Filters } from '@/types/form-types';

const RESULTS_PER_PAGE = 10;

export function useJobs(filters: Filters, search: string, currentPage: number) {
  const [jobs, setJobs] = useState<Jobs>([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const params = new URLSearchParams();

      if (search) params.append('text', search);
      if (filters.technology) params.append('technology', filters.technology);
      if (filters.location) params.append('type', filters.location);
      if (filters.experience) params.append('level', filters.experience);

      const offset = (currentPage - 1) * RESULTS_PER_PAGE;
      params.append('limit', RESULTS_PER_PAGE.toString());
      params.append('offset', offset.toString());

      const queryParams = params.toString();
      const result = await getData(queryParams);

      if (result) {
        setJobs(result.data);
        setTotalJobs(result.total);
      } else {
        setJobs([]);
        setTotalJobs(0);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [filters, search, currentPage]);

  const totalPages = Math.ceil(totalJobs / RESULTS_PER_PAGE) ?? 1;

  return { jobs, totalPages, isLoading };
}
