"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  type: string;
}

export function PartnerCard({
  name,
  logo,
  description,
  type,
}: PartnerCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="h-full bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 flex flex-col"
    >
      <div className="p-6 flex items-center justify-center h-40 bg-gray-50">
        <div className="relative w-32 h-32">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`Logo ${name}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-2">
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              type === "cliente"
                ? "bg-[#00A7BE50] text-[#00A7BE]"
                : "bg-green-100 text-green-800"
            }`}
          >
            {type === "cliente" ? "Cliente" : "Parceiro"}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
        <div className="mt-4">
          <button className="text-primary font-medium text-sm hover:underline focus:outline-none">
            Saiba mais
          </button>
        </div>
      </div>
    </motion.div>
  );
}
