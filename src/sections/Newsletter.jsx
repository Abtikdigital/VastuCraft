import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Newsletter() {
  return (
    <section className="relative bg-white py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-[#1F1F1F] font-1 font-semibold text-5xl mb-3">
        Subscribe to Our Newsletter for Design Insights
      </h2>

      {/* Description */}
      <p className=" max-w-xl text-[#545454] font-1  font-medium mx-auto mb-12">
        Be the first to discover trends, inspirations, and special offers as we
        bring the world of design directly to your inbox.
      </p>

    
    </section>
  );
}

export default Newsletter;
