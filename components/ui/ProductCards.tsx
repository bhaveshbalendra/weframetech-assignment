"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import heart from "@/public/svgs/heart.svg"; // Default (unfilled) heart
import heartRed from "@/public/svgs/heart-red.svg"; // Filled heart
import QuantitySelector from "../ui/QuantitySelector";

interface ProductCardProps {
  title: string;
  price: string;
  unitPrice: string;
  reference: string;
  pieces: number;
  imageSrc: StaticImageData;
  category: string;
  isFavorite: boolean;
}

const ProductCards: React.FC<ProductCardProps> = ({
  title,
  price,
  unitPrice,
  reference,
  pieces,
  imageSrc,
  category,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredHeart, setIsHoveredHeart] = useState(false); // For heart hover effect

  return (
    <div className="w-full bg-[#F8F6F4]  rounded-lg shadow-md">
      <div className="p-4">
        {/* Favorite icon */}
        <div
          className="flex justify-between items-center mb-4"
          onMouseEnter={() => setIsHoveredHeart(true)} // Change heart on hover
          onMouseLeave={() => setIsHoveredHeart(false)} // Reset heart when leaving
        >
          <button className="text-gray-500 hover:text-red-500">
            <Image
              src={isHoveredHeart ? heartRed : heart} // Switch between filled and unfilled heart
              className="w-[32px] h-[32px]"
              alt="heart"
            />
          </button>
          <div className="font-semibold text-[#111928] text-[10px] bg-white px-2 py-1 rounded">
            {category}
          </div>
        </div>

        {/* Product Image */}
        <div className="relative flex justify-center items-center mb-4">
          <Image
            src={imageSrc}
            alt={title}
            className="rounded-lg max-h-[244px] object-contain"
          />
          {/* Quantity Selector shown on hover */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className={`absolute top-[85%] w-full transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              zIndex: 10, // Ensures the QuantitySelector appears above the image
            }}
          >
            <QuantitySelector />
          </div>
        </div>
      </div>
      {/* Product Info */}
      <div className="flex p-2 justify-between bg-white w-full items-start">
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-500 text-sm">
            <span className="text-base font-medium">{unitPrice}</span> • Réf :{" "}
            {reference}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold">
            {price}
            <sup>€</sup>
          </p>
          <div className="text-sm bg-gray-100 px-2 py-1 rounded-full">
            {pieces} <span className="font-light">pièces</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
