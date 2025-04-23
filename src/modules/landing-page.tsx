"use client";

import { motion } from "framer-motion";

import { MissionItem } from "@/components/mission-item";
import { HeroCarousel } from "@/components/hero-caroussel";
import { ContactForm } from "@/components/contact-fom";
import { FallingLogos } from "@/components/fall-logos";

import Image from "next/image";

export function LandingPage() {
  return (
    <main className="relative min-h-screen bg-white text-gray-800">
      <HeroCarousel />

      <section
        id="sobre-nos"
        className="relative min-h-screen flex items-center justify-center z-10"
      >
        <div className="container mx-auto py-16 sm:py-20 w-4/5 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-4/5 mx-auto flex gap-14"
          >
            <div>
              <div className="flex gap-2">
                <Image
                  src="/assets/arrow-green.svg"
                  width={36}
                  height={36}
                  alt="icone de seta"
                  className="lg:size-11 sm:mb-9 sm:size-7"
                />
                <h1 className="z-50 text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 text-[#45B649] font-aminute">
                  Sobre Nós
                </h1>
              </div>
              <p className="text-base z-30 sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
                Somos uma empresa dedicada a transformar o mundo através de
                soluções inovadoras que respeitam o meio ambiente e promovem o
                bem-estar social. Nossa equipe multidisciplinar trabalha
                incansavelmente para criar um futuro melhor para todos.
              </p>
            </div>
            <Image
              src="/assets/teste.png"
              width={300}
              height={250}
              quality={100}
              alt="banner eidos"
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      <section
        id="visao"
        className="relative min-h-screen flex items-center justify-center bg-[#00A7BE] text-zinc-100 z-20"
      >
        <div
          className="absolute top-0 left-0 w-full h-16 sm:h-24 bg-contain bg-repeat-x bg-bottom"
          style={{ backgroundImage: "url('/assets/icons.svg')" }}
        ></div>
        <div className="container mx-auto px-4 py-16 sm:py-20 w-4/5 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/assets/arrow-white.svg"
                width={36}
                height={36}
                alt="icone de seta"
                className="lg:size-11 sm:mb-9 sm:size-7 "
              />
              <h2 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 text-center font-aminute">
                Visão
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
              O Eidos Instituto visa promover a transformação social por meio da
              qualificação e inovação na gestão governamental, com foco em
              processos sustentáveis e resultados impactantes para a sociedade.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-blue-400 to-transparent"></div>
      </section>

      <section
        id="missao-e-negocio"
        className="relative min-h-screen flex items-center justify-center bg-white z-30"
      >
        <div className="container mx-auto px-4 py-16 sm:py-16 w-4/5 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Image
                src="/assets/arrow-yellow.svg"
                width={36}
                height={36}
                alt="icone de seta"
                className="lg:size-11 sm:mb-9 sm:size-7 lg:mb-14"
              />
              <h2 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 text-center text-[#FEBD11] font-aminute">
                Missão e Negócio
              </h2>
            </div>
            <div className="flex flex-col mb-24 md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-8">
              <MissionItem
                title="Missão"
                content="Ser referência na criação de ferramentas e
                    soluções tecnológicas que capacitem governos
                    a implementar mudanças significativas e
                    promover o desenvolvimento social"
              />
              <MissionItem
                title="Negócio"
                content="Oferecer modelos de gestão governamental
                            inovadores e acessíveis, capazes de
                            transformar realidades adversas e implementar
                            políticas públicas eficazes que gerem impacto
                            positivo na vida da população."
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-slate-200 to-transparent"></div>
      </section>

      {/* <ClientsPartners /> */}
      {/* <section>
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true }}
        >
       <Image src={'/assets/o-que-fazemos.png'} fill/>
        </motion.div>
      </section> */}
      <section
        id="contato"
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50 z-40"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 sm:mb-16 text-gray-900 text-center font-aminute">
              Fale Conosco
            </h2>
            <p className="text-center text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Estamos ansiosos para ouvir de você. Preencha o formulário abaixo
              e entraremos em contato o mais breve possível.
            </p>
            <ContactForm />
          </motion.div>
        </div>
        <FallingLogos />
      </section>
    </main>
  );
}
