// src/components/common/ScrollIndicator.jsx (Versão Corrigida)
import { useState, useEffect, useRef } from 'react';

export const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const observer = useRef(null);

  const sections = [
    { id: 'hero', name: 'Início' },
    { id: 'problemas', name: 'Sintomas' },
    { id: 'diferenciais', name: 'Diferenciais' },
    { id: 'metodo', name: 'Método' },
    { id: 'beneficios', name: 'Benefícios' },
    { id: 'especialistas', name: 'Nosso Time' },
    { id: 'galeria', name: 'Galeria' },
    { id: 'contato', name: 'Contato' },
  ];

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const observerCallback = (entries) => {
      // Ordena as entradas por posição na tela
      const sortedEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const aTop = a.boundingClientRect.top;
          const bTop = b.boundingClientRect.top;
          return Math.abs(aTop) - Math.abs(bTop);
        });

      if (sortedEntries.length > 0) {
        // Pega a seção mais próxima do topo
        const closestEntry = sortedEntries[0];
        setActiveSection(closestEntry.target.id);
      }
    };

    observer.current = new IntersectionObserver(observerCallback, {
      // Margem mais flexível para melhor detecção
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    const currentObserver = observer.current;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Força a atualização do estado ativo
      setActiveSection(sectionId);
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
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-brand-500 border-brand-500' // Verde quando ativo
                  : 'bg-transparent border-brand-300 hover:border-brand-500'
              }`}
            />
            
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