export function Footer() {
  return (
    <footer className="bg-[#0b3834] border-t border-[#124e48] pt-12 pb-8 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 space-y-10">
        
        {/* COLUNAS SUPERIORES DO RODAPÉ */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Coluna 1: Institucional */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Sobre a Shapers</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nossos Compromissos</a></li>
            </ul>
          </div>

          {/* Coluna 2: Atendimento */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Atendimento ao Cliente</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda 24h</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rastrear Meu Pedido</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Coluna 3: Categorias Populares */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Categorias</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Presentes para Ele & Ela</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cozinha & Casa Inteligente</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Moda & Acessórios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuidados com a Pele & Beleza</a></li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Fique por dentro</h4>
            <p className="text-xs text-gray-400">Receba ofertas exclusivas e novidades em primeira mão.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full rounded-l-md border-0 bg-white/10 px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white" 
              />
              <button className="bg-[#eb2f4e] text-white px-4 rounded-r-md text-xs font-semibold hover:bg-opacity-90 transition-all">
                Assinar
              </button>
            </div>
          </div>

        </div>

        <hr className="border-[#124e48] my-8" />

        {/* PARTE INFERIOR: REDES SOCIAIS E BANDEIRAS COLORIDAS */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-xs">
          
          {/* Redes Sociais */}
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-white mr-2">Siga-nos</span>
            <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm hover:opacity-90 transition-opacity">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.75V8z"/></svg>
            </a>
            <a href="#" aria-label="X" className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-sm hover:opacity-90 transition-opacity">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white shadow-sm hover:opacity-90 transition-opacity">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-sm hover:opacity-90 transition-opacity">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
            <a href="#" aria-label="Pinterest" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E60023] text-white shadow-sm hover:opacity-90 transition-opacity">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.331 1.363-.053.225-.172.271-.399.165-1.493-.695-2.425-2.875-2.425-4.626 0-3.769 2.739-7.237 7.892-7.237 4.144 0 7.365 2.954 7.365 6.906 0 4.122-2.604 7.44-6.222 7.44-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" aria-label="TikTok" className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-sm hover:opacity-90 transition-opacity">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
          </div>

          {/* Formas de Pagamento / Bandeiras Coloridas Reais */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-semibold text-white mr-1">Aceitamos:</span>
            
            {/* Visa */}
            <div className="h-7 px-2.5 bg-white rounded flex items-center justify-center shadow-sm">
              <span className="font-black text-[#1434CB] italic tracking-tighter text-xs">VISA</span>
            </div>

            {/* Mastercard */}
            <div className="h-7 px-2.5 bg-white rounded flex items-center justify-center shadow-sm space-x-[-6px]">
              <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] opacity-80"></div>
            </div>

            {/* Amex */}
            <div className="h-7 px-2.5 bg-[#006FCF] text-white rounded flex items-center justify-center shadow-sm font-bold text-[10px] tracking-widest">
              AMEX
            </div>

            {/* Pix */}
            <div className="h-7 px-2.5 bg-[#00B4D8] text-white rounded flex items-center justify-center shadow-sm font-bold text-[10px]">
              PIX
            </div>

            {/* Apple Pay */}
            <div className="h-7 px-2.5 bg-black text-white rounded flex items-center justify-center shadow-sm font-semibold text-[10px]">
              Apple Pay
            </div>

            {/* PayPal */}
            <div className="h-7 px-2.5 bg-white rounded flex items-center justify-center shadow-sm">
              <span className="font-bold text-[#003087] italic text-xs">PayPal</span>
            </div>

            {/* Google Pay */}
            <div className="h-7 px-2.5 bg-white rounded flex items-center justify-center shadow-sm text-gray-800 font-medium text-[10px]">
              Google Pay
            </div>
          </div>

        </div>

        <hr className="border-[#124e48] my-4" />

        {/* COPYRIGHT E POLÍTICAS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>Direitos autorais @ 2026 - Shapers</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Suas opções de privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Política de Acessibilidade</a>
            <a href="#" className="hover:text-white transition-colors">DMCA</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
