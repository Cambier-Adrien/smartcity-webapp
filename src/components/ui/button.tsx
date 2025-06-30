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
    "font-sans font-bold text-lg transition-all duration-200 focus:outline-none px-8 py-2 cursor-pointer";
  if (variant === "choice") {
    base +=
      " bg-transparent backdrop-blur-md text-white border-2 border-transparent hover:border-white active:scale-95 rounded-xl";
  } else {
    base +=
      " bg-black text-white hover:bg-neutral-900 active:scale-95 rounded-full ";
  }
  return (
    <button className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
}
