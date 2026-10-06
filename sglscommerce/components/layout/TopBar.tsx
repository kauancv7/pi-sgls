import { Container } from "@/components/layout/Container";

export function TopBar() {
  return (
    <aside className="border-b border-[#3a2f2a] bg-[#231c19] text-[#f8f9fa] text-xs font-medium tracking-wide">
      <Container className="flex min-h-9 items-center justify-between py-2 text-center sm:text-left">
        <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
          <span className="inline-block rounded-none bg-[#8b4513] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Destaque
          </span>
          <p className="text-[11px] sm:text-xs text-[#e8e2d8]">
            ⚡ <strong>FRETE GRÁTIS</strong> acima de R$ 199 | 💳 Parcele em até <strong>6x sem juros</strong> | <strong>7% OFF</strong> no PIX
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[#b3a89f] text-xs">
          <span className="inline-flex items-center gap-1.5 hover:text-[#f8f9fa] transition-colors cursor-pointer">
            <WhatsAppOutlineIcon className="size-3.5" />
            (88) 99999-9999
          </span>
          <span className="inline-flex items-center gap-1.5 hover:text-[#f8f9fa] transition-colors cursor-pointer">
            <TruckOutlineIcon className="size-3.5" />
            Rastrear Pedido
          </span>
        </div>
      </Container>
    </aside>
  );
}

function WhatsAppOutlineIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function TruckOutlineIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}
