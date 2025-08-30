import React from "react";
import Image1 from "../assets/Hero/Image1.png";
import Image2 from "../assets/Hero/Image2.png";

function Hero() {
  return (
    <section className="p-6 md:p-10 lg:p-20 space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-8">
        <div className="space-y-6 md:space-y-12 col-span-2">
          <h1 className="font-1 heading-1">Interior Design</h1>
          <p className="paragraph-1">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={Image1} className="h-60 md:h-72 object-contain" alt="Design" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left - Button + Stats */}
        <div className="space-y-6">
          <div>
            <button className="primary-button !w-fit">Start A Project</button>
          </div>

          {/* Stats - Responsive */}
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <li className="space-y-1 text-center sm:text-left border p-1 rounded-sm flex justify-center items-center flex-col">
                <h3 className="text-[#545454] text-4xl md:text-5xl font-normal">
                  400+
                </h3>
                <p className="paragraph-1">Project Complete</p>
              </li>
              <li className="space-y-1 text-center sm:text-left border p-1 rounded-sm flex flex-col justify-center items-center">
                <h3 className="text-[#545454] text-4xl md:text-5xl font-normal">
                  600+
                </h3>
                <p className="paragraph-1">Satisfied Clients</p>
              </li>
              <li className="space-y-1 text-center sm:text-left border p-1 rounded-sm flex flex-col justify-center items-center">
                <h3 className="text-[#545454] text-4xl md:text-5xl font-normal">
                  100+
                </h3>
                <p className="paragraph-1">Unique Styles</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center md:justify-end">
          <img src={Image2} className="h-60 md:h-72 object-contain" alt="Interior" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
