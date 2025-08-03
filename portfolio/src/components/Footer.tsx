"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Heart,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-surface/30 to-surface-muted/20 border-t border-border/30">
      {/* Background nature gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-secondary/15 to-accent/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Afam Logo"
                width={48}
                height={48}
                className="rounded-2xl shadow-[4px_4px_12px_rgba(176,217,176,0.3),-4px_-4px_12px_rgba(255,255,255,0.8)]"
              />
              <h3 className="font-q text-2xl font-semibold text-text-primary">
                Afam Ugwuanyi
              </h3>
            </div>
            
            <p className="font-ml text-text-muted leading-relaxed max-w-lg">
              A passionate software engineer specializing in full-stack development, 
              system architecture, and real-time applications. Afam combines technical 
              expertise with creative problem-solving to build scalable, user-centric 
              solutions that make a meaningful impact.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <h4 className="font-q text-lg font-semibold text-text-primary mb-4">
                Get In Touch
              </h4>
              
              <Link 
                href="mailto:afam.ugwuanyi.u@gmail.com"
                className="flex items-center space-x-3 text-text-muted hover:text-primary transition-all duration-200 group"
              >
                <div className="p-2 rounded-full bg-surface/50 group-hover:bg-primary/10 transition-all duration-200 shadow-[2px_2px_6px_rgba(176,217,176,0.2),-2px_-2px_6px_rgba(255,255,255,0.7)]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-ml">afam.ugwuanyi.u@gmail.com</span>
              </Link>

              <div className="flex items-center space-x-3 text-text-muted">
                <div className="p-2 rounded-full bg-surface/50 shadow-[2px_2px_6px_rgba(176,217,176,0.2),-2px_-2px_6px_rgba(255,255,255,0.7)]">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-ml">+234 (0) 702 563 1579</span>
              </div>

              <div className="flex items-center space-x-3 text-text-muted">
                <div className="p-2 rounded-full bg-surface/50 shadow-[2px_2px_6px_rgba(176,217,176,0.2),-2px_-2px_6px_rgba(255,255,255,0.7)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-ml">Port Harcourt, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-q text-lg font-semibold text-text-primary">
              Quick Links
            </h4>
            
            <nav className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Timeline", href: "#timeline" },
                { name: "Featured", href: "#featured" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block font-ml text-text-muted hover:text-primary transition-all duration-200 hover:translate-x-1 group"
                >
                  <span className="flex items-center space-x-2">
                    <div className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-all duration-200"></div>
                    <span>{link.name}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources & Social */}
          <div className="space-y-6">
            <h4 className="font-q text-lg font-semibold text-text-primary">
              Resources
            </h4>
            
            <nav className="space-y-3">
              {[
                { name: "Resume", href: "/Afam_Ugwuanyi_Resume.pdf" },
                { name: "Github", href: "https://github.com/2022phyro" },
                // { name: "Blog", href: "/blog" },
                // { name: "Testimonials", href: "/testimonials" }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block font-ml text-text-muted hover:text-primary transition-all duration-200 hover:translate-x-1 group"
                >
                  <span className="flex items-center space-x-2">
                    <div className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-all duration-200"></div>
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="font-q text-sm font-semibold text-text-primary mb-4">
                Connect With Me
              </h5>
              
              <div className="flex space-x-3">
                {[
                  { 
                    href: "https://github.com/2022phyro", 
                    icon: Github, 
                    label: "GitHub",
                    color: "hover:text-gray-900"
                  },
                  { 
                    href: "https://linkedin.com/in/afam-ugwuanyi", 
                    icon: Linkedin, 
                    label: "LinkedIn",
                    color: "hover:text-blue-600"
                  },
                  { 
                    href: "https://twitter.com/phyrokelstein", 
                    icon: Twitter, 
                    label: "Twitter",
                    color: "hover:text-sky-500"
                  }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-surface/50 text-text-muted ${social.color} transition-all duration-200 shadow-[2px_2px_6px_rgba(176,217,176,0.2),-2px_-2px_6px_rgba(255,255,255,0.7)] hover:shadow-[4px_4px_12px_rgba(176,217,176,0.3),-4px_-4px_12px_rgba(255,255,255,0.8)] hover:scale-110`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-text-muted font-ml text-sm">
              <span>© 2025 Afam Ugwuanyi. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and lots of bread!</span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-[2px_2px_6px_rgba(176,217,176,0.2),-2px_-2px_6px_rgba(255,255,255,0.7)] hover:shadow-[4px_4px_12px_rgba(176,217,176,0.3),-4px_-4px_12px_rgba(255,255,255,0.8)] group"
              aria-label="Back to top"
            >
              <span className="font-ml text-sm font-medium">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Tech Stack Credit */}
          <div className="mt-6 text-center">
            <p className="text-text-muted font-ml text-xs">
              Built with Next.js, Tailwind CSS, and deployed on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
