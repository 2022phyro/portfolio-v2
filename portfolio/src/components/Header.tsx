"use client";

import { useState, useEffect } from "react";
import { Github, Instagram, Linkedin, Mail, Menu, Twitter, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Function to update active section based on scroll position
    const updateActiveSection = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    
    // Initial check
    updateActiveSection();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 mt-3 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } hidden md:block`}
      >        <div
          className={`transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-background/80 backdrop-blur-md border-b border-primary/20"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex gap-0 flex-col items-center justify-between h-24">
              {/* Top row with Logo and Navigation */}
              <div className="flex items-center justify-between w-full h-12 ">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link
                    href="#home"
                    className="flex items-center font-ms text-2xl font-bold text-primary"
                  >
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={50}
                      height={50}
                      className="mr-2"
                    />
                    <span className="text-md"> Afam the chameleony dev</span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="flex space-x-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`self-end relative active:scale-95 font-ms text-lg font-regular transition-colors transition-scale duration-200 group ${
                        activeSection === item.id 
                          ? 'text-primary font-semibold' 
                          : 'text-text hover:text-primary'
                      }`}
                    >
                      {item.name}
                      {/* Hover underline */}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                      {/* Active underline */}

                    </Link>
                  ))}
                </nav>
              </div>

              {/* Bottom row with Socials */}
              <div className="flex justify-end self-end w-auto h-12 bg-primary px-5">
                <div className="flex space-x-6 self-center">
                  <Link href="mailto:afam.ugwuanyi.u@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-6 h-6 text-accent hover:text-accent transition-colors duration-200" />
                  </Link>
                  <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 text-accent hover:text-accent transition-colors duration-200" />
                  </Link>
                  <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-6 h-6 text-accent hover:text-accent transition-colors duration-200" />
                  </Link>
                  <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-accent hover:text-accent transition-colors duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className={`fixed top-4 right-4 z-50 p-2 rounded-lg transition-all duration-300 ease-in-out md:hidden ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-primary text-white"
            : "bg-primary/80 text-white backdrop-blur-sm"
        }`}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Side Navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-bg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {" "}
          {/* Mobile Logo */}
          <div className="flex items-center justify-start h-16 px-6 border-b border-primary/20">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <Link
              href="#home"
              className="font-ms text-md font-bold text-primary"
            >
              Afam the chameleony dev
            </Link>
          </div>
          {/* Mobile Navigation */}
          <nav className="flex-1 px-6 py-8">
            {" "}            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative font-body text-lg font-medium transition-colors duration-200 group ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-text hover:text-primary'
                  }`}
                >
                  {item.name}
                  {/* Mobile hover underline */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  {/* Mobile active underline */}
                  {activeSection === item.id && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              ))}
            </div>
          </nav>          {/* Mobile Footer */}
          <div className="px-6 py-4 border-t border-primary/20">
            <p className="font-body text-text-alt text-sm mb-4">© 2025 Portfolio</p>
            {/* Mobile Socials */}
            <div className="flex space-x-4 justify-center">
              <Link href="mailto:afam.ugwuanyi.u@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-6 h-6 text-text hover:text-primary transition-colors duration-200" />
              </Link>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-text hover:text-primary transition-colors duration-200" />
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-text hover:text-primary transition-colors duration-200" />
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-text hover:text-primary transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
