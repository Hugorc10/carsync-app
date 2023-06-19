import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <h1>Main </h1>
      <main>{children}</main>
    </div>
  )
}
