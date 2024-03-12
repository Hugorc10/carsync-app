'use client'

import MantineSelect from '@/components/MantineSelect'
import React from 'react'
import { carTypes } from '@/data'
// import { optionsFilter } from '@/utils/optionsFilter'

export const BodyType = () => {
  return (
    <MantineSelect
      label="Tipo do carro"
      placeholder="Sedan"
      data={carTypes}
      required
      width="100%"
      nothingFoundMessage="Nada encontrado."
      maxDropdownHeight={280}
      // filter={optionsFilter}
    />
  )
}
