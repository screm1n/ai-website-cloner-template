import Link from "next/link";

export function FooterSection() {
  return (
    <footer
      className="w-full py-16 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: "#4a5242", backgroundImage: "url('/images/bruna-portrait-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "multiply" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation links */}
          <div>
            <nav className="flex flex-col gap-3">
              <Link href="/bruna-burti" className="text-white/90 hover:text-white text-sm transition-colors" style={{ fontFamily: "Roboto, sans-serif" }}>
                Sobre a Dra. Bruna Burti
              </Link>
              <Link href="/clinica" className="text-white/90 hover:text-white text-sm transition-colors" style={{ fontFamily: "Roboto, sans-serif" }}>
                A Clínica
              </Link>
              <Link href="/servicos" className="text-white/90 hover:text-white text-sm transition-colors" style={{ fontFamily: "Roboto, sans-serif" }}>
                Serviços
              </Link>
              <Link href="/contato" className="text-white/90 hover:text-white text-sm transition-colors" style={{ fontFamily: "Roboto, sans-serif" }}>
                Contato
              </Link>
              <Link href="/metodo-gsi" className="text-white/90 hover:text-white text-sm transition-colors" style={{ fontFamily: "Roboto, sans-serif" }}>
                Método G.S.I.
              </Link>
              <Link href="/midia" className="text-white/90 hover:text-white text-sm transition-colors" style={{ fontFamily: "Roboto, sans-serif" }}>
                Mídia
              </Link>
              <Link href="/blog" className="text-white/90 hover:text-white text-sm transition-colors" style={{ fontFamily: "Roboto, sans-serif" }}>
                Blog
              </Link>
              <Link href="/downloads" className="text-white/90 hover:text-white text-sm transition-colors" style={{ fontFamily: "Roboto, sans-serif" }}>
                Downloads
              </Link>
              <Link href="/parasitas" className="text-white/90 hover:text-white text-sm transition-colors" style={{ fontFamily: "Roboto, sans-serif" }}>
                Desparasitação
              </Link>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className="text-white font-semibold text-base mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contato
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/80" style={{ fontFamily: "Roboto, sans-serif" }}>
              <p>(11) 92099-2904</p>
              <p>contato@brunaburti.com.br</p>
              <p className="mt-2 leading-relaxed">
                Avenida Nove de Julho, 4939<br />
                Conj. 135 A - Jardim Paulistano<br />
                São Paulo - SP
              </p>
            </div>
          </div>

          {/* Social / CTA */}
          <div className="flex flex-col gap-6">
            {/* WhatsApp button */}
            <Link
              href="https://wa.me/5511920992904"
              target="_blank"
              className="flex items-center gap-3 border border-white/60 rounded-full px-5 py-3 text-white text-sm hover:bg-white/10 transition-colors w-fit"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <ChatIcon />
              Envie um WhatsApp
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <Link href="mailto:contato@brunaburti.com.br" className="text-white/80 hover:text-white transition-colors" aria-label="Email">
                <MailIcon />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
