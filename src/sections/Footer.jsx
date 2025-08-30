import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Logo1.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <section className="relative   ">
      {/* Input box overlapping footer */}
      <section className="w-full  -top-8  flex justify-center items-center absolute">
        <div className="flex items-center max-w-full p-1.5 md:w-xl bg-white shadow-md border border-gray-300 ">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-400 ml-3"
            fontSize={20}
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-gray-700 outline-none border-none"
          />
          <button className="bg-[#1F1F1F] cursor-pointer hover:bg-black transition text-white font-semibold px-6 py-3">
            Subscribe
          </button>
        </div>
      </section>

      <footer className="flex flex-col md:flex-row gap-10 p-6 md:p-10 lg:p-20 bg-[#1F1F1F]">
        <div className="space-y-6   flex-3">
          <img src={Logo} />
          <p className="text-[#D1D1D1] max-w-xs">
            Abtik digital your premier destination for luxury and modern
            interior design
          </p>
          <div className="flex gap-2">
            <button className="bg-[#313131] p-1  cursor-pointer">
              <FontAwesomeIcon
                icon={faFacebook}
                fontSize={22}
                className="text-white"
              />
            </button>
            <button className="bg-[#313131] p-1 cursor-pointer">
              <FontAwesomeIcon
                icon={faInstagram}
                fontSize={22}
                className="text-white"
              />
            </button>
            <button className="bg-[#313131] p-1 cursor-pointer">
              <FontAwesomeIcon
                icon={faLinkedin}
                fontSize={22}
                className="text-white"
              />
            </button>
            <button className="bg-[#313131] p-1 cursor-pointer">
              <FontAwesomeIcon
                icon={faTwitter}
                fontSize={22}
                className="text-white"
              />
            </button>
          </div>
        </div>
        <div className="space-y-3  flex-2 ">
          <h2 className="text-white text-xl font-semibold font-1">
            Our Company
          </h2>
          <div className="space-y-2">
            <Link
              className="block hover:text-gray-400 text-[#D1D1D1] font-1 text-base transition-all duration-300 hover:underline "
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="block hover:text-gray-400 text-[#D1D1D1] font-1 text-base transition-all duration-300 hover:underline "
              to={"/"}
            >
              About
            </Link>

            <Link
              className="block hover:text-gray-400 text-[#D1D1D1] font-1 text-base transition-all duration-300 hover:underline "
              to={"/"}
            >
              Services
            </Link>
            <Link
              className="block hover:text-gray-400 text-[#D1D1D1] font-1 text-base transition-all duration-300 hover:underline "
              to={"/"}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-3 ">
          <h2 className="text-xl font-1 font-semibold text-white">Contact </h2>
          <div className="space-y-3">
            <a className="text-[#D1D1D1] transition-all duration-300 hover:underline cursor-pointer hover:text-gray-400 font-1 text-base block">
              info@vastucraft.com
            </a>
            <a className="text-[#D1D1D1] transition-all duration-300 hover:underline cursor-pointer hover:text-gray-400 font-1 text-base block">
              +91 96 5261 236
            </a>
            <a className="text-[#D1D1D1] transition-all duration-300 hover:underline cursor-pointer hover:text-gray-400 font-1 text-base block">
              Design Avenue Cityville, CA 90210 United States
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
