import { CheckCircle, ArrowRight } from 'lucide-react';
import { AppButton } from '@/components/common/AppButton';
import aboutImage from '@/assets/about-orthopedics.jpg';
import { Link } from 'react-router-dom';

const highlights = [
  'Experiência e Cuidado Humanizado',
  'Infraestrutura de Ponta',
  'Diagnósticos Precisos e Rápidos',
];

export const About = () => {
  return (
    <section className="bg-slate-50/70 py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna Esquerda: Imagem */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Médico ortopedista realizando uma avaliação em um paciente"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          
          {/* Coluna Direita: Conteúdo de Texto */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold font-display">
              SOBRE NÓS
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink leading-tight">
              Somos Especializados em 
              <span className="text-brand-600"> Cuidado Ortopédico</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Nossa equipe de especialistas em ortopedia combina conhecimento médico avançado com uma abordagem centrada no paciente, garantindo um tratamento humanizado e eficaz para sua total recuperação.
            </p>
            
            {/* Lista de Destaques */}
            <ul className="space-y-3 pt-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
            
            {/* Botão de Ação */}
            <div className="pt-4">
              <AppButton asChild variant="outline" className="group text-brand-600">
                <Link to="/sobre">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </AppButton>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};