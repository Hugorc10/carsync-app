import { Carousel } from '@mantine/carousel'
import { Center, Image } from '@mantine/core'

const images = [
  'https://res.cloudinary.com/dbg670ttr/image/upload/v1709766027/carsync/cars_1.png',
  'https://res.cloudinary.com/dbg670ttr/image/upload/v1709766000/carsync/cars_2.png',
]

const Slider = () => {
  return (
    <Carousel withIndicators loop>
      {images.map((image, index) => (
        <Carousel.Slide key={image} mt="2rem">
          <Center
            h={{
              base: 300,
              sm: 400,
              md: 500,
              lg: 600,
              xl: 700,
            }}
            // bg="blue"
          >
            <Image src={image} alt="" />
          </Center>
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

export default Slider
