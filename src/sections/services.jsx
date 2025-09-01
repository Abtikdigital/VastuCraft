import React from "react";
import Image1 from "../assets/OurServices/Interior design icon.png";
import Image2 from "../assets/OurServices/Lighting design icon.png";
import Image3 from "../assets/OurServices/Outdoor design icon.png";
function services() {
  const services = [
    {
      title: "Interior Design",
      desc: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere ",
      img: Image1,
    },
    {
      title: "Office Spaces",
      desc: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
      img: Image2,
    },
    {
      title: "Custom Furniture",
      desc: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere ",
      img: Image3,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-4xl font-semibold font-1 text-[#1F1F1F] flex  items-center gap-3">
          <div className="bg-[#1F1F1F] h-[3px] w-16"></div>Our Services
        </h2>
        <p className="mt-2 text-gray-600">
          We offer complete solutions for your dream space.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-6   transition flex  gap-3">
              <div>
                <img src={service?.img} className="h-14" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default services;
