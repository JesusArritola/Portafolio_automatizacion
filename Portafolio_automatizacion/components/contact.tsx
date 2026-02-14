"use client"

import { useState } from "react"
import { Send, Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      contact: formData.get("contact") as string,
      business: formData.get("business") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const result = await res.json()
        throw new Error(result.error || "Error al enviar")
      }

      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo enviar. Intenta por Telegram."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border/50 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Info */}
            <div className="flex flex-col justify-center bg-secondary/30 p-8 lg:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Contacto
              </p>
              <h2 className="font-display text-balance text-3xl font-bold text-foreground sm:text-4xl">
                Empecemos tu automatizacion
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Cuentanos que proceso quieres automatizar y te enviamos una
                propuesta personalizada sin compromiso.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                <a
                  href="https://t.me/LeadAIMind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telegram</p>
                    <p className="text-sm text-muted-foreground">Respuesta en menos de 24h</p>
                  </div>
                </a>

                <a
                  href="mailto:contacto@leadaimind.com"
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">contacto@leadaimind.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="p-8 lg:p-12">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-bold text-foreground">
                    Mensaje enviado
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Te responderemos en menos de 24 horas con una propuesta
                    personalizada.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-border text-foreground"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Consulta gratuita
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Llena el formulario y te contactamos.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-foreground">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact" className="text-foreground">Email o Telegram</Label>
                    <Input
                      id="contact"
                      name="contact"
                      required
                      placeholder="correo@ejemplo.com o +53..."
                      className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="business" className="text-foreground">Tipo de negocio</Label>
                    <Input
                      id="business"
                      name="business"
                      placeholder="Restaurante, tienda, consultorio..."
                      className="border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-foreground">
                      {"Que proceso quieres automatizar?"}
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe brevemente que tareas repetitivas quieres eliminar..."
                      className="flex w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar consulta
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
