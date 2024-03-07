import { primaryGradient } from '@/themes'
import { Button, Container, Flex } from '@mantine/core'
import classes from './SearchEngine.module.css'
// import SelectCountry from '../SelectCountry'
// import SelectState from '../SelectState'
// import SelectCarMake from '../SelectCarMake'
import SelectSearch from '../SelectSearch'

const carMakes = ['Ford', 'Fiat', 'Toyota']
const vehicleTypes = ['Caminhão', 'Carro', 'Ônibus', 'Van', 'Outro']
const countries = ['Brasil', 'Argentina', 'Chile', 'Uruguai']
const states = ['SP', 'RJ', 'MG', 'BA']

const SearchEngine = () => {
  return (
    <Container className={classes.container} pb="4rem">
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
        <SelectSearch
          label="País"
          placeholder="Brasil"
          data={countries}
          nothingFoundMessage="Nenhum país encontrado"
        />
        <SelectSearch
          label="Estado"
          placeholder="BA"
          data={states}
          nothingFoundMessage="Nenhum estado encontrado"
        />
        <SelectSearch
          label="Marca do carro"
          placeholder="Ford"
          data={carMakes}
          nothingFoundMessage="Marca não encontrada"
        />
        <SelectSearch
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
