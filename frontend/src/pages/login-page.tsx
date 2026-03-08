import useAuthStore from "@/store/auth-store";
import { Link, useLocation, useNavigate } from "react-router";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    useAuthStore.getState().login();
    navigate(from, { replace: true });
  };


  return (
    <section className="py-12 px-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-white mb-1">Iniciar sesión</h1>
      <p className="text-muted">Inicia sesión para acceder a tu cuenta y aplicar a empleos</p>
      <form className="mt-6 flex flex-col gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
          <input type="email" id="email" className="w-full p-2 rounded-md border border-border" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-white">Contraseña</label>
          <input type="password" id="password" className="w-full p-2 rounded-md border border-border" />
        </div>
      </form>
      <button type="button" className="w-full py-2 px-4 bg-primary-light text-white rounded-md hover:bg-primary-hover transition-colors" onClick={handleLogin}>Iniciar sesión</button>
      <div className="flex flex-col gap-2 mt-4">
        <p className="text-muted">¿No tienes una cuenta? <Link to="/register" className="text-primary-light hover:text-primary-hover transition-colors">Regístrate</Link></p>
        <p className="text-muted">¿Olvidaste tu contraseña? <Link to="/forgot-password" className="text-primary-light hover:text-primary-hover transition-colors">Recuperar contraseña</Link></p>
      </div>
    </section>
  );
}

export default Login;