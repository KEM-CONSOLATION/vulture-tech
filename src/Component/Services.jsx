import Ai from "../assets/Ai.png";
import Analysis from "../assets/Analysis.png";
import SaaS from "../assets/SaaS.png";

const Services = () => {
  return (
    <div className=" bg-[#FFFFFF] md:my-[51px] relative font-instrument">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[120px]"
        data-aos="fade-up"
      >
        <div className=" grid lg:flex items-start lg:justify-between gap-[20px]">
          <div className="">
            <p className=" py-[8px] px-[12px] inline-block bg-[#E2EAFF] rounded-[20px] text-[14px] text-[#213054]">
              Our Services
            </p>
            <p className=" text-[#333333] text-[25px] mt-[18px]">What we do</p>
          </div>
          <div className=" grid md:flex items-end justify-center gap-[12px]">
            {/* <div className=" font-[500] max-w-[334px]">
              <p className=" text-[20px] font-[400] text-[#2C2C2C] leading-[44px]">
                Products built to extract maximum value, driven by machine power
                and unmatched intelligence.
              </p>
            </div> */}

            <div className="relative rounded-[10px] overflow-hidden group">
              <div className="absolute inset-0 bg-[#061C60] bg-opacity-60 z-10"></div>
              <div
                className="absolute inset-0 flex items-start  justify-center z-20"
                style={{ paddingTop: "60px" }}
              >
                <div className=" group-hover:block hidden font-[500] max-w-[334px] text-center text-white ">
                  <p className=" text-[18px] font-[600]  leading-[44px]">
                    Products built to extract maximum value, driven by machine
                    power and unmatched intelligence.
                  </p>
                </div>
              </div>

              <div
                className="absolute inset-0 flex items-end justify-center z-20"
                style={{ paddingBottom: "60px" }}
              >
                <div className="max-w-[222px] text-center group-hover:hidden block">
                  <p className="font-[500] text-[20px] text-white">
                    Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>
              <img
                src={Ai}
                alt=""
                className="object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>

            <div className="relative rounded-[10px] overflow-hidden group">
              <div className="absolute inset-0 bg-[#061C60] bg-opacity-60 z-10"></div>
              <div
                className="absolute inset-0 flex items-start justify-center z-20"
                style={{ paddingTop: "60px" }}
              >
                <div className=" group-hover:block hidden font-[500] max-w-[334px] text-center text-white">
                  <p className=" text-[18px] font-[600] leading-[44px]">
                    Products built to extract maximum value, driven by machine
                    power and unmatched intelligence.
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 flex items-end justify-center z-20"
                style={{ paddingBottom: "60px" }}
              >
                <div className="max-w-[170px] text-center group-hover:hidden block">
                  <p className="font-[500] text-[20px] text-white">
                    Analysis & Big Data
                  </p>
                </div>
              </div>
              <img
                src={Analysis}
                alt=""
                className="object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>

            <div className="relative rounded-[10px] overflow-hidden group">
              <div className="absolute inset-0 bg-[#061C60] bg-opacity-60 z-10"></div>
              <div
                className="absolute inset-0 flex items-start justify-center z-20"
                style={{ paddingTop: "60px" }}
              >
                <div className=" group-hover:block hidden font-[500] max-w-[334px] text-center text-white">
                  <p className=" text-[18px] font-[600]  leading-[44px]">
                    Products built to extract maximum value, driven by machine
                    power and unmatched intelligence.
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 flex items-end justify-center z-20"
                style={{ paddingBottom: "60px" }}
              >
                <div className="max-w-[222px] text-center group-hover:hidden block">
                  <p className="font-[500] text-[20px] text-white">
                    SaaS Application Development
                  </p>
                </div>
              </div>
              <img
                src={SaaS}
                alt=""
                className="object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
