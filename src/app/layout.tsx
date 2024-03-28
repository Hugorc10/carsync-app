// 'use client'

import '../styles/globals.css'
import { ReactNode } from 'react'
// import { Dosis, Inter } from 'next/font/google'
import { Metadata } from 'next'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Navbar } from '@/components'
import { UserSessionContextProvider } from '@/context/userSessionContext'
import { ToastContainer } from 'react-toastify'
import { ReactQueryProvider } from './queryProvider'
import { StoreProvider } from './StoreProvider'
import { AppContextProvider } from '@/context/AppContext'

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
        <StoreProvider>
          <ReactQueryProvider>
            <MantineProvider>
              <AppContextProvider>
                <UserSessionContextProvider>
                  <Navbar />
                  {children}
                  <ToastContainer />
                </UserSessionContextProvider>
              </AppContextProvider>
            </MantineProvider>
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
