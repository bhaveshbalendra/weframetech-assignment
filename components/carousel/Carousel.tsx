"use client";
import React, { useRef } from "react";
import ProductCard from "@/components/ui/ProductCard";
import table_transparent from "@/public/images/product/Table_ronde_165cm_Festi_1-removebg-preview.webp";
import Image from "next/image";

import leftArrow from "@/public/svgs/carousel/left-arrow.svg";
import rightArrow from "@/public/svgs/carousel/right-arrow.svg";

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-[#fdfbfb]">
      {/* Section heading and link */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-2xl lg:text-[35px]">
          Articles similaires
        </h2>
        <p className="text-[#393939] text-[12px] md:text-[16px] underline cursor-pointer">
          VOIR TOUTE LA COLLECTION
        </p>
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Left scroll button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#5CD2DD] p-2 shadow-md"
          onClick={scrollLeft}
        >
          <Image src={leftArrow} alt="Scroll Left" width={24} height={24} />
        </button>

        {/* Carousel content */}
        <div
          className="flex gap-4 overflow-x-scroll no-scrollbar scrollbar-hide"
          ref={carouselRef}
        >
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div className="min-w-[300px]" key={index}>
                <ProductCard
                  title="Title"
                  price="0"
                  unitPrice="0.35€/Pièce"
                  reference="VABGN5"
                  pieces={20}
                  imageSrc={table_transparent}
                  category="ART DE LA TABLE"
                  isFavorite={false}
                />
              </div>
            ))}
        </div>

        {/* Right scroll button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#5CD2DD] p-2 shadow-md"
          onClick={scrollRight}
        >
          <Image src={rightArrow} alt="Scroll Right" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
