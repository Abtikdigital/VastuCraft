import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Logo1.png";
import { ArrowRight } from "lucide-react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

function Footer() {
  const [loading, setLoading] = useState(false); // 🔹 Loader state

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = async (data) => {
    if (loading) return; // 🔹 Prevent double submit
    setLoading(true);

    try {
      const res = await axios.post("/api/emailSubscribingApi.js", data);

      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Subscribed Successfully!",
          text: "Thank you for subscribing to our newsletter.",
        });
        reset();
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Subscription Failed",
        text: "Something went wrong, please try again later.",
      });
    } finally {
      setLoading(false); // 🔹 Reset loader
    }
  };

  return (
    <section className="relative">
      {/* Input box overlapping footer */}
      <section className="w-full -top-8 mb-4 md:mb-0 flex justify-center items-center md:absolute px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row items-center w-full max-w-xl  bg-white shadow-md border border-gray-300 rounded-md overflow-hidden"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-400 pl-3 md:pl-0 md:ml-3"
            fontSize={20}
          />
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "* Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="flex-1 px-4 py-3 text-gray-700 outline-none border-none"
            disabled={loading}
          />

          {/* Button wrapper keeps row alignment */}
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center py-2.5  duration-300 transition-all  bg-[linear-gradient(319.78deg,#c19432_13.44%,#fae45f_45.57%,#debc49_77.09%)]
    shadow-[inset_0_0_0_2px_#f7e05d,inset_3px_3px_6px_#c19432]

    hover:bg-[linear-gradient(139.78deg,#c19432_13.44%,#fae45f_45.57%,#debc49_77.09%)]
    hover:shadow-[inset_0_0_0_2px_#c19432,inset_-3px_-3px_6px_#debc49] px-6 text-base font-1  cursor-pointer font-semibold
        ${loading ? "bg-gray-400 cursor-not-allowed" : ""}
      `}
          >
            {/* Desktop text */}
            <span className="hidden md:block">
              {loading ? "Submitting..." : "Subscribe"}
            </span>

            {/* Mobile arrow */}
            <span className="block md:hidden">
              {loading ? "..." : <ArrowRight className="w-5 h-5 text-white" />}
            </span>
          </button>
        </form>
      </section>

      {/* Validation error */}
      {errors.email && (
        <p className="text-red-500 text-sm text-center mt-2">
          {errors.email.message}
        </p>
      )}

      {/* Footer main */}
      <footer className="flex flex-col md:flex-row gap-10 p-6 md:p-10 lg:p-20 bg-[#1F1F1F]">
        <div className="space-y-6 flex-3">
          <img src={Logo} alt="Logo" />
          <p className="text-[#D1D1D1] max-w-xs">
            Vastucraft Overseas Your trusted destination for luxury and modern
            interior design. We craft timeless residential spaces, dynamic
            commercial interiors, and innovative 3D concepts with premium
            quality materials.
          </p>
          <div className="flex gap-2">
            <button className="bg-[#313131] p-1 cursor-pointer">
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

        <div className="space-y-3 flex-2">
          <h2 className="text-white text-xl font-semibold font-1">
            Our Company
          </h2>
          <div className="space-y-2">
            <Link
              className="block hover:text-gray-400 text-[#D1D1D1] font-1 text-base transition-all duration-300 hover:underline"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="block hover:text-gray-400 text-[#D1D1D1] font-1 text-base transition-all duration-300 hover:underline"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="block hover:text-gray-400 text-[#D1D1D1] font-1 text-base transition-all duration-300 hover:underline"
              to={"/services"}
            >
              Services
            </Link>
            <Link
              className="block hover:text-gray-400 text-[#D1D1D1] font-1 text-base transition-all duration-300 hover:underline"
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex-1 space-y-3">
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
