import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Image1 from "../assets/Contact/Image1.png";
import Newsletter from "../sections/Newsletter";
import Mainlayout from "../layout/Mainlayout";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/contactApi.js", data);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "We will get back to you shortly!",
        });
        reset();
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong, please try again later!",
      });
    }
  };

  return (
    <Mainlayout>
      <Hero />
      <section className="p-6 md:p-10 lg:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#1F1F1F] p-6 md:p-10">
          <div>
            <img src={Image1} className="h-full w-full" alt="Contact" />
          </div>
          <div className="space-y-6">
            <h2 className="text-white font-semibold text-5xl font-1 md:text-4xl lg:text-5xl leading-tight">
              Contact Us
            </h2>

            {/* Form with validation + axios + sweetalert */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  className="bg-white text-[#939292] font-medium p-2 px-3 w-full outline-none font-1"
                  placeholder="Enter Your Name"
                  {...register("name", { required: "* Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  className="bg-white text-[#939292] font-medium p-2 px-3 w-full outline-none font-1"
                  placeholder="Enter Your Number"
                  {...register("phone", {
                    required: "* Phone number is required",
                    minLength: { value: 10, message: "Must be at least 10 digits" },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <input
                  className="bg-white text-[#939292] p-2 px-3 font-medium w-full outline-none font-1"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: "* Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <textarea
                  className="bg-white text-[#939292] p-2 font-medium px-3 w-full outline-none font-1"
                  placeholder="Enter Your Message"
                  rows={4}
                  {...register("message", { required: "* Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-white text-[#1F1F1F] py-2.5 px-6 text-base font-semibold font-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Newsletter />
    </Mainlayout>
  );
}

export default Contact;
