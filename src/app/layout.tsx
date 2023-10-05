import '../styles/globals.css'
import { ReactNode } from 'react'
import { Dosis, Inter } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'], variable: '--font-dosis' })
const inter = Inter({ subsets: ['latin-ext'], variable: '--font-inter' })

export const metadata = {
  title: 'CarSync',
  description: 'Sistema de gerenciamento de veículos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${dosis.variable} ${inter.variable}`}>
        {/* <Navbar /> */}
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  )
}
