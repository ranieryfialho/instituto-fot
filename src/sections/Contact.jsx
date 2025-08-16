"use client" 

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { AppButton } from "@/components/common/AppButton"
import { SectionTitle } from "@/components/common/SectionTitle"
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
import { useToast } from "@/hooks/use-toast";

// Schema de validação do formulário
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

  // Função chamada no envio do formulário
  function onSubmit(values) {
    console.log("Dados do formulário:", values)
    toast({
      title: "Mensagem Enviada! ✅",
      description: "Recebemos seu contato e responderemos em breve.",
    })
    form.reset()
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container grid lg:grid-cols-2 gap-16 items-start">
        {/* Coluna do Mapa */}
        <div>
          <SectionTitle title="Visite o Instituto F.O.T." />
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.332362590211!2d-38.48395182449079!3d-3.738670144410668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7461971431671%3A0x4a37f596317b209e!2sR.%20Felipe%20Nery%2C%201012%20-%20Guararapes%2C%20Fortaleza%20-%20CE%2C%2060810-020!5e0!3m2!1spt-BR!2sbr!4v1723814881261!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Coluna do Formulário */}
        <div>
          <SectionTitle title="Entre em contato conosco" />
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
                    <FormLabel>Envie sua dúvida</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite sua mensagem aqui..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AppButton type="submit" size="lg" className="w-full">
                Enviar
              </AppButton>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}