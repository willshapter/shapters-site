export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 text-gray-700">
      <div className="mx-auto max-w-7xl px-4 space-y-10">
        
        {/* COLUNAS SUPERIORES DO RODAPÉ */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Coluna 1: Institucional */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Sobre a Loja</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Nossos Compromissos</a></li>
            </ul>
          </div>

          {/* Coluna 2: Atendimento */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Atendimento ao Cliente</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Central de Ajuda 24h</a></li>
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Rastrear Meu Pedido</a></li>
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Coluna 3: Categorias Populares */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Categorias</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Presentes para Ele & Ela</a></li>
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Cozinha & Casa Inteligente</a></li>
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Moda & Acessórios</a></li>
              <li><a href="#" className="hover:text-[#eb2f4e] transition-colors">Cuidados com a Pele & Beleza</a></li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter & Redes Sociais Coloridas */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Fique por dentro</h4>
            <p className="text-xs text-gray-500">Receba ofertas exclusivas e novidades em primeira mão.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-[#eb2f4e]" 
              />
              <button className="bg-[#eb2f4e] text-white px-4 rounded-r-md text-xs font-semibold hover:bg-opacity-90 transition-all">
                Assinar
              </button>
            </div>

            {/* Redes Sociais Coloridas */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-gray-900 mb-2">Siga nossas redes</span>
              <div className="flex items-center space-x-3">
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-white hover:opacity-90 transition-opacity shadow-sm">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white hover:opacity-90 transition-opacity shadow-sm">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.75V8z"/></svg>
                </a>
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white hover:opacity-90 transition-opacity shadow-sm">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
                {/* TikTok / Outra */}
                <a href="#" aria-label="TikTok" className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition-opacity shadow-sm">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
              </div>
            </div>

          </div>

        </div>

        <hr className="border-gray-100 my-8" />

        {/* PARTE INFERIOR: COPYRIGHT E BANDEIRAS DE CARTÕES COLORIDAS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          
          <div>
            <p>© 2026 Sua Loja. Todos os direitos reservados.</p>
          </div>

          {/* Bandeiras Coloridas Oficiais dos Cartões / Formas de Pagamento */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-gray-600 mr-2">Pagamento Seguro:</span>
            
            {/* Visa */}
            <div className="h-7 px-2 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
              <span className="font-black text-blue-800 italic tracking-tighter text-sm">VISA</span>
            </div>

            {/* Mastercard */}
            <div className="h-7 px-2 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm space-x-[-6px]">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500 opacity-90"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 opacity-90"></div>
            </div>

            {/* American Express */}
            <div className="h-7 px-2 bg-blue-700 text-white rounded flex items-center justify-center shadow-sm font-bold text-[10px] tracking-widest">
              AMEX
            </div>

            {/* Pix */}
            <div className="h-7 px-2 bg-teal-600 text-white rounded flex items-center justify-center shadow-sm font-bold text-[10px]">
              PIX
            </div>

            {/* Boleto */}
            <div className="h-7 px-2 bg-gray-800 text-white rounded flex items-center justify-center shadow-sm font-bold text-[10px]">
              BOLETO
            </div>

            {/* PayPal */}
            <div className="h-7 px-2 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
              <span className="font-bold text-blue-600 italic text-xs">PayPal</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
