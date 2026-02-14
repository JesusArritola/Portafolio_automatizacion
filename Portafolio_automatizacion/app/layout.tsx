import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'LeadAIMind | Automatizacion Inteligente para Negocios',
  description: 'Eliminamos el 80% del trabajo repetitivo de tu negocio con automatizacion inteligente. Bots, reportes automaticos, integracion de sistemas y flujos de notificacion.',
  keywords: ['automatizacion', 'n8n', 'bots', 'integracion', 'reportes automaticos', 'LeadAIMind'],
  openGraph: {
    title: 'LeadAIMind | Automatizacion Inteligente para Negocios',
    description: 'Libera tiempo de tu equipo con automatizacion de procesos.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0d9488',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
