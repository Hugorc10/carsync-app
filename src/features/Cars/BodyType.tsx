'use client'

import SelectMantine from '@/components/SelectMantine'
import React from 'react'
import { carTypes } from '@/data'
// import { optionsFilter } from '@/utils/optionsFilter'

export const BodyType = () => {
  return (
    <SelectMantine
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
