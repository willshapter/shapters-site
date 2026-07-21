import { SiteHeader } from "@/components/site-header"
import { ShippingBanner } from "@/components/shipping-banner"
import { CollectionsSection } from "@/components/collections-section"
import { Footer } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. Cabeçalho */}
      <SiteHeader />

      {/* 2. Banner no Topo */}
      <div className="mx-auto max-w-7xl w-full px-4 my-4">
        <ShippingBanner />
      </div>

      {/* 3. Bolinhas de Categorias logo abaixo do banner */}
      <CollectionsSection />

      {/* 4. Bloco com a faixa colorida e as faixas finais logo abaixo das bolinhas */}
      <div className="mx-auto max-w-7xl w-full px-4 my-6 space-y-4">
        
        {/* Faixa de Ofertas Exclusivas da Semana */}
        <div className="w-full bg-gradient-to-r from-[#0b3834] via-[#124e48] to-[#eb2f4e] rounded-xl py-4 px-6 text-white text-center shadow-md">
          <h2 className="text-lg md:text-xl font-bold">Aproveite as Ofertas Exclusivas da Semana!</h2>
          <p className="text-xs md:text-sm text-gray-100 mt-1">Frete grátis para todo o Brasil em compras selecionadas.</p>
        </div>

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

      {/* 5. Rodapé */}
      <Footer />
    </main>
  )
}
