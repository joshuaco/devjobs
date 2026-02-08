import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '@/layouts/main';

const HomePage = lazy(() => import('@/pages/home-page'));
const SearchPage = lazy(() => import('@/pages/jobs-page'));
const JobPage = lazy(() => import('@/pages/job-page'));
const CompaniesPage = lazy(() => import('@/pages/companies-page'));

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/job/:id" element={<JobPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
