interface Product {
  id: number
  title: string
  price: string
  image: string
}

interface CategorySection {
  title: string
  products: Product[]
}

export function ProductGrid() {
  // Dados de Exemplo para as 2 a 3 linhas iniciais de Apresentação/Novidades
  const presentationProducts: Product[] = [
    { id: 1, title: "Garrafa de água com infusão", price: "R$ 89,90", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80" },
    { id: 2, title: "Bolas de enfeite de bebida", price: "R$ 129,90", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80" },
    { id: 3, title: "Escova de limpeza de vidro", price: "R$ 59,90", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=80" },
    { id: 4, title: "Kit de revestimento epóxi", price: "R$ 199,90", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&auto=format&fit=crop&q=80" },
    { id: 5, title: "Elevador de colchão portátil", price: "R$ 149,90", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&auto=format&fit=crop&q=80" },
    { id: 6, title: "Fechadura para porta de celeiro", price: "R$ 89,90", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&auto=format&fit=crop&q=80" },
    { id: 7, title: "Pisos modulares para garagem", price: "R$ 79,90", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&auto=format&fit=crop&q=80" },
    { id: 8, title: "Polidor de móveis cera de abelha", price: "R$ 119,90", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&auto=format&fit=crop&q=80" },
    { id: 9, title: "Almofada de massagem vibratória", price: "R$ 112,47", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&auto=format&fit=crop&q=80" },
    { id: 10, title: "Conjunto de prótese dentária", price: "R$ 85,50", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&auto=format&fit=crop&q=80" },
    { id: 11, title: "Anel de resistência Pilates", price: "R$ 24,97", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=300&auto=format&fit=crop&q=80" },
    { id: 12, title: "Creme para Olhos Instantâneo", price: "R$ 39,97", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&auto=format&fit=crop&q=80" },
    { id: 13, title: "Joelheira de cobre para artrite", price: "R$ 34,97", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&auto=format&fit=crop&q=80" },
    { id: 14, title: "Aparelho antirronco", price: "R$ 32,97", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=300&auto=format&fit=crop&q=80" },
    { id: 15, title: "Mini barbeador elétrico", price: "R$ 41,97", image: "https://images.unsplash.com/photo-1516062423079-7a13cdc7bcb8?w=300&auto=format&fit=crop&q=80" },
    { id: 16, title: "Dilatador nasal de silicone", price: "R$ 27,97", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&auto=format&fit=crop&q=80" },
  ]

  // Bloco 1: 4 Categorias (cada uma com 8 produtos)
  const blockOneSections: CategorySection[] = [
    {
      title: "Utilidades & Cozinha Moderna",
      products: presentationProducts.slice(0, 8)
    },
    {
      title: "Beleza, Cuidados & Bem-Estar",
      products: presentationProducts.slice(0, 8)
    },
    {
      title: "Moda Masculina & Acessórios",
      products: presentationProducts.slice(0, 8)
    },
    {
      title: "Tecnologia & Gadgets",
      products: presentationProducts.slice(0, 8)
    },
  ]

  // Bloco 2: Outras 4 Categorias (cada uma com 8 produtos)
  const blockTwoSections: CategorySection[] = [
    {
      title: "Casa & Decoração Inteligente",
      products: presentationProducts.slice(0, 8)
    },
    {
      title: "Fitness & Saúde Pessoal",
      products: presentationProducts.slice(0, 8)
    },
    {
      title: "Automotivo & Ferramentas",
      products: presentationProducts.slice(0, 8)
    },
    {
      title: "Pet Shop & Variedades",
      products: presentationProducts.slice(0, 8)
    },
  ]

  const firstCategoryButtons = ["Mais Vendidos", "Cozinha", "Moda Masculina", "Beleza", "Tecnologia", "Casa"]
  const secondCategoryButtons = ["Lançamentos", "Fitness", "Automotivo", "Pet Shop", "Ferramentas", "Ofertas"]

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 space-y-10">
      
      {/* 1. SEÇÃO DE APRESENTAÇÃO (2 Linhas de Produtos Populares/Novidades) */}
      <section>
        <div className="flex items-center justify-between mb-4 border-b pb-2">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">🔥 Produtos populares que você não pode perder!</h2>
          <span className="text-sm font-semibold text-[#eb2f4e]">Novidades em destaque</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {presentationProducts.map((product) => (
            <div key={product.id} className="group rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between">
              <div>
                <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100 mb-2">
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug">{product.title}</h3>
              </div>
              <div className="mt-2">
                <span className="text-xs text-gray-400 line-through block">R$ 199,90</span>
                <span className="text-sm font-bold text-[#eb2f4e]">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PRIMEIRO BLOCO DE CATEGORIAS (6 Botões + 4 Linhas de 8 Produtos) */}
      <section className="space-y-6 pt-4">
        {/* 6 Botões de Categorias */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {firstCategoryButtons.map((btn, index) => (
            <button key={index} className="rounded-full border border-gray-300 bg-white px-5 py-2 text-xs font-semibold text-gray-700 shadow-sm hover:border-[#eb2f4e] hover:text-[#eb2f4e] transition-all">
              {btn}
            </button>
          ))}
        </div>

        {/* 4 Linhas de Categorias do Bloco 1 */}
        {blockOneSections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center justify-between border-b pb-1">
              <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
              <a href="#" className="text-xs font-semibold text-[#eb2f4e] hover:underline">Ver tudo</a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {section.products.map((product, pIdx) => (
                <div key={pIdx} className="group rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100 mb-2">
                      <img src={product.image} alt={product.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h4 className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug">{product.title}</h4>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs text-gray-400 line-through block">R$ 199,90</span>
                    <span className="text-sm font-bold text-[#eb2f4e]">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* BANNER INTERMEDIÁRIO DE QUEBRA */}
      <div className="my-8 rounded-xl bg-gradient-to-r from-blue-900 to-[#eb2f4e] p-6 text-center text-white shadow-md">
        <h3 className="text-xl font-bold">Aproveite as Ofertas Exclusivas da Semana!</h3>
        <p className="text-xs opacity-90 mt-1">Frete grátis para todo o Brasil em compras selecionadas.</p>
      </div>

      {/* 3. SEGUNDO BLOCO DE CATEGORIAS (6 Botões + 4 Linhas de 8 Produtos) */}
      <section className="space-y-6">
        {/* Mais 6 Botões de Categorias */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {secondCategoryButtons.map((btn, index) => (
            <button key={index} className="rounded-full border border-gray-300 bg-white px-5 py-2 text-xs font-semibold text-gray-700 shadow-sm hover:border-[#eb2f4e] hover:text-[#eb2f4e] transition-all">
              {btn}
            </button>
          ))}
        </div>

        {/* 4 Linhas de Categorias do Bloco 2 */}
        {blockTwoSections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center justify-between border-b pb-1">
              <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
              <a href="#" className="text-xs font-semibold text-[#eb2f4e] hover:underline">Ver tudo</a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {section.products.map((product, pIdx) => (
                <div key={pIdx} className="group rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100 mb-2">
                      <img src={product.image} alt={product.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h4 className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug">{product.title}</h4>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs text-gray-400 line-through block">R$ 199,90</span>
                    <span className="text-sm font-bold text-[#eb2f4e]">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* BANNER FINAL ANTES DO RODAPÉ */}
      <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center text-gray-800 shadow-sm">
        <h3 className="text-lg font-bold">Precisa de Ajuda para Encontrar o Presente Ideal?</h3>
        <p className="text-xs text-gray-500 mt-1">Explore nossas coleções exclusivas e navegue pelas subcategorias do menu.</p>
      </div>

    </div>
  )
}
