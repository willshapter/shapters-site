import { SiteHeader } from "@/components/site-header"
import { FloatingSidebar } from "@/components/floating-sidebar"
import { CollectionsSection } from "@/components/collections-section"
import { ShippingBanner } from "@/components/shipping-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* 1. Cabeçalho / Menu */}
      <SiteHeader />

      {/* Menu Lateral */}
      <FloatingSidebar />

      {/* 2. Banner de ponta a ponta (Full-width) */}
      <div className="w-full">
        <ShippingBanner />
      </div>

      {/* 3. Meio do site fixo e centralizado (Coleções e Produtos) */}
      <div className="max-w-7xl mx-auto w-full px-4 flex-1 flex flex-col my-4">
        <CollectionsSection />
        <div className="flex-1 mt-4">
          <ProductGrid />
        </div>
      </div>

      {/* 4. Rodapé de ponta a ponta (Full-width) */}
      <div className="w-full">
        <Footer />
      </div>
    </main>
  )
}
