"use client"

import { useEffect, useState } from "react"
import { collections } from "@/lib/collections"
import { ChevronRight, ChevronLeft } from "lucide-react"

export function FloatingSidebar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() 
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed left-0 top-24 z-50 flex items-center transition-all duration-300 max-w-[100vw] overflow-x-hidden">
      <aside
        aria-label="Categorias"
        className={`flex max-h-[70vh] w-28 max-w-[85vw] flex-col gap-3 overflow-y-auto rounded-r-xl bg-white px-3 py-4 shadow-xl border border-gray-100 transition-all duration-300 ${
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
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#eb2f4e] group-hover:shadow-md">
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

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-7 items-center justify-center rounded-r-lg bg-[#eb2f4e] text-white shadow-md transition-all hover:bg-[#d02441] focus:outline-none shrink-0"
        title={isOpen ? "Recolher menu" : "Expandir menu de categorias"}
      >
        {isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>
    </div>
  )
}
