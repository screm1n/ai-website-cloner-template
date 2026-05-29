"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Excelente profissional, através do seu método GSI consegui reeducar minha alimentação de uma maneira prazerosa. Estou muito feliz com os resultados, emagreci, melhorou o funcionamento do meu intestino e minha disposição. Super recomendo!",
    author: "Andreia Freitas",
  },
  {
    text: "Finalizei o meu primeiro programa do Método GSI com a Dra Bruna Burti e estou extremamente satisfeita. Estou renovando já o segundo programa! A Bruna é uma profissional super competente. Sempre atualizada com novas metodologias nutricionais, muito atenciosa (Uma fofa na verdade!) e capacitada para adequar o plano alimentar de uma maneira super prática e funcional. Muito fácil seguir as suas orientações e se acontecer alguma escapadinha, ela é a mais compreensível e parceira para ajustar a rota.",
    author: "Paciente",
  },
  {
    text: "Eu conheci a Dra. Bruna em um momento em que eu estava querendo fazer uma lipo de qualquer jeito, mas optei por tentar perder a gordura com a ajuda dela e de uma maneira menos invasiva! Foi aí que começamos a minha reeducação alimentar, ela me ensinou a comer bem e sem aquelas dietas rigorosas que é muito difícil dar continuidade! Agora já faz mais de 2 anos que ela me acompanha e sempre atualizamos a minha dieta! Eu já perdi muita gordura e atingi o corpo que eu tanto queria! Só tenho a agradecer pelo cuidado e toda a confiança que ela passa para os seus pacientes!",
    author: "Cristina Samartin",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="w-full py-20 px-8" style={{ backgroundColor: "#f5e8e8" }}>
      <div className="max-w-[800px] mx-auto">
        {/* Section heading */}
        <h2
          className="text-[32px] font-semibold text-center mb-12"
          style={{ fontFamily: "Poppins, sans-serif", color: "#829078" }}
        >
          Depoimentos
        </h2>

        {/* Carousel */}
        <div className="relative flex items-center gap-4">
          <button
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white/60 hover:bg-white flex items-center justify-center text-[#3d4852] transition-colors shadow"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex-1 text-center px-4">
            <blockquote
              className="text-base leading-relaxed italic mb-6"
              style={{ fontFamily: "Roboto, sans-serif", color: "#3d4852" }}
            >
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>
            <cite
              className="not-italic font-semibold text-base"
              style={{ fontFamily: "Poppins, sans-serif", color: "#3d4852" }}
            >
              - {testimonials[current].author}
            </cite>
          </div>

          <button
            onClick={next}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white/60 hover:bg-white flex items-center justify-center text-[#3d4852] transition-colors shadow"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-[#829078]" : "bg-[#c9a8aa]"
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
