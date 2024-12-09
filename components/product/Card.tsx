import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => (
  <div className="text-[14px] text-[#5D5D5D]">{children}</div>
);
