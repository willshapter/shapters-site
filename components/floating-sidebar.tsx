"import client";

import { useEffect, useState } from "react"
import { collections } from "@/lib/collections"
import { ChevronRight, ChevronLeft } from "lucide-react"

export function FloatingSidebar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Ajuste este valor se quiser que apareça mais cedo ou mais tarde na rolagem
      const collectionsSection = document.getElementById("collections-section")
      const scrollPosition = window.scrollY

      if (collectionsSection) {
        const sectionTop = collectionsSection.offsetTop + collectionsSection.offsetHeight
        setIsVisible(scrollPosition > sectionTop - 150)
      } else {
        setIsVisible(scrollPosition > 400)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed left-0 top-1/2 z-40 -translate-y-1/2 flex items-center transition-all duration-300">
      {/* O Menu Lateral */}
      <aside
        aria-label="Categorias"
        className={`flex max-h-[85vh] w-28 flex-col gap-3 overflow-y-auto rounded-r-xl bg-white/95 px-3 py-4 shadow-2xl ring-1 ring-gray-200 backdrop-blur transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none absolute"
        }`}
      >
        {collections.map((item, index) => (
          <a
            key={item?.title || index}
            href={item?.href || "#"}
            className="group flex flex-col items-center text-center"
            title={item?.title || "Categoria"}
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#eb2f4e] group-hover:shadow-md">
              <img
                src={item?.image || "/placeholder.svg"}
                alt={item?.title || "Categoria"}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="mt-1 text-[10px] leading-tight text-gray-700 text-pretty transition-colors group-hover:text-[#eb2f4e]">
              {item?.title}
            </span>
          </a>
        ))}
      </aside>

      {/* Botão com a Setinha para Abrir/Fechar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-7 items-center justify-center rounded-r-lg bg-[#eb2f4e] text-white shadow-md transition-all hover:bg-[#d02441] focus:outline-none"
        title={isOpen ? "Recolher menu" : "Expandir menu de categorias"}
      >
        {isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>
    </div>
  )
}
