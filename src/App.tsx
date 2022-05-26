import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { Box } from '@mui/material'

function App() {
  return (
    <BrowserRouter>
      <Box display={'flex'}>
        <Navbar />
        <Routes>
          <Route
            path={'/calls'}
            element={<Box sx={{ flexGrow: 1 }}>test</Box>}
          />
          <Route path="*" element={<Navigate to={'/calls'} replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
