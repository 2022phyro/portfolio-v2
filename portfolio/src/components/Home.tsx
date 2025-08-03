"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThreeDButton from "./elements/button";
import { TextGradient } from "./text";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="font-ml relative min-h-screen h-full text-text-primary flex flex-col lg:flex-row lg:space-x-10 items-center justify-center lg:justify-evenly px-4 sm:px-6 lg:px-10 py-20 lg:py-0 overflow-hidden"
    >{/* Background circular gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-primary/15 to-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-3/4 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-2/4 w-48 h-48 bg-gradient-to-r from-secondary/15 to-primary/50 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-2xl"></div>
      </div>

      {/* Animated floating leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Leaf 1 - Light green */}
        <div className="absolute animate-float-1">
          <svg width="20" height="24" viewBox="0 0 20 24" className="text-green-300/40">
            <path
              d="M10 2 Q6 8 2 12 Q6 20 10 22 Q14 20 18 12 Q14 8 10 2 Z"
              fill="currentColor"
            />
            <path
              d="M10 2 Q12 8 10 22"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
                <div className="absolute animate-float-1">
          <svg width="20" height="24" viewBox="0 0 20 24" className="text-green-300/40">
            <path
              d="M10 2 Q6 8 2 12 Q6 20 10 22 Q14 20 18 12 Q14 8 10 2 Z"
              fill="currentColor"
            />
            <path
              d="M10 2 Q12 8 10 22"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Leaf 2 - Medium green */}
        <div className="absolute animate-float-2">
          <svg width="16" height="20" viewBox="0 0 16 20" className="text-green-500/50">
            <path
              d="M8 1 Q5 6 2 10 Q5 16 8 18 Q11 16 14 10 Q11 6 8 1 Z"
              fill="currentColor"
            />
            <path
              d="M8 1 Q9 6 8 18"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Leaf 3 - Dark green */}
        <div className="absolute animate-float-3">
          <svg width="18" height="22" viewBox="0 0 18 22" className="text-green-600/60">
            <path
              d="M9 1 Q6 7 3 11 Q6 18 9 20 Q12 18 15 11 Q12 7 9 1 Z"
              fill="currentColor"
            />
            <path
              d="M9 1 Q10 7 9 20"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Leaf 4 - Primary green */}
        <div className="absolute animate-float-4">
          <svg width="14" height="18" viewBox="0 0 14 18" className="text-primary/40">
            <path
              d="M7 1 Q5 5 2 9 Q5 14 7 16 Q9 14 12 9 Q9 5 7 1 Z"
              fill="currentColor"
            />
            <path
              d="M7 1 Q8 5 7 16"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Leaf 5 - Accent green */}
        <div className="absolute animate-float-5">
          <svg width="22" height="26" viewBox="0 0 22 26" className="text-accent/35">
            <path
              d="M11 2 Q7 8 3 13 Q7 21 11 24 Q15 21 19 13 Q15 8 11 2 Z"
              fill="currentColor"
            />
            <path
              d="M11 2 Q12 8 11 24"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Leaf 6 - Emerald */}
        <div className="absolute animate-float-6">
          <svg width="15" height="19" viewBox="0 0 15 19" className="text-emerald-400/45">
            <path
              d="M7.5 1 Q5 6 2 10 Q5 15 7.5 17 Q10 15 13 10 Q10 6 7.5 1 Z"
              fill="currentColor"
            />
            <path
              d="M7.5 1 Q8.5 6 7.5 17"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>      {/* Image Container - Order 1 on mobile, 2 on desktop */}
      <div className={`relative z-10 order-1 lg:order-2 mb-8 lg:mb-0 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: '200ms' }}
      >
        {/* Profile picture with radiant glow */}
        <div className="relative">
          {/* Outer glow layers - enhanced for more prominence */}
          <div className="absolute -inset-12 bg-gradient-to-r from-secondary/40 via-accent/30 to-primary/40 rounded-full blur-3xl animate-pulse duration-3000"></div>
          <div className="absolute -inset-10 bg-gradient-to-r from-accent/35 via-secondary/25 to-accent/35 rounded-full blur-2xl animate-pulse duration-2000"></div>
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-accent/40 to-secondary/30 rounded-full blur-xl animate-pulse duration-4000"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-secondary/25 via-primary/20 to-accent/25 rounded-full blur-lg"></div>

          {/* Profile image - made fully circular and smoother */}
          <div className="relative">
            <div className="w-[300px] h-[400px] rounded-full overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10 p-2">
              <div className="w-full h-full rounded-full  overflow-hidden bg-gradient-to-br from-white/90 to-white/70 shadow-inner">
                <Image
                  src="/profile.png"
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  className="relative z-10 w-full h-full object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Floral pattern base */}
        <div className="flex items-center justify-center mt-6 relative">
          <div className="absolute -bottom-4">
            <svg
              width="140"
              height="70"
              viewBox="0 0 140 70"
              className="text-primary/30"
            >
              {/* Main flower */}
              <g transform="translate(70, 35)">
                {/* Petals */}
                <ellipse
                  cx="0"
                  cy="-18"
                  rx="10"
                  ry="18"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(0)"
                />
                <ellipse
                  cx="0"
                  cy="-18"
                  rx="10"
                  ry="18"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(45)"
                />
                <ellipse
                  cx="0"
                  cy="-18"
                  rx="10"
                  ry="18"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(90)"
                />
                <ellipse
                  cx="0"
                  cy="-18"
                  rx="10"
                  ry="18"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(135)"
                />
                <ellipse
                  cx="0"
                  cy="-18"
                  rx="10"
                  ry="18"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(180)"
                />
                <ellipse
                  cx="0"
                  cy="-18"
                  rx="10"
                  ry="18"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(225)"
                />
                <ellipse
                  cx="0"
                  cy="-18"
                  rx="10"
                  ry="18"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(270)"
                />
                <ellipse
                  cx="0"
                  cy="-18"
                  rx="10"
                  ry="18"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(315)"
                />
                {/* Center */}
                <circle cx="0" cy="0" r="6" fill="currentColor" opacity="0.8" />
              </g>

              {/* Side flowers */}
              <g transform="translate(25, 50)">
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(0)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(60)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(120)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(180)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(240)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(300)"
                />
                <circle cx="0" cy="0" r="4" fill="currentColor" opacity="0.6" />
              </g>

              <g transform="translate(115, 50)">
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(0)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(60)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(120)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(180)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(240)"
                />
                <ellipse
                  cx="0"
                  cy="-10"
                  rx="5"
                  ry="10"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(300)"
                />
                <circle cx="0" cy="0" r="4" fill="currentColor" opacity="0.6" />
              </g>

              {/* Leaves */}
              <path
                d="M35 55 Q42 42 55 48 Q42 62 35 55"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M105 55 Q98 42 85 48 Q98 62 105 55"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M70 60 Q58 52 65 40 Q82 52 70 60"
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Text Content - Order 2 on mobile, 1 on desktop */}
      <div className={`relative z-10 font-mulish space-y-5 h-full order-2 lg:order-1 text-center lg:text-left max-w-lg lg:max-w-none transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
      }`}
      style={{ transitionDelay: '400ms' }}
      >
        <h2 className="shead">
          <TextGradient
            className="font-q"
            from="from-primary"
            to="to-text-accent"
          >
            /helloworld
          </TextGradient>
        </h2>
        <h3 className="text-2xl sm:text-3xl">I'm Afam Ugwuanyi</h3>
        <h1 className="text-text-primary text-4xl sm:text-5xl font-q font-bold">
          Software Engineer
        </h1>
        <p className="max-w-md lg:max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
          I have an affection for backend engineering with over 2 years
          experience building scalable systems and softwares for both clients
          and start-ups
        </p>

        {/* Action Buttons - improved mobile layout */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
          <ThreeDButton
            className="w-[200px] h-[55px]"
            leaf="rounded-tr-3xl rounded-bl-3xl"
            variant="brand"
            href="/Afam_Ugwuanyi_Resume.pdf"
            target="_blank"
          >
            View my resume
          </ThreeDButton>
            <ThreeDButton
            variant="secondary"
            leaf="rounded-tl-3xl rounded-br-3xl"
            className="w-[200px] h-[55px]"
            href="mailto:afam.ugwuanyi.u@gmail.com"
            >
            Let's chat
            </ThreeDButton>
        </div>
      </div>
    </section>
  );
};

export default Home;
