'use client'

import { primaryGradient } from '@/themes'
import { Button, Group } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'

export const AuthButtons = () => {
  const smallScreen = useMediaQuery('(max-width: 991px)')

  return (
    <Group grow={smallScreen}>
      <Button component={Link} href="/login" variant="default">
        Log In
      </Button>
      <Button
        component={Link}
        href="/signup"
        variant="gradient"
        gradient={primaryGradient}
      >
        Inscrever-se
      </Button>
    </Group>
  )
}
