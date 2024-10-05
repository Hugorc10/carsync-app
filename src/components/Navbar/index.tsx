'use client'

import { Box, Group, AppShell, Button } from '@mantine/core'
import classes from './style.module.css'
import { NavbarLogo } from './NavbarLogo'
import { AuthButtons } from './AuthButtons'
import { ThemeSwitcher } from './ThemeSwitcher'
import NavigationMobile from './NavigationMobile'

const linkMockdata = [
  {
    link: '/home',
    label: 'Home',
  },
  {
    link: '/company',
    label: 'Empresa',
  },
  {
    link: '/cars',
    label: 'Carros',
  },
  {
    link: '/features',
    label: 'Features',
  },
  {
    link: '/team',
    label: 'Time',
  },
  {
    link: 'Contact',
    label: 'Contato',
  },
]

const Navbar = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md" mb="xl">
      <AppShell.Header className={classes.header}>
        <Box className="py-2">
          <Group
            h="100%"
            justify="space-between"
            // className="border-gray-200 shadow-md px-6 "
          >
            <NavbarLogo />
            <Box className="flex items-center">
              <ul className="flex flex-row space-x-8">
                <li>
                  <Button
                    component="a"
                    href="/"
                    // c="white"
                    className="py-2 rounded"
                    aria-current="page"
                  >
                    Home
                  </Button>
                </li>
                <li>
                  <Button component="a" href="/" className="py-2 rounded">
                    Empresa
                  </Button>
                </li>
                <li>
                  <Button component="a" href="/cars">
                    Cars
                  </Button>
                </li>
                <li>
                  <Button component="a" href="/">
                    Features
                  </Button>
                </li>
                <li>
                  <Button component="a" href="/">
                    Team
                  </Button>
                </li>
                <li>
                  <Button component="a" href="/">
                    Contact
                  </Button>
                </li>
              </ul>
            </Box>
            <Box visibleFrom="md">
              <AuthButtons />
            </Box>
            <Box visibleFrom="md">
              <ThemeSwitcher />
            </Box>
            <Box hiddenFrom="md">
              <NavigationMobile />
            </Box>
          </Group>
        </Box>
      </AppShell.Header>
    </AppShell>
  )
}

export default Navbar
