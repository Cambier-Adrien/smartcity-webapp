import React from "react";

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

const sizes = {
  1: "text-3xl md:text-5xl",
  2: "text-2xl md:text-4xl",
  3: "text-lg md:text-2xl",
};

export default function Title({
  children,
  level = 1,
  className = "",
}: TitleProps) {
  if (level === 1) {
    return (
      <h1
        className={`font-extrabold mb-2 text-black tracking-tight ${sizes[1]} ${className}`}
      >
        {children}
      </h1>
    );
  }
  if (level === 2) {
    return (
      <h2
        className={`font-bold mb-2 text-black tracking-tight ${sizes[2]} ${className}`}
      >
        {children}
      </h2>
    );
  }
  return (
    <h3
      className={`font-semibold mb-2 text-black tracking-tight ${sizes[3]} ${className}`}
    >
      {children}
    </h3>
  );
}
