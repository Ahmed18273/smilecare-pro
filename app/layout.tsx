import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import AosProvider from "@/components/providers/AosProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Javed's Dental Surgery",
    template: "%s | SmileCare Pro",
  },

  description:
    "Professional dental care including cosmetic dentistry, implants, orthodontics and emergency dental services.",

  keywords: [
    "Dentist",
    "Dental Clinic",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Emergency Dentist",
    "Orthodontics",
  ],

  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    title: "Dr. Javed's Dental Surgery",
    description:
      "Modern dental care with experienced professionals.",

    url: "http://localhost:3000",

    siteName: "Dr. Javed's Dental Surgery",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Javed's Dental Surgery",
    description:
      "Modern dental care with experienced professionals",

    images: ["/hero.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <AosProvider>
          {children}
          <Toaster />
        </AosProvider>
      </body>
    </html>
  );
}