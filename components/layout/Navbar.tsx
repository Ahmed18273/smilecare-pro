"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";


export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Always show at the top
    if (currentScrollY < 20) {
      setShowNavbar(true);
    }
    // Hide when scrolling down
    else if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    }
    // Show when scrolling up
    else {
      setShowNavbar(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
  return (
    <header
  className={`fixed left-0 right-0 z-50 transition-transform duration-300
    ${
      showNavbar
        ? "translate-y-0"
        : "-translate-y-full"
    }
    border-b border-slate-200/40 bg-white/70 backdrop-blur-md`}
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="max-w-[220px] text-2xl font-bold text-blue-700">
          {siteConfig.clinicName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
  href="#home"
  className={`font-medium transition ${
    activeSection === "home"
      ? "text-blue-600"
      : "text-slate-700 hover:text-blue-600"
  }`}
>
  Home
</Link>

        <a
  href="#services"
  onClick={(e) => {
    e.preventDefault();

    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className={`font-medium transition ${
    activeSection === "services"
      ? "text-blue-600"
      : "text-slate-700 hover:text-blue-600"
  }`}
>
  Services
</a>

      <a href="#about" className={`font-medium transition ${
    activeSection === "about"
      ? "text-blue-600"
      : "text-slate-700 hover:text-blue-600"
  }`}>
          About
        </a>

        <a href="#gallery" className={`font-medium transition ${
    activeSection === "gallery"
      ? "text-blue-600"
      : "text-slate-700 hover:text-blue-600"
  }`}>
          Gallery
        </a>

        <a href="#contact" className={`font-medium transition ${
    activeSection === "contact"
      ? "text-blue-600"
      : "text-slate-700 hover:text-blue-600"
  }`}>
          Contact
        </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#appointment">
  <Button>
    <Phone className="mr-2 h-4 w-4" />
    {siteConfig.appointmentText}
  </Button>
</a>
        </div>

        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden"
>
  
  {menuOpen ? (
    <X className="h-7 w-7" />
  ) : (
    <Menu className="h-7 w-7" />
  )}
</button>
      </div>
      {menuOpen && (
  <div
  className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden
    ${
      menuOpen
        ? "max-h-96 opacity-100 border-t"
        : "max-h-0 opacity-0"
    }
    bg-white`}
>
   <nav className="flex flex-col px-6 py-4">

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="py-3"
      >
        Home
      </a>

      <a
        href="#services"
        onClick={() => setMenuOpen(false)}
        className="py-3"
      >
        Services
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="py-3"
      >
        About
      </a>

      <a
        href="#gallery"
        onClick={() => setMenuOpen(false)}
        className="py-3"
      >
        Gallery
      </a>

      <a
        href="#appointment"
        onClick={() => setMenuOpen(false)}
        className="py-3"
      >
        Appointment
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="py-3"
      >
        Contact
      </a>

    </nav>
  </div>
)}
    </header>
  );
}