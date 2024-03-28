'use client'

import { ICountryProps, IStateProps } from '@/models'
import { createContext, useCallback, useState, useContext } from 'react'

export interface IAppState {
  selectedCountry: ICountryProps | undefined
  selectedState: IStateProps | undefined
  carBrand: { label: string; value: string }
  selectedVehicleType: { label: string; value: string }
}

interface IAppContext {
  state: IAppState
  setCurrentCountry: (country: ICountryProps) => void
  setCurrentState: (state: IStateProps) => void
  setCurrentCarBrand: (carBrand: { label: string; value: string }) => void
  setCurrentVehicleType: (vehicleType: { label: string; value: string }) => void
}

const AppContext = createContext<IAppContext | undefined>(undefined)

const initialAppState: IAppState = {
  selectedCountry: undefined,
  selectedState: undefined,
  carBrand: { label: '', value: '' },
  selectedVehicleType: { label: '', value: '' },
}

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, setState] = useState<IAppState>(initialAppState)

  const setCurrentCountry = useCallback((country: ICountryProps) => {
    setState((prevState) => ({
      ...prevState,
      selectedCountry: country,
    }))
  }, [])

  const setCurrentState = useCallback((state: IStateProps) => {
    setState((prevState) => ({
      ...prevState,
      selectedState: state,
    }))
  }, [])

  const setCurrentCarBrand = useCallback(
    (carBrand: { label: string; value: string }) => {
      setState((prevState) => ({
        ...prevState,
        carBrand,
      }))
    },
    [],
  )

  const setCurrentVehicleType = useCallback(
    (vehicleType: { label: string; value: string }) => {
      setState((prevState) => ({
        ...prevState,
        selectedVehicleType: vehicleType,
      }))
    },
    [],
  )

  return (
    <AppContext.Provider
      value={{
        state,
        setCurrentCountry,
        setCurrentState,
        setCurrentCarBrand,
        setCurrentVehicleType,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }
  return context
}
