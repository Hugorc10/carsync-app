import { ISignUpForm } from '@/models'
import { UseFormReturnType, useForm } from '@mantine/form'

export const useSignupForm = (): UseFormReturnType<ISignUpForm> => {
  const form = useForm<ISignUpForm>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      terms: true,
    },

    validate: {
      email: (value: string) => {
        if (!value) return 'Email é obrigatório'
        if (!value.includes('@')) return 'Email inválido'
        return null
      },
      password: (value: string) => {
        if (!value) return 'Senha é obrigatória'
        if (value.length < 6)
          return 'Password must be at least 8 characters long'
        return null
      },
      confirmPassword: (value: string) => {
        if (!value) return 'Confirm password is required'
        if (value !== form.values.password) return 'Passwords do not match'
        return null
      },
      terms: (value: boolean) => {
        if (!value) return 'You must accept terms and conditions'
        return null
      },
    },
  })

  return form
}
