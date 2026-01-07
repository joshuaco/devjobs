import { Loader2 } from 'lucide-react';
import JobEmptyState from './job-empty-state';
import JobCard from './job-card';
import Pagination from './pagination';
import type { Jobs } from '@/types/job-types';

interface JobListProps {
  isLoading: boolean;
  jobs: Jobs;
  page: number;
  totalPages: number;
}

function JobList({ isLoading, jobs, page, totalPages }: JobListProps) {
  return (
    <>
      <div className="border-muted/25 border rounded-md">
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        ) : jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.titulo}
              company={job.empresa}
              location={job.ubicacion}
              description={job.descripcion}
            />
          ))
        ) : (
          <JobEmptyState />
        )}
      </div>

      <Pagination totalPages={totalPages} currentPage={page} />
    </>
  );
}

export default JobList;
