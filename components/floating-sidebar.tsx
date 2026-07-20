import Image from "next/image"
import { collections } from "@/lib/collections"

export function FloatingSidebar() {
  return (
    <aside
      aria-label="Categorias"
      className="fixed left-0 top-1/2 z-40 -translate-y-1/2 hidden sm:block"
    >
      <nav className="flex max-h-[85vh] w-28 flex-col gap-3 overflow-y-auto rounded-r-xl bg-white/95 px-3 py-4 shadow-lg ring-1 ring-gray-200 backdrop-blur">
        {collections.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group flex flex-col items-center text-center"
            title={item.title}
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#eb2f4e] group-hover:shadow-md">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <span className="mt-1 text-[10px] leading-tight text-gray-700 text-pretty transition-colors group-hover:text-[#eb2f4e]">
              {item.title}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
