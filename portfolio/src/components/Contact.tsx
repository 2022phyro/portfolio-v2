"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Zap,
  Coffee,
  Code,
  Send,
  ExternalLink,
} from "lucide-react";
import { TextGradient } from "./text";
import ThreeDButton from "./elements/button";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/2022phyro",
      icon: Github,
      color: "hover:text-gray-900 hover:bg-gray-100",
      description: "Code & Projects",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/afam-ugwuanyi",
      icon: Linkedin,
      color: "hover:text-blue-600 hover:bg-blue-50",
      description: "Professional Network",
    },
    {
      name: "Twitter",
      href: "https://x.com/phyrokelstein",
      icon: Twitter,
      color: "hover:text-sky-500 hover:bg-sky-50",
      description: "Thoughts & Updates",
    },
    {
      name: "Email",
      href: "mailto:afam.ugwuanyi.u@gmail.com?subject=Hey%20Afam!%20Let's%20chat&body=Hi%20Afam,%0A%0AI%20found%20your%20portfolio%20and%20would%20love%20to%20connect!%0A%0A",
      icon: Mail,
      color: "hover:text-green-600 hover:bg-green-50",
      description: "Direct Message",
    },
  ];

  return (
    <section
      id="connect"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-15"
    >
      {/* Background nature gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-primary/15 to-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-accent/10 to-primary/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-secondary/20 to-accent/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-primary/20 to-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-10 w-24 h-24 bg-gradient-to-r from-accent/15 to-primary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <div className="mb-12">
          <h2 className="shead mb-4">
            <TextGradient
              className="font-q"
              from="from-primary"
              to="to-text-accent"
            >
              /connect
            </TextGradient>
          </h2>
        </div>{" "}
        {/* Fun Content - Side by Side Layout */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Side - The Poem */}
            <div
              className="p-8 md:p-10 rounded-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden h-full flex items-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200, 230, 201, 0.8) 0%, rgba(215, 204, 200, 0.6) 100%)",
                backdropFilter: "blur(15px)",
                boxShadow:
                  "8px_8px_24px_rgba(176,217,176,0.3),-8px_-8px_24px_rgba(255,255,255,0.8)",
                borderRadius: "60% 40% 40% 20% / 60% 30% 70% 40%",
              }}
            >
              {/* Decorative icons */}
              <div className="absolute top-4 left-4 opacity-15">
                <MessageCircle className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <div className="absolute bottom-4 right-4 opacity-15">
                <Coffee
                  className="w-6 h-6 text-secondary animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              <div className="relative z-10 text-center w-full">
                <div className="flex items-center justify-center mb-6">
                  <MessageCircle className="w-10 h-10 text-primary mr-3" />
                  <Coffee className="w-8 h-8 text-secondary" />
                </div>

                {/* Four-line poem with proper ABAB rhyme scheme */}
                <div className="font-ml text-lg md:text-xl leading-relaxed space-y-3">
                  <div className="text-text-primary font-medium">
                    Have a <span className="font-bold text-primary">task</span>?
                  </div>
                  <div className="text-text-muted">
                    Have an{" "}
                    <span className="font-semibold text-text-primary">ask</span>
                    ?
                  </div>
                  <div className="text-text-muted">
                    Does no{" "}
                    <span className="font-semibold text-text-primary">
                      harm
                    </span>
                  </div>
                  <div className="font-q font-bold text-primary text-xl md:text-2xl">
                    Call <span className="text-2xl md:text-3xl">Afam</span>
                  </div>
                </div>

                {/* Subtle poem indicator */}
                <div className="mt-6 flex justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary/30"></div>
                    <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary/30"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Schrödinger's Dev */}
            <div
              className="p-8 md:p-10 rounded-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden h-full flex items-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(215, 204, 200, 0.7) 0%, rgba(200, 230, 201, 0.8) 100%)",
                backdropFilter: "blur(15px)",
                boxShadow:
                  "8px_8px_24px_rgba(176,217,176,0.3),-8px_-8px_24px_rgba(255,255,255,0.8)",
                borderRadius: "40% 60% 20% 40% / 30% 60% 40% 70%",
              }}
            >
              {/* Decorative icons */}
              <div className="absolute top-4 right-4 opacity-15">
                <Code
                  className="w-8 h-8 text-accent animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>
              <div className="absolute bottom-4 left-4 opacity-15">
                <Zap
                  className="w-6 h-6 text-primary animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                />
              </div>

              <div className="relative z-10 text-center w-full">
                <div className="flex items-center justify-center mb-6">
                  <Code className="w-10 h-10 text-accent mr-3" />
                  <Zap className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-4">
                  <div className="font-ml text-base md:text-lg text-text-muted leading-relaxed">
                    But seriously,
                  </div>
                  <div className="font-semibold text-text-primary text-xl md:text-2xl">
                    Schrödinger's dev.
                  </div>
                  <div className="font-ml text-base md:text-lg text-text-muted leading-relaxed">
                    You may think I can solve it
                    <br />
                    or you may think I can't.
                  </div>
                  <div className="font-semibold text-primary text-lg md:text-xl mt-4">
                    Either way you won't know
                    <br />
                    until you say hi 👋
                  </div>
                </div>

                {/* Quantum uncertainty indicator */}
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-accent/40 animate-pulse"></div>
                    <div className="text-xs text-text-muted font-ml">
                      quantum uncertainty
                    </div>
                    <div
                      className="w-3 h-3 rounded-full bg-primary/40 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="mailto:afam.ugwuanyi.u@gmail.com?subject=Hey%20Afam!%20Let's%20collaborate&body=Hi%20Afam,%0A%0AI%20came%20across%20your%20portfolio%20and%20I'm%20impressed!%20I'd%20love%20to%20discuss%20a%20potential%20collaboration%20or%20project.%0A%0ALet's%20chat!%0A%0ABest%20regards"
          className="inline-flex  mb-4 items-center space-x-3 px-8 py-4 rounded-full font-q font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
          style={{
            background: "linear-gradient(135deg, #43766c 0%, #449484ff 100%)",
            color: "white",
            boxShadow:
              "6px_6px_20px_rgba(67,118,108,0.4),-6px_-6px_20px_rgba(255,255,255,0.1)",
          }}
        >
          <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>Let's Start a Conversation</span>
          <div className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
        </Link>
        {/* Social Links Grid */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute -inset-4 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-3 h-3 rounded-full bg-primary/20 animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute top-0 right-0 w-2 h-2 rounded-full bg-secondary/30 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-accent/20 animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary/15 animate-bounce"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={
                    social.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className={`group relative p-6 rounded-2xl transition-all duration-300 ${social.color} transform hover:scale-105 hover:-translate-y-1`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(200, 230, 201, 0.6) 0%, rgba(215, 204, 200, 0.5) 100%)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "4px_4px_12px_rgba(176,217,176,0.2),-4px_-4px_12px_rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative">
                      <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                      {social.name !== "Email" && (
                        <ExternalLink className="w-3 h-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </div>
                    <div className="text-center">
                      <h4 className="font-q font-semibold text-sm">
                        {social.name}
                      </h4>
                      <p className="font-ml text-xs text-text-muted mt-1">
                        {social.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(200, 230, 201, 0.8) 0%, rgba(215, 204, 200, 0.7) 100%)",
                      boxShadow:
                        "8px_8px_24px_rgba(176,217,176,0.4),-8px_-8px_24px_rgba(255,255,255,0.9)",
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
