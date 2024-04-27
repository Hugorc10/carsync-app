import React from 'react'
import { Modal, Text } from '@mantine/core'

interface CardModalProps {
  opened: boolean
  onClose: () => void
  title: string
}

export const CardModal = ({ opened, onClose, title }: CardModalProps) => {
  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      <Text size="md" c="black" fw="bold">
        PIDs
      </Text>
      <Text>
        <b>Nome:</b> Teste
      </Text>
      <Text>Ola</Text>
      <Text>
        <b>Nome:</b> Teste
      </Text>
      Teste
    </Modal>
  )
}
