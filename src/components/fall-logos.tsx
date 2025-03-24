"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface FallingLogo {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export function FallingLogos() {
  const [logos, setLogos] = useState<FallingLogo[]>([]);

  useEffect(() => {
    const generateLogos = () => {
      const newLogos: FallingLogo[] = [];
      const count = window.innerWidth < 768 ? 5 : 10;

      for (let i = 0; i < count; i++) {
        newLogos.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 7 + Math.random() * 10,
          size: 20 + Math.random() * 30,
          rotation: Math.random() * 360,
        });
      }

      setLogos(newLogos);
    };

    generateLogos();

    const handleResize = () => {
      generateLogos();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="absolute animate-fall"
          style={{
            left: `${logo.x}%`,
            top: "-50px",
            animationDelay: `${logo.delay}s`,
            animationDuration: `${logo.duration}s`,
            width: `${logo.size}px`,
            height: `${logo.size}px`,
            transform: `rotate(${logo.rotation}deg)`,
          }}
        >
          <Image
            src="/assets/logo-menor.png"
            alt="Logo caindo"
            width={logo.size}
            height={logo.size}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
