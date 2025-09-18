import { ArrowRight } from "lucide-react";
import { AppButton } from "@/components/common/AppButton";
import heroImage from "@/assets/hero-orthopedics.jpg";

export const Hero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-16 md:py-24">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-black leading-tight">
              Recupere sua mobilidade e viva sem dor -{" "}
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
                sem precisar de cirurgia
              </span>
              .
            </h1>

            <p className="text-lg text-justify md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Tratamentos ortopédicos e de reabilitação integrados, feitos sob
              medida para você, por uma equipe de especialistas que cuida do
              início ao fim do seu processo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5585981191467&text=Ol%C3%A1%21+Vim+do+site+do+Instituto+FOT+e+gostaria+de+marcar+uma+consulta&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppButton size="lg" className="group" asChild>
                  <div>
                    Quero agendar minha avaliação
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </AppButton>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
              <img
                src={heroImage}
                alt="Médico ortopedista examinando o joelho de um paciente"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
