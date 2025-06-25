import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Attique Sahito',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/titlelogo.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
