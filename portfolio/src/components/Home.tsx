"use client";

import Image from "next/image";
import ThreeDButton from "./button";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen h-full flex sm:space-x-10 items-center justify-evenly p-30 sm:px-10 overflow-hidden"
    >
      {/* Background circular gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-primary/15 to-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary/15 to-primary/50 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 font-mulish space-y-5 h-full">
        <span className="text-lg">Hi There </span>
        <span className="text-3xl">,</span>
        <h3 className="text-3xl">I'm Afam Ugwuanyi</h3>
        <h1 className="text-5xl font-bold">Software Engineer </h1>
        <p className="w-120">
          I have an affection for backend engineering with over 2 years
          experience building scalable systems and softwares for both clients
          and start-ups
        </p>{" "}
        <div className="mt-10 flex flex-row flex-wrap justify-between gap-8 mt-4">
          <ThreeDButton
            className="w-50 h-15 rounded-full"
            leaf="rounded-tr-3xl rounded-bl-3xl"
          >
            View my resume
          </ThreeDButton>

          <ThreeDButton
            variant="brand"
            leaf="rounded-tl-3xl rounded-br-3xl"
            className="w-50 h-15 rounded-lg text-white"
          >
            Let's chat
          </ThreeDButton>
        </div>
      </div>

      <div className="relative z-10">
        {/* Profile picture with radiant glow */}
        <div className="relative">
          {/* Outer glow layers */}
          <div className="absolute -inset-8 bg-gradient-to-r from-secondary/30 via-accent/20 to-primary/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-accent/25 via-secondary/15 to-accent/25 rounded-full blur-xl"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/30 to-secondary/20 rounded-full blur-lg"></div>

          {/* Profile image */}
          <div className="relative">
            <Image
              src="/profile.png"
              alt="Profile Picture"
              width={300}
              height={300}
              className="relative z-10 rounded-b-full"
            />
          </div>
        </div>

        {/* Floral pattern base */}
        <div className="flex items-center justify-center mt-4 relative">
          <div className="absolute -bottom-4">
            <svg
              width="120"
              height="60"
              viewBox="0 0 120 60"
              className="text-primary/30"
            >
              {/* Main flower */}
              <g transform="translate(60, 30)">
                {/* Petals */}
                <ellipse
                  cx="0"
                  cy="-15"
                  rx="8"
                  ry="15"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(0)"
                />
                <ellipse
                  cx="0"
                  cy="-15"
                  rx="8"
                  ry="15"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(45)"
                />
                <ellipse
                  cx="0"
                  cy="-15"
                  rx="8"
                  ry="15"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(90)"
                />
                <ellipse
                  cx="0"
                  cy="-15"
                  rx="8"
                  ry="15"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(135)"
                />
                <ellipse
                  cx="0"
                  cy="-15"
                  rx="8"
                  ry="15"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(180)"
                />
                <ellipse
                  cx="0"
                  cy="-15"
                  rx="8"
                  ry="15"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(225)"
                />
                <ellipse
                  cx="0"
                  cy="-15"
                  rx="8"
                  ry="15"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(270)"
                />
                <ellipse
                  cx="0"
                  cy="-15"
                  rx="8"
                  ry="15"
                  fill="currentColor"
                  opacity="0.6"
                  transform="rotate(315)"
                />
                {/* Center */}
                <circle cx="0" cy="0" r="5" fill="currentColor" opacity="0.8" />
              </g>

              {/* Side flowers */}
              <g transform="translate(20, 40)">
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(0)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(60)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(120)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(180)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(240)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(300)"
                />
                <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.6" />
              </g>

              <g transform="translate(100, 40)">
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(0)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(60)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(120)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(180)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(240)"
                />
                <ellipse
                  cx="0"
                  cy="-8"
                  rx="4"
                  ry="8"
                  fill="currentColor"
                  opacity="0.4"
                  transform="rotate(300)"
                />
                <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.6" />
              </g>

              {/* Leaves */}
              <path
                d="M30 45 Q35 35 45 40 Q35 50 30 45"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M90 45 Q85 35 75 40 Q85 50 90 45"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M60 50 Q50 45 55 35 Q70 45 60 50"
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
