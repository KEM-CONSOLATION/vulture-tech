import logo from "../assets/LogoMain.svg";
import BG from "../assets/FooterImage.png";
import Insta from "../assets/insta.svg";
import Twitter from "../assets/X.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <div
      className=" bg-cover bg-center  font-instrument"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[80px] 2xl:py-[130px]">
        <div className=" grid md:grid-cols-2 items-center mb-[100px] md:mb-[50px]">
          <div className=" pb-[48px] md:pb-0">
            <img src={logo} alt="" className="" />
            <p className="  text-[14px]  mt-[26px] font-[400] text-[#FFFFFF] leading-[30px] max-w-[399px]">
              Vulture is redefining software development and delivery by
              focusing on a data-oriented engineering framework that unearths
              value for the enterprise
            </p>
          </div>
          <div className="grid gap-[26px] max-w-[278px]">
            <div className=" grid gap-[24px]">
              <p className="text-[18px] lg:text-[24px] font-normal bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-black">
                Get in touch with us
              </p>

              <p className="text-[18px] lg:text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-black">
                hello@vulturetech.com
              </p>
            </div>

            <div className=" grid gap-[24px]">
              <p className="text-[18px] lg:text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-black">
                Find us here
              </p>
              <p className="text-[18px] lg:text-[20px] font-normal bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-black">
                Block-I, Road-4, House-418 Bashundhara R/A, Dhaka-1229
              </p>
            </div>
            <div className=" grid gap-[24px]">
              <p className="text-[18px] lg:text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-black">
                Follow us
              </p>
              <div className=" flex items-center gap-[15px]">
                <img src={Insta} alt="" />
                <img src={Twitter} alt="" />
                <img src={LinkedIn} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className=" ">
          <p className=" text-[#FFFFFF]">
            <span className=" pr-[11px]">&copy;</span>2024 - VULTURE{" "}
            <sup>TM</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Footer;
