import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '@/layouts/main';
import ProtectedRoute from '@/shared/components/protected-route';

const HomePage = lazy(() => import('@/pages/home-page'));
const LoginPage = lazy(() => import('@/pages/login-page'));
const SearchPage = lazy(() => import('@/pages/jobs-page'));
const JobPage = lazy(() => import('@/pages/job-page'));
const CompaniesPage = lazy(() => import('@/pages/companies-page'));
const ProfilePage = lazy(() => import('@/pages/profile-page'));

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Public routes */}
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/job/:id" element={<JobPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
