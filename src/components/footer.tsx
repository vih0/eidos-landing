import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Linkedin, Github } from "lucide-react";
import { SocialLink } from "./social-links";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <Image
                  src="/assets/logo-menor.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
              </div>
            </Link>
            <p className="text-gray-600 max-w-md">
              Uma marca que constrói hoje as soluções que transformarão o
              amanhã.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h3 className="text-lg text-gray-900">Conecte-se conosco</h3>
            <div className="flex space-x-4">
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram size={20} />}
                label="Instagram"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={20} />}
                label="Twitter"
              />
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook size={20} />}
                label="Facebook"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com"
                icon={<Github size={20} />}
                label="GitHub"
              />
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} EIDOS. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
