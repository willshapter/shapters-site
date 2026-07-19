import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { collections } from "@/lib/collections"

export function CollectionsSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-balance text-2xl font-bold text-gray-900 md:text-3xl">
          Compre produtos e presentes criativos no Shapters Marketplace!
        </h2>

        <ul
          id="collections-grid"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8"
        >
          {collections.map((item) => (
            <li key={item.title} className="group flex flex-col items-center text-center">
              <a href={item.href} className="flex flex-col items-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gray-200 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:border-[#eb2f4e] group-hover:shadow-lg md:h-28 md:w-28">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium leading-snug text-gray-800 text-pretty">
                  {item.title}
                </h3>
              </a>
              <a
                href={item.href}
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#eb2f4e] transition-all group-hover:font-bold group-hover:text-[#cf2444] group-hover:underline"
              >
                Compre agora
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
