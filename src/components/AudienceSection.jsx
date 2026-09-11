import React from "react";

const audiences = [
  {
    number: "01",
    title: "Individuals",
    description:
      "Gain clarity, confidence, and direction as you navigate your career and professional growth.",
    points: [
      "Career Development",
      "Career Transitions",
      "Professional Growth",
    ],
    href: "#services",
  },
  {
    number: "02",
    title: "Leaders",
    description:
      "Develop the perspective, confidence, and capabilities to lead with greater impact.",
    points: [
      "Executive Coaching",
      "Leadership Development",
      "Career Advancement",
    ],
    href: "#services",
  },
  {
    number: "03",
    title: "Organizations",
    description:
      "Strengthen people, teams, and workplaces through strategic workforce development.",
    points: [
      "Workforce Development",
      "Talent Strategy",
      "Inclusive Workplaces",
    ],
    href: "#services",
  },
];

function AudienceSection() {
  return (
    <section
      id="audiences"
      className="bg-[#171514] text-[#f6f1eb]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
        {/* Section heading */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9a6a43]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#bca898]">
                Who I Work With
              </span>
            </div>

            <h2 className="max-w-[500px] font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.95] tracking-[-0.04em]">
              Support for{" "}
              <span className="text-[#b89578]">Every Stage.</span>
            </h2>
          </div>

          <div className="lg:pb-2 lg:pl-16">
            <p className="max-w-[580px] text-[15px] leading-[1.8] text-[#cfc5be] sm:text-[16px]">
              Whether you are navigating a career transition, developing as a
              leader, or building stronger organizations, my work is designed
              around people, possibility, and purposeful progress.
            </p>
          </div>
        </div>

        {/* Audience cards */}
        <div className="grid border-t border-[#514843] md:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.number}
              className={`group relative border-[#514843] py-9 md:px-8 md:py-10 ${
                index !== 0 ? "border-t md:border-l md:border-t-0" : ""
              }`}
            >
              {/* Number */}
              <div className="mb-12 flex items-center justify-between">
                <span className="font-serif text-[18px] text-[#b89578]">
                  {audience.number}
                </span>

                <span className="h-px w-10 bg-[#514843] transition-all duration-500 group-hover:w-16 group-hover:bg-[#9a6a43]" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-[clamp(2rem,3vw,3rem)] leading-none tracking-[-0.03em]">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="mt-6 max-w-[340px] text-[14px] leading-[1.8] text-[#bdb3ac]">
                {audience.description}
              </p>

              {/* Services */}
              <div className="mt-8 space-y-3">
                {audience.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-[11px] uppercase tracking-[0.08em] text-[#e2d9d2]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#9a6a43]" />
                    {point}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={audience.href}
                className="mt-10 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f6f1eb]"
              >
                Explore
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 flex flex-col gap-5 border-t border-[#514843] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-[20px] italic text-[#b89578]">
            People. Purpose. Progress.
          </p>

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8e837c]">
            Career · Leadership · Workforce
          </span>
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;