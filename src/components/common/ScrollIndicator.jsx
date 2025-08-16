// src/components/common/ScrollIndicator.jsx
import { useState, useEffect } from 'react';

export const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', name: 'Início' },
    { id: 'sobre', name: 'Sobre' },
    { id: 'acompanhamento', name: 'Acompanhamento' },
    { id: 'depoimentos', name: 'Depoimentos' },
    { id: 'contato', name: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset para ativação antecipada

      // Encontra a seção ativa baseada na posição do scroll
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Verifica inicialmente

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-3">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`group relative cursor-pointer transition-all duration-300 ${
              activeSection === section.id 
                ? 'scale-125' 
                : 'hover:scale-110'
            }`}
            onClick={() => scrollToSection(section.id)}
          >
            {/* Indicador visual */}
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-brand-500 border-brand-500'
                  : 'bg-transparent border-brand-300 hover:border-brand-500'
              }`}
            />
            
            {/* Tooltip com nome da seção */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-brand-800 text-white text-xs py-1 px-3 rounded-lg whitespace-nowrap">
                {section.name}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-4 border-l-brand-800 border-y-4 border-y-transparent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};