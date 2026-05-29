"use client";

import { useState } from "react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    especialidade: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handler - would connect to backend
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-gray-400 pb-2 pt-1 text-[#3d4852] placeholder-gray-400 focus:outline-none focus:border-[#829078] transition-colors text-base";

  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-[800px] mx-auto">
        {/* Heading */}
        <h2
          className="text-[42px] font-light text-center mb-2"
          style={{ fontFamily: "Poppins, sans-serif", color: "#3d4852" }}
        >
          Agende sua Consulta
        </h2>
        {/* Divider */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-0.5 bg-[#b99496]" />
        </div>
        <p
          className="text-center text-base mb-10"
          style={{ fontFamily: "Roboto, sans-serif", color: "#3d4852" }}
        >
          Com suas dúvidas e perguntas
        </p>

        {/* Form card */}
        <div className="bg-[#f5f5f5] rounded-2xl p-8 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Nome + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  className="block text-sm text-gray-500 mb-1"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder=""
                />
              </div>
              <div>
                <label
                  className="block text-sm text-gray-500 mb-1"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 2: Telefone + Especialidade */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  className="block text-sm text-gray-500 mb-1"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder=""
                />
              </div>
              <div>
                <label
                  className="block text-sm text-gray-500 mb-1"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Especialidade
                </label>
                <input
                  type="text"
                  name="especialidade"
                  value={formData.especialidade}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 3: Mensagem */}
            <div>
              <label
                className="block text-sm text-gray-500 mb-1"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={1}
                className={`${inputClass} resize-none`}
                placeholder=""
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#829078] text-white rounded-[50px] py-4 text-base font-medium hover:bg-[#718067] transition-colors duration-200"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
