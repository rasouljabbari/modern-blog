import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@comp/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Blog',
  description: 'Generated by Rasoul Jabbari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' space-y-4 md:space-y-8'}>
        <Navbar/>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  )
}
