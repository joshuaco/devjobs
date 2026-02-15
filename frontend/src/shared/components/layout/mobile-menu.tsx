import useAuthStore from '@/store/auth-store';
import { Link } from 'react-router';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;
  const { isLoggedIn, login, logout } = useAuthStore();

  return (
    <nav className='md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-gray-700 z-40'>
      <ul className='flex flex-col text-white font-semibold'>
        <li>
          <Link
            to='/'
            onClick={onClose}
            className='block px-4 py-3 hover:bg-primary-dark transition-colors'
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to='/search'
            onClick={onClose}
            className='block px-4 py-3 hover:bg-primary-dark transition-colors'
          >
            Empleos
          </Link>
        </li>
        <li>
          <Link
            to='/companies'
            onClick={onClose}
            className='block px-4 py-3 hover:bg-primary-dark transition-colors'
          >
            Empresas
          </Link>
        </li>
        <li className='border-t border-gray-700 px-4 py-3'>
          <Link
            to='#'
            className='block mb-2 px-3 py-2 bg-primary-dark rounded-md text-primary-light text-sm font-medium text-center hover:outline-primary-light hover:outline-2 hover:outline-offset-2 hover:transition-all'
            onClick={onClose}
          >
            Publicar un empleo
          </Link>
          <button
            className='block px-3 py-2 bg-primary rounded-md text-white text-sm font-medium text-center hover:outline-white hover:outline-2 hover:outline-offset-2 hover:transition-all w-full'
            onClick={isLoggedIn ? logout : login}
          >
            {isLoggedIn ? "Cerrar Sesión" : "Iniciar sesión"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
