import About from "../Component/About";
import Clients from "../Component/Clients";
import HeroSection from "../Component/HeroSection";
import Portfolio from "../Component/Portfolio";
import Services from "../Component/Services";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Clients />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
};

export default LandingPage;
