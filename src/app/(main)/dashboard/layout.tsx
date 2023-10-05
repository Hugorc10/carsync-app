import { Footer, Hero, Navbar } from '@/components'
import { SideBar } from '@/components/SideBar'
import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      {/* <body> */}
      <Navbar />
      <SideBar />

      <Hero />
      <div>{children}</div>

      <Footer />
      {/* </body> */}
    </div>
  )
}
