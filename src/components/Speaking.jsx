import React from "react";
import { ArrowUpRight, Mic2 } from "lucide-react";
import speak from "../images/speaking.png"
const topics = [
  "Leadership",
  "Career Growth",
  "Workforce Development",
  "Professional Development",
];

function Speaking() {
  return (
    <section
      id="speaking"
      className="bg-[#f6f1eb] text-[#171514]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Content */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9a6a43]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#856e60]">
                Speaking & Engagements
              </span>
            </div>

            <h2 className="max-w-[650px] font-serif text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.045em]">
              Inspiring
              <br />
              Conversations.
              <br />
              <span className="text-[#3b1725]">Real Change.</span>
            </h2>

            <p className="mt-8 max-w-[570px] text-[15px] leading-[1.85] text-[#5f5753] sm:text-[16px]">
              Monique speaks to professionals, organizations, educational
              institutions, and communities about leadership, career growth,
              workforce development, and the future of work.
            </p>

            <p className="mt-5 max-w-[570px] text-[14px] leading-[1.85] text-[#756c67]">
              Her goal is simple: leave every audience with practical insight,
              a renewed sense of possibility, and ideas they can put into
              action.
            </p>

            {/* Topics */}
            <div className="mt-9 grid max-w-[600px] grid-cols-2 border-t border-[#d8cec4]">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-3 border-b border-[#d8cec4] py-4 pr-5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9a6a43]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#3b3633]">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-9 inline-flex items-center bg-[#171514] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f6f1eb] transition-colors duration-300 hover:bg-[#3b1725]"
            >
              Book Monique to Speak

              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
                className="ml-3"
              />
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-[#9a6a43]" />

            <div className="relative overflow-hidden bg-[#e4dad0]">
              <img
                src={speak}
                alt="Dr. Monique C. Johnson speaking"
                className="aspect-[4/5] w-full object-cover object-center lg:aspect-[4/4.5]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#171514]/70 to-transparent p-7 sm:p-9">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d8c6b9]">
                      Speaker · Facilitator · Educator
                    </p>

                    <p className="mt-2 max-w-[360px] font-serif text-[26px] leading-[1.05] text-[#f6f1eb] sm:text-[32px]">
                      Insight. Experience. Action.
                    </p>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center border border-[#d8c6b9] text-[#f6f1eb] sm:flex">
                    <Mic2 size={18} strokeWidth={1.3} />
                  </div>
                </div>
              </div>
            </div>

            {/* Side label */}
            <div className="absolute -left-7 bottom-10 hidden lg:block">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#856e60] [writing-mode:vertical-rl]">
                Inspiring meaningful conversations
              </span>
            </div>
          </div>
        </div>

        {/* Bottom credibility strip */}
        <div className="mt-20 border-y border-[#d8cec4] py-7">
          <div className="grid gap-6 sm:grid-cols-3 sm:items-center">
            <div>
              <p className="font-serif text-[25px] text-[#3b1725]">
                25+
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#856e60]">
                Years of Experience
              </p>
            </div>

            <div className="sm:border-l sm:border-[#d8cec4] sm:pl-8">
              <p className="font-serif text-[25px] text-[#3b1725]">
                Coach
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#856e60]">
                Facilitator · Speaker
              </p>
            </div>

            <div className="sm:border-l sm:border-[#d8cec4] sm:pl-8">
              <p className="font-serif text-[25px] text-[#3b1725]">
                People
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#856e60]">
                Leadership · Organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speaking;