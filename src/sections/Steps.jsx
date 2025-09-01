import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image1 from "../assets/Steps/Image1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function Steps() {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  const faqs = [
    {
      question: "How do you ensure the design reflects my personal style?",
      answer:
        "We start with a detailed consultation to understand your preferences, lifestyle, and vision. Our designers then create customized mood boards and 3D renderings, ensuring every detail aligns with your unique style.",
    },
    {
      question: "What is the typical timeline for a design project?",
      answer:
        "Timelines vary based on project scope, but a standard residential project typically takes 8-12 weeks from concept to completion. We provide a detailed schedule during the planning phase to keep everything on track.",
    },
    {
      question: "Can you work within my budget?",
      answer:
        "Absolutely! We tailor our designs to fit your budget, offering flexible options and transparent pricing. Our team sources high-quality materials and furnishings to maximize value without compromising on style.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  // Animation variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Hook to trigger animation only once when in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="p-8 md:p-14 bg-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
    >
      {/* Left Image */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex justify-center items-center">
          <img
            src={Image1 || "https://via.placeholder.com/600x400"}
            alt="Interior design inspiration"
            className="w-full"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x400";
            }}
          />
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="flex items-center"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="space-y-10 w-full">
          {/* Heading */}
          <motion.h2
            variants={fadeRight}
            className="text-[#1F1F1F] font-1 font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight"
          >
            Designing Your Dream With Brilliance
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            className="text-[#545454] paragraph-1 font-1"
          >
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations, crafted with precision and brilliance
            for an unforgettable living experience.
          </motion.p>

          {/* FAQs */}
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="border-b border-gray-200 pb-4 last:border-b-0"
              >
                <h3
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center text-[#1F1F1F] font-1 font-semibold text-lg md:text-xl cursor-pointer transition-colors duration-200 hover:text-[#3a3a3a]"
                >
                  <span>{faq.question}</span>
                  <FontAwesomeIcon
                    icon={openFaqIndex === index ? faMinus : faPlus}
                    className="text-[#1F1F1F] text-lg"
                  />
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="mt-3 paragraph-1 text-[#545454] font-1">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Steps;
