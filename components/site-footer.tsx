"use client"

import { MessageCircle, Phone, Mail, MapPin, Smartphone } from "lucide-react"

const shopLearn = ["Avaliações", "Sobre nós", "Blog", "Perguntas frequentes", "Todas as categorias"]

const customerSupport = [
  "Central de Ajuda",
  "Acompanhe seu pedido",
  "Devoluções e trocas",
  "Precisa de ajuda?",
  "Contate-nos",
  "Acessibilidade",
  "Políticas",
]

const partner = ["Venda com a gente", "Login do vendedor", "Afiliados", "Torne-se um Embaixador"]

const bottomLinks = [
  "Suas opções de privacidade",
  "Política de Acessibilidade",
  "DMCA",
  "Termos de Serviço",
  "Política de Privacidade",
]

const payments = ["Visa", "Mastercard", "Amex", "Discover", "Apple Pay", "PayPal", "Google Pay"]

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-white/80 transition-colors hover:text-white hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[#0e4d4d] text-white">
      {/* Quick contact bar */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm md:flex-row md:flex-wrap md:items-center md:gap-x-8 md:gap-y-3">
          <span className="font-bold">Entre em contato</span>
          <span className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            Chat ao vivo 24 horas por dia
          </span>
          <a href="tel:1-877-780-2973" className="flex items-center gap-2 transition-colors hover:underline">
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            1-877-780-2973
          </a>
          <a
            href="mailto:contact@shapters.com"
            className="flex items-center gap-2 transition-colors hover:underline"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            contact@shapters.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            2261 Market Street #4667, San Francisco, CA 94114
          </span>
        </div>
      </div>

      {/* Four content columns */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Compre e aprenda" links={shopLearn} />
          <FooterColumn title="Suporte ao Cliente" links={customerSupport} />
          <FooterColumn title="Seja nosso parceiro" links={partner} />

          {/* Newsletter + App column */}
          <div>
            <h3 className="mb-4 text-sm font-bold leading-snug text-white text-pretty">
              Cadastre-se para receber ofertas e promoções exclusivas.
            </h3>
            <form
              className="flex items-center overflow-hidden rounded-full bg-white p-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Seu e-mail"
                className="w-full bg-transparent px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#eb2f4e] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#cf2444]"
              >
                Inscreva-se
              </button>
            </form>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-[#0e4d4d]"
            >
              <Smartphone className="h-5 w-5" aria-hidden="true" />
              Baixe o aplicativo Shapters
            </button>

            <p className="mt-4 text-xs leading-relaxed text-white/70 text-pretty">
              A Shapters é um marketplace que conecta você a produtos e presentes criativos de
              vendedores do mundo todo. Compre com segurança e descubra novidades todos os dias.
            </p>
          </div>
        </div>
      </div>

      {/* Social + payments row */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Follow us */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold">Siga-nos</span>
            <div className="flex items-center gap-2">
              {[
                { label: "Facebook", Icon: FacebookIcon },
                { label: "X", Icon: XIcon },
                { label: "Instagram", Icon: InstagramIcon },
                { label: "YouTube", Icon: YoutubeIcon },
                { label: "Pinterest", Icon: PinterestIcon },
                { label: "TikTok", Icon: TikTokIcon },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-[#eb2f4e] hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Accepted payments */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold">Aceitamos</span>
            <div className="flex flex-wrap items-center gap-2">
              {payments.map((p) => (
                <span
                  key={p}
                  className="flex h-7 items-center rounded bg-white px-2 text-[10px] font-bold text-neutral-800"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Credits bar */}
      <div className="bg-[#0a3a3a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-white/80 md:flex-row md:items-center md:justify-between">
          <p>Direitos autorais @ 2026 - Shapters</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            {bottomLinks.map((link) => (
              <a key={link} href="#" className="transition-colors hover:text-white hover:underline">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

/* Brand icons drawn as inline SVG to avoid version-specific lucide exports */
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  )
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  )
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.03-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.225 7.464-1.215 0-2.357-.631-2.748-1.378l-.747 2.848c-.271 1.041-1.002 2.347-1.492 3.143C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z" />
    </svg>
  )
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
    </svg>
  )
}
