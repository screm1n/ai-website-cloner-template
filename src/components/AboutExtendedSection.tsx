import Image from "next/image";
import Link from "next/link";

const courses = [
  "Consultoria Nutricional",
  "Curso de Extensão em Bioquímica aplicada à Nutrição",
  "Curso de Extensão em Prescrições de Suplementos e Fitoterápicos na área Clínica e Esportiva",
  "Curso de Bioressonância com Dr Lair Ribeiro",
  "Pós-graduanda em Tecnologias Biofísicas aplicado à Saúde",
];

export function AboutExtendedSection() {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: education list */}
          <div>
            <h2
              className="text-[32px] font-bold mb-8"
              style={{ fontFamily: "Poppins, sans-serif", color: "#3d4852" }}
            >
              Formação e Especialidades
            </h2>
            <ul className="space-y-3 mb-10">
              {courses.map((course, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-base leading-relaxed"
                  style={{ fontFamily: "Roboto, sans-serif", color: "#3d4852" }}
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#829078] flex-shrink-0" />
                  {course}
                </li>
              ))}
            </ul>

            <Link
              href="/bruna-burti"
              className="inline-block bg-[#829078] text-[#463939] rounded-[50px] px-8 py-3 text-base font-medium hover:bg-[#718067] transition-colors duration-200"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Saiba mais sobre mim
            </Link>
          </div>

          {/* Right: photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[420px] h-[520px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/bruna-about.jpg"
                alt="Dra. Bruna Burti"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
