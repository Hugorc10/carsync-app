'use client'

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import classes from './Map.module.css'
import { Container } from '@mantine/core'
import { useAppContext } from '@/context/AppContext'
import { useEffect } from 'react'
// import { useLayoutEffect, useState } from 'react'

interface MapProps {
  height?: string
}

const Map = ({ height }: MapProps) => {
  const {
    state: { selectedCountry, selectedState },
  } = useAppContext()

  const getCordinates = (): [number, number] => {
    if (selectedState) {
      return [selectedState.latitude || 0, selectedState.longitude || 0]
    }

    if (selectedCountry) {
      return [selectedCountry.latitude || 0, selectedCountry.longitude || 0]
    }

    console.log('selectedCountry', selectedCountry)
    console.log('selectedState', selectedState)

    return [7.2154, 1.532]
  }

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
          center={getCordinates()}
          zoom={13}
          style={{ height: height || '300px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <MapMarker
            latitude={getCordinates()[0]}
            longitude={getCordinates()[1]}
            name={selectedState?.name || selectedCountry?.name || ''}
          />
        </MapContainer>
      </Container>
      {/* ) : (
        <Text size="xs">Carregando mapa</Text>
      )} */}
    </>
  )
}

export default Map

interface MapMarkerProps {
  latitude: number
  longitude: number
  name: string
}

const MapMarker = ({ latitude, longitude, name }: MapMarkerProps) => {
  const map = useMap()

  useEffect(() => {
    map.setView([latitude, longitude], 13)
  }, [latitude, longitude])

  console.log('latitude', latitude)
  console.log('longitude', longitude)
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>{name}</Popup>
    </Marker>
  )
}
