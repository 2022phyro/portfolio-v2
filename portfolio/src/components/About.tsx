"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThreeDButton from "./elements/button";
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
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observer for animated items
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);

      // Observe tech items
      const techItems = sectionRef.current.querySelectorAll(".tech-item");
      techItems.forEach((item) => itemObserver.observe(item));
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        const techItems = sectionRef.current.querySelectorAll(".tech-item");
        techItems.forEach((item) => itemObserver.unobserve(item));
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
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
      <div
        className={`relative w-auto max-w-[450px] z-10 flex flex-col items-start space-y-5 h-full transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <h2 className="shead">
          <TextGradient
            className="font-q"
            from="from-primary"
            to="to-text-accent"
          >
            /about
          </TextGradient>
        </h2>
        <div className="flex flex-col gap-4 font-ml">
          <p>
            I began programming in 2022, fresh out of high school and curious
            about what really happens when you type “google.com.” Since then,
            I’ve focused on backend engineering—building scalable APIs,
            designing databases, and crafting real-time systems—mainly using
            Python and JavaScript. While backend is my core, I’m comfortable
            working across the stack, including DevOps and frontend tasks when
            needed.
          </p>
          <p>
            Beyond the terminal, I write poetry and short stories, explore Igbo
            history, and stay tuned to what’s happening on X. Whether I’m
            building systems or sharing what I’ve learned, I enjoy making my
            curiosity work for me.
          </p>
        </div>
        <div className="font-ml flex flex-row justify-evenly gap-8 w-full">
          <p className="flex-col flex gap-0 p-0">
            <span className="text-5xl font-semibold font-cg">2+</span> years
            combined experience
          </p>
          <p className="flex-col flex gap-0 p-0">
            <span className="text-5xl font-semibold font-cg">3+</span> projects
          </p>
          <p className="flex-col flex gap-0 p-0">
            <span className="text-5xl font-semibold font-cg">100%</span> client
            satisfaction
          </p>
        </div>
      </div>{" "}
      <div
        className={`relative z-10 font-mulish space-y-5 h-full mt-8 sm:mt-0 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        <ul className="flex flex-col gap-4 md:gap-10 py-4 font-q">
          {roles.map((role, index) => {
            const icons = [Monitor, Database, MonitorCog, LibraryBig];
            const IconComponent = icons[index] || Monitor;
            const isItemVisible = visibleItems.has(index);

            return (
              <li
                key={index}
                data-index={index}
                className={`tech-item text-lg flex flex-row gap-2 text-text-primary rounded-md bg-surface-alt border border-secondary p-3 items-center transition-all duration-700 ease-out ${
                  isItemVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <IconComponent
                  size={24}
                  strokeWidth={1}
                  fill="#f5f5f5"
                  className="bg-inherit"
                />
                {role}
              </li>
            );
          })}
          <li
            data-index={4}
            className={`tech-item text-lg flex flex-col gap-2 text-text-primary rounded-md bg-surface-alt border border-secondary p-3 items-start justify-start transition-all duration-700 ease-out ${
              visibleItems.has(4)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <h4>Favorite Tools</h4>
            <ul>
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className={`inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-semibold mr-2 mb-2 transition-all duration-500 ease-out ${
                    visibleItems.has(4)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${1200 + index * 50}ms` }}
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
