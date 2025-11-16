import HomePage from '@/pages/home-page';
import SearchPage from '@/pages/search-page';
import MainLayout from '@/layouts/main';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
