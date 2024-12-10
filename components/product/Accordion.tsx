import Image from "next/image"; // Importing Next.js optimized Image component
import React from "react";
import plus from "@/public/svgs/product/plus.svg"; // Importing the 'plus' icon

// Props for the main Accordion component
type AccordionProps = {
  children: React.ReactNode; // Allows nested accordion items
};

// Props for each AccordionItem
type AccordionItemProps = {
  value: string; // The title or label of the accordion item
  children: React.ReactNode; // Content inside the accordion item
};

// Accordion component that acts as a container for AccordionItems
export const Accordion: React.FC<AccordionProps> = ({ children }) => (
  <div className="border rounded-lg divide-y">{children}</div> // Adds border and divides items
);

// AccordionItem component for individual items in the accordion
export const AccordionItem: React.FC<AccordionItemProps> = ({ value }) => (
  <div className="p-4 flex justify-between bg-[#FBF9F8]">
    {/* Title of the accordion item in uppercase */}
    <span className="text-[16px]">{value.toLocaleUpperCase()}</span>
    {/* Plus icon for expanding the accordion item */}
    <Image alt="add" src={plus} />
  </div>
);
