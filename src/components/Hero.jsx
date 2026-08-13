import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from 'react-router-dom'
import restaurantImage from "../assets/restaurantImage.png"

const Hero = () => {
  return (
    <div className = "w-screen overflow-hidden h-max">
      <div className = "w-full px-5 sm:px-3 md:px-6 lg:px-10 pt-5">
        <h1 className="text-[clamp(4rem,15vw,14rem)] leading-[0.78] tracking-[-0.05em] text-[#1F3020]">
            TOKYO
        </h1>

        <h1 className="text-[clamp(4rem,15vw,14rem)] leading-[0.78] tracking-[-0.05em] text-[#1F3020] text-right">
            FLAVOURS
        </h1>
      </div>
      <nav className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-5 font-bold mt-[10px]">
        <div className="flex items-center justify-between">

    <div className="hidden md:flex items-center gap-8 lg:gap-10 ml-[-20px] mt-[30px]">
      <a href="/" className="font-inter text-[clamp(10px,17px,25px)">
        Home
      </a>

      <a href="/about" className="font-inter text-[clamp(10px,17px,25px)">
        About
      </a>

      <Link to="/menu" className="font-inter text-[clamp(10px,17px,25px)">
        Menu
      </Link>

      <a href="/gallery" className="font-inter text-[clamp(10px,17px,25px)">
        Gallery
      </a>

      <a
        href="/reservations"
        className="font-inter text-[clamp(10px,17px,25px)"
      >
        Reservations
      </a>

      <div className = "flex items-center justify-between gap-[30px] absolute right-10">
        <div>Mobile</div>
        <div>+91 8756006374</div>
      </div>
    </div>

    <button className="md:hidden text-2xl">
      ☰
    </button>

  </div>

  
</nav>
    <div className = "w-screen h-max mt-[50px] flex flex-row px-10 justify-between">
        <div className = "text-[10px] flex flex-wrap w-[70vw] lg:text-[24px]">FROM RICH, SLOW-SIMMERED RAMEN TO DELICATE JAPANESE FAVORITES, EVERY DISH IS CRAFTED WITH BOLD FLAVORS, FRESH INGREDIENTS, AND A TOUCH OF TOKYO.</div>
    </div>
    <div className='flex flex-row items-center mt-[50px] mx-10 gap-[30px]'>
        <Link to="/menu" className = "w-[10vw] w-max px-[20px] bg-[#1F3020] text-[8px] md:text-[15px] h-max py-[10px] text-[#F5F0E6] flex items-center justify-center gap-[20px]">VIEW MENU <CgArrowLongRight /></Link>
        <button className = "w-[10vw] w-max px-[20px] text-[#1F3020] border border-[#1F3020] text-[8px] md:text-[15px] h-max py-[9px] flex items-center justify-center gap-[20px]">MAKE RESERVATION <CgArrowLongRight /></button>
    </div>
    <div className="mt-20 w-full overflow-hidden">
        <img
          src={restaurantImage}
          alt="Tokyo Flavours Japanese restaurant interior"
          className="h-[55vh] w-full object-cover object-center sm:h-[60vh] md:h-[70vh] absolute"
        />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Hero
