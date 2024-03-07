import { Select } from '@mantine/core'
import { ReactNode } from 'react'

interface Props {
  label?: ReactNode
  placeholder?: string
  data: string[]
  nothingFoundMessage?: ReactNode
}

const SelectSearch = ({
  label,
  placeholder,
  data,
  nothingFoundMessage,
}: Props) => {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      searchable
      nothingFoundMessage={nothingFoundMessage}
    ></Select>
  )
}

export default SelectSearch
