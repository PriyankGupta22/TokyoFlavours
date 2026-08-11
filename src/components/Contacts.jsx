import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-[#F5F0E6] px-5 py-24 text-[#1F3020] sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col gap-16">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[clamp(4rem,10vw,9rem)] leading-[0.8] tracking-[-0.05em]">
            CONTACT
          </h2>

          <p className="max-w-sm font-inter text-base leading-[1.6] sm:text-lg md:text-right">
            Come by for a bowl of ramen, stay for the atmosphere. We would
            love to welcome you to Tokyo Flavours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div className="flex flex-col justify-between border-t border-[#1F3020]/25 pt-6">

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1">

              <div>
                <p className="font-inter text-xs uppercase tracking-[0.15em] opacity-60">
                  Visit Us
                </p>

                <p className="mt-4 max-w-xs text-2xl leading-[1.1]">
                  123 Tokyo Street
                  <br />
                  New Delhi, India
                </p>
              </div>

              <div>
                <p className="font-inter text-xs uppercase tracking-[0.15em] opacity-60">
                  Opening Hours
                </p>

                <div className="mt-4 font-inter text-sm leading-[1.8]">
                  <p>Mon — Fri &nbsp; 11:00 AM — 11:00 PM</p>
                  <p>Sat — Sun &nbsp; 10:00 AM — 11:30 PM</p>
                </div>
              </div>

              <div>
                <p className="font-inter text-xs uppercase tracking-[0.15em] opacity-60">
                  Get In Touch
                </p>

                <div className="mt-4 font-inter text-sm leading-[1.8]">
                  <p>+91 87560 06374</p>
                  <p>hello@tokyoflavours.com</p>
                </div>
              </div>

            </div>

            <div className="mt-16 border-t border-[#1F3020]/25 pt-6">
              <p className="font-inter text-xs uppercase tracking-[0.15em] opacity-60">
                Follow Along
              </p>

              <div className="mt-4 flex gap-6 font-inter text-sm">
                <a href="#" className="transition-opacity hover:opacity-50">
                  Instagram
                </a>

                <a href="#" className="transition-opacity hover:opacity-50">
                  Facebook
                </a>

                <a href="#" className="transition-opacity hover:opacity-50">
                  TikTok
                </a>
              </div>
            </div>

          </div>

          <div className="h-[450px] overflow-hidden sm:h-[550px] lg:h-[650px]">
            <iframe
              title="Tokyo Flavours Location"
              src="https://www.google.com/maps?q=Tokyo%20Japan&output=embed"
              className="h-full w-full border-0 grayscale"
              loading="lazy"
            />
          </div>

        </div>

        <div className="flex flex-col gap-5 border-t border-[#1F3020]/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter text-xs uppercase tracking-[0.12em] opacity-60">
            Tokyo Flavours © 2026
          </p>

          <p className="font-inter text-xs uppercase tracking-[0.12em] opacity-60">
            Authentic Japanese Dining
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;