// src/sections/OurDoctors.jsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/common/SectionTitle";
import { doctors } from "@/data/doctors";

export const OurDoctors = () => {
  // Agrupa os doutores por especialidade
  const doctorsBySpecialty = doctors.reduce((acc, doctor) => {
    // Lógica corrigida, sem sintaxe experimental
    if (!acc[doctor.specialty]) {
      acc[doctor.specialty] = []; // Se a especialidade ainda não existe no acumulador, cria um array vazio para ela
    }
    acc[doctor.specialty].push(doctor); // Adiciona o doutor ao array da sua especialidade
    return acc;
  }, {});

  return (
    <section className="bg-slate-50/70 py-16 md:py-24">
      <div className="container">
        <SectionTitle
          title="Conheça mais sobre o nosso time de especialistas:"
        />
        {Object.keys(doctorsBySpecialty).map((specialty) => (
          <div key={specialty} className="mb-12">
            <h3 className="text-2xl font-display font-bold text-ink mb-6">{specialty}</h3>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {doctorsBySpecialty[specialty].map((doctor) => (
                  <CarouselItem key={doctor.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="group">
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={doctor.image}
                          alt={`Foto de ${doctor.name}`}
                          className="w-full h-80 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="font-semibold text-lg text-ink">{doctor.name}</h4>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-16" />
            </Carousel>
          </div>
        ))}
      </div>
    </section>
  );
};