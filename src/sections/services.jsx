import React from "react";
import { Paintbrush, Home, Lightbulb, Sofa } from "lucide-react"; 

function services() {
  const services = [
    { icon: <Paintbrush size={32} />, title: "Customized Design", desc: "Tailored solutions for your style & needs." },
    { icon: <Home size={32} />, title: "Space Planning", desc: "Maximizing functionality with elegance." },
    { icon: <Lightbulb size={32} />, title: "Lighting Design", desc: "Creating moods with perfect illumination." },
    { icon: <Sofa size={32} />, title: "Furniture Selection", desc: "Blending comfort and aesthetics." },
  ];

  return (
    <section className="py-16 px-6 md:px-12 text-center space-y-12">
      <h2 className="text-3xl font-semibold">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="p-6 shadow-md rounded-2xl bg-white hover:shadow-lg transition">
            <div className="flex justify-center mb-4 text-[#1F1F1F]">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default services;
