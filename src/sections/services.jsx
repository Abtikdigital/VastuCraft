import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image1 from "../assets/OurServices/Interior design icon.png";
import Image2 from "../assets/OurServices/Lighting design icon.png";
import Image3 from "../assets/OurServices/Outdoor design icon.png";

function Services() {
  const services = [
    {
      title: "Interior Design",
      desc: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
      img: Image1,
      direction: "left", // first: left → right
    },
    {
      title: "Office Spaces",
      desc: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
      img: Image2,
      direction: "up", // second: bottom → up
    },
    {
      title: "Custom Furniture",
      desc: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
      img: Image3,
      direction: "right", // third: right → left
    },
  ];

  // Reusable animation wrapper
  const FadeIn = ({ children, direction = "up", delay = 0 }) => {
    const { ref, inView } = useInView({
      triggerOnce: false, // replay on scroll up/down
      threshold: window.innerWidth < 768 ? 0.1 : 0.2, // Lower threshold for small screens
    });

    const variants = {
      hidden: {
        opacity: 0,
        x: direction === "left" ? -20 : direction === "right" ? 20 : 0, // Reduced translation
        y: direction === "up" ? 20 : direction === "down" ? -20 : 0, // Reduced translation
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" }, // Smoother transition
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        style={{ overflow: "hidden" }} // Prevent overflow in animation
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section className="py-12 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-[#1F1F1F] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight flex items-center gap-3">
          <div className="bg-[#1F1F1F] h-[3px] w-12 sm:w-16"></div>Our Services
        </h2>
        <p className="mt-2 text-[#545454] text-sm sm:text-base">
          We offer complete solutions for your dream space.
        </p>

        {/* Services Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <FadeIn
              key={i}
              direction={service.direction}
              delay={i * 0.2} // Reduced stagger delay for smoother experience
            >
              <div className="p-4 sm:p-6 flex gap-3 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
                <div>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-12 sm:h-14 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[#545454] text-sm sm:text-base">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;