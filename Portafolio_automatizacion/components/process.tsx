import { Search, Workflow, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnostico",
    description:
      "Analizamos tus procesos actuales e identificamos las tareas repetitivas que consumen mas tiempo y recursos de tu equipo.",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Diseno y Desarrollo",
    description:
      "Creamos flujos automatizados con n8n personalizados para tu negocio. Cada solucion se adapta a tus herramientas existentes.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implementacion y Soporte",
    description:
      "Desplegamos la automatizacion, te capacitamos y te brindamos soporte continuo para asegurar que todo funcione perfecto.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Como Trabajamos
          </p>
          <h2 className="font-display text-balance text-3xl font-bold text-foreground sm:text-4xl">
            3 pasos hacia la automatizacion
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Un proceso simple y transparente para transformar tu negocio.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-20 hidden h-px bg-border md:block" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Step number + icon */}
              <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card">
                <step.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Arrow between steps (desktop) */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-[3.25rem] z-20 hidden -translate-y-1/2 translate-x-1/2 md:block">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              )}

              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                Paso {step.number}
              </span>
              <h3 className="font-display mb-3 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="max-w-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
