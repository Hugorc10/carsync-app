import { getStatesAsync } from '@/services/location.service'
import { useQuery } from '@tanstack/react-query'

export function useStates(countryId?: number) {
  const {
    isLoading: isLoadingStates,
    data: states,
    error,
  } = useQuery({
    queryKey: ['states', countryId],
    queryFn: () => getStatesAsync(countryId),
  })

  return { isLoadingStates, states, error }
}
