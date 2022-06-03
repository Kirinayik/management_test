import { Box } from '@mui/material'
import { FC } from 'react'
import { CallsCalendarButton } from '../Calls.styles'
import { useAppDispatch } from '../../../store/hooks'
import { setDayStart } from '../../../store/search/searchState'

type CallsCalendarDayProps = {
  value: number
  year: number
  today: Date
  month: number
  isToday: boolean
  isActive: boolean
}

const CallsCalendarDay: FC<CallsCalendarDayProps> = ({
  month,
  today,
  year,
  value,
  isToday,
  isActive,
}) => {
  const dispatch = useAppDispatch()
  const disabled =
    month > today.getMonth() ||
    (month === today.getMonth() && value > today.getDate())

  const handleDateStart = () => {
    if (!isToday) {
      const formatDate = `${year}-${month < 10 ? 0 : ''}${month + 1}-${
        value < 10 ? 0 : ''
      }${value}`

      dispatch(setDayStart(formatDate))
    }
  }

  return (
    <CallsCalendarButton
      onClick={handleDateStart}
      isActive={isActive}
      isToday={isToday}
      disabled={disabled}
    >
      <Box>{value}</Box>
    </CallsCalendarButton>
  )
}

export default CallsCalendarDay
