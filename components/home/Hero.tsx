import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarDays, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-50"></div>
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-25 lg:grid-cols-2">

        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ⭐ Trusted by 5,000+ Happy Patients
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            <>
             Your Smile.
                 <span className="block text-blue-600">
                     Our Priority.
                 </span>
            </>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">
              <CalendarDays className="mr-2 h-5 w-5" />
              {siteConfig.appointmentText}
            </Button>

            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              {siteConfig.phone}
            </Button>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-blue-600">18+</h2>
              <p className="text-slate-600">Years Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">10k+</h2>
              <p className="text-slate-600">Happy Patients</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">4.9★</h2>
              <p className="text-slate-600">Average Rating</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
            <div className="relative h-[550px] w-[430px] overflow-hidden rounded-[40px] border border-white/40 bg-white p-3 shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/dentist.jpg"
                alt="Dentist"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 430px"
                className="object-cover"
              />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur">
                  <p className="text-sm text-slate-500">Trusted Rating</p>
                    <h3 className="text-2xl font-bold text-slate-900">
                      ⭐ 4.9/5
                    </h3>
                </div>  
            </div>
        </div>
      </div>
    </section>
  );
}