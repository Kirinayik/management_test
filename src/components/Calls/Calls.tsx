import { Box, Container } from '@mui/material'
import { useEffect } from 'react'
import { $api } from '../../http'
import CallsFilter from './CallsFilter/CallsFilter'
import CallsList from './CallsList/CallsList'
import { useAppDispatch } from '../../store/hooks'
import { setList } from '../../store/calls/callsState'
import CallsSettings from './CallsSettings/CallsSettings'

const Calls = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await $api.post('mango/getList?limit=25')
        dispatch(setList(data))
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        background: '#F1F4F9',
        height: '100vh',
      }}
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
