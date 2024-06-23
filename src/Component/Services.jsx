import { useState } from "react";
import Ai from "../assets/AiMain.png";
import Analysis from "../assets/analysis1.png";
import SaaS from "../assets/Saas1.png";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardContents = [
    "Products built to extract maximum value, driven by machine power and unmatched intelligence.",
    "Analysis & Big Data: Comprehensive analysis services powered by cutting-edge big data technologies.",
    "SaaS Application Development: Developing scalable and robust SaaS applications tailored to your needs.",
  ];

  return (
    <div className="bg-[#FFFFFF] relative font-instrument" id="services">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 lg:py-[120px]"
        data-aos="fade-up"
      >
        <div className="grid lg:flex items-start lg:justify-between gap-[20px] relative">
          <div>
            <p className="py-[8px] px-[12px] inline-block bg-[#E2EAFF] rounded-[20px] text-[14px] text-[#213054]">
              Our Services
            </p>
            <p className="text-[#333333] text-[25px] mt-[18px]">What we do</p>
            {hoveredCard !== null && (
              <div className="font-[500] max-w-[334px] hidden lg:block absolute left-0 bottom-0 transition-opacity duration-300 opacity-100">
                <p className="text-[20px] font-[400] text-[#2C2C2C] leading-[44px]">
                  {cardContents[hoveredCard]}
                </p>
              </div>
            )}
          </div>
          <div className="grid sm:grid-cols-2 md:flex items-end justify-center gap-[12px] relative ml-auto sm:ml-0">
            <div className=" relative">
              <div
                className="relative rounded-[10px] overflow-hidden group w-[245px] lg:w-auto h-[200px] lg:h-auto"
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 flex items-end justify-end lg:justify-center z-20 pb-[10px] pr-[10px] lg:pr-0 lg:pb-[60px]">
                  <div className="max-w-[222px] text-center">
                    <p className="font-[500] text-[20px] text-white">
                      Artificial Intelligence & Machine Learning
                    </p>
                  </div>
                </div>
                <img
                  src={Ai}
                  alt="AI"
                  className="object-cover h-full w-full transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="absolute w-[245px] text-[14px] top-[35%] left-[-30%] sm:hidden transform -translate-y-1/2 bg-[#F2F2F2]  flex items-start justify-center text-[#2C2C2C] rounded-[10px] p-4 lg:hidden">
                {cardContents[0]}
              </div>
            </div>
            <div className=" relative">
              <div
                className="relative rounded-[10px] overflow-hidden group w-[245px] lg:w-auto h-[200px] lg:h-auto"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 flex items-end justify-end lg:justify-center z-20 pb-[10px] pr-[10px] lg:pr-0 lg:pb-[60px]">
                  <div className="max-w-[222px] text-center">
                    <p className="font-[500] text-[20px] text-white">
                      Analysis & Big Data
                    </p>
                  </div>
                </div>
                <img
                  src={Analysis}
                  alt="Analysis"
                  className="object-cover h-full w-full transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="absolute w-[245px] text-[14px] top-[35%] left-[-30%] sm:hidden transform -translate-y-1/2 bg-[#F2F2F2]  flex items-start justify-center text-[#2C2C2C] rounded-[10px] p-4 lg:hidden">
                {cardContents[1]}
              </div>
            </div>

            <div className="relative">
              <div
                className="relative rounded-[10px] overflow-hidden group w-[245px] lg:w-auto h-[201px] lg:h-auto"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 flex items-end justify-end lg:justify-center z-20 pb-[10px] pr-[10px] lg:pr-0 lg:pb-[60px]">
                  <div className="max-w-[222px] text-center">
                    <p className="font-[500] text-[20px] text-white">
                      SaaS Application Development
                    </p>
                  </div>
                </div>
                <img
                  src={SaaS}
                  alt="SaaS"
                  className="object-cover h-full w-full transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div
                className="absolute w-[245px] text-[14px] top-[35%] left-[-30%] sm:hidden transform -translate-y-1/2 bg-[#F2F2F2]  flex items-start justify-center text-[#2C2C2C] rounded-[10px] p-4 lg:hidden"
                id="content"
              >
                {cardContents[2]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
