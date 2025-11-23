import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  const currentPageStyle =
    'bg-primary-hover px-3 py-1 rounded-md text-white font-medium';
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className='flex items-center justify-center gap-6 mt-2'>
      <a
        href={`#page=${currentPage - 1}`}
        className={`${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className='w-4 h-4 text-white' />
      </a>

      {pages.map((page: number) => (
        <a
          key={page}
          href={`#page=${page}`}
          className={`${currentPage === page ? currentPageStyle : 'text-muted'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </a>
      ))}

      <a
        href={`#page=${currentPage + 1}`}
        className={`${
          currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''
        }`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className='w-4 h-4 text-white' />
      </a>
    </nav>
  );
}

export default Pagination;
