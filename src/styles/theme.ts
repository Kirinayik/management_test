import { createTheme } from '@mui/material'

export const MUITheme = createTheme({})

export const theme = {
  colors: {
    primary: '#122945',
    accent: '#005FF8',
    'accent-hover': '#0000F4',
    'accent-active': '#274BC8',
    night: '#091336',
    green: '#00C294',
    red: '#EA1A4F',
    white: '#fff',
  },
}

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      accent: string
      'accent-hover': string
      'accent-active': string
      night: string
      green: string
      red: string
      white: string
    }
  }
}
