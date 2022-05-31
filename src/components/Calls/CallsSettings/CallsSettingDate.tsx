import { Box, IconButton } from '@mui/material'
import { useTheme } from '@emotion/react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { declOfNum } from '../../../helpers/declOfNum'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setDayStart } from '../../../store/search/searchState'

const CallsSettingDate = () => {
  const dispatch = useAppDispatch()
  const { date_start: days } = useAppSelector((state) => state.search.filters)
  const { colors } = useTheme()

  const handleAddDays = () => {
    if (days < 6) dispatch(setDayStart(days + 1))
  }
  const handleDelDays = () => {
    if (days > 1) dispatch(setDayStart(days - 1))
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
      <IconButton
        disableRipple
        disabled={days === 1}
        onClick={handleDelDays}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          height: '18px',
          color: colors.primary,
          padding: '0',
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: '18px' }} />
      </IconButton>
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
      <IconButton
        disableRipple
        disabled={days === 6}
        onClick={handleAddDays}
        component={'button'}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          height: '18px',
          padding: '0',
          color: colors.primary,
        }}
      >
        <ChevronRightIcon sx={{ fontSize: '18px' }} />
      </IconButton>
    </Box>
  )
}

export default CallsSettingDate
