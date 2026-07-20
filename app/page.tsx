import { SiteHeader } from "@/components/site-header"
import { ShippingBanner } from "@/components/shipping-banner"
import { CollectionsSection } from "@/components/collections-section"
import { FloatingSidebar } from "@/components/floating-sidebar"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <ShippingBanner />
      
      {/* Adicionamos pt-20 para dar espaço para o banner e o header flutuante */}
      <div className="pt-20">
        <CollectionsSection />
        {/* O resto da sua home page viria aqui */}
      </div>

      <FloatingSidebar />
      <SiteFooter />
    </main>
  )
}
