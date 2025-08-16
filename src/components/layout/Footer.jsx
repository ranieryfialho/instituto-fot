// src/components/layout/Footer.jsx
import logo from '@/assets/logo.jpg';

export const Footer = () => {
  // Links de navegação do footer
  const footerLinks = [
    { title: 'Início', sectionId: 'hero' },
    { title: 'Sobre', sectionId: 'sobre' },
    { title: 'Acompanhamento', sectionId: 'acompanhamento' },
    { title: 'Depoimentos', sectionId: 'depoimentos' },
    { title: 'Contato', sectionId: 'contato' },
  ];

  // Função para fazer scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
            <h4 className="font-semibold tracking-wider uppercase mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.sectionId}>
                  <button 
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-brand-300 hover:text-white transition-colors text-left"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">Contato</h4>
            <address className="space-y-2 text-sm not-italic text-brand-300">
              <p>Av. Santos Dumont, 5753 - Aldeota</p>
              <p>Fortaleza, CE, 60150-165</p>
              <p className="pt-2">
                <a href="tel:8512345678" className="hover:text-white transition-colors">
                  (85) 1234-5678
                </a>
              </p>
            </address>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">Horários</h4>
            <div className="space-y-2 text-sm text-brand-300">
              <p>Segunda a Sexta:</p>
              <p className="ml-2">7h às 18h</p>
              <p>Sábado:</p>
              <p className="ml-2">8h às 12h</p>
              <p className="text-brand-100 mt-2">Emergências 24h</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-700 text-center text-xs text-brand-400">
          <p>&copy; {new Date().getFullYear()} Instituto FOT. Todos os direitos reservados.</p>
          <p className="mt-1">
            Desenvolvido com 🧠 por{' '}
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:text-white transition-colors"
            >
              Rafi Dev
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};