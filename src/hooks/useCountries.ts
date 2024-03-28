import { getAllCountriesAsync } from '@/services/location.service'
import { useQuery } from '@tanstack/react-query'

export function useCountries() {
  const {
    data: countries,
    error,
    isLoading: isLoadingCountries,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: getAllCountriesAsync,
  })

  return { countries, error, isLoadingCountries }
}
