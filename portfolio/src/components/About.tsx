"use client";

import Image from "next/image";
import ThreeDButton from "./button";
import { roles } from "@/data";
import { Computer, Monitor } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen h-full flex sm:space-x-10 items-start justify-evenly p-30 sm:px-10 overflow-hidden"
    >
      {/* Background circular gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-accent rounded-full blur-3xl"></div>
        {/* <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-primary/15 to-secondary rounded-full blur-3xl"></div> */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary/15 to-primary/50 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 font-mulish space-y-5 h-full">
        <h2 className="text-3xl font-bold">What I do</h2>
        <ul className="flex md:flex-col flex-row md:gap-10 gap-4 border border-r-0 border-t-0 border-l-2 border-b-0 border-secondary py-4">
          {roles.map((role, index) => (
            <li
              key={index}
              className="text-lg flex flex-row gap-2 bg-transparent text-primary items-center pl-2 -ml-[21.3px]"
            >
              <Monitor size={24} strokeWidth={1} fill="#f5f5f5" className="bg-inherit" />
              {role}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10">
      </div>
    </section>
  );
};

export default About;
