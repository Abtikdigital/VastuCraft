import React from "react";
import Image1 from "../assets/FeaturedDesign/Image1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faPaintBrush,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const processSteps = [
  {
    icon: faRocket,
    title: "Start Project",
    description:
      "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.",
  },
  {
    icon: faPaintBrush,
    title: "Design Phase",
    description:
      "Collaborate with our team to bring your ideas to life. We craft stunning designs tailored to your unique needs.",
  },
  {
    icon: faCheckCircle,
    title: "Complete Project",
    description:
      "Review and finalize your project. We ensure every detail is perfect before delivering your dream design.",
  },
];

function ProcessMap() {
  return (
    <section className="p-6 md:p-10 lg:p-20 bg-white grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div className="space-y-10">
        <h2 className="text-[#1F1F1F] font-1 font-semibold text-4xl">
          Designing Your Dream in Three Simple Steps
        </h2>
        {processSteps.map((step, index) => (
          <section
            key={index}
            className="flex justify-between  gap-3  items-start md:items-center"
          >
            <div className="flex flex-col items-center gap-3">
              <div>
                <span className="rounded-full p-2 bg-[#1F1F1F]">
                  <FontAwesomeIcon icon={step.icon} className="text-white" />
                </span>
              </div>
              {index < processSteps.length - 1 && (
                <div className="h-20 w-0.5 bg-[#9B9B9B]"></div>
              )}
            </div>
            <div className="">
              <h2 className="text-[#1F1F1F] font-bold font-1 text-lg">
                {step.title}
              </h2>
              <p className="font-1 text-[#545454] font-medium">
                {step.description}
              </p>
            </div>
          </section>
        ))}
      </div>
      <div>
        <img src={Image1} alt="Featured Design" />
      </div>
    </section>
  );
}

export default ProcessMap;
