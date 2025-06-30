import React from "react";
import Title from "@/components/ui/title";

interface CardProps {
  image?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  image,
  title,
  description,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-10 flex flex-col items-center gap-6 custom-shadow transition-shadow duration-200 ${className}`}
    >
      {image && (
        <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center mb-2">
          <img
            src={image}
            alt={typeof title === "string" ? title : ""}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      {title && (
        <Title
          level={3}
          className="mb-2 text-gray-900 text-center leading-tight"
        >
          {title}
        </Title>
      )}
      {description && (
        <p className="text-base text-gray-600 text-center mb-2 font-sans">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
