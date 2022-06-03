import { Box } from '@mui/material'
import CallsFilterSearch from './CallsFilterSearch'
import { useTheme } from '@emotion/react'
import CallsFilterSelect from './CallsFilterSelect'
import CallsFilterSelectMultiple from './CallsFilterSelectMultiple'

const CallsFilter = () => {
  const { colors } = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '20px 0',
        color: colors.secondary,
        fontSize: '14px',
      }}
    >
      <CallsFilterSearch />
      <Box sx={{ display: 'flex', gap: '32px' }}>
        <CallsFilterSelect type={'in_out'} />
        <CallsFilterSelectMultiple type={'from_type[]'} />
        <CallsFilterSelectMultiple type={'sources[]'} />
        <CallsFilterSelectMultiple type={'errors[]'} />
      </Box>
    </Box>
  )
}

export default CallsFilter
