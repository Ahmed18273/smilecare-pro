import FadeIn from "@/components/animations/fade-in";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="font-semibold uppercase tracking-widest text-blue-600">
              Testimonials
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              What Our Patients Say
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.15}>
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <p className="text-slate-600 leading-7">
                  "{item.review}"
                </p>

                <div className="mt-8">
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-blue-600">
                    {item.treatment}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}