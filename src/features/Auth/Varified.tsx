import { Alert, Button, Divider, Flex } from '@mantine/core'
import { IconChecks } from '@tabler/icons-react'
import Link from 'next/link'

export const Verified = () => {
  return (
    <Flex>
      <Alert
        icon={<IconChecks size="1rem" />}
        color="green"
        title="Usuário verificado."
        w={{
          xs: '100%',
          sm: '50%',
          md: '25%',
          lg: '20%',
          xl: '15%',
        }}
      >
        Sua conta foi verificada com sucesso.
      </Alert>
      <Divider my="lg" />

      <Button radius="xl" component={Link} href="/auth/signin">
        Login
      </Button>
    </Flex>
  )
}
