import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Service from "../sections/services";
import Testimonial from "../sections/Testimonial";
import Member1 from "../assets/Team/Member1.png";
function About() {
  const testimonialData = [
    {
      img: Member1,
      name: "Lorem ipsum",
      position: "Lorem ipsum",
    },
    {
      img: Member1,
      name: "Lorem ipsum",
      position: "Lorem ipsum",
    },
    {
      img: Member1,
      name: "Lorem ipsum",
      position: "Lorem ipsum",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Testimonial />
      <section className="p-6  md:p-10 lg:p-20 space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold font-1 text-[#1F1F1F] flex  items-center gap-3">
          <div className="bg-[#1F1F1F] h-[3px] w-16"></div> Our Team{" "}
          <div className="w-24"></div>
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-between">
          {testimonialData?.map((data) => (
            <div className="flex gap-6">
              <div>
                <img src={data?.img} className="rounded-full w-12 h-12" />
              </div>
              <div>
                <h2 className="text-[#1F1F1F] font-1 font-semibold text-lg">
                  {data?.name}
                </h2>
                <h3 className="text-[#545454] font-1 font-medium">
                  {data?.position}
                </h3>
              </div>
            </div>
          ))}
        </section>
      </section>

      <Footer />
    </>
  );
}

export default About;
