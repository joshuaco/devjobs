import { Loader2 } from 'lucide-react';
import { useJobs } from '@/hooks/useJobs';
import { useQueryParams } from '@/hooks/useQueryParams';
import SearchForm from '@/components/forms/search-form';
import Pagination from '@/components/sections/job/pagination';
import JobFilters from '@/components/sections/job/job-filters';
import JobFilterPill from '@/components/sections/job/job-filter-pill';
import JobEmptyState from '@/components/sections/job/job-empty-state';
import JobCard from '@/components/sections/job/job-card';
import type { Filters } from '@/types/form-types';

function SearchPage() {
  const { query, page, filters, setFilters, setQuery} = useQueryParams();
  const { jobs, isLoading, totalPages } = useJobs(filters, query, page);

  const handleRemoveFilter = (filterKey: keyof Filters) => {
    setFilters({ ...filters, [filterKey]: '' });
  };

  const handleClearAllFilters = () => {
    setFilters({ technology: '', location: '', experience: '' });
  };

  console.log({query, page});

  return (
    <>
      <header className='max-w-4xl mx-auto my-6 px-4'>
        <h1 className='text-2xl sm:text-4xl lg:text-5xl text-center font-bold text-white mb-4'>
          Encuentra tu próximo trabajo
        </h1>
        <p className='text-white-gray text-center text-sm sm:text-base'>
          Explora miles de oportunidades en el sector tecnológico.
        </p>
      </header>

      <section className='my-8 w-full max-w-6xl px-4 mx-auto flex flex-col gap-3'>
        <SearchForm maxWidth='w-full' onSearch={setQuery} />
        <JobFilters
          onFiltersChange={setFilters}
          filters={filters}
          jobs={jobs}
        />
        <JobFilterPill
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={handleClearAllFilters}
        />
      </section>

      <section className='my-8 w-full max-w-6xl px-4 mx-auto flex flex-col gap-6'>
        <h2 className='text-2xl font-bold text-white'>
          {isLoading ? 'Buscando trabajos...' : 'Resultados de la búsqueda'}
        </h2>

        <div className='border-muted/25 border rounded-md'>
          {isLoading ? (
            <div className='flex items-center justify-center py-4'>
              <Loader2 className='w-8 h-8 text-white animate-spin' />
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

        <Pagination
          totalPages={totalPages}
          currentPage={page}
        />
      </section>
    </>
  );
}

export default SearchPage;
