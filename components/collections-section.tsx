"use client"

import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CollectionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "Sala De Jantar", image: "https://images.unsplash.com/photo-1617806118233-18e1c0c27942?w=300&q=80", href: "/category/sala-de-jantar" },
    { name: "Presentes Para Ele", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80", href: "/category/presentes-para-ele" },
    { name: "Presentes Para Ela", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&q=80", href: "/category/presentes-para-ela" },
    { name: "Roupas Femininas", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80", href: "/category/roupas-femininas" },
    { name: "Decoração", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&q=80", href: "/category/decoracao" },
    { name: "Eletrônicos", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80", href: "/category/eletronicos" },
    { name: "Acessórios", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80", href: "/category/acessorios" },
    { name: "Calçados", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80", href: "/category/calcados" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 relative">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-black">
        Compre produtos e presentes criativos no Shapters Marketplace!
      </h2>

      <div className="relative group">
        {/* Botão de rolar para a esquerda */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-md border border-gray-200 hidden md:flex items-center justify-center -ml-4 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Container das bolinhas com rolagem lateral suave */}
        <div 
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-4 px-2 scroll-smooth"
        >
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={cat.href}
              className="flex flex-col items-center flex-shrink-0 group/item text-center w-24 md:w-28"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover/item:border-rose-500 transition-all shadow-sm bg-gray-100">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300" 
                />
              </div>
              <span className="mt-2 text-xs md:text-sm font-medium text-gray-800 group-hover/item:text-rose-500 transition-colors line-clamp-2">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Botão de rolar para a direita (indica que há mais conteúdo) */}
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-md border border-gray-200 hidden md:flex items-center justify-center -mr-4 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
