import HomePage from '@/pages/home-page';
import JobPage from './pages/job-page';
import SearchPage from '@/pages/jobs-page';
import MainLayout from '@/layouts/main';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/job/:id" element={<JobPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
