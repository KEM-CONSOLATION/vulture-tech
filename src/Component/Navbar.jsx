import { useEffect, useState } from "react";
import { CloseLineIcon, Menu1LineIcon } from "../assets/icons";
import Logo from "../assets/LogoMain.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(true);
      }
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`py-2 z-[9999999] transition-all duration-300 ease-in-out ${
        !open ? "h-screen bg-black" : ""
      } ${isSticky ? "fixed top-0 left-0 right-0 shadow-md bg-black" : ""}`}
    >
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40">
        <div className="flex flex-col md:flex md:flex-row justify-between md:items-center">
          <div className="w-[150px] md:w-[200px] mt-5 mb-[32px] md:mb-0 md:mt-0">
            <a href="#" onClick={() => setOpen(true)}>
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div
            className={`md:flex md:items-center ${
              !open ? "text-[#061C60]" : "text-white"
            } font-[400] ${!open ? "block h-full" : "hidden md:block"}`}
          >
            <ul className="grid md:flex gap-5 my-5 md:gap-10 list-none text-[14px] mt-[32px] py-[16px] px-[20px] md:bg-[#616161] md:bg-opacity-10 rounded-full ">
              <li
                className="text-[14px] text-[#ffffff] font-[400]"
                onClick={() => setOpen(true)}
              >
                <a href="#about">About Us</a>
              </li>
              <li
                className=" text-[14px] text-[#ffffff] font-[400]"
                onClick={() => setOpen(true)}
              >
                <a href="#services">Services</a>
              </li>

              <li
                className=" text-[14px] text-[#ffffff] font-[400]"
                onClick={() => setOpen(true)}
              >
                <a href="#clients">Clients</a>
              </li>

              <li
                className=" text-[14px] text-[#ffffff] font-[400]"
                onClick={() => setOpen(true)}
              >
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
          {open === true ? (
            <div
              className={`absolute top-[40px] right-4 md:hidden cursor-pointer ${
                !open ? "text-[#061C60]" : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              <Menu1LineIcon />
            </div>
          ) : (
            <div
              className={`absolute top-[40px] right-4 md:hidden cursor-pointer ${
                !open && "text-white"
              }`}
              onClick={() => setOpen(true)}
            >
              <CloseLineIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
