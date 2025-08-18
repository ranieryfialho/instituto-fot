// src/sections/Stats.jsx
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Componente para animar um número contando de 0 até o valor final.
 */
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => 
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("pt-BR").format(latest.toFixed(0));
      }
    }),
    [springValue]
  );

  return <span ref={ref} />;
}

const stats = [
  { value: 3, label: "anos de existência" },
  { value: 13000, label: "atendimentos/procedimentos no ano passado" },
  { value: 25, label: "colaboradores" },
];

export const Stats = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-600">
          Quem Somos
        </h2>
        <div className="mt-4 w-16 h-1 bg-brand-500 mx-auto" />
        <p className="mt-6 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          O Instituto FOT está localizado em Fortaleza - CE, sendo pioneiro na avaliação, planejamento e execução de tratamentos ortopédicos de forma conjunta onde médico ortopedista e fisioterapeuta atuam integradamente em tempo real. Essa metodologia traz mais assertividade no diagnóstico, clareza nas informações acerca do tratamento e eficácia na execução da terapêutica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl md:text-6xl font-display font-bold text-brand-500">
                <AnimatedNumber value={stat.value} />
              </p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};