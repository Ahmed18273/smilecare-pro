"use client";

import CountUp from "react-countup";
import FadeIn from "@/components/animations/fade-in";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center text-white lg:grid-cols-4">
        {stats.map((stat, index) => {
          const value = Number(stat.number.replace(/[^0-9.]/g, ""));
          const suffix = stat.number.replace(/[0-9.]/g, "");

          return (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div>
                <h2 className="text-5xl font-bold">
                  <CountUp
                    end={value}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                    decimals={stat.number.includes(".") ? 1 : 0}
                  />
                  {suffix}
                </h2>

                <p className="mt-3 text-blue-100">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}