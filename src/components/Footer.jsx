import React from "react";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Speaking", href: "#speaking" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[15px] w-[15px]"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.4.58A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.86.58 9.4.58 9.4.58s7.54 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[16px] w-[16px]"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[16px] w-[16px]"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "#",
    icon: YoutubeIcon,
  },
  {
    label: "Email",
    href: "mailto:hello@drmoniquecjohnson.com",
    icon: MailIcon,
  },
];

function Footer() {
  return (
    <footer className="bg-[#f6f1eb] text-[#171514]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-[#d8cec4] py-12 lg:grid-cols-[1fr_1.5fr_0.6fr] lg:gap-16">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-serif text-[24px] tracking-[-0.03em]"
            >
              Dr. Monique C. Johnson
            </a>

            <p className="mt-5 max-w-[300px] text-[11px] leading-[1.8] text-[#756c67]">
              Career strategist, executive coach, workforce development
              professional, consultant, educator, and speaker.
            </p>

            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#856e60]">
              People · Purpose · Progress
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#856e60]">
              Explore
            </p>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3b3633] transition-colors duration-300 hover:text-[#3b1725]"
                >
                  {item.label}

                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#856e60]">
              Connect
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center border border-[#cfc3ba] text-[#3b3633] transition-all duration-300 hover:border-[#3b1725] hover:bg-[#3b1725] hover:text-[#f6f1eb]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3b1725]"
            >
              Get In Touch

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-6 text-[9px] text-[#857b75] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Dr. Monique C. Johnson. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 uppercase tracking-[0.1em]">

            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#3b1725]"
            >
              Privacy
            </a>

            <span className="h-3 w-px bg-[#d8cec4]" />

            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#3b1725]"
            >
              Terms
            </a>

            <span className="h-3 w-px bg-[#d8cec4]" />

            <span>
              Site by NK TechSolutions
            </span>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;