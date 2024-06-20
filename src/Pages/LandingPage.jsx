import { useEffect, useState } from "react";
import About from "../Component/About";
import Clients from "../Component/Clients";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import Portfolio from "../Component/Portfolio";
import Services from "../Component/Services";
import Stats from "../Component/Stats";
import Testimonials from "../Component/Testimonials";
import { RiArrowUpDoubleLine } from "react-icons/ri";

import AOS from "aos";
import "aos/dist/aos.css";
const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
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

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#E2EAFF] text-[#000000] px-4 py-4 rounded-full shadow-lg hover:bg-[#47240E] hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
