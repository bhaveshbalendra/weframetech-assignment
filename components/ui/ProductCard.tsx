import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import heart from "@/public/svgs/heart.svg";
import heartred from "@/public/svgs/heart-red.svg";
import QuantitySelector from "./QuantitySelector";

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

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  unitPrice,
  reference,
  pieces,
  imageSrc,
  category,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHoveredSelector, setIsHoveredSelector] = useState(false);

  return (
    <div
      className="max-w-[330px] p-4 rounded-lg hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#F8F6F4] min-h-[362px] p-4 rounded-t-lg">
        {/* Favorite icon */}
        <div
          className="flex justify-between items-center mb-2"
          onMouseEnter={() => setIsHoveredHeart(true)}
          onMouseLeave={() => setIsHoveredHeart(false)}
        >
          <button className={`text-gray-500 `}>
            <Image
              src={isHoveredHeart ? heartred : heart}
              className="w-[32px] h-[32px] transition-colors duration-300"
              alt="heart"
            />
          </button>
          <div className="font-semibold text-[#111928] text-[10px] bg-white px-2 py-1 rounded">
            {category}
          </div>
        </div>

        {/* Product Image */}
        <div className="relative flex justify-center items-center">
          <Image
            src={imageSrc}
            alt={title}
            className={`rounded-lg max-h-[244px] transition-transform duration-300 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
          <div
            onMouseEnter={() => setIsHoveredSelector(true)}
            onMouseLeave={() => setIsHoveredSelector(false)}
            className={`absolute top-[110%] w-full transition-opacity duration-300 ${
              isHoveredSelector ? "opacity-100" : "opacity-0"
            }`}
            style={{
              zIndex: 10, // Ensures the QuantitySelector appears above other elements
            }}
          >
            <QuantitySelector />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex justify-between p-2 bg-white py-2">
        <div>
          <h3 className="text-[24px]  mb-1">{title}</h3>
          <p className="text-gray-500 text-[12px]">
            <span className="text-[14px] font-medium">{unitPrice}</span> • Réf :
            {reference}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[24px] ">
            {price}
            <sup>€</sup>
          </p>
          <div className="">
            <span className="bg-gray-100 text-[11px] px-2 py-1 rounded-full">
              {pieces} <span>pièces</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
