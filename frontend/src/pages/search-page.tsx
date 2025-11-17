import SearchForm from '@/components/forms/search-form';
import JobFilters from '@/components/sections/job/job-filters';
import JobCard from '@/components/sections/job/job-card';

function SearchPage() {
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
          <JobCard
            title='Analista de Software'
            company='Google LLC'
            location='United States'
            description='Buscamos un analista de software con 3 años de experiencia en desarrollo de software. El candidato debe tener habilidades en React, Node.js, y PostgreSQL.'
          />
          <JobCard
            title='Desarrollador Full Stack'
            company='Data Driven Co.'
            location='Venezuela'
            description='Buscamos un desarrollador full stack con 5 años de experiencia en desarrollo de software. El candidato debe tener habilidades en Next.js, Node.js, y PostgreSQL.'
          />
        </div>
      </section>
    </>
  );
}

export default SearchPage;
