import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Subtitle({ children, className = "" }: SubtitleProps) {
  return (
    <p
      className={`text-base md:text-lg text-gray-600 font-normal mb-2 max-w-xl text-center leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
}
