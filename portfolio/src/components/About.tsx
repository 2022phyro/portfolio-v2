"use client";

import Image from "next/image";
import ThreeDButton from "./button";
import { roles, technologies } from "@/data";
import {
  Code2,
  Computer,
  Database,
  Diamond,
  Dot,
  LibraryBig,
  Monitor,
  MonitorCog,
} from "lucide-react";
import { TextGradient } from "./text";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen h-full flex flex-col sm:flex-row items-start justify-evenly px-4 sm:px-10 lg:px-30 py-10 sm:space-x-10"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-accent rounded-full blur-3xl"></div>
        {/* <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-primary/15 to-secondary rounded-full blur-3xl"></div> */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary/15 to-primary/50 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative w-auto max-w-[450px] z-10 flex flex-col items-start space-y-5 h-full">
        <h2 className="shead">
          <TextGradient
            className="font-q"
            from="from-text-muted"
            to="to-primary"
          >
            /about
          </TextGradient>
        </h2>
        <div className="flex flex-col gap-4 font-ml">
          <p>
            I began programming in 2022, fresh out of high school and trying to
            figure out what happens when we type google.com. Since then, I've
            been on a journey of learning and building, focusing on backend
            engineering.
          </p>
          <p>
            I love working in backend engineering, particularly with Python and
            JavaScript, but I don't shy away from DevOps and Frontend tasks. My
            expertise includes building scalable APIs, designing database
            systems, and implementing real-time features. I also have a passion
            for teaching and sharing knowledge with others.
          </p>
          <p>
            When I'm not writing code, you can find me writing poetry, short
            stories, reading Igbo history, and keeping up with the X-news
          </p>
        </div>
        <div className="font-ml flex flex-row gap-8">
          <p className="flex-col flex gap-0 p-0">
            <span className="text-5xl font-semibold font-cg">2+</span> years
            experience
          </p>
          <p className="flex-col flex gap-0 p-0">
            <span className="text-5xl font-semibold font-cg">3+</span> projects
          </p>
          <p className="flex-col flex gap-0 p-0">
            <span className="text-5xl font-semibold font-cg">100%</span> client
            satisfaction
          </p>
        </div>
      </div>

      <div className="relative z-10 font-mulish space-y-5 h-full mt-8 sm:mt-0">
        <ul className="flex flex-col gap-4 md:gap-10 py-4 font-q">
          <li className="text-lg flex flex-row gap-2 text-text-primary rounded-md bg-surface-alt border border-secondary p-3 items-center">
            <Monitor
              size={24}
              strokeWidth={1}
              fill="#f5f5f5"
              className="bg-inherit"
            />
            Fullstack Development
          </li>
          <li className="text-lg flex flex-row gap-2 text-text-primary rounded-md bg-surface-alt border border-secondary p-3 items-center">
            <Database
              size={24}
              strokeWidth={1}
              fill="#f5f5f5"
              className="bg-inherit"
            />
            Database Systems
          </li>
          <li className="text-lg flex flex-row gap-2 text-text-primary rounded-md bg-surface-alt border border-secondary p-3 items-center">
            <MonitorCog
              size={24}
              strokeWidth={1}
              fill="#f5f5f5"
              className="bg-inherit"
            />
            Systems Design
          </li>
          <li className="text-lg flex flex-row gap-2 text-text-primary rounded-md bg-surface-alt border border-secondary p-3 items-center">
            <LibraryBig
              size={24}
              strokeWidth={1}
              fill="#f5f5f5"
              className="bg-inherit"
            />
            Teaching & Education
          </li>
          <li className="text-lg flex flex-col gap-2 text-text-primary rounded-md bg-surface-alt border border-secondary p-3 items-start justify-start">
            <h4>Favorite Tools</h4>
            <ul>
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-semibold mr-2 mb-2"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
