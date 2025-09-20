import * as React from "react";
import { Calendar, Award, Clock, ArrowRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/common/SectionTitle";
import { AppButton } from "@/components/common/AppButton";
import { doctors } from "@/data/doctors";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="group relative p-1">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
        {/* Imagem com Overlay */}
        <div className="relative overflow-hidden">
          <img
            src={doctor.image}
            alt={`Foto de ${doctor.name}`}
            className="w-full aspect-square object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <a 
              href="https://api.whatsapp.com/send/?phone=5585981191467&text=Ol%C3%A1%21+Vim+do+site+do+Instituto+FOT+e+gostaria+de+marcar+uma+consulta&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <AppButton
                size="sm"
                className="w-full bg-white/90 text-brand-600 hover:bg-white backdrop-blur-sm"
                asChild
              >
                <div>
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </div>
              </AppButton>
            </a>
          </div>
        </div>

        {/* Conteúdo do Card */}
        <div className="p-6 space-y-4">
          {/* Nome e Especialidade */}
          <div className="text-center space-y-2">
            <h4 className="text-xl font-bold text-gray-800 group-hover:text-brand-600 transition-colors duration-300">
              {doctor.name}
            </h4>
          </div>

          {/* Especialidades */}
          {doctor.specialties && (
            <div className="pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 justify-center">
                {doctor.specialties.slice(0, 2).map((specialty, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                  >
                    {specialty}
                  </span>
                ))}
                {doctor.specialties.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                    +{doctor.specialties.length - 2} mais
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Sub-componente para o Carrossel de Especialidade ---
const SpecialtyCarousel = ({ specialty, specialists }) => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="group">
      {/* Título da Especialidade com Animação */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 p-4 bg-gradient-to-r from-brand-50 to-blue-50 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
          <div className="w-3 h-3 bg-gradient-to-r from-brand-500 to-blue-500 rounded-full"></div>
          <h3 className="text-2xl font-bold text-gray-800 font-display">
            {specialty}s
          </h3>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-brand-500 rounded-full"></div>
        </div>
      </div>

      {/* Carrossel */}
      <Carousel setApi={setApi} className="w-full max-w-md mx-auto">
        <CarouselContent>
          {specialists.map((doctor) => (
            <CarouselItem key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controles Personalizados */}
        <CarouselPrevious className="left-4 md:left-[-50px] w-12 h-12 bg-white shadow-lg border-2 border-brand-100 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300" />
        <CarouselNext className="right-4 md:right-[-50px] w-12 h-12 bg-white shadow-lg border-2 border-brand-100 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300" />
      </Carousel>

      {/* Indicadores Modernos */}
      <div className="flex gap-2 mt-6 justify-center">
        {specialists.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-8 h-3 bg-gradient-to-r from-brand-500 to-blue-500"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para o especialista ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Componente Principal ---
export const OurDoctors = () => {
  // Agrupa os doutores por especialidade
  const doctorsBySpecialty = doctors.reduce((acc, doctor) => {
    if (!acc[doctor.specialty]) {
      acc[doctor.specialty] = [];
    }
    acc[doctor.specialty].push(doctor);
    return acc;
  }, {});

  return (
    <section
      id="especialistas"
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 md:py-28 overflow-hidden"
    >
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-brand-100/30 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/30 to-transparent rounded-full translate-x-48 translate-y-48"></div>

      <div className="container relative z-10">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <SectionTitle
            title="Conheça nosso time de especialistas"
            subtitle="Profissionais experientes e dedicados ao seu bem-estar, prontos para oferecer o melhor cuidado ortopédico."
          />
        </div>

        {/* Grid de Especialidades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {Object.entries(doctorsBySpecialty).map(
            ([specialty, specialists]) => (
              <SpecialtyCarousel
                key={specialty}
                specialty={specialty}
                specialists={specialists}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};