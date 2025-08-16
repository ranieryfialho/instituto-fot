import { useState } from "react";
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

export const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-slate-50/70 py-16 md:py-24">
      <div className="container">
        <SectionTitle 
          title="O que nossos pacientes dizem"
          subtitle="A satisfação e a recuperação de quem confia em nosso trabalho é nossa maior recompensa."
        />
        <Dialog>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <DialogTrigger asChild>
                      <Card 
                        className="overflow-hidden group cursor-pointer"
                        onClick={() => setSelectedVideo(testimonial.videoId)}
                      >
                        <CardContent className="p-0">
                          <div className="relative">
                            <img 
                              src={testimonial.thumbnail} 
                              alt={`Thumbnail do depoimento de ${testimonial.name}`}
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <PlayCircle className="w-16 h-16 text-white/80 transform transition-transform duration-300 group-hover:scale-110" />
                            </div>
                          </div>
                          <div className="p-4 bg-card">
                            <p className="font-bold font-display text-ink">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>

          <DialogContent className="max-w-3xl h-auto p-0 border-0">
            {selectedVideo && (
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};