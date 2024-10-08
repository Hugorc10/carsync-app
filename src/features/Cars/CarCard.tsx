import { currency } from '@/constants'
import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Image,
  Text,
  Title,
} from '@mantine/core'
import { IconManualGearbox, IconUsers } from '@tabler/icons-react'
import { BsFuelPump } from 'react-icons/bs'
import { useDisclosure } from '@mantine/hooks'
import { CardModal } from './cars-modal/CardModal'

export const CarCard = () => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleOpenCarModal = () => {
    open()
  }

  return (
    <>
      <CardModal opened={opened} onClose={close} title="Informações do carro" />
      <Card miw={{ base: '100%', lg: '47%' }}>
        <Flex align="flex-end" justify="space-between">
          <Box>
            <Title order={5}>Toyota Camry 2023</Title>
            <Text c="gray.6">Sedan</Text>
          </Box>
        </Flex>
        <Flex justify="space-between" align="flex-end">
          <Image
            maw={{ base: 200, md: 250 }}
            height="150px"
            radius="md"
            my={8}
            src={
              'https://res.cloudinary.com/dicme7cio/image/upload/v1697124203/car-go-rentals/cars/znn2meedol66ikfm5fue.webp'
            }
            alt="Toyota Camry"
          />

          <Box>
            <Box style={{ textAlign: 'center' }} my="md">
              {/* Status renderer */}
            </Box>

            <Button variant="gradient" mb="xs" onClick={handleOpenCarModal}>
              Ver informações
            </Button>
          </Box>
        </Flex>
        <Divider />
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={{ base: 4, md: 16 }}>
            <Flex my={8} align="center" title="seating capacity">
              <IconUsers size="16px" color="gray" />
              <Text c="gray.6" size="sm" mx={4}>
                {5}
              </Text>
            </Flex>
            <Flex my={8} align="center" title="transmission">
              <IconManualGearbox size="16px" color="gray" />
              <Text c="gray.6" size="sm" mx={4}>
                {'Automatico'}
              </Text>
            </Flex>
            <Flex my={8} align="center" title="Fuel type">
              <BsFuelPump size="16px" color="gray" />
              <Text c="gray.6" size="sm" mx={4}>
                {'Gasolina'}
              </Text>
            </Flex>
          </Flex>

          <Flex align="flex-end">
            <Text fw="bold" size="lg">
              {currency}
              {300}
            </Text>
            <Text size="xs">/day</Text>
          </Flex>
        </Flex>
      </Card>
    </>
  )
}
