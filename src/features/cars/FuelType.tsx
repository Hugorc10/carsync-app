import MantineSelect from '@/components/MantineSelect'
import React from 'react'

export const FuelType = () => {
  return (
    <MantineSelect
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
  )
}
