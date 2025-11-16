import { SearchIcon } from 'lucide-react';

function SearchForm() {
  return (
    <form role='search' className='flex mx-auto w-full max-w-2xl justify-center'>
      <div className='flex gap-2 items-center bg-input rounded-md p-2 w-full shadow-md pl-4'>
        <SearchIcon className='w-6 h-6 text-muted' />
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
  );
}

export default SearchForm;
