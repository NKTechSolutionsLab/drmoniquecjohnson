import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const organizations = [
  {
    name: "COLOR",
    logo: "/logos/color.png",
  },
  {
    name: "FIS",
    logo: "/logos/fis.png",
  },
  {
    name: "Teachers College Columbia University",
    logo: "/logos/teachers-college.png",
  },
  {
    name: "Northwest Local School District",
    logo: "/logos/northwest.png",
  },
  {
    name: "National Underground Railroad Freedom Center",
    logo: "/logos/freedom-center.png",
  },
  {
    name: "Public Allies Cincinnati",
    logo: "/logos/public-allies.png",
  },
  {
    name: "Lakota Local Schools",
    logo: "/logos/lakota.png",
  },
  {
    name: "PIVOT",
    logo: "/logos/pivot.png",
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
        {/* Section heading */}
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-[#d8cec4]" />

          <p className="shrink-0 text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-[#856e60]">
            Trusted by Organizations & Partners
          </p>

          <span className="h-px flex-1 bg-[#d8cec4]" />
        </div>

        {/* Logo viewport */}
        <div className="relative mt-8">
          {/* Left control */}
          <button
            type="button"
            onClick={() => scrollLogos("previous")}
            aria-label="Scroll organizations left"
            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-[#f6f1eb] text-[#3b3633] transition-opacity duration-300 hover:opacity-60"
          >
            <ArrowLeft size={16} strokeWidth={1.3} />
          </button>

          {/* Logos */}
          <div
            id="organization-logos"
            className="mx-10 flex snap-x snap-mandatory items-center gap-10 overflow-x-auto px-3 py-4 scrollbar-none sm:gap-14 lg:mx-12 lg:justify-between lg:gap-10"
          >
            {organizations.map((organization) => (
              <div
                key={organization.name}
                className="flex h-16 min-w-[130px] shrink-0 snap-center items-center justify-center grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:min-w-[150px]"
              >
                <img
                  src={organization.logo}
                  alt={`${organization.name} logo`}
                  className="max-h-12 max-w-[145px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right control */}
          <button
            type="button"
            onClick={() => scrollLogos("next")}
            aria-label="Scroll organizations right"
            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-[#f6f1eb] text-[#3b3633] transition-opacity duration-300 hover:opacity-60"
          >
            <ArrowRight size={16} strokeWidth={1.3} />
          </button>
        </div>

        {/* Bottom line */}
        <div className="mt-7 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-[#9a6a43]" />

          <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#a29892]">
            People · Leadership · Organizations
          </span>

          <span className="h-px w-8 bg-[#9a6a43]" />
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;