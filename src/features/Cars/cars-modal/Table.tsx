import { Table, TableData } from '@mantine/core'

function ModalTable({ data }: { data: Array<any> }) {
  const rows = data?.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>Teste 1</Table.Td>
      <Table.Td>Teste 2</Table.Td>
      <Table.Td>Teste 3</Table.Td>
      <Table.Td>Teste 4</Table.Td>
    </Table.Tr>
  ))

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export default ModalTable
