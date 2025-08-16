// src/routes/Home.jsx
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Stats } from '@/sections/Stats';
import { Tracking } from '@/sections/Tracking';
import { Testimonials } from '@/sections/Testimonials';
import { OurDoctors } from '@/sections/OurDoctors';
import { Gallery } from '@/sections/Gallery';
import { Faq } from '@/sections/Faq';
import { Cta } from '@/sections/Cta';
import { Contact } from '@/sections/Contact';

export const Home = () => {
  return (
    <>
      {/* Cada seção agora tem um ID único para navegação */}
      <section id="hero">
        <Hero />
      </section>
      
      <section id="sobre">
        <About />
        <Stats />
      </section>
      
      <section id="acompanhamento">
        <Tracking />
        <OurDoctors />
        <Gallery />
      </section>
      
      <section id="depoimentos">
        <Testimonials />
        <Faq />
      </section>
      
      <section id="contato">
        <Cta />
        <Contact />
      </section>
    </>
  );
};