import About from "../Component/About";
import Clients from "../Component/Clients";
import HeroSection from "../Component/HeroSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Clients />
      <About />
    </div>
  );
};

export default LandingPage;
