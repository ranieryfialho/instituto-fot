// src/hooks/useScrollToSection.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Mapeia as rotas para os IDs das seções
    const routeToSectionMap = {
      '/': 'hero',
      '/sobre': 'sobre',
      '/acompanhamento': 'acompanhamento', 
      '/depoimentos': 'depoimentos',
      '/contato': 'contato'
    };

    // Verifica se há uma seção correspondente à rota atual
    const sectionId = routeToSectionMap[location.pathname];
    
    if (sectionId) {
      // Aguarda um pouco para garantir que o DOM foi renderizado
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Função para navegar programaticamente para uma seção
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return { scrollToSection };
};