"use client"

import { useEffect, useState } from "react"
import {
  MessageSquare,
  Database,
  Bell,
  CheckCircle2,
  ShoppingCart,
  Mail,
  Users,
  BarChart3,
  Clock,
  AlertTriangle,
  FileText,
  Send,
  UserCheck,
  Globe,
} from "lucide-react"

/* ───── types ───── */
interface WorkflowNode {
  id: string
  label: string
  icon: React.ElementType
  x: number
  y: number
  color: string
}

interface WorkflowConnection {
  from: string
  to: string
}

interface WorkflowDiagramProps {
  variant: "bot" | "report" | "form"
}

/* ───── flow definitions ───── */
const flows: Record<
  string,
  { nodes: WorkflowNode[]; connections: WorkflowConnection[] }
> = {
  bot: {
    nodes: [
      { id: "trigger", label: "Telegram Bot", icon: Send, x: 40, y: 90, color: "#0088cc" },
      { id: "parse", label: "Interpretar Mensaje", icon: MessageSquare, x: 220, y: 40, color: "#0d9488" },
      { id: "menu", label: "Consultar Menu", icon: Database, x: 220, y: 140, color: "#2563eb" },
      { id: "order", label: "Crear Pedido", icon: ShoppingCart, x: 400, y: 40, color: "#ea580c" },
      { id: "confirm", label: "Confirmar Cliente", icon: CheckCircle2, x: 400, y: 140, color: "#16a34a" },
      { id: "notify", label: "Notificar Dueño", icon: Bell, x: 560, y: 90, color: "#eab308" },
    ],
    connections: [
      { from: "trigger", to: "parse" },
      { from: "trigger", to: "menu" },
      { from: "parse", to: "order" },
      { from: "menu", to: "confirm" },
      { from: "order", to: "notify" },
      { from: "confirm", to: "notify" },
    ],
  },
  report: {
    nodes: [
      { id: "cron", label: "Cron Lunes 8AM", icon: Clock, x: 40, y: 90, color: "#9333ea" },
      { id: "query", label: "Consultar Ventas", icon: Database, x: 200, y: 40, color: "#2563eb" },
      { id: "stock", label: "Revisar Stock", icon: AlertTriangle, x: 200, y: 140, color: "#ea580c" },
      { id: "chart", label: "Generar Graficos", icon: BarChart3, x: 380, y: 40, color: "#0d9488" },
      { id: "alert", label: "Alertas Stock Bajo", icon: Bell, x: 380, y: 140, color: "#eab308" },
      { id: "email", label: "Enviar Email", icon: Mail, x: 560, y: 90, color: "#16a34a" },
    ],
    connections: [
      { from: "cron", to: "query" },
      { from: "cron", to: "stock" },
      { from: "query", to: "chart" },
      { from: "stock", to: "alert" },
      { from: "chart", to: "email" },
      { from: "alert", to: "email" },
    ],
  },
  form: {
    nodes: [
      { id: "form", label: "Formulario Web", icon: Globe, x: 40, y: 90, color: "#9333ea" },
      { id: "db", label: "Guardar en BD", icon: Database, x: 200, y: 40, color: "#2563eb" },
      { id: "file", label: "Adjuntar Ficha", icon: FileText, x: 200, y: 140, color: "#ea580c" },
      { id: "notify", label: "Notificar Equipo", icon: Send, x: 380, y: 40, color: "#eab308" },
      { id: "automail", label: "Email Confirmacion", icon: Mail, x: 380, y: 140, color: "#0d9488" },
      { id: "assign", label: "Asignar Vendedor", icon: UserCheck, x: 560, y: 90, color: "#16a34a" },
    ],
    connections: [
      { from: "form", to: "db" },
      { from: "form", to: "file" },
      { from: "db", to: "notify" },
      { from: "file", to: "automail" },
      { from: "notify", to: "assign" },
      { from: "automail", to: "assign" },
    ],
  },
}

/* ───── helpers ───── */
function getCenter(node: WorkflowNode) {
  return { cx: node.x + 60, cy: node.y + 26 }
}

/* ───── component ───── */
export function WorkflowDiagram({ variant }: WorkflowDiagramProps) {
  const { nodes, connections } = flows[variant]
  const [activeIdx, setActiveIdx] = useState(-1)

  useEffect(() => {
    let i = -1
    const id = setInterval(() => {
      i = (i + 1) % (nodes.length + 2)
      setActiveIdx(i)
    }, 900)
    return () => clearInterval(id)
  }, [nodes.length])

  const isNodeActive = (idx: number) => idx <= activeIdx

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border/40 bg-[hsl(220,20%,5%)]">
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-border/30 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[hsl(43,74%,66%)]/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
        <span className="ml-3 text-xs text-muted-foreground">n8n workflow</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Ejecutando
        </span>
      </div>

      {/* Canvas */}
      <div className="relative px-2 py-4" style={{ minHeight: 210 }}>
        {/* SVG connections */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 640 210"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <defs>
            <marker
              id={`arrow-${variant}`}
              markerWidth="8"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L8,3 L0,6" fill="hsl(172,66%,50%)" opacity="0.5" />
            </marker>
            <marker
              id={`arrow-active-${variant}`}
              markerWidth="8"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L8,3 L0,6" fill="hsl(172,66%,50%)" />
            </marker>
          </defs>

          {connections.map((conn) => {
            const fromNode = nodes.find((n) => n.id === conn.from)!
            const toNode = nodes.find((n) => n.id === conn.to)!
            const from = getCenter(fromNode)
            const to = getCenter(toNode)

            const fromIdx = nodes.indexOf(fromNode)
            const toIdx = nodes.indexOf(toNode)
            const active = isNodeActive(fromIdx) && isNodeActive(toIdx)

            const midX = (from.cx + to.cx) / 2

            return (
              <path
                key={`${conn.from}-${conn.to}`}
                d={`M${from.cx},${from.cy} C${midX},${from.cy} ${midX},${to.cy} ${to.cx},${to.cy}`}
                stroke={active ? "hsl(172,66%,50%)" : "hsl(220,14%,20%)"}
                strokeWidth={active ? 2 : 1.2}
                strokeDasharray={active ? "none" : "4 4"}
                markerEnd={`url(#${active ? `arrow-active-${variant}` : `arrow-${variant}`})`}
                className="transition-all duration-500"
              />
            )
          })}
        </svg>

        {/* Nodes */}
        <div className="relative" style={{ minHeight: 190 }}>
          {nodes.map((node, idx) => {
            const active = isNodeActive(idx)
            const Icon = node.icon
            return (
              <div
                key={node.id}
                className="absolute flex flex-col items-center transition-all duration-500"
                style={{
                  left: `calc(${(node.x / 640) * 100}%)`,
                  top: node.y,
                  width: 120,
                  opacity: active ? 1 : 0.35,
                  transform: active ? "scale(1)" : "scale(0.92)",
                }}
              >
                {/* node box */}
                <div
                  className="relative flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] font-medium leading-tight shadow-lg transition-all duration-500"
                  style={{
                    borderColor: active ? node.color : "hsl(220,14%,18%)",
                    background: active
                      ? `linear-gradient(135deg, ${node.color}18, ${node.color}08)`
                      : "hsl(220,18%,7%)",
                    color: active ? "hsl(210,20%,95%)" : "hsl(215,15%,45%)",
                    boxShadow: active ? `0 0 20px ${node.color}20` : "none",
                  }}
                >
                  <Icon
                    className="h-4 w-4 shrink-0"
                    style={{ color: active ? node.color : "hsl(215,15%,35%)" }}
                  />
                  <span className="whitespace-nowrap">{node.label}</span>

                  {/* pulsing dot */}
                  {active && idx === activeIdx && (
                    <span
                      className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-ping rounded-full"
                      style={{ background: node.color }}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer execution count */}
      <div className="flex items-center justify-between border-t border-border/30 px-4 py-2">
        <span className="text-[10px] text-muted-foreground">
          {Math.min(activeIdx + 1, nodes.length)}/{nodes.length} nodos ejecutados
        </span>
        <span className="text-[10px] text-muted-foreground">
          Tiempo: {Math.min(activeIdx + 1, nodes.length) * 0.3}s
        </span>
      </div>
    </div>
  )
}
