import useAuthStore from '@/store/auth-store';
import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router';
import { Menu, X, UserCircle } from 'lucide-react';
import MobileMenu from './mobile-menu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    navigate('/login', { state: { from: location } });
  };

  const handleLogout = () => {
    useAuthStore.getState().logout();
    navigate('/');
  };

  return (
    <header className="bg-background px-4 py-4 flex justify-between items-center gap-2 relative border-b border-border">
      <Link to="/" className="text-2xl font-bold flex gap-3">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 self-end text-primary-light"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <span className="text-white">DevJobs</span>
      </Link>

      {/* Desktop navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 items-center text-white font-semibold">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive
              ? 'border-b-2 border-primary-light'
              : 'text-muted hover:text-white transition-colors'}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/search" className={({ isActive }) => isActive
              ? 'border-b-2 border-primary-light'
              : 'text-muted hover:text-white transition-colors'}>Empleos</NavLink>
          </li>
          <li>
            <NavLink to="/companies" className={({ isActive }) => isActive
              ? 'border-b-2 border-primary-light'
              : 'text-muted hover:text-white transition-colors'}>Empresas</NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-white focus:outline-none z-50"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && <MobileMenu isOpen={isOpen} onClose={closeMobileMenu} isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />}

      <div className="hidden md:flex gap-3 items-center">
        {isLoggedIn && (
          <>
            <Link
              to="/profile"
              className="text-muted hover:text-white transition-colors"
              aria-label="Perfil"
            >
              <UserCircle className="w-7 h-7" />
            </Link>
          </>
        )}
        <button
          onClick={isLoggedIn ? handleLogout : handleLogin}
          type="button"
          className="px-3 py-1.5 bg-primary rounded-md text-white text-sm font-medium hover:outline-white hover:outline-2 hover:outline-offset-2 hover:transition-all"
        >
          {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
        </button>
      </div>
    </header>
  );
}

export default Header;
