import '../styles/globals.css'
import { ReactNode } from 'react'
// import { Dosis, Inter } from 'next/font/google'
import { Metadata } from 'next'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Navbar } from '@/components'

// const dosis = Dosis({ subsets: ['latin'], variable: '--font-dosis' })
// const inter = Inter({ subsets: ['latin-ext'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'CarSync',
  description: 'Sistema de gerenciamento de veículos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      {/* <body className={`${dosis.variable} ${inter.variable}`}> */}
      <body>
        {/* <Navbar /> */}
        {/* <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main> */}

        {/* <Footer /> */}
        <MantineProvider>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
