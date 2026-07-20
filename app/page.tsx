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
      
      {/* TESTE VISUAL: Colocado aqui no meio do texto, sem fixed, para forçar aparecer */}
      <div className="bg-red-100 p-6 border-4 border-red-500 my-8">
        <p className="font-bold text-red-700 mb-4">ÁREA DE TESTE DO MENU:</p>
        <FloatingSidebar />
      </div>

      <SiteFooter />
    </main>
  )
}
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
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <h2 className="mb-6 text-xl font-bold text-gray-900">
          Compre os mais vendidos em roupas e calçados.
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              <div className="aspect-square w-full rounded-md bg-gray-100" />
              <p className="mt-3 text-sm font-medium text-gray-800">Produto em destaque {i + 1}</p>
              <p className="mt-1 text-lg font-bold text-green-600">$ 44,97</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
