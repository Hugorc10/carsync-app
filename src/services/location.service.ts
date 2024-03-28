import { createClient } from '@/utils/supabase/client'
import { ICountryProps, IStateProps } from '@/models'
// import { Database } from '@/models/supabase'

export const getAllCountriesAsync = async (): Promise<ICountryProps[]> => {
  const supabase = createClient()

  try {
    const { data: countries } = await supabase.from('countries').select('*')

    return countries as ICountryProps[]
  } catch (error) {
    throw new Error('Erro ao buscar países')
  }
}

export const getStatesAsync = async (
  countryId?: number,
): Promise<IStateProps[]> => {
  const supabase = createClient()

  try {
    if (countryId) {
      const { data: states } = await supabase
        .from('states')
        .select('*')
        .eq('country_id', countryId)

      return states as IStateProps[]
    }

    return []
  } catch (error) {
    throw new Error('Erro ao buscar estados')
  }
}
