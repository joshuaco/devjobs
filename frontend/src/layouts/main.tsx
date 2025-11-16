import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
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
