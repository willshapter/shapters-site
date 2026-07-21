import { SiteHeader } from "@/components/site-header"
import { CollectionsSection } from "@/components/collections-section"
import { ShippingBanner } from "@/components/shipping-banner" // Componente das faixas azuis
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. Cabeçalho / Menu */}
      <SiteHeader />

      {/* 2. Seção de Coleções / Bolinhas (Temas) */}
      <CollectionsSection />

      {/* 3. As Faixas Azuis (Compromissos e Ofertas Relâmpago com Cronômetro) */}
      <div className="mx-auto max-w-7xl w-full px-4 my-4">
        <ShippingBanner />
      </div>

      {/* 4. Grid de Produtos Populares */}
      <div className="flex-1">
        <ProductGrid />
      </div>

      {/* 5. Rodapé Profissional */}
      <Footer />
    </main>
  )
}
