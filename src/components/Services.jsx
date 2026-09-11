import React from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  UsersRound,
  Building2,
  MessageCircle,
  GraduationCap,
  Presentation,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Career Development",
    description:
      "Strategic guidance for professionals navigating career growth, transitions, and new possibilities.",
    services: [
      "Career Development & Transition",
      "Professional Development",
      "Career Strategy",
      "Career Preparation",
    ],
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Leadership Development",
    description:
      "Coaching and development for emerging and established leaders ready to strengthen their confidence, capabilities, and impact.",
    services: [
      "Executive & Leadership Coaching",
      "Leadership Development",
      "Effective Communication",
      "Team Building",
    ],
  },
  {
    number: "03",
    icon: Building2,
    title: "Workforce Solutions",
    description:
      "People-centered strategies that help organizations develop talent, strengthen teams, and create more effective workplaces.",
    services: [
      "Workforce Development",
      "Talent Acquisition & Retention",
      "Inclusive Workplaces",
      "Strategic Planning",
    ],
  },
];

const additionalServices = [
  {
    icon: MessageCircle,
    title: "Consulting",
    description:
      "Strategic insight and practical guidance tailored to individual and organizational needs.",
  },
  {
    icon: GraduationCap,
    title: "Training & Facilitation",
    description:
      "Engaging learning experiences designed to develop people, teams, and workplace capabilities.",
  },
  {
    icon: Presentation,
    title: "Speaking",
    description:
      "Thoughtful presentations around careers, leadership, workforce development, and professional growth.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#171514] text-[#f6f1eb]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-20">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#765160] pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b89578]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#cdb9aa]">
                Areas of Expertise
              </span>
            </div>

            <h2 className="max-w-[820px] font-serif text-[clamp(3rem,5.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.045em]">
              Expertise Built Around
              <br />
              <span className="text-[#c7a58c]">People & Progress.</span>
            </h2>
          </div>

          <div className="lg:pb-1 lg:pl-10">
            <p className="max-w-[430px] text-[14px] leading-[1.9] text-[#d5c8c1] sm:text-[15px]">
              From career transitions to organizational development, Monique
              brings more than 25 years of experience to the people and
              challenges that matter most.
            </p>
          </div>
        </div>

        {/* Main Services */}
        <div className="grid border-b border-[#765160] md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className={`group py-10 md:px-8 md:py-14 ${
                  index !== 0
                    ? "border-t border-[#765160] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                {/* Number + icon */}
                <div className="mb-14 flex items-center justify-between">
                  <span className="font-serif text-[20px] text-[#c7a58c]">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8b6976] text-[#d9c9c0] transition-all duration-500 group-hover:border-[#c7a58c] group-hover:bg-[#f6f1eb] group-hover:text-[#3b1725]">
                    <Icon size={19} strokeWidth={1.3} />
                  </div>
                </div>

                <h3 className="max-w-[320px] font-serif text-[clamp(2rem,3vw,3rem)] leading-[0.95] tracking-[-0.035em]">
                  {service.title}
                </h3>

                <p className="mt-6 max-w-[350px] text-[13px] leading-[1.85] text-[#d1c3bc]">
                  {service.description}
                </p>

                {/* Service details */}
                <div className="mt-9 border-t border-[#765160] pt-6">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#b89578]">
                    Includes
                  </span>

                  <ul className="mt-5 space-y-3">
                    {service.services.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[11px] leading-[1.5] text-[#eee5df]"
                      >
                        <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#c7a58c]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f6f1eb]"
                >
                  Discuss Your Needs

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* Broader Practice */}
        <div className="pt-16">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b89578]">
                Beyond the Core
              </span>

              <h3 className="mt-3 font-serif text-[clamp(2rem,3.5vw,3.2rem)] leading-none tracking-[-0.035em]">
                A multifaceted practice.
              </h3>
            </div>

            <p className="max-w-[580px] text-[13px] leading-[1.8] text-[#cbbdb6]">
              Coaching is one part of the work. Monique also partners with
              organizations and communities through consulting, training,
              facilitation, and speaking.
            </p>
          </div>

          {/* Secondary services */}
          <div className="mt-10 grid border-y border-[#765160] md:grid-cols-3">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`group py-8 md:px-7 ${
                    index !== 0
                      ? "border-t border-[#765160] md:border-l md:border-t-0"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#765160] text-[#c7a58c]">
                      <Icon size={17} strokeWidth={1.3} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.3}
                      className="text-[#8e717c] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c7a58c]"
                    />
                  </div>

                  <h4 className="mt-8 font-serif text-[24px]">
                    {service.title}
                  </h4>

                  <p className="mt-3 max-w-[300px] text-[12px] leading-[1.75] text-[#bfaea7]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 flex flex-col gap-6 border-t border-[#765160] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[650px] font-serif text-[clamp(1.4rem,2.3vw,2.1rem)] italic leading-[1.2] text-[#d8c1b2]">
            Bringing experience, strategy, and empathy to every engagement.
          </p>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f6f1eb]"
          >
            Start a Conversation

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;