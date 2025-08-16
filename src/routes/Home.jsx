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
import { Contact } from '@/sections/Contact'; // 1. Importe a nova seção

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Tracking />
      <Testimonials />
      <OurDoctors />
      <Gallery />
      <Faq />
      <Cta />
      <Contact /> {/* 2. Adicione a seção aqui, antes do Footer */}
    </>
  );
};