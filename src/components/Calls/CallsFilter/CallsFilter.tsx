import { Box } from '@mui/material'
import CallsFilterSearch from './CallsFilterSearch'
import { useTheme } from '@emotion/react'
import CallsFilterSelect from './CallsFilterSelect'

const CallsFilter = () => {
  const { colors } = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        padding: '20px 0',
        color: colors.secondary,
        fontSize: '14px',
      }}
    >
      <CallsFilterSearch />
      <CallsFilterSelect type={'callTypes'} />
      <CallsFilterSelect type={'workers'} />
      <CallsFilterSelect type={'calls'} />
      <CallsFilterSelect type={'sources'} />
      <CallsFilterSelect type={'ratings'} />
      <CallsFilterSelect type={'errors'} />
    </Box>
  )
}

export default CallsFilter
