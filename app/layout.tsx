import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DBIT | Start Mining',
  description: 'DBIT is a decentralized mining protocol for Bitcoin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
