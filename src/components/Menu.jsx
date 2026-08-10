import React from "react";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"

const menuItems = [
  {
    name: "Tonkotsu Ramen",
    description:
      "Slow-simmered pork broth with chashu, soft egg, scallions and handmade noodles.",
    price: "₹420",
    imageHeight: "h-[520px]",
    image: pic1
  },
  {
    name: "Spicy Miso Ramen",
    description:
      "Rich miso broth layered with chili oil, mushrooms, corn and spring onions.",
    price: "₹390",
    imageHeight: "h-[590px]",
    image: pic2

  },
  {
    name: "Chicken Yakitori",
    description:
      "Charcoal-grilled chicken skewers glazed with our house tare and sesame.",
    price: "₹320",
    imageHeight: "h-[330px]",
    image: pic3
  },
  {
    name: "Salmon Sushi",
    description:
      "Fresh salmon, seasoned rice and nori finished with wasabi and soy.",
    price: "₹450",
    imageHeight: "h-[320px]",
    image: pic4
  },
  {
    name: "Chicken Katsu",
    description:
      "Crispy panko chicken served with Japanese curry and steamed rice.",
    price: "₹380",
    imageHeight: "h-[540px]",
    image: pic5
  },
  {
    name: "Gyoza",
    description:
      "Pan-seared dumplings filled with chicken, cabbage, ginger and garlic.",
    price: "₹280",
    imageHeight: "h-[420px]",
    image: pic6
  },
];

const Menu = () => {
  return (
    <section className="w-full bg-[#F5F0E6] px-5 py-24 text-[#1F3020] sm:px-8 md:px-12 lg:px-16">

      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

        <div className="max-w-md">
          <span className="font-inter text-sm uppercase tracking-[0.12em]">
            Explore
          </span>

          <p className="mt-5 font-inter text-base leading-[1.6] sm:text-lg">
            Discover a collection of Japanese favorites, from comforting bowls
            of ramen to delicate bites crafted with fresh ingredients.
          </p>
        </div>

        <div className="md:text-right">
          <h2 className="text-[clamp(4rem,10vw,9rem)] leading-[0.8] tracking-[-0.05em]">
            OUR MENU
          </h2>
        </div>

      </div>


      <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">

        {menuItems.map((item, index) => (
          <div
            key={item.name}
            className={`
              ${index % 3 === 1 ? "lg:mt-30" : ""}
              ${index % 3 === 2 ? "lg:mt-16" : ""}
            `}
          >

            <div
              className={`
                ${item.imageHeight}
                w-full
                overflow-hidden
                bg-[#D8D0BF]
              `}
            >
                <img src = {item.image} />
            </div>


            <div className="mt-5">

              <div className="flex items-start justify-between gap-5">
                <h3 className="text-2xl leading-none sm:text-3xl">
                  {item.name}
                </h3>

                <span className="font-inter lg:text-[30px] mt-[-5px]">
                  {item.price}
                </span>
              </div>

              <p className="mt-3 max-w-sm font-inter text-sm leading-[1.6] opacity-75">
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Menu;