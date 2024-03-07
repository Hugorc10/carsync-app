import { primaryGradient } from '@/themes'
import { Text } from '@mantine/core'
import Link from 'next/link'

export const NavbarLogo = () => {
  return (
    <Text
      fz="lg"
      fw="bold"
      variant="gradient"
      gradient={primaryGradient}
      component={Link}
      href="/"
    >
      CarSync
    </Text>
  )
}
