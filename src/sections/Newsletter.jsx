import React from "react";

function Newsletter() {
  return (
    <section className="relative bg-white py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-3">
        Subscribe to Our Newsletter <br /> for Design Insights
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Be the first to discover trends, inspirations, and special offers as we
        bring the world of design directly to your inbox.
      </p>

      {/* Input box overlapping footer */}
      <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[80%] w-full max-w-lg">
        <form className="flex bg-white shadow-lg rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
