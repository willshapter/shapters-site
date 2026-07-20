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
    { name: "Sala De Jantar", image: "https://images.unsplash.com/photo-1617806118233-18e1c0c27942?w=300&q=80", href: "/category/sala-de-jantar" },
    { name: "Presentes Para Ele", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80", href: "/category/presentes-para-ele" },
    { name: "Presentes Para Ela", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&q=80", href: "/category/presentes-para-ela" },
    { name: "Roupas Femininas", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80", href: "/category/roupas-femininas" },
    { name: "Decoração", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&q=80", href: "/category/decoracao" },
    { name: "Eletrônicos", image: "http://googleusercontent.com/image_generation_content/419", href: "/category/eletronicos" },
    { name: "Acessórios", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80", href: "/category/acessorios" },
    { name: "Calçados", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80", href: "/category/calcados" },
  ];

  // Funções para permitir clicar e arrastar com o mouse
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
    const walk = (x - startX) * 2; // Velocidade do arrasto
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Função para o botão da setinha avançar
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 relative">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-black">
        Compre produtos e presentes criativos no Shapters Marketplace!
      </h2>

      <div className="relative flex items-center">
        {/* Container das bolinhas com suporte a clique e arraste */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-4 px-2 scroll-smooth cursor-grab active:cursor-grabbing w-full"
        >
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={cat.href}
              draggable={false}
              className="flex flex-col items-center flex-shrink-0 group/item text-center w-24 md:w-28 select-none"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover/item:border-rose-500 transition-all shadow-sm bg-gray-100 pointer-events-none md:pointer-events-auto">
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

        {/* Botão de setinha lateral indicando que há mais conteúdo */}
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
