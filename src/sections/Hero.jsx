import { ArrowRight, Play, Star } from 'lucide-react';
import { AppButton } from '@/components/common/AppButton';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-orthopedics.jpg';

export const Hero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-16 md:py-24">

          {/* Coluna Esquerda: Conteúdo de Texto */}
          <div className="flex flex-col justify-center space-y-6">
            <Badge variant="outline" className="self-start py-2 px-4 text-brand-600 border-brand-300">
              <Star className="w-4 h-4 mr-2 text-brand-500" />
              Clínica Ortopédica Instituto FOT
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-gray-600 leading-tight tracking-tighter">
                Inove Seu Tratamento {' '}
                <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
                  Osteomuscular
                </span>
                .
              </h1>

              <p className="text-lg text-justify md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Avaliação, acompanhamento e tratamento da sua patologia osteomuscular até 3 vezes mais rápida e com alto índice de recuperação.
                Uma metodologia inovadora que integra a Fisioterapia, Ortopedia e Educação Física em um único lugar.
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <AppButton size="lg" className="group">
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </AppButton>

              <AppButton variant="outline" size="lg" className="group text-muted-foreground">
                <Play className="mr-2 h-5 w-5" />
                Conheça a Clínica
              </AppButton>
            </div>
          </div>

          {/* Coluna Direita: Imagem */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
              <img
                src={heroImage}
                alt="Médico ortopedista examinando o joelho de um paciente"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl shadow-lg p-6 border">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-brand-gradient rounded-xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-ink">2.500+</p>
                  <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};