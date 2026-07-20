import { SiteHeader } from "@/components/site-header"
import { ShippingBanner } from "@/components/shipping-banner"
import { CollectionsSection } from "@/components/collections-section"
import { ProductGrid } from "@/components/product-grid"
import { FloatingSidebar } from "@/components/floating-sidebar"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <ShippingBanner />
      
      <div className="pt-20">
        <CollectionsSection />
        <ProductGrid />
      </div>

      <FloatingSidebar />
      <SiteFooter />
    </main>
  )
}
