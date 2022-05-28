import { Box } from '@mui/material'
import { useState } from 'react'
import { useTheme } from '@emotion/react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { declOfNum } from '../../../helpers/declOfNum'

const CallsSettingDate = () => {
  const [days, setDays] = useState(1)
  const { colors } = useTheme()

  const handleAddDays = () => setDays(days + 1)
  const handleDelDays = () => {
    if (days > 1) setDays(days - 1)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: '150px',
        color: colors.accent,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        padding: '0 30px',
        position: 'relative',
      }}
    >
      <Box
        onClick={handleDelDays}
        component={'button'}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          height: '18px',
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: '18px' }} />
      </Box>
      <CalendarTodayIcon sx={{ fontSize: '16px' }} />
      <Box
        sx={{
          pointerEvents: 'none',
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {days} {declOfNum(days)}
      </Box>
      <Box
        onClick={handleAddDays}
        component={'button'}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          height: '18px',
        }}
      >
        <ChevronRightIcon sx={{ fontSize: '18px' }} />
      </Box>
    </Box>
  )
}

export default CallsSettingDate
