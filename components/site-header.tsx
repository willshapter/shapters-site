"use client"

import { Truck, Users, MessageCircle, ChevronDown, Search, User, ShoppingCart, Menu, Package, Box } from "lucide-react"

export function SiteHeader() {
  return (
    <>
      <header>
        {/* Top thin black bar */}
        <div className="bg-neutral-900 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-1.5 text-xs sm:justify-between">
            <div className="flex items-center gap-2">
              <Truck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Frete grátis</span>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <Users className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Servido 2,000,000 Clientes</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Chat ao vivo</span>
            </div>
          </div>
        </div>

        {/* Main teal header */}
        <div className="bg-[#0e4d4d] text-white">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:gap-6">
            
            {/* Menu de Categorias + Logo lado a lado */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
                aria-label="Categorias"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span className="hidden sm:inline">Categorias</span>
              </button>

              <a href="#" className="flex items-center gap-1 whitespace-nowrap">
                <span className="text-lg font-bold tracking-tight sm:text-xl">Shapters</span>
              </a>
            </div>

            {/* Deliver to selector */}
            <button
              type="button"
              className="hidden shrink-0 items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-white/10 lg:flex"
            >
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] text-white/70">Entregar em</span>
                <span className="flex items-center gap-1 font-semibold">
                  Brasil
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </button>

            {/* Search bar */}
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center overflow-hidden rounded-md bg-white">
                <label htmlFor="site-search" className="sr-only">
                  Pesquisar produtos
                </label>
                <input
                  id="site-search"
                  type="search"
                  placeholder="Search Legg"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="Pesquisar"
                  className="flex h-full items-center justify-center px-4 text-[#eb2f4e] transition-colors hover:text-[#cf2444]"
                >
                  <Search className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right actions */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              {/* Botão de Rastrear Pedido com Ícone */}
              <a
                href="#rastrear"
                className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:inline-flex"
              >
                <Package className="h-4 w-4" aria-hidden="true" />
                <span>Rastrear</span>
              </a>

              <button
                type="button"
                aria-label="Perfil"
                className="rounded-md p-1.5 transition-colors hover:bg-white/10"
              >
                <User className="h-6 w-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                aria-label="Carrinho"
                className="rounded-md p-1.5 transition-colors hover:bg-white/10"
              >
                <ShoppingCart className="h-6 w-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                aria-label="Menu"
                className="rounded-md p-1.5 transition-colors hover:bg-white/10 md:hidden"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Botão Flutuante do WhatsApp (Sutil no canto inferior direito) */}
      <a
        href="https://wa.me/SEUNUMERO"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full shadow-lg transition-transform hover:scale-110 hover:bg-emerald-600 focus:outline-none"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>
    </>
  )
}
