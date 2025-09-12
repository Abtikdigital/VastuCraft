import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image1 from "../assets/Steps/Image1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function Steps() {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const faqs = [
    {
      question: "How do you ensure the design reflects my personal style?",
      answer:
        "We collaborate closely with you, understanding your preferences, lifestyle, and vision, to create designs that feel truly personal.",
    },
    {
      question: "What is the typical timeline for a design project?",
      answer:
        "Timelines vary by project size, but we follow a structured process to ensure quality while delivering within agreed schedules.",
    },
    {
      question: "Can you work within my budget?",
      answer:
        "Absolutely! We customize our designs to fit your budget, offering flexible options and transparent pricing. Our team uses premium materials and furnishings to maximize value without compromising style.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="p-8 md:p-14 bg-[#1f1f1f] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
    >
      {/* Left Image */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center items-center"
      >
        <img
          src={Image1 || "https://via.placeholder.com/600x400"}
          alt="Interior design inspiration"
          className="w-full"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x400";
          }}
        />
      </motion.div>

      {/* Right Content */}
      <div className="flex items-center">
        <div className="space-y-10 w-full">
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white font-1 font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight"
          >
            Designing Your Dream With Brilliance
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-[#545454] paragraph-1 font-1"
          >
            Transform your spaces with bespoke interior designs that reflect your unique style and aspirations. Each project is crafted with precision, creativity, and brilliance to deliver an unforgettable living experience.
          </motion.p>

          {/* FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.2,
                  ease: "easeOut",
                }}
                className="border-b border-gray-200 pb-4 last:border-b-0"
              >
                <h3
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center text-white font-1 font-semibold text-lg md:text-xl cursor-pointer transition-colors duration-200 hover:text-gray-300"
                >
                  <span>{faq.question}</span>
                  <FontAwesomeIcon
                    icon={openFaqIndex === index ? faMinus : faPlus}
                    className="text-[#1F1F1F] text-lg"
                  />
                </h3>
                <div
                  style={{
                    maxHeight: openFaqIndex === index ? "300px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p className="mt-3 paragraph-1 text-[#545454] font-1">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
