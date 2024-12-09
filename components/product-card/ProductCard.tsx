import Image from "next/image";
import React from "react";
import heart from "@/public/svgs/heart.svg";

interface ProductCardProps {
  title: string;
  price: string;
  unitPrice: string;
  reference: string;
  pieces: number;
  imageSrc: string;
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
  isFavorite,
}) => {
  return (
    <div className="max-w-[330px] ">
      <div className="bg-[#F8F6F4] min-h-[362px]">
        {/* Favorite icon */}
        <div className="flex justify-between items-center ">
          <button className="text-gray-500 hover:text-red-500">
            <Image src={heart} className="w-[32px] h-[32px]" alt="heart" />
          </button>
          <div className=" font-semibold text-[#111928] text-[10px] bg-white  ">
            {category}
          </div>
        </div>

        {/* Product Image */}
        <div className=" relative   flex justify-center items-center">
          <Image
            src={imageSrc}
            alt={title}
            className="rounded-lg  max-h-[244px] "
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-[24px]">{title}</h3>
          <p className=" text-gray-500 text-[11px]">
            <span className="text-[14px]">{unitPrice}</span> • Réf : {reference}
          </p>
        </div>
        <div>
          <p className="text-[24px]">
            {price}
            <sup>€</sup>
          </p>
          <div className="">
            <span className="bg-gray-100  text-[11px]   rounded-full">
              {pieces} <span className="">pièces</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
