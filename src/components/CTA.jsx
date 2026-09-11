import React from "react";
import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#171514] text-[#f6f1eb]"
    >
      {/* Subtle background structure */}
      <div className="absolute inset-0">
        <div className="absolute left-[12%] top-0 h-full w-px bg-[#2f2b29]" />
        <div className="absolute right-[18%] top-0 h-full w-px bg-[#2f2b29]" />
        <div className="absolute left-0 top-[28%] h-px w-full bg-[#2f2b29]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Main message */}
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9a6a43]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b89578]">
                Let&apos;s Work Together
              </span>
            </div>

            <h2 className="max-w-[900px] font-serif text-[clamp(3.2rem,6vw,6.8rem)] font-medium leading-[0.9] tracking-[-0.05em]">
              Ready to Take
              <br />
              <span className="italic text-[#c7a58c]">
                the Next Step?
              </span>
            </h2>

            <p className="mt-8 max-w-[620px] text-[15px] leading-[1.85] text-[#c8bdb7] sm:text-[16px]">
              Whether you are an individual looking for guidance, a leader
              ready to grow, or an organization building for the future —
              let&apos;s start a conversation about what comes next.
            </p>
          </div>

          {/* CTA card */}
          <div className="lg:flex lg:justify-end">
            <div className="w-full max-w-[390px] border border-[#514843] p-7 sm:p-9">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#b89578]">
                Start a Conversation
              </p>

              <p className="mt-5 font-serif text-[24px] leading-[1.2] text-[#f6f1eb]">
                Let&apos;s explore how I can support your next chapter.
              </p>

              <a
                href="mailto:hello@drmoniquecjohnson.com"
                className="mt-8 inline-flex w-full items-center justify-between bg-[#f6f1eb] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#171514] transition-colors duration-300 hover:bg-[#c7a58c]"
              >
                Get In Touch

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                />
              </a>

              <p className="mt-5 text-[10px] leading-[1.6] text-[#887c76]">
                Coaching · Consulting · Training · Speaking
              </p>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-5 border-t border-[#514843] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-[20px] italic text-[#c7a58c]">
            People. Purpose. Progress.
          </p>

          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#887c76]">
            Career · Leadership · Workforce
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;