import About from "../Component/About";
import Clients from "../Component/Clients";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import Portfolio from "../Component/Portfolio";
import Services from "../Component/Services";
import Stats from "../Component/Stats";
import Testimonials from "../Component/Testimonials";

const LandingPage = () => {
  return (
    <div className=" font-instrument">
      <HeroSection />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
