'use client'

import { optionsFilter } from '@/utils/optionsFilter'
import { Select, SelectProps } from '@mantine/core'
import { ReactNode } from 'react'

interface Props extends SelectProps {
  label?: ReactNode
  placeholder?: string
  // data: { label: string; value: string }[]
  required?: boolean
}

const MantineSelect = ({
  label,
  placeholder,
  data,
  required,
  ...restProps
}: Props) => {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      searchable
      required={required}
      filter={optionsFilter}
      {...restProps}
    ></Select>
  )
}

export default MantineSelect
