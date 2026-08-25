import Hero from '../components/Hero';
import BrandStrip from '../components/BrandStrip';
import About from '../components/About';
import Stats from '../components/Stats';
import Menu from '../components/Menu';
import Sauces from '../components/Sauces';
import Locations from '../components/Locations';
import News from '../components/News';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <BrandStrip />
      <About />
      <Stats />
      <Menu />
      <Sauces />
      <Locations />
      <News />
      <CTASection />
    </>
  );
};

export default Home;
