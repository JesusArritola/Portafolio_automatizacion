import { ArrowRight, Bot, BarChart3, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-sm font-medium text-primary">
            Automatizacion con n8n + IA
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up animation-delay-200 font-display text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Eliminamos el{" "}
          <span className="text-primary">80% del trabajo</span>
          <br />
          repetitivo de tu negocio
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up animation-delay-400 mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Desde responder mensajes hasta generar reportes automaticos.
          Tu equipo se enfoca en crecer, no en tareas mecanicas.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contacto" className="flex items-center gap-2">
              Consulta gratuita
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
            <a href="#demos">Ver demos en accion</a>
          </Button>
        </div>

        {/* Stats or trust signals */}
        <div className="animate-fade-in-up animation-delay-800 mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">24/7</p>
              <p className="text-sm text-muted-foreground">Bots activos siempre</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">80%</p>
              <p className="text-sm text-muted-foreground">Menos tareas manuales</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Link2 className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">+50</p>
              <p className="text-sm text-muted-foreground">Apps conectadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
