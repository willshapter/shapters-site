"use client"

import { useState, useEffect } from 'react'

export function ShippingBanner() {
  const slides = [
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0781/7573/1852/files/aurora-top-banner1.jpg?v=1784478813" },
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0781/7573/1852/files/Copia_De_INFORMATIVO_CORRETO_-_15.jpg?v=1784478813" }
    // Se quiser adicionar o vídeo depois, é só colocar aqui: { type: "video", src: "LINK_DO_VIDEO.mp4" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Lógica automática do slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full h-[400px] overflow-hidden relative bg-black">
      {/* Container que segura todas as imagens lado a lado */}
      <div
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {slide.type === "image" ? (
              <img
                src={slide.src}
                className="w-full h-full object-cover"
                alt={`Banner ${index + 1}`}
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Indicadores de bolinha (opcional, mas ajuda o cliente a ver que tem mais) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}