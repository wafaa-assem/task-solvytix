import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiBars2 } from "react-icons/hi2";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed w-full z-[9999] transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md" : "bg-[#F0F3F2]"
        } `}
      >
        <div className="container flex justify-between items-center py-5 relative z-50 font-medium text-sm">
          {/* logo section */}
          <Link to="/">
            <h1 className="flex items-center gap-3">
              <FaOpencart className="text-[#09c] text-2xl" />
              <span className="text-[#0c4368] font-bold text-2xl">
                ShopMart
              </span>
            </h1>
          </Link>
          {/* menu section */}
          <div className="menu hidden lg:block">
            <ul className="flex items-center gap-5 uppercase">
              <li>
                <NavLink
                  to="/"
                  className="text-[#6b7280] hover:text-[#09c] duration-200 font-bold"
                >
                  home
                </NavLink>
              </li>
            </ul>
          </div>
          <div />
          {/* mobile hamburger menu section */}
          <div
            ref={buttonRef}
            className="hamburger text-3xl md:text-4xl lg:hidden cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <HiBars2 className="text-[#0c4368] text-3xl" />
          </div>
        </div>
      </nav>
      {/* responsive section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
