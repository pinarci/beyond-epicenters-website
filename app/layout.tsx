import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Beyond Epicenters - Horizon Europe MSCA Project',
  description: 'Assessing earthquake vulnerability through economic and social networks with systemic disaster risk modelling.',
  keywords: ['Horizon Europe', 'MSCA', 'Earthquake', 'Disaster Risk', 'Networks', 'Systemic Vulnerability'],
  openGraph: {
    title: 'Beyond Epicenters - Horizon Europe MSCA Project',
    description: 'Assessing Earthquake Vulnerability Through Economic and Social Networks',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
