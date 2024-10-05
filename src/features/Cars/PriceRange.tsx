import React from 'react'
import { Box, Flex, NumberInput, RangeSlider, Text } from '@mantine/core'

const lowestPrice = 0
const highestPrice = 100000

export const PriceRange = () => {
  return (
    <>
      <Text my={16}>Faixa de preço</Text>
      <RangeSlider
        py="xl"
        step={10}
        min={lowestPrice}
        max={highestPrice}
        labelAlwaysOn
        label={(value) => `R$ ${value}`}
        thumbSize={12}
        color="pink"
      />
      <Flex gap={8}>
        <Box>
          <Text size="xs">Min.</Text>
          <NumberInput
            step={10}
            min={lowestPrice}
            max={highestPrice}
            defaultValue={lowestPrice}
          />
        </Box>
        <Box>
          <Text size="xs">Max.</Text>
          <NumberInput
            step={10}
            min={lowestPrice}
            max={highestPrice}
            defaultValue={highestPrice}
          />
        </Box>
      </Flex>
    </>
  )
}
