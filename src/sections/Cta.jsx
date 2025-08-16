// src/sections/Cta.jsx
import { Calendar, ArrowRight, Phone } from 'lucide-react';
import { AppButton } from '@/components/common/AppButton';

export const Cta = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-brand-gradient text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.4'%3e%3cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        }}
      />
      
      <div className="container relative py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Pronto para dar o próximo passo na sua recuperação?
          </h2>
          
          <p className="text-lg md:text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Nossa equipe está pronta para avaliar seu caso e criar um plano de tratamento personalizado. Agende sua consulta hoje mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppButton 
              size="lg"
              className="bg-white text-brand-700 hover:bg-white/90 shadow-lg transform hover:scale-105 transition-transform"
              onClick={() => scrollToSection('contato')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
              <ArrowRight className="ml-2 h-4 w-4" />
            </AppButton>
            
            <AppButton 
              size="lg" 
              variant="outline"
              className="border-white/50 text-white hover:bg-white hover:text-brand-700 group transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              (85) 1234-5678
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
};