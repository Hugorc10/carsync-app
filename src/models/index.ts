export interface ISignUpForm {
  email: string
  password: string
  confirmPassword: string
  terms: boolean
}

export interface ICountryProps {
  id: number
  created_at: string
  name?: string
  latitude?: number
  longitude?: number
}

export interface IStateProps extends ICountryProps {}
