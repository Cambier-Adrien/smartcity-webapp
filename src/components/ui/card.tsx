import React from "react";
import Image from "next/image";
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
      className={`bg-white rounded-3xl p-10 flex flex-col items-center gap-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] border border-gray-100 transition-shadow duration-200 ${className}`}
    >
      {image && (
        <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center mb-2">
          <Image
            src={image}
            alt={typeof title === "string" ? title : ""}
            width={400}
            height={160}
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
