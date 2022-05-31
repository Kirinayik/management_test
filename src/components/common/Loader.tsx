import { Box, CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '15px 0' }}>
      <CircularProgress />
    </Box>
  )
}

export default Loader
