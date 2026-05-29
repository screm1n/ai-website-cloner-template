"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const servicesItems = [
  { label: "Emagrecimento & Obesidade", href: "/emagrecimento-obesidade" },
  { label: "Desparasitação", href: "/parasitas" },
  { label: "Nutrição Funcional", href: "/nutricao-funcional" },
  { label: "Nutrição e Estética", href: "/nutricao-estetica" },
  { label: "Nutrição Esportiva", href: "/nutricao-esportiva" },
  { label: "Intolerâncias alimentares", href: "/intolerancia-alimentar" },
  { label: "Nutrição Ortomolecular", href: "/ortomolecular" },
];

const sobreItems = [
  { label: "Sobre a Dra. Bruna Burti", href: "/bruna-burti" },
  { label: "A Clínica", href: "/clinica" },
];

const blogItems = [
  { label: "Artigos", href: "/blog" },
  { label: "Receitas", href: "/receitas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="relative flex items-center justify-between px-4 md:px-8 py-3 max-w-[1440px] mx-auto">
        {/* Left: social icons */}
        <div className="flex items-center gap-3 text-[#3d4852]">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-[#829078] transition-colors">
            <FacebookIcon />
          </Link>
          <Link href="mailto:contato@brunaburti.com.br" aria-label="Email" className="hover:text-[#829078] transition-colors">
            <MailIcon />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-[#829078] transition-colors">
            <InstagramIcon />
          </Link>
          <Link href="https://wa.me/5511920992904" target="_blank" aria-label="WhatsApp" className="hover:text-[#829078] transition-colors">
            <WhatsAppIcon />
          </Link>
        </div>

        {/* Center nav left */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#3d4852]">
          <DropdownNav label="Serviços" items={servicesItems} open={openDropdown === 'services'} onToggle={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')} />
          <span className="text-[#829078] mx-1">·</span>
          <Link href="/metodo-gsi" className="px-3 py-2 hover:text-[#829078] transition-colors whitespace-nowrap">
            Método G.S.I.
          </Link>
          <span className="text-[#829078] mx-1">·</span>
          <DropdownNav label="Sobre" items={sobreItems} open={openDropdown === 'sobre'} onToggle={() => setOpenDropdown(openDropdown === 'sobre' ? null : 'sobre')} />
        </nav>

        {/* Center: Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Bruna Burti"
            width={120}
            height={56}
            className="object-contain"
            priority
          />
        </Link>

        {/* Right nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#3d4852]">
          <Link href="/midia" className="px-3 py-2 hover:text-[#829078] transition-colors">
            Mídia
          </Link>
          <span className="text-[#829078] mx-1">·</span>
          <DropdownNav label="Blog" items={blogItems} open={openDropdown === 'blog'} onToggle={() => setOpenDropdown(openDropdown === 'blog' ? null : 'blog')} />
          <span className="text-[#829078] mx-1">·</span>
          <Link href="/contato" className="px-3 py-2 hover:text-[#829078] transition-colors">
            Contato
          </Link>
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center ml-4">
          <Link
            href="/contato"
            className="border border-[#829078] text-[#463939] rounded-full px-5 py-2 text-sm hover:bg-[#829078]/10 transition-all duration-200 whitespace-nowrap"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Agende sua Consulta &gt;
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto text-[#3d4852]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 text-[#3d4852]">
          <details className="group">
            <summary className="cursor-pointer font-medium py-1 list-none flex justify-between items-center">
              Serviços <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pl-4 mt-1 flex flex-col gap-1">
              {servicesItems.map(i => <Link key={i.href} href={i.href} className="py-1 text-sm hover:text-[#829078]">{i.label}</Link>)}
            </div>
          </details>
          <Link href="/metodo-gsi" className="font-medium py-1">Método G.S.I.</Link>
          <details className="group">
            <summary className="cursor-pointer font-medium py-1 list-none flex justify-between items-center">
              Sobre <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pl-4 mt-1 flex flex-col gap-1">
              {sobreItems.map(i => <Link key={i.href} href={i.href} className="py-1 text-sm hover:text-[#829078]">{i.label}</Link>)}
            </div>
          </details>
          <Link href="/midia" className="font-medium py-1">Mídia</Link>
          <details className="group">
            <summary className="cursor-pointer font-medium py-1 list-none flex justify-between items-center">
              Blog <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="pl-4 mt-1 flex flex-col gap-1">
              {blogItems.map(i => <Link key={i.href} href={i.href} className="py-1 text-sm hover:text-[#829078]">{i.label}</Link>)}
            </div>
          </details>
          <Link href="/contato" className="font-medium py-1">Contato</Link>
          <Link href="/contato" className="bb-button text-center mt-2">Agende sua Consulta &gt;</Link>
        </div>
      )}
    </header>
  );
}

function DropdownNav({ label, items, open, onToggle }: { label: string; items: { label: string; href: string }[]; open: boolean; onToggle: () => void }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 hover:text-[#829078] transition-colors"
      >
        {label} <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50 border border-gray-100">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#829078] transition-colors"
              onClick={onToggle}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
