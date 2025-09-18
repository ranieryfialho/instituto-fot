import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "@/components/common/SectionTitle";
import { faqs } from "@/data/faqs";

export const Faq = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container max-w-3xl mx-auto">
        <SectionTitle 
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre nossos atendimentos, estrutura e procedimentos. Se sua pergunta não estiver aqui, entre em contato conosco."
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};