"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { collections } from "@/lib/collections"

export function FloatingSidebar() {
  // Only allow the sidebar to be reachable after the top circles scroll away.
  const [scrolledPast, setScrolledPast] = useState(false)
  // Controls the slide-in reveal, triggered by hovering the left edge / the sidebar itself.
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const grid = document.getElementById("collections-grid")
    if (!grid) return

    // Enable the sidebar only once the category circles have left the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolledPast(!entry.isIntersecting)
      },
      { rootMargin: "0px", threshold: 0 },
    )

    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  // The sidebar is only shown when we've scrolled past the circles AND the user
  // is hovering near the left edge (or over the sidebar itself).
  const revealed = scrolledPast && open

  return (
    <>
      {/* Invisible 20px hot zone on the left edge that triggers the slide-in. */}
      <div
        aria-hidden="true"
        onMouseEnter={() => setOpen(true)}
        className={[
          "fixed left-0 top-0 z-30 hidden h-full w-5 sm:block",
          scrolledPast ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      />

      <aside
        aria-label="Categorias"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={[
          "fixed left-0 top-1/2 z-40 -translate-y-1/2",
          "hidden sm:block", // hide on very small screens to protect product content
          "transition-all duration-300 ease-out",
          revealed
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none -translate-x-full opacity-0",
        ].join(" ")}
      >
        <nav
          className={[
            "flex max-h-[85vh] w-28 flex-col gap-3 overflow-y-auto rounded-r-xl bg-white/95 px-3 py-4 shadow-lg ring-1 ring-gray-200 backdrop-blur",
          ].join(" ")}
        >
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
    </>
  )
}
