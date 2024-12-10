import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Card } from "./Card";
import { Accordion, AccordionItem } from "./Accordion";
import { StaticImageData } from "next/image";
import capa from "@/public/svgs/product/Capa_1.svg";
import frame from "@/public/svgs/product/Frame.svg";
import heart from "@/public/svgs/heart.svg";
import plus from "@/public/svgs/product/plus.svg";
import minus from "@/public/svgs/product/minus.svg";

// Define type for ProductDetailProps
type ProductDetailProps = {
  title: string;
  price: string;
  unit: string;
  reference: string;
  dimensions: { width: number; height: number };
  features: string[];
  specifications: { [key: string]: string | number };
  mainImage: StaticImageData;
  additionalImages: StaticImageData[];
  accordionItems: { title: string; content: string }[];
  description: string;
};

// ProductDetail RFC
const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  price,
  unit,
  reference,
  dimensions,
  features,
  specifications,
  mainImage,
  additionalImages,
  accordionItems,
  description,
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6  lg:pb-8">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 mb-6 lg:mb-10">
        {/* Main Image Section */}
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-lg flex justify-center items-center border bg-[#F8F6F4] p-4 lg:p-6">
            <Image
              src={mainImage}
              alt={title}
              className="pt-4 sm:pt-6"
              width={552}
              height={552}
              priority
            />
            {/* Additional Images Section */}
            <div className="absolute bg-[#F8F6F4] top-2 left-2 flex flex-col gap-2">
              {additionalImages.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white flex justify-center items-center h-[25px] w-[25px] md:h-[55px] md:w-[55px]  ${
                    index === 0 ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <Image
                    src={item}
                    alt={title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Top Info */}
          <div>
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <h1 className="text-2xl lg:text-3xl font-semibold">{title}</h1>
              <Image
                alt="Heart Icon"
                height={25.34}
                width={27.64}
                src={heart}
              />
            </div>
            <p className="text-xl lg:text-2xl font-medium mb-4 lg:mb-6">
              {price}
              <span className="text-sm lg:text-base text-[#9c9c9c] ml-2">
                /{unit}
              </span>
            </p>
            <div className="flex justify-between items-center border-y py-3 lg:py-4 border-gray-200 mb-4 lg:mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Image alt="Capa" width={24} height={24} src={capa} />
                  <span className="text-base lg:text-lg pl-2">
                    {dimensions.width}
                    <sup className="text-gray-500">cm</sup>
                  </span>
                </div>
                <div className="flex items-center">
                  <Image alt="Frame" width={24} height={24} src={frame} />
                  <span className="text-base lg:text-lg pl-2">
                    {dimensions.height}
                    <sup className="text-gray-500">cm</sup>
                  </span>
                </div>
              </div>
              <p className="text-[14px] text-gray-500">RÉF : {reference}</p>
            </div>
            <Card>
              {features.map((feature, index) => (
                <p key={index} className="text-sm lg:text-base">
                  {feature}
                </p>
              ))}
              <div className="mt-4">
                {Object.entries(specifications).map(([, value], index) => (
                  <div key={index} className="text-[14px] ">
                    {value}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mt-6 lg:mt-auto">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between border p-2 rounded-md w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="px-4">
                <Image alt="Minus" src={minus} />
              </Button>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center border-0 focus:ring-0 text-sm lg:text-base"
              />
              <Button variant="ghost" className="px-3">
                <Image alt="Plus" src={plus} />
              </Button>
            </div>

            {/* Add to Cart Button */}
            <Button className="flex-1 mt-4 lg:mt-0" size="lg">
              Ajouter au panier
            </Button>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex-1">
          <h2 className="text-lg lg:text-xl mb-4">Description produit</h2>
          <p className="text-[] text-[#818181]">{description}</p>
        </div>
        <div className="flex-1">
          <Accordion>
            {accordionItems.map((item) => (
              <AccordionItem key={item.title} value={item.title}>
                {item.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
