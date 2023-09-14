import './globals.css'

// Next
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Components
import { Footer, Header } from './components'

// Third-Party Libraries
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finns Ticket Marketplace',
  description: 'Ticket Reselling for Finns Beach Club'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png?<generated>" type="image/<generated>" sizes="<generated>" />

      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />

        <Toaster />
      </body>
    </html>
  )
}
