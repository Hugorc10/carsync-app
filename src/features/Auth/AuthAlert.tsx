import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import { ReactNode } from 'react'

interface AuthAlertProps {
  title: string
  color: string
  text: ReactNode
}

export const AuthAlert = ({ title, color, text }: AuthAlertProps) => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title={title}
      color={color}
      my="sm"
    >
      {text}
    </Alert>
  )
}
