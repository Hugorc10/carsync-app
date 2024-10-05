import React from 'react'
import { Modal, Text, TableData } from '@mantine/core'
import ModalTable from './Table'

interface CardModalProps {
  opened: boolean
  onClose: () => void
  title: string
}

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
]

export const CardModal = ({ opened, onClose, title }: CardModalProps) => {
  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      {/* <Text size="md" c="black" fw="bold">
        PIDs
      </Text>
      <Text>
        <b>Nome:</b> Teste
      </Text>
      <Text>Ola</Text>
      <Text>
        <b>Nome:</b> Teste
      </Text>
      Teste */}

      <ModalTable data={elements} />
    </Modal>
  )
}
