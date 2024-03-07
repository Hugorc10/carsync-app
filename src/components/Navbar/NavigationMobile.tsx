'use client'

import { Burger, Button, Drawer, Box, Center } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { AuthButtons } from './AuthButtons'
import { NavbarLogo } from './NavbarLogo'
import { ThemeSwitcher } from './ThemeSwitcher'

const NavigationMobile = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Drawer
        size="xs"
        opened={opened}
        onClose={close}
        title={<NavbarLogo />}
        transitionProps={{
          transition: 'slide-right',
        }}
      >
        <AuthButtons />

        <Center hiddenFrom="sm" pos="fixed" bottom={0} w="90%" py={8}>
          <ThemeSwitcher />
        </Center>
      </Drawer>

      {/* <Button onClick={open}>Open drawer</Button> */}
      <Burger
        opened={opened}
        onClick={opened ? close : open}
        aria-label="Toggle navigation"
      />
    </>
  )
}

export default NavigationMobile
