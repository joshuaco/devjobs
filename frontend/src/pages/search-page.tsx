import { useState } from 'react';
import SearchForm from '@/components/forms/search-form';
import Pagination from '@/components/sections/job/pagination';
import JobFilters from '@/components/sections/job/job-filters';
import JobCard from '@/components/sections/job/job-card';
import jobData from '@/data.json';

const RESULTS_PER_PAGE = 5;

function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobs = jobData.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
        <SearchForm maxWidth='w-full' />
        <JobFilters />
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
          totalPages={Math.ceil(jobData.length / RESULTS_PER_PAGE)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
}

export default SearchPage;
