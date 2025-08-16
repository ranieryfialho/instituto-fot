// src/components/layout/Footer.jsx
import logo from '@/assets/logo.jpg';

export const Footer = () => {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo Instituto FOT" className="h-10 w-10 bg-white p-1 rounded-md" />
              <span className="font-display text-xl font-bold">
                Instituto <span className="text-brand-300">FOT</span>
              </span>
            </div>
            <p className="text-sm text-brand-200 mt-4">
              Cuidado ortopédico de excelência para todas as fases da vida.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Navegação</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/" className="text-brand-300 hover:text-white transition-colors">Início</a></li> {/* <-- Adicione esta linha */}
              <li><a href="/sobre" className="text-brand-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="/acompanhamento" className="text-brand-300 hover:text-white transition-colors">Acompanhamento</a></li>
              <li><a href="/depoimentos" className="text-brand-300 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="/contato" className="text-brand-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Contato</h4>
            <address className="mt-4 space-y-2 text-sm not-italic text-brand-300">
              <p>Av. Santos Dumont, 5753 - Aldeota</p>
              <p>Fortaleza, CE, 60150-165</p>
              <p className="pt-2"><a href="tel:8512345678" className="hover:text-white transition-colors">(85) 1234-5678</a></p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-700 text-center text-xs text-brand-400">
          <p>&copy; {new Date().getFullYear()} Instituto FOT. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido com 🧠 por <a href="#" className="hover:text-white">Rafi Dev</a></p>
        </div>
      </div>
    </footer>
  );
};