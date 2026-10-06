import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { LoginDrawer } from "@/components/layout/LoginDrawer";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e2ddd5] bg-[#f8f9fa] shadow-header">
      <Container className="flex flex-col gap-3 py-3 md:min-h-20 md:flex-row md:items-center md:gap-6 md:py-4">
        {/* Brand & Mobile Actions */}
        <div className="flex w-full items-center justify-between gap-4 md:w-auto md:shrink-0">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Lojas Stuart - página inicial"
          >
            <span className="flex size-10 items-center justify-center bg-[#2d221e] text-base font-black tracking-widest text-[#f8f9fa] transition-transform group-hover:scale-105">
              LS
            </span>

            <div className="flex flex-col">
              <span className="font-sans text-lg font-black uppercase tracking-wider text-[#231c19] sm:text-xl">
                LOJAS STUART
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8b5e3c]">
                Moda & Alfaiataria
              </span>
            </div>
          </Link>

          {/* Mobile Actions */}
          <div
            className="flex items-center gap-1 md:hidden"
            aria-label="Ações rápidas"
          >
            <Link
              href="/"
              className="inline-flex size-10 items-center justify-center text-[#2d221e] transition-opacity hover:opacity-70"
              aria-label="Minha conta"
            >
              <UserOutlineIcon className="size-5" />
            </Link>

            <Link
              href="/"
              className="relative inline-flex size-10 items-center justify-center text-[#2d221e] transition-opacity hover:opacity-70"
              aria-label="Carrinho"
            >
              <ShoppingBagOutlineIcon className="size-5" />

              <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-[#8b4513] text-[9px] font-bold text-white">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <form
          className="relative flex w-full items-center md:flex-1"
          role="search"
          aria-label="Busca de produtos"
        >
          <div className="relative w-full">
            <SearchOutlineIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-[#9e9389]" />

            <Input
              type="search"
              name="search"
              placeholder="O que você procura hoje? (ex: Calça Alfaiataria, Polo Tricot, Linho)"
              aria-label="Buscar produtos"
              className="h-11 w-full rounded-none border border-[#e2ddd5] bg-white pl-10 pr-24 text-xs text-[#231c19] transition-all placeholder:text-[#9e9389] focus:border-[#2d221e] focus:bg-white focus:ring-0"
            />

            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#2d221e] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#f8f9fa] transition-colors hover:bg-[#42322c]"
            >
              Buscar
            </button>
          </div>
        </form>

        {/* Desktop Actions */}
        <div
          className="hidden items-center gap-4 md:flex md:shrink-0"
          aria-label="Ações do cliente"
        >
          {/* Login / Minha Conta */}
          <LoginDrawer />

          {/* Lista de Desejos */}
          <Link
            href="/"
            className="relative inline-flex h-10 items-center justify-center gap-1.5 px-2 text-xs font-semibold text-[#2d221e] transition-colors hover:text-[#8b4513]"
            aria-label="Lista de Desejos"
          >
            <HeartOutlineIcon className="size-5" />

            <span className="text-xs font-bold uppercase">
              Desejos
            </span>

            <span className="flex size-4 items-center justify-center rounded-full bg-[#8b4513] text-[9px] font-bold text-white">
              0
            </span>
          </Link>

          {/* Carrinho */}
          <Link
            href="/"
            className="relative inline-flex h-10 items-center justify-center gap-2.5 bg-[#2d221e] px-4 py-2 text-xs font-bold uppercase tracking-wider !text-white transition-colors hover:bg-[#42322c]"
            aria-label="Carrinho"
          >
            <div className="relative">
              <ShoppingBagOutlineIcon className="size-4.5" />

              <span className="absolute -right-2 -top-2 flex size-3.5 items-center justify-center rounded-full bg-[#c68b59] text-[8px] font-black text-[#231c19]">
                0
              </span>
            </div>

            <span className="!text-white">
              Carrinho / R$ 0,00
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
}

type IconProps = {
  className?: string;
};

export function SearchOutlineIcon({ className }: IconProps) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function UserOutlineIcon({ className }: IconProps) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function ShoppingBagOutlineIcon({ className }: IconProps) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export function HeartOutlineIcon({ className }: IconProps) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}