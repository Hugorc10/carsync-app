'use client'

import { createClient } from '@/utils/supabase/client'
import { Session, User } from '@supabase/supabase-js'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface IUserSessionContext {
  user?: User
  session?: Session | null
}

export const UserSessionContext = createContext<IUserSessionContext>({})

interface UserSessionProviderProps {
  children: ReactNode
}

export const UserSessionContextProvider = ({
  children,
}: UserSessionProviderProps) => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | undefined>(undefined)

  const supabase = createClient()

  // This effect will run once when the component mounts
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session)
        setUser(session?.user)
      },
    )

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [supabase.auth])

  return (
    <UserSessionContext.Provider
      value={{
        user,
        session,
      }}
    >
      {children}
    </UserSessionContext.Provider>
  )
}

export const useUserSessionContext = () => {
  const context = useContext(UserSessionContext)
  if (context === undefined) {
    throw new Error(
      'useUserSession must be used within a UserSessionContextProvider',
    )
  }
  return context
}
