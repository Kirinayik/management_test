import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { Box } from '@mui/material'
import Calls from './components/Calls/Calls'

function App() {
  return (
    <BrowserRouter>
      <Box display={'flex'}>
        <Navbar />
        <Routes>
          <Route path={'/mango'} element={<Calls />} />
          <Route path="*" element={<Navigate to={'/mango'} replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
