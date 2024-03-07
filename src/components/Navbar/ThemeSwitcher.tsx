'use client'

import {
  Center,
  SegmentedControl,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

export const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    // <Group>
    <SegmentedControl
      value={colorScheme}
      onChange={(value) => setColorScheme(value as any)}
      data={[
        {
          value: 'light',
          label: (
            <Center>
              <IconSun size="1.2rem" stroke={1.5} />
              <Text ml="xs">Claro</Text>
            </Center>
          ),
        },
        {
          value: 'dark',
          label: (
            <Center>
              <IconMoon size="1.2rem" stroke={1.5} />
              <Text ml="xs">Escuro</Text>
            </Center>
          ),
        },
      ]}
    />
    // </Group>
  )
}
