import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background: Bruna's portrait photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bruna-portrait-bg.jpg"
          alt="Dra. Bruna Burti"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* White wave bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <Image
          src="/images/wave-bg.png"
          alt=""
          width={1920}
          height={238}
          className="w-full h-auto"
          style={{ display: "block" }}
        />
      </div>

      {/* Content — left-aligned, on top of the photo */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-32 md:py-40">
        <div className="max-w-[500px]">
          {/* CRN badge */}
          <p
            className="font-normal mb-3"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "#b99496",
              fontSize: "22px",
            }}
          >
            CRN-3: 28101
          </p>

          {/* Heading */}
          <h1
            className="leading-tight mb-5"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "#3d4852",
              fontSize: "52px",
              fontWeight: 400,
            }}
          >
            Nutricionista
            <br />
            <strong style={{ fontWeight: 700 }}>Bruna Burti</strong>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-10"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "#3d4852",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "1.5",
            }}
          >
            Emagrecimento, Performance,
            <br />
            Bem-estar, Saúde e Qualidade de Vida
          </p>

          {/* Pink gradient CTA */}
          <Link
            href="/contato"
            className="inline-block rounded-[50px] px-8 py-4 text-[15px] font-medium transition-all duration-200 hover:brightness-95"
            style={{
              background:
                "linear-gradient(90deg, rgb(238, 156, 167) 0%, rgb(255, 221, 225) 100%)",
              color: "#505050",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Agende sua Consulta &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
