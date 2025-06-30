import React from "react";

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
      className={`bg-white rounded-2xl p-10 flex flex-col items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
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
        <h3 className="font-semibold text-xl md:text-2xl mb-2 text-gray-900 text-center leading-tight">
          {title}
        </h3>
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
