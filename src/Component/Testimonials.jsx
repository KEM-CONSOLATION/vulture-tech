import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from "../assets/1.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Olushola",
      content:
        "My experience with Cloud Integration was nothing short of exceptional. They not only crafted a flawless design and integration but also offered invaluable support in product management. It's like having a complete package with their team—truly remarkable!",
      company: "Video Berekete",
    },
    {
      name: "Shola",
      content:
        "My experience with Cloud Integration was nothing short of exceptional. They not only crafted a flawless design and integration but also offered invaluable support in product management. It's like having a complete package with their team—truly remarkable!",
      company: "Video Berekete",
    },
    {
      name: "Akin",
      content:
        "My experience with Cloud Integration was nothing short of exceptional. They not only crafted a flawless design and integration but also offered invaluable support in product management. It's like having a complete package with their team—truly remarkable!",
      company: "Video Berekete",
    },
    {
      name: "Consolation",
      content:
        "My experience with Cloud Integration was nothing short of exceptional. They not only crafted a flawless design and integration but also offered invaluable support in product management. It's like having a complete package with their team—truly remarkable!",
      company: "Video Berekete",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <ul style={{ display: "flex", gap: "8px" }}>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#FFFFFF] ">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[60px]">
        <div className="text-center" data-aos="fade-up">
          <p className=" font-[500] text-[14px] text-[#213054] px-[12px] py-[8px] bg-[#E2EAFF] rounded-full inline">
            Testimonials
          </p>
          <p className="text-[25px] md:text-[25px] font-[500] text-[#2C2C2C] my-[30px]">
            What our clients say
          </p>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="grid place-items-center items-center max-w-[900px] mx-auto justify-center"
              >
                <div className="">
                  <p className="text-[#2C2C2C] text-[14px] leading-[30px] md:text-[20px] font-[400]">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex flex-row items-start md:flex-row md:items-center gap-[24px] md:justify-center my-[25px]">
                  <div className="h-[50px] w-[50px] rounded-full">
                    <img
                      src={Testimonial1}
                      alt=""
                      className="w-full object-fill"
                    />
                  </div>
                  <div className=" text-start">
                    <p className=" text-[16px] font-[500] text-[#2C2C2C]">
                      {testimonial.name}
                    </p>
                    <p className="text-[12px] font-[400] text-[#2C2C2C]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style>{`
        

        .slick-dots li button:before {
          font-size: 10px;
          color: #D9D9D9; 
          margin-top: 24px;

        }
        
        .slick-dots li.slick-active button:before {
          color: #000; 
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
