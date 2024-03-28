import { primaryGradient } from '@/themes'
import { Button, Container, Flex } from '@mantine/core'
import classes from './SearchEngine.module.css'
// import SelectCountry from '../SelectCountry'
// import SelectState from '../SelectState'
// import SelectCarMake from '../SelectCarMake'
import SelectMantine from '../SelectMantine'
import { manufacturers } from '@/constants'
import { useCountries } from '@/hooks/useCountries'
import { useStates } from '@/hooks/useStates'
import { useState } from 'react'
import { ICountryProps, IStateProps } from '@/models'
import { useAppContext } from '@/context/AppContext'

// const carMakes = ['Ford', 'Fiat', 'Toyota']
const vehicleTypes = ['Caminhão', 'Carro', 'Ônibus', 'Van', 'Outro']
// const countries = ['Brasil', 'Argentina', 'Chile', 'Uruguai']
// const states = ['SP', 'RJ', 'MG', 'BA']

const SearchEngine = () => {
  // const [selectedCountry, setSelectedCountry] = useState<ICountryProps>()
  // const [selectedState, setSelectedState] = useState<IStateProps>()
  const {
    state: { selectedCountry, selectedState },
    setCurrentCountry,
    setCurrentState,
  } = useAppContext()

  const { countries, isLoadingCountries } = useCountries()
  const { states, isLoadingStates } = useStates(selectedCountry?.id)

  const handleCountryChange = (value: string | null) => {
    if (countries) {
      const country = countries.filter(
        (country) => country.id.toString() === value,
      )[0]
      setCurrentCountry(country)
      // console.log('country', country)
    }
  }

  const handleStateChange = (value: string | null) => {
    if (states) {
      const state = states.filter((state) => state.id.toString() === value)[0]

      console.log('states', state)
      setCurrentState(state)
    }
  }

  return (
    <Container className={classes.container} mb="md" size="100%">
      <Flex
        direction={{
          base: 'column',
          sm: 'row',
        }}
        gap={{
          base: 'sm',
          sm: 'lg',
        }}
        justify="center"
        align={{
          base: 'stretch',
          sm: 'flex-end',
        }}
      >
        <SelectMantine
          label="País"
          placeholder="País"
          data={
            countries
              ? countries.map((country) => {
                  return {
                    label: country.name || '',
                    value: country.id.toString(),
                  }
                })
              : []
          }
          nothingFoundMessage="Nenhum país encontrado"
          disabled={isLoadingCountries}
          value={selectedCountry?.id.toString() || ''}
          onChange={handleCountryChange}
        />
        <SelectMantine
          label="Estado"
          placeholder="Seu estado"
          data={
            states
              ? states.map((state) => {
                  return {
                    label: state.name || '',
                    value: state.id.toString(),
                  }
                })
              : []
          }
          disabled={isLoadingStates}
          maxDropdownHeight={280}
          nothingFoundMessage="Nenhum estado encontrado"
          onChange={handleStateChange}
          value={selectedState?.id.toString() || ''}
        />
        <SelectMantine
          label="Marca do carro"
          placeholder="Ford"
          data={manufacturers}
          nothingFoundMessage="Marca não encontrada"
        />
        <SelectMantine
          label="Tipo de veículo"
          placeholder="Carro"
          data={vehicleTypes}
          nothingFoundMessage="Tipo de veículo não encontrado"
        />
        <Button variant="gradient" gradient={primaryGradient}>
          Procurar por carro
        </Button>
      </Flex>
    </Container>
  )
}

export default SearchEngine
