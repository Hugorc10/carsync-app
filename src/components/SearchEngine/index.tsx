import { primaryGradient } from '@/themes'
import { Button, Container, Flex } from '@mantine/core'
import classes from './SearchEngine.module.css'
// import SelectCountry from '../SelectCountry'
// import SelectState from '../SelectState'
// import SelectCarMake from '../SelectCarMake'
import MantineSelect from '../MantineSelect'
import { manufacturers } from '@/constants'

// const carMakes = ['Ford', 'Fiat', 'Toyota']
const vehicleTypes = ['Caminhão', 'Carro', 'Ônibus', 'Van', 'Outro']
const countries = ['Brasil', 'Argentina', 'Chile', 'Uruguai']
const states = ['SP', 'RJ', 'MG', 'BA']

const SearchEngine = () => {
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
        <MantineSelect
          label="País"
          placeholder="Brasil"
          data={countries}
          nothingFoundMessage="Nenhum país encontrado"
        />
        <MantineSelect
          label="Estado"
          placeholder="BA"
          data={states}
          nothingFoundMessage="Nenhum estado encontrado"
        />
        <MantineSelect
          label="Marca do carro"
          placeholder="Ford"
          data={manufacturers}
          nothingFoundMessage="Marca não encontrada"
        />
        <MantineSelect
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
