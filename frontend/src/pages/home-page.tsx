import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroFeatures from '@/components/hero-features';
import HeroSection from '@/components/hero-section';

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <HeroFeatures />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
