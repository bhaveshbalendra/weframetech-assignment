import React from "react";

interface NavButtonProps {
  className?: string; // To accept custom Tailwind CSS or other classes

  children?: React.ReactNode; // To allow nested content
}

const NavButton: React.FC<NavButtonProps> = ({ className = "", children }) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

export default NavButton;
