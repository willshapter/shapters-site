import { SiteHeader } from "@/components/site-header"
import { CollectionsSection } from "@/components/collections-section"
import { ShippingBanner } from "@/components/shipping-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. Cabeçalho / Menu */}
      <SiteHeader />

      {/* 2. Banner no Topo (Subiu para ficar em cima) */}
      <div className="mx-auto max-w-7xl w-full px-4 my-4">
        <ShippingBanner />
      </div>

      {/* 3. Seção de Coleções / Bolinhas (Agora fica embaixo do banner) */}
      <CollectionsSection />

      {/* 4. Grid de Produtos Populares */}
      <div className="flex-1">
        <ProductGrid />
      </div>

      {/* 5. Rodapé Profissional */}
      <Footer />
    </main>
  )
}
