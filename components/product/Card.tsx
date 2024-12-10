import React from "react";

// Define the props for the Card component
type CardProps = {
  // Optional className prop to allow custom styles
  className?: string;
  // The children prop allows any React nodes to be passed to the Card
  children: React.ReactNode;
};

// Card component definition
export const Card: React.FC<CardProps> = ({ children }) => (
  // Return a div with a default styling for text, where children (content) will be rendered
  <div className="text-[14px] text-[#5D5D5D]">
    {children} {/* Render the content passed as children */}
  </div>
);
