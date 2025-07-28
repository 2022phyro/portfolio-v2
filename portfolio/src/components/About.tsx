"use client";

import Image from "next/image";
import ThreeDButton from "./button";
import { roles, technologies } from "@/data";
import { Computer, Diamond, Dot, Monitor } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen h-full flex sm:space-x-10 items-start justify-evenly px-30 py-10 sm:px-10 overflow-hidden"
    >
      {/* Background circular gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-accent rounded-full blur-3xl"></div>
        {/* <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-primary/15 to-secondary rounded-full blur-3xl"></div> */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary/15 to-primary/50 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-[550px] z-10 font-mulish flex flex-col items-center space-y-5 h-full">
        <h2 className="text-3xl font-bold mt-4">So I...</h2>
        <div className="min-w-100 w-auto flex flex-col gap-4">
          <p>
            began programming in 2022, fresh out of high school and trying to
            figure out what happens when we type google.com. Since then, I've
            been on a journey of learning and building, focusing on backend
            engineering.
          </p>
          <p>
            When I'm not writing code, you can find me writing poetry, short
            stories, reading Igbo history, and keeping up with the X-news
          </p>
        </div>
        <h3 className="text-lg font-ms mt-4">Below are some tools I make use of</h3>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <li key={index} className="text-lg flex flex-row gap-2 bg-transparent text-primary items-center pl-2 -ml-[21.3px]">
              <Diamond size={5} strokeWidth={1} fill="" className="bg-inherit" />
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 font-mulish space-y-5 h-full">
        <h2 className="text-3xl font-bold">What I do</h2>
        <ul className="flex md:flex-col flex-row md:gap-10 gap-4 border border-r-0 border-t-0 border-l-2 border-b-0 border-secondary py-4">
          {roles.map((role, index) => (
            <li
              key={index}
              className="text-lg flex flex-row gap-2 bg-transparent text-primary items-center pl-2 -ml-[21.3px]"
            >
              <Monitor
                size={24}
                strokeWidth={1}
                fill="#f5f5f5"
                className="bg-inherit"
              />
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
