import React, { useState } from "react";
import Logo from "../assets/logo/Logo1.png";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, PhoneCall, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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
      <section className="hidden lg:flex justify-between items-center py-4 px-12 sticky top-0 bg-[#1f1f1f] z-[9999] shadow-md">
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
                  ? "text-gray-200 font-semibold"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-[-6px] h-1 rounded-sm group-hover:w-full bg-white transition-all duration-300 ${
                  pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </ul>
        <div>
          <a className="  justify-center inline-flex text-white gap-3 items-center  cursor-pointer   text-base font-semibold font-1 transition-all duration-300 ">
            <FontAwesomeIcon
              icon={faPhone}
              fontSize={22}
              className=" text-white p-1 py-1.5 "
              style={{
                background:
                  "linear-gradient(319.78deg, #C19432 13.44%, #FAE45F 45.57%, #DEBC49 77.09%)",
              }}
            />{" "}
            +91 96 5261 236
          </a>
        </div>
      </section>

      {/* Mobile Navbar */}
      <section className="block lg:hidden p-5 sticky top-0  shadow-md bg-[#1f1f1f] z-[9999]">
        <div className="flex justify-between items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-14 transition-transform duration-300"
          />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-xs bg-white backdrop-blur-sm text-[#1F1F1F] hover:bg-white transition-all duration-300"
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
          <ul className="flex flex-col gap-3 bg-[#1f1f1f] backdrop-blur-md  p-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center py-3 rounded-xs text-lg font-medium transition-all duration-300 ${
                  pathname === link.path
                    ? "[background:linear-gradient(319.78deg,#C19432_13.44%,#FAE45F_45.57%,#DEBC49_77.09%)] text-white font-semibold"
                    : "text-white hover:bg-[#545454]/20 hover:text-gray-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full flex justify-center mt-5">
              <button className="primary-button text-white">96 5261 236</button>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
