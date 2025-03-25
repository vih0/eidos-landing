"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PartnerCard } from "@/components/partner-card";

const partners = [
  {
    id: 1,
    name: "Empresa Alpha",
    logo: "",
    description: "Parceiro estratégico em soluções de tecnologia sustentável.",
    type: "cliente",
  },
  {
    id: 2,
    name: "Grupo Beta",
    logo: "",
    description: "Colaboração em projetos de impacto social e ambiental.",
    type: "parceiro",
  },
  {
    id: 3,
    name: "Tech Gamma",
    logo: "",
    description: "Implementação de soluções inovadoras para o setor público.",
    type: "cliente",
  },
  {
    id: 4,
    name: "Fundação Delta",
    logo: "",
    description: "Parceria em iniciativas de desenvolvimento sustentável.",
    type: "parceiro",
  },
  {
    id: 5,
    name: "Corporação Epsilon",
    logo: "",
    description: "Cliente em projetos de transformação digital governamental.",
    type: "cliente",
  },
  {
    id: 6,
    name: "Omega Solutions",
    logo: "",
    description: "Parceiro tecnológico em soluções de gestão pública.",
    type: "parceiro",
  },
];

export function ClientsPartners() {
  const [activeFilter, setActiveFilter] = useState<
    "todos" | "clientes" | "parceiros"
  >("todos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const filteredPartners = partners.filter((partner) => {
    if (activeFilter === "todos") return true;
    if (activeFilter === "clientes") return partner.type === "cliente";
    if (activeFilter === "parceiros") return partner.type === "parceiro";
    return true;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize(); // Executar imediatamente
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredPartners.length - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      nextSlide();
    }

    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      id="clientes-parceiros"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 sm:mb-12 text-gray-900 text-center font-aminute">
            Clientes e Parceiros
          </h2>

          {/* Filtros */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => {
                  setActiveFilter("todos");
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "todos"
                    ? "bg-[#FEBD11] text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => {
                  setActiveFilter("clientes");
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "clientes"
                    ? "bg-[#FEBD11] text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Clientes
              </button>
              <button
                onClick={() => {
                  setActiveFilter("parceiros");
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "parceiros"
                    ? "bg-[#FEBD11] text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Parceiros
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 z-10 flex items-center">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`-ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md focus:outline-none ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 z-10 flex items-center">
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`-mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md focus:outline-none ${
                  currentIndex >= maxIndex
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div
              ref={carouselRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleItems)
                  }%)`,
                  width: `${(filteredPartners.length / visibleItems) * 100}%`,
                }}
              >
                {filteredPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="px-3 py-5"
                    style={{
                      width: `${
                        (100 / filteredPartners.length) * visibleItems
                      }%`,
                    }}
                  >
                    <PartnerCard
                      name={partner.name}
                      logo={partner.logo}
                      description={partner.description}
                      type={partner.type}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {filteredPartners.length > visibleItems && (
            <div className="flex justify-center mt-10 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentIndex === index ? "bg-slate-100" : "bg-gray-300"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
