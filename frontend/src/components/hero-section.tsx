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

      {/* TODO: Move to a separate component called SearchForm */}
      <form role='search' className='flex mx-auto w-full max-w-2xl justify-center'>
        <div className='flex gap-2 items-center bg-input rounded-md p-2 w-full shadow-md pl-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-6 h-6 text-white-gray'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
            <path d='M21 21l-6 -6' />
          </svg>
          <input
            type='text'
            placeholder='Buscar empleos por título, habilidad o empresa'
            className='w-full bg-transparent outline-none text-white p-1'
          />
          <button
            type='submit'
            className='bg-primary-hover text-white px-5 py-2 rounded-md text-sm font-medium'
          >
            Buscar
          </button>
        </div>
      </form>
    </section>
  );
}

export default HeroSection;
