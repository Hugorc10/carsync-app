'use client'

import { primaryGradient } from '@/themes'
import { Button, Group } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useUserSessionContext } from '@/context/userSessionContext'
import { ProfileMenu } from '../ProfileMenu'

const excludedPaths = ['/auth/signin', '/auth/signup']

export const AuthButtons = () => {
  const smallScreen = useMediaQuery('(max-width: 991px)')
  const pathname = usePathname()
  const { session } = useUserSessionContext()

  return (
    <>
      {' '}
      {!excludedPaths.includes(pathname as string) && (
        <Group grow={smallScreen}>
          {session ? (
            <ProfileMenu />
          ) : (
            <>
              <Button component={Link} href="/auth/signin" variant="default">
                Log In
              </Button>
              <Button
                component={Link}
                href="/auth/signup"
                variant="gradient"
                gradient={primaryGradient}
              >
                Inscrever-se
              </Button>
            </>
          )}
        </Group>
      )}
    </>
  )
}
