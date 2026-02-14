import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, contact, business, message } = body

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL

    if (!webhookUrl) {
      console.error("[v0] N8N_WEBHOOK_URL no esta configurada")
      return NextResponse.json(
        { error: "Servicio no disponible" },
        { status: 503 }
      )
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        contact,
        business: business || "No especificado",
        message,
        source: "LeadAIMind Portfolio",
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      console.error("[v0] n8n webhook error:", response.status)
      return NextResponse.json(
        { error: "Error al enviar el mensaje" },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
