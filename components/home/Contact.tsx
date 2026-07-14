import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Navigation,
} from "lucide-react";

import { siteConfig } from "@/data/site"

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Visit Our Clinic
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We'd love to help you achieve a healthier, brighter smile.
            Contact us today or visit our clinic.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-lg">
              <div className="rounded-2xl bg-blue-100 p-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Address
                </h3>

                <p className="mt-2 text-slate-600">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-lg">
              <div className="rounded-2xl bg-blue-100 p-3">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Phone
                </h3>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="mt-2 block text-slate-600 transition hover:text-blue-600"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-lg">
              <div className="rounded-2xl bg-blue-100 p-3">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Email
                </h3>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-slate-600 transition hover:text-blue-600"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-blue-100 p-3">
                  <Clock3 className="h-6 w-6 text-blue-600" />
                </div>

                <h3 className="font-semibold text-slate-900">
                  Working Hours
                </h3>

              </div>

              <div className="mt-5 space-y-3 text-slate-600">
                {siteConfig.workingHours.map((day) => (
                  <p key={day}>{day}</p>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              src={siteConfig.googleMapsEmbed}
              className="h-full min-h-[520px] w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

        <div className="mt-12 text-center">

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              siteConfig.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            <Navigation className="h-5 w-5" />
            Get Directions
          </a>

        </div>

      </div>
    </section>
  );
}