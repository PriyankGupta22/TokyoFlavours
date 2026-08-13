import React, { useEffect, useRef, useState } from "react";
import { LuSoup, LuCupSoda } from "react-icons/lu";

import pic1 from "../assets/pic1.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic9 from "../assets/pic9.png";

const menuCategories = [
  {
    id: "ramen",
    title: "RAMEN",
    japanese: "ラーメン",
    image: pic1,
    imageHeight: "h-[450px]",
    items: [
      {
        name: "Tonkotsu Ramen",
        price: "₹420",
        desc: "Rich pork broth with chashu, soft egg, bamboo shoots and spring onions.",
      },
      {
        name: "Spicy Miso Ramen",
        price: "₹450",
        desc: "Bold miso broth with a hint of spice, sweet corn, chashu and seasoned egg.",
        spicy: true,
      },
      {
        name: "Shio Ramen",
        price: "₹400",
        desc: "Light and savoury chicken broth with tender chicken, egg and fresh greens.",
      },
    ],
  },
  {
    id: "yakitori",
    title: "YAKITORI",
    japanese: "焼き鳥",
    image: pic3,
    imageHeight: "h-[550px]",
    items: [
      {
        name: "Chicken Yakitori",
        price: "₹320",
        desc: "Charcoal-grilled chicken skewers glazed with our house tare and sesame.",
      },
      {
        name: "Negima Yakitori",
        price: "₹340",
        desc: "Juicy chicken and scallion skewers with a smoky chargrilled flavour.",
      },
      {
        name: "Tsukune",
        price: "₹330",
        desc: "Japanese chicken meatball skewers glazed with sweet tare and egg yolk.",
      },
      {
        name: "Butabara",
        price: "₹350",
        desc: "Grilled pork belly skewers with a rich, savoury tare glaze.",
      },
    ],
  },
  {
    id: "donburi",
    title: "DONBURI",
    japanese: "丼ぶり",
    image: pic4,
    imageHeight: "h-[320px]",
    items: [
      {
        name: "Chicken Teriyaki Don",
        price: "₹380",
        desc: "Grilled chicken glazed with teriyaki sauce served over steamed rice.",
      },
      {
        name: "Beef Gyudon",
        price: "₹400",
        desc: "Thinly sliced beef simmered in a savoury sauce with onions, served over rice.",
      },
    ],
  },
  {
    id: "drinks",
    title: "DRINKS",
    japanese: "飲み物",
    image: pic9,
    imageHeight: "h-[370px]",
    tagline: true,
    items: [
      {
        name: "Matcha Latte",
        price: "₹180",
        desc: "Smooth and creamy matcha made with milk.",
      },
      {
        name: "Yuzu Soda",
        price: "₹150",
        desc: "Refreshing citrus soda with a hint of yuzu.",
      },
    ],
  },
];

const categories = [
  {
    id: "ramen",
    label: "Ramen",
    icon: LuSoup,
  },
  {
    id: "yakitori",
    label: "Yakitori",
    icon: LuSoup,
  },
  {
    id: "donburi",
    label: "Donburi",
    icon: LuSoup,
  },
  {
    id: "drinks",
    label: "Drinks",
    icon: LuCupSoda,
  },
];

const MenuSidebar = ({ activeCategory, onCategoryClick }) => {
  return (
    <aside className="flex flex-col gap-10">
      {categories.map(({ id, label, icon: Icon }) => {
        const active = activeCategory === id;

        return (
          <button
            key={id}
            onClick={() => onCategoryClick(id)}
            className={`flex w-fit items-center gap-4 transition-all duration-300 ${
              active
                ? "rounded-full bg-[#0c281d] px-6 py-4 text-white"
                : "px-3 py-2 text-[#24352d] hover:text-[#0c281d]"
            }`}
          >
            <Icon size={22} />

            <span className="uppercase tracking-[0.18em]">
              {label}
            </span>
          </button>
        );
      })}
    </aside>
  );
};

const MenuCategory = ({ category }) => {
  return (
    <section
      id={category.id}
      className="w-full scroll-mt-0 bg-[#f5f0e6] py-[clamp(60px,8vw,120px)] first:pt-0"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-20">

        <div className="min-w-0">
          <div className="mb-10 flex items-center gap-4 sm:gap-5">
            <h2 className="shrink-0 font-serif text-[clamp(2rem,3vw,3.5rem)] tracking-[0.08em] text-[#0c281d]">
              {category.title}
            </h2>

            <div className="h-px flex-1 bg-[#d7d0c3]" />

            <span className="shrink-0 text-[clamp(0.85rem,1.2vw,1.2rem)] tracking-[0.2em] text-[#b33a2d]">
              {category.japanese}
            </span>

            <div className="hidden h-px w-[clamp(40px,8vw,120px)] bg-[#d7d0c3] sm:block" />
          </div>

          <div className="space-y-[clamp(32px,4vw,55px)]">
            {category.items.map((item) => (
              <div key={item.name}>
                <div className="flex items-start justify-between gap-8">
                  <h3 className="max-w-[80%] font-serif text-[clamp(1.5rem,2vw,2.35rem)] leading-[1.05] text-[#0c281d]">
                    {item.name}

                    {item.spicy && (
                      <span className="ml-2 text-[clamp(0.9rem,1vw,1.2rem)]">
                        🌶
                      </span>
                    )}
                  </h3>

                  <span className="shrink-0 whitespace-nowrap text-[clamp(1.1rem,1.3vw,1.7rem)] font-medium text-[#0c281d]">
                    {item.price}
                  </span>
                </div>

                <p className="mt-3 max-w-[760px] text-[clamp(0.9rem,1vw,1.15rem)] leading-[1.55] text-[#4b534f]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div
            className={`${category.imageHeight} w-full overflow-hidden bg-[#d8d0bf]`}
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {category.tagline && (
        <div className="mt-10 border-t border-[#d7d0c3] pt-8">
          <p className="text-sm uppercase tracking-[0.18em] text-[#26362e]">
            Real ingredients.
            <br />
            Bold flavours.
            <br />
            True to Japan.
          </p>
        </div>
      )}
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("ramen");
  const menuScrollRef = useRef(null);

  const handleCategoryClick = (id) => {
    const container = menuScrollRef.current;
    const target = container?.querySelector(`#${id}`);

    if (!container || !target) return;

    setActiveCategory(id);

    container.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = menuScrollRef.current;

    if (!container) return;

    const sections = menuCategories
      .map((category) => container.querySelector(`#${category.id}`))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length) {
          setActiveCategory(visible[0].target.id);
        }
      },
      {
        root: container,
        threshold: [0.2, 0.5, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative min-h-[60svh] w-full overflow-hidden bg-[#f5f0e6] text-[#0c281d]">
        <div className="relative mx-auto flex min-h-[60svh] w-full max-w-[1600px] flex-col px-[5vw] py-[clamp(28px,4vw,60px)]">

          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-[clamp(24px,2.5vw,34px)] w-[clamp(20px,3vw,28px)] items-center justify-center text-[clamp(9px,1.5vw,12px)] font-extrabold text-[#c53b27]">
              東
            </div>

            <span className="text-[clamp(10px,0.8vw,13px)] font-medium uppercase tracking-[0.22em]">
              Tokyo Flavours
            </span>
          </div>

          <div className="relative z-10 flex flex-1 flex-col justify-center">
            <div className="max-w-[900px]">
              <h1 className="font-inter text-[clamp(5rem,12vw,11rem)] uppercase leading-[0.72] tracking-[-0.055em]">
                Menu
              </h1>

              <p className="mt-[clamp(14px,1.9vw,58px)] max-w-[clamp(250px,24vw,370px)] text-[clamp(10px,1.25vw,24px)] leading-[1.5] text-[#26362e] lg:ml-[13px]">
                Thoughtfully crafted Japanese dishes
                <br />
                made with authentic ingredients.
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute right-[clamp(18px,3vw,50px)] top-[clamp(90px,8vw,125px)] z-10 flex flex-col items-center gap-1 text-[clamp(10px,1.2vw,50px)] font-extrabold leading-[1.5]">
            <span>美</span>
            <span>味</span>
            <span>し</span>
            <span>い</span>
            <span>日</span>
            <span>本</span>
            <span>食</span>

            <div className="mt-3 flex h-[clamp(24px,2vw,32px)] w-[clamp(20px,1.6vw,26px)] items-center justify-center text-[clamp(8px,1vw,16px)] text-[#c53b27]">
              和
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f0e6] px-[5vw]">
        <div className="mx-auto max-w-[1600px]">

          <div className="mb-8 md:hidden">
            <MenuSidebar
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />
          </div>

          <div className="grid h-[calc(100svh-80px)] grid-cols-1 md:grid-cols-[220px_1px_minmax(0,1fr)] md:gap-14">

            <div className="hidden md:block">
              <div className="sticky top-24">
                <MenuSidebar
                  activeCategory={activeCategory}
                  onCategoryClick={handleCategoryClick}
                />
              </div>
            </div>

            <div className="hidden bg-[#d7d0c3] md:block" />

            <div
              ref={menuScrollRef}
              className="min-h-0 overflow-y-auto overscroll-contain pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {menuCategories.map((category) => (
                <MenuCategory
                  key={category.id}
                  category={category}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;