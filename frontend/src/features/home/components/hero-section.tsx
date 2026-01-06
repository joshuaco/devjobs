import { useNavigate } from 'react-router';
import { SearchForm } from '@/features/search';

function HeroSection() {
  const navigate = useNavigate();

  const handleSearch = (search: string) => {
    if (search.trim() === '') return;
    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

  return (
    <section className="relative h-[500px] w-full flex flex-col items-center justify-center">
      <img
        src="/background.webp"
        alt="Hero section background"
        className="absolute w-full h-full object-cover z-[-1] opacity-55"
      />

      <article className="text-center max-w-5xl mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Encuentra el trabajo de tus sueños
        </h1>

        <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
          Únete a la comunidad más grande de desarrolladores y encuentra tu
          próxima oportunidad.
        </p>
      </article>

      <div className="px-4 md:px-0 w-full">
        <SearchForm onSearch={handleSearch} />
      </div>
    </section>
  );
}

export default HeroSection;
