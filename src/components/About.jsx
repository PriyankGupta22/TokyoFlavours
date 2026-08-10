import React from "react";
import aboutImage from "../assets/aboutImage.png";
import { CgArrowLongRight } from "react-icons/cg";


const About = () => {
  return (
    <section className="w-full bg-[#F5F0E6] px-5 py-20 text-[#1F3020] sm:px-8 md:px-12 lg:px-16 lg:py-28 mt-[550px]">

      <div className="mb-12 flex items-start justify-between">
        <span className="rounded-full border border-[#1F3020] px-3 py-1 font-inter text-xs">
          Know About Us
        </span>

        <p className="hidden max-w-sm text-right font-inter text-sm md:block">
          Experience the perfect harmony of Japanese tradition.
        </p>
      </div>


      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:items-end">

        <div>

          <h2 className="max-w-5xl text-[clamp(2rem,5.7vw,6rem)] leading-[0.9] tracking-[-0.045em]">
            Blending Japanese tradition & modern creativity to create
            unforgettable dining experiences
          </h2>


          <p className="mt-6 max-w-sm font-inter text-sm leading-6 md:hidden">
            Experience the perfect harmony of Japanese tradition.
          </p>


          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

            <button className="w-fit bg-[#1F3020] px-6 py-3 font-inter text-sm text-[#F5F0E6] transition-all duration-300 hover:bg-[#1F3020] flex flex-row items-center gap-[10px]">
              READ OUR STORY <CgArrowLongRight />
            </button>

          </div>

        </div>


        <div className="w-full lg:justify-self-end">

          <img
            src={aboutImage}
            alt="Guests enjoying Japanese food at Tokyo Flavours"
            className="h-[55vw] max-h-[420px] w-full object-cover object-center sm:h-[400px] lg:h-[430px]"
          />

        </div>

      </div>

    </section>
  );
};

export default About;