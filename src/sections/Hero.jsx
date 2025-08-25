import React from "react";
import Image1 from "../assets/Hero/Image1.png";
import Image2 from "../assets/Hero/Image2.png";
function Hero() {
  return (
    <section className="p-4 md:p-12 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between">
        <div className="space-y-12  col-span-2">
          <h1 className="font-1 heading-1">Interior Design</h1>
          <p className="paragraph-1">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>
        </div>
        <div>
          <img src={Image1} className="h-72" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between  ">
        <div className="space-y-6">
          <div>
            <button className="primary-button !w-fit">Start A Project</button>
          </div>

          <div className="">
            <ul className="flex gap-12 ">
              <li className="space-y-1">
                <h3 className="text-[#545454] text-5xl font-normal ">400+</h3>
                <p className="paragraph-1 ">Project Complete</p>
              </li>
              <li className="space-y-1">
                <h3 className="text-[#545454] text-5xl font-normal ">600+</h3>
                <p className="paragraph-1 ">Satisfied Clients</p>
              </li>
              <li className="space-y-1">
                <h3 className="text-[#545454] text-5xl font-normal ">100+</h3>
                <p className="paragraph-1 ">Unique Styles</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <img src={Image2} className="h-72" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
