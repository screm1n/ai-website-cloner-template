import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Emagrecimento e Obesidade",
    description:
      "A obesidade já é considerada um dos principais problemas de saúde pública no Brasil e no mundo. A nutrição possui papel fundamental na reversão do quadro e promoção de saúde e qualidade de vida.",
    image: "/images/service-obesity.jpg",
    href: "/emagrecimento-obesidade",
  },
  {
    title: "Nutrição Funcional",
    description:
      "Tem como intuito o tratamento de desequilíbrios causados pelo excesso ou pela carência nutricional de cada indivíduo, a partir do desenvolvimento de um cardápio balanceado e individualizado.",
    image: "/images/service-functional.jpg",
    href: "/nutricao-funcional",
  },
  {
    title: "Nutrição e Estética",
    description:
      "A nutrição estética contribui com a melhora da aparência e saúde da pele, cabelo e unhas, além do combate ao envelhecimento precoce, celulite e gordura localizada.",
    image: "/images/service-aesthetic.jpg",
    href: "/nutricao-estetica",
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-[#eeeeee] py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2
          className="text-[42px] font-bold text-center mb-14"
          style={{ fontFamily: "Poppins, sans-serif", color: "#3d4852" }}
        >
          Minhas Especialidades
        </h2>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Card image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Card content */}
              <div className="p-6">
                <h3
                  className="text-[20px] font-semibold mb-3"
                  style={{ fontFamily: "Poppins, sans-serif", color: "#3d4852" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Roboto, sans-serif", color: "#5a6370" }}
                >
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button — pink gradient */}
        <div className="flex justify-center">
          <Link
            href="/servicos"
            className="inline-block rounded-[50px] px-10 py-4 text-base font-medium hover:brightness-95 transition-all duration-200"
            style={{
              background: "linear-gradient(90deg, rgb(238, 156, 167) 0%, rgb(255, 221, 225) 100%)",
              color: "#463939",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Veja Todos os Serviços &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
