"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { ChevronRight } from "lucide-react"

export function CollectionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const categories = [
    { name: "Presentes Para Ele", image: "https://cdn.shopify.com/s/files/1/0781/7573/1852/files/sala_de_jantar.png?v=1784524718"/category/presentes-para-ele" },
    { name: "Presentes Para Ela", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&q=80", href: "/category/presentes-para-ela" },
    { name: "Roupas Femininas", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80", href: "/category/roupas-femininas" },
    { name: "Decoração", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&q=80", href: "/category/decoracao" },
    { name: "Eletrônicos", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", href: "/category/eletronicos" },
    { name: "Acessórios", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80", href: "/category/acessorios" },
    { name: "Calçados", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80", href: "/category/calcados" },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 relative overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-black">
        Compre produtos e presentes criativos no Shapters Marketplace!
      </h2>

      <div className="relative flex items-center w-full">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 px-1 scroll-smooth cursor-grab active:cursor-grabbing w-full max-w-full"
        >
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={cat.href}
              draggable={false}
              className="flex flex-col items-center flex-shrink-0 group/item text-center w-20 md:w-28 select-none"
            >
              <div className="w-18 h-18 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover/item:border-rose-500 transition-all shadow-sm bg-gray-100 flex-shrink-0">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300 pointer-events-none" 
                />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-gray-800 group-hover/item:text-rose-500 transition-colors line-clamp-2 w-full">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-black p-3 rounded-full shadow-lg border border-gray-200 hidden md:flex items-center justify-center -mr-3 transition-all hover:scale-110"
          title="Ver mais categorias"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
