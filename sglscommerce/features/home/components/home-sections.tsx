import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ProductGrid } from "@/features/products/components/product-grid";
import { Typography } from "@/components/ui/typography";
import { mockCategories } from "@/features/home/data/mock-storefront";
import { mockProducts } from "@/features/products/data/mock-products";

const primaryLinkClass =
  "inline-flex h-12 items-center justify-center bg-[#2d221e] px-8 text-xs font-black uppercase tracking-widest !text-white transition-all hover:bg-[#42322c] hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d221e] focus-visible:ring-offset-2";

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#e2ddd5] bg-[#f8f9fa] py-16 text-[#231c19] sm:py-24"
      aria-labelledby="home-title"
    >
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-12">

        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 border border-[#8b4513] bg-[#8b4513] px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-white">
            Coleção Outono / Inverno 2026
          </span>

          <h1
            id="home-title"
            className="mt-6 text-4xl font-black tracking-tight text-[#231c19] sm:text-5xl lg:text-6xl leading-[1.1] uppercase font-sans"
          >
            Elegância & Conforto em Tons Terrosos
          </h1>

          <p className="mt-6 max-w-2xl text-sm sm:text-base text-[#7c726b] leading-relaxed">
            Descubra as novidades das <strong>Lojas Stuart</strong>. Peças
            exclusivas em alfaiataria premium, linho puro, polos em tricot e
            tecidos tecnológicos em até <strong>6x sem juros</strong>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">

            {/* VER NOVA COLEÇÃO - CORRIGIDO */}
            <Link href="/products" className={primaryLinkClass}>
              <span className="!text-white">
                Ver Nova Coleção
              </span>
            </Link>

            <Link
              href="#categories"
              className="inline-flex h-12 items-center justify-center border border-[#e2ddd5] bg-white px-7 text-xs font-black uppercase tracking-widest text-[#2d221e] transition-all hover:border-[#2d221e] hover:bg-[#eeeae4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d221e]"
            >
              Explorar Categorias
            </Link>

          </div>
        </div>

        {/* Visual Showcase Card */}
        <div className="lg:col-span-5">
          <div className="relative border border-[#e2ddd5] bg-white p-6 shadow-card">

            <div className="flex items-center justify-between border-b border-[#e2ddd5] pb-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#2d221e]">
                Lojas Stuart • Destaques da Semana
              </span>

              <span className="text-[10px] font-bold text-[#8b4513] uppercase">
                Em Alta
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">

              <Link
                href="/products/blazer-alfaiataria-slim-fit"
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-[#f3f1ed] border border-[#e2ddd5] p-3 transition-transform hover:scale-[1.01]"
              >
                <img
                  src="/images/temp/prod-1.jpeg"
                  alt="Blazer Alfaiataria"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#231c19]/80 via-transparent to-transparent" />

                <span className="relative z-10 self-end bg-[#2d221e] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#f8f9fa]">
                  Lançamento
                </span>

                <span className="relative z-10 text-[10px] font-bold uppercase tracking-wider text-[#e8e2d8]">
                  Alfaiataria
                </span>

                <span className="relative z-10 text-xs font-black uppercase text-white">
                  Blazer Slim
                </span>
              </Link>

              <Link
                href="/products/vestido-midi-linho-premium"
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-[#f3f1ed] border border-[#e2ddd5] p-3 transition-transform hover:scale-[1.01]"
              >
                <img
                  src="/images/temp/prod-2.jpeg"
                  alt="Vestido Linho"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#231c19]/80 via-transparent to-transparent" />

                <span className="relative z-10 self-end bg-[#8b4513] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                  -25% OFF
                </span>

                <span className="relative z-10 text-[10px] font-bold uppercase tracking-wider text-[#e8e2d8]">
                  Feminino
                </span>

                <span className="relative z-10 text-xs font-black uppercase text-white">
                  Linha Linho
                </span>
              </Link>

            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#e2ddd5] pt-3 text-xs text-[#7c726b] font-medium">
              <span>💳 Até 6x sem juros</span>

              <span className="font-bold text-[#8b4513]">
                ⚡ 7% OFF no PIX
              </span>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}

export function StoreBenefits() {
  const benefits = [
    {
      icon: TruckIcon,
      title: "FRETE GRÁTIS",
      desc: "Acima de R$ 199 para todo o Brasil",
    },
    {
      icon: CreditCardIcon,
      title: "ATÉ 6X SEM JUROS",
      desc: "Nos principais cartões de crédito",
    },
    {
      icon: RefreshIcon,
      title: "TROCA FACILITADA",
      desc: "Primeira troca grátis em até 30 dias",
    },
    {
      icon: ShieldIcon,
      title: "COMPRA SEGURA",
      desc: "Ambiente blindado e criptografado",
    },
  ];

  return (
    <section
      className="border-b border-[#e2ddd5] bg-white py-6"
      aria-label="Benefícios da loja"
    >
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((b) => {
            const Icon = b.icon;

            return (
              <div
                key={b.title}
                className="flex items-center gap-3.5 border border-[#e2ddd5] bg-[#f8f9fa] p-4 transition-colors hover:border-[#8b4513]"
              >
                <Icon className="size-6 shrink-0 text-[#8b4513]" />

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#231c19]">
                    {b.title}
                  </h4>

                  <p className="text-[11px] text-[#7c726b] mt-0.5">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}

const categoryImages = [
  "/images/temp/prod-2.jpeg",
  "/images/temp/prod-3.jpeg",
  "/images/temp/prod-4.jpeg",
  "/images/temp/prod-7.jpeg",
];

export function CategorySection() {
  return (
    <section
      id="categories"
      className="py-16 sm:py-20 bg-[#f8f9fa]"
      aria-labelledby="categories-title"
    >
      <Container>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e2ddd5] pb-4">
          <div>
            <Typography
              as="p"
              variant="label"
              className="text-[#8b5e3c] font-black uppercase tracking-widest text-[11px]"
            >
              Coleções Exclusivas
            </Typography>

            <Typography
              id="categories-title"
              variant="h2"
              className="mt-1 text-2xl sm:text-3xl font-black uppercase text-[#231c19]"
            >
              Navegue por Categorias
            </Typography>
          </div>

          <Link
            href="/products"
            className="text-xs font-bold uppercase tracking-wider text-[#2d221e] hover:text-[#8b4513]"
          >
            Ver todo o catálogo →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {mockCategories.map((category, index) => (
            <Link
              key={category.name}
              href="/products"
              className="group block"
            >
              <Card className="h-full rounded-none overflow-hidden border border-[#e2ddd5] bg-white transition-all duration-200 hover:border-[#2d221e] hover:shadow-card">

                <div className="relative flex aspect-video w-full items-center justify-center bg-[#f3f1ed] overflow-hidden">

                  <img
                    src={categoryImages[index % categoryImages.length]}
                    alt={category.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#231c19]/25 group-hover:bg-[#231c19]/10 transition-colors" />

                  <span className="absolute bottom-2 left-2 bg-[#2d221e] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#f8f9fa]">
                    Lojas Stuart
                  </span>

                </div>

                <CardContent className="p-4">

                  <Typography
                    variant="h3"
                    className="text-sm font-black uppercase tracking-tight text-[#231c19] group-hover:text-[#8b4513] transition-colors"
                  >
                    {category.name}
                  </Typography>

                  <Typography
                    variant="small"
                    className="mt-1 text-xs text-[#7c726b] line-clamp-2"
                  >
                    {category.description}
                  </Typography>

                </CardContent>
              </Card>
            </Link>
          ))}

        </div>

      </Container>
    </section>
  );
}

export function FeaturedProductsSection() {
  return (
    <section
      id="featured-products"
      className="border-y border-[#e2ddd5] bg-white py-16 sm:py-20"
      aria-labelledby="featured-products-title"
    >
      <Container>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end border-b border-[#e2ddd5] pb-4">

          <div>
            <Typography
              as="p"
              variant="label"
              className="text-[#8b5e3c] font-black uppercase tracking-widest text-[11px]"
            >
              Destaques
            </Typography>

            <Typography
              id="featured-products-title"
              variant="h2"
              className="mt-1 text-2xl sm:text-3xl font-black uppercase text-[#231c19]"
            >
              Mais Vendidos & Favoritos
            </Typography>
          </div>

          <Link
            href="/products"
            className="text-xs font-bold uppercase tracking-wider text-[#2d221e] hover:text-[#8b4513]"
          >
            Ver todas as opções →
          </Link>

        </div>

        <div className="mt-8">
          <ProductGrid products={mockProducts} />
        </div>

      </Container>
    </section>
  );
}

export function PromoBannersSection() {
  return (
    <section
      className="py-12 bg-[#f8f9fa]"
      aria-label="Banners promocionais"
    >
      <Container className="grid gap-6 md:grid-cols-2">

        <div className="relative overflow-hidden border border-[#2d221e] bg-[#2d221e] p-8 text-white">

          <span className="bg-[#8b4513] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-white">
            Alfaiataria Premium
          </span>

          <h3 className="mt-4 text-2xl font-black uppercase text-[#f8f9fa]">
            Linha Marrom Café Slim Fit
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#d6cec5] max-w-md leading-relaxed">
            Blazers, calças e camisas com tonalidades terrosas sofisticadas para
            o ambiente profissional e eventos.
          </p>

          <Link
           href="/products"
           className="mt-6 inline-flex h-10 items-center justify-center border border-white bg-transparent px-5 text-xs font-black uppercase tracking-widest !text-white transition-colors hover:bg-white hover:!text-[#2d221e]"
           >
           Conferir Coleção
           </Link>

        </div>

        <div className="relative overflow-hidden border border-[#e2ddd5] bg-[#eeeae4] p-8 text-[#231c19]">

          <span className="bg-[#2d221e] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-white">
            Coleção Essencial
          </span>

          <h3 className="mt-4 text-2xl font-black uppercase">
            Kits & Básicas em Tons Areia
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#7c726b] max-w-md leading-relaxed">
            Tecido tech modal e linho com toque suave, frescor natural e caimento
            impecável.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex h-10 items-center justify-center bg-[#8b4513] px-5 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-[#a0522d]"
          >
            Aproveitar Ofertas
          </Link>

        </div>

      </Container>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section
      className="border-t border-[#e2ddd5] bg-white py-14"
      aria-labelledby="newsletter-title"
    >
      <Container>

        <div className="mx-auto max-w-2xl border border-[#e2ddd5] bg-[#f8f9fa] p-8 sm:p-12 text-center shadow-soft">

          <span className="inline-block bg-[#8b4513] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
            Cupom Exclusivo
          </span>

          <h3
            id="newsletter-title"
            className="mt-4 text-2xl font-black uppercase text-[#231c19] sm:text-3xl"
          >
            Ganhe 7% OFF na sua Primeira Compra
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#7c726b] max-w-md mx-auto">
            Cadastre seu e-mail para receber novidades em primeira mão, cupons
            sazonais e coleções exclusivas.
          </p>

          <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">

            <input
              type="email"
              placeholder="Digite seu melhor e-mail..."
              aria-label="Seu e-mail para newsletter"
              className="flex-1 border border-[#e2ddd5] bg-white px-4 py-2.5 text-xs text-[#231c19] placeholder:text-[#9e9389] focus:border-[#2d221e] focus:outline-none"
              required
            />

            <button
              type="submit"
              className="bg-[#8b4513] px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-[#a0522d] whitespace-nowrap"
            >
              Resgatar Desconto
            </button>

          </form>

          <p className="mt-4 text-[10px] text-[#9e9389] uppercase tracking-wider">
            Não enviamos spam. Cancele a qualquer momento.
          </p>

        </div>

      </Container>
    </section>
  );
}

export function HomeCta() {
  return (
    <section
      className="py-14 sm:py-16 bg-[#f8f9fa]"
      aria-labelledby="cta-title"
    >
      <Container>

        <div className="border border-[#2d221e] bg-[#231c19] px-6 py-12 text-center text-white sm:px-12 sm:py-16">

          <Badge
            variant="discount"
            className="bg-[#8b4513] text-white text-[10px]"
          >
            Lojas Stuart • SGLS Commerce
          </Badge>

          <Typography
            id="cta-title"
            variant="h2"
            className="mx-auto mt-4 max-w-2xl text-2xl sm:text-3xl font-black uppercase text-[#f8f9fa]"
          >
            Experiência de Compra Sofisticada
          </Typography>

          <Typography className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-[#b3a89f]">
            Paleta em tons terrosos, marrom café e branco gelo integrada à
            infraestrutura de alta performance.
          </Typography>

          <Link
          href="/products"
          className="mt-8 inline-flex h-11 items-center justify-center bg-[#f8f9fa] px-8 text-xs font-black uppercase tracking-widest !text-black transition-colors hover:bg-[#e8e2d8]"
          >
          Explorar Catálogo Completo
          </Link>

        </div>

      </Container>
    </section>
  );
}

function TruckIcon({ className }: { className?: string }) {
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

function CreditCardIcon({ className }: { className?: string }) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function RefreshIcon({ className }: { className?: string }) {
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
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}