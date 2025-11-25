import { SearchIcon } from 'lucide-react';
import type { Filters } from '@/types/form-types';

interface SearchFormProps {
  maxWidth?: string;
  children?: React.ReactNode;
  onSearch?: (filters: Filters, search: string) => void;
}

function SearchForm({
  maxWidth = 'max-w-2xl',
  children,
  onSearch
}: SearchFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const filters = {
      technology: formData.get('filter-technology') as string,
      location: formData.get('filter-location') as string,
      experience: formData.get('filter-experience') as string
    };
    const search = formData.get('search') as string;

    onSearch?.(filters, search.toLowerCase().trim());
  };

  return (
    <form
      role='search'
      className={`flex flex-col gap-3 mx-auto w-full ${maxWidth} justify-center`}
      onSubmit={handleSubmit}
    >
      <div className='flex gap-2 items-center bg-input rounded-md p-2 w-full shadow-md pl-4'>
        <SearchIcon className='w-6 h-6 text-muted' />
        <input
          type='text'
          name='search'
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
      {children}
    </form>
  );
}

export default SearchForm;
