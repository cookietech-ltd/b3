import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import CustomCursor from './components/CustomCursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'B³ Solutions | Operational Clarity',
  description: 'Turning operational pressure into clarity and momentum for service businesses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-900 bg-white selection:bg-teal-100 selection:text-teal-900`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
