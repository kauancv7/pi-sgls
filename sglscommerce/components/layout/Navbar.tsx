import Link from "next/link";
import { Container } from "@/components/layout/Container";

const navigationItems = [
  {
    label: "INÍCIO",
    href: "/",
    icon: HomeOutlineIcon,
  },
  {
    label: "NOVIDADES",
    href: "/products",
    badge: "NOVO",
    icon: SparklesOutlineIcon,
  },
  {
    label: "MASCULINO",
    href: "/products",
    icon: ShirtOutlineIcon,
  },
  {
    label: "FEMININO",
    href: "/products",
    icon: DressOutlineIcon,
  },
  {
    label: "CASACOS & JAQUETAS",
    href: "/products",
    icon: CoatOutlineIcon,
  },
  {
    label: "KITS",
    href: "/products",
    icon: PackageOutlineIcon,
  },
  {
    label: "OUTLET",
    href: "/products",
    badge: "ATÉ 60% OFF",
    highlight: true,
    icon: TagOutlineIcon,
  },
];

export function Navbar() {
  return (
    <nav className="border-b border-[#e2ddd5] bg-[#f8f9fa]" aria-label="Navegação principal da loja">
      <Container>
        <ul className="flex min-h-12 items-center gap-1 overflow-x-auto py-1 scrollbar-none">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`inline-flex min-h-10 items-center gap-2 rounded-none px-3.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d221e] ${
                    item.highlight
                      ? "text-[#b93826] hover:bg-[#eeeae4]"
                      : "text-[#2d221e] hover:text-[#8b4513] hover:bg-[#eeeae4]"
                  }`}
                >
                  <Icon className="size-4 shrink-0 text-current" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                        item.highlight
                          ? "bg-[#8b4513] text-white"
                          : "bg-[#eeeae4] text-[#2d221e] border border-[#e2ddd5]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}

function HomeOutlineIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SparklesOutlineIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    </svg>
  );
}

function ShirtOutlineIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function DressOutlineIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M9 3v3a3 3 0 0 0 6 0V3" />
      <path d="M7 6 4 11l4 2v8h8v-8l4-2-3-5" />
    </svg>
  );
}

function CoatOutlineIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4" />
      <path d="M4 8h16" />
      <path d="m10 4 2 4 2-4" />
      <path d="M12 8v14" />
    </svg>
  );
}

function PackageOutlineIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function TagOutlineIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}
