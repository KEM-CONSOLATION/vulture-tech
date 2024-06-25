import { useState, useEffect } from "react";
import Portfolio2 from "../assets/portfolio2.png";
import Portfolio3 from "../assets/portfolio2.png";
import Portfolio4 from "../assets/portfolio2.png";
// import ArrowRight from "../assets/ArrowRight.svg";
// import ArrowLeft from "../assets/ArrowLeft.svg";

const Portfolio = () => {
  const images = [
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio2,
    Portfolio3,
    Portfolio4,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - (isMobile ? 1 : 3) : prevIndex - 1
  //   );
  // };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return (prevIndex + 1) % images.length;
      } else {
        if (prevIndex >= images.length - 3) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      }
    });
  };

  return (
    <div className="bg-[#FFFFFF]" id="portfolio" data-aos="fade-up">
      <div className="max-w-5xl lg:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[69px]">
        <div className=" max-w-[617px]">
          <p className="py-[8px] px-[12px] inline-block bg-[#E2EAFF] rounded-[20px]  text-[14px] text-[#213054]">
            Portfolio
          </p>
          <p className="text-[#333333] font-[500] text-[25px] my-[20px]">
            Our Latest Projects
          </p>
          <p className="text-[#2C2C2C] font-[400] text-[20px]">
            We love collaborating with organizations that value excellent
            outcomes
          </p>
        </div>

        <div className="relative mt-[20px]">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (isMobile ? 100 : 100 / 3 + 24 / 3)
                }%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 ${
                    isMobile ? "w-full" : "w-[calc(100%/3 - 24px)] mr-6"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-start gap-4 items-center mt-[48px]">
            {/* <img
              src={ArrowLeft}
              alt="Previous"
              className="w-[48px] h-[48px] cursor-pointer"
              onClick={prevSlide}
            /> */}
            {/* <img
              src={ArrowRight}
              alt="Next"
              className="w-[48px] h-[48px] cursor-pointer"
              onClick={nextSlide}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
