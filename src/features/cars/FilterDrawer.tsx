import { NavbarLogo } from '@/components/Navbar/NavbarLogo'
import { Button, Drawer, Flex, Space, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconFilterCog } from '@tabler/icons-react'
import { PriceRange } from './PriceRange'
import { ResetFiltersButton } from './ResetFiltersButton'
import { Transmission } from './Transmission'
import { YearModel } from './YearModel'
import SelectMantine from '@/components/SelectMantine'
import { carTypes } from '@/data'

export const FiltersDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={<NavbarLogo />}
        display={{ base: 'inline-block', md: 'none' }}
        position="top"
        size="xl"
        pt="100px"
        // without this prop, opening the drawer in prod will throw a client side exception
        transitionProps={{
          transition: 'slide-down',
        }}
      >
        <Flex align="center" justify="space-between">
          <Title order={4}>Filters</Title>
          <ResetFiltersButton />
        </Flex>

        <SelectMantine
          label="Classificação do carro"
          placeholder="Sedan"
          data={carTypes}
          required
          width="100%"
          nothingFoundMessage="Nada encontrado."
          maxDropdownHeight={280}
          // filter={optionsFilter}
        />
        <PriceRange />
        <YearModel />
        <Transmission />
        <Space my="lg" />
        <SelectMantine
          label="Tipo de combustível"
          placeholder="Gasolina"
          data={[
            { label: 'Gasolina', value: 'gasoline' },
            { label: 'Álcool', value: 'alcohol' },
            { label: 'Diesel', value: 'diesel' },
            { label: 'Flex', value: 'flex' },
            { label: 'Híbrido', value: 'hybrid' },
            { label: 'Elétrico', value: 'electric' },
          ]}
          maxDropdownHeight={280}
          nothingFoundMessage="Tipo de combustível não encontrado"
          width="100%"
        />
      </Drawer>

      <Button
        onClick={open}
        variant="subtle"
        display={{ base: 'inline-block', md: 'none' }}
      >
        <IconFilterCog size="14px" />{' '}
        <Text component="span" mx={2}>
          Abrir filtros
        </Text>
      </Button>
    </>
  )
}
