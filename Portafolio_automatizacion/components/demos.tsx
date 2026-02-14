import { MessageSquare, BarChart3, FileText } from "lucide-react"
import { WorkflowDiagram } from "@/components/workflow-diagram"

const demos = [
  {
    icon: MessageSquare,
    title: "Bot para Restaurante",
    description:
      "Toma pedidos automaticamente, confirma disponibilidad y envia el total al dueño. Reduce 80% del tiempo de atencion.",
    chat: [
      { role: "client" as const, text: "Quiero una pizza grande" },
      { role: "bot" as const, text: "Perfecto, pizza grande. De que ingredientes?" },
      { role: "client" as const, text: "Pepperoni" },
      { role: "bot" as const, text: "Pizza grande de pepperoni. Para recoger o delivery?" },
      { role: "client" as const, text: "Delivery" },
      { role: "bot" as const, text: "Pedido confirmado #1234. Total: $15. Tiempo estimado: 30 min." },
    ],
    workflow: "bot" as const,
  },
  {
    icon: BarChart3,
    title: "Reportes de Ventas Automaticos",
    description:
      "Cada lunes 8 AM, el gerente recibe automaticamente un resumen de la semana con graficos y alertas de stock.",
    chat: [
      { role: "bot" as const, text: "Reporte semanal - Restaurante El Buen Sabor" },
      { role: "bot" as const, text: "Ventas totales: $12,450 (+15% vs semana anterior)" },
      { role: "bot" as const, text: "Top 3: Pizza Pepperoni, Hamburguesa Clasica, Ensalada Caesar" },
      { role: "bot" as const, text: "ALERTA: Stock bajo en queso mozzarella (2 dias)" },
      { role: "bot" as const, text: "Proximo reporte: Lunes 8:00 AM" },
    ],
    workflow: "report" as const,
  },
  {
    icon: FileText,
    title: "Formulario Inteligente",
    description:
      "Formulario de contacto que guarda en base de datos, notifica al dueño al instante y responde al cliente confirmando recepcion.",
    chat: [
      { role: "client" as const, text: "Formulario enviado: Juan Garcia - Restaurante" },
      { role: "bot" as const, text: "Datos guardados en base de datos" },
      { role: "bot" as const, text: "Notificacion enviada al equipo de ventas" },
      { role: "bot" as const, text: "Email de confirmacion enviado a Juan Garcia" },
      { role: "bot" as const, text: "Lead asignado a Carlos (vendedor disponible)" },
    ],
    workflow: "form" as const,
  },
]

export function Demos() {
  return (
    <section id="demos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Demos en Accion
          </p>
          <h2 className="font-display text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Mira como funciona en la practica
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Estos son ejemplos reales de flujos automatizados con n8n.
          </p>
        </div>

        {/* Demos */}
        <div className="flex flex-col gap-16">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className={`flex flex-col items-center gap-8 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Chat simulation */}
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
                  {/* Chat header */}
                  <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/50 px-6 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <demo.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{demo.title}</p>
                      <p className="text-xs text-muted-foreground">Flujo automatizado con n8n</p>
                    </div>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-primary">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                      Activo
                    </span>
                  </div>
                  {/* Messages */}
                  <div className="flex flex-col gap-3 p-6">
                    {demo.chat.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.role === "client" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                            msg.role === "client"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex w-full flex-col lg:w-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <demo.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display mt-4 text-2xl font-bold text-foreground">
                  {demo.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {demo.description}
                </p>
                <div className="mt-6">
                  <WorkflowDiagram variant={demo.workflow} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
