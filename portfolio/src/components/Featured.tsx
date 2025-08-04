"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
import { TextGradient } from "./text";

const Featured = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
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
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observer for project cards
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-project-index") || "0");
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleProjects((prev) => new Set([...prev, index]));
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      // Observe project cards
      const projectCards = sectionRef.current.querySelectorAll('.project-card');
      projectCards.forEach((card) => projectObserver.observe(card));
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        const projectCards = sectionRef.current.querySelectorAll('.project-card');
        projectCards.forEach((card) => projectObserver.unobserve(card));
      }
    };
  }, []);

  return (
    <section
      id="featured"
      className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bg to-surface/5 overflow-hidden font-ml"
    >
      {" "}
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-gradient-to-r from-secondary/15 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl" />
      </div>
      {/* Enhanced Floating Fireflies Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Improved fireflies with bezier curve movements */}
        <div className="absolute animate-firefly-improved-1">
          <div className="w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_12px_theme(colors.accent),0_0_24px_theme(colors.accent)] animate-pulse" />
        </div>

        <div className="absolute animate-firefly-improved-2">
          <div
            className="w-3 h-3 bg-secondary/80 rounded-full shadow-[0_0_15px_theme(colors.secondary),0_0_30px_theme(colors.secondary)] animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="absolute animate-firefly-improved-3">
          <div
            className="w-2 h-2 bg-primary/70 rounded-full shadow-[0_0_10px_theme(colors.primary),0_0_20px_theme(colors.primary)] animate-pulse"
            style={{ animationDelay: "2.5s" }}
          />
        </div>

        {/* Additional smaller fireflies for depth */}
        {[1, 2, 3].map((i) => (
          <div
            key={`mini-firefly-${i}`}
            className={`absolute animate-firefly-improved-${i}`}
            style={{
              left: `${10 + i * 25}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * -4}s`,
              animationDuration: `${20 + i * 3}s`,
            }}
          >
            <div
              className="w-1.5 h-1.5 bg-accent/60 rounded-full shadow-[0_0_6px_theme(colors.accent)] animate-pulse"
              style={{
                animationDelay: `${i * 0.8}s`,
                filter: "blur(0.5px)",
              }}
            />
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tightened Header */}
        <div className="text-center mb-10 flex flex-col items-center space-y-4">
          <h2 className="font-q shead">
            <TextGradient from="from-primary" to="to-text-accent">
              /featured
            </TextGradient>
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed font-ml">
            These projects trace my evolution through design, development, and
            creative problem-solving across real-world and experimental domains.
          </p>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed font-ml">
            Or it may be the ones I love so much.
          </p>
        </div>
        {/* Responsive Masonry Grid with Slightly Increased Height and Double Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {projects.map((project, index) => {
            const isWide = project.layout === "wide";
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`flex flex-col justify-start col-span-1 ${
                  isWide ? "lg:col-span-4" : "lg:col-span-2"
                } rounded-xl overflow-hidden bg-surface/30 dark:bg-surface/20 backdrop-blur-sm border border-border/20 dark:border-border/30 shadow-md hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-500 group hover:-translate-y-1 hover:border-primary/40`}
              >
                <div className="relative aspect-[3/1.5] overflow-hidden">
                  {" "}
                  {/* Slightly increased aspect ratio */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 bg-primary/20 z-20 flex items-center justify-center gap-3 backdrop-blur-sm transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-accent/25 border border-primary rounded-full text-accent hover:bg-accent/35 hover:scale-110 transition-all duration-200"
                    >
                        {project.link.includes("github") ? 
                        <Github className="w-5 h-5 w-5 h-5 text-black/80" /> :
                        <ExternalLink className="w-5 h-5 text-black/80" />
                        }
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2.5">
                    <h3 className="font-q font-bold text-lg text-text-primary group-hover:text-primary transition-colors line-clamp-1">
                      {project.name}
                    </h3>
                    <div className="relative flex items-center">
                      <svg
                        width="18"
                        height="22"
                        viewBox="0 0 20 24"
                        className={`mr-1.5 ${
                          project.category === "industry"
                            ? "text-primary"
                            : project.category === "collaborative"
                            ? "text-text-accent"
                            : "text-text-muted"
                        }`}
                      >
                        <path
                          d="M10 2 Q6 8 2 12 Q6 20 10 22 Q14 20 18 12 Q14 8 10 2 Z"
                          fill="currentColor"
                          opacity="0.8"
                        />
                        <path
                          d="M10 2 Q12 8 10 22"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          fill="none"
                          opacity="0.6"
                        />
                      </svg>
                      <span
                        className={`text-xs font-medium capitalize ${
                          project.category === "industry"
                            ? "text-primary"
                            : project.category === "collaborative"
                            ? "text-text-accent"
                            : "text-text-muted"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mb-3 font-mulish text-wrap">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium bg-surface/50 text-text-muted rounded-full border border-border/20 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
