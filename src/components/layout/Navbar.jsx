// src/components/layout/Navbar.jsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { AppButton } from '@/components/common/AppButton';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import logo from '@/assets/logo.jpg';

const navigationItems = [
  { id: 'home', title: 'Início', href: '/', sectionId: 'hero' },
  { id: 'about', title: 'Sobre', href: '/sobre', sectionId: 'sobre' },
  { id: 'tracking', title: 'Acompanhamento', href: '/acompanhamento', sectionId: 'acompanhamento' },
  { id: 'testimonials', title: 'Depoimentos', href: '/depoimentos', sectionId: 'depoimentos' },
  { id: 'contact', title: 'Contato', href: '/contato', sectionId: 'contato' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollToSection } = useScrollToSection();

  // Função para lidar com a navegação
  const handleNavigation = (item) => {
    setIsOpen(false); // Fecha o menu mobile
    
    // Se já estamos na página inicial, apenas faz scroll
    if (location.pathname === '/') {
      scrollToSection(item.sectionId);
    } else {
      // Se estamos em outra "rota", navega para ela (que renderizará a Home) 
      // e o useScrollToSection fará o scroll automaticamente
      navigate(item.href);
    }
  };

  // Função para verificar se o item está ativo
  const isActiveItem = (item) => {
    return location.pathname === item.href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button 
          onClick={() => handleNavigation(navigationItems[0])}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} alt="Logo Instituto FOT" className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-ink hidden sm:inline">
            Instituto <span className="text-brand-600">FOT</span>
          </span>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveItem(item) 
                  ? 'text-brand-600 font-semibold' 
                  : 'text-muted-foreground'
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>

        {/* CTAs e Menu Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <AppButton 
            size="sm" 
            className="hidden md:inline-flex"
            onClick={() => handleNavigation(navigationItems.find(item => item.id === 'contact'))}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Agendar Consulta
          </AppButton>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40">
          <nav className="flex flex-col gap-4 p-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`text-sm font-medium text-left ${
                  isActiveItem(item) 
                    ? 'text-brand-600 font-semibold' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.title}
              </button>
            ))}
            <AppButton 
              className="w-full mt-2"
              onClick={() => handleNavigation(navigationItems.find(item => item.id === 'contact'))}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Consulta
            </AppButton>
          </nav>
        </div>
      )}
    </header>
  );
};