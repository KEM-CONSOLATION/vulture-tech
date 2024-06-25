import Ai from "../assets/AI.svg";
import Analysis from "../assets/ANALYSIS.svg";
import SaaS from "../assets/SAAS.svg";
import MVP from "../assets/MVP.svg";

const Services = () => {
  return (
    <div className="bg-[#FFFFFF] relative font-instrument" id="services">
      <div
        className="max-w-5xl lg:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 lg:py-[120px]"
        data-aos="fade-up"
      >
        <div className="">
          <div className=" max-w-[699px] mb-[30px]">
            <p className="py-[8px] px-[12px] inline-block bg-[#E2EAFF] rounded-[20px] text-[14px] text-[#213054]">
              Our Services
            </p>
            <p className="text-[#333333] text-[25px] mt-[18px]">What we do</p>
            <p className="hidden md:block text-[#333333] text-[16px] lg:text-[20px] mt-[18px]">
              Empowering businesses with innovative solutions for maximum
              success. Streamlining operations and driving growth with
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 place-items-center items-center ">
            <div className="w-full bg-[#FAFAFA] rounded-[10px] md:rounded-[21px] border border-[#616161] border-opacity-20 px-[20px] py-[47px]">
              <div className="max-w-full lg:max-w-[444px] grid gap-4">
                <img src={Ai} alt="AI" className="h-[54px] w-[54px]" />
                <p className="font-instrument text-[#333333] text-[16px] md:text-[20px] font-[600]">
                  Artificial Intelligence & Machine Learning
                </p>
                <p className="font-[400] text-[14px] md:text-[16px] text-[#2C2C2C]">
                  Products built to extract maximum value, driven by machine
                  power and unmatched intelligence.
                </p>
              </div>
            </div>

            <div className="w-full bg-[#333333] rounded-[10px] md:rounded-[21px]  px-[20px] py-[47px]">
              <div className="max-w-full lg:max-w-[444px] grid gap-4">
                <img src={SaaS} alt="AI" className="h-[54px] w-[54px]" />
                <p className="font-instrument text-[#FFFFFF] text-[16px] md:text-[20px] font-[600]">
                  Artificial Intelligence & Machine Learning
                </p>
                <p className="font-[400] text-[14px] md:text-[16px] text-[#FFFFFF]">
                  Products built to extract maximum value, driven by machine
                  power and unmatched intelligence.
                </p>
              </div>
            </div>

            <div className="order-4 md:order-3 w-full bg-[#333333] rounded-[10px] md:rounded-[21px]  px-[20px] py-[47px]">
              <div className="max-w-full lg:max-w-[444px] grid gap-4">
                <img src={Analysis} alt="AI" className="h-[54px] w-[54px]" />
                <p className="font-instrument text-[#FFFFFF] text-[16px] md:text-[20px] font-[600]">
                  Analysis & Big Data
                </p>
                <p className="font-[400] text-[14px] md:text-[16px] text-[#FFFFFF]">
                  Products built to extract maximum value, driven by machine
                  power and unmatched intelligence.
                </p>
              </div>
            </div>

            <div className=" order-3 md:order-4 w-full bg-[#FAFAFA] rounded-[10px] md:rounded-[21px] border border-[#616161] border-opacity-20 px-[20px] py-[47px]">
              <div className="max-w-full lg:max-w-[444px] grid gap-4">
                <img src={MVP} alt="AI" className="h-[54px] w-[54px]" />
                <p className="font-instrument text-[#333333] text-[16px] md:text-[20px] font-[600]">
                  MVP Development
                </p>
                <p className="font-[400] text-[14px] md:text-[16px] text-[#2C2C2C]">
                  Products built to extract maximum value, driven by machine
                  power and unmatched intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
