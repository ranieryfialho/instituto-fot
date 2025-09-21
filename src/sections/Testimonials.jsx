import * as React from "react";
import { PlayCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/common/SectionTitle";
import { testimonials } from "@/data/testimonials";
import { asset } from "@/lib/utils/asset";

export const Testimonials = () => {
  const [selectedVideoUrl, setSelectedVideoUrl] = React.useState(null);

  return (
    <section id="depoimentos" className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionTitle 
          title="O que nossos pacientes dizem"
          subtitle="A satisfação e a recuperação de quem confia em nosso trabalho é nossa maior recompensa."
        />
        <Dialog>
          <Carousel
            opts={{ align: "start", loop: testimonials.length > 3 }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <DialogTrigger asChild>
                    <Card 
                      className="overflow-hidden group cursor-pointer border-slate-200 shadow-md hover:shadow-xl transition-shadow"
                      onClick={() => setSelectedVideoUrl(testimonial.videoUrl)}
                    >
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={asset(testimonial.thumbnail)} 
                            alt={`Thumbnail do depoimento de ${testimonial.name}`}
                            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <PlayCircle className="w-16 h-16 text-white/80 transform transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>
                        <div className="p-6 bg-card">
                          <p className="font-semibold font-display text-lg text-ink">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px]" />
            <CarouselNext className="right-[-50px]" />
          </Carousel>

          <DialogContent className="max-w-3xl h-auto p-0 border-0 bg-black">
            {selectedVideoUrl && (
              <video 
                src={selectedVideoUrl}
                controls 
                autoPlay
                className="w-full aspect-video"
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};