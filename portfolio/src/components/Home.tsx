"use client";

import Image from "next/image";
import ThreeDButton from "./elements/button";
import { TextGradient } from "./text";

const Home = () => {
  return (
    <section
      id="home"
      className="font-ml relative min-h-screen h-full text-text-primary flex flex-col lg:flex-row lg:space-x-10 items-center justify-center lg:justify-evenly px-4 sm:px-6 lg:px-10 py-20 lg:py-0 overflow-hidden"
    >
      {/* Background circular gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-primary/15 to-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-3/4 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-2/4 w-48 h-48 bg-gradient-to-r from-secondary/15 to-primary/50 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-2xl"></div>
      </div>

      {/* Image Container - Order 1 on mobile, 2 on desktop */}
      <div className="relative z-10 order-1 lg:order-2 mb-8 lg:mb-0">
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
      <div className="relative z-10 font-mulish space-y-5 h-full order-2 lg:order-1 text-center lg:text-left max-w-lg lg:max-w-none">
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
