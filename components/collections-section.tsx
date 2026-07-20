"use client"

import Link from "next/link"

export function CollectionsSection() {
  // Aqui estão as categorias atuais. Depois você me diz quais quer alterar!
  const categories = [
    { name: "Sala De Jantar", image: "https://images.unsplash.com/photo-1617806118233-18e1c0c27942?auto=format&fit=crop&w=300&q=80", href: "/category/sala-de-jantar" },
    { name: "Presentes Para Ele", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80", href: "/category/presentes-para-ele" },
    { name: "Presentes Para Ela", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80", href: "/category/presentes-para-ela" },
    { name: "Roupas Femininas", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=300&q=80", href: "/category/roupas-femininas" },
    // Adicione mais se precisar
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-black">
        Compre produtos e presentes criativos no Shapters Marketplace!
      </h2>

      {/* Container com scroll horizontal no mobile/tablet e centralizado no desktop */}
      <div className="flex md:justify-center items-center gap-6 overflow-x-auto no-scrollbar pb-4 px-2">
        {categories.map((cat, index) => (
          <Link 
            key={index} 
            href={cat.href}
            className="flex flex-col items-center flex-shrink-0 group text-center w-28"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-rose-500 transition-all shadow-sm">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <span className="mt-2 text-xs md:text-sm font-medium text-gray-800 group-hover:text-rose-500 transition-colors line-clamp-2">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
