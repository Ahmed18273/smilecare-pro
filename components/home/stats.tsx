import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center text-white lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-5xl font-bold">{stat.number}</h2>
            <p className="mt-3 text-blue-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}