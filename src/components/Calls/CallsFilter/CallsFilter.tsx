import { Box } from '@mui/material'
import CallsFilterSearch from './CallsFilterSearch'
import { useTheme } from '@emotion/react'
import CallsFilterSelect from './CallsFilterSelect'
import CallsFilterSelectMultiple from './CallsFilterSelectMultiple'

const CallsFilter = () => {
  const { colors } = useTheme()
  const selectTypes = ['in_out', 'from_type[]', 'sources[]', 'errors[]']

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
        {selectTypes.map((type, i) =>
          type === 'in_out' ? (
            <CallsFilterSelect type={type} key={i} />
          ) : (
            <CallsFilterSelectMultiple type={type} key={i} />
          )
        )}
      </Box>
    </Box>
  )
}

export default CallsFilter
