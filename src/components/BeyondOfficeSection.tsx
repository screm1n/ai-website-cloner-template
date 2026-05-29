import Image from "next/image";
import Link from "next/link";

export function BeyondOfficeSection() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background: flower/nature image of Bruna */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/beyond-office-bg.jpg"
          alt="Além do Consultório"
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 py-20 max-w-[700px] mx-auto">
        <h2
          className="text-[42px] md:text-[52px] font-light text-white mb-6"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Além do Consultório
        </h2>
        <p
          className="text-base md:text-lg text-white/90 leading-relaxed mb-8"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Realizo consultoria de novos produtos, assessoria em compras no mercado,
          consultorias a restaurantes, rotulagem nutricional e criação de cardápios
          personalizados para eventos.
        </p>
        <Link
          href="/contato"
          className="inline-block bg-[#829078] text-[#463939] rounded-[50px] px-8 py-3 text-base font-medium hover:bg-[#718067] transition-colors duration-200"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Entre em Contato &gt;
        </Link>
      </div>
    </section>
  );
}
