import { Roboto } from 'next/font/google'
// import { createTheme } from '@mui/material'
// import { red } from '@mui/material/colors'
import { MantineGradient } from '@mantine/core'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica Neue', 'sans-serif', 'Arial'],
})

export const primaryGradient: MantineGradient = { from: 'pink', to: 'yellow' }

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, Helvetica Neue, sans-serif',
//   },
// })
