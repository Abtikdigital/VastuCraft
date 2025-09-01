import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Image1 from "../assets/Contact/Image1.png";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="p-6 md:p-10 lg:p-20  ">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1F1F1F] p-10">
          <div>
            <img src={Image1} />
          </div>
          <div>
            <h2 className="text-white font-semibold text-5xl font-1">
              Contact Us
            </h2>
            <form>
              <div>
                <input className="bg-white text-[#939292] p-2" placeholder="Enter Your Name" />
              </div>
              <div>
                <input />
              </div>
              <div>
                <input />
              </div>
              <div>
                <textarea></textarea>
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
