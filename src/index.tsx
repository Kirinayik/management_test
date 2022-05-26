import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from '@emotion/react'
import { ThemeProvider as MUIProvider } from '@mui/material'
import { MUITheme, theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MUIProvider theme={MUITheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </MUIProvider>
    </Provider>
  </React.StrictMode>
)
