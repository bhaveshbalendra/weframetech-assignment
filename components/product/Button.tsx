import React from "react";

type ButtonProps = {
  variant?: "default" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  // Base styles and dynamic variants & sizes
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded transition focus:outline-none";
  const variants = {
    default: "bg-[#5CD2DD] text-white hover:bg-blue-600",
    ghost: "bg-transparent hover:bg-gray-100",
  };
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
    icon: "p-2",
  };

  // Construct the className dynamically
  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
