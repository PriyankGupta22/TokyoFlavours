import React, { useState } from "react";

import gallery1 from "../assets/gallery1.png";


const galleryItems = [
  {
    image: gallery1,
    title: "The Tokyo Table",
  },
  {
    image: gallery1,
    title: "Crafted With Care",
  },
  {
    image: gallery1,
    title: "A Taste Of Japan",
  },
  {
    image: gallery1,
    title: "Inside Tokyo Flavours",
  },
  {
    image: gallery1,
    title: "Made To Be Shared",
  },
];

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full bg-[#F5F0E6] px-5 py-24 text-[#1F3020] sm:px-8 md:px-12 lg:px-16">

      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

        <div>
          <h2 className="text-[clamp(4rem,7vw,9rem)] leading-[0.8] tracking-[-0.05em]">
            OUR GALLERY
          </h2>
        </div>

        <div className="max-w-sm md:text-right">

          <p className="font-inter text-base leading-[1.6] sm:text-lg">
            Step inside Tokyo Flavours and discover the people, spaces,
            dishes, and moments that make every visit memorable.
          </p>

        </div>

      </div>

      <div className="mt-24">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.35fr_0.65fr]">

          <GalleryImage
            item={galleryItems[0]}
            height="h-[65vw] md:h-[550px]"
            onClick={() => setSelectedImage(galleryItems[0].image)}
          />

          <div className="md:mt-32">

            <GalleryImage
              item={galleryItems[1]}
              height="h-[75vw] md:h-[370px]"
              onClick={() => setSelectedImage(galleryItems[1].image)}
            />

          </div>

        </div>


        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-[0.7fr_1.3fr]">

          <div className="md:mt-24">

            <GalleryImage
              item={galleryItems[2]}
              height="h-[70vw] md:h-[300px]"
              onClick={() => setSelectedImage(galleryItems[2].image)}
            />

          </div>

          <GalleryImage
            item={galleryItems[3]}
            height="h-[65vw] md:h-[500px]"
            onClick={() => setSelectedImage(galleryItems[3].image)}
          />

        </div>

      </div>

      {selectedImage && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F3020]/95 p-5"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="absolute right-6 top-6 text-3xl text-[#F5F0E6]"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Tokyo Flavours gallery"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

        </div>

      )}

    </section>
  );
};

const GalleryImage = ({ item, height, onClick }) => {

  return (
    <div
      onClick={onClick}
      className={`group relative ${height} w-full cursor-pointer overflow-hidden bg-[#D8D0BF]`}
    >

      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 flex items-end bg-[#1F3020]/0 p-6 transition-all duration-500 group-hover:bg-[#1F3020]/45">

        <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

          <p className="font-inter text-xs uppercase tracking-[0.15em] text-[#F5F0E6]">
            {item.title}
          </p>

          <p className="mt-2 text-2xl text-[#F5F0E6]">
            View →
          </p>

        </div>

      </div>

    </div>
  );
};

export default Gallery;