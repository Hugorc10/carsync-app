'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import classes from './Map.module.css'
import { Container, Text } from '@mantine/core'
// import { useLayoutEffect, useState } from 'react'

interface MapProps {
  height?: string
}

const Map = ({ height }: MapProps) => {
  // const [unmountMap, setunmountMap] = useState(false)

  // useLayoutEffect(() => {
  //   setunmountMap(false)
  //   return () => {
  //     setunmountMap(true)
  //   }
  // }, [])

  return (
    <>
      {/* {!unmountMap ? ( */}
      <Container className={classes.container} mb="1rem" size="100%">
        <MapContainer
          className={classes.mapContainer}
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: height || '300px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Nome do Estado</Popup>
          </Marker>
        </MapContainer>
      </Container>
      {/* ) : (
        <Text size="xs">Carregando mapa</Text>
      )} */}
    </>
  )
}

export default Map
