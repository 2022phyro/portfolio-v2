"use client";
import { experiences } from "@/data";
import { Diamond, Minus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(
    Object.keys(experiences)[0]
  );

  return (
    <section
      id="experience"
      className="relative flex flex-col py-10 px-30 sm:px-10 items-center font-mulish justify-start h-screen bg-background text-primary"
    >
      {/* Background circular gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-primary/15 to-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary/15 to-primary/50 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-2xl"></div>
      </div>
      <h2 className="text-3xl font-bold mt-4 self-start text-text">Timeline</h2>
      <div className="flex flex-row flex-wrap justify-evenly items-start gap-10 mt-8 w-full">
        <ul className="flex flex-col h-full">
          {Object.keys(experiences).map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveExperience(item)}
              className={`text-lg font-medium flex flex-row gap-2 p-4 bg-transparent border border-r-0 border-t-0 border-b-0 text-primary items-center pl-2 -ml-[21.3px] cursor-pointer transition-colors duration-300 hover:text-secondary ${
                activeExperience === item
                  ? "border-l-3 border-primary font-bold"
                  : "border-l-3 border-secondary"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="relative z-10 font-mulish space-y-5 h-full w-[600px] border border-secondary p-5">
          <div className="space-y-4">
            <div className="space-y-3">
              {experiences[activeExperience as keyof typeof experiences]?.map(
                (experience, index) => (
                  <div key={index} className="pl-4 py-2">
                    <h2 className="text-lg font-semibold font-ms text-text flex flex-row gap-2 items-center">
                      <span>{experience.role}</span>
                      <Link
                        href={experience.site}
                        className="text-primary underline"
                      >
                        @{activeExperience}
                      </Link>
                    </h2>
                    <p className="text-sm text-text-alt mb-2 flex flex-row gap-2 items-center">
                      <span>{experience.start}</span>
                      <Minus strokeWidth={2} size={14} />
                      <span>{experience.end}</span>
                    </p>
                    <p className="text-base text-text leading-relaxed">
                      {experience.description}
                    </p>
                    {experience.bulletPoints && (
                      <ul className="flex flex-wrap gap-2 mt-3">
                        {experience.bulletPoints.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="px-2 text-text text-medium font-medium flex items-center gap-2"
                          >
                            <Diamond
                              strokeWidth={1}
                              size={12}
                              className="mt-1"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
