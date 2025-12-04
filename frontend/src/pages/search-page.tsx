import { useState } from 'react';
import { useSearch } from '@/hooks/useSearch';
import { useFilters } from '@/hooks/useFilters';
import SearchForm from '@/components/forms/search-form';
import Pagination from '@/components/sections/job/pagination';
import JobFilters from '@/components/sections/job/job-filters';
import JobCard from '@/components/sections/job/job-card';
import jobData from '@/data.json';
import type { Filters } from '@/types/form-types';

const RESULTS_PER_PAGE = 5;

function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { filters, handleChangeFilters: setFilters } = useFilters();
  const { search, handleSearch: setSearch } = useSearch();

  const filteredJobs = jobData.filter((job) => {
    return (
      (filters.technology === 'all' ||
        job.data.technology.includes(filters.technology)) &&
      (filters.location === 'all' ||
        job.data.modalidad.includes(filters.location)) &&
      (filters.experience === 'all' ||
        job.data.nivel.includes(filters.experience)) &&
      (search === '' || job.titulo.toLowerCase().includes(search))
    );
  });

  const jobs = filteredJobs.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleChangeFilters = (filters: Filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleSearch = (searchQuery: string) => {
    setSearch(searchQuery);
    setCurrentPage(1);
  };

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
        <SearchForm maxWidth='w-full' onSearch={handleSearch} />
        <JobFilters onFiltersChange={handleChangeFilters} filters={filters} />
      </section>

      <section className='my-8 w-full max-w-6xl px-4 mx-auto flex flex-col gap-6'>
        <h2 className='text-2xl font-bold text-white'>Resultados de la búsqueda</h2>

        <div className='border-muted/25 border rounded-md'>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.titulo}
              company={job.empresa}
              location={job.ubicacion}
              description={job.descripcion}
            />
          ))}
        </div>

        <Pagination
          totalPages={Math.ceil(filteredJobs.length / RESULTS_PER_PAGE)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
}

export default SearchPage;
