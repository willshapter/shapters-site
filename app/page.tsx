import { SiteHeader } from "@/components/site-header"
import { CollectionsSection } from "@/components/collections-section" // Bolinhas de categorias
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. Cabeçalho / Menu */}
      <SiteHeader />

      {/* 2. BANNER PRINCIPAL NO TOPO */}
      <div className="mx-auto max-w-7xl w-full px-4 my-4">
        <div className="relative w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg bg-[#0b3834] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
          <div className="absolute inset-hidden z-20 text-center md:text-left md:left-12 px-6 max-w-xl text-white space-y-3">
            <span className="bg-[#eb2f4e] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Nova Coleção</span>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">Descubra Inovação e Estilo na Shapters</h1>
            <p className="text-xs md:text-sm text-gray-200">As melhores tendências selecionadas com exclusividade para você.</p>
            <button className="bg-[#eb2f4e] hover:bg-opacity-90 text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-lg shadow-md transition-all">
              Ver Ofertas
            </button>
          </div>
        </div>
      </div>

      {/* 3. Grid de Produtos / Novidades */}
      <div className="flex-1">
        <ProductGrid />
      </div>

      {/* 4. FAIXA COM DEGRADÊ (Verde e Vermelho) - Abaixo das linhas de produtos e antes das categorias */}
      <div className="mx-auto max-w-7xl w-full px-4 my-6">
        <div className="w-full bg-gradient-to-r from-[#0b3834] via-[#124e48] to-[#eb2f4e] rounded-xl py-4 px-6 text-white text-center shadow-md">
          <h2 className="text-lg md:text-xl font-bold">Aproveite as Ofertas Exclusivas da Semana!</h2>
          <p className="text-xs md:text-sm text-gray-100 mt-1">Frete grátis para todo o Brasil em compras selecionadas.</p>
        </div>
      </div>

      {/* 5. Seção de Categorias em Bolinha */}
      <CollectionsSection />

      {/* 6. FAIXAS LÁ EMBAIXO (Compromissos e Ofertas Relâmpago Shapters) */}
      <div className="mx-auto max-w-7xl w-full px-4 my-6 space-y-3">
        
        {/* Faixa de Compromissos Shapters */}
        <div className="w-full bg-[#0b3834] rounded-lg py-3 px-4 text-white flex flex-col md:flex-row items-center justify-between text-xs md:text-sm shadow-md border-l-4 border-[#eb2f4e]">
          <div className="flex items-center space-x-2 font-semibold">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <span>Compromissos Shapters</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0 text-gray-200">
            <span className="flex items-center gap-1">🔒 Privacidade segura</span>
            <span>|</span>
            <span className="flex items-center gap-1">💳 Pagamentos seguros</span>
            <span>|</span>
            <span className="flex items-center gap-1 font-semibold text-white">Ofertas em todo o site &gt;</span>
          </div>
        </div>

        {/* Faixa de Ofertas Relâmpago Shapters */}
        <div className="w-full bg-[#0b3834] rounded-lg py-4 px-6 text-white flex flex-col md:flex-row items-center justify-between shadow-md border-l-4 border-[#eb2f4e]">
          <div className="flex items-center space-x-2">
            <span className="italic font-bold text-lg md:text-xl tracking-wide text-white">Ofertas relâmpago</span>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0 text-xs md:text-sm">
            <span className="text-gray-200">Termina em</span>
            <div className="bg-[#eb2f4e] px-2 py-1 rounded font-mono font-bold text-white">10</div>
            <span>:</span>
            <div className="bg-[#eb2f4e] px-2 py-1 rounded font-mono font-bold text-white">18</div>
            <span>:</span>
            <div className="bg-[#eb2f4e] px-2 py-1 rounded font-mono font-bold text-white">53</div>
            <span>:</span>
            <div className="bg-[#eb2f4e] px-2 py-1 rounded font-mono font-bold text-white">56</div>
            <span className="ml-2 font-bold text-white">&gt;</span>
          </div>
        </div>

      </div>

      {/* 7. Rodapé */}
      <Footer />
    </main>
  )
}
