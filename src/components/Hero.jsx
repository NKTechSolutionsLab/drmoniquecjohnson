import React from "react";
import hero from "../images/hero.png"


function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f6f1eb] pt-[76px]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1440px] lg:grid-cols-[1.05fr_0.95fr]">
        {/* Content */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#9a6a43]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#756c67]">
              Career · Leadership · Workforce
            </span>
          </div>

          <h1 className="max-w-[720px] font-serif text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.045em] text-[#171514]">
            People.
            <br />
            Purpose.
            <br />
            <span className="text-[#3b1725]">Progress.</span>
          </h1>

          <p className="mt-8 max-w-[570px] text-[15px] leading-[1.8] text-[#5f5753] sm:text-[16px]">
            Helping individuals, leaders, and organizations navigate change,
            develop talent, and move forward with purpose.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#171514] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f6f1eb] transition-colors duration-300 hover:bg-[#3b1725]"
            >
              Work With Me
              <span className="ml-3 text-sm">→</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center border border-[#bfb3aa] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3b3633] transition-colors duration-300 hover:border-[#3b1725] hover:text-[#3b1725]"
            >
              Explore Services
            </a>
          </div>

          {/* Credentials */}
          <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#d8cec4] pt-6">
            <div>
              <p className="font-serif text-[25px] leading-none text-[#171514]">
                25+
              </p>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#756c67]">
                Years Experience
              </p>
            </div>

            <span className="h-9 w-px bg-[#d8cec4]" />

            <div>
              <p className="font-serif text-[16px] leading-none text-[#171514]">
                Ed.D.
              </p>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#756c67]">
                Doctor of Education
              </p>
            </div>

            <span className="h-9 w-px bg-[#d8cec4]" />

            <div>
              <p className="font-serif text-[16px] leading-none text-[#171514]">
                NCC · CMCS
              </p>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#756c67]">
                Professional Credentials
              </p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative min-h-[620px] lg:min-h-full">
          {/* Background architectural detail */}
          <div className="absolute inset-0 bg-[#e8dfd6]" />

          <div className="absolute right-0 top-0 h-full w-[18%] border-l border-[#cfc2b8]" />

          <div className="absolute left-[12%] top-0 h-full w-px bg-[#d4c7bd]" />

          {/* Image */}
          <div className="absolute inset-[7%_8%_7%_10%] overflow-hidden">
            <img
              src={hero}
              alt="Dr. Monique C. Johnson"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/35 via-transparent to-transparent" />
          </div>

          {/* Vertical label */}
          <div className="absolute bottom-[10%] left-[3%] hidden [writing-mode:vertical-rl] lg:block">
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#756c67]">
              Dr. Monique C. Johnson
            </span>
          </div>

          {/* Experience badge */}
          <div className="absolute bottom-[11%] right-[3%] flex h-[125px] w-[125px] flex-col items-center justify-center rounded-full border border-[#9a6a43] bg-[#f6f1eb] text-center">
            <span className="font-serif text-[31px] leading-none text-[#3b1725]">
              25+
            </span>

            <span className="mt-2 max-w-[70px] text-[8px] font-semibold uppercase leading-[1.4] tracking-[0.14em] text-[#756c67]">
              Years of Experience
            </span>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex">
        <span className="h-px w-8 bg-[#9a6a43]" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#756c67]">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}

export default Hero;