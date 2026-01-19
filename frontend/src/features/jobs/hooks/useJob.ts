import type { Job } from '@/types/job-types';
import { useState, useEffect } from 'react';
import { getJobData } from '../api/get-data';

export function useJob(id: string) {
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      setIsLoading(true);
      const jobData = await getJobData(id);
      if (jobData) {
        setJob(jobData);
      }
      setIsLoading(false);
    };
    fetchJob();
  }, [id]);

  return { job, isLoading };
}
