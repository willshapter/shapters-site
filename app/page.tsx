import { SiteHeader } from "@/components/site-header"
import { CollectionsSection } from "@/components/collections-section"
import { ShippingBanner } from "@/components/shipping-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/site-footer"
import { FloatingSidebar } from "@/components/floating-sidebar" // ou o nome exato do arquivo do seu menu

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* 1. Cabeçalho / Menu */}
      <SiteHeader />

      {/* Menu Lateral / Flutuante */}
      <FloatingSidebar />

      {/* 2. Banner no Topo */}
      <div className="mx-auto max-w-7xl w-full px-4 my-4">
        <ShippingBanner />
      </div>

      {/* 3. Seção de Coleções / Bolinhas */}
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
