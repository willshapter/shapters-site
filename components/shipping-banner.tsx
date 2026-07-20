"use client"

import { useState, useEffect } from "react"

export function ShippingBanner() {
  const slides = [
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0781/7573/1852/files/aurora-top-banner1.jpg?v=1784478813" },
    { type: "image", src: "https://cdn.shopify.com/s/files/1/0781/7573/1852/files/Copia_De_INFORMATIVO_CORRETO_-_15.jpg?v=1784478813" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center bg-black">
            <img 
              src={slides[index].src} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-auto object-contain block" 
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              currentSlide === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
