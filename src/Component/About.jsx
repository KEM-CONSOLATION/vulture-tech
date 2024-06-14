import AboutImage from "../assets/AboutUs.svg";
import icon from "../assets/V.png";

const About = () => {
  return (
    <div className=" bg-[#F8F8F8] my-[51px] relative">
      <img src={icon} alt="" className=" absolute bottom-0 left-0" />

      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[120px]"
        data-aos="fade-up"
      >
        <p className=" py-[8px] px-[12px] inline-block bg-[#D0F7EC] rounded-[20px] font-SatoshiMedium text-[14px] text-[#2B6151]">
          About us
        </p>
        <div className=" grid place-items-center lg:flex lg:items-start lg:justify-between gap-[20px]">
          <div className=" mt-[24px]">
            <img src={AboutImage} alt="" />
          </div>

          <div className=" max-w-[500px] 2xl:max-w-[644px] grid gap-[24px]">
            <div className="">
              <p className=" text-[#061C60] font-Satoshi text-[25px] 2xl:text-[36px]">
                With experienced teams and an agile framework, we prioritize our
                clients&apos; commercial goals to deliver the highest business
                value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
