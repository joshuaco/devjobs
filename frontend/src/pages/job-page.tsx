import { useJob } from '@/features/jobs/hooks/useJob';
import { Check } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

function JobPage() {
  const { id } = useParams();
  const { job, isLoading } = useJob(id!);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <nav className="flex items-center gap-2 px-4 py-4 max-w-6xl mx-auto">
        <p
          className="text-muted cursor-pointer hover:text-white transition-colors"
          onClick={handleBack}
        >
          Empleos{' '}
        </p>
        <span className="text-muted">/</span>
        <span className="text-white">{job.titulo}</span>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-6">
        <header className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              {job.titulo}
            </h1>
            <p className="text-muted">
              {job.empresa} - {job.ubicacion}
            </p>
          </div>
          <button className="bg-primary-hover text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-primary-light/80 transition-colors">
            <span className="hidden sm:block">Aplicar ahora</span>
            <span className="block sm:hidden">Aplicar</span>
          </button>
        </header>

        <article className='py-8 flex flex-col gap-3'>
          <h2 className="text-xl font-bold text-white md:text-2xl">Descripción de la oferta</h2>
          <p className="text-white-gray">{job.descripcion}</p>

          <div className='flex flex-col gap-3 mt-2'>
            <h3 className="text-xl font-bold text-white md:text-2xl">Responsabilidades</h3>
            <ul className='flex flex-col gap-2'>
              {job.content.responsibilities.split('\n').filter(resp => resp.trim()).map((resp, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <Check className='max-w-4 max-h-4 text-primary-light' />
                  <span className='text-white-gray'>{resp.slice(1)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-3 mt-2'>
            <h3 className="text-xl font-bold text-white md:text-2xl">Requisitos</h3>
            <ul className='flex flex-col gap-2'>
              {job.content.requirements.split('\n').filter(req => req.trim()).map((req, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <Check className='max-w-4 max-h-4 text-primary-light' />
                  <span className='text-white-gray'>{req.slice(1)}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-xl font-bold text-white md:text-2xl mt-2">Acerca de la empresa</h2>
          <p className="text-white-gray">{job.content.about}</p>

          <footer className='border-t border-border mt-6 flex justify-end'>
            <button className='bg-primary-hover text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-primary-light/80 transition-colors mt-4'>
              <span className="hidden sm:block">Aplicar ahora</span>
              <span className="block sm:hidden">Aplicar</span>
            </button>
          </footer>
        </article>
      </section>
    </>
  );
}

export default JobPage;
