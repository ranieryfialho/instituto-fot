// src/sections/Gallery.jsx
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
              <CarouselItem key={image.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden rounded-xl">
                  <CardContent className="p-0 aspect-video">
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
      </div>
    </section>
  );
};