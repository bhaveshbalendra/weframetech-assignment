import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Card } from "./Card";
import { Accordion, AccordionItem } from "./Accordion";
import capa from "@/public/svgs/product/Capa_1.svg";
import frame from "@/public/svgs/product/Frame.svg";
import heart from "@/public/svgs/heart.svg";

type ProductDetailProps = {
  title: string;
  price: string;
  unit: string;
  reference: string;
  dimensions: { width: number; height: number };
  features: string[];
  specifications: { [key: string]: string | number };
  mainImage: string;
  additionalImages: string[];
  accordionItems: { title: string; content: string }[];
  description: string;
};

export default function ProductDetail({
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
}: ProductDetailProps) {
  return (
    <div className="container mx-auto  py-6 lg:py-0 ">
      <p className="p-[12px] m-[9px] lg:block hidden">
        <span className="font-medium">Home</span>
        <span className="text-[#D3D3D3]"> • Art de la table</span>
      </p>
      <div className="flex justify-between mb-[44px]">
        <div className="">
          <div className="relative w-[761px]   h-[652px] overflow-hidden rounded-lg border bg-[#F8F6F4]">
            <Image
              src={mainImage}
              alt={title}
              className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={552}
              height={552}
              priority
            />
            <div className="absolute bg-[#F8F6F4]  top-2 left-2">
              {additionalImages.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white mt-1 flex justify-center items-center h-[55px] w-[55px] opacity-40 ${
                    index === 0 ? "opacity-100" : ""
                  }`}
                >
                  <Image src={item} alt={title} width={40} height={40} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[635px] w-[754px] flex flex-col justify-between">
          <div className="">
            <div className="">
              <div className="flex justify-between items-center">
                <h1 className="text-[30px] text-gray-900 font-normal md:text-3xl">
                  {title}
                </h1>
                <Image
                  alt="this is heart"
                  height={25.34}
                  width={27.64}
                  src={heart}
                />
              </div>
              <p className="text-[24px] flex items-center font-normal mt-2">
                {price}
                <span className="text-[14px] ml-2 text-[#D3D3D3]">/{unit}</span>
              </p>
            </div>

            <div className="flex justify-between my-[11px] items-center border-y py-[18px] border-gray-200">
              <div className="flex items-center ">
                <div className="flex items-center  ">
                  <Image alt="capa" width={24} height={24} src={capa} />
                  <span className="text-[16px] pl-[10px]">
                    {dimensions.width}
                    <sup className=" text-gray-500">cm</sup>
                  </span>
                </div>
                <div className="flex items-center ml-[16px]">
                  <Image alt="capa" width={24} height={24} src={frame} />
                  <span className="text-[16px] pl-[10px]">
                    {dimensions.height}
                    <sup className=" text-gray-500">cm</sup>
                  </span>
                </div>
              </div>
              <p className=" text-gray-500 text-[12px] ">RÉF : {reference}</p>
            </div>

            <Card className="">
              {features.map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
              <div className="mt-4">
                {Object.entries(specifications).map(([, value], index) => (
                  <div key={index}>{value}</div>
                ))}
              </div>
            </Card>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" className="px-3">
                -
              </Button>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center border-0 focus:ring-0"
              />
              <Button variant="ghost" className="px-3">
                +
              </Button>
            </div>
            <Button className="flex-1" size="lg">
              Ajouter au panier
            </Button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 mr-[50px]">
          <h3 className="text-[20px]">Description produit</h3>
          <p className="text-[14px] text-[#D3D3D3]">{description}</p>
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
}
