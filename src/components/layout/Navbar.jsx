import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { AppButton } from '@/components/common/AppButton';
import logo from '@/assets/logo.jpg';

const navigationItems = [
  { id: 'home', title: 'Início', href: '/' },
  { id: 'about', title: 'Sobre', href: '/sobre' },
  { id: 'tracking', title: 'Acompanhamento', href: '/acompanhamento' },
  { id: 'testimonials', title: 'Depoimentos', href: '/depoimentos' },
  { id: 'contact', title: 'Contato', href: '/contato' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo Instituto FOT" className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-ink hidden sm:inline">
            Instituto <span className="text-brand-600">FOT</span>
          </span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTAs e Menu Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <AppButton size="sm" className="hidden md:inline-flex">
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
        <div className="md:hidden border-t border-border/40" >
          <nav className="flex flex-col gap-4 p-4">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <AppButton className="w-full mt-2">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Consulta
            </AppButton>
          </nav>
        </div>
      )}
    </header>
  );
};