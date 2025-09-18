import { SectionTitle } from "@/components/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { methodSteps } from "@/data/methodSteps";

export const Method = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionTitle 
          title="Nosso processo para restaurar seus movimentos e eliminar a dor"
        />
        
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 hidden lg:block" />

          {methodSteps.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center">
              <div className="absolute -top-4 h-8 w-8 rounded-full bg-brand-500 border-4 border-white flex items-center justify-center text-white font-bold">
                {step.id}
              </div>
              <Card className="text-center pt-8 w-full h-full">
                <CardHeader>
                  <CardTitle className="font-display text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};