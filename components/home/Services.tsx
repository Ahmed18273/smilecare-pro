import  {services}from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Complete Dental Care
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We combine modern technology with experienced professionals to
            provide exceptional dental care for every patient.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group rounded-3xl border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardContent className="p-8">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors group-hover:bg-blue-600">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {service.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}