import { RangeSlider, Text } from '@mantine/core'
import React from 'react'

const currentYear = new Date().getFullYear()

export const YearModel = () => {
  return (
    <>
      <Text my={16}>Ano</Text>
      <RangeSlider
        py="xl"
        step={1}
        min={1990}
        max={currentYear}
        labelAlwaysOn
        thumbSize={12}
        color="pink"
      />
    </>
  )
}
