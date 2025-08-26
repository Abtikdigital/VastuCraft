import React from "react";

function services() {
  const services = [
    { title: "Interior Design", desc: "Modern and aesthetic home interiors." },
    { title: "Office Spaces", desc: "Functional and stylish workspaces." },
    { title: "Custom Furniture", desc: "Tailor-made furniture for your needs." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-2 text-gray-600">We offer complete solutions for your dream space.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default services;

