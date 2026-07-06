"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/40 bg-white/70 backdrop-blur-x1 transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          {siteConfig.clinicName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#home">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button>
            <Phone className="mr-2 h-4 w-4" />
            {siteConfig.appointmentText}
          </Button>
        </div>

        <button className="md:hidden">
          <Menu className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
}