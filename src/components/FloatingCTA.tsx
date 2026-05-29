import Link from "next/link";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 right-0 z-50">
      <Link
        href="/contato"
        className="flex items-center gap-3 px-6 py-3 text-sm font-medium shadow-lg hover:brightness-95 transition-all duration-200"
        style={{
          background:
            "linear-gradient(90deg, rgb(238, 156, 167) 0%, rgb(255, 221, 225) 100%)",
          color: "#463939",
          fontFamily: "Roboto, sans-serif",
          borderRadius: "50px 0 0 0",
        }}
      >
        <ChatBubbleIcon />
        Agende sua Consulta
      </Link>
    </div>
  );
}

function ChatBubbleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}
