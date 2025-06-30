import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "choice";
  selected?: boolean;
}

export default function Button({
  children,
  className = "",
  variant = "default",
  selected = false,
  ...rest
}: ButtonProps) {
  let base =
    "font-sans font-bold text-lg transition-all duration-200 focus:outline-none px-8 py-4 rounded-full shadow-sm";
  if (variant === "choice") {
    base +=
      " bg-white text-black border border-gray-200 hover:bg-gray-50 active:scale-95" +
      (selected ? " ring-2 ring-black" : "");
  } else {
    base += " bg-black text-white hover:bg-neutral-900 active:scale-95";
  }
  return (
    <button className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
}
