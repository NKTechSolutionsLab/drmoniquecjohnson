import React from "react";
import about from "../images/about.png"
const roles = [
  "Career Strategist",
  "Executive Coach",
  "Workforce Professional",
  "Consultant",
  "Educator",
  "Speaker",
];

function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#f6f1eb] text-[#171514]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-[#9a6a43]" />

            <div className="relative aspect-[4/5] overflow-hidden bg-[#e5dbd1]">
              <img
                src={about}
                alt="Dr. Monique C. Johnson"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#171514]/60 to-transparent p-7">
                <p className="font-serif text-[24px] italic text-[#f6f1eb]">
                  People. Purpose. Progress.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 hidden bg-[#3b1725] px-7 py-5 text-[#f6f1eb] sm:block">
              <p className="font-serif text-[30px] leading-none">25+</p>
              <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#cdb9aa]">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9a6a43]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#856e60]">
                About Dr. Monique C. Johnson
              </span>
            </div>

            <h2 className="max-w-[720px] font-serif text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.045em]">
              A Lifelong Commitment
              <br />
              <span className="text-[#3b1725]">
                to People & Possibilities.
              </span>
            </h2>

            <div className="mt-8 max-w-[650px] space-y-5 text-[15px] leading-[1.85] text-[#5f5753] sm:text-[16px]">
              <p>
                Dr. Monique C. Johnson is a career development strategist,
                executive coach, and workforce development professional with
                more than 25 years of experience.
              </p>

              <p>
                Her experience spans higher education, workforce development,
                talent acquisition, nonprofit leadership, organizational
                consulting, and executive coaching.
              </p>

              <p>
                Through coaching, consulting, training, and facilitation, she
                helps individuals, leaders, schools, and organizations navigate
                change, clarify goals, develop talent, and move forward with
                purpose.
              </p>
            </div>

            {/* Roles */}
            <div className="mt-9 grid max-w-[680px] grid-cols-2 border-t border-[#d8cec4] sm:grid-cols-3">
              {roles.map((role) => (
                <div
                  key={role}
                  className="border-b border-[#d8cec4] py-4 pr-4"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3b3633]">
                    {role}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center bg-[#171514] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f6f1eb] transition-colors duration-300 hover:bg-[#3b1725]"
              >
                Work With Me
                <span className="ml-3 text-sm">→</span>
              </a>

              <a
                href="#services"
                className="group inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3b3633]"
              >
                Explore My Work
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-[#d8cec4] pt-8">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#856e60]">
              The Perspective I Bring
            </span>

            <p className="max-w-[850px] font-serif text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.2] tracking-[-0.02em] text-[#3b1725]">
              Strategic insight. Practical guidance. Empathy. Accountability.
              A people-centered approach to meaningful progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;