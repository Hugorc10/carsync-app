import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <h1>Auth</h1>
      {children}
    </div>
  )
}
