import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Testimonial from "../sections/Testimonial";
import FeatureDesign from "../sections/FeaturedDesign";
import Hero from "../sections/Hero";
import Image1 from "../assets/Services/Image1.png";
import Image2 from "../assets/Services/Image1.png";
import Image3 from "../assets/Services/Image1.png";
import Mainlayout from "../layout/Mainlayout";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const disp = useDispatch();

  const servicesData = [
    {
      img: Image1,
      title: "Residential Interior Design",
      description: "Transform your home into a beautiful and functional space. Our expert designers create personalized interiors that reflect your unique style and needs, from concept to completion.",
      animation: { x: [-100, 0], opacity: [0, 1] }, // left → right
    },
    {
      img: Image2,
      title: "Office & Commercial Interiors",
      description: "Create a professional and inspiring workspace. We design commercial spaces that enhance productivity, brand identity, and employee well being, tailored to your business.",
      animation: { y: [100, 0], opacity: [0, 1] }, // bottom → top
    },
    {
      img: Image3,
      title: "Space Planning & 3D Visualization",
      description: "Visualize your dream space before it's built. Our detailed space planning and realistic 3D visualizations help you see the potential of your interior, ensuring every detail is perfect.",
      animation: { y: [-100, 0], opacity: [0, 1] }, // top → bottom
    },
  ];

  return (
    <Mainlayout>
      <Hero />
      <section className="p-6 md:p-10 lg:p-20 space-y-6">
        <h2 className="flex gap-3 font-1 font-semibold text-3xl md:text-4xl lg:text-5xl items-center text-[#1F1F1F] font-1">
          <div className="w-24 h-[3px] bg-[#1F1F1F]"></div>Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData?.map((data, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? data.animation : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=" p-6 space-y-3"
                style={{
                   background: "linear-gradient(319.78deg, #C19432 13.44%, #FAE45F 45.57%, #DEBC49 77.09%)",
                }}
              >
                <div>
                  <img src={data?.img} alt={data?.title} />
                </div>
                <h2 className="text-white font-semibold font-1">
                  {data?.title}
                </h2>
                <p className="text-[#939292] font-1 font-medium min-h-12">
                  {data?.description}
                </p>
                <div>
                  <button
                    onClick={() => {
                      disp({ type: "open" });
                    }}
                    className="bg-white px-6 py-3 text-[#1F1F1F] font-1 font-semibold hover:bg-[#F1F1F1] cursor-pointer"
                  >
                    Request a Service
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <FeatureDesign />
      <Testimonial />
    </Mainlayout>
  );
}

export default Services;
