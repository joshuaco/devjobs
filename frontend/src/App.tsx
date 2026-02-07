import { Routes, Route } from 'react-router';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/home-page'));
const SearchPage = lazy(() => import('@/pages/jobs-page'));
const JobPage = lazy(() => import('@/pages/job-page'));
const CompaniesPage = lazy(() => import('@/pages/companies-page'));
const MainLayout = lazy(() => import('@/layouts/main'));

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
