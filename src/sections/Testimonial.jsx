import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimonial() {
  const testimonials = [
    {
      name: "Sophie Carter",
      location: "New York, USA",
      text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "James Bennett",
      location: "Toronto, Canada",
      text: "Exceptional service! From the initial consultation to the final touches, your team delivered professionalism and a keen eye for design. Highly recommend!",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Aditi Sharma",
      location: "Mumbai, India",
      text: "Absolutely loved the interiors! They understood my vision perfectly and created something beyond expectations.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Rahul Mehta",
      location: "Delhi, India",
      text: "Professional team and stunning results. My office looks fantastic!",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex(index === 0 ? testimonials.length - 2 : index - 1);
  };

  const nextTestimonial = () => {
    setIndex(index >= testimonials.length - 2 ? 0 : index + 1);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Top: Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Interior Design"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers <br /> Say About Us
            </h2>
            <p className="text-gray-600 text-lg">
              Real feedback from clients who experienced our design expertise.  
              Their words inspire us to keep creating beautiful spaces.
            </p>
          </div>
        </div>

        {/* Testimonial Cards - Positioned between image and text */}
        <div className="mt-[-180px] flex justify-center gap-6 relative z-10">
          {testimonials.slice(index, index + 2).map((t, i) => (
            <div
              key={i}
              className="bg-black text-white p-8 rounded-xl shadow-xl max-w-sm w-full"
            >
              <p className="italic mb-6">“{t.text}”</p>
              <div className="flex items-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrows */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
