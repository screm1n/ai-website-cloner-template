import Image from "next/image";
import Link from "next/link";

export function AboutIntroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-0">
        <Image
          src="/images/wave-bg-vertical.png"
          alt=""
          width={1920}
          height={500}
          className="w-full h-auto object-cover"
          style={{ display: 'block' }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: portrait photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[440px] aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/bruna-portrait-1.jpg"
                alt="Dra. Bruna Burti"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right: text content */}
          <div className="flex flex-col justify-center">
            <p
              className="text-[20px] font-normal mb-2"
              style={{ fontFamily: "Poppins, sans-serif", color: "#3d4852" }}
            >
              Oi! Eu sou a
            </p>
            <h2
              className="text-[45px] leading-tight font-bold mb-6"
              style={{ fontFamily: "Poppins, sans-serif", color: "#3d4852" }}
            >
              Nutricionista
              <br />
              <span style={{ color: "#b99496" }}>Bruna Burti</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-[480px]"
              style={{ fontFamily: "Roboto, sans-serif", color: "#3d4852" }}
            >
              Nutricionista por paixão e amor a profissão. A palavra equilíbrio
              sempre me acompanha e levo em conta as individualidades da paciente,
              acolhendo-a de forma singular, notando suas nuances, estilo de vida,
              desejos e dúvidas.
            </p>

            <Link
              href="/bruna-burti"
              className="inline-block bg-[#829078] text-[#463939] rounded-[50px] px-8 py-3 text-base font-medium hover:bg-[#718067] transition-colors duration-200 self-start"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Saiba mais sobre mim
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
