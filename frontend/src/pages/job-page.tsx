import useAuthStore from '@/store/auth-store';
import { useJob } from '@/features/jobs/hooks/useJob';
import { Check } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

function JobPage() {
  const { id } = useParams();
  const { job, isLoading } = useJob(id!);
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6 animate-pulse">
        <div className="h-8 w-2/3 bg-card rounded" />
        <div className="h-4 w-1/3 bg-card rounded" />
        <div className="h-4 w-full bg-card rounded mt-4" />
        <div className="h-4 w-full bg-card rounded" />
        <div className="h-4 w-3/4 bg-card rounded" />
      </section>
    );
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 px-4 py-4 max-w-6xl mx-auto">
        <button
          type='button'
          className="text-muted cursor-pointer hover:text-white transition-colors"
          onClick={handleBack}
        >
          Empleos{' '}
        </button>
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
              <span>{job.empresa}</span> - <span className='border-b-2 border-primary-hover text-white-gray'>{job.ubicacion}</span>
            </p>
          </div>
          <button className="bg-primary-hover text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-primary-light/80 transition-colors disabled:bg-gray-500 whitespace-nowrap"
            disabled={!isLoggedIn}>
            <span className="hidden sm:block">{isLoggedIn ? "Aplicar ahora" : "Inicia Sesión"}</span>
            <span className="block sm:hidden">{isLoggedIn ? "Aplicar" : "Inicia Sesión"}</span>
          </button>
        </header>

        <article className='py-8 flex flex-col gap-3'>
          <h2 className="text-xl font-bold text-white md:text-2xl">Descripción de la oferta</h2>
          <p className="text-white-gray">{job.descripcion}</p>

          <div className='flex flex-col gap-3 mt-2'>
            <h3 className="text-lg font-bold text-white md:text-xl pl-3 border-l-2 border-primary-light">Responsabilidades</h3>
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
            <h3 className="text-lg font-bold text-white md:text-xl pl-3 border-l-2 border-primary-light">Requisitos</h3>
            <ul className='flex flex-col gap-2'>
              {job.content.requirements.split('\n').filter(req => req.trim()).map((req, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <Check className='max-w-4 max-h-4 text-primary-light' />
                  <span className='text-white-gray'>{req.slice(1)}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-lg font-bold text-white md:text-xl pl-3 border-l-2 border-primary-light mt-2">Acerca de la empresa</h2>
          <p className="text-white-gray">{job.content.about}</p>

          <footer className='border-t border-border mt-6 flex justify-end'>

          </footer>
        </article>
      </section>
    </>
  );
}

export default JobPage;
