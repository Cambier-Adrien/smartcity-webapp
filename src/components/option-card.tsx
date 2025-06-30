import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "@/components/ui/title";

interface OptionCardProps {
  title: string;
  description: string;
  image: string;
  selected: boolean;
  onSelect: () => void;
}

export default function OptionCard({
  title,
  description,
  image,
  selected,
  onSelect,
}: OptionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 12px 48px 0 rgba(0,0,0,0.12)",
        backgroundColor: selected ? "#F0F6FF" : "#fff",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group w-full max-w-xl rounded-3xl bg-white shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-200 p-10 flex flex-col items-center gap-8 cursor-pointer ${
        selected ? "ring-4 ring-accent-blue scale-105 bg-accent-pink/30" : ""
      }`}
      style={{ minHeight: 420 }}
    >
      <div className="w-full h-56 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={224}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <Title level={3} className="mb-2 text-text text-center leading-tight">
        {title}
      </Title>
      <p className="text-xl text-gray-600 text-center mb-2 font-sans">
        {description}
      </p>
      <span
        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
          selected
            ? "border-accent-blue bg-accent-blue"
            : "border-gray-300 bg-white"
        }`}
      >
        {selected && <span className="w-5 h-5 rounded-full bg-white" />}
      </span>
    </motion.button>
  );
}
