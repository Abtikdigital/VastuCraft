import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/Hero/Image1.png";
import Image2 from "../assets/Hero/Image2.png";
import { useDispatch } from "react-redux";

function Hero() {
  const [inView, setInView] = useState({ top: false, bottom: false });
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const dispatch=useDispatch()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === topRef.current && entry.isIntersecting) {
            setInView((prev) => ({ ...prev, top: true }));
          }
          if (entry.target === bottomRef.current && entry.isIntersecting) {
            setInView((prev) => ({ ...prev, bottom: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (topRef.current) observer.observe(topRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => {
      if (topRef.current) observer.unobserve(topRef.current);
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  }, []);

  return (
    <section className="p-6 md:p-10 lg:p-20 space-y-6 overflow-hidden">
      {/* Top Section */}
      <div
        ref={topRef}
        className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-8 overflow-hidden"
      >
        <motion.div
          className="space-y-6 md:space-y-12 col-span-2"
          initial={{ x: -100, opacity: 0 }}
          animate={inView.top ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-1 heading-1">Interior Design</h1>
          <p className="paragraph-1">
            Transform your living spaces with designs that blend timeless elegance and modern innovation. At VASTUCRAFT OVERCEAS PRIVATE LIMITED, we craft interiors that are not only aesthetically pleasing but also Vastu-compliant, ensuring balance, positivity, and harmony in every corner of your home or workspace.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={inView.top ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={Image1}
            className="h-60 md:h-72 object-contain"
            alt="Design"
          />
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div
        ref={bottomRef}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 overflow-hidden"
      >
        {/* Left - Button + Stats */}
        <motion.div
          className="space-y-6"
          initial={{ y: 100, opacity: 0 }}
          animate={inView.bottom ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <button className="primary-button !w-fit  text-[#1F1F1F] py-2.5 px-6 text-base font-semibold font-1" onClick={()=>{
              dispatch({type:"open"})
            }}>
              Start A Project
            </button>
          </div>

          {/* Stats - Responsive */}
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <li className="space-y-1 text-center sm:text-left border p-1 rounded-sm flex justify-center items-center flex-col">
                <h3 className="text-[#545454] text-4xl md:text-5xl font-normal">
                  150+
                </h3>
                <p className="paragraph-1">Project Complete</p>
              </li>
              <li className="space-y-1 text-center sm:text-left border p-1 rounded-sm flex flex-col justify-center items-center">
                <h3 className="text-[#545454] text-4xl md:text-5xl font-normal">
                  120+
                </h3>
                <p className="paragraph-1">Happy Clients</p>
              </li>
              <li className="space-y-1 text-center sm:text-left border p-1 rounded-sm flex flex-col justify-center items-center">
                <h3 className="text-[#545454] text-4xl md:text-5xl font-normal">
                  10+
                </h3>
                <p className="paragraph-1">Year of experience</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={inView.bottom ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={Image2}
            className="h-60 md:h-72 object-contain"
            alt="Interior"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
