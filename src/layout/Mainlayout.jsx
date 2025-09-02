import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { X } from "lucide-react";

function Mainlayout(props) {
  const { isOpen } = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/inquiryApi.js", data);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Inquiry Submitted",
          text: "We will get back to you shortly!",
        });
        reset();
        dispatch({ type: "close" }); // close after submit
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
    <>
      <Navbar />
      {props?.children}
      <Footer />

      {isOpen && (
        <div className="flex fixed z-[9999999] inset-0 justify-center items-center w-screen h-screen bg-black/50">
          <div className="bg-white shadow-xl p-8 w-[90%] md:w-[500px] border border-gray-200 relative">
            
            {/* X Close Button */}
            <button
              onClick={() => dispatch({ type: "close" })}
              className="absolute top-5 right-3 cursor-pointer text-gray-600 hover:text-black text-xl font-bold border p-1"
            >
              <X/>
            </button>

            <h2 className="text-2xl font-semibold text-center mb-6">
              Fill The Inquiry
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", { required: "* Name is required" })}
                  className="w-full border p-3 outline-none font-medium text-gray-700"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Enter Your Number"
                  {...register("phone", {
                    required: "* Phone number is required",
                    minLength: { value: 10, message: "Must be at least 10 digits" },
                  })}
                  className="w-full border p-3 outline-none font-medium text-gray-700"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: "* Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full border p-3 outline-none font-medium text-gray-700"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Enter Your Message"
                  rows="4"
                  {...register("message")}
                  className="w-full border p-3 outline-none font-medium text-gray-700"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 font-semibold cursor-pointer hover:bg-gray-800 transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Mainlayout;
