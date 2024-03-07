'use client'

import { Container } from '@mantine/core'
import Hero from './Hero'
// import Map from '@/components/Map'
import dynamic from 'next/dynamic'

const Lading = () => {
  const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
  })
  return (
    <>
      <Hero />
      <Container mt="-3rem" px="1rem" mb="2rem">
        <Map />
      </Container>
    </>
  )
}

export default Lading
