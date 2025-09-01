import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Image1 from "../assets/Contact/Image1.png";
import Newsletter from "../sections/Newsletter";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="p-6 md:p-10 lg:p-20  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#1F1F1F] p-6 md:p-10">
          <div>
            <img src={Image1} className="h-full w-full" />
          </div>
          <div className="space-y-6">
            <h2 className="text-white font-semibold text-5xl font-1  font-1 md:text-4xl lg:text-5xl   font-1 leading-tight">
              Contact Us
            </h2>
            <form className="space-y-6">
              <div>
                <input className="bg-white text-[#939292] font-medium p-2 px-3 w-full outline-none font-1" placeholder="Enter Your Name" />
              </div>
              <div>
                <input className="bg-white text-[#939292] font-medium p-2 px-3 w-full outline-none font-1" placeholder="Enter Your Number" />
              </div>
              <div>
                <input className="bg-white text-[#939292] p-2 px-3 font-medium w-full outline-none font-1" placeholder="Enter Your Email" />
              </div>
              <div>
                <textarea className="bg-white  text-[#939292] p-2 font-medium px-3 w-full outline-none font-1 " placeholder="Enter Your Message" rows={4}></textarea>
              </div>
              <div>
                <button className="bg-white text-[#1F1F1F] py-2.5 px-6 text-base font-semibold font-1">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Newsletter/>
      <Footer />
    </>
  );
}

export default Contact;
