import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export default function Grid({ children, className = "" }: GridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch justify-center my-4 ${className}`}
    >
      {children}
    </div>
  );
}
