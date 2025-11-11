import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import HeroFeatures from '@/components/hero-features';
import Footer from '@/components/footer';

function App() {
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

export default App;
