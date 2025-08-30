// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function Testimonial() {
//   const testimonials = [
//     {
//       name: "Sophie Carter",
//       location: "New York, USA",
//       text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
//       image: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//     {
//       name: "James Bennett",
//       location: "Toronto, Canada",
//       text: "Exceptional service! From the initial consultation to the final touches, your team delivered professionalism and a keen eye for design. Highly recommend!",
//       image: "https://randomuser.me/api/portraits/men/44.jpg",
//     },
//     {
//       name: "Aditi Sharma",
//       location: "Mumbai, India",
//       text: "Absolutely loved the interiors! They understood my vision perfectly and created something beyond expectations.",
//       image: "https://randomuser.me/api/portraits/women/32.jpg",
//     },
//     {
//       name: "Rahul Mehta",
//       location: "Delhi, India",
//       text: "Professional team and stunning results. My office looks fantastic!",
//       image: "https://randomuser.me/api/portraits/men/36.jpg",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   const prevTestimonial = () => {
//     setIndex(index === 0 ? testimonials.length - 2 : index - 1);
//   };

//   const nextTestimonial = () => {
//     setIndex(index >= testimonials.length - 2 ? 0 : index + 1);
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 relative">

//         {/* Top: Image + Text */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Left Image */}
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//               alt="Interior Design"
//               className="rounded-xl shadow-lg"
//             />
//           </div>

//           {/* Right Text */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               What Our Customers <br /> Say About Us
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Real feedback from clients who experienced our design expertise.
//               Their words inspire us to keep creating beautiful spaces.
//             </p>
//           </div>
//         </div>

//         {/* Testimonial Cards - Positioned between image and text */}
//         <div className="mt-[-180px] flex justify-center gap-6 relative z-10">
//           {testimonials.slice(index, index + 2).map((t, i) => (
//             <div
//               key={i}
//               className="bg-black text-white p-8 rounded-xl shadow-xl max-w-sm w-full"
//             >
//               <p className="italic mb-6">“{t.text}”</p>
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <div>
//                   <h4 className="font-semibold">{t.name}</h4>
//                   <p className="text-gray-400 text-sm">{t.location}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Carousel Arrows */}
//         <div className="flex justify-center space-x-4 mt-6">
//           <button
//             onClick={prevTestimonial}
//             className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={nextTestimonial}
//             className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonial;
import Image1 from "../assets/Testimonial/Image1.png";
import { useState, useEffect, useRef } from "react";
import ProfileImage1 from "../assets/Testimonial/ProfileImage1.png";
import ProfileImage2 from "../assets/Testimonial/ProfileImage1.png";
import ProfileImage3 from "../assets/Testimonial/ProfileImage1.png";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testmonialData = [
    {
      message:
        "Your design team transformed my space with incredible creativity and precision. I'm thrilled with the results!",
      profile: ProfileImage1,
      name: "Sophie Carter",
      location: "New York, USA",
    },
    {
      message:
        "The professionalism and innovative designs from your team made my home renovation a breeze. Highly recommend!",
      profile: ProfileImage2,
      name: "James Lee",
      location: "San Francisco, USA",
    },
    {
      message:
        "An amazing experience! The attention to detail and unique style exceeded all my expectations.",
      profile: ProfileImage3,
      name: "Emma Brown",
      location: "London, UK",
    },
    {
      message:
        "An amazing experience! The attention to detail and unique style exceeded all my expectations.",
      profile: ProfileImage3,
      name: "Emma Brown",
      location: "London, UK",
    },
  ];

  // On small screens, show 1 card per slide; on large screens, show 2 cards per slide
  const getCardsPerSlide = () => (window.innerWidth < 768 ? 1 : 2);
  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  // Recalculate total slides based on cards per slide
  const totalSlides = Math.ceil(testmonialData.length / cardsPerSlide);

  // Update cards per slide on window resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust currentIndex if it exceeds the new totalSlides after resize
  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(totalSlides - 1);
    }
  }, [totalSlides, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setIsPaused(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setIsPaused(true);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused, totalSlides]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-20 gap-10 relative">
        <div className="space-y-6">
          <img src={Image1} alt="Testimonial background" />
          <div className="flex gap-6">
            <button
              className="bg-[#F1F1F1] p-2 rounded-xs"
              onClick={handlePrev}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                fontSize={25}
                className="text-[#464646]"
              />
            </button>
            <button
              className="bg-[#F1F1F1] p-2 rounded-xs"
              onClick={handleNext}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                fontSize={25}
                className="text-[#464646]"
              />
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-[#1F1F1F] font-1 font-semibold text-5xl">
            What Our Customers Say About Us
          </h2>
        </div>
        <section className="md:top-[30%] md:left-[30%] lg:absolute w-full lg:w-auto">
          <div
            className="relative lg:p-6 bg-white md:max-w-4xl md:mx-auto rounded-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsPerSlide)
                  }%)`,
                }}
              >
                {testmonialData.map((data, index) => (
                  <div
                    key={index}
                    className={`flex-none w-[calc(100%-20px)] md:w-[calc(50%-24px)] min-h-96 bg-[#1F1F1F] p-6 md:p-6 space-y-6`}
                  >
                    <h2 className="text-white text-6xl font-semibold font-serif">
                      “
                    </h2>
                    <p className="text-white text-lg">{data.message}</p>
                    <section className="flex items-center gap-6">
                      <div>
                        <img
                          src={data.profile}
                          className="w-16 h-16 rounded-full object-cover"
                          alt={`${data.name}'s profile`}
                        />
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-xl">
                          {data.name}
                        </h2>
                        <h3 className="text-[#929292] font-semibold">
                          {data.location}
                        </h3>
                      </div>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Testimonial;
