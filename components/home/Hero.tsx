import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarDays, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { clinic } from "@/config/clinic";
export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-50"></div>
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-25 lg:grid-cols-2">

        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ⭐ Trusted by 5,000+ Happy Patients
          </span>

          <h1 className="mt-8 text-3xl
sm:text-4xl
lg:text-5xl">
            <>
             {clinic.tagline}
                 <span className=" mt-2 block text-blue-600">
                     Our Priority
                 </span>
            </>
          </h1>

          <p className="mt-6 max-w-xl text-base
md:text-lg">
            {clinic.description}
          </p>

          <div className="mt-10 flex flex-col
sm:flex-row
gap-4">
            <a href="#appointment">
  <Button size="lg">
    <CalendarDays className="mr-2 h-5 w-5" />
    {siteConfig.appointmentText}
  </Button>
</a>

            <a href={`tel:${siteConfig.phone}`}>
  <Button size="lg" variant="outline">
    <Phone className="mr-2 h-5 w-5" />
    {siteConfig.phone}
  </Button>
</a>
          </div>

          <div className="mt-12 flex gap-10">
            
          </div>
        </div>
        <div className="object_cover">
            <div className="relative w-full
max-w-[430px]
h-[420px]
md:h-[500px]
lg:h-[550px]">
              <Image
                src={clinic.heroImage}
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