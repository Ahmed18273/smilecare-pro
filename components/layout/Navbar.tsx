"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/40 bg-white/70 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="max-w-[180px] text-2xl font-bold text-blue-700">
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
  <div className="border-t bg-white md:hidden">
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