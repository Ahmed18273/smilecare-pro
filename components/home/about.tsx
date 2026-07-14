import Container from "@/components/ui/Container";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import FadeIn from "@/components/animations/fade-in";
import { clinic } from "@/config/clinic";
export default function About() {
  return (
    <section
  id="about"
  data-aos="fade-up"
  className="scroll-mt-24 bg-white py-24"
>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
        <FadeIn>
        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src={clinic.doctorImage}
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

          <h2 className="mt-4 text-3xl
sm:text-4xl
lg:text-5xl">
            {doctor.name}
          </h2>

          <p className="mt-2 text-lg text-blue-600">
            {doctor.degree}
          </p>

          <p className="mt-1 text-base
md:text-lg8">
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
      </Container>
    </section>
  );
}