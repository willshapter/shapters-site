export function ShippingBanner() {
  const images = [
    "LINK_DA_SUA_PRIMEIRA_IMAGEM",
    "LINK_DA_SUA_SEGUNDA_IMAGEM",
    "LINK_DA_SUA_TERCEIRA_IMAGEM"
  ];

  return (
    <section className="w-full h-[400px] overflow-hidden relative">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Banner ${index + 1}`}
          className="absolute w-full h-full object-cover animate-fade-slides"
          style={{ animationDelay: `${index * 5}s` }}
        />
      ))}
      <style jsx>{`
        @keyframes fade-slides {
          0%, 20% { opacity: 1; }
          33%, 100% { opacity: 0; }
        }
        .animate-fade-slides {
          animation: fade-slides 15s infinite;
        }
      `}</style>
    </section>
  );
}