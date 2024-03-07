'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import classes from './Map.module.css'
import { Container } from '@mantine/core'

const Map = () => {
  return (
    <Container className={classes.container} size="100%">
      <MapContainer
        className={classes.mapContainer}
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '300px' }}
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
  )
}

export default Map
