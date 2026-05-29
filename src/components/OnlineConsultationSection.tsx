import Image from "next/image";
import Link from "next/link";

export function OnlineConsultationSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: heading */}
          <div>
            <h2
              className="text-[42px] md:text-[52px] font-bold leading-tight mb-8"
              style={{ fontFamily: "Poppins, sans-serif", color: "#3d4852" }}
            >
              Atendimento
              <br />
              <span style={{ color: "#829078" }}>Online</span>
            </h2>
          </div>

          {/* Right: description */}
          <div>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "Roboto, sans-serif", color: "#3d4852" }}
            >
              Dra Bruna além das consultas presenciais em seu consultório, também
              faz atendimentos online para pessoas que não conseguem ir
              presencialmente, seja devido ao horário de trabalho ou mesmo pessoas
              que moram fora de São Paulo.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "Roboto, sans-serif", color: "#3d4852" }}
            >
              Com isso, possibilita o atendimento para pacientes do mundo inteiro.
              O atendimento é igual na consulta presencial, com uma conversa bem
              extensa para entender todo objetivo, preferências, aversões, alergias
              e rotina de cada paciente.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "Roboto, sans-serif", color: "#3d4852" }}
            >
              Também tem análises de exames laboratoriais (de sangue). Em cada
              consulta é realizado uma avaliação através da Bioimpedância (uma
              máquina para verificar toda a composição corporal do paciente), mas
              é orientado como fazer algumas medidas de circunferências para
              monitoramento do quadro evolutivo.
            </p>

            <Link
              href="/contato"
              className="inline-block bg-[#829078] text-[#463939] rounded-[50px] px-8 py-3 text-base font-medium hover:bg-[#718067] transition-colors duration-200"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Agendar Consulta Online &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
