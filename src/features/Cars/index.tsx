'use client'

import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Space,
  Title,
} from '@mantine/core'

import classes from './Styles.module.css'
import React, { useMemo } from 'react'
import SearchEngine from '@/components/SearchEngine'
import { IconBrandGoogleMaps } from '@tabler/icons-react'
// import Map from '@/components/Map'
import dynamic from 'next/dynamic'
import { ResetFiltersButton } from './ResetFiltersButton'
import { BodyType } from './BodyType'
import { PriceRange } from './PriceRange'
import { YearModel } from './YearModel'
import { Transmission } from './Transmission'
import { FuelType } from './FuelType'
import { CarList } from './CarList'
import { FiltersDrawer } from './FilterDrawer'

export const CarsLayout = () => {
  const Map = useMemo(
    () => dynamic(() => import('@/components/Map'), { ssr: false }),
    [],
  )

  return (
    <Container
      className={classes.parentContainer}
      size="xl"
      my="sm"
      py="md"
      mt="md"
    >
      <SearchEngine />
      {/* Search Engine */}

      <Flex justify="flex-end">
        <Button className={classes.mapToggle} variant="subtle" size="sm">
          <IconBrandGoogleMaps size="16px" />
          Mostrar Mapa
        </Button>
      </Flex>

      <Map height="200px" />

      <Flex
        direction={{ base: 'column', md: 'row' }}
        className={classes.container}
      >
        <Card w={{ base: '100%', md: '400px' }} mb="sm">
          <Flex align="center" justify="space-between">
            <Title order={4}>Filtros</Title>
            <Box display={{ base: 'none', md: 'inline-block' }}>
              <ResetFiltersButton />
            </Box>
            <FiltersDrawer />
          </Flex>

          <Divider my={16} display={{ base: 'none', md: 'block' }} />

          <Box display={{ base: 'none', md: 'block' }}>
            <BodyType />
            <PriceRange />
            <YearModel />
            <Transmission />
            <Space my="lg" />
            <FuelType />
          </Box>
        </Card>

        <CarList />
      </Flex>
    </Container>
  )
}
