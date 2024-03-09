import { useForm } from '@mantine/form'

export const useLoginForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value: string) => {
        if (!value) return 'Email é obrigatório'
        if (!value.includes('@')) return 'Email inválido'
        return null
      },

      password: (value: string) => {
        if (!value) return 'Senha é obrigatória'
        if (value.length < 6) return 'Senha deve ter no mínimo 8 caracteres'
        return null
      },
    },
  })

  return form
}
