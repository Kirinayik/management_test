import { Box } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { useAppSelector } from '../../../store/hooks'
import { CallsCalendarInfo } from '../Calls.styles'
import { useEffect, useRef, useState } from 'react'
import CallsCalendar from '../CallsCalendar/CallsCalendar'
import { getDefaultDate } from '../../../helpers/getDefaultDate'
import { useCalendar } from '../../../hooks/useCalendar'

const CallsSettingsDate = () => {
  const { date_start } = useAppSelector((state) => state.search.filters)
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<any>(null)
  const MONTH = useCalendar(new Date(date_start)).MONTH
  const monthStart = MONTH[+date_start.split('-')[1] - 1].slice(0, 3)
  const monthEnd = MONTH[+getDefaultDate().dateEnd.split('-')[1] - 1].slice(
    0,
    3
  )

  useEffect(() => {
    const checkIfClickedOutside = (e: globalThis.MouseEvent) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isOpen])

  const handleOpenCalendar = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <Box sx={{ position: 'relative' }} ref={wrapperRef}>
      <CallsCalendarInfo onClick={handleOpenCalendar}>
        <CalendarTodayIcon sx={{ fontSize: '16px' }} />
        <Box
          sx={{
            pointerEvents: 'none',
            userSelect: 'none',
            flexGrow: 1,
            display: 'flex',
            justifyContent:
              monthStart === monthEnd ? 'center' : 'space-between',
            gap: '5px',
            position: 'relative',
          }}
        >
          {monthStart === monthEnd ? (
            <Box>{monthStart}</Box>
          ) : (
            <>
              <Box>{monthStart}</Box>
              <Box>-</Box>
              <Box>{monthEnd}</Box>
            </>
          )}
        </Box>
      </CallsCalendarInfo>
      {isOpen && <CallsCalendar />}
    </Box>
  )
}

export default CallsSettingsDate
