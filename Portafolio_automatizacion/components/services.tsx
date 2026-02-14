import { Bot, BarChart3, Link2, Bell } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Bot de Atencion al Cliente",
    description:
      "Responde automaticamente preguntas frecuentes, toma pedidos y escala a humanos solo cuando es necesario. Disponible 24/7 en Telegram o tu web.",
    features: ["Respuestas inteligentes", "Toma de pedidos", "Escalado a humano"],
  },
  {
    icon: BarChart3,
    title: "Reportes Automaticos",
    description:
      "Envia reportes de ventas, inventario o metricas clave por email o Telegram en horarios programados. Sin tocar un boton.",
    features: ["Ventas diarias", "Stock bajo", "Metricas clave"],
  },
  {
    icon: Link2,
    title: "Integracion de Sistemas",
    description:
      "Conecta Excel, Google Forms, Telegram y otras herramientas para que trabajen en conjunto automaticamente sin intervencion manual.",
    features: ["Excel + Telegram", "Forms + BD", "APIs externas"],
  },
  {
    icon: Bell,
    title: "Flujos de Notificacion",
    description:
      "Alertas automaticas cuando ocurren eventos importantes: stock bajo, pago recibido, nueva solicitud, pedido completado y mas.",
    features: ["Stock bajo", "Pagos recibidos", "Nuevas solicitudes"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestros Servicios
          </p>
          <h2 className="font-display text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {"Que podemos automatizar para ti?"}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Cada solucion se adapta a tu negocio. Sin plantillas genericas.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
            >
              {/* Glow on hover */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="font-display mb-3 text-xl font-bold text-foreground">
                  {service.title}
                </h3>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
