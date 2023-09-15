import './globals.css'

// Next
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Third-Party Libraries
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finns Ticket Marketplace',
  description: 'Ticket Reselling for Finns Beach Club',
  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen flex flex-col ${inter.className}`}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}

function Loading() {
  return (
    <div className='flex flex-col h-full'>
      <span className="loading loading-dots loading-lg text-primary"></span>
    </div>
  )
}