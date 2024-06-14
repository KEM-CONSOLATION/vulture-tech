import { useEffect, useState } from "react";
import { CloseLineIcon, Menu1LineIcon } from "../assets/icons";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Logo2 from "../assets/Logo2.svg";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`py-2 z-50 top-0 transition-all duration-300 ease-in-out ${
        !open ? "h-screen bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40">
        <div className="flex flex-col md:flex md:flex-row justify-between md:items-center">
          <div className="w-[150px] md:w-[200px] mt-5 mb-[32px] md:mb-0 md:mt-0">
            <Link to="/">
              <img src={!open ? Logo2 : Logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={`md:flex md:items-center ${
              !open ? "text-[#061C60]" : "text-white"
            } font-[400] ${!open ? "block h-full" : "hidden md:block"}`}
          >
            <ul className="grid md:flex gap-5 my-5 md:gap-10 list-none text-[14px]  mt-[32px] py-[16px] px-[20px] md:bg-[#616161] bg-opacity-40 rounded-full ">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px]  text-[#061C60] md:text-[#ffffff] font-[400]"
                    : isActive
                    ? "text-[14px]  text-[#66E6C1] font-[400]"
                    : "text-[14px]  text-[#061C60] md:text-[#ffffff] font-[400]"
                }
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px]  text-[#061C60] md:text-[#ffffff] font-[400]"
                    : isActive
                    ? "text-[14px]  text-[#66E6C1] font-[400]"
                    : "text-[14px]  text-[#061C60] md:text-[#ffffff] font-[400]"
                }
              >
                <li>Services</li>
              </NavLink>
              <NavLink
                to="/clients"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px]  text-[#061C60] md:text-[#ffffff] font-[400]"
                    : isActive
                    ? "text-[14px]  text-[#66E6C1] font-[400]"
                    : "text-[14px]  text-[#061C60] md:text-[#ffffff] font-[400]"
                }
              >
                <li>Clients</li>
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px]  text-[#061C60] md:text-[#ffffff] font-[400]"
                    : isActive
                    ? "text-[14px]  text-[#66E6C1] font-[400]"
                    : "text-[14px]  text-[#061C60] md:text-[#ffffff] font-[400]"
                }
              >
                <li>Portfolio</li>
              </NavLink>
            </ul>
          </div>
          {open === true ? (
            <div
              className={`absolute top-[25px] right-4 md:hidden cursor-pointer ${
                !open ? "text-[#061C60]" : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              <Menu1LineIcon />
            </div>
          ) : (
            <div
              className={`absolute top-[25px] right-4 md:hidden cursor-pointer ${
                !open ? "text-[#061C60]" : "text-white"
              }`}
              onClick={() => setOpen(true)}
            >
              <CloseLineIcon />
            </div>
          )}

          {open === false && (
            <p className="w-full md:hidden text-center mt-[24px] px-[28px] py-[16px] rounded-[8px] bg-[#0E42E4] text-[#061C60] md:text-[#ffffff] md:text-[#141414] font-IBM text-[18px] font-[500]">
              Partner with us
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
