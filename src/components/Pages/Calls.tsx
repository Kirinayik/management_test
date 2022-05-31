import { Box, Container } from '@mui/material'
import CallsFilter from '../Calls/CallsFilter/CallsFilter'
import CallsList from '../Calls/CallsList/CallsList'
import CallsSettings from '../Calls/CallsSettings/CallsSettings'

const Calls = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        background: '#F1F4F9',
        height: '100vh',
      }}
      id={'#calls'}
    >
      <Container sx={{ maxWidth: '1440px', paddingBottom: '50px' }}>
        <CallsSettings />
        <CallsFilter />
        <CallsList />
      </Container>
    </Box>
  )
}

export default Calls
