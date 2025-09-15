import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Service from "../sections/Servicesection";
import Testimonial from "../sections/Testimonial";
import Member1 from "../assets/Team/Member1.png";
import Newsletter from "../sections/Newsletter";
import Mainlayout from "../layout/Mainlayout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

function About() {
  const testimonialData = [
    {
      img: "",
      name: "Uma Shankar sharma",
      position: "Director",
    },
    {
      img: "",
      name: "Heera sharma",
      position: "Director",
    },
    {
      img: "",
      name: "Shubham Sharma",
      position: "Lorem ipsum",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content=" VastuCraft blends creativity and Vastu principles to craft beautiful, functional interiors for every lifestyle."
        />
        <meta
          name="keywords"
          content="Vastu design experts , Professional interior design  , Creative interior design solutions"
        />
        <title> About VastuCraft – Interior Design Specialists</title>
      </Helmet>
      <Mainlayout>
        <Hero />
        <Service />
        <Testimonial />

        <section className="p-6 md:p-10 lg:p-20 space-y-6">
          <h2 className="font-1 lg:text-5xl leading-tight text-3xl md:text-4xl font-semibold text-[#1F1F1F] flex items-center gap-3">
            <div className="bg-[#1F1F1F] h-[3px] w-16"></div> Our Team{" "}
            <div className="w-24"></div>
          </h2>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-between">
            {testimonialData?.map((data, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="flex gap-6"
                >
                  <div>
                    <div
                   
                      className="rounded-full w-12 h-12 flex justify-center items-center font-semibold font-1 heading-2 uppercase bg-gray-300 border"
                    >{data?.name?.split(" ")[0][0] +data?.name?.split(" ")[1][0]}</div>
                  </div>
                  <div>
                    <h2 className="text-[#1F1F1F] font-1 font-semibold text-lg">
                      {data?.name}
                    </h2>
                    <h3 className="text-[#545454] font-1 font-medium">
                      {data?.position}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </section>
        </section>

        <Newsletter />
      </Mainlayout>
    </>
  );
}

export default About;
