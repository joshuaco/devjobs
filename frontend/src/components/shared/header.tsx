import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import MobileMenu from './mobile-menu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className='bg-background px-4 py-5 flex justify-between items-center gap-2 relative'>
      <h1 className='text-2xl font-bold flex gap-3'>
        <svg
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          className='w-7 h-7 self-end text-primary-light'
        >
          <polyline points='16 18 22 12 16 6'></polyline>
          <polyline points='8 6 2 12 8 18'></polyline>
        </svg>
        <span className='text-white'>DevJobs</span>
      </h1>

      {/* Desktop navigation */}
      <nav className='hidden md:block'>
        <ul className='flex gap-6 items-center text-white font-semibold'>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/search'>Empleos</Link>
          </li>
          <li>
            <a href='#'>Empresas</a>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <button
        onClick={toggleMobileMenu}
        className='md:hidden text-white focus:outline-none z-50'
        aria-label='Toggle mobile menu'
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <MobileMenu isOpen={isOpen} onClose={closeMobileMenu} />

      <div className='hidden md:flex gap-3'>
        <a
          href='#'
          type='button'
          className='px-3 py-1.5 bg-primary-dark rounded-md text-primary-light text-sm font-medium hover:outline-primary-light hover:outline-2 hover:outline-offset-2 hover:transition-all'
        >
          Publicar un empleo
        </a>
        <a
          href='#'
          type='button'
          className='px-3 py-1.5 bg-primary rounded-md text-white text-sm font-medium hover:outline-white hover:outline-2 hover:outline-offset-2 hover:transition-all'
        >
          Iniciar sesión
        </a>
      </div>
    </header>
  );
}

export default Header;
