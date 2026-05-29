import Image from "next/image";
import Link from "next/link";

export function MetodoGSISection() {
  return (
    <section className="w-full bg-[#eeeeee] py-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Left: tape measure photo */}
        <div className="relative min-h-[400px] md:min-h-auto">
          <Image
            src="/images/service-obesity.jpg"
            alt="Método G.S.I."
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right: content */}
        <div className="bg-white px-12 py-16 flex flex-col justify-center">
          <h2
            className="text-[42px] font-bold tracking-wide mb-2"
            style={{ fontFamily: "Poppins, sans-serif", color: "#3d4852" }}
          >
            MÉTODO G.S.I.
          </h2>
          <p
            className="text-[20px] mb-6"
            style={{ fontFamily: "Poppins, sans-serif", color: "#829078" }}
          >
            Cuidado ímpar do corpo e mente
          </p>

          <p
            className="text-base leading-relaxed mb-4"
            style={{ fontFamily: "Roboto, sans-serif", color: "#3d4852" }}
          >
            O Método G.S.I. (Gestão da Saúde Integrada) é uma abordagem exclusiva
            da Dra. Bruna Burti que vai além dos sintomas físicos, englobando todos
            os seus espectros e dimensões.
          </p>

          <p
            className="text-base leading-relaxed mb-10"
            style={{ fontFamily: "Roboto, sans-serif", color: "#3d4852" }}
          >
            Cuidamos da saúde de cada paciente, de forma única, individual e
            humanizada, viabilizando um atendimento e tratamento excepcional
            focado em gestão da saúde integrada.
          </p>

          <Link
            href="/metodo-gsi"
            className="inline-block bg-[#829078] text-[#463939] rounded-[50px] px-8 py-3 text-base font-medium hover:bg-[#718067] transition-colors duration-200 self-start"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Saiba mais sobre o Método &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
