import About from "../Component/About";
import Clients from "../Component/Clients";
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
    </div>
  );
};

export default LandingPage;
