import Image from "next/image";
import { doctor } from "@/data/doctor";
import FadeIn from "@/components/animations/fade-in";
export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <FadeIn>
        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        </FadeIn>
        <FadeIn delay={0.2}>
            <div>
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Meet Your Dentist
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            {doctor.name}
          </h2>

          <p className="mt-2 text-lg text-blue-600">
            {doctor.degree}
          </p>

          <p className="mt-6 text-slate-600 leading-8">
            {doctor.bio}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {doctor.achievements.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-100 p-4 font-medium"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}