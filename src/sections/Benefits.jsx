import { Check } from 'lucide-react';
import { SectionTitle } from '@/components/common/SectionTitle';
import { benefits } from '@/data/benefits';
import { asset } from '@/lib/utils/asset';

export const Benefits = () => {
  return (
    <section className="bg-slate-50/70 py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <SectionTitle 
              title="A vida sem dor que você merece está mais próxima" 
            />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ao iniciar seu tratamento no Instituto FOT, você dá o primeiro passo para uma grande transformação. Nossos pacientes relatam não apenas a melhora da dor, mas uma recuperação completa da qualidade de vida.
            </p>

            <ul className="space-y-4 pt-4">
              <h3 className="text-xl font-display font-bold text-gray-600 mb-4">Ao se tratar conosco, você vai:</h3>
              {benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-center space-x-3">
                  <div className="bg-brand-500 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground text-lg">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[700px]">
              <img
                src={asset('img-paciente.JPG')}
                alt="Paciente recuperado realizando atividade física"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};