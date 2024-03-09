// 'use server'

// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { AuthResponse } from '@supabase/supabase-js'

export const signupWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const supabase = createClient()

  const res = await supabase.auth.signUp({ email, password })

  return res
}

export const signinWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const supabase = createClient()

  const res = await supabase.auth.signInWithPassword({ email, password })

  return res
}

export const signout = async () => {
  const supabase = createClient()

  const res = await supabase.auth.signOut()

  return res
}
