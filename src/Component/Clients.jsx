import mobile from "../assets/9mobile.jpg";
import Evolution from "../assets/21stEvolution.jpg";
import blacktree from "../assets/blacktree.png";
import BellaNaija from "../assets/BellaNaija.svg";
import Branch from "../assets/Branch.svg";

const Clients = () => {
  return (
    <div className=" bg-[#E2EAFF]" id="clients" data-aos="fade-up">
      <div
        className="  max-w-5xl  md:mx-auto mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]"
        id="clients"
      >
        <p className=" text-[#333333] text-[14px] lg:text-[25px] font-[500]  mb-[22px]">
          Our Clients
        </p>
        <p className=" font-[500] text-[16px] lg:text-[20px] text-[#2C2C2C]">
          Trusted by startups and the world’s largest companies
        </p>

        <div className="  mt-[26px] grid grid-cols-2 gap-[60px]  lg:grid-cols-5 items-center justify-center place-items-center">
          <img
            src={BellaNaija}
            alt=""
            className=" max-w-[200px] max-h-[100px] object-fill"
          />
          <img src={Evolution} alt="" className=" " />
          <img src={blacktree} alt="" className="" />
          <img src={Branch} alt="" className="" />
          <img
            src={mobile}
            alt=""
            className="  max-w-[200px] max-h-[100px] object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
