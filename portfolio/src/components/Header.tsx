"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, Twitter, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "home", href: "#home", id: "home" },
  { name: "about", href: "#about", id: "about" },
  { name: "featured", href: "#featured", id: "featured" },
  { name: "timeline", href: "#timeline", id: "timeline" },
  { name: "connect", href: "#connect", id: "connect" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [lastScrollY]);
  ``;
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  return (
    <>
      {/* Desktop & Mobile Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "md:-translate-y-full translate-y-0"
        }`}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-surface/90 backdrop-blur-lg shadow-[0_8px_32px_rgba(176,217,176,0.3)] border-b border-border/30"
              : "bg-transparent"
          }`}
          style={{
            background: isScrolled
              ? "linear-gradient(135deg, rgba(200, 230, 201, 0.8) 0% rgba(200, 230, 201, 0.8) 100%)"
              : "transparent",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link
                href="#home"
                className="flex items-center text-2xl font-bold text-primary font-q"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="hidden sm:inline">Afam</span>
              </Link>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative font-q text-lg transition-all duration-200 group px-3 py-1 ${
                      activeSection === item.id
                        ? "text-primary font-bold lowercase"
                        : "text-text-muted/80 hover:text-primary font-medium"
                    }`}
                  >
                    {activeSection === item.id && <span>/</span>}
                    {item.name}
                  </Link>
                ))}
              </nav>
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-full text-primary hover:text-primary/80 transition-all duration-200"
                aria-label="Toggle menu"
              >
                
                {!isMobileMenuOpen && (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      {/* Mobile Side Navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 transform transition-transform duration-300 ease-in-out md:hidden bg-surface border-r border-border/30 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-border/30">
            <Link
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center font-q text-xl font-bold text-primary"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              Afam
            </Link>
          </div>
          {/* Mobile Navigation */}
          <nav className="flex-1 px-6 py-8">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative font-q text-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-primary font-bold"
                      : "text-text-muted/80 hover:text-primary font-medium"
                  }`}
                >
                  {activeSection === item.id && <span className="mr-1">/</span>}
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          {/* Mobile Footer with Social Icons */}
          <div className="px-6 py-6 border-t border-border/30">
            <div className="flex space-x-4 justify-center mb-4">
              
              {[
                { href: "mailto:afam.ugwuanyi.u@gmail.com", icon: Mail },
                { href: "https://github.com/yourusername", icon: Github },
                { href: "https://twitter.com/yourusername", icon: Twitter },
                {
                  href: "https://linkedin.com/in/yourusername",
                  icon: Linkedin,
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-text-muted hover:text-primary transition-all duration-200"
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
            <p className="font-ml text-text-muted text-sm text-center">
              © 2025 Portfolio
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
