import { Logo } from '@/components'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Main() {
  redirect('/auth/signin')

  return <></>
}

// Server-side first
