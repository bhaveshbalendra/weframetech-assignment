import Image from "next/image";
import React from "react";
import plus from "@/public/svgs/product/plus.svg";
type AccordionProps = {
  children: React.ReactNode;
};

type AccordionItemProps = {
  value: string;
  children: React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ children }) => (
  <div className="border rounded-lg divide-y">{children}</div>
);

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
}) => (
  <div className="p-4 flex justify-between bg-[#FBF9F8]">
    <span className="text-[16px]">{value.toLocaleUpperCase()}</span>
    <Image alt="add" src={plus} />
  </div>
);
