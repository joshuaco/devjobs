import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const [searchParams] = useSearchParams();

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    page > 1 ? params.set('page', page.toString()) : params.delete('page');
    return `?${params.toString()}`;
  }

  const currentPageStyle =
    'bg-primary-hover px-3 py-1 rounded-md text-white font-medium';

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className='flex items-center justify-center gap-6 mt-2'>
      <Link
        to={getPageUrl(currentPage - 1)}
        className={`${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <ChevronLeft className='w-4 h-4 text-white' />
      </Link>

      {pages.map((page: number) => (
        <Link
          key={page}
          to={getPageUrl(page)}
          className={`${currentPage === page ? currentPageStyle : 'text-muted'}`}
        >
          {page}
        </Link>
      ))}

      <Link
        to={getPageUrl(currentPage + 1)}
        className={`${
          currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''
        }`}
      >
        <ChevronRight className='w-4 h-4 text-white' />
      </Link>
    </nav>
  );
}

export default Pagination;
