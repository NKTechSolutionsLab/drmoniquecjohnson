import React, { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Speaking", href: "#speaking" },
  { label: "Resources", href: "#resources" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#d8cec4]/60 bg-[#f6f1eb]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
        {/* Brand */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="flex flex-col leading-none"
          aria-label="Dr. Monique C. Johnson - Home"
        >
          <span className="font-serif text-[20px] tracking-[-0.02em] text-[#171514] lg:text-[22px]">
            Dr. Monique C. Johnson
          </span>

          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[#756c67]">
            Ed.D. · NCC · CMCS
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[12px] font-medium text-[#3b3633] transition-colors duration-300 hover:text-[#3b1725]"
            >
              {link.label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#9a6a43] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden bg-[#171514] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#f6f1eb] transition-colors duration-300 hover:bg-[#3b1725] md:block"
        >
          Work With Me
          <span className="ml-2">→</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-[60] flex h-10 w-10 items-center justify-center border border-[#d8cec4] text-[#171514] md:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-3/4 bg-current transition-all duration-300 ${
                isMenuOpen ? "w-full -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-[76px] w-full overflow-hidden border-b border-[#d8cec4] bg-[#f6f1eb] transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-7 pt-4">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-[#d8cec4]/70 py-4 text-[13px] font-medium uppercase tracking-[0.08em] text-[#3b3633] transition-colors duration-300 hover:text-[#3b1725]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-5 flex items-center justify-center bg-[#171514] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#f6f1eb] transition-colors duration-300 hover:bg-[#3b1725]"
            >
              Work With Me
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;