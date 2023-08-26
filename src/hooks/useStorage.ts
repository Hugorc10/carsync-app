'use client'

export const useStorage = () => {
  const getItem = (key: string) => {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null
  }

  const setItem = (key: string, value: string) => {
    return typeof window !== 'undefined'
      ? localStorage.setItem(key, value)
      : null
  }

  const removeItem = (key: string) => {
    return typeof window !== 'undefined' ? localStorage.removeItem(key) : null
  }

  const clear = () => {
    return typeof window !== 'undefined' ? localStorage.clear() : null
  }

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  }
}
