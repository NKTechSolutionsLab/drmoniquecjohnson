import React from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      
"Monique is an excellent career coach! I really enjoyed working with her in the last few months. She put extra effort, time and resources to guide me in any areas I need support on. Additionally, she is a great listener, asking me the right questions. From there, she guides my responses to a whole new level of thinking. ",
    name: "Claire G..",
    role: "Educator",
  },
  {
    quote:
      "As our first Program Director, Monique had to invent the structure of our program, offer training, recruit and manage volunteers of all ages from all areas of the community, and follow the myriad of federal requirements of our major grant--which had just been obtained.  With her high standards, Monique led us to places we could never have gone, so that our program was much larger and more diverse and inclusive. ",
    name: "Rebecca (Bekki) Cook",
    role: "Attorney and Former Missouri Secretary of State",
  },
  {
    quote:"It was my pleasure to serve with Dr. Monique Johnson both professionally and personally. Dr. Johnson coordinated the Read to Succeed program at Alma Schrader Elementary School where I serve as principal. Dr. Johnson's work with the volunteers who entered the program was remarkable both in its efficiency and its efficacy. Most volunteers entering the program did not have specialized training in reading remediation.  ",
    name: "Marreya B.",
    role: "Former Principal, Alma Schrader Elementary School",
  },
  {
    quote:
      "Monique is a lifesaver for those who are involved in building and launching their own consulting business successfully. With a combination of her extraordinary level of knowledge, experience, resources, and professionalism, her coaching provided much insight for me as I was launching my own consulting business. I was also thoroughly impressed with her interpersonal approach catered to my needs. As a result, I have increased my client pool by 50% after restrategizing my professional branding. ",
    name: "Marreya B.",
    role: "Consultant Artist | Somm | Entrepreneur Cincinnati, OH",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#f6f1eb] text-[#171514]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-20">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#d8cec4] pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9a6a43]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#856e60]">
                Testimonials
              </span>
            </div>

            <h2 className="max-w-[700px] font-serif text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.045em]">
              Real Stories.
              <br />
              <span className="text-[#3b1725]">Lasting Impact.</span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[14px] leading-[1.8] text-[#756c67] lg:pb-1">
            The work is ultimately about people — the clarity they gain, the
            leaders they become, and the organizations they help strengthen.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="grid border-b border-[#d8cec4] lg:grid-cols-[0.75fr_1.25fr]">
          {/* Quote mark */}
          <div className="flex items-start py-12 lg:py-16 lg:pr-12">
            <div>
              <Quote
                size={48}
                strokeWidth={1}
                className="text-[#9a6a43]"
              />

              <p className="mt-6 max-w-[260px] font-serif text-[22px] italic leading-[1.25] text-[#3b1725]">
                Experience that creates meaningful progress.
              </p>
            </div>
          </div>

          {/* Main quote */}
          <div className="border-t border-[#d8cec4] py-12 lg:border-l lg:border-t-0 lg:py-16 lg:pl-16">
            <blockquote className="max-w-[820px] font-serif text-[clamp(1.7rem,3vw,3rem)] leading-[1.2] tracking-[-0.02em] text-[#272220]">
              “{testimonials[0].quote}”
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-8 bg-[#9a6a43]" />

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3b3633]">
                  {testimonials[0].name}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#856e60]">
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid border-b border-[#d8cec4] md:grid-cols-3">
          {testimonials.slice(1).map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`group py-9 md:px-7 md:py-11 ${
                index !== 0
                  ? "border-t border-[#d8cec4] md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <Quote
                  size={25}
                  strokeWidth={1}
                  className="text-[#9a6a43]"
                />

                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#a29892]">
                  0{index + 2}
                </span>
              </div>

              <blockquote className="mt-7 font-serif text-[20px] leading-[1.35] text-[#302b28]">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-8 border-t border-[#d8cec4] pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#3b3633]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#856e60]">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Controls / view all */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#856e60]">
            Voices from the people and organizations she has served
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center border border-[#cfc3ba] text-[#3b3633] transition-colors duration-300 hover:border-[#3b1725] hover:bg-[#3b1725] hover:text-[#f6f1eb]"
            >
              <ArrowLeft size={15} strokeWidth={1.4} />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center border border-[#cfc3ba] text-[#3b3633] transition-colors duration-300 hover:border-[#3b1725] hover:bg-[#3b1725] hover:text-[#f6f1eb]"
            >
              <ArrowRight size={15} strokeWidth={1.4} />
            </button>

            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-3 border-b border-[#3b1725] pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3b1725]"
            >
              View All Testimonials
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;