"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavLink } from "./nav-links";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled, isMenuOpen:", !isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <Image
                src="/assets/logo-completa.png"
                alt="Logo"
                width={100}
                height={80}
              />
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <NavLink href="#sobre-nos" isScrolled={isScrolled}>
              Sobre Nós
            </NavLink>
            <NavLink href="#missao-e-negocio" isScrolled={isScrolled}>
              Missão e Negócio
            </NavLink>
            <NavLink href="#visao" isScrolled={isScrolled}>
              Visão
            </NavLink>
            <NavLink href="#contato" isScrolled={isScrolled}>
              Contato
            </NavLink>
          </nav>

          <button
            className={`md:hidden z-10 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-900 z-50" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex items-center justify-center overflow-hidden md:hidden">
          <nav className="flex flex-col items-center space-y-8 text-xl">
            <NavLink href="#sobre-nos" onClick={closeMenu} isScrolled={true}>
              Sobre Nós
            </NavLink>
            <NavLink
              href="#missao-e-negocio"
              onClick={closeMenu}
              isScrolled={true}
            >
              Missão e Negócio
            </NavLink>
            <NavLink href="#visao" onClick={closeMenu} isScrolled={true}>
              Visão
            </NavLink>
            <NavLink href="#contato" onClick={closeMenu} isScrolled={true}>
              Contato
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
