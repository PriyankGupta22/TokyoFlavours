import React, { useState } from "react";
import ramen from "../assets/reservation.png";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full bg-[#F5F0E6] px-5 py-20 text-[#1F3020] sm:px-8 md:px-12 lg:px-16 mt-[100px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">

        <div className="flex flex-col justify-between">
          <div>

            <h2 className="mt-6 max-w-xl text-[clamp(4rem,6vw,8rem)] leading-[0.82] tracking-[-0.05em]">
              RESERVE
              <br />
              YOUR TABLE
            </h2>

            <p className="mt-8 max-w-md font-inter text-base leading-[1.6] sm:text-lg">
              Good food is better when shared. Reserve your table and enjoy an
              authentic Japanese dining experience.
            </p>
          </div>

          <div className="mt-12 lg:mt-16">
            <img
              src={ramen}
              alt="Japanese ramen"
              className="h-[320px] w-full object-cover sm:h-[480px] lg:h-[470px]"
            />
          </div>
        </div>

        <div className="border border-[#1F3020]/20 p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="mb-10 flex flex-col items-center justify-center">
            <p className="font-inter text-sm uppercase tracking-[0.12em]">
              Tokyo Flavours
            </p>

            <h3 className="mt-4 text-[clamp(2.5rem,3vw,4.5rem)] leading-[0.9] tracking-[-0.04em]">
              BOOK YOUR TABLE
            </h3>

            <p className="mt-5 max-w-lg font-inter text-sm leading-[1.5] opacity-70">
              Choose your preferred date and time, and let us take care of the rest.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <div>
                <label className="font-inter text-xs uppercase tracking-wide">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="mt-3 w-full border-b border-[#1F3020]/30 bg-transparent px-0 py-3 font-inter text-sm outline-none transition-colors placeholder:text-[#1F3020]/40 focus:border-[#1F3020]"
                />
              </div>

              <div>
                <label className="font-inter text-xs uppercase tracking-wide">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your number"
                  required
                  className="mt-3 w-full border-b border-[#1F3020]/30 bg-transparent px-0 py-3 font-inter text-sm outline-none transition-colors placeholder:text-[#1F3020]/40 focus:border-[#1F3020]"
                />
              </div>

              <div>
                <label className="font-inter text-xs uppercase tracking-wide">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="mt-3 w-full border-b border-[#1F3020]/30 bg-transparent px-0 py-3 font-inter text-sm outline-none transition-colors placeholder:text-[#1F3020]/40 focus:border-[#1F3020]"
                />
              </div>

              <div>
                <label className="font-inter text-xs uppercase tracking-wide">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full border-b border-[#1F3020]/30 bg-transparent px-0 py-3 font-inter text-sm outline-none focus:border-[#1F3020]"
                />
              </div>

              <div>
                <label className="font-inter text-xs uppercase tracking-wide">
                  Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full border-b border-[#1F3020]/30 bg-transparent px-0 py-3 font-inter text-sm outline-none focus:border-[#1F3020]"
                />
              </div>

              <div>
                <label className="font-inter text-xs uppercase tracking-wide">
                  Guests
                </label>

                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full border-b border-[#1F3020]/30 bg-transparent px-0 py-3 font-inter text-sm outline-none focus:border-[#1F3020]"
                >
                  <option value="">No. of guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6+">6+ Guests</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-inter text-xs uppercase tracking-wide">
                Special Request
              </label>

              <textarea
                name="request"
                value={formData.request}
                onChange={handleChange}
                placeholder="Any special request?"
                rows="4"
                className="mt-3 w-full resize-none border-b border-[#1F3020]/30 bg-transparent px-0 py-3 font-inter text-sm outline-none transition-colors placeholder:text-[#1F3020]/40 focus:border-[#1F3020]"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-between bg-[#1F3020] px-6 py-4 font-inter text-sm uppercase tracking-wide text-[#F5F0E6] transition-all duration-300 hover:bg-[#314932]"
            >
              <span>Confirm Reservation</span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="text-center font-inter text-xs opacity-50">
              Your information is safe with us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;