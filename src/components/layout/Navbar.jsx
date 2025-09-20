import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { AppButton } from '@/components/common/AppButton';
import { asset } from '@/lib/utils/asset';

const navigationItems = [
  { id: 'home', title: 'Início', sectionId: 'hero' },
  { id: 'problemas', title: 'Sintomas', sectionId: 'problemas' },
  { id: 'diferenciais', title: 'Diferenciais', sectionId: 'diferenciais' },
  { id: 'metodo', title: 'Método', sectionId: 'metodo' },
  { id: 'especialistas', title: 'Nosso Time', sectionId: 'especialistas' },
  { id: 'depoimentos', title: 'Depoimentos', sectionId: 'depoimentos' },
  { id: 'contato', title: 'Contato', sectionId: 'contato' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={asset('/logo.jpg')} alt="Logo Instituto FOT" className="h-10 w-10" />
          {/* As classes 'hidden' e 'sm:inline' foram removidas da linha abaixo */}
          <span className="font-display text-xl font-bold text-ink">
            Instituto <span className="text-brand-600">FOT</span>
          </span>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
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
            onClick={() => scrollToSection('contato')}
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
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm font-medium text-left text-muted-foreground"
              >
                {item.title}
              </button>
            ))}
            <AppButton 
              className="w-full mt-2"
              onClick={() => scrollToSection('contato')}
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