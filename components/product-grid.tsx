export function ProductGrid() {
  const products = [
    { id: 1, title: "Produto Exclusivo 1", price: "R$ 89,90", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80" },
    { id: 2, title: "Produto Exclusivo 2", price: "R$ 129,90", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80" },
    { id: 3, title: "Produto Exclusivo 3", price: "R$ 59,90", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=80" },
    { id: 4, title: "Produto Exclusivo 4", price: "R$ 199,90", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&auto=format&fit=crop&q=80" },
    { id: 5, title: "Produto Exclusivo 5", price: "R$ 149,90", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&auto=format&fit=crop&q=80" },
    { id: 6, title: "Produto Exclusivo 6", price: "R$ 89,90", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&auto=format&fit=crop&q=80" },
    { id: 7, title: "Produto Exclusivo 7", price: "R$ 79,90", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&auto=format&fit=crop&q=80" },
    { id: 8, title: "Produto Exclusivo 8", price: "R$ 119,90", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&auto=format&fit=crop&q=80" },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 text-center">Produtos em Destaque</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {products.map((product) => (
          <div key={product.id} className="group rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <h3 className="mt-3 text-sm font-medium text-gray-800 line-clamp-1">{product.title}</h3>
            <p className="mt-1 text-base font-bold text-[#eb2f4e]">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
