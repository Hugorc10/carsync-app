'use client'

import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'

import Link from 'next/link'

import classes from './Auth.module.css'
import { GoogleButton } from './GoogleButton'
import { useLoginForm } from '@/hooks/useLoginForm'
import { signinWithEmailAndPassword } from '@/services/auth.service'
import { useState } from 'react'
import { AuthAlert } from './AuthAlert'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const errorMessage = 'Invalid login credentials'

const Login = (props: PaperProps) => {
  const [notRegistered, setNotRegistered] = useState(false)
  const [notVerified, setNotVerified] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const loginForm = useLoginForm()
  const { push } = useRouter()

  const handleLogin = async () => {
    const { email, password } = loginForm.values

    setIsSubmitting(true)
    const { error, data } = await signinWithEmailAndPassword(email, password)
    setIsSubmitting(false)

    // const error = JSON.parse(JSON.stringify(error))

    if (error && error.message === errorMessage) {
      console.error(error)
      setNotRegistered(true)
    } else {
      if (data.user == null || data.session == null) {
        setNotVerified(true)
        console.log(error)
      }

      loginForm.reset()
      push('/')
      toast.success('Login feito com sucesso!', {
        position: 'top-center',
      })
      console.log('Login successful')
    }
  }

  return (
    <Box px="md" py="xl">
      <Paper className={classes.formPaper} withBorder {...props}>
        <LoadingOverlay
          visible={isSubmitting}
          overlayProps={{ radius: 'sm', blur: 2 }}
        />
        <Text size="lg" fw={500}>
          Bem vindo de volta,
        </Text>
        <GoogleButton />
        <Divider
          label="Ou continue com o email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={loginForm.onSubmit(() => handleLogin())}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@cargo.com"
              radius="md"
              value={loginForm.values.email}
              onChange={(event) =>
                loginForm.setFieldValue('email', event.currentTarget.value)
              }
              error={loginForm.errors.email && loginForm.errors.email}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              radius="md"
              value={loginForm.values.password}
              onChange={(event) =>
                loginForm.setFieldValue('password', event.currentTarget.value)
              }
              error={loginForm.errors.password && loginForm.errors.password}
            />
          </Stack>

          {notRegistered && (
            <AuthAlert
              title="Usuário não encontrado"
              color="red"
              text="Desculpe, mas as credenciais de login estão incorretas."
            />
          )}
          {notVerified && (
            <AuthAlert
              title="Usuário não verificado"
              color="orange"
              text="Desculpe. Você não está autorizado a logar. Por favor confirme seu email e tente novamente."
            />
          )}

          <Group justify="space-between" mt="xl">
            <Anchor
              component={Link}
              href="/auth/signup"
              type="button"
              c="dimmed"
              size="xs"
            >
              Não tem uma conta? Registre-se.
            </Anchor>
            <Button type="submit" radius="xl">
              Login
            </Button>
          </Group>

          <Group mt="xl">
            <Anchor
              component={Link}
              href="/providers"
              type="button"
              c="dimmed"
              size="xs"
            >
              Quer cadastrar sua empresa? Saiba mais
            </Anchor>
          </Group>
        </form>
      </Paper>
    </Box>
  )
}

export default Login
