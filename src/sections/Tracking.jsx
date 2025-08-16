// src/sections/Tracking.jsx
import { SectionTitle } from "@/components/common/SectionTitle";
import { trackingJourney } from "@/data/tracking";

export const Tracking = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionTitle 
          title="Jornada de acompanhamento: conheça como cada profissional te ajudará!" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {trackingJourney.map((step) => (
            // Adicionamos a classe "group" aqui para controlar o hover dos elementos filhos
            <div 
              key={step.id} 
              className="group text-center p-4 rounded-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-400 hover:shadow-lg relative hover:-translate-y-2"
            >
              {/* Este elemento decorativo aparece no hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-400 rotate-45 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}} />
              
              <div className="rounded-xl overflow-hidden mb-6">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-52 object-cover"
                />
              </div>
              
              {/* O título muda de cor no hover */}
              <h3 className="font-display font-bold text-xl text-ink transition-colors duration-300 group-hover:text-brand-600">
                {step.title}
              </h3>

              {/* A descrição fica mais nítida no hover */}
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed min-h-[70px] transition-opacity duration-300 opacity-70 group-hover:opacity-100">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};