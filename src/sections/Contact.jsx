import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MapPin, Phone, MessageSquare } from "lucide-react"

import { AppButton } from "@/components/common/AppButton"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
})

export const Contact = () => {
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values) {
    const phoneNumber = "5585981240678"; 

    const formattedMessage = `Olá, Instituto FOT! 👋\n\nMeu nome é *${values.name}*.\n\n*Email:* ${values.email}\n\n*Mensagem:*\n${values.message}`;
    
    const encodedMessage = encodeURIComponent(formattedMessage);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Quase lá!",
      description: "Abra o WhatsApp para finalizar o envio da sua mensagem.",
    })
    form.reset()
  }

  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="container grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-600">Visite o Instituto FOT</h2>
            <p className="text-muted-foreground">Estamos prontos para recebê-lo em nossa clínica.</p>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.332308882015!2d-38.4849098!3d-3.7341887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7581561555555%3A0x8073c6838a35606!2sR.%20Felipe%20Nery%2C%201012%20-%20Guararapes%2C%20Fortaleza%20-%20CE%2C%2060810-310!5e0!3m2!1spt-BR!2sbr!4v1694532824589!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand-500 mt-1" />
              <address className="not-italic text-muted-foreground">
                Rua Felipe Nery, 1012 - Guararapes<br />
                Fortaleza - CE, 60810-310
              </address>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-brand-500" />
              <a href="tel:8530378663" className="text-muted-foreground hover:text-brand-600 transition-colors">
                (85) 98119-1467
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-600">Não espere a dor piorar</h2>
            <p className="text-muted-foreground">
              Cada dia que você adia o tratamento, sua articulação pode estar perdendo mobilidade e força.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qual sua principal queixa?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: Dor no joelho ao caminhar, lesão no ombro, etc."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AppButton type="submit" size="lg" className="w-full">
                <MessageSquare className="w-5 h-5 mr-2" />
                Enviar
              </AppButton>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}