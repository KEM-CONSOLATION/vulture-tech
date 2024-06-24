import AboutImage from "../assets/AboutUs.svg";
import icon from "../assets/V.png";

const About = () => {
  return (
    <div
      className=" bg-[#FFFFFF] relative font-instrument"
      id="about"
      data-aos="fade-up"
    >
      <img
        src={icon}
        alt=""
        className=" hidden md:block absolute  bottom-0 left-0"
      />

      <div
        className="max-w-5xl md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[120px]"
        data-aos="fade-up"
      >
        <div className=" grid place-items-center lg:flex lg:items-center lg:justify-between gap-[20px]">
          <div className=" ">
            <p className=" py-[8px] px-[12px] inline-block bg-[#E2EAFF] rounded-[20px] text-[14px] text-[#213054]">
              About Vulture
            </p>
            <p className=" text-[#333333] font-[500] text-[25px] mt-[18px]">
              About Us
            </p>
            <img src={AboutImage} alt="" className=" mt-[36px]" />
          </div>

          <div className=" max-w-[500px] lg:max-w-[600px] 2xl:max-w-[699px] grid gap-[24px]">
            <div className=" grid gap-[30px] text-[#2C2C2C]  text-[16px] md:text-[20px] leading-[30px] md:leading-[44px] font-[400] ">
              <p className=" ">
                We believe in a collaborative approach. Our team of seasoned
                developers, designers, and project managers work closely with
                you to understand your goals and deliver solutions that exceed
                your expectations.
              </p>

              <p className="">
                From concept to deployment, we ensure a seamless development
                process with transparent communication and agile methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
