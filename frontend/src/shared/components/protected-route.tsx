import { Navigate, Outlet, useLocation } from "react-router";
import useAuthStore from "@/store/auth-store";

function ProtectedRoute() {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;