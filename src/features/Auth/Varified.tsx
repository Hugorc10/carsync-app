import { Alert, Button, Flex } from '@mantine/core'
import Link from 'next/link'

export const Verified = () => {
  return (
    <Flex>
      <Alert
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

      <Button radius="xl" component={Link} href="/login">
        Login
      </Button>
    </Flex>
  )
}
