import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beyond Epicenters - Horizon Europe MSCA Project',
  description: 'Assessing Earthquake Vulnerability Through Economic and Social Networks - A Holistic and Systemic Approach to Disaster Risk',
  keywords: ['Horizon Europe', 'MSCA', 'Earthquake', 'Disaster Risk', 'Networks'],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
