import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`w-full max-w-2xl mx-auto flex flex-col items-center py-16 px-4 ${className}`}
    >
      {children}
    </section>
  );
}
