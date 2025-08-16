import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Tracking } from '@/sections/Tracking'; 

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Tracking /> {/* 2. Adicione a seção aqui */}
      {/* Outras seções virão abaixo */}
    </>
  );
};