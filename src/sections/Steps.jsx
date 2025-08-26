import React from "react";

function Steps() {
  const steps = [
    { num: "01", title: "Consultation", desc: "Discuss your ideas & needs with our experts." },
    { num: "02", title: "Design Process", desc: "We craft personalized designs for your space." },
    { num: "03", title: "Implementation", desc: "Turning your dream design into reality." },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Designing Your Dream in Three Simple Steps</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-gray-900">{step.num}</h3>
              <h4 className="mt-4 text-xl font-semibold">{step.title}</h4>
              <p className="mt-2 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
