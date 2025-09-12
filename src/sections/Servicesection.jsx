import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image1 from "../assets/OurServices/Interior design icon.png";
import Image2 from "../assets/OurServices/Lighting design icon.png";
import Image3 from "../assets/OurServices/Outdoor design icon.png";

function Servicesection() {
  const services = [
    {
      title: "Interior Design",
      desc: "Elegant, Vastu aligned designs that blend style, comfort, and harmony, transforming every corner into a welcoming space",
      img: Image1,
    },
    {
      title: "Office Spaces",
      desc: "Smart, functional layouts that inspire focus, creativity, and productivity, while making workplaces more efficient and modern",
      img: Image2,
    },
    {
      title: "Custom Furniture",
      desc: "Custom designed furniture crafted for durability, uniqueness, and timeless style, giving interiors a touch of elegance",
      img: Image3,
    },
  ];

  // Reusable FadeIn animation (no directional movement)
  const FadeIn = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: window.innerWidth < 768 ? 0.1 : 0.2,
    });

    const variants = {
      hidden: { opacity: 0, y: 20 }, // subtle bottom → up fade
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section className="py-12 sm:py-20 bg-[#1f1f1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight flex items-center gap-3">
          <div className="bg-[#1F1F1F] h-[3px] w-12 sm:w-16"></div>Our Services
        </h2>
        <p className="mt-2 text-[#545454] text-sm sm:text-base">
          We offer complete solutions for your dream space.
        </p>

        {/* Services Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.2}>
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

export default Servicesection;
