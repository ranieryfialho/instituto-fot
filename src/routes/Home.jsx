// src/routes/Home.jsx (Modificado)
import { Hero } from '@/sections/Hero';
import { PainPoints } from '@/sections/PainPoints';
import { Authority } from '@/sections/Authority';
import { Method } from '@/sections/Method';
import { Benefits } from '@/sections/Benefits';
import { OurDoctors } from '@/sections/OurDoctors';
import { Gallery } from '@/sections/Gallery';
import { Contact } from '@/sections/Contact';

export const Home = () => {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="problemas"><PainPoints /></section>
      <section id="diferenciais"><Authority /></section>
      <section id="metodo"><Method /></section>
      <section id="beneficios"><Benefits /></section>

      <OurDoctors />
      
      <section id="galeria"><Gallery /></section>
      <section id="contato"><Contact /></section>
    </>
  );
};