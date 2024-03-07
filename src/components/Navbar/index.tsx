import React from 'react'

import { Box, Group, Text } from '@mantine/core'
import classes from './style.module.css'
import { NavbarLogo } from './NavbarLogo'
import { AuthButtons } from './AuthButtons'
import { ThemeSwitcher } from './ThemeSwitcher'
import NavigationMobile from './NavigationMobile'

const Navbar = () => {
  return (
    <header>
      <Box className={classes.header}>
        <Group
          h="100%"
          justify="space-between"
          className="border-gray-200 shadow-md px-6 "
        >
          <NavbarLogo />
          <Box className="flex items-center">
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              CarSync
            </span> */}

            {/* <div> */}
            {/* <a
                href="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a> */}
            {/* </div> */}

            <ul className="flex flex-row space-x-8">
              <li>
                <Text
                  component="a"
                  href="/"
                  // c="white"
                  className="py-2 rounded"
                  aria-current="page"
                >
                  Home
                </Text>
              </li>
              <li>
                <Text component="a" href="/" className="py-2 rounded">
                  Empresa
                </Text>
              </li>
              <li>
                <Text
                  component="a"
                  href="/"
                  className=" py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Marketplace
                </Text>
              </li>
              <li>
                <Text
                  component="a"
                  href="/"
                  className=" py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </Text>
              </li>
              <li>
                <Text
                  component="a"
                  href="/"
                  className="py-2 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </Text>
              </li>
              <li>
                <Text
                  component="a"
                  href="/"
                  className="py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Text>
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
    </header>
  )
}

export default Navbar
