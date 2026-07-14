import {
  Smile,
  ShieldCheck,
  Sparkles,
  ScanLine,
  HeartPulse,
 Syringe,
} from "lucide-react";

export const services = [
  {
    title: "General Dentistry",
    description: "Complete oral health care for the entire family.",
    icon: Smile,
  },
  {
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth.",
    icon: ShieldCheck,
  },
  {
    title: "Teeth Whitening",
    description: "Professional cosmetic whitening treatments.",
    icon: Sparkles,
  },
  {
    title: "Digital X-Rays",
    description: "Fast, safe and accurate diagnostics.",
    icon: ScanLine,
  },
  {
    title: "Emergency Care",
    description: "Immediate treatment when you need it most.",
    icon: HeartPulse,
  },
  {
    title: "Root Canal",
    description: "Pain-free modern root canal procedures.",
    icon: Syringe,
  },
];
export const serviceNames = services.map((service) => service.title);