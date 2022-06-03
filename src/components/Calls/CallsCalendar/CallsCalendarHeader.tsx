import { Box, IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { FC } from 'react'

type CallsCalendarHeaderProps = {
  month: number
  handleNextMonth: () => void
  handlePrevMonth: () => void
  monthName: string
}

const CallsCalendarHeader: FC<CallsCalendarHeaderProps> = ({
  month,
  handleNextMonth,
  handlePrevMonth,
  monthName,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
      }}
    >
      <IconButton disabled={month === 0} onClick={handlePrevMonth}>
        <ChevronLeftIcon />
      </IconButton>
      <Box sx={{ fontWeight: '700', fontSize: '18px', userSelect: 'none' }}>
        {monthName}
      </Box>
      <IconButton disabled={month === 11} onClick={handleNextMonth}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  )
}

export default CallsCalendarHeader
