import SearchForm from '@/components/forms/search-form';

function HeroSection() {
  return (
    <section className='relative h-[500px] w-full flex flex-col items-center justify-center'>
      <img
        src='/background.webp'
        alt='Hero section background'
        className='absolute w-full h-full object-cover z-[-1] opacity-55'
      />

      <article className='text-center max-w-5xl mb-8'>
        <h1 className='text-6xl font-bold text-white mb-4'>
          Encuentra el trabajo de tus sueños
        </h1>

        <p className='text-xl text-white max-w-3xl mx-auto'>
          Únete a la comunidad más grande de desarrolladores y encuentra tu próxima
          oportunidad.
        </p>
      </article>

      <SearchForm />
    </section>
  );
}

export default HeroSection;
