import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const organizations = [
  {
    name: "COLOR",
    logo: (
      <svg
        viewBox="0 0 220 70"
        className="h-auto w-full"
        role="img"
        aria-label="COLOR"
      >
        <text
          x="8"
          y="38"
          fill="currentColor"
          fontSize="38"
          fontWeight="600"
          letterSpacing="-2"
          fontFamily="Arial, sans-serif"
        >
          COLOR
        </text>

        <text
          x="10"
          y="56"
          fill="currentColor"
          fontSize="7"
          letterSpacing="2.5"
          fontFamily="Arial, sans-serif"
        >
          DIVERSITY · EMPOWERMENT
        </text>
      </svg>
    ),
  },

  {
    name: "FIS",
    logo: (
      <svg
        viewBox="0 0 150 70"
        className="h-auto w-full"
        role="img"
        aria-label="FIS"
      >
        <circle cx="22" cy="20" r="4" fill="currentColor" opacity="0.8" />
        <circle cx="31" cy="20" r="4" fill="currentColor" opacity="0.65" />
        <circle cx="40" cy="20" r="4" fill="currentColor" opacity="0.5" />

        <text
          x="12"
          y="48"
          fill="currentColor"
          fontSize="34"
          fontWeight="500"
          letterSpacing="-1"
          fontFamily="Arial, sans-serif"
        >
          FIS
        </text>
      </svg>
    ),
  },

  {
    name: "Teachers College Columbia University",
    logo: (
      <svg
        viewBox="0 0 250 70"
        className="h-auto w-full"
        role="img"
        aria-label="Teachers College Columbia University"
      >
        <text
          x="8"
          y="29"
          fill="currentColor"
          fontSize="17"
          fontWeight="700"
          letterSpacing="1.2"
          fontFamily="Georgia, serif"
        >
          TEACHERS COLLEGE
        </text>

        <line
          x1="8"
          y1="36"
          x2="238"
          y2="36"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />

        <text
          x="8"
          y="53"
          fill="currentColor"
          fontSize="12"
          letterSpacing="2"
          fontFamily="Georgia, serif"
        >
          COLUMBIA UNIVERSITY
        </text>
      </svg>
    ),
  },

  {
    name: "Northwest Local School District",
    logo: (
      <svg
        viewBox="0 0 180 90"
        className="h-auto w-full"
        role="img"
        aria-label="Northwest Local School District"
      >
        <text
          x="90"
          y="46"
          textAnchor="middle"
          fill="currentColor"
          fontSize="54"
          fontWeight="800"
          fontFamily="Georgia, serif"
        >
          N
        </text>

        <text
          x="90"
          y="67"
          textAnchor="middle"
          fill="currentColor"
          fontSize="7"
          fontWeight="700"
          letterSpacing="1.5"
          fontFamily="Arial, sans-serif"
        >
          NORTHWEST
        </text>

        <text
          x="90"
          y="79"
          textAnchor="middle"
          fill="currentColor"
          fontSize="6"
          letterSpacing="1"
          fontFamily="Arial, sans-serif"
        >
          LOCAL SCHOOL DISTRICT
        </text>
      </svg>
    ),
  },

  {
    name: "National Underground Railroad Freedom Center",
    logo: (
      <svg
        viewBox="0 0 270 80"
        className="h-auto w-full"
        role="img"
        aria-label="National Underground Railroad Freedom Center"
      >
        <path
          d="M28 12 C18 24 18 38 28 48 C37 39 40 27 28 12Z"
          fill="currentColor"
        />

        <path
          d="M28 19 C23 28 24 35 28 40 C33 33 34 27 28 19Z"
          fill="#171514"
          opacity="0.35"
        />

        <text
          x="50"
          y="28"
          fill="currentColor"
          fontSize="12"
          fontWeight="700"
          letterSpacing="0.7"
          fontFamily="Arial, sans-serif"
        >
          NATIONAL UNDERGROUND
        </text>

        <text
          x="50"
          y="44"
          fill="currentColor"
          fontSize="12"
          fontWeight="700"
          letterSpacing="0.7"
          fontFamily="Arial, sans-serif"
        >
          RAILROAD FREEDOM CENTER
        </text>

        <text
          x="50"
          y="59"
          fill="currentColor"
          fontSize="7"
          letterSpacing="1"
          fontFamily="Arial, sans-serif"
          opacity="0.75"
        >
          FREEDOM · HISTORY · COMMUNITY
        </text>
      </svg>
    ),
  },

  {
    name: "Public Allies Cincinnati",
    logo: (
      <svg
        viewBox="0 0 230 80"
        className="h-auto w-full"
        role="img"
        aria-label="Public Allies Cincinnati"
      >
        <circle
          cx="29"
          cy="40"
          r="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
        />

        <path
          d="M29 20 V60 M9 40 H49"
          stroke="currentColor"
          strokeWidth="3"
        />

        <text
          x="62"
          y="34"
          fill="currentColor"
          fontSize="16"
          fontWeight="800"
          fontFamily="Arial, sans-serif"
        >
          PUBLIC
        </text>

        <text
          x="62"
          y="51"
          fill="currentColor"
          fontSize="16"
          fontWeight="800"
          fontFamily="Arial, sans-serif"
        >
          ALLIES
        </text>

        <text
          x="62"
          y="64"
          fill="currentColor"
          fontSize="7"
          letterSpacing="1.5"
          fontFamily="Arial, sans-serif"
        >
          CINCINNATI
        </text>
      </svg>
    ),
  },

  {
    name: "Lakota Local Schools",
    logo: (
      <svg
        viewBox="0 0 220 75"
        className="h-auto w-full"
        role="img"
        aria-label="Lakota Local Schools"
      >
        <text
          x="8"
          y="43"
          fill="currentColor"
          fontSize="42"
          fontWeight="700"
          letterSpacing="-3"
          fontFamily="Georgia, serif"
        >
          LAKOTA
        </text>

        <circle
          cx="104"
          cy="37"
          r="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <text
          x="108"
          y="62"
          textAnchor="middle"
          fill="currentColor"
          fontSize="7"
          letterSpacing="2"
          fontFamily="Arial, sans-serif"
        >
          LOCAL SCHOOLS
        </text>
      </svg>
    ),
  },

  {
    name: "PIVOT",
    logo: (
      <svg
        viewBox="0 0 190 80"
        className="h-auto w-full"
        role="img"
        aria-label="PIVOT"
      >
        <text
          x="95"
          y="48"
          textAnchor="middle"
          fill="currentColor"
          fontSize="42"
          fontWeight="500"
          letterSpacing="-4"
          fontFamily="Georgia, serif"
        >
          PIVOT
        </text>

        <path
          d="M40 58 Q95 70 150 58"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.65"
        />
      </svg>
    ),
  },
];

function ClientLogos() {
  const scrollLogos = (direction) => {
    const container = document.getElementById("organization-logos");

    if (!container) {
      return;
    }

    container.scrollBy({
      left: direction === "next" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#171514] text-[#f6f1eb]">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-16 lg:py-16 xl:px-20">

        {/* Heading */}
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-[#3b3633]" />

          <p className="shrink-0 text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b89578]">
            Trusted by Organizations & Partners
          </p>

          <span className="h-px flex-1 bg-[#3b3633]" />
        </div>

        {/* Logo viewport */}
        <div className="relative mt-8">

          {/* Left */}
          <button
            type="button"
            onClick={() => scrollLogos("previous")}
            aria-label="Scroll organizations left"
            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-[#514843] bg-[#171514] text-[#f6f1eb] transition-all duration-300 hover:border-[#c7a58c] hover:text-[#c7a58c]"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.3}
            />
          </button>

          {/* Logos */}
          <div
            id="organization-logos"
            className="mx-10 flex snap-x snap-mandatory items-center gap-8 overflow-x-auto px-4 py-5 scrollbar-none sm:gap-12 lg:mx-12 lg:justify-between lg:gap-8"
          >
            {organizations.map((organization) => (
              <div
                key={organization.name}
                className="group flex h-20 min-w-[145px] shrink-0 snap-center items-center justify-center text-[#f6f1eb] opacity-65 transition-all duration-300 hover:opacity-100 sm:min-w-[165px]"
              >
                <div className="w-full max-w-[155px]">
                  {organization.logo}
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <button
            type="button"
            onClick={() => scrollLogos("next")}
            aria-label="Scroll organizations right"
            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-[#514843] bg-[#171514] text-[#f6f1eb] transition-all duration-300 hover:border-[#c7a58c] hover:text-[#c7a58c]"
          >
            <ArrowRight
              size={16}
              strokeWidth={1.3}
            />
          </button>
        </div>

        {/* Bottom line */}
        <div className="mt-7 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-[#9a6a43]" />

          <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#756c67]">
            People · Leadership · Organizations
          </span>

          <span className="h-px w-8 bg-[#9a6a43]" />
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;