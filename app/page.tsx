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
      <CollectionsSection />
      <FloatingSidebar />
      <SiteFooter />
    </main>
  )
}
