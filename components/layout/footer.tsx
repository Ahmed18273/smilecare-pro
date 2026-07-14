import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-1
sm:grid-cols-2
lg:grid-cols-4">

        {/* Clinic */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            {siteConfig.clinicName}
          </h2>

          <p className="mt-4 text-slate-300">
            {siteConfig.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Quick Links
          </h3>

          <div className="space-y-3">
            <a href="#home" className="block hover:text-blue-400">Home</a>
            <a href="#services" className="block hover:text-blue-400">Services</a>
            <a href="#about" className="block hover:text-blue-400">About</a>
            <a href="#gallery" className="block hover:text-blue-400">Gallery</a>
            <a href="#appointment" className="block hover:text-blue-400">Book Appointment</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>{siteConfig.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>{siteConfig.email}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} />
              <span>{siteConfig.address}</span>
            </div>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a href={siteConfig.social.facebook}>
              <FaFacebookF size={20} />
            </a>

            <a href={siteConfig.social.instagram}>
              <FaInstagram size={20} />
            </a>

            <a href={siteConfig.social.twitter}>
              <FaXTwitter size={20} />
            </a>

            <a href={siteConfig.social.linkedin}>
              <FaLinkedinIn size={20} />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {siteConfig.clinicName}. All rights reserved.
      </div>
    </footer>
  );
}