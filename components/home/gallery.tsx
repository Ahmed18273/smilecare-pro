import Image from "next/image";
import FadeIn from "@/components/animations/fade-in";
import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" data-aos="fade-up" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-blue-600">
              Smile Gallery
            </span>

            <h2 className="mt-4 text-3xl
sm:text-4xl
lg:text-5xl">
              Before & After Results
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Real transformations achieved through personalized dental care.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-10 grid-cols-1
md:grid-cols-2
lg:grid-cols-3">
          {gallery.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.15}>
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

                <div className="grid grid-cols-2">

                  <div className="relative h-64">
                    <Image
                      src={item.before}
                      alt={`${item.title} Before`}
                      fill
                      sizes="50vw"
                      className="object-cover transition duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="relative h-64">
                    <Image
                      src={item.after}
                      alt={`${item.title} After`}
                      fill
                      sizes="50vw"
                      className="object-cover transition duration-500 hover:scale-110"
                    />
                  </div>

                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}