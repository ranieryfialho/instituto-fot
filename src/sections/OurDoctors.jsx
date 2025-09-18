// src/sections/OurDoctors.jsx (Código Completo)
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/common/SectionTitle";
import { doctors } from "@/data/doctors";

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
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-display font-bold text-ink mb-6">{specialty}</h3>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {specialists.map((doctor) => (
            <CarouselItem key={doctor.id}>
              <div className="p-1">
                <div className="group text-center">
                  <div className="overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={doctor.image}
                      alt={`Foto de ${doctor.name}`}
                      className="w-full h-80 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="py-4">
                    <h4 className="font-semibold text-lg text-ink">{doctor.name}</h4>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-20px]" />
        <CarouselNext className="right-[-20px]" />
      </Carousel>
      
      {/* Navegação por Pontos (Dots) */}
      <div className="flex gap-2 mt-2">
        {specialists.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "w-4 bg-brand-500" : "bg-gray-300"
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
    <section id="especialistas" className="bg-slate-50/70 py-16 md:py-24">
      <div className="container">
        <SectionTitle
          title="Conheça mais sobre o nosso time de especialistas:"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
          {Object.entries(doctorsBySpecialty).map(([specialty, specialists]) => (
            <SpecialtyCarousel 
              key={specialty} 
              specialty={specialty} 
              specialists={specialists} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};