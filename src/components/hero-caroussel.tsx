"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = ["/assets/banner-1.png", "/assets/banner-3.png"];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Hero image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-aminute text-white">
          Bem-vindo ao Instituto Eidos
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-sans text-white">
          Uma marca que constrói hoje as soluções que transformarão o amanhã.
        </p>
        </div>
      </div>
    </section>
  );
}
