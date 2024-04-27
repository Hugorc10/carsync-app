'use client'

import { Container, Divider } from '@mantine/core'
import Hero from './Hero'
// import Map from '@/components/Map'
import dynamic from 'next/dynamic'
import { Groups } from '../Groups'

const Lading = () => {
  const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
  })
  return (
    <>
      <Hero />
      <Container mt="-3rem" px="1rem" mb="2rem">
        {/* <Map /> */}
      </Container>
      {/* <Divider mb="xl" /> */}
      <Groups />
    </>
  )
}

export default Lading
