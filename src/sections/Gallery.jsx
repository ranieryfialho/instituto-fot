import { ArrowRight } from "lucide-react";
import { AppButton } from "@/components/common/AppButton";
import { SectionTitle } from "@/components/common/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { galleryImages } from "@/data/gallery";

export const Gallery = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-slate-50/70 py-16 md:py-24">
      <div className="container">
        <SectionTitle title="Conheça o Instituto F.O.T." />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {galleryImages.map((image) => (
              <CarouselItem
                key={image.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden rounded-2xl shadow-md">
                  <CardContent className="p-0 aspect-[4/3]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>

        <div className="mt-12 text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5585981191467&text=Ol%C3%A1%21+Vim+do+site+do+Instituto+FOT+e+gostaria+de+marcar+uma+consulta&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppButton size="lg" className="group" asChild>
              <div>
                QUERO AGENDAR UMA AVALIAÇÃO
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </AppButton>
          </a>
        </div>
      </div>
    </section>
  );
};
