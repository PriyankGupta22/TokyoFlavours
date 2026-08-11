import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "The ramen was incredible and the whole experience felt like a little trip to Tokyo.",
    name: "Aarav Sharma",
    role: "Regular Guest",
  },
  {
    quote:
      "Beautiful atmosphere, amazing food, and easily one of the best Japanese dining experiences I've had.",
    name: "Maya Kapoor",
    role: "Food Enthusiast",
  },
  {
    quote:
      "Every dish felt thoughtfully prepared. The flavors were bold, fresh, and beautifully balanced.",
    name: "Rohan Mehta",
    role: "Happy Guest",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="w-full bg-[#1F3020] px-5 py-28 text-[#F5F0E6] sm:px-8 md:px-12 lg:px-16">
      <div className="flex items-start justify-between">
        <span className="font-inter text-sm uppercase tracking-[0.12em]">
          What People Say
        </span>

        <span className="hidden font-inter text-sm md:block">
          Guest Stories
        </span>
      </div>

      <div className="mt-20">
        <div className="text-[7rem] leading-[0.5] sm:text-[10rem]">
          “
        </div>

        <div className="mt-10 max-w-6xl">
          <p className="text-[clamp(2.5rem,5vw,6rem)] leading-[0.95] tracking-[-0.04em]">
            {testimonial.quote}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-10 border-t border-[#F5F0E6]/30 pt-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-inter text-sm font-medium uppercase tracking-wide">
              {testimonial.name}
            </p>

            <p className="mt-1 font-inter text-sm opacity-60">
              {testimonial.role}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-inter text-sm">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>

            <button
              onClick={prevTestimonial}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F0E6] text-[#F5F0E6] transition-all duration-300 hover:bg-[#F5F0E6] hover:text-[#1F3020]"
            >
              ←
            </button>

            <button
              onClick={nextTestimonial}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F0E6] text-[#F5F0E6] transition-all duration-300 hover:bg-[#F5F0E6] hover:text-[#1F3020]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;