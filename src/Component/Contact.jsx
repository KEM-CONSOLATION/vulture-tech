import ContactImage from "../assets/ContactImage.png";
import Icon2 from "../assets/icon.png";
import icon from "../assets/V2.svg";

const Contact = () => {
  return (
    <div className=" bg-[#F8F8F8]  font-instrument">
      {" "}
      <div
        className="  relative max-w-7xl md:mx-10 mx-[10px] 2xl:max-w-full 2xl:mx-40 py-[40px] lg:py-[80px]"
        data-aos="fade-up"
      >
        <div className="  font-[500] lg:text-center">
          <p className="  text-[18px] lg:text-[25px] font-[500] text-[#333333]">
            Got a Project? Tell us about it!
          </p>
          <p className=" text-[16px] lg:text-[20px] text-[#2C2C2C] py-[16px]">
            Let’s Work Together
          </p>
        </div>
        <div className="    lg:flex lg:items-start lg:justify-center  gap-[20px] mt-[40px]">
          <div className=" relative">
            <div className=" hidden lg:absolute  -top-5 -left-20">
              <img src={icon} alt="" className="  " />
            </div>
            <div className="   grid gap-[24px] px-[32px] pt-[60px] pb-[27px] bg-white rounded-[24px] w-full md:max-w-[700px] 2xl:w-[843px] shadow">
              <div className="  grid md:grid-cols-2 gap-[24px]">
                <div className=" grid gap-[8px]">
                  <label htmlFor="" className="   text-[14px] text-[#061C60]">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full md:max-w-[370px]"
                  />
                </div>
                <div className=" grid gap-[8px]">
                  <label htmlFor="" className="   text-[14px] text-[#061C60]">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder=" Enter last name"
                    className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full md:max-w-[370px]"
                  />
                </div>
              </div>

              <div className="  grid md:grid-cols-2 gap-[24px]">
                <div className=" grid gap-[8px]">
                  <input
                    type="text"
                    placeholder=" How did you hear about us?"
                    className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full md:max-w-[370px]"
                  />
                </div>
                <div className=" grid gap-[8px]">
                  <input
                    type="text"
                    placeholder=" Budget"
                    className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full md:max-w-[370px]"
                  />
                </div>
              </div>

              <div className=" grid gap-[8px]">
                <label htmlFor="" className="   text-[14px] text-[#061C60]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full"
                />
              </div>

              <div className="grid gap-[8px]">
                <label htmlFor="" className="   text-[14px] text-[#061C60]">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Message"
                  id=""
                  className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full h-[128px]"
                ></textarea>
              </div>

              <div className="">
                <p className=" bg-[#292D33] text-center py-[12px] text-white rounded-[8px]   text-[16px]">
                  Send message
                </p>
              </div>
            </div>
          </div>
          <div className=" hidden lg:block  max-w-[400px]">
            <div className=" ">
              <img src={ContactImage} alt="" className=" w-full" />
            </div>
            <div className=" my-[16px]">
              <p className="  text-[20px]  font-[400] text-[#2C2C2C] leading-[30px]">
                Our software development experts will analyze your requirements
                and make recommendations on the best ways to bring your concept
                to life.
              </p>
            </div>
            <div className="">
              <img src={Icon2} alt="" />
            </div>
            <div className=" my-[16px]">
              <p className="  text-[20px]  font-[400] text-[#2C2C2C] leading-[44px]">
                Vulture is redefining software development and delivery by
                focusing on a data-oriented engineering framework that unearths
                value for the enterprise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
