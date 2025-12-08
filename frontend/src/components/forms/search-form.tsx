import { SearchIcon } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import { useNavigate } from 'react-router';

interface SearchFormProps {
  maxWidth?: string;
  onSearch?: (search: string) => void;
}

function SearchForm({ maxWidth = 'max-w-2xl', onSearch }: SearchFormProps) {
  const { search, handleSearch } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const search = formData.get('search') as string;

    onSearch?.(search);
    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

  return (
    <form
      role='search'
      className={`flex mx-auto w-full ${maxWidth} justify-center`}
      onSubmit={handleSubmit}
    >
      <div className='flex gap-2 items-center bg-input rounded-md p-2 w-full shadow-md pl-4'>
        <SearchIcon className='w-6 h-6 text-muted' />
        <input
          type='text'
          name='search'
          placeholder='Buscar empleos por título, habilidad o empresa'
          className='w-full bg-transparent outline-none text-white p-1'
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          type='submit'
          className='bg-primary-hover text-white px-5 py-2 rounded-md text-sm font-medium'
        >
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
