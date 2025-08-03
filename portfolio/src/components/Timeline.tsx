"use client";

import React, { useEffect, useRef, useState } from "react";
import { TextGradient } from "./text";
import Link from "next/link";
import { Calendar, CheckCircle, MapPin } from "lucide-react";
import { ExperienceData } from "@/data";


const ExperienceTimeline = ({
  experiences,
}: {
  experiences: ExperienceData;
}) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            // Add a small delay for staggered animation effect
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, index * 100); // 100ms delay between each item
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px' // Trigger animation when item is closer to viewport center
      }
    );

    // Observer for timeline items
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    const updateLineProgress = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const timelineTop = rect.top;
        const timelineHeight = rect.height;
        
        // Calculate progress based on how much of the timeline has been scrolled through
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (viewportHeight - timelineTop - 100) / (timelineHeight - 200)
          )
        );
        setLineProgress(scrollProgress);
      }
    };

    // Update both line progress and check for visible items on scroll
    const handleScroll = () => {
      updateLineProgress();
      
      // Also check for items that should be visible based on scroll position
      const viewportHeight = window.innerHeight;
      const timelineItems = document.querySelectorAll(".timeline-item");
      
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top;
        const itemHeight = rect.height;
        
        // Item is considered visible when its center is in the viewport
        if (itemTop + itemHeight / 2 < viewportHeight && itemTop + itemHeight / 2 > 0) {
          setVisibleItems((prev) => new Set([...prev, index]));
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section id="timeline" className="relative py-20 pt-10 px-4 overflow-hidden">
      {/* Floating Pollen/Spores Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className={`absolute animate-pollen-${i}`}>
            <div 
              className="w-1 h-1 bg-accent/30 rounded-full shadow-[0_0_4px_theme(colors.accent)]"
              style={{
                filter: 'blur(0.5px)',
              }}
            />
          </div>
        ))}
        
        {/* Additional smaller spores */}
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={`spore-${i}`} 
            className={`absolute animate-pollen-${i + 2}`}
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * -8}s`,
            }}
          >
            <div 
              className="w-0.5 h-0.5 bg-primary/20 rounded-full shadow-[0_0_2px_theme(colors.primary)]"
              style={{
                filter: 'blur(0.3px)',
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="text-center mb-16">
        <h2 className="shead">
          <TextGradient
            from="from-primary"
            to="to-text-accent"
            className="font-q"
          >
            /timeline
          </TextGradient>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">        <div ref={timelineRef} className="relative">
          {/* Timeline progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--color-surface)] rounded-full overflow-hidden shadow-inner">
            <div
              className="w-full bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded-full transition-all duration-500 ease-out relative"
              style={{
                height: `${lineProgress * 100}%`,
                boxShadow: "0 0 20px var(--color-primary), inset 0 0 10px rgba(255,255,255,0.3)",
              }}
            >
              {/* Animated gradient overlay for extra glow */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full"
                style={{
                  animation: lineProgress > 0 ? 'timelineGlow 3s ease-in-out infinite' : 'none'
                }}
              />
            </div>
          </div><div className="space-y-16">
            {experiences.map((exp, index) => {
              const isVisible = visibleItems.has(index);
              const isEven = index % 2 === 0;
              return (
                <div
                  key={`${exp.company}-${index}`}
                  data-index={index}
                  className={`timeline-item relative flex flex-col lg:flex-row ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  } items-start justify-between gap-8 transition-all duration-1000 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms` // Staggered animation delay
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-4 transition-all duration-700 ease-out ${
                        isVisible
                          ? "bg-[var(--color-primary)] border-[var(--color-secondary)] scale-125"
                          : "bg-[var(--color-surface)] border-[var(--color-border)] scale-75 opacity-50"
                      }`}
                      style={{
                        boxShadow: isVisible
                          ? "0 0 15px var(--color-primary), 0 0 30px var(--color-secondary), inset 0 0 10px rgba(255,255,255,0.3)"
                          : "none",
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                    {/* Pulse effect when visible */}
                    {isVisible && (
                      <div 
                        className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)] animate-ping opacity-30"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animationDuration: '2s'
                        }}
                      />
                    )}
                  </div>

                  {/* Left/Right content containers */}
                  <div
                    className={`w-full lg:w-1/2 flex flex-row items-center transition-all duration-800 ease-out ${
                      isEven ? "justify-end" : "justify-start"
                    } ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isEven ? 'translate-x-8' : '-translate-x-8'}`
                    }`}
                    style={{
                      transitionDelay: `${index * 150 + 200}ms`
                    }}
                  >
                    <div
                      className={`self-start bg-white/70 backdrop-blur-sm p-6 pt-8 ${
                        isEven ? "leaf-l-alt" : "leaf-l"
                      } shadow-lg border border-[var(--color-border)] transition-all duration-500 hover:shadow-xl hover:scale-105 ${
                        isVisible ? 'shadow-md' : 'shadow-sm'
                      }`}
                    >
                      <h3 className="font-ml mb-1 flex flex-row gap-2 items-center">
                        <span className="font-ml font-semibold text-text-primary">{exp.role}</span>
                        <Link
                          href={exp.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-q underline font-bold text-text-accent hover:text-primary transition-colors"
                        >
                          @{exp.company}
                        </Link>
                      </h3>
                      <div className="font-ml text-sm text-text-muted mb-4 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
                        <span className="flex flex-row gap-2 items-center justify-start">
                          <Calendar strokeWidth={1.5} size={16} /> 
                          <span>{exp.start} – {exp.end}</span>
                        </span>
                        <span className="flex flex-row gap-1 items-center justify-start">
                          <MapPin strokeWidth={1.5} size={16} /> 
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`w-full lg:w-1/2 transition-all duration-800 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`
                    }`}
                    style={{
                      transitionDelay: `${index * 150 + 300}ms`
                    }}
                  >
                    <div
                      className={`bg-surface-muted/20 min-h-45 backdrop-blur-sm p-6 shadow-md ${
                        isEven ? "leaf-l" : "leaf-l-alt pt-8"
                      } border border-[var(--color-border)] transition-all duration-500 hover:shadow-lg hover:bg-surface-muted/30 ${
                        isVisible ? 'shadow-md' : 'shadow-sm'
                      }`}
                    >
                      <p className="font-ml text-medium text-text-primary leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap items-center justify-start gap-2">
                        {exp.tools?.map((tool, toolIndex) => (
                          <li
                            key={tool}
                            className={`font-q inline-flex items-center px-3 py-1 rounded-full bg-primary/5 border border-primary text-primary font-semibold text-xs shadow-sm transition-all duration-300 hover:bg-primary/10 hover:scale-105 ${
                              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}
                            style={{
                              transitionDelay: `${index * 150 + 400 + toolIndex * 50}ms`
                            }}
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
