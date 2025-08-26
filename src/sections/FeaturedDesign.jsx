import React from "react";

function FeaturedDesign() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        <img 
          src="https://source.unsplash.com/600x400/?interior,design" 
          alt="Featured Design" 
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Featured Project</h2>
          <p className="mt-4 text-gray-600">
            Our latest project blends elegance and comfort with cutting-edge design solutions.
          </p>
          <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
            View Project
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDesign;
