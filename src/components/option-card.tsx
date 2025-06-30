import React from "react";
import { motion } from "framer-motion";

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
        backgroundColor: "#FFB7C5",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group w-full max-w-xl rounded-4xl bg-card-pastel shadow-card border border-gray-100 transition-all duration-200 p-10 flex flex-col items-center gap-8 cursor-pointer ${
        selected ? "ring-4 ring-accent-blue scale-105 bg-accent-pink/30" : ""
      }`}
      style={{ minHeight: 420 }}
    >
      <div className="w-full h-56 rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <h3 className="apple-title text-3xl md:text-4xl mb-2 text-text text-center leading-tight">
        {title}
      </h3>
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
