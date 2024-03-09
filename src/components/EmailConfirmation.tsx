import { Flex, Alert, Button, Space, Text } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import Link from 'next/link'

interface EmailConfirmationProps {
  email: string
}

export const EmailConfirmation = ({ email }: EmailConfirmationProps) => {
  return (
    <Flex
      maw="600px"
      mx="auto"
      px="md"
      mih="400px"
      justify="center"
      direction="column"
      align="center"
    >
      <Alert
        icon={<IconAlertCircle size={20} />}
        title="Confirme seu cadastro"
        color="cyan"
      >
        Link de confirmação enviado para o seu email
        <Text component="span" fw="bold">
          {email || 'email@exemplo.com'}
        </Text>
        por favor, clique no link enviado para confirmar seu cadastro.
        <Space my="md" />
        <Button component={Link} href="/auth/signin" my="md">
          Login
        </Button>
      </Alert>
    </Flex>
  )
}
