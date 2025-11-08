import HeroCard from './hero-card';

const features = [
  {
    id: 101,
    title: 'Encuentra el trabajo de tus sueños',
    description: 'Busca miles de empleos de las mejores empresas del mundo.'
  },
  {
    id: 102,
    title: 'Conecta con las mejores empresas',
    description:
      'Conecta con las empresas que están contratando por tus habilidades.'
  },
  {
    id: 103,
    title: 'Obtén el salario que mereces',
    description: 'Obtén el salario que mereces con nuestra calculadora de salarios.'
  }
];

function HeroFeatures() {
  return (
    <section className='mt-16'>
      <header className='text-center max-w-2xl mx-auto'>
        <h3 className='text-3xl font-bold text-white'>¿Por qué DevJobs?</h3>
        <p className='text-muted text-md mt-4'>
          DevJobs es la principal bolsa de trabajo para desarrolladores. Conectamos
          a los mejores desarrolladores con las mejores empresas del mundo.
        </p>
      </header>
      <footer className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
        {features.map((feature) => (
          <HeroCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </footer>
    </section>
  );
}

export default HeroFeatures;
