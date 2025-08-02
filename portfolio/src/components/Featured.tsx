"use client";
import { experiences } from "@/data";
import { Diamond, Minus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TextGradient } from "./text";
import { featuredProjects, ProjectCard } from "./elements/cards";

const Fetured = () => {
  const [activeExperience, setActiveExperience] = useState(
    Object.keys(experiences)[0]
  );

  return (
    <section
      id="featured"
      className="relative h-full flex flex-col sm:flex-col items-start justify-evenly px-4 sm:px-10 lg:px-30 py-10 sm:space-x-10"
    >
      {/* Background circular gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-primary/15 to-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary/15 to-primary/50 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-2xl"></div>
      </div>
      <h2 className="shead md:self-end sm:self-start">
        <TextGradient
          className="font-q"
          from="from-primary"
          to="to-text-accent"
        >
          /featured
        </TextGradient>
      </h2>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default Fetured;
