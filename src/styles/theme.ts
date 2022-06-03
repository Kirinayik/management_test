import { createTheme } from '@mui/material'

export const MUITheme = createTheme({})

export const theme = {
  colors: {
    primary: '#122945',
    secondary: '#5E7793',
    header: '#899CB1',
    accent: '#005FF8',
    'accent-hover': '#0000F4',
    'accent-active': '#274BC8',
    night: '#091336',
    green: '#00C294',
    grey: '#ADBFDF',
    red: '#EA1A4F',
    yellow: '#FFD500',
    white: '#fff',
  },
}

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      header: string
      secondary: string
      accent: string
      'accent-hover': string
      'accent-active': string
      night: string
      green: string
      grey: string
      red: string
      white: string
      yellow: string
    }
  }
}
