"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function LoginDrawer() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* BOTÃO MINHA CONTA */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 items-center justify-center gap-2 px-2 text-xs font-semibold text-[#2d221e] transition-colors hover:text-[#8b4513]"
        aria-label="Minha conta"
      >
        <UserIcon className="size-5" />

        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] font-medium uppercase text-[#9e9389]">
            Entrar
          </span>

          <span className="text-xs font-bold uppercase">
            Minha Conta
          </span>
        </div>
      </button>

      {/* FUNDO ESCURECIDO */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[80] bg-black/60 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* PAINEL LATERAL */}
      <aside
        className={`fixed right-0 top-0 z-[90] h-screen w-full max-w-[460px] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* CABEÇALHO */}
        <div className="flex h-16 items-center justify-between border-b border-[#e2ddd5] px-6">
          <h2 className="text-lg font-black uppercase text-[#231c19]">
            Entrar
          </h2>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-xs font-bold uppercase text-[#231c19] transition-colors hover:text-[#8b4513]"
          >
            <CloseIcon className="size-4" />
            Fechar
          </button>
        </div>

        {/* FORMULÁRIO */}
        <form
          className="px-6 py-7"
          onSubmit={(event) => event.preventDefault()}
        >
          <div>
            <label
              htmlFor="login-email"
              className="mb-2 block text-xs font-bold text-[#231c19]"
            >
              E-mail <span className="text-[#8b4513]">*</span>
            </label>

            <input
              id="login-email"
              type="email"
              required
              className="h-11 w-full border border-[#d8d3cc] bg-white px-3 text-sm text-[#231c19] outline-none transition-colors focus:border-[#2d221e]"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="login-password"
              className="mb-2 block text-xs font-bold text-[#231c19]"
            >
              Senha <span className="text-[#8b4513]">*</span>
            </label>

            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                required
                className="h-11 w-full border border-[#d8d3cc] bg-white px-3 pr-11 text-sm text-[#231c19] outline-none transition-colors focus:border-[#2d221e]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7c726b] hover:text-[#231c19]"
                aria-label={
                  showPassword ? "Ocultar senha" : "Mostrar senha"
                }
              >
                {showPassword ? (
                  <EyeOffIcon className="size-5" />
                ) : (
                  <EyeIcon className="size-5" />
                )}
              </button>
            </div>
          </div>

          {/* BOTÃO ENTRAR */}
          <button
            type="submit"
            className="mt-5 h-11 w-full bg-[#2d221e] text-xs font-black uppercase tracking-wider !text-white transition-colors hover:bg-[#42322c]"
          >
            Entrar
          </button>

          {/* OPÇÕES */}
          <div className="mt-5 flex items-center justify-between gap-4 text-xs">
            <label className="flex cursor-pointer items-center gap-2 text-[#231c19]">
              <input
                type="checkbox"
                className="size-4 accent-[#2d221e]"
              />

              Manter conectado
            </label>

            <button
              type="button"
              className="font-semibold text-[#231c19] hover:text-[#8b4513]"
            >
              Esqueceu a senha?
            </button>
          </div>
        </form>

        {/* CRIAR CONTA */}
        <div className="border-t border-[#e2ddd5] px-6 py-10 text-center">
          <UserLargeIcon className="mx-auto size-14 text-[#dedbd7]" />

          <p className="mt-4 text-sm font-bold text-[#231c19]">
            Não tem conta?
          </p>

         <Link
          href="/cadastro"
          className="mt-4 inline-block border-b border-[#231c19] pb-1 text-xs font-black uppercase tracking-wider text-[#231c19] transition-colors hover:border-[#8b4513] hover:text-[#8b4513]"
         >
         Criar conta
         </Link>
        </div>
      </aside>
    </>
  );
}

type IconProps = {
  className?: string;
};

function UserIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UserLargeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="4" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 21a7.5 7.5 0 0 1 15 0"
      />
    </svg>
  );
}

function CloseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        d="M6 6l12 12M18 6 6 18"
      />
    </svg>
  );
}

function EyeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
      />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function EyeOffIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.9 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-2.1 3.1M6.2 6.2C3.5 8.1 2 12 2 12s3.5 7 10 7a9.8 9.8 0 0 0 4-.8"
      />
    </svg>
  );
}