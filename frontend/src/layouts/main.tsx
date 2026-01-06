import Footer from '@/shared/components/layout/footer';
import Header from '@/shared/components/layout/header';
import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
