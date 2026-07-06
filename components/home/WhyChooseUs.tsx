import { features } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Exceptional Care, Every Visit
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We combine experience, technology, and compassion to deliver
            outstanding dental care for every patient.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}