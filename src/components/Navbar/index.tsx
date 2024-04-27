'use client'

import { Box, Group, AppShell, Button } from '@mantine/core'
import classes from './style.module.css'
import { NavbarLogo } from './NavbarLogo'
import { AuthButtons } from './AuthButtons'
import { ThemeSwitcher } from './ThemeSwitcher'
import NavigationMobile from './NavigationMobile'

const Navbar = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md" mb="xl">
      <AppShell.Header className={classes.header}>
        <Box>
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
                  <Button
                    component="a"
                    href="/cars"
                    className=" py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Cars
                  </Button>
                </li>
                <li>
                  <Button
                    component="a"
                    href="/"
                    className=" py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features
                  </Button>
                </li>
                <li>
                  <Button
                    component="a"
                    href="/"
                    className="py-2 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Team
                  </Button>
                </li>
                <li>
                  <Button
                    component="a"
                    href="/"
                    className="py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
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
