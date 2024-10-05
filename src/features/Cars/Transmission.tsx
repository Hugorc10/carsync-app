import { SegmentedControl, Text } from '@mantine/core'
import React from 'react'

const transmissionOptions = [
  { value: 'all', label: 'Ambos' },
  { value: 'automatic', label: 'Automático' },
  { value: 'manual', label: 'Manual' },
  { value: 'semiautomatic', label: 'Semi-Automático' },
]

export const Transmission = () => {
  return (
    <>
      <Text my={16}>Transmissão</Text>
      <SegmentedControl color="pink" radius="lg" data={transmissionOptions} />
    </>
  )
}
