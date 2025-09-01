import React, { useState } from "react";
import Logo from "../assets/logo/Logo1.png";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <section className="hidden md:flex justify-between items-center py-4 px-12 sticky top-0 bg-white z-[9999] shadow-md">
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="h-12 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <ul className="flex gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-lg font-medium transition-colors group duration-300 ${
                pathname === link.path
                  ? "text-[#1F1F1F] font-semibold"
                  : "text-[#545454] hover:text-[#1F1F1F]"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-[-6px] h-1 rounded-sm group-hover:w-full bg-[#1F1F1F] transition-all duration-300 ${
                  pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </ul>
        <div>
          <button className=" text-white bg-[#1F1F1F] cursor-pointer  font-1  py-2.5 px-6 text-base font-semibold font-1 transition-all duration-300 hover:bg-[#F1F1F1] hover:text-[#464646]">Start Project</button>
        </div>
      </section>

      {/* Mobile Navbar */}
      <section className="block md:hidden p-5 sticky top-0  shadow-md bg-white z-[9999]">
        <div className="flex justify-between items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-14 transition-transform duration-300"
          />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-xs bg-white/80 backdrop-blur-sm text-[#1F1F1F] hover:bg-white transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-3 bg-white backdrop-blur-md  p-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center py-3 rounded-xs text-lg font-medium transition-all duration-300 ${
                  pathname === link.path
                    ? "bg-[#1F1F1F] text-white font-semibold"
                    : "text-[#545454] hover:bg-[#545454]/20 hover:text-[#1F1F1F]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full flex justify-center mt-5">
              <button className="primary-button">Start  Project</button>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
