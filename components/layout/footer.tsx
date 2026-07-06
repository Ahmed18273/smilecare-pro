import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              {siteConfig.clinicName}
            </h2>

            <p className="mt-4 text-slate-300">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Contact</h3>

            <p className="mt-4">{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Hours</h3>

            <p className="mt-4">
              {siteConfig.workingHours}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-400">
          © 2026 {siteConfig.clinicName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}