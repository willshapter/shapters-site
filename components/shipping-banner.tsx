"use client"

export function ShippingBanner() {
  const slides = [
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0781/7573/1852/files/aurora-top-banner1.jpg?v=1784478813" },
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0781/7573/1852/files/Copia_De_INFORMATIVO_CORRETO_-_15.jpg?v=1784478813" }
  ];

  return (
    <section className="w-full h-[400px] overflow-hidden relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute w-full h-full animate-fade-slides"
          style={{ animationDelay: `${index * 5}s` }}
        >
          <img src={slide.src} className="w-full h-full object-cover" alt="Banner" />
        </div>
      ))}
      <style jsx>{`
        @keyframes fade-slides {
          0%, 40% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-fade-slides {
          animation: fade-slides 10s infinite;
        }
      `}</style>
    </section>
  )
}