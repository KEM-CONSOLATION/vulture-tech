import Navbar from "./Navbar";
import HeroImage from "../assets/HeroImage.png";
const HeroSection = () => {
  return (
    <div
      className=" w-full h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className=" ">
        <Navbar />

        <div
          className="  max-w-[377px]  md:max-w-[616px] mx-auto text-center"
          data-aos="fade-up"
        >
          <div className="max-w-[377px] mx-[10px] md:mx-0  md:max-w-[758px] ">
            <p className=" text-[40px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white  to-black md:leading-[60px] max-w-[453px] mx-auto">
              A Better Revolution For The Future.
            </p>

            <p className="max-w-[600px] font-[400] text-[18px] md:text-[24px] text-white my-[32px]">
              Innovate. Integrate. Elevate. Crafting seamless solutions for a
              connected tomorrow.
            </p>
            <a className="  px-[44px] py-[8px] rounded-[20px] border border-white text-[#ffffff]  text-[18px] font-[400]">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
