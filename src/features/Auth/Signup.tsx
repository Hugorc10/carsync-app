// 'use client'

import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import classes from './Auth.module.css'
import { NavbarLogo } from '@/components/Navbar/NavbarLogo'
import { GoogleButton } from './GoogleButton'
import Link from 'next/link'
import { useSignupForm } from '@/hooks/useSignupForm'
import { signupWithEmailAndPassword } from '@/services/auth.service'
import { useState } from 'react'
import { EmailConfirmation } from '@/components/EmailConfirmation'
import { toast } from 'react-toastify'

export function Signup() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const signupForm = useSignupForm()

  const handleSubmit = async () => {
    console.log('Form submitted')

    const { email, password, confirmPassword, terms } = signupForm.values

    const { error } = await signupWithEmailAndPassword(email, password)

    if (error) {
      console.error(error)
      setIsSubmitting(true)
      toast.error('Erro ao cadastrar', {
        position: 'top-center',
      })
    } else {
      console.log('User signed up successfully')
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success('Cadastro feito com sucesso!', {
        position: 'top-center',
      })
    }
  }

  return (
    <>
      {isSubmitted ? (
        <EmailConfirmation email={signupForm.values.email} />
      ) : (
        <>
          <LoadingOverlay
            visible={isSubmitting}
            overlayProps={{ radius: 'sm', blur: 2 }}
          />
          <Box px="md" py="xl">
            <Paper className={classes.formPaper} withBorder>
              <Text size="lg" fw={500}>
                Bem vindo <NavbarLogo />
              </Text>
              <GoogleButton />
              <Divider
                label="Ou continue com o email"
                labelPosition="center"
                my="lg"
              />

              <form onSubmit={signupForm.onSubmit(() => handleSubmit())}>
                <Stack>
                  <TextInput
                    required
                    label="Email"
                    placeholder="hugorc10@gmail.com"
                    value={signupForm.values.email}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        'email',
                        event.currentTarget.value,
                      )
                    }
                    error={
                      signupForm.errors.email || signupForm.errors.emailExists
                    }
                  />

                  <PasswordInput
                    required
                    label="Senha"
                    placeholder="Sua senha"
                    value={signupForm.values.password}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        'password',
                        event.currentTarget.value,
                      )
                    }
                    error={
                      signupForm.errors.password ||
                      signupForm.errors.passwordMatch
                    }
                  />

                  <PasswordInput
                    required
                    label="Confirme a senha"
                    placeholder="Confirme sua senha"
                    value={signupForm.values.confirmPassword}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        'confirmPassword',
                        event.currentTarget.value,
                      )
                    }
                    error={
                      signupForm.errors.confirmPassword ||
                      signupForm.errors.passwordMatch
                    }
                  />

                  <Checkbox
                    label="Eu aceito os termos de uso"
                    checked={signupForm.values.terms}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        'terms',
                        event.currentTarget.checked,
                      )
                    }
                    error={signupForm.errors.terms}
                  />
                </Stack>

                <Group justify="space-between" mt="xl">
                  <Anchor
                    component={Link}
                    href="/login"
                    type="button"
                    c="dimmed"
                    size="xs"
                  >
                    Já tem uma conta? Faça login
                  </Anchor>
                  <Button type="submit" variant="light">
                    Cadastrar
                  </Button>
                </Group>
              </form>

              <Group mt="xl">
                <Anchor
                  component={Link}
                  href="/providers"
                  type="button"
                  c="dimmed"
                  size="xs"
                >
                  Quer cadastrar sua empresa? Clique aqui
                </Anchor>
              </Group>
            </Paper>
          </Box>
        </>
      )}
    </>
  )
}
