import { CheckCircle } from 'lucide-react';
import { SectionTitle } from '@/components/common/SectionTitle';
import { differentials } from '@/data/differentials';
import { asset } from '@/lib/utils/asset';

export const Authority = () => {
  return (
    <section className="bg-slate-50/70 py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={asset('ATENDIMENTO-DR-FELIPE-E-DR-ROBERTO.png')}
                alt="Equipe de médicos especialistas do Instituto FOT"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <SectionTitle 
              title="Somos pioneiros em tratamento ortopédico integrado em Fortaleza" 
              subtitle="Aqui, você encontra médicos e fisioterapeutas trabalhando juntos para garantir o melhor resultado possível com menos tempo de recuperação e mais qualidade de vida."
            />

            <ul className="space-y-4 pt-2">
              <h3 className="text-xl font-display font-bold text-gray-600 mb-4">Nossos diferenciais:</h3>
              {differentials.map((item) => (
                <li key={item.id} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};