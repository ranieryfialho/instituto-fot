// src/sections/PainPoints.jsx (Modificado)
import { SectionTitle } from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { painPoints } from "@/data/painPoints";

export const PainPoints = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionTitle 
          title="Você sente dor ao subir escadas, caminhar ou se agachar?"
          subtitle="A verdade é que conviver com dor não é normal e, quanto mais tempo você espera, maiores são as chances de piora, limitação de movimentos e até necessidade de cirurgia."
        />
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-ink mb-8">
            No Instituto FOT, tratamos problemas como:
          </h3>
          {/* Container flex para alinhar os cards como na imagem */}
          <div className="flex flex-wrap justify-center gap-6">
            {painPoints.map((item) => (
              <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex">
                <Card className="flex flex-col w-full h-full border-slate-200 hover:border-brand-400 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-base font-semibold text-ink">{item.problem}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};