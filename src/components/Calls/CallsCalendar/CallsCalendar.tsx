import { CallsCalendarContainer } from '../Calls.styles'
import CallsCalendarHeader from './CallsCalendarHeader'
import { Box, Grid } from '@mui/material'
import { useCalendar } from '../../../hooks/useCalendar'
import CallsCalendarDay from './CallsCalendarDay'
import { useAppSelector } from '../../../store/hooks'

const CallsCalendar = () => {
  const date_start = useAppSelector((state) => state.search.filters.date_start)
  const {
    DAYS_WEEK,
    days,
    startDay,
    MONTH,
    month,
    handlePrevMonth,
    handleNextMonth,
    today,
    year,
  } = useCalendar(new Date(date_start))
  const dateStartMonth = +date_start.split('-')[1]
  const dateStartDay = +date_start.split('-')[2]

  return (
    <CallsCalendarContainer>
      <CallsCalendarHeader
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        monthName={MONTH[month]}
        month={month}
      />
      <Grid container rowSpacing={1}>
        {DAYS_WEEK.map((dayOfWeek, i) => (
          <Grid xs={1.7} item key={i}>
            <Box sx={{ display: 'flex', justifyContent: 'center', userSelect: 'none' }}>
              {dayOfWeek}
            </Box>
          </Grid>
        ))}
        {Array(days[month] + startDay - 1)
          .fill(null)
          .map((_, i) => {
            const dValue = i - (startDay - 2)

            return (
              <Grid
                xs={1.7}
                item
                gap={'5px'}
                key={i + 1}
                sx={{
                  visibility: dValue > 0 ? 'visible' : 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CallsCalendarDay
                  isToday={
                    dValue === today.getDate() && month === today.getMonth()
                  }
                  isActive={
                    dateStartMonth === month + 1 && dateStartDay === dValue
                  }
                  today={today}
                  year={year}
                  month={month}
                  value={dValue}
                />
              </Grid>
            )
          })}
      </Grid>
    </CallsCalendarContainer>
  )
}

export default CallsCalendar
